import m from 'mithril'
import { Layout } from './Menu'
import './style.css'


export function Home() {
	return {
		view: vnode => {
			return m('moe')
		}
	}
}


m.route(document.body, "/", {
  '/': { render: () => m(Layout, m(Home))},
})
