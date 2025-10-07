import SlowComponent from "@/components/SlowComponent";
//in this case, we don't want the whole page to load at once, we want the text content to be rendered for the user while the slow content (images) are loading
//implement a loading state just for the slow content, not the whole page
//we are going to use Suspense

import { Suspense } from "react";

export default function GalleryPage() {
  return (
    <div>
      <h1>Gallery</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, non!</p>
      <ul>
        <li>Author 1</li>
        <li>Author 2</li>
        <li>Author 3</li>
      </ul>
      <Suspense fallback={"Loading all the gallery images..."}>
        {/* the slow component contains all the images in my gallery */}
        <SlowComponent />
      </Suspense>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        unde iure explicabo dolores quam temporibus corporis inventore!
        Repellat, quidem rem!
      </p>
    </div>
  );
}
