import OpenColor from "../modules/open-color/open-color.js";

const { black, white, ...hues } = OpenColor;

type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

type Theme = "primary" | "select" | "text" | "hilite" | "content" | "panel" | "gutter" | "icon" | "border";

type Color = Theme | "black" | "white" | `${keyof typeof hues}-${Range<0, 10>}`;

export {
  type Color
};
