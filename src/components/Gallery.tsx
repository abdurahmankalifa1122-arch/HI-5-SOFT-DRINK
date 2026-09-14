import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS, BRAND_CONFIG } from '../data/brandConfig';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Visuals' },
    { id: 'flavors', label: 'HI-5 Flavors' },
    { id: 'collection', label: 'Full Collection' },
    { id: 'brand', label: 'Brand Emblem' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'flavors') return item.category.includes('Bottle');
    if (activeFilter === 'collection') return item.category.includes('Range');
    if (activeFilter === 'brand') return item.category.includes('Identity');
    return true;
  });

  return (
    <section 
      id="gallery" 
      className="py-24 lg:py-32 bg-[#031509] relative border-t border-emerald-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-emerald-900/40 gap-6">
          <div>
            <span className="text-amber-400 font-semibold text-xs uppercase tracking-widest block mb-2">
              Visual Presentation
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              HI-5 BRAND GALLERY
            </h2>
          </div>

          <p className="text-sm sm:text-base text-emerald-200/70 max-w-md">
            Explore the official HI-5 flavor bottle collection: Banana, Coffee, Strawberry, Mojito, Grape, and Pineapple.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-colors ${
                activeFilter === cat.id
                  ? 'bg-amber-400 text-emerald-950 font-bold'
                  : 'bg-emerald-950 text-emerald-200 hover:text-white border border-emerald-800/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-emerald-800/40 aspect-[4/3] flex flex-col justify-end cursor-pointer shadow-lg"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (item.fallbackImage && target.src !== item.fallbackImage) {
                    target.src = item.fallbackImage;
                  } else if (target.src !== BRAND_CONFIG.logoUrl) {
                    target.src = BRAND_CONFIG.logoUrl;
                  }
                }}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                width="400"
                height="300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020e05] via-[#020e05]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="relative p-6 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {item.category}
                </span>
                <h3 className="font-display font-bold text-base text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-emerald-200/80 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative max-w-3xl w-full bg-[#041a0c] border border-emerald-700/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-emerald-800/50 bg-[#021006]">
              <div>
                <h4 className="font-display font-bold text-base text-white">
                  {selectedImage.title}
                </h4>
                <p className="text-xs text-emerald-300/70">
                  {selectedImage.description}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="p-2 text-emerald-300 hover:text-white rounded-full transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative max-h-[70vh] bg-white flex items-center justify-center p-6 overflow-hidden">
              <img
                src={selectedImage.image}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (selectedImage.fallbackImage) {
                    target.src = selectedImage.fallbackImage;
                  }
                }}
                alt={selectedImage.title}
                className="max-h-[60vh] max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
