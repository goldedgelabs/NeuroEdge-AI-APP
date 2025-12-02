'use client';
import React from 'react';

export interface SwitchProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Switch = React.forwardRef<HTMLElement, SwitchProps>(function Switch(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Switch" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Switch;
