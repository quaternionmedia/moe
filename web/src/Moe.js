import { cy } from './Graph'

var globalid = 0;
var globaleid = 0;

export function id() {
  return ++globalid;
}

export function eid() {
  return ++globaleid;
}

export function newNode(name, obj) {
  var d = {group: 'nodes', data: { id: id(), name:name, data:obj}, position:{ x:window.innerWidth/2, y:window.innerHeight/2}}
  return d
}

export function newEdge(sourceid, targetid) {
  var e = {group: 'edges', data: { id: eid(), source:sourceid, target:targetid}}
  return e
}


export var moedata = [
  // newNode('config'),
  // newNode('abstract')
]
