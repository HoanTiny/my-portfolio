import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "small" | "circle";
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", children, icon, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 font-urbanist font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      default:
        "bg-[var(--gradient-primary)] text-white rounded-[15px] px-6 py-[17px] text-[14px] tracking-[0.28px] hover:opacity-90",
      outline:
        "bg-transparent border border-[var(--theme-primary-1)] text-[var(--foreground)] dark:text-[var(--neutral-0)] rounded-[15px] px-6 py-[17px] text-[14px] tracking-[0.28px] hover:bg-[var(--theme-primary-1)] hover:text-white",
      small:
        "font-dm-mono font-normal text-[var(--neutral-300)] text-[16px] leading-[1.5] hover:text-[var(--foreground)]",
      circle:
        "border border-[var(--neutral-800)] dark:border-[var(--neutral-600)] rounded-[50px] w-12 h-12 p-0 hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white group",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
        {icon && (
          <span className="flex items-center justify-center">{icon}</span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

// Specific button components from design system
export const ButtonDefault: React.FC<ButtonProps> = ({
  children = "Download CV",
  icon,
  ...props
}) => (
  <Button variant="default" icon={icon} {...props}>
    {children}
  </Button>
);

export const ButtonOutline: React.FC<ButtonProps> = ({
  children = "Hire me",
  icon,
  ...props
}) => (
  <Button variant="outline" icon={icon} {...props}>
    {children}
  </Button>
);

export const ButtonSmall: React.FC<ButtonProps> = ({
  children = "[ Download CV ]",
  icon,
  ...props
}) => (
  <Button variant="small" icon={icon} {...props}>
    {children}
  </Button>
);

export const ButtonCircle: React.FC<ButtonProps> = ({
  icon,
  className,
  ...props
}) => <Button variant="circle" icon={icon} className={className} {...props} />;
