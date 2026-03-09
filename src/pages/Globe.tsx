import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Globe as GlobeIcon, MapPin, Plane, Navigation, Layers, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Globe() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 h-full flex flex-col"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Aerospace Globe</h1>
          <p className="text-slate-400">Interactive map of global aerospace infrastructure and live flights.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Layers className="w-4 h-4" />
            Layers
          </Button>
          <Button className="gap-2 bg-blue-600 text-white hover:bg-blue-500">
            <Maximize2 className="w-4 h-4" />
            Fullscreen
          </Button>
        </div>
      </div>

      <div className="flex-1 relative rounded-xl border border-white/10 overflow-hidden bg-black/80 flex items-center justify-center min-h-[600px]">
        {/* Placeholder for Mapbox/Three.js Globe */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 z-10 pointer-events-none">
          <GlobeIcon className="w-24 h-24 mb-4 opacity-20 animate-pulse" />
          <p className="text-lg font-medium text-slate-400">Interactive 3D Globe Loading...</p>
          <p className="text-sm mt-2 max-w-md text-center">
            (Mapbox GL JS or Three.js integration would render here, displaying airports, launch sites, spaceports, and live flight paths.)
          </p>
        </div>

        {/* Simulated Map UI Elements */}
        <div className="absolute top-4 left-4 z-20 space-y-2">
          <Card className="bg-black/80 border-white/10 backdrop-blur-md w-64">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Navigation className="w-4 h-4 text-blue-400" />
                Active Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1"><Plane className="w-3 h-3" /> Commercial Flights</span>
                <span className="text-blue-400 font-mono">14,205</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1"><MapPin className="w-3 h-3" /> Spaceports</span>
                <span className="text-red-400 font-mono">42</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1"><Navigation className="w-3 h-3" /> Drone Zones</span>
                <span className="text-purple-400 font-mono">1,204</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="absolute bottom-4 right-4 z-20 flex gap-2">
          <Button variant="outline" size="icon" className="bg-black/80 backdrop-blur-md border-white/10">
            <span className="text-lg font-bold">+</span>
          </Button>
          <Button variant="outline" size="icon" className="bg-black/80 backdrop-blur-md border-white/10">
            <span className="text-lg font-bold">-</span>
          </Button>
        </div>

        {/* Simulated Globe Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black/80 to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/1920/1080')] opacity-10 mix-blend-overlay z-0" />
      </div>
    </motion.div>
  );
}
