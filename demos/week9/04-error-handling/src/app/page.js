import Image from "next/image";
import rollercoasters from "@/../public/images/rollercoasters-hero.jpg";

export default function HomePage() {
  return (
    <div>
      <h1>Manny&apos;s Rollercoasters</h1>
      <h2>Have fun!</h2>
      {/* this image src is stored in the public folder */}
      <Image
        src={rollercoasters}
        alt="a rollercoaster full of excited people"
        width={500}
        height={200}
      />
      {/* for remote images, we need to give hosts permission to send a response to our app --> add a remotePattern to the next.config.js file */}
      <Image
        src={
          "https://images.unsplash.com/photo-1552910919-96dd34d2c4e0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="a rollercoaster full of excited people"
        width={500}
        height={200}
      />
    </div>
  );
}
