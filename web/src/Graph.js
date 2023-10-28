import m from 'mithril'
import render from 'mithril-node-render'

import cytoscape from 'cytoscape'
import edgehandles from 'cytoscape-edgehandles'
cytoscape.use(edgehandles)
import dagre from 'cytoscape-dagre'
cytoscape.use(dagre)
import klay from 'cytoscape-klay'
cytoscape.use(klay)
import coseBilkent from 'cytoscape-cose-bilkent'
cytoscape.use(coseBilkent)
import cxtmenu from 'cytoscape-cxtmenu'
cytoscape.use(cxtmenu)

import { style } from './style.js'
import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'

import { menuOptions } from './CtxMenu'
import { moedata, id, newNode } from './Moe'
import { testPosition, orderRadially, node, edge, graph } from './Collections'

export var cy, eh, elements

let cyGraph
let isReadyToAddNodes = false
let sortAlgos = [
  'grid',
  'circle',
  'concentric',
  'random',
  'dagre',
  'klay',
  'cose-bilkent',
]

export function Graph() {
  return {
    oncreate: vnode => {
      console.log('cy init')
      cy = cytoscape({
        container: vnode.dom,
        elements: moedata,
        // layout: {
        //        name: 'circle',
        //      },
        style: style,
      })
      let menu = cy.cxtmenu(menuOptions)

      cy.add({
        data: {
          id: id(),
          name: 'moe',
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
        },
      }).on('tap', function (e) {
        orderRadially()
      })
      cy.add(
        cy
          .add({
            data: {
              id: id(),
              name: 'node',
              x: window.innerWidth / 2,
              y: window.innerHeight / 2,
            },
          })
          .on('tap', function (e) {
            cy.add(newNode(Date(), e))
          })
      )
      orderRadially()

      //TODO: temp solution for now to get the graph from the url
      isReadyToAddNodes = true
      urlToGraph(window.location.href).then(urlGraph => {
        cyGraph = urlGraph
        m.redraw(true)
      })
    },
    view: vnode => {
      // Check if cy is ready and if the graph is populated
      if (isReadyToAddNodes && cyGraph) {
        cy.elements().remove()
        // loop through nodes and edges and add them to cy using cy.add
        for (let nodeId in cyGraph.nodes) {
          let node = cyGraph.nodes[nodeId]
          cy.add({
            data: {
              id: node.id,
              name: node.label.toString(),
              x: window.innerWidth / 2,
              y: window.innerHeight / 2,
            },
          })
        }
        console.log('cy number of nodes: ' + cy.nodes().length)
        for (let edgeId in cyGraph.edges) {
          let edge = cyGraph.edges[edgeId]
          cy.add({
            data: {
              id: id(),
              source: edge.source,
              target: edge.target,
            },
          })
        }
        console.log('cy number of edges: ' + cy.edges().length)
        // apply the grid layout
        cy.layout({
          name: 'dagre',
          padding: 5,
          animate: true,
          nodeDimensionsIncludeLabels: true,
        }).run()
        isReadyToAddNodes = false
      } else {
        // Check which object is not ready
        if (!cy) console.log('cy not defined yet')
        if (!cyGraph) console.log('cyGraph not populated yet')
      }

      return m('.graph', {})
    },
  }
}

export function Selector() {
  return {
    view: vnode => {
      return [
        m('label.formlabel', { for: vnode.attrs.name }, vnode.attrs.text),
        m(
          'select',
          vnode.attrs,
          vnode.children.map(c => {
            return m('option', { value: c }, c)
          })
        ),
        m('br'),
      ]
    },
  }
}

export function GraphSelector() {
  return {
    view: vnode => {
      return [
        m(
          Selector,
          {
            oninput: e => {
              let layout = cy.layout({
                name: e.target.value,
                padding: 5,
                animate: true,
                nodeDimensionsIncludeLabels: true,
              })
              layout.run()
            },
          },
          sortAlgos
        ),

        m(Graph),
      ]
    },
  }
}

async function urlToGraph(url) {
  console.log('Start urlToGraph:')

  // Get graph from codecarto
  let urlAddress = url
  urlAddress = urlAddress.replace('http://localhost:5000/#!/graph?url=', '')
  console.log(urlAddress)
  const codecartoAPI = `http://localhost:2000/polygraph/url_to_json?file_url=${urlAddress}`
  console.log(codecartoAPI)

  // Call codecarto API
  let CCgraph
  const response = await fetch(codecartoAPI)
  console.log(response)

  // Check if response is ok
  if (response.ok) {
    const responseData = await response.json()
    console.log(responseData)
    if (responseData.status == 200) {
      CCgraph = responseData.results
    } else {
      console.log('Error with response data')
    }
  } else {
    console.log('Error with response')
  }

  // Return graph
  console.log(CCgraph)
  console.log('End urlToGraph:')
  return CCgraph
}
