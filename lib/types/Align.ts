type AlignStretch = "left" | "top" | "right" | "bottom";

type AlignVertical = "top" | "middle" | "bottom";
type AlignHorizontal = "left" | "center" | "right" | "justify";

type Align = AlignStretch | `${AlignVertical} ${AlignHorizontal}`;

export {
  type Align
};
