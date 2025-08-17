import React from 'react';
import { Play, Star, Users, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-green-300 rounded-full opacity-25 animate-bounce delay-150"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-purple-300 rounded-full opacity-20 animate-pulse delay-300"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-md">
              <Star className="h-4 w-4 text-yellow-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">Türkiye'nin En Sevilen Anaokullarından</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Çocuklarınızın
              </span>
              <br />
              <span className="text-gray-800">Mutlu Geleceği</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Modern eğitim anlayışı ve sevgi dolu ortamımızda çocuklarınız öğrenirken eğlenir, 
              oynarken gelişir. Her çocuğun benzersiz yeteneklerini keşfetmesi için buradayız.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#programs"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Programlarımızı Keşfet
              </a>
              <a
                href="#about"
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-md border border-gray-200 flex items-center justify-center group"
              >
                <Play className="h-5 w-5 mr-2 group-hover:text-blue-600 transition-colors duration-300" />
                Tanıtım Videomuz
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md">
                  <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">250+</div>
                  <div className="text-sm text-gray-600">Mutlu Çocuk</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md">
                  <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">15+</div>
                  <div className="text-sm text-gray-600">Yıl Deneyim</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md">
                  <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">4.9</div>
                  <div className="text-sm text-gray-600">Veli Puanı</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8613318/pexels-photo-8613318.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mutlu çocuklar eğitim ortamında"
                className="w-full h-96 object-cover rounded-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-yellow-400 p-4 rounded-2xl shadow-lg animate-bounce">
                <span className="text-2xl">🎨</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-pink-400 p-4 rounded-2xl shadow-lg animate-bounce delay-150">
                <span className="text-2xl">🎵</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 p-4 rounded-2xl shadow-lg animate-bounce delay-300">
                <span className="text-2xl">📚</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-purple-400 p-4 rounded-2xl shadow-lg animate-bounce delay-500">
                <span className="text-2xl">🧩</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;