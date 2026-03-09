import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Play, Mic, Radio, Search, Filter, MoreVertical, Clock, Headphones } from 'lucide-react';
import { motion } from 'motion/react';

export default function Podcasts() {
  const episodes = [
    { id: 1, title: 'The Future of Hypersonic Travel', host: 'Dr. Sarah Jenkins', duration: '45:20', status: 'Live', listeners: 3402, tags: ['Hypersonics', 'Propulsion'] },
    { id: 2, title: 'Orbital Mechanics for Beginners', host: 'Cmdr. Alex Vance', duration: '1:12:05', status: 'Recorded', listeners: 12050, tags: ['Orbital', 'Education'] },
    { id: 3, title: 'Drone Swarm AI Coordination', host: 'Tech Arch. Li Wei', duration: '58:10', status: 'Recorded', listeners: 8400, tags: ['AI', 'Drones'] },
    { id: 4, title: 'Next-Gen Avionics Systems', host: 'Eng. Marcus Thorne', duration: '1:05:30', status: 'Recorded', listeners: 5200, tags: ['Avionics', 'Systems'] },
    { id: 5, title: 'Commercial Spaceflight Regulations', host: 'Atty. Elena Rostova', duration: '42:15', status: 'Recorded', listeners: 3100, tags: ['Law', 'Spaceflight'] },
    { id: 6, title: 'Sustainable Aviation Fuels (SAF)', host: 'Dr. Emily Chen', duration: '55:40', status: 'Recorded', listeners: 6700, tags: ['Sustainability', 'Fuels'] },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Briefings</h1>
          <p className="text-slate-400">Discover and stream UAV and aerospace intelligence briefings.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search episodes..." 
              className="w-full bg-black/40 border border-white/10 rounded-md pl-9 pr-4 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
          <Button variant="radar" className="gap-2">
            <Radio className="w-4 h-4" />
            Go Live
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {episodes.map((ep) => (
          <Card key={ep.id} className="bg-black/60 border-white/5 hover:border-white/20 transition-all group overflow-hidden flex flex-col">
            <div className="relative h-48 bg-slate-800 overflow-hidden">
              <img src={`https://picsum.photos/seed/${ep.id + 10}/600/400`} alt="Cover" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              
              {ep.status === 'Live' && (
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500/20 border border-red-500/50 text-red-400 px-2.5 py-1 rounded-full text-xs font-bold backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  LIVE
                </div>
              )}
              
              <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-xs font-mono text-white flex items-center gap-1">
                <Clock className="w-3 h-3 text-blue-400" />
                {ep.duration}
              </div>
            </div>
            
            <CardHeader className="pb-2 flex-grow">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg leading-tight group-hover:text-blue-400 transition-colors">{ep.title}</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2 -mt-2 text-slate-400">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
              <CardDescription className="flex items-center gap-2 mt-2">
                <Mic className="w-3 h-3" /> {ep.host}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pb-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {ep.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-white/5 text-slate-300 hover:bg-white/10 text-[10px]">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Headphones className="w-3.5 h-3.5" />
                  {ep.listeners.toLocaleString()}
                </div>
                <Button size="sm" className="gap-2 bg-blue-600 text-white hover:bg-blue-500">
                  <Play className="w-4 h-4 fill-current" />
                  Listen
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
