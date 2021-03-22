import m from 'mithril'
import { Layout } from './Menu'
import cytoscape from 'cytoscape'
import edgehandles from 'cytoscape-edgehandles'
cytoscape.use( edgehandles )
import dagre from 'cytoscape-dagre'
cytoscape.use( dagre )
import klay from 'cytoscape-klay'
cytoscape.use( klay )
import coseBilkent from 'cytoscape-cose-bilkent'
cytoscape.use( coseBilkent )
import { style } from './style.js'
import './style.css'

let cy, eh, elements

export function Graph() {
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
	console.log('data', data)
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
    },
    view: vnode => {
      return m('.graph', {}, )
    }
  }
}

export function Button() {
  return {
    view: vnode => {
      return m('input[type=submit].button', vnode.attrs, vnode.children)
    }
  }
}

export function Home() {
	return {
		view: vnode => {
			return m('moe')
		}
	}
}


m.route(document.body, "/", {
  '/': { render: () => m(Layout, m(Home))},
	'/graph': { render: () => m(Layout, m(Graph))},
})
