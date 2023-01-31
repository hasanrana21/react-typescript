interface IButton {
  label: string;
  addTask: () => void;
}

const UiButton = ({ label, addTask }: IButton) => {
  return (
    <button
      onClick={addTask}
      className="bg-yellow-500 px-8 h-12 text-lg rounded-lg text-white"
    >
      {label}
    </button>
  );
};

export default UiButton;
