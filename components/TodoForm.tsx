"use client";

import React, { useEffect, useActionState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { createTask, type FormState } from "@/utils/actions";

const initialState: FormState = { message: null, status: 0 };

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "creating" : "create task"}
    </button>
  );
};

export default function TodoForm() {
  const [state, formAction] = useActionState<FormState, FormData>(
    createTask,
    initialState
  );

  useEffect(() => {
    if (state.status === 400 && state.message) toast.error(state.message);
    if (state.status === 200 && state.message) toast.success(state.message);
  }, [state]);

  return (
    <form action={formAction}>
      <div className="join w-full mb-8">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
}
