import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MessageSquare, Users, HelpCircle, Calendar, Hash, ArrowUpRight, Flame } from 'lucide-react';
import { motion } from 'motion/react';

export default function Community() {
  const forums = [
    { id: 1, title: 'Aerodynamics & Propulsion', topics: 1240, posts: 8402, latest: '2m ago' },
    { id: 2, title: 'Avionics & Software', topics: 850, posts: 5120, latest: '15m ago' },
    { id: 3, title: 'Space Exploration', topics: 2100, posts: 15400, latest: '1h ago' },
    { id: 4, title: 'UAVs & Drones', topics: 340, posts: 2100, latest: '3h ago' },
  ];

  const activeDiscussions = [
    { id: 1, title: 'What are the main challenges of scaling electric propulsion for commercial airliners?', author: 'AeroGeek99', replies: 45, views: 1200, isHot: true },
    { id: 2, title: 'Understanding the OPUS 4.6 summary on the recent SpaceX launch', author: 'OrbitalMechanic', replies: 12, views: 340, isHot: false },
    { id: 3, title: 'AMA: I am a Lead Systems Engineer at Boeing. Ask me anything!', author: 'BoeingLead', replies: 156, views: 5400, isHot: true },
    { id: 4, title: 'Best resources for learning computational fluid dynamics (CFD)?', author: 'StudentPilot', replies: 8, views: 150, isHot: false },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Community Hub</h1>
          <p className="text-slate-400">Engage with aerospace professionals and enthusiasts.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="w-4 h-4" />
            Events
          </Button>
          <Button className="gap-2 bg-blue-600 text-white hover:bg-blue-500">
            <MessageSquare className="w-4 h-4" />
            New Topic
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-black/60 border-white/5">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-500" />
                  Active Discussions
                </CardTitle>
                <CardDescription>Trending topics across the network.</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mt-4">
                {activeDiscussions.map((disc) => (
                  <div key={disc.id} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug">
                          {disc.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span className="text-blue-500/80">@{disc.author}</span>
                          <span>•</span>
                          <span>{disc.replies} replies</span>
                          <span>•</span>
                          <span>{disc.views} views</span>
                        </div>
                      </div>
                      {disc.isHot && (
                        <Badge variant="outline" className="text-orange-400 border-orange-500/20 bg-orange-500/10 flex-shrink-0">
                          Hot
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/60 border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="w-5 h-5 text-blue-500" />
                Forums
              </CardTitle>
              <CardDescription>Structured discussion boards by topic.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {forums.map((forum) => (
                  <div key={forum.id} className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors cursor-pointer group">
                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">{forum.title}</h4>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {forum.topics}</span>
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {forum.posts}</span>
                      </div>
                      <span>{forum.latest}</span>
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
              <CardTitle>Upcoming AMAs</CardTitle>
              <CardDescription>Live Q&A sessions with experts.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
                    <img src="https://picsum.photos/seed/ama1/100/100" alt="Host" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Dr. Neil Tyson</h4>
                    <p className="text-xs text-blue-400">Astrophysicist</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 mt-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Tomorrow, 2 PM EST</span>
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">RSVP</Button>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden">
                    <img src="https://picsum.photos/seed/ama2/100/100" alt="Host" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Gwynne Shotwell</h4>
                    <p className="text-xs text-blue-400">President, SpaceX</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400 mt-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Friday, 10 AM EST</span>
                  <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">RSVP</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-900/10 border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-400">
                <HelpCircle className="w-5 h-5" />
                AI Q&A Assistant
              </CardTitle>
              <CardDescription>Ask questions based on podcast transcripts.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-slate-300">
                  Powered by Anthropic OPUS 4.6, our AI assistant can answer technical questions using knowledge from all recorded episodes.
                </p>
                <Button className="w-full gap-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border border-blue-500/50">
                  Ask AI <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
