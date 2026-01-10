import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { BookOpen, CheckCircle, ChevronRight, Copy, Menu, X, ArrowLeft, Lightbulb, Target, Briefcase, Zap, Star, TrendingUp, Users, ExternalLink, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { curriculumData } from './data/curriculumData';
import logo from './assets/logo.png';

const phases = [
  { id: 1, title: "Foundation & Strategy", days: "1-15", color: "from-blue-500 to-cyan-400", bg: "bg-blue-500", text: "text-blue-200" },
  { id: 2, title: "Offer Construction", days: "16-30", color: "from-indigo-500 to-purple-400", bg: "bg-indigo-500", text: "text-indigo-200" },
  { id: 3, title: "Marketing & Lead Gen", days: "31-45", color: "from-purple-500 to-pink-400", bg: "bg-purple-500", text: "text-purple-200" },
  { id: 4, title: "Sales & Delivery", days: "46-60", color: "from-emerald-500 to-teal-400", bg: "bg-emerald-500", text: "text-emerald-200" },
];
// ... ScrollToTop ...
function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-900/95 backdrop-blur-xl border-r border-slate-800 text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0 shadow-2xl`}>
      <div className="flex items-center justify-between h-20 px-8 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ConsultAccel Logo" className="w-8 h-8 rounded-lg object-cover" />
          <span className="text-xl font-bold tracking-tight text-white">Consult<span className="text-blue-400">Accel</span></span>
        </div>
        <button onClick={() => setIsOpen(false)} className="lg:hidden text-slate-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-5rem)] pb-10 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
        <div className="px-4 py-6 space-y-8">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 border border-transparent hover:border-white/5">
            <div className="p-1.5 rounded-md bg-blue-500/20 text-blue-400"><TrendingUp size={16} /></div>
            Dashboard
          </Link>
          {phases.map((phase) => (
            <div key={phase.id} className="space-y-3">
              <h3 className="px-4 text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${phase.bg}`}></span>
                Phase {phase.id}
              </h3>
              <div className="space-y-1">
                {curriculumData.filter(d => d.phase === phase.id).map(day => (
                  <Link
                    key={day.day}
                    to={`/day/${day.day}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center px-4 py-2.5 mx-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group border-l-2 border-transparent hover:border-blue-500"
                  >
                    <span className="w-8 text-xs font-mono font-medium opacity-50 group-hover:opacity-100 transition-opacity">D{day.day}</span>
                    <span className="truncate group-hover:translate-x-1 transition-transform duration-200">{day.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-8 py-12"
    >
      <div className="relative mb-16 p-10 rounded-3xl bg-slate-900 overflow-hidden shadow-2xl ring-1 ring-white/10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl -ml-32 -mb-32 mix-blend-screen pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6 border border-blue-500/30">Pro Curriculum</span>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            From Zero to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">High-Ticket Consultant</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
            Your 60-day interactive roadmap. Strategy, Marketing, Sales, and Delivery—distilled into daily actionable steps.
          </p>
          <button onClick={() => document.getElementById('roadmap').scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Start Your Journey <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div id="roadmap" className="space-y-16">
        {phases.map((phase) => (
          <div key={phase.id} className="scroll-mt-24">
            <div className={`flex items-center gap-4 mb-8 pb-4 border-b border-slate-200/60`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                {phase.id}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{phase.title}</h2>
                <p className="text-slate-500 font-medium">Days {phase.days} &bull; Strategy & Execution</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {curriculumData.filter(d => d.phase === phase.id).map((day, idx) => (
                <Link key={day.day} to={`/day/${day.day}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="h-full group bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-500 text-xs font-bold border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">Day {day.day}</span>
                        {idx < 15 && <CheckCircle className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />}
                      </div>
                      <h4 className="font-bold text-lg text-slate-900 mb-2 leading-tight group-hover:text-blue-700 transition-colors">{day.title}</h4>
                      <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">{day.goal}</p>
                    </div>
                    <div className="mt-6 flex items-center text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                      View Lesson <ChevronRight className="w-3 h-3 ml-1" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function DayDetail() {
  const { id } = useParams();
  const fileDay = parseInt(id);
  const data = curriculumData.find(d => d.day === fileDay);
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('lesson');

  if (!data) return <div className="p-10 text-center">Day not found</div>;
  const phase = phases.find(p => p.id === data.phase);

  const copyPrompt = () => {
    navigator.clipboard.writeText(data.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-6xl mx-auto px-4 md:px-8 py-10"
    >
      <ScrollToTop />

      <nav className="flex items-center justify-between mb-6">
        <button onClick={() => navigate('/')} className="flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Map
        </button>
        <div className="flex gap-2">
          <button disabled={fileDay <= 1} onClick={() => navigate(`/day/${fileDay - 1}`)} className={`w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 transition-all ${fileDay <= 1 ? 'opacity-30' : 'hover:bg-slate-50 hover:shadow-md'}`}>
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
          <button disabled={fileDay >= 60} onClick={() => navigate(`/day/${fileDay + 1}`)} className={`w-10 h-10 rounded-full flex items-center justify-center border border-slate-200 transition-all ${fileDay >= 60 ? 'opacity-30' : 'hover:bg-slate-50 hover:shadow-md'}`}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </nav>

      <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative min-h-[80vh]">
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${phase.color}`} />

        {/* Hero Section */}
        <div className="px-8 md:px-12 py-12 border-b border-slate-100 bg-slate-50/30 relative">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white border border-slate-200 text-slate-900 shadow-sm`}>
                Day {data.day}
              </span>
              <span className={`text-xs font-bold uppercase tracking-wider ${phase.text}`}>Phase {phase.id}: {phase.title}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">{data.title}</h1>
            <div className="flex items-center gap-2 text-slate-600 font-medium">
              <Target className="w-5 h-5 text-blue-500" /> Goal: {data.goal}
            </div>
          </div>
        </div>

        {/* Action Bar (Tabs) */}
        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 md:px-12 flex space-x-6 overflow-x-auto no-scrollbar">
          {[
            { id: 'lesson', label: 'Lesson & Concept', icon: BookOpen },
            { id: 'case-study', label: 'Case Study', icon: Briefcase },
            { id: 'reading', label: 'Reading List', icon: Bookmark },
            { id: 'action', label: 'Action & AI', icon: Zap },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-4 text-sm font-bold border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
            >
              <tab.icon className="w-4 h-4" /> {tab.label}
            </button>
          ))}
        </div>

        <div className="px-8 md:px-12 py-10">
          <AnimatePresence mode="wait">
            {activeTab === 'lesson' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-3xl space-y-8">
                <div className="prose prose-lg prose-slate max-w-none">
                  <h3 className="text-xl font-bold text-slate-900">The Concept</h3>
                  <p className="text-slate-600 leading-relaxed">{data.concept}</p>
                  {data.content && <p className="text-slate-600 leading-relaxed mt-4">{data.content}</p>}
                </div>

                {data.illustration && (
                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-100 flex gap-4">
                    <Lightbulb className="w-6 h-6 text-amber-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-amber-900 mb-2">Think about it like this...</h4>
                      <p className="text-amber-800 text-sm leading-relaxed">{data.illustration}</p>
                    </div>
                  </div>
                )}

                {data.tips && data.tips.length > 0 && (
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Star className="w-5 h-5 text-yellow-500" /> Pro Tips</h3>
                    <ul className="space-y-3">
                      {data.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-700 text-sm">
                          <CheckCircle className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" /> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'case-study' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-3xl">
                {data.caseStudy ? (
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-100 text-blue-700 rounded-lg"><Briefcase className="w-6 h-6" /></div>
                      <h2 className="text-2xl font-bold text-slate-900">{typeof data.caseStudy === 'object' ? data.caseStudy.title : 'Case Study'}</h2>
                    </div>

                    {typeof data.caseStudy === 'object' ? (
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">The Challenge</h4>
                          <p className="text-slate-700 leading-relaxed">{data.caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">The Solution</h4>
                          <p className="text-slate-700 leading-relaxed">{data.caseStudy.solution}</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                          <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">The Result</h4>
                          <p className="text-slate-800 font-medium leading-relaxed">{data.caseStudy.result || data.caseStudy.outcome}</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-slate-700 leading-relaxed">{data.caseStudy}</p>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-20 text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <Briefcase className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>No specific case study for this day yet.</p>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'reading' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-3xl">
                {data.readingList && data.readingList.length > 0 ? (
                  <div className="grid gap-4">
                    {data.readingList.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors shadow-sm">
                        <div className="p-3 bg-slate-50 rounded-lg text-slate-500">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{item.type}</span>
                            {item.author && <span className="text-xs text-slate-500">by {item.author}</span>}
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-slate-600 mb-3">{item.link || item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 text-slate-400 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-20" />
                    <p>No reading list available for this topic.</p>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'action' && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="max-w-3xl space-y-10">
                <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><CheckCircle className="w-6 h-6 text-emerald-400" /> Today's Action</h2>
                    <p className="text-xl leading-relaxed text-slate-200">{data.action}</p>
                  </div>
                </div>

                <div className="border rounded-2xl p-1 bg-gradient-to-br from-purple-100 to-pink-100">
                  <div className="bg-white rounded-xl p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-100 text-purple-600"><Zap className="w-6 h-6" /></div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">AI Accelerator</h2>
                          <p className="text-slate-500 text-sm">Paste this into ChatGPT/Claude</p>
                        </div>
                      </div>
                      <button
                        onClick={copyPrompt}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-600 font-medium transition-colors flex items-center gap-2 text-sm"
                      >
                        {copied ? <><CheckCircle className="w-4 h-4 text-emerald-500" /> Copied</> : <><Copy className="w-4 h-4" /> Copy</>}
                      </button>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-6 border border-slate-100">
                      <p className="font-mono text-slate-600 text-sm whitespace-pre-wrap">{data.prompt}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-12 flex justify-between items-center px-4">
        <button
          onClick={() => navigate(fileDay > 1 ? `/day/${fileDay - 1}` : '/')}
          disabled={fileDay <= 1}
          className={`text-slate-500 hover:text-slate-900 font-medium flex items-center gap-2 transition-colors ${fileDay <= 1 ? 'opacity-0 cursor-default' : ''}`}
        >
          <ArrowLeft className="w-4 h-4" /> Previous Lesson
        </button>
        <button
          onClick={() => navigate(fileDay < 60 ? `/day/${fileDay + 1}` : '/')}
          disabled={fileDay >= 60}
          className={`px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2 ${fileDay >= 60 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-500 hover:scale-105'}`}
        >
          Mark Complete & Next <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {isSidebarOpen && (
          <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden" />
        )}

        <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
          <div className="lg:hidden absolute top-0 left-0 right-0 z-30 p-4 flex justify-between items-center pointer-events-none">
            <button onClick={() => setIsSidebarOpen(true)} className="pointer-events-auto p-2 bg-white/80 backdrop-blur shadow-md rounded-lg text-slate-700">
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <main className="flex-1 overflow-y-auto scroll-smooth bg-slate-50">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/day/:id" element={<DayDetail />} />
              <Route path="*" element={<div className="p-10 text-center text-red-500">404: Page Not Found</div>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
