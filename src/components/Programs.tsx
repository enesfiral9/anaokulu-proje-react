import React from 'react';
import { Palette, Music, BookOpen, Gamepad2, Users, Clock } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Palette,
      title: 'Sanat ve Yaratıcılık',
      description: 'Resim, müzik ve el sanatları ile çocukların yaratıcılık potansiyelini ortaya çıkarıyoruz.',
      age: '3-6 Yaş',
      duration: '45 dk',
      image: 'https://images.pexels.com/photos/8613097/pexels-photo-8613097.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50'
    },
    {
      icon: Music,
      title: 'Müzik ve Ritim',
      description: 'Şarkılar, dans ve enstrümanlar ile çocukların müzikal zekalarını geliştiriyoruz.',
      age: '2-6 Yaş',
      duration: '30 dk',
      image: 'https://images.pexels.com/photos/8613111/pexels-photo-8613111.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50'
    },
    {
      icon: BookOpen,
      title: 'Dil ve Okuma Hazırlığı',
      description: 'Hikayeler, oyunlar ve etkinliklerle dil gelişimini destekliyoruz.',
      age: '4-6 Yaş',
      duration: '40 dk',
      image: 'https://images.pexels.com/photos/8613315/pexels-photo-8613315.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Gamepad2,
      title: 'Oyun ve Hareket',
      description: 'Fiziksel aktiviteler ve oyunlarla motor becerileri geliştiriyoruz.',
      age: '2-6 Yaş',
      duration: '50 dk',
      image: 'https://images.pexels.com/photos/8613328/pexels-photo-8613328.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Users,
      title: 'Sosyal Beceriler',
      description: 'Grup etkinlikleri ile paylaşma, işbirliği ve empati becerilerini öğretiyoruz.',
      age: '3-6 Yaş',
      duration: '35 dk',
      image: 'https://images.pexels.com/photos/8613320/pexels-photo-8613320.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50'
    },
    {
      icon: BookOpen,
      title: 'STEM Keşifleri',
      description: 'Basit deneyler ve keşiflerle bilim, teknoloji ve matematiğe giriş yapıyoruz.',
      age: '4-6 Yaş',
      duration: '45 dk',
      image: 'https://images.pexels.com/photos/8613319/pexels-photo-8613319.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2 mb-6">
            <Gamepad2 className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-700">Eğitim Programlarımız</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Öğrenirken</span> Eğleniyoruz
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Her yaş grubuna özel tasarlanmış programlarımızla çocuklarınızın tüm gelişim alanlarını destekliyoruz. 
            Oyun temelli yaklaşımımızla öğrenme süreci hem keyifli hem de etkili oluyor.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${program.bgColor} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-white/50`}
              >
                {/* Program Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${program.color} p-2 rounded-xl shadow-lg`}>
                    <IconComponent className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Program Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {program.description}
                  </p>

                  {/* Program Details */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/30">
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{program.age}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-600">{program.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full bg-gradient-to-r ${program.color} text-white py-3 px-4 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1 mt-4`}>
                    Detayları Gör
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Hangi Program <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">En Uygun?</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Çocuğunuzun yaşına ve ilgi alanlarına en uygun programı seçmek için uzman öğretmenlerimizle görüşün. 
              Ücretsiz değerlendirme randevusu alabilirsiniz.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Ücretsiz Değerlendirme
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;