import React from "react";
import { motion } from 'framer-motion';
import OurSignatureBeans from "../components/OurSignatureBeans";

/**
 * OurBeans — Halaman dedicated untuk menampilkan koleksi biji kopi.
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

const OurBeans = () => {
  return (
    <motion.main initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={pageVariants} className="pt-32 min-h-screen">
      <OurSignatureBeans />
    </motion.main>
  );
};

export default OurBeans;
