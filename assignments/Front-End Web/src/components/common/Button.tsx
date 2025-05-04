type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className: string;
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ className, children, onClick, type = 'button' }: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-1 px-5 py-2 text-sm font-semibold rounded-lg cursor-pointer ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
