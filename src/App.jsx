import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import WorkShowcase from "./components/WorkShowcase";
import ContactCTA from "./components/ContactCTA";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#070A12] text-white">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-blue-600 to-orange-500" />
            <span className="font-semibold tracking-tight">Ingenifor</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#value">Approach</a>
            <a className="hover:text-white" href="#work">Work</a>
            <a className="hover:text-white" href="#contact">Contact</a>
            <a
              href="#contact"
              className="rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-4 py-2 font-medium text-white shadow-lg shadow-blue-900/30"
            >
              Get proposal
            </a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <Hero />
        <ValueProps />
        <WorkShowcase />
        <ContactCTA />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Ingenifor. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
