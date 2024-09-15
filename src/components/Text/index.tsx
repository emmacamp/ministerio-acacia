import React from 'react';

const sizes = {
  textxs: 'text-[15px] font-normal not-italic',
  texts: 'text-[18px] font-normal not-italic',
  textlg: 'text-[20px] font-normal not-italic',
};
const colors = {
  dark: 'text-gray-900',
  white: 'text-white-a700',
};

export type TextProps = Partial<{
  className: string;
  as: any;
  color: keyof typeof colors;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = '',
  as,
  size = 'texts',
  color = 'dark',
  ...restProps
}) => {
  const Component = as || 'p';

  return (
    <Component
      className={`${colors[color]} font-dmsans ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
