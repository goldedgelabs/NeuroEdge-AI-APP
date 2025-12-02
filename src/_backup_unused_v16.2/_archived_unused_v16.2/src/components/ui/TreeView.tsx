'use client';
import React from 'react';

export interface TreeViewProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const TreeView = React.forwardRef<HTMLElement, TreeViewProps>(function TreeView(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="TreeView" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default TreeView;
