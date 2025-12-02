
import React from 'react';
export default function ReactFlow({ children }: any) {
  return <div>{children}</div>;
}
export function addEdge(params: any, edges: any[]) {
  // naive edge adder
  return [...edges, { id: 'e_'+Math.random().toString(36).slice(2,8), ...params }];
}
export const Background = (props:any)=> <div/>;
export const Controls = (props:any)=> <div/>;
export const MiniMap = (props:any)=> <div/>;
export type Node = any;
export type Edge = any;
