import HeroSection from "./HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TransactionBoard from "./transaction/TransactionBoard";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <TransactionBoard />
      </main>
      <Footer />
    </>
  );
}

export default App;
