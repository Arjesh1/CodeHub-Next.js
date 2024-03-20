interface TextareaProps {
  rows: number;
  placeholderText: string;
  name: string;
  onChange?: (name: string, value: string) => void;
}
export const Textarea = ({
  rows,
  placeholderText,
  name,
  onChange,
}: TextareaProps) => {
  return (
    <div className="mt-2">
      <textarea
        name={name}
        rows={rows}
        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={placeholderText}
        required
        onChange={(e) => {
          if (onChange) onChange(name, e.target.value);
        }}
      ></textarea>
    </div>
  );
};
