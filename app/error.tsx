"use client";

import React from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorPageProps) {
  return (
    <>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
