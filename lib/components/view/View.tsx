import clsx from "clsx";

import viewStyles from "./View.module.scss";

type Delegate<TProps, TDelegate extends React.ElementType, TOmit extends string = ""> =
  TProps & Omit<React.ComponentProps<TDelegate>, keyof TProps | TOmit>;

function View<TDelegate extends React.ElementType = "div">({
  as,
  flex,
  horizontal,
  className,
  children,
  ...props
}: Delegate<{
  as?: TDelegate;
  flex?: boolean;
  horizontal?: boolean;
}, TDelegate>) {
  const Component = as ?? "div";

  const viewClassName = clsx(
    viewStyles.View,
    flex && viewStyles.flex,
    horizontal && viewStyles.horizontal,
    className
  );

  return (
    <Component className={viewClassName} {...props}>
      {children}
    </Component>
  );
}

export default View;
