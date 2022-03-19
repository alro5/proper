import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  className?: string;
  size?: "small" | "medium";
}

export function Button(props: PropsWithChildren<ButtonProps>): JSX.Element {
  const {
    children,
    primary = true,
    className,
    size = "medium",
    ...rest
  } = props;

  const classes = classNames(
    "font-sans font-bold px-4 rounded",
    className,
    primary
      ? "bg-blue-500 hover:bg-blue-700 text-white"
      : "text-blue-700 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent",
    size === "small" ? "py-0 h-8 text-sm" : "py-2"
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
