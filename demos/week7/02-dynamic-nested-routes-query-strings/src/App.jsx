import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { Routes, Route } from "react-router";
import UserProfile from "./components/UserProfile";
import CompanyInfo from "./components/CompanyInfo";
import Reviews from "./components/Reviews";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="company-info" element={<CompanyInfo />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile/:username" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
