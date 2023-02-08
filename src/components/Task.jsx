import React, { useContext } from "react";

// react icons
import { contextApi } from "../state/context";
import { AiFillDelete } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";

const Task = ({ tasks }) => {
  const { dispatch } = useContext(contextApi);

  return (
    <section className="flex justify-between items-center gap-4 bg-white rounded-lg py-3 px-4 my-6">
      <h1
        className={`${
          tasks.category === "Completed" ? "line-through text-black/50" : ""
        }`}
      >
        {tasks.task}
      </h1>
      <div className="flex gap-3 text-xl">
        <BsCheck2All
          onClick={() => {
            tasks.category === "Incomplete"
              ? dispatch({ type: "Completed_Task", payload: tasks.task })
              : dispatch({ type: "Incomplete_Task", payload: tasks.task });
          }}
          className={` ${
            tasks.category === "Completed" ? "text-green-600" : ""
          } cursor-pointer`}
        />
        <AiFillDelete
          onClick={() => {
            dispatch({ type: "Delete_Task", payload: tasks.task });
          }}
          className="text-red-600 cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Task;
