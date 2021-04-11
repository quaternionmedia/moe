import m from 'mithril'
import render from 'mithril-node-render'

import cytoscape from 'cytoscape'
import edgehandles from 'cytoscape-edgehandles'
cytoscape.use( edgehandles )
import dagre from 'cytoscape-dagre'
cytoscape.use( dagre )
import klay from 'cytoscape-klay'
cytoscape.use( klay )
import coseBilkent from 'cytoscape-cose-bilkent'
cytoscape.use( coseBilkent )
import cxtmenu from 'cytoscape-cxtmenu'
cytoscape.use( cxtmenu )

import { style } from './style.js'
import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'

import { menuOptions } from './CtxMenu'
import { moedata, id, newNode } from './Moe'
import { testPosition, orderRadially, node, edge, graph} from './Collections'

export var cy, eh, elements

let sortAlgos = ['grid', 'circle', 'concentric', 'random', 'dagre', 'klay', 'cose-bilkent' ]

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

      cy.add(
        {data: { id:id(), name:'moe', x:window.innerWidth/2, y:window.innerHeight/2}}
          ).on('tap', function(e){orderRadially()})
      cy.add(
        cy.add({data: { id:id(), name:'node', x:window.innerWidth/2, y:window.innerHeight/2}}
      ).on('tap', function(e){cy.add(newNode (Date(), e))})
      )
      orderRadially()
      },
    view: vnode => {
      return m('.graph', {}, )
    }
  }
}


export function Selector() {
  return {
    view: vnode => {
      return [
        m('label.formlabel', { for: vnode.attrs.name }, vnode.attrs.text),
        m('select', vnode.attrs, vnode.children.map(c => {
          return m('option', {value: c}, c)
        })),
        m('br'),
      ]
    }
  }
}

export function GraphSelector() {
  return {
    view: vnode => {
      return [
				m(Selector, {
					oninput: e => {
						let layout = cy.layout({
							name: e.target.value,
							padding: 5,
							animate: true,
							nodeDimensionsIncludeLabels: true,
						})
						layout.run()
					}
				}, sortAlgos),

				m(Graph)
			]
    }
  }
}
