type TTasks = {
  tasks: {
    name: string;
  }[];
  removeItem: (e: number) => void;
};

const Tasks = ({ tasks, removeItem }: TTasks) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div
          key={index}
          className="flex justify-between my-3 border-2 border-gray-300 shadow-lg rounded p-4"
        >
          <h3>{task.name}</h3>
          <span
            onClick={() => removeItem(index)}
            className="text-2xl text-red-500 font-semibold cursor-pointer"
          >
            X
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
