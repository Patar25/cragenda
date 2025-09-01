// ListContainer.tsx
// This client component manages the search query state and filters the lists
// accordingly. It also renders a button to create a new list. You can extend
// the onClick handler to open a modal or navigate to a create page.

"use client";

import { useState } from "react";
import SearchField from "@/components/SearchField";
import Lists from "@/components/Lists";
import NewListButton from "@/components/NewListButton";

interface List {
  id: string;
  name: string;
}

interface ListContainerProps {
  lists: List[];
}

export default function ListContainer({ lists }: ListContainerProps) {
  const [query, setQuery] = useState("");

  // Filter lists based on the search query. Case-insensitive match.
  const filteredLists = lists.filter((list) =>
    list.name.toLowerCase().includes(query.toLowerCase())
  );

  function handleSearch(value: string) {
    setQuery(value);
  }

  function handleNewList() {
    // TODO: implement navigation or modal for creating a new list
    console.log("Clicked new list button");
  }

  return (
    <div>
      <SearchField onSearch={handleSearch} />
      <Lists lists={filteredLists} />
      <NewListButton onClick={handleNewList} />
    </div>
  );
}
