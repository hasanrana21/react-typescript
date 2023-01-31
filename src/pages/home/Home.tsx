import { useState } from "react";
import Tasks from "../../components/main/home/Tasks";
import UiButton from "../../components/ui/button/UiButton";
import UiInput from "../../components/ui/input/UiInput";
import "./Home.css";

interface ISetTask {
  name: string;
}
const Home = () => {
  const [task, setTask] = useState<ISetTask>({
    name: "",
  });
  const [allTasks, setAllTasks] = useState<ISetTask[]>([]);
  const handleChange = (e: string) => {
    setTask({ name: e });
  };
  const addTask = () => {
    console.log("ff", task);
    setAllTasks([...allTasks, task]);
    setTask({ name: "" });
  };
  const removeItem = (e: number) => {
    setAllTasks(allTasks.filter((item, index) => e !== index));
  };

  return (
    <div className="header__wrapper">
      <div className="flex items-end justify-center">
        <UiInput
          id="task"
          type="text"
          placeholder="Type Task"
          name="task"
          handleChange={handleChange}
          value={task.name}
        />
        <UiButton addTask={addTask} label="Add" />
      </div>
      <div className="my-10">
        <Tasks tasks={allTasks} removeItem={removeItem} />
      </div>
    </div>
  );
};

export default Home;
