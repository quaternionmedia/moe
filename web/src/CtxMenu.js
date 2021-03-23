import { cy } from './Graph'
import render from 'mithril-node-render'
import m from 'mithril'

export var menuOptions = {
					selector: 'node, edge',

					commands: [
						{
							content: render.sync(m('.material-icons', {}, 'functions')),
							select: function(ele){
								console.log( ele.id() );
							},
						},

						{
							content: render.sync(m('.material-icons', {}, 'save')),
							select: function(ele){
								console.log( ele.data('name') );
							},
						},

						{
							content: render.sync(m('.material-icons', {}, 'swap_horiz')),
							select: function(ele){
								console.log( ele.data('io') );
							},
						},

						{
							content: 'Text',
							select: function(ele){
								console.log( ele.position() );
							},
							enabled: false

						}
					]
				}
