import React from 'react';
import { ArrowRight, Search, MapPin, Clock } from 'lucide-react';
import { NewsItem, CourseItem } from '../types';

// Mock Data
const newsList: NewsItem[] = [
  { id: '1', date: '2025-12-24', tag: '公告', title: '【重要】115年度強韌臺灣計畫各縣市執行績效評鑑結果公佈' },
  { id: '2', date: '2025-11-15', tag: '活動', title: '全國防災士大會師！展現民間協作力量，分享韌性社區推動經驗' },
  { id: '3', date: '2025-10-30', tag: '訓練', title: '114年度大規模風災震災兵棋推演工作坊講義下載專區' },
];

const courseList: CourseItem[] = [
  { id: '1', month: 'JAN', day: '24', title: '臺北市防災士培訓第135期', location: '臺北市消防局防災科學教育館', duration: '2天 (15小時)', deadline: '2026-01-20', status: 'open' },
  { id: '2', month: 'FEB', day: '05', title: '新北市防災士培訓第98期 (週末班)', location: '新北市災害應變中心', duration: '2天 (15小時)', deadline: '2026-02-01', status: 'open' },
  { id: '3', month: 'JAN', day: '15', title: '桃園市防災士培訓 (已額滿)', location: '桃園市消防教育訓練中心', duration: '', deadline: '', status: 'full' },
];

const NewsAndTraining: React.FC = () => {
  return (
    <section id="news-training" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: NEWS */}
          <div className="lg:col-span-5">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-amber-500 rounded-full"></div>
                <h2 className="text-2xl font-bold text-gray-900">最新消息</h2>
              </div>
              <a href="#" className="text-teal-600 hover:text-teal-800 text-sm font-medium flex items-center gap-1">
                更多消息 <ArrowRight size={16} />
              </a>
            </div>

            <div className="space-y-6">
              {newsList.map((news) => (
                <div key={news.id} className="group cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs px-2 py-1 rounded border ${
                      news.tag === '公告' ? 'border-amber-200 text-amber-700 bg-amber-50' :
                      news.tag === '活動' ? 'border-green-200 text-green-700 bg-green-50' :
                      'border-blue-200 text-blue-700 bg-blue-50'
                    }`}>
                      {news.tag}
                    </span>
                    <span className="text-sm text-gray-400">{news.date}</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {news.title}
                  </h3>
                  <div className="h-px bg-gray-100 mt-4 group-hover:bg-teal-100 transition-colors"></div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: TRAINING COURSES */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-8 bg-teal-500 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">防災士培訓課程</h2>
                </div>
                
                <div className="flex gap-2 w-full sm:w-auto">
                  <select className="bg-white border border-gray-200 text-gray-600 text-sm rounded-lg px-3 py-2 outline-none focus:border-teal-500 w-full sm:w-auto">
                    <option>所有地區</option>
                    <option>臺北市</option>
                    <option>新北市</option>
                    <option>臺中市</option>
                    <option>高雄市</option>
                  </select>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    查詢
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {courseList.map((course) => (
                  <div key={course.id} className={`bg-white p-4 rounded-xl border ${course.status === 'full' ? 'border-gray-100 opacity-60' : 'border-gray-200 hover:border-teal-300 shadow-sm hover:shadow-md'} transition-all flex flex-col sm:flex-row gap-4 sm:items-center`}>
                    
                    {/* Date Box */}
                    <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex flex-col items-center justify-center ${course.status === 'full' ? 'bg-gray-100 text-gray-400' : 'bg-teal-50 text-teal-700'}`}>
                      <span className="text-xs font-bold uppercase tracking-wide">{course.month}</span>
                      <span className="text-xl sm:text-2xl font-bold leading-none">{course.day}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900 mb-2">{course.title}</h3>
                      <div className="flex flex-wrap gap-y-1 gap-x-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {course.location}
                        </div>
                        {course.duration && (
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {course.duration}
                          </div>
                        )}
                      </div>
                      {course.status === 'open' && (
                        <p className="text-xs text-orange-500 mt-2 font-medium">報名截止：{course.deadline}</p>
                      )}
                    </div>

                    {/* Action */}
                    <div className="flex-shrink-0 flex sm:flex-col gap-2 justify-center min-w-[100px]">
                       {course.status === 'open' ? (
                         <>
                           <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded font-medium transition-colors">
                             立即報名
                           </button>
                           <button className="flex-1 text-gray-400 hover:text-gray-600 text-xs text-center">
                             簡章下載
                           </button>
                         </>
                       ) : (
                         <span className="bg-gray-100 text-gray-400 text-sm px-4 py-2 rounded text-center font-medium">
                           額滿候補
                         </span>
                       )}
                    </div>

                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <a href="#" className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium text-sm">
                  查看所有課程計畫 <ArrowRight size={14} className="ml-1" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndTraining;