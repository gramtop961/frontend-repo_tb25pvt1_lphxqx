import { motion } from "framer-motion";

const projects = [
  {
    name: "FinIQ Platform",
    tag: "Fintech",
    color: "from-blue-600/90 to-blue-400/90",
    img: "https://images.unsplash.com/photo-1551281044-8b29c07fc8d5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Nova Commerce",
    tag: "Ecommerce",
    color: "from-orange-500/90 to-amber-400/90",
    img: "https://images.unsplash.com/photo-1510511233900-1982d92bd835?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Clarity Health",
    tag: "Healthcare",
    color: "from-blue-500/90 to-cyan-400/90",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WorkShowcase() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Selected work</h2>
        <a href="#contact" className="text-sm font-medium text-orange-300 hover:text-orange-200">
          Work with us →
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg"
          >
            <img src={p.img} alt={p.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className={`inline-flex rounded-full bg-gradient-to-r ${p.color} px-3 py-1 text-xs font-semibold text-white backdrop-blur`}>{p.tag}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{p.name}</h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
