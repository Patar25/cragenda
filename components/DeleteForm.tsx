import { deleteTask } from "@/utils/actions";
import React from "react";

type DeleteFormProps = { id: string };

const DeleteForm = ({ id }: DeleteFormProps) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-xs btn-error">delete</button>
    </form>
  );
};

export default DeleteForm;
