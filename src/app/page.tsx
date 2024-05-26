import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/fb6b61c8-0357-442b-b803-abbba02a70b2-fg65q1.jpg",
  "https://utfs.io/f/2adc63b9-0f1a-49c4-9ab6-e48ff97955ee-lwbpxt.webp",
  "https://utfs.io/f/da0f308c-9d25-4a5d-8d55-3993b49f2621-mwmgsg.webp",
  "https://utfs.io/f/bf2b5a97-8523-46fe-a388-26d49a5bf074-dk1xgu.png",
]

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{[...mockImages, ...mockImages, ...mockImages].map(
        ({ id, url }) => <div key={id} className="w-48"><img src={url} /></div>
      )}</div>
    </main>
  );
}
