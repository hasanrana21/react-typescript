interface IInput {
  label?: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: string;
  handleChange: (value: string) => void;
}

const UiInput = ({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  handleChange,
}: IInput) => {
  return (
    <div>
      <label htmlFor="name" className="">
        {label}
      </label>
      <br />
      <input
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="border border-gray-500 rounded-lg py-2 px-4 text-lg mt-2"
      />
    </div>
  );
};

export default UiInput;
