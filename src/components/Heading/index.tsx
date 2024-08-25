import React from 'react';

const sizes = {
  textxs: 'text-[14px] font-medium not-italic',
  heading1: 'text-[18px] font-semibold',
  heading2: 'text-[36px] font-bold md:text-[34px] sm:text-[32px]',
  heading3: 'text-[24px] font-semibold md:text-[22px]',
  heading4: 'text-[44px] font-semibold md:text-[40px] sm:text-[34px]',
  heading5: 'text-[50px] font-semibold md:text-[46px] sm:text-[40px]',
  heading6: 'text-[60px] font-bold md:text-[52px] sm:text-[46px]',
  heading7: 'text-[80px] font-bold md:text-[48px]',
};
const colors = {
  dark: 'text-gray-900',
  white: 'text-white-a700',
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
  color: keyof typeof colors;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = '',
  size = 'heading1',
  as,
  color = 'white',
  ...restProps
}) => {
  const Component = as || 'h6';

  return (
    <Component className={`${colors[color]} font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
