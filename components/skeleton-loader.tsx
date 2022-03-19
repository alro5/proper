import classNames from "classnames";

export interface SkeletonLoaderProps {
  height?: number;
  width?: number;
  className?: string;
}

export function SkeletonLoader(props: SkeletonLoaderProps): JSX.Element {
  const { height, width, className } = props;

  const classes = classNames("skeleton-loader", className);

  return <span style={{ height, width }} className={classes}></span>;
}
