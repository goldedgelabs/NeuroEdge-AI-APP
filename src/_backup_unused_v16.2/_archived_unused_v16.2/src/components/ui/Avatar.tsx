'use client';
import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Avatar = React.forwardRef<HTMLElement, AvatarProps>(function Avatar(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Avatar" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Avatar;
