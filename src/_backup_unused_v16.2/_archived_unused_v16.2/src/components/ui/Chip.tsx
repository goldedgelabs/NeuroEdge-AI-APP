'use client';
import React from 'react';

export interface ChipProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Chip = React.forwardRef<HTMLElement, ChipProps>(function Chip(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Chip" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Chip;
