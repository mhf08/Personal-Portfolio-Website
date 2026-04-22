import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

export type MediaItem = {
  url: string
  type: "image" | "video"
  title?: string
}

interface MediaLightboxProps {
  items: MediaItem[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function MediaLightbox({ items, index, onClose, onNavigate }: MediaLightboxProps) {
  const isOpen = index !== null
  const currentItem = index !== null ? items[index] : null

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (index !== null) {
      onNavigate((index - 1 + items.length) % items.length)
    }
  }

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (index !== null) {
      onNavigate((index + 1) % items.length)
    }
  }

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, index])

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content 
          className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-12 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          onClick={onClose}
        >
          <AnimatePresence mode="wait">
            {currentItem && (
              <motion.div
                key={currentItem.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <div className="relative max-w-full max-h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                  {currentItem.type === "image" ? (
                    <img
                      src={currentItem.url}
                      alt={currentItem.title || "Fullscreen view"}
                      className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain shadow-2xl rounded-sm border border-white/10"
                    />
                  ) : (
                    <div className="aspect-video w-[95vw] md:w-[80vw] max-h-[80vh] md:max-h-[85vh]">
                      <iframe
                        src={currentItem.url}
                        title={currentItem.title || "Video view"}
                        className="w-full h-full border-0 rounded-sm shadow-2xl"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {items.length > 1 && (
                    <>
                      <button
                        onClick={handlePrev}
                        className="absolute left-[-1.5rem] md:left-[-5rem] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-primary text-white p-3 rounded-full transition-all backdrop-blur-md border border-white/20"
                        aria-label="Previous"
                      >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                      </button>
                      <button
                        onClick={handleNext}
                        className="absolute right-[-1.5rem] md:right-[-5rem] top-1/2 -translate-y-1/2 bg-white/10 hover:bg-primary text-white p-3 rounded-full transition-all backdrop-blur-md border border-white/20"
                        aria-label="Next"
                      >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                      </button>
                    </>
                  )}
                  
                  <div className="absolute top-[-3.5rem] right-[-0.5rem] md:right-[-4rem]">
                    <DialogPrimitive.Close className="bg-white/10 hover:bg-destructive text-white p-2.5 rounded-full transition-all backdrop-blur-md border border-white/20">
                      <X className="w-6 h-6" />
                      <span className="sr-only">Close</span>
                    </DialogPrimitive.Close>
                  </div>

                  {currentItem.title && (
                    <div className="absolute bottom-[-3.5rem] left-0 right-0 text-center">
                      <p className="text-white/60 font-serif text-lg tracking-wide">{currentItem.title}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
