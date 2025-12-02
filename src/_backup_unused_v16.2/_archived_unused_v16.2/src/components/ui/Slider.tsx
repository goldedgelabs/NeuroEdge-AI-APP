'use client';
import React from 'react';

export interface SliderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Slider = React.forwardRef<HTMLElement, SliderProps>(function Slider(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Slider" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Slider;
