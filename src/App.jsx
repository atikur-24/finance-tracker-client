import HeroSection from "./HeroSection";
import TransactionBoard from "./transaction/TransactionBoard";

function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <TransactionBoard />
      </main>
    </>
  );
}

export default App;
