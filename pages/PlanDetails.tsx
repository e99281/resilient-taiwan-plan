import React, { useState } from 'react';
import { ArrowLeft, Home, Shield, Users, GitBranch, CheckCircle2, ArrowRight, Handshake, MapPin, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PlanDetails: React.FC = () => {
  const pdfUrl = `${import.meta.env.BASE_URL}強韌臺灣計畫簡介 - 內政部消防署.pdf`;
  const [selectedGoal, setSelectedGoal] = useState(1);

  // 定義五大目標的內容
  const goals = [
    {
      id: 1,
      title: '縱向與橫向推動政策及訓練',
      subtitle: '強化大腦與神經系統',
      description: '建立計畫網站並設計 Dashboard,將各縣市執行績效、管考指標量化呈現,讓進度一目了然。',
      color: 'blue',
      icon: GitBranch,
      type: 'standard' as const,
      stats: [
        { label: '縣市與公所考核進度', value: '100%', detail: '22縣市 / 367公所' },
        { label: '教育訓練教材編定', value: '完成', detail: '各級人員全覆蓋' },
        { label: '大型交流座談', value: '44場', detail: '結合績優表揚' }
      ]
    },
    {
      id: 2,
      title: '強化災害防救據點整備',
      subtitle: '加固防禦堡壘',
      description: '盤查實體據點能量,完成全臺救災集結點與避難收容所總覽,以及輔導督導維護與演練。',
      color: 'indigo',
      icon: Shield,
      type: 'map' as const,
      stats: [
        { label: '實兵演練', value: '367處', detail: '公所同時開設2處以上收容所' },
        { label: '維護手冊製定', value: '100%', detail: '能量盤點完成' }
      ]
    },
    {
      id: 3,
      title: '公部門業務持續運作(BCP)',
      subtitle: '確保政府機能不中斷',
      description: '確保災時政府先復原重要業務,完成22縣市及367公所業務持續運作計畫(BCP)建立與演練。',
      color: 'slate',
      icon: CheckCircle2,
      type: 'progress' as const,
      stats: [
        { label: '縣市政府計畫建立', value: '100%', detail: '22縣市完成', progress: 100, progressColor: 'teal' as const },
        { label: '鄉鎮市公所計畫建立', value: '92%', detail: '367公所進行中', progress: 92, progressColor: 'teal' as const },
        { label: '兵棋推演執行率', value: '85%', detail: '持續提升中', progress: 85, progressColor: 'orange' as const }
      ]
    },
    {
      id: 4,
      title: '相互支援及區域聯防',
      subtitle: '打通援軍通道',
      description: '完成大規模風災與震災情境模擬。建立縣市跨區合作機制,確保災害發生時的支援效率。',
      color: 'teal',
      icon: Handshake,
      type: 'large' as const,
      stats: [
        { label: '聯防演練', value: '44場', detail: '跨區合作機制建立' },
        { label: '應變中心優化', value: '367處', detail: '作業手冊統一編修' }
      ]
    },
    {
      id: 5,
      title: '民間協作及企業合作',
      subtitle: '全體國民成為細胞戰力',
      description: '計畫中最具社會協作意義的部分。結合防災士、韌性社區與企業,將防災能量深入人心裡。',
      color: 'orange',
      icon: Users,
      type: 'grid' as const,
      stats: [
        { label: '防災士培訓', value: '17,500名', detail: '建立進階制度' },
        { label: '韌性社區', value: '84處', detail: '盤點風險與能量' },
        { label: '災時志工中心', value: '367公所', detail: '建立管理機制' },
        { label: '企業參與演練', value: '110場', detail: '22縣企業開放收容所實測' }
      ]
    }
  ];

  const currentGoal = goals.find(g => g.id === selectedGoal) || goals[0];
  const Icon = currentGoal.icon;

  const colorMap: { [key: string]: { bg: string, text: string, border: string, badge: string, progressBg: string } } = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-400', badge: 'bg-blue-100 text-blue-700', progressBg: 'bg-blue-500' },
    indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-400', badge: 'bg-indigo-100 text-indigo-700', progressBg: 'bg-indigo-500' },
    slate: { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-400', badge: 'bg-slate-100 text-slate-700', progressBg: 'bg-slate-500' },
    teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-400', badge: 'bg-teal-100 text-teal-700', progressBg: 'bg-teal-500' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-400', badge: 'bg-orange-100 text-orange-700', progressBg: 'bg-orange-500' }
  };

  // Render different content based on goal type
  const renderGoalContent = () => {
    switch (currentGoal.type) {
      case 'standard':
        return (
          <>
            {/* Standard 3-column Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {currentGoal.stats.map((stat, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-2xl border-l-4 ${colorMap[currentGoal.color].border} shadow-sm flex flex-col justify-between h-32`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-700 text-sm">{stat.label}</h3>
                    <Icon className={`${colorMap[currentGoal.color].text} opacity-20`} size={20} />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-slate-800">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image with Overlay */}
            <div className="relative rounded-2xl overflow-hidden h-64 shadow-md group">
              <img
                src={`${import.meta.env.BASE_URL}img4.png`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                alt="實地執行成果"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-lg mb-1">實地執行成果</p>
                  <p className="text-sm opacity-80">透過定期的訪視與輔導,確保每一項指標都落實到基層公所。</p>
                </div>
              </div>
            </div>
          </>
        );

      case 'map':
        return (
          <>
            {/* Map Section */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-6">
              

              {/* Map Placeholder */}
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}map.png`}
                  className="w-full h-full object-cover"
                  alt="台灣地圖"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm">
                    <h4 className="font-bold text-slate-800 mb-2">全臺避難收容處所總覽</h4>
                    <p className="text-sm text-slate-600 mb-4">已盤點 367 個鄉鎮市公所據點分佈</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                        <span className="text-xs text-slate-600">已整備</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                        <span className="text-xs text-slate-600">進行中</span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Stats Below Map */}
              <div className="p-6 bg-slate-50 border-t border-slate-200">
                <div className="grid grid-cols-2 gap-4">
                  {currentGoal.stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-slate-200">
                      <h3 className="text-xs text-slate-600 mb-1">{stat.label}</h3>
                      <p className="text-2xl font-bold text-indigo-600">{stat.value}</p>
                      <p className="text-xs text-slate-500 mt-1">{stat.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );

      case 'progress':
        return (
          <>
            {/* BCP Image Section */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src={`${import.meta.env.BASE_URL}img5.png`}
                className="w-full h-80 object-cover"
                alt="業務持續運作計畫執行"
              />
            </div>

            {/* Progress Bars Section */}
            <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
              <h3 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                <CheckCircle2 className="text-slate-600" size={20} />
                業務持續運作計畫 (BCP) 執行狀況
              </h3>

              <div className="space-y-6">
                {currentGoal.stats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700 text-sm">{stat.label}</span>
                      <span className={`font-bold text-lg ${'progressColor' in stat && stat.progressColor === 'teal' ? 'text-teal-600' : 'text-orange-600'}`}>
                        {stat.value}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${'progressColor' in stat && stat.progressColor === 'teal' ? 'bg-teal-500' : 'bg-orange-500'}`}
                        style={{ width: `${'progress' in stat ? stat.progress : 0}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{stat.detail}</p>
                  </div>
                ))}
              </div>

              {/* Info Note */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                <Info className="text-blue-600 flex-shrink-0" size={20} />
                <p className="text-sm text-blue-800">
                  確保災害發生時,核心業務在最短時間內恢復運作,是韌性政府的關鍵指標。
                </p>
              </div>
            </div>
          </>
        );

      case 'large':
        return (
          <>
            {/* Large Cards for Regional Support */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {currentGoal.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border-2 border-teal-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                      <Icon className="text-teal-600" size={28} />
                    </div>
                    <MapPin className="text-teal-300" size={32} />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-600 mb-2">{stat.label}</h3>
                  <p className="text-4xl font-black text-teal-600 mb-2">{stat.value}</p>
                  <p className="text-sm text-slate-600">{stat.detail}</p>
                </div>
              ))}
            </div>

            {/* Image with overlay */}
            <div className="relative rounded-2xl overflow-hidden h-64 shadow-md group">
              <img
                src={`${import.meta.env.BASE_URL}img6.png`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                alt="跨區域聯防演練"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="font-bold text-lg mb-1">實地執行成果</p>
                  <p className="text-sm opacity-80">透過定期的跨縣與輔導,確保每一項指標都落實到基層公所。</p>
                </div>
              </div>
            </div>
          </>
        );

      case 'grid':
        return (
          <>
            {/* 4-Grid Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentGoal.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-l-4 border-orange-400 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-slate-700 text-sm">{stat.label}</h3>
                    <Icon className="text-orange-600 opacity-20" size={24} />
                  </div>
                  <p className="text-4xl font-black text-orange-600 mb-2">{stat.value}</p>
                  <p className="text-xs text-slate-600">{stat.detail}</p>
                </div>
              ))}
            </div>

            {/* Example Cards Section */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-800">近期企業參與演練案例</h3>
                <button className="text-sm text-teal-600 font-semibold hover:text-teal-700">
                  查看更多
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Example Card 1 */}
                <div className="relative rounded-xl overflow-hidden group">
                  <img
                    src={`${import.meta.env.BASE_URL}img7.png`}
                    className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                    alt="企業演練案例"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    北部
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <p className="font-bold text-sm mb-1">某科技園區聯合演練</p>
                      <p className="text-xs opacity-90">橫跨數個鄉鎮與專業單位</p>
                    </div>
                  </div>
                </div>

                {/* Example Card 2 */}
                <div className="relative rounded-xl overflow-hidden group">
                  <img
                    src={`${import.meta.env.BASE_URL}img8.png`}
                    className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                    alt="企業演練案例"
                  />
                  <div className="absolute top-2 right-2 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    中部
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <p className="font-bold text-sm mb-1">韌性社區自主防災</p>
                      <p className="text-xs opacity-90">鄰里長結合工專業演練</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* 返回按鈕 */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">返回首頁</span>
            </Link>
          </div>
        </div>

        {/* 計畫緣起與願景 */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 標題與說明 */}
            <div className="mb-12 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-teal-500 rounded-full"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  計畫緣起與願景
                </h2>
              </div>

              <div className="text-gray-600 leading-relaxed">
                <p>
                  臺灣面臨大規模風災與震災的威脅,本計畫延續「災害防救深耕計畫」之成果,旨在深化地方政府的災防能量,並提升民間自助互助能量之階段性目標,打造一個在極端氣候下仍能快速復原的<span className="font-bold text-teal-600">「強韌臺灣」</span>。
                </p>
              </div>
            </div>

            {/* 兩個階段卡片 */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* 深耕計畫卡片 */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <Home className="text-gray-600" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">深耕計畫</h3>
                  <p className="text-sm text-gray-500 mb-6">基礎能量建立</p>

                  <div className="w-full space-y-3">
                    <div className="flex items-center gap-2 text-left">
                      <CheckCircle2 size={18} className="text-teal-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">縣鎮市公所防災體制</span>
                    </div>
                    <div className="flex items-center gap-2 text-left">
                      <CheckCircle2 size={18} className="text-teal-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700">地區災害防救計畫</span>
                    </div>
                  </div>
                </div>

                {/* 箭頭指向右側 - 只在大螢幕顯示 */}
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight className="text-white" size={20} />
                  </div>
                </div>
              </div>

              {/* 強韌臺灣卡片 - 執行中 */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl shadow-xl p-8 relative border-4 border-teal-400">
                {/* 執行中標籤 */}
                <div className="absolute -top-3 -right-3">
                  <div className="bg-teal-700 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    進行中
                  </div>
                </div>

                <div className="flex flex-col items-center text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                    <Shield className="text-white" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">強韌臺灣</h3>
                  <p className="text-sm text-teal-100 mb-6">大規模災害整備 & 協作</p>

                  <div className="w-full space-y-3">
                    <div className="flex items-center gap-2 text-left">
                      <CheckCircle2 size={18} className="text-teal-200 flex-shrink-0" />
                      <span className="text-sm text-white">公部門業務運續性(BCP)</span>
                    </div>
                    <div className="flex items-center gap-2 text-left">
                      <CheckCircle2 size={18} className="text-teal-200 flex-shrink-0" />
                      <span className="text-sm text-white">民間與企業協作機制</span>
                    </div>
                    <div className="flex items-center gap-2 text-left">
                      <CheckCircle2 size={18} className="text-teal-200 flex-shrink-0" />
                      <span className="text-sm text-white">擴大防災士培訓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 計畫三大核心支柱 */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                計畫三大核心支柱
              </h2>
              <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full mb-4"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                計畫圍繞三大支柱展開,結合政府、民間機能與社區能量,形成堅實的防災韌性。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-stretch">
              {/* 政府效能深化 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <Home className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">政府效能深化</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    提升縣市與公所的大規模災害指揮與應變能力,建立公部門業務持續運作計畫 (BCP)。
                  </p>

                  <div className="border-t border-blue-100 pt-4">
                    <button className="text-blue-600 font-semibold text-sm mb-3 flex items-center gap-1 hover:gap-2 transition-all">
                      執行重點 <span className="text-xs">+</span>
                    </button>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>強化跨區域聯防機制</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>災害情資整合平台優化</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>關鍵基礎設施韌性檢測</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 韌性社區與防災士 - 強調卡片 */}
              <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-teal-200">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                    <Users className="text-teal-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">韌性社區與防災士</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    擴大防災士培訓,推動社區自主防災韌性,讓防災意識深入每一個家庭。
                  </p>

                  <div className="border-t border-teal-100 pt-4">
                    <button className="text-teal-600 font-semibold text-sm mb-3 flex items-center gap-1 hover:gap-2 transition-all">
                      執行重點 <span className="text-xs">+</span>
                    </button>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-0.5">•</span>
                        <span>推動韌性社區標章認證</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-0.5">•</span>
                        <span>培訓各場域防災士</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 mt-0.5">•</span>
                        <span>定期辦理社區災害演練</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 民間協作體系 */}
              <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-orange-100">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                    <Handshake className="text-orange-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">民間協作體系</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    連結民間企業、非營利組織與社區機能,建立資源媒合平台,強化災時物資與人力調度。
                  </p>

                  <div className="border-t border-orange-100 pt-4">
                    <button className="text-orange-600 font-semibold text-sm mb-3 flex items-center gap-1 hover:gap-2 transition-all">
                      執行重點 <span className="text-xs">+</span>
                    </button>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">•</span>
                        <span>企業防災MOU簽署</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">•</span>
                        <span>志工協作中心運作</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600 mt-0.5">•</span>
                        <span>民間物資儲備網絡</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 五大執行目標儀表板 */}
        <section className="py-20 bg-slate-50" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">計畫五大執行目標</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                本計畫如同編織一張「全方位的安全防護網」。透過以下五大目標，我們強化政府的大腦(政策)、加固防禦的堡壘(據點)，並激活民間的細胞戰力(協作)。
              </p>
            </div>

            {/* Dashboard Layout */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200 flex flex-col lg:flex-row min-h-[600px]">

              {/* Sidebar Navigation */}
              <div className="lg:w-1/3 bg-slate-50 border-r border-slate-200 flex flex-col">
                <div className="p-6 border-b border-slate-200 bg-white">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <GitBranch className="text-teal-600" size={20} />
                    計畫目標選擇
                  </h3>
                </div>
                <div className="flex-1 overflow-y-auto">
                  {goals.map((goal) => {
                    const GoalIcon = goal.icon;
                    const isSelected = selectedGoal === goal.id;

                    return (
                      <button
                        key={goal.id}
                        onClick={() => setSelectedGoal(goal.id)}
                        className={`w-full text-left p-6 border-b border-slate-100 hover:bg-slate-50 transition border-l-4 ${
                          isSelected ? 'bg-teal-50 border-l-teal-500' : 'border-l-transparent'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${colorMap[goal.color].bg} ${colorMap[goal.color].text}`}>
                            <GoalIcon size={24} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800 text-sm">{goal.title}</p>
                            <p className="text-xs text-slate-500 mt-1">{goal.subtitle}</p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Content Area - 動態顯示選中的目標 */}
              <div className="lg:w-2/3 p-8 bg-slate-50/50 overflow-y-auto">
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-8 flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <span className={`w-2 h-8 rounded-full ${colorMap[currentGoal.color].bg}`}></span>
                        {currentGoal.title}
                      </h2>
                      <p className="text-slate-600 mt-2 text-sm leading-relaxed max-w-2xl">
                        {currentGoal.description}
                      </p>
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-1 ${colorMap[currentGoal.color].badge} rounded-full text-xs font-bold`}>
                        目標 {currentGoal.id}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Content Based on Goal Type */}
                  {renderGoalContent()}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 完整文件下載 */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="bg-teal-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white mb-2">完整計畫文件</h2>
                <p className="text-teal-50 text-sm">下載完整的強韌臺灣計畫簡介文件</p>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-100">
                      <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-1">
                        強韌臺灣計畫簡介.pdf
                      </h3>
                      <p className="text-gray-500 text-sm">內政部消防署</p>
                      <p className="text-gray-400 text-xs mt-1">檔案大小:約 2.5 MB</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <p className="text-gray-600 text-sm mb-6">
                    此文件包含完整的計畫緣起、目標、執行策略及預期成效等詳細資訊。
                  </p>

                  <a
                    href={pdfUrl}
                    download
                    className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-teal-600/20 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    下載完整文件
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PlanDetails;
