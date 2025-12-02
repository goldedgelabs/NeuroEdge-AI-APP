'use client';
import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Card = React.forwardRef<HTMLElement, CardProps>(function Card(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Card" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Card;
