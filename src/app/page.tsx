"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-target").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0D0D0D]/80 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7C94B] flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-xl">SmartHub</span>
          </div>
          <a
            href="https://shopee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shopee-btn px-5 py-2.5 rounded-full text-sm font-medium text-white"
          >
            Beli di Shopee
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="fade-target inline-block px-4 py-2 rounded-full bg-[#FF6B35]/10 border border-[#FF6B35]/20 text-[#FF6B35] text-sm mb-6">
            ✨ Teknologi Terbaru 2026
          </div>
          <h1 className="fade-target text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Smart Home Hub
            <br />
            <span className="text-[#FF6B35]">Untuk Rumah Modern</span>
          </h1>
          <p className="fade-target text-lg text-[#9CA3AF] max-w-2xl mx-auto mb-10">
            Kontrol seluruh perangkat rumah Anda dengan satu sentuhan. 
            Lebih cerdas, lebih hemat, lebih aman.
          </p>
          <div className="fade-target flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://shopee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shopee-btn px-8 py-4 rounded-full text-lg font-semibold text-white inline-block"
            >
              Beli di Shopee
            </a>
            <a
              href="#features"
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors inline-block"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-[#0D0D0D]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="fade-target text-4xl md:text-5xl font-bold text-center mb-4">
            Fitur <span className="text-[#FF6B35]">Unggulan</span>
          </h2>
          <p className="fade-target text-[#9CA3AF] text-center mb-16 max-w-xl mx-auto">
            Didesain dengan teknologi mutakhir untuk memberikan pengalaman terbaik
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="fade-target feature-card p-8 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Koneksi Stabil</h3>
              <p className="text-[#9CA3AF]">
                Dukungan WiFi 6 dan Bluetooth 5.2 untuk koneksi cepat dan stabil ke semua perangkat Anda.
              </p>
            </div>

            <div className="fade-target feature-card p-8 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-[#F7C94B]/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#F7C94B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Kontrol Suara</h3>
              <p className="text-[#9CA3AF]">
                Kompatibel dengan Google Assistant dan Alexa. Kontrol rumah hanya dengan perintah suara.
              </p>
            </div>

            <div className="fade-target feature-card p-8 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hemat Energi</h3>
              <p className="text-[#9CA3AF]">
                AI learning mengenali pola penggunaan dan secara otomatis menghemat energi hingga 30%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-[#1A1A2E]/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="fade-target text-4xl md:text-5xl font-bold text-center mb-4">
            Tampilan <span className="text-[#F7C94B]">Produk</span>
          </h2>
          <p className="fade-target text-[#9CA3AF] text-center mb-12 max-w-xl mx-auto">
            Desain elegan yang cocok untuk любой интерьер rumah modern
          </p>

          <div className="fade-target flex gap-6 overflow-x-auto pb-4 snap-x">
            {[
              { color: "from-[#FF6B35] to-[#FF8F5E]", initial: "S" },
              { color: "from-[#F7C94B] to-[#FFD700]", initial: "H" },
              { color: "from-[#6366F1] to-[#8B5CF6]", initial: "M" },
              { color: "from-[#10B981] to-[#34D399]", initial: "H" },
            ].map((item, i) => (
              <div
                key={i}
                className="snap-start flex-shrink-0 w-64 h-80 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-2xl"
                style={{ background: `linear-gradient(135deg, ${item.color.includes('FF6B35') ? '#FF6B35, #FF8F5E' : item.color.includes('F7C94B') ? '#F7C94B, #FFD700' : item.color.includes('6366F1') ? '#6366F1, #8B5CF6' : '#10B981, #34D399'})` }}
              >
                <span className="text-6xl font-bold text-white/20">{item.initial}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="fade-target text-4xl md:text-5xl font-bold text-center mb-4">
            Apa Kata <span className="text-[#FF6B35]">Pelanggan</span>
          </h2>
          <p className="fade-target text-[#9CA3AF] text-center mb-16 max-w-xl mx-auto">
            Ribuan pelanggan puas dengan produk kami
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Budi Santoso", rating: 5, text: "Produk ini benar-benar mengubah cara saya mengontrol rumah. Sangat mudah digunakan!" },
              { name: "Siti Rahayu", rating: 5, text: "Kualitasnya luar biasa. Servis也很 cepat dan responsif. Sangat direkomendasikan!" },
              { name: "Ahmad Pratama", rating: 4, text: "Desainya elegan dan fiturnya lengkap. Worth it untuk harga segini." },
            ].map((testimonial, i) => (
              <div key={i} className="fade-target bg-[#1A1A2E]/50 p-8 rounded-2xl border border-white/5">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      className={`w-5 h-5 ${j < testimonial.rating ? "text-[#F7C94B]" : "text-gray-600"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#9CA3AF] mb-4">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0D0D0D] to-[#1A1A2E]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="fade-target text-4xl md:text-5xl font-bold mb-6">
            Siap Tingkatkan <span className="text-[#FF6B35]">Kehidupan Anda?</span>
          </h2>
          <p className="fade-target text-lg text-[#9CA3AF] max-w-xl mx-auto mb-10">
            Jangan lewatkan kesempatan ini. Stok terbatas!
          </p>
          <a
            href="https://shopee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-target shopee-btn inline-block px-10 py-5 rounded-full text-xl font-bold text-white animate-pulse"
          >
            Beli Sekarang di Shopee
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0D0D0D] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#F7C94B] flex items-center justify-center">
              <span className="text-white font-bold text-xs">S</span>
            </div>
            <span className="font-semibold">SmartHub</span>
          </div>
          <p className="text-[#9CA3AF] text-sm">
            © 2026 Smart Home Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}