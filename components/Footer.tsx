import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
             <div className="flex items-center gap-3 mb-6">
                <img
                  src="/logo.svg"
                  alt="內政部消防署徽"
                  className="w-8 h-8 object-contain"
                />
                <h3 className="text-white text-lg font-bold tracking-wide">強韌臺灣計畫資訊網</h3>
             </div>
             <div className="space-y-2 text-sm text-slate-400">
               <p>內政部消防署版權所有</p>
               <p>地址：231 新北市新店區北新路3段200號8樓</p>
               <p>電話：(02) 8195-9119</p>
             </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white font-bold mb-4">快速連結</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">最新消息</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">計畫簡介</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">常見問答 (FAQ)</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">網站地圖</a></li>
            </ul>
          </div>

           {/* Links 2 */}
           <div>
            <h4 className="text-white font-bold mb-4">相關單位</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-teal-400 transition-colors">內政部消防署</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">國家災害防救科技中心</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">行政院災害防救辦公室</a></li>
            </ul>
          </div>
          
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 National Fire Agency, Ministry of the Interior. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">隱私權政策</a>
            <a href="#" className="hover:text-white transition-colors">資安安全政策</a>
            <a href="#" className="hover:text-white transition-colors">政府網站資料開放宣告</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;