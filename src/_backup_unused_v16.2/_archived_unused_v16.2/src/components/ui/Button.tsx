'use client';
import React from 'react';
export const Button = ({ children, className='', ...props }: unknown) => (
  <button className={'px-3 py-2 rounded bg-blue-600 text-white ' + className} {...props}>{children}</button>
);
export default Button;
