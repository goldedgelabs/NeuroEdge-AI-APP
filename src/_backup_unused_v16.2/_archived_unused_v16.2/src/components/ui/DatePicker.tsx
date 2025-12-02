'use client';
import React from 'react';

export interface DatePickerProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const DatePicker = React.forwardRef<HTMLElement, DatePickerProps>(function DatePicker(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="DatePicker" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default DatePicker;
