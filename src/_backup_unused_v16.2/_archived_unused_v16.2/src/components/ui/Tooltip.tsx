'use client';
import React from 'react';

export interface TooltipProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Tooltip = React.forwardRef<HTMLElement, TooltipProps>(function Tooltip(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Tooltip" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Tooltip;
