interface ToggleButtonProps {
  label: string;
  name: string;
  onChange?: (name: string, value: boolean) => void;
  checked?: boolean | undefined;
}

export const ToggleButton = ({
  label,
  onChange,
  name,
  checked,
}: ToggleButtonProps) => {
  return (
    <label className=" me-5 cursor-pointer">
      <span className=" block text-sm font-medium leading-6 text-gray-900">
        {label}
      </span>
      <input
        type="checkbox"
        className="sr-only peer"
        name={name}
        checked={checked ? checked : undefined}
        onChange={(e) => onChange(name, e.target.checked)}
      />
      <div className="mt-2 relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-indigo-600 dark:peer-focus:ring-indigo-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-800"></div>
    </label>
  );
};
