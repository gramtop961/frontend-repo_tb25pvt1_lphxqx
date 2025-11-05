import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
          className="pointer-events-none"
        />
      </div>

      {/* Subtle gradient overlay to harmonize colors without blocking pointer events */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-950/50 via-blue-900/20 to-background/0" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
            <span className="text-xs font-medium tracking-wide text-white/80">
              Ingenifor — Conversion-Focused Web Design
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl"
          >
            Minimal design. Maximum conversions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-4 max-w-xl text-base text-white/80 sm:text-lg"
          >
            We craft fast, focused experiences that turn visitors into customers —
            powered by clean aesthetics, micro-interactions, and relentless
            clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-3 text-white shadow-lg shadow-blue-900/30 transition-transform duration-200 hover:scale-[1.03]"
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-md transition-colors hover:bg-white/10"
            >
              See our work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
