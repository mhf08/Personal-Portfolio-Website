import { motion } from "framer-motion";

export function Thesis() {
  return (
    <section id="thesis" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10 rounded-full" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">Undergraduate Research</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-6">Thesis: "Synthesizing Systems"</h3>
          <p className="text-xl text-muted-foreground font-light border-l-2 border-primary pl-6 py-2 max-w-3xl">
            Simulation-based study on minimizing the bullwhip effect and improving forecasting under variable lead time and geopolitical instability using machine learning and blockchain.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-xl font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-primary inline-block"></span>
                The AI Engine
              </h4>
              <p className="text-muted-foreground font-light mb-4">Evaluated a diverse matrix of forecasting models against a SARIMAX baseline:</p>
              <ul className="space-y-2 text-sm text-muted-foreground font-light pl-9 list-disc">
                <li>Machine Learning: XGBoost and LightGBM</li>
                <li>Deep Learning: Temporal Fusion Transformers (TFT) for capturing complex temporal dependencies</li>
                <li>Performance: ML models achieved superior Fill Rates and significantly lower Bullwhip Ratios compared to traditional and history-based heuristics, especially during "Geo On" (Geopolitical Disruption) scenarios.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-serif text-foreground mb-4 flex items-center gap-3">
                <span className="w-6 h-px bg-primary inline-block"></span>
                The Blockchain Innovation
              </h4>
              <p className="text-muted-foreground font-light mb-4">Modeled three distinct Blockchain Visibility Modes to transform information sharing:</p>
              <ul className="space-y-2 text-sm text-muted-foreground font-light pl-9 list-disc">
                <li>None (Control): Traditional siloed visibility</li>
                <li>Pipeline Visibility: Shared tracking of transit inventory</li>
                <li>Full Visibility: Complete transparency of demand signals and inventory positions across all actors</li>
                <li>Impact: Full Blockchain visibility consistently reduced the Bullwhip Ratio at Actor 2, stabilizing orders even when lead times followed a high-variance Gamma Distribution.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card border border-border/50 p-8 flex flex-col justify-center"
          >
            <h4 className="text-2xl font-serif text-foreground mb-8 text-center text-primary">The Results</h4>
            
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-primary/30">
                <div className="absolute w-2 h-2 rounded-full bg-primary -left-[4.5px] top-1.5" />
                <h5 className="text-foreground font-medium mb-2">Stability</h5>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  Quantified the impact of disruption on Var(Orders)/Var(Demand), proving that ML-driven forecasting combined with Blockchain-enabled visibility minimizes the "Information Delay" that causes supply chain instability.
                </p>
              </div>
              
              <div className="relative pl-6 border-l border-primary/30">
                <div className="absolute w-2 h-2 rounded-full bg-primary -left-[4.5px] top-1.5" />
                <h5 className="text-foreground font-medium mb-2">Trade-offs</h5>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">
                  Validated the cost-service frontier by comparing Customer Backlog Qty against inventory holding efficiency.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
