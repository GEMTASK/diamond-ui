import clsx from "clsx";

import { Spacing } from "../../types/Spacing.ts";
import { Align } from "../../types/Align.ts";
import { Color } from "../../types/Color.ts";

import viewStyles from "./View.module.scss";
import spacingStyles from "../../styles/spacing.module.scss";
import alignHorizontalStyles from "../../styles/alignHorizontal.module.scss";
import alignVerticalStyles from "../../styles/alignVertical.module.scss";
import fillColorStyles from "../../styles/fillColor.module.scss";

type Delegate<TProps, TDelegate extends React.ElementType, TOmit extends string = ""> =
  TProps & Omit<React.ComponentProps<TDelegate>, keyof TProps | TOmit>;

function View<TDelegate extends React.ElementType = "div">({
  as,
  flex,
  wrap,
  horizontal,
  spacing,
  align,
  fillColor,
  className,
  children,
  ...props
}: Delegate<{
  as?: TDelegate;
  flex?: boolean;
  wrap?: boolean;
  horizontal?: boolean;
  spacing?: Spacing;
  align?: Align;
  fillColor?: Color;
}, TDelegate>) {
  const Component = as ?? "div";

  const viewClassName = clsx(
    viewStyles.View,
    flex && viewStyles.flex,
    wrap && viewStyles.wrap,
    horizontal && viewStyles.horizontal,
    spacing && spacingStyles[`_${spacing.replace(/ /, "_")}`],
    align && (
      horizontal
        ? alignHorizontalStyles[align.replace(/ /, "_")]
        : alignVerticalStyles[align.replace(/ /, "_")]
    ),
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
