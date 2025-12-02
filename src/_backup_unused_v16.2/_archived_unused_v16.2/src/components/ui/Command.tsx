'use client';
import React from 'react';

export interface CommandProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Command = React.forwardRef<HTMLElement, CommandProps>(function Command(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Command" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Command;
