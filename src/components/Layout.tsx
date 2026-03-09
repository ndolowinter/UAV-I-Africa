import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Plane, Mic, Users, Zap, Globe, FileCode2, Settings, Bell, Search, Target, Lock } from 'lucide-react';
import { cn } from '@/utils/cn';

export default function Layout() {
  const navItems = [
    { icon: Target, label: 'Overview', path: '/' },
    { icon: Plane, label: 'Dashboard', path: '/dashboard' },
    { icon: Mic, label: 'Briefings', path: '/podcasts' },
    { icon: Users, label: 'Community', path: '/community' },
    { icon: Zap, label: 'Innovation Hub', path: '/innovation' },
    { icon: Globe, label: 'Aerospace Globe', path: '/globe' },
    { icon: FileCode2, label: 'Architecture', path: '/architecture' },
    { icon: Lock, label: 'Private', path: '/private' },
  ];

  return (
    <div className="flex h-screen w-full bg-[#050505] text-slate-200 font-sans overflow-hidden flex-col">
      {/* Topbar / Header */}
      <header className="h-16 border-b border-white/10 bg-black/80 backdrop-blur-xl flex items-center justify-between px-6 z-20 flex-shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm overflow-hidden flex flex-col border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] flex-shrink-0">
              <div className="flex-1 bg-black"></div>
              <div className="h-[2px] bg-white"></div>
              <div className="flex-1 bg-red-600"></div>
              <div className="h-[2px] bg-white"></div>
              <div className="flex-1 bg-green-600"></div>
            </div>
            <span className="font-bold text-lg tracking-tight text-white truncate">UAV I AFRICA</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-blue-900/30 text-blue-400 border border-blue-500/30 shadow-[inset_0_0_20px_rgba(37,99,235,0.1)]"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  )
                }
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:block relative w-48">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            />
          </div>
          <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
          </button>
          <div className="h-6 w-px bg-white/10" />
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
              <img src="https://picsum.photos/seed/avatar/100/100" alt="User" referrerPolicy="no-referrer" />
            </div>
            <Settings className="w-4 h-4 text-slate-400 cursor-pointer hover:text-white" />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex min-h-0 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-[120px]" />
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto z-10 flex flex-col">
          <div className="flex-1 p-8">
            <Outlet />
          </div>
          
          {/* Footer */}
          <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md py-6 px-8 mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                &copy; {new Date().getFullYear()} UAV Intel Africa. All rights reserved.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Partners:</span>
                <span>Boeing</span>
                <span>Airbus</span>
                <span>The Defense Force</span>
                <span>Airforce</span>
                <span>Navy</span>
                <span>Space Agency</span>
                <span>National Security</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
