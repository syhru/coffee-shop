import React from "react";
import { motion } from 'framer-motion';
import TheRoastery from "../components/TheRoastery";

/**
 * Roastery — Halaman dedicated untuk proses sangrai kopi.
 * Menggunakan pt-32 agar konten tidak tertutup Navbar fixed.
 */
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const Roastery = () => {
  return (
    <motion.main initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={pageVariants} className="pt-32 min-h-screen">
      <TheRoastery />
    </motion.main>
  );
};

export default Roastery;
