'use client';

import React from 'react';
import { cva } from 'class-variance-authority';

const buttonStyles = cva(
  'w-full bg-[#FF0404] h-12 rounded-sm text-white font-semibold cursor-pointer',
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button onClick={onClick} className={buttonStyles()} {...props}>
      {children}
    </button>
  );
}
