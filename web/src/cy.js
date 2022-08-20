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

import { state } from './state/state.js'

export var cy, eh, elements


// let sortAlgos = ['grid', 'circle', 'concentric', 'random', 'dagre', 'klay', 'cose-bilkent' ]

export function Graph() {
    return {
        oncreate: vnode => {
            console.log('cy init')
            cy = cytoscape({
                container: vnode.dom,
                style: style,
                ...state.cy
            })

            // context menu decleared here ( although not referenced )
            let menu = cy.cxtmenu(menuOptions)

            // enables edge handles extension
            eh = cy.edgehandles({
                preview: true,
                edgeParams: function(sourceNode, targetNode) {
                    return {
                        source: sourceNode.id(),
                        target: targetNode.id(),
                    }
                }
            })

            cy.add({ data: { id: id(), name: 'moe', x: window.innerWidth / 2, y: window.innerHeight / 2 } }).on('tap', function(e) { orderRadially() })
            cy.add(
                cy.add({ data: { id: id(), name: 'node', x: window.innerWidth / 2, y: window.innerHeight / 2 } }).on('tap', function(e) { cy.add(newNode(Date(), e)) })
            )
            orderRadially()
        },
        view: vnode => {
            return m('.graph', {}, )
        }
    }
}