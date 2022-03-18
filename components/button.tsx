import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  className?: string;
}

export function Button(props: PropsWithChildren<ButtonProps>): JSX.Element {
  const { children, primary = true, className, ...rest } = props;

  const classes = classNames(
    "font-sans font-bold py-2 px-4 rounded",
    className,
    primary
      ? "bg-blue-500 hover:bg-blue-700 text-white"
      : "text-blue-700 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent"
  );

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
