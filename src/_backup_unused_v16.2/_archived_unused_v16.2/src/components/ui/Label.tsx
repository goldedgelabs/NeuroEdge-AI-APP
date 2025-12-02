'use client';
import React from 'react';

export interface LabelProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Label = React.forwardRef<HTMLElement, LabelProps>(function Label(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Label" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Label;
