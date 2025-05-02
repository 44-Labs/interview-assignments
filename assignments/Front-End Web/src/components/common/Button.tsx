type ButtonProps = {
  className: string;
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button className={`${className} cursor-pointer`} onClick={onClick}>
      {children}
    </button>
  );
};
