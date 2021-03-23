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

export var cy, eh, elements
let data = [
	{ data: { id: 'a' } },
	{ data: { id: 'b' } },
	{ data: {
			id: 'ab',
			source: 'a',
			target: 'b'
		}
	}
]
for (var i = 0; i < 10; i++) {
	data.push({
		data: { id: 'node' + i }
		}
	)
	let source = 'node' + i;
	data.push({
			data: {
					id: 'edge' + i,
					source: source,
					target: (i % 2 == 0 ? 'a' : 'b')
			}
	})
}

export function Graph() {

  return {
    oncreate: vnode => {
			console.log('cy init')
      cy = cytoscape({
        container: vnode.dom,
        elements: data,
        layout: {
               name: 'circle',
             },
        style: style,
      })
			let menu = cy.cxtmenu(menuOptions)
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
				}, ['grid', 'circle', 'concentric', 'random', 'dagre', 'klay', 'cose-bilkent' ]),

				m(Graph)
			]
    }
  }
}
