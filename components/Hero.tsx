import React from 'react';
import { ArrowRight, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="z-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white border border-teal-100 rounded-full px-4 py-1.5 shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              <span className="text-sm font-medium text-teal-800">112-116年 大規模災害整備計畫</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              公私協力，<br />
              打造<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">強韌臺灣</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              面對氣候變遷與大規模災害威脅，我們連結政府、企業與社區，透過防災士培訓與資源整合，建立第一線的災害防救與復原能力。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg shadow-teal-600/20 transition-all hover:-translate-y-1">
                <GraduationCap size={20} />
                報名防災士培訓
              </button>
              <button className="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-3.5 rounded-lg font-semibold shadow-sm transition-all hover:-translate-y-1 group">
                了解計畫內容
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Small stats or badge for mobile/desktop alignment */}
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
               <div className="flex -space-x-2">
                 {[1,2,3,4].map(i => (
                   <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/50/50?random=${i}`} alt="User" />
                 ))}
               </div>
               <p>已有 <span className="font-bold text-gray-800">10萬+</span> 人次參與</p>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative z-10 lg:pl-10">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white transform hover:scale-[1.01] transition-transform duration-500">
                {/* Simulated Illustration using a photo for now, in real app use the SVG/Illustration from design */}
                <img 
                  src="https://picsum.photos/800/600?random=10" 
                  alt="Resilient Taiwan Illustration" 
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating Card Overlay */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4 animate-bounce-slow">
                   <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                   </div>
                   <div>
                      <p className="text-xs text-gray-500 font-medium">企業合作夥伴</p>
                      <p className="text-xl font-bold text-gray-900">250+</p>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;