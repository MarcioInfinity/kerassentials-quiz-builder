import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const quizButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-kerassentials-yellow text-kerassentials-yellow-foreground hover:bg-kerassentials-yellow-hover font-body font-bold",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-14 px-8 py-4",
        sm: "h-9 rounded-md px-3",
        lg: "h-16 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface QuizButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof quizButtonVariants> {}

const QuizButton = React.forwardRef<HTMLButtonElement, QuizButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(quizButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
QuizButton.displayName = "QuizButton";

export { QuizButton, quizButtonVariants };