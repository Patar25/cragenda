// SearchField.tsx
// A controlled input component that allows the user to search for lists.
// The parent component should pass an onSearch callback which receives
// the current query string whenever it changes.

"use client";

import { useState } from "react";

interface SearchFieldProps {
  onSearch: (query: string) => void;
}

export default function SearchField({ onSearch }: SearchFieldProps) {
  const [query, setQuery] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setQuery(value);
    onSearch(value);
  }

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search for a List"
      className="w-full px-3 py-2 border border-gray-300 rounded mb-4"
    />
  );
}
