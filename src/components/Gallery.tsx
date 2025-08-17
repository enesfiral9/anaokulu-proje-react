import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Çocuklar sanat etkinliği yaparken',
      category: 'Sanat'
    },
    {
      src: 'https://images.pexels.com/photos/8613102/pexels-photo-8613102.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Sınıf ortamında eğitim',
      category: 'Eğitim'
    },
    {
      src: 'https://images.pexels.com/photos/8613111/pexels-photo-8613111.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Müzik dersi',
      category: 'Müzik'
    },
    {
      src: 'https://images.pexels.com/photos/8613315/pexels-photo-8613315.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Kitap okuma zamanı',
      category: 'Okuma'
    },
    {
      src: 'https://images.pexels.com/photos/8613318/pexels-photo-8613318.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Grup etkinliği',
      category: 'Sosyal'
    },
    {
      src: 'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'STEM öğrenme',
      category: 'Bilim'
    },
    {
      src: 'https://images.pexels.com/photos/8613320/pexels-photo-8613320.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Arkadaşlık',
      category: 'Sosyal'
    },
    {
      src: 'https://images.pexels.com/photos/8613328/pexels-photo-8613328.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Oyun zamanı',
      category: 'Oyun'
    },
    {
      src: 'https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Bahçe etkinlikleri',
      category: 'Doğa'
    }
  ];

  const categories = ['Tümü', 'Sanat', 'Eğitim', 'Müzik', 'Sosyal', 'Oyun', 'Bilim', 'Doğa'];
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filteredImages = selectedCategory === 'Tümü' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage > 0 ? selectedImage - 1 : filteredImages.length - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-4 py-2 mb-6">
            <Camera className="h-4 w-4 text-orange-600 mr-2" />
            <span className="text-sm font-medium text-orange-700">Anılarımız</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Mutlu <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Anılar</span> Galerisi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Çocuklarımızın öğrenme yolculuğundaki keyifli anları, başarıları ve gelişim süreçlerini 
            fotoğraflarla ölümsüzleştiriyoruz.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 text-white text-sm font-medium">
                    {image.category}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-300"
              >
                <X size={24} />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-300"
              >
                <ChevronRight size={24} />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <p className="text-white font-medium">{filteredImages[selectedImage].alt}</p>
                <p className="text-white/80 text-sm">{filteredImages[selectedImage].category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 max-w-4xl mx-auto border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Okulumuzda <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Bir Gün</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Çocuğunuzun okulumuzda nasıl zaman geçireceğini merak ediyorsunuz? 
              Gelin ve bizi ziyaret edin, tanışma toplantımıza katılın!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Ziyaret Randevusu Al
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;