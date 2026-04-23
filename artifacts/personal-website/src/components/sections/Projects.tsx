import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, PlayCircle } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { MediaLightbox, MediaItem } from "@/components/ui/MediaLightbox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Smart IoT-Based Ammonia Gas Monitoring System",
    subtitle: "Industrial Safety for Fertilizer Manufacturing",
    description: "In fertilizer plants, Ammonia is a volatile necessity. I co-developed a low-cost, real-time monitoring system to automate safety responses where manual oversight often fails.",
    tech: "MQ-137 (Ammonia) via ADS1115 (16-bit ADC) and DHT22 (Temp/Humidity), ESP-01S (Wi-Fi) streaming to web dashboard, threshold-based logic (30 ppm Ammonia / 30°C) triggering Buzzer & Fan.",
    impact: "Reduced response time to leaks through automated targeted actuation. Created a centralized, auditable data stream. Modular scalability for rapid retrofitting.",
    images: [
      "/images/IoT Poster.png",
      "/images/iot-hardware.jfif"
    ]
  },
  {
    title: "The HydroPedal",
    subtitle: "Pedal Powered Water Pump for Rural Sustainability",
    description: "In many rural agricultural regions, small-scale farmers face a \"fuel-cost trap.\" We engineered the HydroPedal to decouple irrigation from fossil fuels.",
    tech: "Complete 3D assembly in SolidWorks, Ansys Static Structural analysis on frame, CFD for impeller housing optimization, Material selection: AISI 1020 Steel.",
    impact: "Flow rate 25–30 L/min at 20 ft head. 100% reduction in operational fuel costs. Sustainable alternative for independent farmers.",
    images: [
      "/images/hydropedal.jpg",
      "/images/hydropedal2.jpg",
    ]
  },
  {
    title: "Radial Drilling Machine SolidWorks Model",
    subtitle: "Full-Scale Mechanical Assembly & Kinematic Study",
    description: "Engineered a complete, part-by-part digital reconstruction of an industrial radial drilling machine.",
    tech: "50+ individual components in SolidWorks, mechanical mates for vertical arm travel and spindle rotation, Motion Study for kinematic validation, PhotoView 360 renders and exploded-view animations.",
    impact: "100% assembly transparency, no interference detected in final motion simulation.",
    images: [
      "/images/drilling-isometric.jpg",
      "/images/drilling-closeup.jpg"
    ],
    video: "https://youtu.be/9CxBPs1eGwk"
  }
];

function ProjectMediaGallery({ images, video, title, onMediaClick }: { images: string[]; video?: string; title: string, onMediaClick: (idx: number) => void }) {
  const getEmbedUrl = (url: string) => {
    if (url.includes("youtu.be")) {
      const id = url.split("/").pop();
      return `https://www.youtube.com/embed/${id}?autoplay=0&rel=0`;
    }
    if (url.includes("youtube.com")) {
      const id = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${id}?autoplay=0&rel=0`;
    }
    return url;
  };

  const mediaItems = [
    ...images.map(img => ({ type: 'image' as const, url: img })),
    ...(video ? [{ type: 'video' as const, url: getEmbedUrl(video) }] : [])
  ];

  return (
    <div className="relative group/gallery">
      <Carousel className="w-full">
        <CarouselContent>
          {mediaItems.map((item, idx) => (
            <CarouselItem key={idx}>
              <div 
                className="relative aspect-video overflow-hidden border border-border bg-muted/20 flex items-center justify-center cursor-zoom-in group/img"
                onClick={() => onMediaClick(idx)}
              >
                {item.type === 'image' ? (
                  <>
                    {/* Blurred Backdrop */}
                    <img 
                      src={item.url} 
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-110"
                    />
                    
                    {/* Main Image */}
                    <img
                      src={item.url}
                      alt={`${title} — image ${idx + 1}`}
                      className="relative w-full h-full object-contain p-4 z-10 transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </>
                ) : (
                  <div className="absolute inset-0 w-full h-full p-2 pointer-events-none z-10">
                    <iframe
                      src={item.url}
                      title={`${title} Video`}
                      className="w-full h-full border-0 rounded-sm"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/5 group-hover/img:bg-transparent transition-colors duration-300 z-20" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {mediaItems.length > 1 && (
          <div className="flex justify-end gap-2 mt-4">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-border/50 bg-background/50 hover:bg-primary hover:text-white transition-all" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-border/50 bg-background/50 hover:bg-primary hover:text-white transition-all" />
          </div>
        )}
      </Carousel>
    </div>
  );
}

export function Projects() {
  const [lightboxState, setLightboxState] = useState<{items: MediaItem[], index: number | null}>({
    items: [],
    index: null
  });

  const getEmbedUrl = (url: string) => {
    if (url.includes("youtu.be")) {
      const id = url.split("/").pop();
      return `https://www.youtube.com/embed/${id}?autoplay=0&rel=0`;
    }
    if (url.includes("youtube.com")) {
      const id = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${id}?autoplay=0&rel=0`;
    }
    return url;
  };

  const handleMediaClick = (projectIdx: number, mediaIdx: number) => {
    const project = projects[projectIdx];
    const items: MediaItem[] = [
      ...project.images.map(img => ({ type: "image" as const, url: img, title: project.title })),
      ...(project.video ? [{ type: "video" as const, url: getEmbedUrl(project.video), title: project.title }] : [])
    ];
    setLightboxState({ items, index: mediaIdx });
  };

  return (
    <section id="projects" className="py-32 bg-background relative">
      <div className="container mx-auto px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <h2 className="text-sm font-mono tracking-widest text-primary uppercase mb-4">Selected Work</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground">Projects</h3>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 group/project`}
            >
              <div
                className="w-full lg:w-1/2 group-hover/project:scale-[1.02] transition-transform duration-500 ease-out"
              >
                <ProjectMediaGallery 
                  images={project.images} 
                  video={project.video} 
                  title={project.title} 
                  onMediaClick={(mediaIdx) => handleMediaClick(idx, mediaIdx)}
                />
              </div>

              <div
                className="w-full lg:w-1/2 space-y-6"
              >
                <div>
                  <h4 className="text-2xl font-serif text-foreground mb-2 group-hover/project:text-primary transition-colors duration-300">{project.title}</h4>
                  <p className="text-primary font-mono text-sm tracking-wide">{project.subtitle}</p>
                </div>

                <TextReveal className="text-muted-foreground font-light leading-relaxed">
                  {project.description}
                </TextReveal>

                <div className="space-y-4 pt-4 border-t border-border/50">
                  <div>
                    <strong className="text-foreground text-sm uppercase tracking-widest block mb-1">Stack / Engineering</strong>
                    <p className="text-sm text-muted-foreground font-light">{project.tech}</p>
                  </div>
                  <div>
                    <strong className="text-primary text-sm uppercase tracking-widest block mb-1">Impact</strong>
                    <TextReveal className="text-sm text-muted-foreground font-light">
                      {project.impact}
                    </TextReveal>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <MediaLightbox 
        items={lightboxState.items}
        index={lightboxState.index}
        onClose={() => setLightboxState(prev => ({ ...prev, index: null }))}
        onNavigate={(newIdx) => setLightboxState(prev => ({ ...prev, index: newIdx }))}
      />
    </section>
  );
}
