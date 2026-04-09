import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

type GalleryItem = {
  id: number;
  title: string;
  category: "Certificates" | "Events & Participation";
  image: string;
  caption?: string;
};

const filters = ["All", "Certificates", "Events & Participation"] as const;

const galleryItems: GalleryItem[] = [
  {
    id: 2,
    title: "Full Stack Bootcamp Certificate",
    category: "Certificates",
    caption: "Completion of advanced MERN certification",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f9d21a1c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Hackathon Winner 2024",
    category: "Events & Participation",
    caption: "3rd place for real-time collaboration app",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Java Advanced Track",
    category: "Certificates",
    caption: "Spring + Microservices certification",
    image:
      "https://images.unsplash.com/photo-1581092333168-508c3cc89b34?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Open Source Talk",
    category: "Events & Participation",
    caption: "Speaker at local developer meetup",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 8,
    title: "Cloud Security Certificate",
    category: "Certificates",
    caption: "AWS certified cloud practitioner exam",
    image:
      "https://images.unsplash.com/photo-1532619187603-188c98f94f34?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 10,
    title: "Cybersecurity Certificate",
    category: "Certificates",
    caption: "Issued by Skill India Digital Hub in July 2025",
    image:
      "https://images.unsplash.com/photo-1562072543-d1f4dfb6d397?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 9,
    title: "College Tech Fest",
    category: "Events & Participation",
    caption: "Organized student-led coding challenge",
    image:
      "https://images.unsplash.com/photo-1527694225975-8f7a06aec3a0?auto=format&fit=crop&w=1200&q=80",
  },
];

const certifications = [
  {
    title: "Cybersecurity",
    issuer: "Skill India Digital Hub",
    issued: "July 2025",
  },
];

const containerAnimation: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemAnimation: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } },
};

const buttonAnimation: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]>("All");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const currentItem = filteredItems[selectedIndex] ?? null;

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
      if (event.key === "ArrowRight") setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      if (event.key === "ArrowLeft") setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, filteredItems.length]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const showNext = () => setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
  const showPrevious = () => setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerAnimation}
          className="text-center mb-10"
        >
          <motion.p variants={itemAnimation} className="section-subtitle">
            — Gallery
          </motion.p>
          <motion.h2 variants={itemAnimation} className="section-title">
            Visual Highlights
          </motion.h2>
          <motion.p variants={itemAnimation} className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Explore selected images from projects, certificates, and events. Filter to find inspiration and examples of work, keeping a clean, immersive experience.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerAnimation}
          className="mb-10"
        >
          <motion.div variants={buttonAnimation} className="mb-6 text-center">
            <p className="text-sm uppercase tracking-[0.32em] text-primary/80">My Certifications</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <motion.article
                key={certification.title}
                variants={itemAnimation}
                className="rounded-3xl border border-white/10 bg-card/60 p-6 shadow-xl shadow-black/20 backdrop-blur-sm transition-all duration-300"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-3">
                  {certification.issuer}
                </p>
                <h3 className="text-xl font-semibold leading-tight text-white mb-2">
                  {certification.title}
                </h3>
                <p className="text-sm text-muted-foreground">Issued: {certification.issued}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerAnimation}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              variants={buttonAnimation}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card/60 text-muted-foreground border-border hover:bg-primary/20"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerAnimation}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4"
          >
            {filteredItems.map((item, index) => (
              <motion.article
                key={item.id}
                variants={itemAnimation}
                layout
                className="relative mb-4 overflow-hidden rounded-2xl border border-border/50 bg-card/40 shadow-lg backdrop-blur-sm break-inside-avoid"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="block relative p-0 overflow-hidden"
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 ease-out hover:scale-105"
                    style={{ willChange: "transform" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-left text-white">
                    <h3 className="text-lg font-semibold leading-tight">{item.title}</h3>
                    <p className="text-xs text-white/80 mt-1">{item.caption}</p>
                  </div>
                </button>
                <div className="absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-widest bg-black/60 text-white">
                  {item.category}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxOpen && currentItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative w-[calc(100%-2rem)] max-w-6xl max-h-[90vh]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="w-full h-full max-h-[85vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
                loading="eager"
              />

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-white/10 transition"
                aria-label="Close lightbox"
              >
                <X size={22} />
              </button>

              <button
                onClick={showPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 bg-black/70 text-white hover:bg-white/10 transition"
                aria-label="Previous image"
              >
                <ArrowLeft size={24} />
              </button>

              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 bg-black/70 text-white hover:bg-white/10 transition"
                aria-label="Next image"
              >
                <ArrowRight size={24} />
              </button>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/60 p-3 text-white text-sm">
                <span>{currentItem.title}</span>
                <span>{currentItem.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
