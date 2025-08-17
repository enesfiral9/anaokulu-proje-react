import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    childAge: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form gönderildi:', formData);
    // Form gönderme işlemi burada yapılacak
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', phone: '', message: '', childAge: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      content: 'Merkez Mahallesi, Çiçek Sokak No:15, Ankara',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 312 555 0123',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'E-posta',
      content: 'info@minikkalpler.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      content: 'Pzt-Cum: 07:30 - 18:00',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="h-4 w-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-700">İletişim</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Bizimle</span> İletişime Geçin
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Çocuğunuzun eğitimi hakkında sorularınız mı var? Okulumuzla tanışmak ve kayıt işlemleri için 
            bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${info.color} p-3 rounded-xl shadow-lg`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      <p className="text-gray-600">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center mb-8">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">Harita Görünümü</p>
                <p className="text-gray-400 text-sm">Konum bilgilerimiz</p>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-3">Hızlı Bilgi</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Ücretsiz tanışma randevusu</li>
                <li>• Esnek ödeme seçenekleri</li>
                <li>• Deneme günü imkanı</li>
                <li>• Veli görüşme toplantıları</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bize Ulaşın</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Adınızı giriniz"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="E-posta adresiniz"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Telefon numaranız"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Çocuğunuzun Yaşı
                    </label>
                    <select
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Yaş seçiniz</option>
                      <option value="2">2 Yaş</option>
                      <option value="3">3 Yaş</option>
                      <option value="4">4 Yaş</option>
                      <option value="5">5 Yaş</option>
                      <option value="6">6 Yaş</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Sorularınızı veya özel isteklerinizi buraya yazabilirsiniz..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Mesaj Gönder</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Hemen Randevu Alın!
            </h3>
            <p className="text-green-100 mb-6 leading-relaxed">
              Okulumuzla tanışmak, sınıflarımızı görmek ve öğretmenlerimizle konuşmak için 
              bugün ücretsiz randevu alın.
            </p>
            <a
              href="tel:+903125550123"
              className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              <Phone className="h-5 w-5 mr-2" />
              Hemen Ara
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;