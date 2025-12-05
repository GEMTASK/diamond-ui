import { JSX } from 'react/jsx-runtime';


declare type Align = AlignStretch | `${AlignVertical} ${AlignHorizontal}`;

declare type AlignHorizontal = "left" | "center" | "right" | "justify";

declare type AlignStretch = "left" | "top" | "right" | "bottom";

declare type AlignVertical = "top" | "middle" | "bottom";

export declare function Button({ ...props }: React.ComponentProps<"button">): JSX.Element;

export declare type Color = Theme | "black" | "white" | `${keyof typeof hues}-${Range_2<0, 10>}`;

export declare type Delegate<TProps, TDelegate extends React.ElementType, TOmit extends string = ""> = TProps & Omit<React.ComponentProps<TDelegate>, keyof TProps | TOmit>;

declare type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N ? Acc[number] : Enumerate<N, [...Acc, Acc["length"]]>;

declare const hues: {
    gray: string[];
    red: string[];
    pink: string[];
    grape: string[];
    violet: string[];
    indigo: string[];
    blue: string[];
    cyan: string[];
    teal: string[];
    green: string[];
    lime: string[];
    yellow: string[];
    orange: string[];
};

export declare function Input({ ...props }: React.ComponentProps<"input">): JSX.Element;

declare type Padding = `${Values}` | `${Values} ${Values}`;

declare type Range_2<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

declare type Spacing = `${Values_2}` | `${Values_2} ${Values_2}`;

declare type Theme = "_primary" | "select" | "text" | "hilite" | "content" | "panel" | "gutter" | "icon" | "border";

declare type Values = "0px" | "4px" | "8px" | "12px" | "16px" | "24px" | "32px";

declare type Values_2 = "0px" | "4px" | "8px" | "12px" | "16px" | "24px" | "32px";

export declare function View<TDelegate extends React.ElementType = "div">({ as, flex, wrap, horizontal, padding, spacing, align, fillColor, border, borderTop, borderBottom, borderLeft, borderRight, cornerRadius, cursor, className, children, ...props }: Delegate<{
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
}, TDelegate>): JSX.Element;

export { }
