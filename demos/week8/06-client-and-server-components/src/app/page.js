//server component by default
//task: render data

import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <NavBar />
      <Sidebar />
      <Main />
      <Main />
      <Main />
    </>
  );
}
