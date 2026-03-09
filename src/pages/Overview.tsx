import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Scale, Rocket, Plane, Target, Eye, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Overview() {
  const keyAreas = [
    {
      title: 'Legal Tech',
      description: 'Providing legal framework services, regulatory procedures, and compliance documentation in accordance with ICAO standards.',
      icon: Scale,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20'
    },
    {
      title: 'Robotics and Drones',
      description: 'Operating privately in aerial mapping and advanced drone technologies, while fostering a community of practice.',
      icon: Plane,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20'
    },
    {
      title: 'Space Tech',
      description: 'Focusing on satellites for earth observation and research in aerospace, aeronautical, and astronautics.',
      icon: Rocket,
      color: 'text-red-400',
      bg: 'bg-red-500/10',
      border: 'border-red-500/20'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8 max-w-6xl mx-auto"
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Organization Overview</h1>
        <p className="text-slate-400">The strategic foundation and key focus areas of UAV Intel Africa.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-black/60 border-white/5 hover:border-blue-500/30 transition-colors group">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-400">
              <Target className="w-5 h-5" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 leading-relaxed">
              To partner with the government to provide a community of practice and public engagement, while operating privately in drones for aerial mapping and satellites for earth observation.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-white/5 hover:border-red-500/30 transition-colors group">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-400">
              <Eye className="w-5 h-5" />
              Our Vision
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 leading-relaxed">
              To lead research and potential projects in aerospace, aeronautical, and astronautics, while establishing strong partnerships with private foreign agencies and military assets.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-black/60 border-white/5 hover:border-emerald-500/30 transition-colors group">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-400">
              <Heart className="w-5 h-5" />
              Core Values
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Public-Private Partnership</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> ICAO Regulatory Compliance</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Community Engagement</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> International Collaboration</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="pt-6">
        <h2 className="text-2xl font-bold tracking-tight text-white mb-6">Key Areas of Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keyAreas.map((area, idx) => (
            <Card key={idx} className="bg-black/60 border-white/5 overflow-hidden relative group">
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-transparent via-transparent to-white`} />
              <CardContent className="p-8">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${area.bg} ${area.border} border`}>
                  <area.icon className={`w-6 h-6 ${area.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
