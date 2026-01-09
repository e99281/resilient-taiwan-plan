import React from 'react';
import { Lightbulb, GraduationCap, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">計畫重點與資源</h2>
          <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link to="/plan-details" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 block">
            <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">計畫簡介</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              了解強韌臺灣計畫的緣起、核心目標與執行策略，掌握國家防災體系脈絡。
            </p>
            <span className="text-teal-600 font-medium hover:text-teal-800 flex items-center gap-1 group-hover:gap-2 transition-all">
              查看詳情 <span className="text-lg">→</span>
            </span>
          </Link>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
            <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">防災士培訓</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              查詢最新開課資訊、報名方式及認證流程，成為社區防災的種子教官。
            </p>
            <a href="#" className="text-amber-600 font-medium hover:text-amber-800 flex items-center gap-1 group-hover:gap-2 transition-all">
              立即報名 <span className="text-lg">→</span>
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <FolderOpen size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">相關資源連結</h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              下載防災手冊、災害潛勢圖資、宣導影片及各縣市防災計畫書。
            </p>
            <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 group-hover:gap-2 transition-all">
              資源下載 <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;