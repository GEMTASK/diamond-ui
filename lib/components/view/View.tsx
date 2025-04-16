import clsx from "clsx";

import { Delegate } from "../../types/Delegate";
import { Padding } from "../../types/Padding.ts";
import { Spacing } from "../../types/Spacing.ts";
import { Align } from "../../types/Align.ts";
import { Color } from "../../types/Color.ts";

import viewStyles from "./View.module.scss";
import paddingStyles from "../../styles/padding.module.scss";
import spacingStyles from "../../styles/spacing.module.scss";
import alignHorizontalStyles from "../../styles/alignHorizontal.module.scss";
import alignVerticalStyles from "../../styles/alignVertical.module.scss";
import fillColorStyles from "../../styles/fillColor.module.scss";
import cornerRadiusStyles from "../../styles/cornerRadius.module.scss";
import cursorStyles from "../../styles/cursor.module.scss";

function View<TDelegate extends React.ElementType = "div">({
  as,
  flex,
  wrap,
  horizontal,
  padding,
  spacing,
  align,
  fillColor,
  border,
  borderTop,
  borderBottom,
  borderLeft,
  borderRight,
  cornerRadius,
  cursor,
  className,
  children,
  ...props
}: Delegate<{
  as?: TDelegate;
  flex?: boolean;
  wrap?: boolean;
  horizontal?: boolean;
  padding?: Padding;
  spacing?: Spacing;
  align?: Align;
  fillColor?: Color;
  border?: boolean;
  borderTop?: boolean;
  borderBottom?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  cornerRadius?: "0px" | "4px" | "8px" | "max";
  cursor?: "pointer";
}, TDelegate>) {
  const Component = as ?? "div";

  const viewClassName = clsx(
    viewStyles.View,
    flex && viewStyles.flex,
    wrap && viewStyles.wrap,
    horizontal && viewStyles.horizontal,
    padding && paddingStyles[`_${padding.replace(/ /, "_")}`],
    spacing && spacingStyles[`_${spacing.replace(/ /, "_")}`],
    align && (
      horizontal
        ? alignHorizontalStyles[align.replace(/ /, "_")]
        : alignVerticalStyles[align.replace(/ /, "_")]
    ),
    fillColor && fillColorStyles[fillColor],
    border && viewStyles.border,
    borderTop && viewStyles.borderTop,
    borderBottom && viewStyles.borderBottom,
    borderLeft && viewStyles.borderLeft,
    borderRight && viewStyles.borderRight,
    cornerRadius && cornerRadiusStyles[`_${cornerRadius.replace(/ /, "_")}`],
    cursor && cursorStyles[cursor],
    className
  );

  return (
    <Component className={viewClassName} {...props}>
      {children}
    </Component>
  );
}

export default View;
