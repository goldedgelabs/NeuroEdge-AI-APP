'use client';
import React from 'react';

export interface FileUploadProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const FileUpload = React.forwardRef<HTMLElement, FileUploadProps>(function FileUpload(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="FileUpload" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default FileUpload;
