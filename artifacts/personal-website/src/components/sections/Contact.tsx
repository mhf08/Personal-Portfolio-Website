import { motion } from "framer-motion";
import { FileText, Mail, MessageSquare } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background relative border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-[0.08] dark:opacity-[0.03] text-foreground pointer-events-none" />
      <div className="container mx-auto px-8 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-8">
            Let's build "The Next Iteration"
          </h3>
          <div className="mb-12 max-w-4xl mx-auto">
            <TextReveal className="text-lg text-muted-foreground font-light leading-relaxed">
              Every great system begins with a single point of data. Whether you're interested in discussing the nuances of supply chain simulations, exploring a potential collaboration, or simply sharing a perspective on the design of the natural world—I'm ready for the next iteration. Reach me out through my email or give your input.
            </TextReveal>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border/50 bg-card text-foreground px-8 py-4 rounded hover:border-primary/50 hover:text-primary transition-colors duration-300 shadow-sm w-full sm:w-auto justify-center group"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-serif tracking-wide">Download Resume</span>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mostofahabibfardin08@gmail.com&su=Inquiry: The Next Iteration"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border/50 bg-card text-foreground px-8 py-4 rounded hover:border-primary/50 hover:text-primary transition-colors duration-300 shadow-sm w-full sm:w-auto justify-center group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-serif tracking-wide">Email Me</span>
            </a>
            <a
              href="https://forms.gle/R1SLkx1BzdezrNJ19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border/50 bg-card text-foreground px-8 py-4 rounded hover:border-primary/50 hover:text-primary transition-colors duration-300 shadow-sm w-full sm:w-auto justify-center group"
            >
              <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-serif tracking-wide">The "Iteration Input"</span>
            </a>
          </div>
        </motion.div>

        {/* Merged Footer Content */}
        <div className="mt-16 pt-10 border-t border-border/50 flex flex-col items-center">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 tracking-tight">
            MHF.
          </h2>

          <div className="flex gap-8 mb-12">
            <a
              href="https://www.linkedin.com/in/mostofahabibfardin/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a
              href="https://www.instagram.com/most.of.a_fardin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all group"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
            </a>
          </div>

          <div className="w-full max-w-md h-px bg-border mb-8" />

          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Mostofa Habib Fardin. Precision & Vision.
          </p>
        </div>
      </div>
    </section>
  );
}
