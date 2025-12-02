'use client';
import React from 'react';

export interface HoverCardProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const HoverCard = React.forwardRef<HTMLElement, HoverCardProps>(function HoverCard(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="HoverCard" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default HoverCard;
