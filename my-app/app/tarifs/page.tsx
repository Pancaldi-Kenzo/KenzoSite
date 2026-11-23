'use client';
import { 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Zap, 
  Search,
  Smartphone,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { TiltCard } from '../components/reactbits/TitlCard';
import { AuroraBackground } from '../components/reactbits/AuroraBackground';

export default function TarifsPage() {
  return (
    <main className="relative min-h-screen pt-36 pb-32 px-6 bg-[#090d16] text-slate-100 overflow-hidden selection:bg-blue-600 selection:text-white">
      
      {/* Arrière-plan Aurora immersif */}
      <AuroraBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-28 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-black text-[10px] uppercase tracking-[0.4em] mb-6 backdrop-blur-md">
            <Star size={12} className="fill-blue-400" /> Investissement & Valeur
          </div>
          <h1 className="text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter leading-[0.9] mb-8 text-white">
            Votre vision, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">mon obsession.</span>
          </h1>
          <p className="text-slate-400 font-bold italic text-lg md:text-xl leading-relaxed max-w-2xl">
            Je prends le temps nécessaire pour que chaque pixel soit parfait. Pas de précipitation, juste un travail artisanal de haute précision.
          </p>
        </div>

        {/* GRILLE DE TARIFS 3D */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-36 items-stretch">
          {[
            {
              name: "Vitrine Alpha",
              price: "À partir de 1 500€",
              focus: "Objectif : Crédibilité",
              desc: "Une présence digitale qui rassure vos prospects et pose les bases de votre marque.",
              features: ["Design unique (Zéro Template)", "Architecture Next.js moderne", "SEO Technique optimisé", "Performance Mobile maximale", "Code source livré à 100%"],
              color: "bg-slate-900/60 backdrop-blur-xl border border-slate-800 text-slate-100",
              featured: false
            },
            {
              name: "Business Pro",
              price: "À partir de 2 900€",
              focus: "Objectif : Conversion",
              desc: "Pour transformer votre site en un véritable outil d'acquisition de clients.",
              features: ["Tout le pack Alpha", "Interface de gestion (CMS)", "Automatisation des contacts", "Analyse sémantique SEO", "Support direct & personnalisé"],
              color: "bg-gradient-to-b from-slate-900 to-blue-950/80 backdrop-blur-xl text-white shadow-2xl lg:-translate-y-4 border-2 border-blue-500/40",
              featured: true
            },
            {
              name: "Custom Studio",
              price: "Sur Devis",
              focus: "Objectif : Innovation",
              desc: "Pour les projets qui ne rentrent dans aucune case et demandent du sur-mesure.",
              features: ["Audit métier complet", "Développement d'outils métiers", "Intégrations complexes", "Sécurité & Tests poussés", "Évolutivité garantie"],
              color: "bg-slate-900/60 backdrop-blur-xl border border-slate-800 text-slate-100",
              featured: false
            }
          ].map((plan, i) => (
            <TiltCard key={i} className={`p-10 md:p-12 flex flex-col justify-between ${plan.color}`} isFeatured={plan.featured}>
              <div>
                <div className="mb-8">
                  <span className={`text-[10px] font-black uppercase tracking-widest flex items-center gap-2 ${plan.featured ? 'text-blue-400' : 'text-slate-400'}`}>
                    <Sparkles size={12} /> {plan.focus}
                  </span>
                  <h3 className="text-3xl font-[1000] uppercase italic tracking-tighter mt-3 mb-3">{plan.name}</h3>
                  <div className="text-4xl font-[1000] tracking-tighter mb-4 italic text-white">{plan.price}</div>
                  <p className="text-xs md:text-sm font-bold italic text-slate-400 leading-relaxed">{plan.desc}</p>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-[11px] font-black uppercase italic tracking-tighter text-slate-300">
                      <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/contact" className={`group relative w-full text-center py-5 rounded-2xl font-[1000] uppercase text-[10px] tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${plan.featured ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-600/30' : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'}`}>
                Discuter du projet
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </TiltCard>
          ))}
        </div>

        {/* SECTION : LE STANDARD */}
        <div className="mb-36">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-[1000] uppercase italic tracking-tighter mb-3 text-white">Ma méthode de travail_</h2>
            <p className="text-blue-400 font-black uppercase text-[10px] tracking-[0.3em]">Qualité artisanale vs production de masse</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Search, t: "Audit Initial", d: "Je prends le temps d'étudier votre marché avant de coder." },
              { icon: Zap, t: "Code Propre", d: "Une architecture légère et sans superflu pour durer des années." },
              { icon: Smartphone, t: "Tests Réels", d: "Je teste chaque page sur une dizaine d'appareils différents." },
              { icon: ShieldCheck, t: "Validation", d: "Rien n'est mis en ligne sans votre validation totale pixel par pixel." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-900/40 backdrop-blur-md border border-slate-800/80 p-8 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                  <item.icon size={22} />
                </div>
                <h4 className="font-black uppercase italic text-sm mb-2 text-white">{item.t}</h4>
                <p className="text-slate-400 text-[11px] font-bold italic leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GARANTIES */}
        <div className="relative bg-gradient-to-r from-slate-900 via-blue-950/40 to-slate-900 rounded-[3.5rem] p-10 md:p-20 text-white border border-slate-800 shadow-2xl overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-[1000] uppercase italic tracking-tighter mb-6">Votre projet, <br/><span className="text-blue-400">ma priorité.</span></h2>
              <p className="text-slate-400 font-bold italic mb-6 leading-relaxed">Je ne prends qu'un seul projet à la fois pour garantir une concentration totale sur votre business.</p>
              <div className="flex gap-3 items-center text-blue-400 font-black uppercase text-xs tracking-widest italic">
                <ShieldCheck size={18} /> Propriété intellectuelle garantie à 100%
              </div>
            </div>
            <div className="text-center lg:text-right">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.25em] hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30">
                Demander un devis
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}