import { cy } from './Graph'

var globalid = 0;

function id() {
  return ++globalid;
}

export function newNode(name) {
  var d = { data: { id: id(), name:name}}
  return d
}

export var moedata = [
	newNode('moe'),
  newNode('edit'),
  newNode('config'),
  newNode('io'),
  newNode('abstract')
]
