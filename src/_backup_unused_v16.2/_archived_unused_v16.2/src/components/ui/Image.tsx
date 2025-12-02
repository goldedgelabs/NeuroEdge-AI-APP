'use client';
import React from 'react';

export interface ImageProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Image = React.forwardRef<HTMLElement, ImageProps>(function Image(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Image" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Image;
