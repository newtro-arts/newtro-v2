import React from "react";
import Link from "next/link";
import classNames from "classnames";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  isLink?: boolean;
  variant?: "primary" | "secondary" | "tertiary"; 
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  className,
  children,
  isLink = false,
  variant = "primary", 
  ...rest
}) => {
  const baseClass =
    "align-middle leading-3 cursor-pointer";

  const variants = {
    primary:
      "bg-fifth-purple text-fourth-green hover:bg-fourth-green hover:text-primary-dark rounded-tl-cards rounded-br-cards p-buttons",
    secondary:
      "bg-fourth-green text-primary-dark hover:bg-primary-dark hover:text-fourth-green rounded-none py-2 px-4",
    tertiary:
      "bg-primary-dark text-fourth-green hover:bg-fourth-green hover:text-primary-dark",
  };

  const combinedClass = classNames(baseClass, variants[variant], className);

  if (isLink && href) {
    return (
      <Link href={href} {...rest} className={combinedClass}>{children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
