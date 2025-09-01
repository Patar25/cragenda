// NewListButton.tsx
// A button component to create a new list. The parent component can pass an
// onClick handler to define what happens when the user clicks on it.

"use client";

interface NewListButtonProps {
  onClick: () => void;
}

export default function NewListButton({ onClick }: NewListButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
    >
      + New List
    </button>
  );
}
