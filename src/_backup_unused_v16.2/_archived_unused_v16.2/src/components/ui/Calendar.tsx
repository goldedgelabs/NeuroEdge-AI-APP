'use client';
import React from 'react';

export interface CalendarProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
}

export const Calendar = React.forwardRef<HTMLElement, CalendarProps>(function Calendar(props, ref) {
  const { children, className, ...rest } = props as any;
  return <div data-shadcn-component="Calendar" ref=ref as any className={className} {...rest}>{children}</div>;
});

export default Calendar;
