'use client';
import React from 'react';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(function Footer(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Footer" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Footer;
