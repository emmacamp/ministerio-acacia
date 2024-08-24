import React from 'react';

const sizes = {
  textxs: 'text-[15px] font-normal not-italic',
  texts: 'text-[18px] font-normal not-italic',
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = '',
  as,
  size = 'texts',
  ...restProps
}) => {
  const Component = as || 'p';

  return (
    <Component className={`text-gray-900 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
