"use client";

import InteractiveMap from "./components/InteractiveMap/InteractiveMap";

export default function Home() {
  return (
    <main className="container">
      <div className="container mx-auto p-2 w-auto">
        <InteractiveMap />
      </div>
    </main>
  );
}
