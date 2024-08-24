import React from "react";

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  ...restProps
}) => {
  return (
    <button className={`${className} `} {...restProps}>
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };


// import React, { ButtonHTMLAttributes } from 'react';

// import { cn } from '@/lib/utils';

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary' | 'outline';
//   size?: 'small' | 'medium' | 'large';
// }

// const Button: React.FC<ButtonProps> = ({
//   children,
//   className,
//   variant = 'primary',
//   size = 'medium',
//   ...props
// }) => {
//   const baseStyles =
//     'font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

//   const variantStyles = {
//     primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
//     secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
//     outline:
//       'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
//   };

//   const sizeStyles = {
//     small: 'px-3 py-1.5 text-sm',
//     medium: 'px-4 py-2 text-base',
//     large: 'px-6 py-3 text-lg',
//   };

//   return (
//     <button
//       className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
