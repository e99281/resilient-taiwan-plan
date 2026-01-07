import React from 'react';
import { ShieldCheck, Leaf, ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute inset-0 bg-teal-600 rounded-2xl transform translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={`${import.meta.env.BASE_URL}img2.png`}
                alt="Command Center" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                 {/* <div className="absolute bottom-4 right-4 text-white/80 text-xs">
                    National Fire Agency Emergency Operation Center
                 </div> */}
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              關於我們：<br/>
              深化強韌，永續臺灣
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              本計畫延續「災害防救深耕計畫」之成果，旨在因應未來可能發生的大規模風災與震災。我們不只關注硬體的整備，更重視「人」的連結。透過公私部門的緊密合作，建構具備自我復原能力的韌性社會。
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">強化公所量能</h3>
                  <p className="text-gray-500 text-sm mt-1">輔導全臺鄉鎮市區公所建立業務持續運作計畫(BCP)。</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                  <Leaf size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">公私協力夥伴</h3>
                  <p className="text-gray-500 text-sm mt-1">與企業簽訂合作備忘錄，建立災時物資與人力支援機制。</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a href="#" className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 group transition-all">
                閱讀完整計畫緣起 
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;