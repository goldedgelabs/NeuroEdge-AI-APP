'use client';
import React from 'react';

export interface AccordionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Accordion = React.forwardRef<HTMLElement, AccordionProps>(function Accordion(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Accordion" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Accordion;
