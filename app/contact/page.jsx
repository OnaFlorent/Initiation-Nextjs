"use client"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      contact page
    </motion.div>
  )
}

export default Contact