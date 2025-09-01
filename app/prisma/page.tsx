import React from "react";
import prisma from "@/lib/prisma";

const getAllTasks = async () => {
  // await prisma.task.update({
  //   where: {
  //     id: "03d8a33b-7af3-492e-bc81-06c7854b6543",
  //   },
  //   data: {
  //     content: "Buy milk completed",
  //   },
  // });

  // await prisma.task.delete({
  //   where: {
  //     id: "03d8a33b-7af3-492e-bc81-06c7854b6543",
  //   },
  // });

  const allTasks = await prisma.task.findMany();
  return allTasks;
};

const Prisma = async () => {
  const tasks = await getAllTasks();
  return (
    <>
      <h1 className="text-7xl">Tasks</h1>
      {tasks?.map((task) => (
        <h1 key={task.id} className="text-xl py-2">
          {task.content}
        </h1>
      ))}
    </>
  );
};

export default Prisma;
