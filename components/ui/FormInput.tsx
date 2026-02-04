"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface FormInputProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> {
  label: string;
  required?: boolean;
  error?: string;
  isTextarea?: boolean;
  rows?: number;
}

export const FormInput = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormInputProps
>(
  (
    { className, label, required, error, isTextarea, rows = 4, ...props },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const inputStyles = cn(
      "w-full bg-[var(--neutral-800)] dark:bg-[var(--neutral-900)] border border-[var(--neutral-600)] dark:border-[var(--border)] rounded-[10px] px-[22px] py-[17px]",
      "font-urbanist font-medium text-[16px] leading-[1.5]",
      "text-[var(--foreground)] placeholder:text-[var(--neutral-400)]",
      "transition-all duration-300",
      "focus:outline-none focus:border-[var(--theme-primary-1)] focus:ring-2 focus:ring-[var(--theme-primary-1)]/20",
      error && "border-[var(--system-danger)]",
      className,
    );

    return (
      <div className="flex flex-col gap-3 w-full">
        <label className="font-urbanist font-medium text-[16px] leading-[1.5] text-[var(--foreground)]">
          {label}
          {required && (
            <span className="text-[var(--theme-primary-1)] ml-1">*</span>
          )}
        </label>

        {isTextarea ? (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={inputStyles}
            rows={rows}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            className={inputStyles}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {error && (
          <p className="text-[var(--system-danger)] text-sm font-urbanist">
            {error}
          </p>
        )}
      </div>
    );
  },
);

FormInput.displayName = "FormInput";

// Checkbox component from design system
export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className,
  ...props
}) => {
  return (
    <label className="inline-flex items-center gap-[6px] cursor-pointer">
      <input
        type="checkbox"
        className="w-[18px] h-[18px] rounded border-2 border-[var(--theme-primary-1)] text-[var(--theme-primary-1)] focus:ring-2 focus:ring-[var(--theme-primary-1)]/20"
        {...props}
      />
      <span className="font-urbanist font-medium text-[14px] leading-[1.5] text-[var(--foreground)] tracking-[0.28px]">
        {label}
      </span>
    </label>
  );
};
