import React from "react";

const sizes = {
  headingxs: "text-[18px] font-semibold",
  headings: "text-[24px] font-semibold md:text-[22px]",
  headingmd: "text-[44px] font-semibold md:text-[40px] sm:text-[34px]",
  headinglg: "text-[50px] font-semibold md:text-[46px] sm:text-[40px]",
  headingxl: "text-[60px] font-bold md:text-[52px] sm:text-[46px]",
  heading2xl: "text-[36px] font-bold md:text-[34px] sm:text-[32px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "headingxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-a700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
