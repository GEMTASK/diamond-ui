type Delegate<TProps, TDelegate extends React.ElementType, TOmit extends string = ""> =
  TProps & Omit<React.ComponentProps<TDelegate>, keyof TProps | TOmit>;

export {
  type Delegate
};
