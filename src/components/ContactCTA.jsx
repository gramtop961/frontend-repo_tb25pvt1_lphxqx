import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-r from-blue-600/20 via-transparent to-orange-500/20 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md sm:p-12"
      >
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">Ready to grow conversions?</h3>
            <p className="mt-2 max-w-xl text-white/70">
              Tell us about your goals. We’ll reply within one business day with a
              clear plan, timeline, and pricing.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md flex-col gap-3 md:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none transition focus:border-blue-400"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-blue-600 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 transition-transform hover:scale-[1.02]"
            >
              Get proposal
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
