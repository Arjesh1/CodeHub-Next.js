interface InputProps {
  label: string;
  name: string;
  placeholderText: string;
  onChange: (name: string, value: string) => void;
}
export const Input = ({
  label,
  name,
  placeholderText,
  onChange,
}: InputProps) => {
  return (
    <div className="col-span-full">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {" "}
        {label}
      </label>
      <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
          <input
            type="text"
            name={name}
            className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={placeholderText}
            onChange={(e) => onChange(name, e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
