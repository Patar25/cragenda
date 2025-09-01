"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
};

export default Counter;
