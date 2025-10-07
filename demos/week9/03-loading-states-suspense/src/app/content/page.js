import SlowComponent from "@/components/SlowComponent";

export default function ContentPage() {
  return (
    <div>
      <h1>Content page</h1>
      <p>Super long and heavy content</p>
      <p>It will take foreeeeeeeever to load</p>
      <SlowComponent />
    </div>
  );
}
