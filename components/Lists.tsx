// Lists.tsx
// Renders an unordered list of list items. Each list should have an id and name.

"use client";

interface List {
  id: string;
  name: string;
}

interface ListsProps {
  lists: List[];
}

export default function Lists({ lists }: ListsProps) {
  if (!lists.length) {
    return <p className="text-gray-500">No lists found.</p>;
  }
  return (
    <ul className="space-y-2">
      {lists.map((list) => (
        <li
          key={list.id}
          className="p-3 border border-gray-200 rounded shadow-sm hover:bg-gray-50 transition-colors"
        >
          {list.name}
        </li>
      ))}
    </ul>
  );
}
