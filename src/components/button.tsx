interface ButtonProps {
  buttonText: string;
  type: "cancel" | "submit" | "delete";
  onClick?: () => void;
}

export const Button = ({ buttonText, type, onClick }: ButtonProps) => {
  return (
    <div>
      <button
        className={`rounded-md w-full  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  styles ${type === "submit" ? "bg-indigo-600 focus-visible:outline-indigo-600 hover:bg-indigo-500" : type === "delete" ? "bg-red-600 focus-visible:outline-red-600 hover:bg-red-500" : "bg-slate-600 focus-visible:outline-slate-600 hover:bg-slate-500"}`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};
