//App component
//Component names are capitalised

//basic structure

//imports
import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

export default function App() {
  //JS logic

  return (
    // HTML elements or nested components
    //fragment --> it's an empty HTML tag that we use for nesting purposes
    <>
      {/* we nest components as self-closing elements */}
      <Header />
      <main>
        <MainSection />
        <MainSection />
        <MainSection />
      </main>
      <Footer />
    </>
  );
}
