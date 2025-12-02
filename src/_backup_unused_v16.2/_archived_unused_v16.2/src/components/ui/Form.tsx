'use client';
import React from 'react';

export interface FormProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Form = React.forwardRef<HTMLElement, FormProps>(function Form(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Form" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Form;
