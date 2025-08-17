import React from 'react';
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Minik Kalpler',
      links: [
        { name: 'Hakkımızda', href: '#about' },
        { name: 'Eğitim Felsefemiz', href: '#programs' },
        { name: 'Öğretmen Kadromuz', href: '#about' },
        { name: 'Referanslarımız', href: '#gallery' }
      ]
    },
    {
      title: 'Programlarımız',
      links: [
        { name: 'Sanat ve Yaratıcılık', href: '#programs' },
        { name: 'Müzik ve Dans', href: '#programs' },
        { name: 'Dil Gelişimi', href: '#programs' },
        { name: 'STEM Eğitimi', href: '#programs' }
      ]
    },
    {
      title: 'Hizmetlerimiz',
      links: [
        { name: 'Tam Gün Bakım', href: '#programs' },
        { name: 'Yarım Gün Eğitim', href: '#programs' },
        { name: 'Yaz Okulu', href: '#programs' },
        { name: 'Etüt Desteği', href: '#programs' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, href: '#', color: 'hover:text-red-600' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Minik Kalpler
                </span>
                <span className="text-sm text-gray-400">Anaokulu</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              15 yıllık deneyimimizle çocuklarınızın mutlu ve sağlıklı gelişimi için 
              buradayız. Her çocuk bizim için özeldir.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Merkez Mahallesi, Çiçek Sokak No:15, Ankara</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+90 312 555 0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@minikkalpler.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-3">Bültenimize Katılın</h3>
              <p className="text-gray-300 text-sm">
                Okulumuzdan haberler, etkinlik duyuruları ve eğitim ipuçları için bültenimize abone olun.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 whitespace-nowrap">
                Abone Ol
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm mr-4">Bizi takip edin:</span>
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800`}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Minik Kalpler Anaokulu. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors duration-300">
                  Gizlilik Politikası
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors duration-300">
                  Kullanım Şartları
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
    </footer>
  );
};

export default Footer;