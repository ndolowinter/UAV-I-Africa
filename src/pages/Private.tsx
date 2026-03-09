import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Lock, ShieldAlert, Key } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion } from 'motion/react';

export default function Private() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto mt-20"
    >
      <Card className="bg-black/60 border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.1)]">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
            <ShieldAlert className="w-8 h-8 text-red-500" />
          </div>
          <div>
            <CardTitle className="text-2xl text-white">Restricted Access</CardTitle>
            <CardDescription className="text-slate-400 mt-2">
              Government Private Network Portal
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/10 text-sm text-slate-300 text-center leading-relaxed">
            This portal is reserved for authorized government personnel, military assets, and cleared private foreign agencies. 
            <br /><br />
            The secure site is currently under construction and will be deployed in Phase 2.
          </div>
          
          <div className="space-y-3">
            <div className="relative">
              <Key className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input 
                type="password" 
                placeholder="Enter Clearance Code" 
                disabled
                className="w-full bg-black/40 border border-white/10 rounded-md pl-9 pr-4 py-2 text-sm text-white placeholder:text-slate-600 focus:outline-none opacity-50 cursor-not-allowed"
              />
            </div>
            <Button disabled className="w-full gap-2 bg-red-600/50 text-white/50 cursor-not-allowed">
              <Lock className="w-4 h-4" />
              Authenticate
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
