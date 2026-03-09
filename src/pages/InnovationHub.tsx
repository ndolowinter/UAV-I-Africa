import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Cpu, Github, FileText, ArrowUpRight, Zap, Search, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function InnovationHub() {
  const projects = [
    { id: 1, title: 'Open Source Flight Controller', author: 'Tech Arch. Li Wei', type: 'Hardware/Software', stars: 1240, forks: 340, tags: ['C++', 'STM32', 'PID'] },
    { id: 2, title: 'CFD Simulator for Hypersonic Flow', author: 'Dr. Sarah Jenkins', type: 'Research', stars: 850, forks: 120, tags: ['Python', 'OpenFOAM', 'Aerodynamics'] },
    { id: 3, title: 'AI-Driven Air Traffic Management', author: 'Eng. Marcus Thorne', type: 'Software', stars: 2100, forks: 540, tags: ['Machine Learning', 'Python', 'ATC'] },
    { id: 4, title: 'Modular CubeSat Framework', author: 'Cmdr. Alex Vance', type: 'Hardware', stars: 340, forks: 80, tags: ['CAD', 'Electronics', 'Space'] },
  ];

  const architects = [
    { id: 1, name: 'Dr. Sarah Jenkins', role: 'Aerospace Engineer', company: 'NASA JPL', projects: 12, followers: 4500 },
    { id: 2, name: 'Tech Arch. Li Wei', role: 'Systems Architect', company: 'DJI', projects: 8, followers: 3200 },
    { id: 3, name: 'Eng. Marcus Thorne', role: 'Software Engineer', company: 'Airbus', projects: 5, followers: 2100 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Innovation Hub</h1>
          <p className="text-slate-400">Showcase prototypes, research, and collaborate with Technology Architects.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search projects or architects..." 
              className="w-full bg-black/40 border border-white/10 rounded-md pl-9 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            />
          </div>
          <Button className="gap-2 bg-blue-600 text-white hover:bg-blue-500">
            <Zap className="w-4 h-4" />
            Upload Project
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-black/60 border-white/5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-blue-500" />
                  Featured Projects
                </CardTitle>
                <CardDescription>Cutting-edge research and open-source prototypes.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mt-4">
                {projects.map((project) => (
                  <div key={project.id} className="p-5 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors group">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors mb-1">
                          {project.title}
                        </h4>
                        <p className="text-sm text-slate-400">by <span className="text-blue-500/80">@{project.author}</span></p>
                      </div>
                      <Badge variant="outline" className="text-slate-300 border-white/10 bg-white/5 flex-shrink-0">
                        {project.type}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="bg-black/40 text-slate-300 hover:bg-white/10 text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                          <Github className="w-4 h-4" /> {project.stars}
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
                          <Users className="w-4 h-4" /> {project.forks}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10">
                        View Details <ArrowUpRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-black/60 border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Top Architects
              </CardTitle>
              <CardDescription>Leading innovators in the network.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {architects.map((arch) => (
                <div key={arch.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
                      <img src={`https://picsum.photos/seed/arch${arch.id}/100/100`} alt="Architect" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{arch.name}</h4>
                      <p className="text-xs text-slate-400">{arch.role}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-400">
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4 text-xs">
                View All Architects
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" />
                Research Papers
              </CardTitle>
              <CardDescription>Latest publications from the community.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="text-sm text-slate-300 hover:text-blue-400 cursor-pointer transition-colors flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  Advancements in Ion Thruster Efficiency (2026)
                </li>
                <li className="text-sm text-slate-300 hover:text-blue-400 cursor-pointer transition-colors flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  Machine Learning for Predictive Maintenance in Commercial Jets
                </li>
                <li className="text-sm text-slate-300 hover:text-blue-400 cursor-pointer transition-colors flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">•</span>
                  Urban Air Mobility: Infrastructure Challenges
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
