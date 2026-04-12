import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // 1. Matikan Scroll Restoration browser saat website pertama kali dimuat/di-refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Paksa ke atas saat refresh
    window.scrollTo(0, 0);
  }, []);

  // 2. Handle scroll ke atas saat pindah halaman (route change)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
