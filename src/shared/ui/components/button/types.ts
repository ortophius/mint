import { AllHTMLAttributes, HTMLAttributes } from 'react';

export interface CommonButtonProps {
  variant?: 'normal' | 'large',
}

export type ButtonProps = AllHTMLAttributes<HTMLButtonElement> & CommonButtonProps & { type?: "button" | "submit" | "reset" };
export type TextButtonProps = AllHTMLAttributes<HTMLAnchorElement> & CommonButtonProps;
