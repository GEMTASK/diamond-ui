import clsx from "clsx";

import { Color } from "../../types/Color.tsx";

import viewStyles from "./View.module.scss";
import fillColorStyles from "../../styles/fillColor.module.scss";

type Delegate<TProps, TDelegate extends React.ElementType, TOmit extends string = ""> =
  TProps & Omit<React.ComponentProps<TDelegate>, keyof TProps | TOmit>;

function View<TDelegate extends React.ElementType = "div">({
  as,
  flex,
  horizontal,
  fillColor,
  className,
  children,
  ...props
}: Delegate<{
  as?: TDelegate;
  flex?: boolean;
  horizontal?: boolean;
  fillColor?: Color;
}, TDelegate>) {
  const Component = as ?? "div";

  const viewClassName = clsx(
    viewStyles.View,
    flex && viewStyles.flex,
    horizontal && viewStyles.horizontal,
    fillColor && fillColorStyles[fillColor],
    className
  );

  return (
    <Component className={viewClassName} {...props}>
      {children}
    </Component>
  );
}

export default View;
