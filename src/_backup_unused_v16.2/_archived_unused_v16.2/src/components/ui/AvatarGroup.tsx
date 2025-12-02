'use client';
import React from 'react';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const AvatarGroup = React.forwardRef<HTMLElement, AvatarGroupProps>(function AvatarGroup(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="AvatarGroup" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default AvatarGroup;
