"use client";

import { useEffect } from "react";

export default function Home() {
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
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#16a34a] to-[#22c55e] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span className="font-semibold text-xl text-gray-800">HairGrow Nature</span>
          </div>
          <a
            href="https://shopee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shopee-btn px-5 py-2.5 rounded-full text-sm font-medium text-white"
          >
            Buy on Shopee
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="fade-target inline-block px-4 py-2 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 text-[#16a34a] text-sm mb-6">
            🌿 100% Natural Formula
          </div>
          <h1 className="fade-target text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            Natural Hair Growth Spray
            <br />
            <span className="text-[#16a34a]">For Stronger, Healthier Hair</span>
          </h1>
          <p className="fade-target text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            A powerful herbal scalp treatment made from organic ingredients. 
            Prevent hair fall and stimulate growth naturally.
          </p>
          <div className="fade-target flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://shopee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shopee-btn px-8 py-4 rounded-full text-lg font-semibold text-white inline-block"
            >
              Buy on Shopee
            </a>
            <a
              href="#benefits"
              className="px-8 py-4 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="fade-target text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Why Choose <span className="text-[#16a34a]">Our Spray?</span>
          </h2>
          <p className="fade-target text-gray-600 text-center mb-16 max-w-xl mx-auto">
            A natural solution for hair care backed by ancient herbal wisdom
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="fade-target feature-card p-8 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-[#22c55e]/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Prevents <span className="text-[#16a34a]">Hair Fall</span></h3>
              <p className="text-gray-600">
                Strengthens hair roots and reduces breakage. Say goodbye to excessive hair shedding.
              </p>
            </div>

            <div className="fade-target feature-card p-8 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-[#84cc16]/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#84cc16]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Promotes <span className="text-[#84cc16]">Growth</span></h3>
              <p className="text-gray-600">
                Stimulates dormant hair follicles and encourages new growth for thicker, fuller hair.
              </p>
            </div>

            <div className="fade-target feature-card p-8 rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Nourishes <span className="text-emerald-600">Scalp</span></h3>
              <p className="text-gray-600">
                Rich in vitamins and minerals that nourish the scalp and improve overall hair health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-24 bg-[#f0fdf4]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="fade-target text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            Natural <span className="text-[#84cc16]">Ingredients</span>
          </h2>
          <p className="fade-target text-gray-600 text-center mb-12 max-w-xl mx-auto">
            Each ingredient is carefully selected for its proven hair benefits
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Rosemary", benefit: "Stimulates hair follicles" },
              { name: "Cinnamon", benefit: "Improves blood circulation" },
              { name: "Hibiscus", benefit: "Nourishes and conditions" },
              { name: "Castor Seeds", benefit: "Strengthens roots" },
              { name: "Fenugreek Seeds", benefit: "Prevents hair fall" },
              { name: "Cloves", benefit: "Promotes scalp health" },
            ].map((item, i) => (
              <div key={i} className="fade-target bg-white p-6 rounded-xl border border-gray-200 hover:border-[#22c55e]/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#16a34a] to-[#22c55e] flex items-center justify-center mb-4 mx-auto w-fit">
                  <span className="text-xl">🌿</span>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2 text-gray-900">{item.name}</h3>
                <p className="text-gray-600 text-center text-sm">{item.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* How to Use Section */}
       <section className="py-24 bg-white">
         <div className="max-w-[1200px] mx-auto px-6">
           <h2 className="fade-target text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
             How to <span className="text-[#16a34a]">Use</span>
           </h2>
           <p className="fade-target text-gray-600 text-center mb-16 max-w-xl mx-auto">
             Simple steps for best results
           </p>

           <div className="grid md:grid-cols-3 gap-8">
             <div className="fade-target text-center">
               <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 flex items-center justify-center mb-6 mx-auto">
                 <span className="text-2xl font-bold text-[#16a34a]">1</span>
               </div>
               <h3 className="text-xl font-semibold mb-3 text-gray-900">Shake Well</h3>
               <p className="text-gray-600">Shake the bottle well before each use to mix the natural ingredients.</p>
             </div>

             <div className="fade-target text-center">
               <div className="w-16 h-16 rounded-full bg-[#84cc16]/10 flex items-center justify-center mb-6 mx-auto">
                 <span className="text-2xl font-bold text-[#84cc16]">2</span>
               </div>
               <h3 className="text-xl font-semibold mb-3 text-gray-900">Spray on Scalp</h3>
               <p className="text-gray-600">Spray directly on clean, dry scalp. Part hair if needed for better coverage.</p>
             </div>

             <div className="fade-target text-center">
               <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6 mx-auto">
                 <span className="text-2xl font-bold text-emerald-600">3</span>
               </div>
               <h3 className="text-xl font-semibold mb-3 text-gray-900">Massage & Leave</h3>
               <p className="text-gray-600">Gently massage for 2-3 minutes. Leave overnight for best results.</p>
             </div>
           </div>
         </div>
       </section>

       {/* Products Section */}
       <section className="py-24 bg-[#f0fdf4]">
         <div className="max-w-[1200px] mx-auto px-6">
           <h2 className="fade-target text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
             Our <span className="text-[#16a34a]">Products</span>
           </h2>
           <p className="fade-target text-gray-600 text-center mb-16 max-w-xl mx-auto">
             Choose the right formula for your hair needs
           </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Hair Growth Spray 30ml",
                  price: "$19.99",
                  description: "Perfect for trying our natural formula - 30ml size",
                  features: ["30ml Bottle", "Natural Ingredients", "Travel Friendly"]
                },
                {
                  name: "Hair Growth Spray 50ml",
                  price: "$29.99",
                  description: "Our most popular size - 50ml for regular use",
                  features: ["50ml Bottle", "Best Value", "Monthly Supply"]
                },
                {
                  name: "Hair Growth Spray 120ml",
                  price: "$49.99",
                  description: "Family size - 120ml for long-term use",
                  features: ["120ml Bottle", "Family Size", "Save 20%"]
                }
              ].map((product, i) => (
               <div key={i} className="fade-target bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
                  <div className="aspect-w-4 aspect-h-3 w-full rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center mb-4">
                    <div className="text-gray-400 text-sm">Product Image Placeholder</div>
                  </div>
                 <h3 className="text-lg font-semibold text-center mb-2 text-gray-900">{product.name}</h3>
                 <p className="text-gray-600 text-center text-sm mb-4">{product.description}</p>
                 <div className="space-y-2 text-center text-sm">
                   <p className="font-bold text-gray-900">{product.price}</p>
                   <div className="flex flex-col items-center space-y-1">
                     {product.features.map((feature, j) => (
                       <div key={j} className="flex items-center gap-1 text-gray-600">
                         <svg className="w-3 h-3 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                         </svg>
                         <span>{feature}</span>
                       </div>
                     ))}
                   </div>
                 </div>
                 <a
                   href="https://shopee.com"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-full shopee-btn px-4 py-2 rounded-full text-sm font-medium text-white"
                 >
                   Buy Now
                 </a>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* Testimonials Section */}
      <section className="py-24 bg-[#f0fdf4]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="fade-target text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
            What Our <span className="text-[#16a34a]">Customers Say</span>
          </h2>
          <p className="fade-target text-gray-600 text-center mb-16 max-w-xl mx-auto">
            Thousands of satisfied customers transformed their hair
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Emily Davis", rating: 5, text: "After 2 months of use, I can see new hair growth! My hair feels thicker and healthier." },
              { name: "Rachel Tan", rating: 5, text: "Was skeptical at first but the results are amazing. Hair fall has reduced significantly!" },
              { name: "Amanda Lee", rating: 4, text: "Love the natural ingredients. No side effects and my scalp feels so healthy." },
            ].map((testimonial, i) => (
              <div key={i} className="fade-target bg-white p-8 rounded-2xl border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      className={`w-5 h-5 ${j < testimonial.rating ? "text-[#84cc16]" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="fade-target text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Start Your Hair Growth <span className="text-[#16a34a]">Journey Today</span>
          </h2>
          <p className="fade-target text-lg text-gray-600 max-w-xl mx-auto mb-10">
            Join thousands who have transformed their hair naturally. Order now!
          </p>
          <a
            href="https://shopee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-target shopee-btn inline-block px-10 py-5 rounded-full text-xl font-bold text-white"
          >
            Buy Now on Shopee
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#16a34a] to-[#22c55e] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span className="font-semibold text-gray-800">HairGrow Nature</span>
          </div>
          <p className="text-gray-500 text-sm">
            © 2026 HairGrow Nature. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}