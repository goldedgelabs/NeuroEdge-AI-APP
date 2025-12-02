'use client';
import React from 'react';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const RadioGroup = React.forwardRef<HTMLElement, RadioGroupProps>(function RadioGroup(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="RadioGroup" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default RadioGroup;
