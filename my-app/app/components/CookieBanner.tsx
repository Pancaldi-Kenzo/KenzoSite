'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // On vérifie si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem('kzv_cookie_consent');
    if (!cookieConsent) {
      // Si aucun choix n'est enregistré, on affiche la bannière après 1,5 seconde (plus élégant)
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kzv_cookie_consent', 'accepted');
    setIsVisible(false);
    // Ici, tu pourras initialiser tes scripts de tracking (Google Analytics, etc.) si tu en as
  };

  const handleDecline = () => {
    localStorage.setItem('kzv_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl bg-white/90 backdrop-blur-2xl border border-slate-200/80 p-6 md:p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 z-[100] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          {/* Texte et Icône */}
          <div className="flex items-start gap-4 max-w-md">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl shrink-0 hidden sm:block">
              <ShieldCheck size={24} />
            </div>
            <div className="space-y-1">
              <h5 className="text-sm font-black uppercase tracking-wider text-slate-950 flex items-center gap-2">
                <span className="sm:hidden">🛡️</span> Respect de la vie privée
              </h5>
              <p className="text-xs text-slate-500 font-medium italic leading-relaxed">
                Le studio utilise des cookies pour analyser le trafic de manière anonyme et optimiser votre expérience. Pas de revente de données, c&apos;est promis.
              </p>
            </div>
          </div>

          {/* Boutons d'actions */}
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={handleDecline}
              className="flex-1 md:flex-none text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-600 px-5 py-3.5 rounded-xl transition-all"
            >
              Refuser
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-none bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest px-6 py-3.5 rounded-2xl shadow-lg shadow-blue-600/10 active:scale-95 transition-all text-center whitespace-nowrap"
            >
              Accepter
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}