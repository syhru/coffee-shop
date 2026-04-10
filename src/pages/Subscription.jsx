import React from "react";
import SubscriptionPlans from "../components/SubscriptionPlans";

/**
 * Subscription — Halaman dedicated untuk paket berlangganan kopi.
 * Menggunakan pt-32 agar konten tidak tertutup Navbar fixed.
 */
const Subscription = () => {
  return (
    <main className="pt-32 min-h-screen">
      <SubscriptionPlans />
    </main>
  );
};

export default Subscription;
