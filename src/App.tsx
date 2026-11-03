import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="dark min-h-screen bg-background text-on-surface overflow-x-hidden">
      {/* Atmospheric Background Blobs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary-container/10 blur-[130px] rounded-full" />
        <div className="absolute top-[800px] right-0 w-[400px] h-[400px] bg-tertiary/5 blur-[120px] rounded-full" />
        <div className="absolute top-[2200px] left-[-100px] w-[500px] h-[500px] bg-primary/5 blur-[140px] rounded-full" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-24 max-w-[1200px] mx-auto px-4 md:px-6">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
