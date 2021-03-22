import m from 'mithril'
import { Layout } from './Menu'
import { GraphSelector } from './Graph'
import './style.css'


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
	'/graph': { render: () => m(Layout, m(GraphSelector))},
})
