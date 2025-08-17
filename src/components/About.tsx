import React from 'react';
import { Heart, Shield, Sparkles, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Sevgi Dolu Ortam',
      description: 'Her çocuğa özel ilgi ve sevgi gösteriyoruz. Kendilerini güvende hissetmeleri en büyük önceliğimiz.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Güvenli Mekan',
      description: 'Modern güvenlik sistemleri ve çocuk dostu tasarımla tamamen güvenli bir öğrenme ortamı sağlıyoruz.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Sparkles,
      title: 'Yaratıcı Eğitim',
      description: 'Oyun temelli öğrenme metodları ile çocukların hayal gücünü geliştiriyor, yaratıcılıklarını destekliyoruz.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Users,
      title: 'Uzman Kadro',
      description: 'Alanında deneyimli, çocuk gelişimi uzmanı öğretmenlerimiz her çocuğa özel yaklaşım sergiliyor.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">Neden Minik Kalpler?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Çocuklarınızın <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Gelişimi</span> İçin
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            15 yıllık deneyimimiz ve modern eğitim anlayışımızla çocuklarınızın fiziksel, zihinsel ve sosyal 
            gelişimlerini destekleyerek onları geleceğe hazırlıyoruz.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/8613102/pexels-photo-8613102.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Çocuklar sınıfta etkinlik yaparken"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Her Çocuk <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Özeldir</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Minik Kalpler Anaokulu olarak, her çocuğun kendine özgü öğrenme tarzı ve hızı olduğuna inanıyoruz. 
              Bu nedenle kişiselleştirilmiş eğitim planları oluşturuyor, her çocuğun potansiyelini ortaya çıkarmasına yardımcı oluyoruz.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Bireysel Gelişim Takibi</h4>
                  <p className="text-gray-600 text-sm">Her çocuğun gelişim aşamaları titizlikle takip edilir ve kayıt altına alınır.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Veli İletişimi</h4>
                  <p className="text-gray-600 text-sm">Düzenli veli toplantıları ve günlük raporlarla sürekli bilgi paylaşımı sağlanır.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 p-1 rounded-full mt-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Oyun Temelli Öğrenme</h4>
                  <p className="text-gray-600 text-sm">Tüm eğitim aktiviteleri çocukların doğal öğrenme yöntemleri dikkate alınarak tasarlanır.</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Okulumuzla Tanışın
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;