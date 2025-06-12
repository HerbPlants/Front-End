'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SurveySoonDialog({ open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="border-none max-w-sm p-6 text-center bg-green-shades-90">
        <DialogTitle className="sr-only">Point Success</DialogTitle>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="flex flex-col items-center space-y-4"
        >
          <Image width={144} height={144} src={`/images/assets/mascot/lovely.png`} alt="Mascot" className="-mt-6 -ml-6 w-48"/>
          <h3 className="text-xl font-bold text-gray-900">Survei Segera Hadir</h3>
          <p className="text-gray-700 text-sm">
            Sabar ya! Survei sedang dipersiapkan dan akan memberikan <span className="font-semibold">+5 poin</span> saat tersedia 🎉
          </p>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}
