import { motion } from "framer-motion";
import { Rocket, Gauge, MousePointerClick } from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "Built for growth",
    desc: "Launch-ready sites engineered to scale alongside your business goals.",
  },
  {
    icon: Gauge,
    title: "Conversion-first",
    desc: "Every pixel and interaction is optimized to turn interest into action.",
  },
  {
    icon: MousePointerClick,
    title: "Micro-interactions",
    desc: "Delightful details guide users with subtle motion and instant feedback.",
  },
];

export default function ValueProps() {
  return (
    <section id="value" className="relative z-10 mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
          >
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-orange-500 text-white shadow-lg shadow-blue-900/30">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-white/70">{item.desc}</p>
            <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-orange-400 transition-all duration-300 group-hover:w-24" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
