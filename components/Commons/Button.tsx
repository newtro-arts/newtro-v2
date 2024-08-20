import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'link';
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyles = "cursor-pointer p-buttons";
  
  const variantStyles = {
    primary: "bg-fourth-green text-primary-dark hover:bg-fifth-purple hover:text-fourth-green rounded-tl-cards rounded-br-cards",
    secondary: "border border-fourth-green hover:text-fourth-green bg-fourth-green hover:bg-primary-dark text-primary-dark",
    link: "text-sm text-blue-500 underline hover:text-blue-700",
  };
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
