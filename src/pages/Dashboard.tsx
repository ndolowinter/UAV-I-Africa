import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Activity, Radio, Users, Cpu, PlayCircle, BarChart3, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Dashboard() {
  const stats = [
    { label: 'Active Listeners', value: '12,492', change: '+14%', icon: Users, color: 'text-blue-400' },
    { label: 'Live Streams', value: '8', change: '+2', icon: Radio, color: 'text-red-400' },
    { label: 'AI Summaries Generated', value: '1,204', change: '+89', icon: Cpu, color: 'text-blue-300' },
    { label: 'Network Latency', value: '24ms', change: '-2ms', icon: Activity, color: 'text-slate-300' },
  ];

  const recentEpisodes = [
    { id: 1, title: 'The Future of Hypersonic Travel', host: 'Dr. Sarah Jenkins', duration: '45:20', status: 'Live', listeners: 3402 },
    { id: 2, title: 'Orbital Mechanics for Beginners', host: 'Cmdr. Alex Vance', duration: '1:12:05', status: 'Recorded', listeners: 12050 },
    { id: 3, title: 'Drone Swarm AI Coordination', host: 'Tech Arch. Li Wei', duration: '58:10', status: 'Recorded', listeners: 8400 },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Command Center</h1>
          <p className="text-slate-400">Overview of UAV Intel Africa network activity and metrics.</p>
        </div>
        <Button variant="radar" className="gap-2">
          <Radio className="w-4 h-4" />
          Go Live
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="bg-black/60 border-white/5 hover:border-white/10 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="text-blue-400 border-blue-500/20 bg-blue-500/5">
                  {stat.change}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-slate-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-black/60 border-white/5">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle>Recent Transmissions</CardTitle>
              <CardDescription>Latest podcast episodes and live streams.</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="gap-1 text-slate-400">
              View All <ArrowUpRight className="w-4 h-4" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mt-4">
              {recentEpisodes.map((ep) => (
                <div key={ep.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${ep.id}/100/100`} alt="Cover" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      </div>
                      {ep.status === 'Live' && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border border-black"></span>
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">{ep.title}</h4>
                      <p className="text-xs text-slate-400">{ep.host}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="hidden md:flex flex-col items-end">
                      <span className="text-xs text-slate-400 flex items-center gap-1"><Users className="w-3 h-3" /> {ep.listeners.toLocaleString()}</span>
                      <span className="text-xs text-slate-500">{ep.duration}</span>
                    </div>
                    <Button variant="ghost" size="icon" className="text-slate-400 group-hover:text-white rounded-full bg-white/5">
                      <PlayCircle className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-white/5">
          <CardHeader>
            <CardTitle>AI Intelligence Status</CardTitle>
            <CardDescription>Anthropic OPUS 4.6 Integration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Real-time Transcription</span>
                <span className="text-blue-400 font-mono">Active</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-full animate-pulse" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Topic Extraction</span>
                <span className="text-blue-400 font-mono">Processing</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 w-[65%]" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Glossary Builder</span>
                <span className="text-slate-500 font-mono">Idle</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-slate-600 w-[10%]" />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Button variant="outline" className="w-full gap-2 text-xs">
                <BarChart3 className="w-4 h-4" />
                View AI Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
