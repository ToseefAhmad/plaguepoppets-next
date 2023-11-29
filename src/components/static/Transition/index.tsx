'use client'
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { PropsWithChildren } from 'react'

const variants = {
  hidden: {
    opacity: 0,

  },
  out: {
    opacity: 0,
    transition: {
      duration: 0
    }

  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delay: 0.2
    }
    

  }
};

export const Transition = ({ keyProp, children }: PropsWithChildren<{keyProp?: string}>) => {
  
  const pathname = usePathname()
  return (

      <AnimatePresence
        initial={true}
        mode="wait"
        
      >
        {keyProp || pathname ? (
        <motion.div
          key={keyProp ? keyProp : pathname}
          animate="in"
          initial="hidden"
          exit="out"
          variants={variants}
        >
          {children}
        </motion.div>
        ) : <></> }
      </AnimatePresence>

  );
};