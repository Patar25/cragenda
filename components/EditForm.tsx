import { editTask } from "@/utils/actions";
import React from "react";
import type { Task } from "@prisma/client";

type EditFormProps = {
  task: Task;
};

const EditForm = ({ task }: EditFormProps) => {
  console.log(task);

  const { id, content, completed } = task;
  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-md"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        name="content"
        defaultValue={content}
        required
        className="input input-border w-full"
      />
      <div className="form-control my-4">
        <label
          className="label cursor-pointer flex justify-between"
          htmlFor="completed"
        >
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox-primary checkbox checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-blog btn-sm">
        edit
      </button>
    </form>
  );
};

export default EditForm;
