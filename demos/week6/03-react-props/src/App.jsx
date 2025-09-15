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
        {/* we add props in the same way as we did attributes, in the component instance */}
        <MainSection
          source="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="nature 1"
          content="content 1"
          link="https://unsplash.com/"
        />
        <MainSection
          source="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1274&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="nature 2"
          content="content 2"
          link="https://unsplash.com/"
        />
        <MainSection
          source="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          altText="nature 3"
          content="content 3"
          link="https://unsplash.com/"
        />
      </main>
      <Footer />
    </>
  );
}
