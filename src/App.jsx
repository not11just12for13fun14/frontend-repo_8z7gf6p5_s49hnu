import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CardGrid from './components/CardGrid';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(60%_40%_at_20%_10%,rgba(56,189,248,0.15),transparent),radial-gradient(40%_30%_at_80%_0%,rgba(129,140,248,0.15),transparent)]" />
      <Navbar />
      <Hero />
      <CardGrid />
      <CTA />
    </div>
  );
}

export default App;
