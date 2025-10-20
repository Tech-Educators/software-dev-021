import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CountProvider } from "./context/countContext";

export default function App() {
  return (
    <CountProvider>
      <div>
        <Header />
        <Button />
        <Footer />
      </div>
    </CountProvider>
  );
}
