import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ id: string }> };

const SingleTodoPage = async ({ params }: PageProps) => {
  const { id } = await params;
  const task = await getTask(id);
  if (!task) notFound();

  return (
    <>
      <div className="mb-16">
        <Link href="/todo-list" className="btn btn-accent">
          Back
        </Link>
      </div>
      <EditForm task={task} />
    </>
  );
};

export default SingleTodoPage;
