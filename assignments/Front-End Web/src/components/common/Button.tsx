type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className: string;
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ className, children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button className={`${className} cursor-pointer`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
