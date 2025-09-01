// Logo.tsx
// A simple logo component that renders the name "Cragenda" with the first two
// letters styled differently. The "Cr" portion uses a green color to make it
// stand out from the rest of the word.

export default function Logo() {
  return (
    <h1 className="text-4xl font-bold">
      <span className="text-green-500">Cr</span>
      <span className="text-black">agenda</span>
    </h1>
  );
}
