import { useContext, useEffect, useState } from "react";
import Task from "./components/Task";
import { contextApi } from "./state/context";

function App() {
  const [input, setInput] = useState("");
  const {
    state: { tasks },
    dispatch,
  } = useContext(contextApi);
  const [category_data, setCategory_data] = useState([]);
  const [name, setName] = useState("All");

  // set data to tasks when state changes
  useEffect(() => {
    setCategory_data(tasks);
    setName("All");
  }, [tasks]);

  // handle submit button
  const handleData = (e) => {
    e.preventDefault();
    input !== "" && dispatch({ type: "Add_Task", payload: input });
    setInput("");
  };

  // data change according to category
  const handleCategory = (cat) => {
    setCategory_data([]);
    cat === "All" && setCategory_data(tasks);
    if (cat === "Incomplete" || cat === "Completed") {
      tasks.map((item) => {
        item.category === cat && setCategory_data((prev) => [...prev, item]);
      });
    }
    setName(cat);
  };

  return (
    <main className="flex flex-col items-center h-screen gap-4 bg-[#f8f8ff] py-10 ">
      <h1 className="font-bold text-4xl text-[#646681] py-4">TODO LIST</h1>

      {/* form section  */}
      <section className="flex justify-between gap-10 w-[40rem] ">
        <form className="flex gap-4">
          <input
            type="text"
            placeholder="Enter the Task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="px-4 border border-[#cccdde] rounded-lg outline-0"
          />
          <button
            className="py-1 px-3 text-[#fff] bg-[#646ff0] rounded-lg"
            type="submit"
            onClick={(e) => handleData(e)}
          >
            Add Task
          </button>
        </form>

        {/* selects options  */}
        <select
          name="category"
          id="category"
          value={name}
          onChange={(e) => handleCategory(e.target.value)}
          className="bg-[#cccdde] outline-0 py-2 px-3 rounded-lg"
        >
          <option value="All">All</option>
          <option value="Incomplete">Incomplete</option>
          <option value="Completed">Completed</option>
        </select>
      </section>

      {/* task section  */}
      <section className="w-[40rem] bg-[#ecedf6] rounded-xl px-6 my-3">
        {category_data.map((item, index) => (
          <Task key={index} tasks={item} />
        ))}
      </section>
    </main>
  );
}

export default App;
