interface ButtonProps {
  buttonText: string;
  onClick: () => void;
}

export const Button = ({ buttonText, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="rounded-md w-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {buttonText}
      </button>
    </div>
  );
};
