export default function Home() {
  // return () 裡面的即是用於表達網頁內容的HTML標籤
  return (
    <>
      {/* Header */}
      <header className="bg-black text-white py-6">
        <div className="container mx-auto px-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <ul className="flex space-x-8">
              <li><a href="#about" className="hover:text-orange-400 transition-colors">關於我</a></li>
              <li><a href="#skills" className="hover:text-orange-400 transition-colors">技能</a></li>
              <li><a href="#portfolio" className="hover:text-orange-400 transition-colors">作品集</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">聯絡</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://picsum.photos/300/300?random=1" 
              alt="John Doe" 
              className="w-48 h-48 rounded-full mx-auto mb-8 object-cover border-4 border-orange-400"
            />
            <h2 className="text-5xl font-bold mb-6">John Doe</h2>
            <p className="text-xl text-gray-300 mb-8">全端開發工程師 | UI/UX 設計師 | 創意工作者</p>
            <p className="text-lg text-gray-400 leading-relaxed">
              我是一名充滿熱情的開發者，專注於創建美觀且實用的數位體驗。
              擁有超過 5 年的全端開發經驗，致力於將創意想法轉化為現實。
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">關於我</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://picsum.photos/600/400?random=2" 
                alt="工作環境" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">我的故事</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                從大學時期開始接觸程式設計，我對技術的熱情從未減退。
                在過去的職業生涯中，我參與過各種專案，從小型企業網站到大型電商平台，
                每一次的挑戰都讓我更加成長。
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                我相信好的設計不僅要美觀，更要實用。我致力於創建能夠解決真實問題的數位解決方案，
                並持續學習最新的技術趨勢。
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">50+</div>
                  <div className="text-gray-600">完成專案</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">5+</div>
                  <div className="text-gray-600">年經驗</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">100%</div>
                  <div className="text-gray-600">客戶滿意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">技能專長</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-orange-400 text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-4 text-black">前端開發</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• React.js / Next.js</li>
                <li>• HTML5 / CSS3 / JavaScript</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-orange-400 text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-4 text-black">後端開發</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Node.js / Express</li>
                <li>• Python / Django</li>
                <li>• PostgreSQL / MongoDB</li>
                <li>• RESTful APIs</li>
                <li>• GraphQL</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-orange-400 text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-4 text-black">設計工具</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Figma / Adobe XD</li>
                <li>• Photoshop / Illustrator</li>
                <li>• UI/UX Design</li>
                <li>• Prototyping</li>
                <li>• Design Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">作品集</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://picsum.photos/400/250?random=3" 
                alt="電商平台" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">電商平台</h3>
                <p className="text-gray-300 mb-4">使用 React 和 Node.js 開發的現代化電商平台</p>
                <div className="flex space-x-2">
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">Node.js</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://picsum.photos/400/250?random=4" 
                alt="企業管理系統" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">企業管理系統</h3>
                <p className="text-gray-300 mb-4">為中型企業設計的完整管理解決方案</p>
                <div className="flex space-x-2">
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">Vue.js</span>
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">Python</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://picsum.photos/400/250?random=5" 
                alt="行動應用程式" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">行動應用程式</h3>
                <p className="text-gray-300 mb-4">跨平台的行動應用程式開發</p>
                <div className="flex space-x-2">
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">React Native</span>
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">Firebase</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://picsum.photos/400/250?random=6" 
                alt="個人部落格" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">個人部落格</h3>
                <p className="text-gray-300 mb-4">使用 Next.js 開發的現代化部落格平台</p>
                <div className="flex space-x-2">
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">Tailwind</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://picsum.photos/400/250?random=7" 
                alt="數據分析儀表板" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">數據分析儀表板</h3>
                <p className="text-gray-300 mb-4">即時數據視覺化和管理系統</p>
                <div className="flex space-x-2">
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">D3.js</span>
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">Express</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://picsum.photos/400/250?random=8" 
                alt="社交媒體應用" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">社交媒體應用</h3>
                <p className="text-gray-300 mb-4">連接人們的創新社交平台</p>
                <div className="flex space-x-2">
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">Socket.io</span>
                  <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">John Doe</h3>
              <p className="text-gray-400 mb-4">
                致力於創建優秀的數位體驗，讓技術為生活帶來更多可能性。
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">聯絡資訊</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 john.doe@email.com</p>
                <p>📱 +886 912-345-678</p>
                <p>📍 台北市信義區</p>
                <p>🌐 www.johndoe.dev</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">服務項目</h4>
              <ul className="space-y-2 text-gray-400">
                <li>• 網站開發</li>
                <li>• 行動應用程式</li>
                <li>• UI/UX 設計</li>
                <li>• 技術諮詢</li>
                <li>• 專案管理</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 John Doe. 保留所有權利。</p>
          </div>
        </div>
      </footer>
    </>
  );
}
