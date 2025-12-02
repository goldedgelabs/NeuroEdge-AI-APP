'use client';
import React from 'react';

export interface ToggleProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Toggle = React.forwardRef<HTMLElement, ToggleProps>(function Toggle(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Toggle" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Toggle;
