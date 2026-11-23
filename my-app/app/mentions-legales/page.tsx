'use client';
import Link from 'next/link';
import { ArrowLeft, Scale, Info, ShieldAlert, ShieldCheck, Cookie, Link2, Gavel, FileText, HelpCircle } from 'lucide-react';

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-300 font-sans p-8 md:p-24 selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto">
        
        {/* BOUTON RETOUR */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-500 hover:text-white transition-all mb-12">
          <ArrowLeft size={14} /> Retour au studio
        </Link>

        <h1 className="text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter text-white mb-4">
          Mentions Légales <br/><span className="text-blue-600">& Conditions Générales.</span>
        </h1>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-16">Document Officiel — KZV</p>

        <div className="space-y-12 bg-slate-900/50 border border-white/5 p-8 md:p-12 rounded-[3rem] backdrop-blur-xl text-sm leading-relaxed text-slate-400">
          
          {/* 1. PRÉSENTATION DU SITE */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black uppercase tracking-wider text-xs mb-4">
              <Scale size={16} className="text-blue-500" />
              <h2>1. Présentation du site</h2>
            </div>
            <p>
              En vertu de l’article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique, il est précisé aux utilisateurs du site <span className="text-white">https://kenzosite-a99a.onrender.com/</span> l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Propriétaire :</strong> KZV - Auto-entrepreneur au capital de €. Le propriétaire du site internet est joignable à cette adresse : <span className="text-blue-400">teamrafale.chaine@gmail.com</span>.</li>
              <li><strong className="text-white">Adresse :</strong> Chemin de la manou, 81500 Giroussens, France.</li>
              <li><strong className="text-white">SIRET :</strong> En cours d’immatriculation.</li>
              <li><strong className="text-white">Créateur du site :</strong> KZV.</li>
              <li><strong className="text-white">Responsable publication :</strong> Kenzo Pancaldi - <span className="text-blue-400">teamrafale.chaine@gmail.com</span>.</li>
              <li><strong className="text-white">Webmaster :</strong> KZV - <span className="text-blue-400">teamrafale.chaine@gmail.com</span>.</li>
              <li><strong className="text-white">Hébergeur :</strong> OnRender, 525 Brannan Street, Suite 300, 94107 San Francisco, Californie (CA).</li>
              <li><strong className="text-white">Crédits :</strong> Design et développement : [KZV] / Rédaction des textes : [KZV]. Ces mentions légales sont offertes par Le Générateur de Mentions Légales du Site Français.</li>
            </ul>
          </section>

          <hr className="border-white/5" />

          {/* 2. CONDITIONS GÉNÉRALES D’UTILISATION */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black uppercase tracking-wider text-xs mb-4">
              <Info size={16} className="text-blue-500" />
              <h2>2. Conditions générales d’utilisation</h2>
            </div>
            <p>
              L’utilisation du site <span className="text-white">https://kenzosite-a99a.onrender.com/</span> implique l’acceptation pleine et entière des présentes conditions d’utilisation, susceptibles d’être modifiées ou complétées à tout moment. Les utilisateurs sont donc invités à les consulter régulièrement.
            </p>
            <p>
              Le site est normalement accessible à tout moment. Une interruption pour maintenance technique peut toutefois être décidée par l’éditeur.
            </p>
          </section>

          <hr className="border-white/5" />

          {/* 3. DESCRIPTION DES SERVICES FOURNIS */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black uppercase tracking-wider text-xs mb-4">
              <FileText size={16} className="text-blue-500" />
              <h2>3. Description des services fournis</h2>
            </div>
            <p>
              Kenzo Pancaldi, s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p>
              Tous les informations indiquées sur le site <span className="text-white">https://kenzosite-a99a.onrender.com/</span> sont données à titre indicatif, et sont susceptibles d’évoluer. Aussi, toutes les informations indiquées sur le site Site <span className="text-white">https://kenzosite-a99a.onrender.com/</span> sont données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.
            </p>
            <p>
              Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email, à l’adresse <span className="text-blue-400">teamrafale.chaine@gmail.com</span>, en décrivant le problème de la manière la plus précise possible (vous vous trouver sur un téléphone, une tablette ou bien un ordinateur ; nom de la page qui pose problème, type de système d’exploitation, navigateur utilisé,…).
            </p>
            <p>
              Kenzo Pancaldi n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
            </p>
          </section>

          <hr className="border-white/5" />

          {/* 4. PROPRIÉTÉ INTELLECTUELLE */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black uppercase tracking-wider text-xs mb-4">
              <Scale size={16} className="text-blue-500" />
              <h2>4. Propriété intellectuelle</h2>
            </div>
            <p>
              Le propriétaire du site détient les droits de propriété intellectuelle ou les droits d’usage sur tous les éléments accessibles sur le site : textes, images, graphismes, logo, icônes, sons, logiciels, etc. Toute reproduction, représentation, modification, publication, adaptation, totale ou partielle de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable du propriétaire.
            </p>
            <p>
              Toute exploitation non autorisée du site ou d’un de ses éléments sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
            <p>
              Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une action en justice à votre encontre.
            </p>
          </section>

          <hr className="border-white/5" />

          {/* 5. LIMITATION DE RESPONSABILITÉ */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black uppercase tracking-wider text-xs mb-4">
              <ShieldAlert size={16} className="text-blue-500" />
              <h2>5. Limitation de responsabilité</h2>
            </div>
            <p>
              L’utilisateur s’engage à accéder au site avec un matériel récent, ne contenant pas de virus et avec un navigateur à jour.
            </p>
            <p>
              Le propriétaire ne saurait être tenu responsable des dommages directs ou indirects causés au matériel de l’utilisateur ou de pertes de données à la suite d’une utilisation du site. Il ne pourra non plus être tenu responsable des dommages indirects liés à l’utilisation du site.
            </p>
            <p>
              Des espaces interactifs peuvent être mis à disposition des utilisateurs. Le propriétaire se réserve le droit de supprimer sans mise en demeure tout contenu contrevenant à la législation française, notamment en matière de protection des données ou de propos illicites.
            </p>
          </section>

          <hr className="border-white/5" />

          {/* 6. GESTION DES DONNÉES PERSONNELLES */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black uppercase tracking-wider text-xs mb-4">
              <ShieldCheck size={16} className="text-blue-500" />
              <h2>6. Gestion des données personnelles</h2>
            </div>
            <p>Le responsable du traitement des données personnelles est : <span className="text-white">Kenzo Pancaldi</span>.</p>
            <p>
              Les données personnelles collectées via le site <span className="text-white">https://kenzosite-a99a.onrender.com/</span> sont nécessaires pour :
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>répondre aux demandes des utilisateurs (formulaires de contact, inscriptions, devis, etc.) ;</li>
              <li>réaliser des mesures de fréquentation (cookies analytiques) ;</li>
              <li>assurer le bon fonctionnement du site.</li>
            </ul>
            <p><strong className="text-white">Base légale du traitement :</strong> Les traitements sont fondés sur : le consentement explicite de l’utilisateur (formulaires, cookies non essentiels) ; l’exécution d’un contrat ou de mesures précontractuelles (ex. : demande de devis) ; ou l’intérêt légitime du responsable de traitement (ex. : sécurité du site, statistiques anonymisées).</p>
            <p><strong className="text-white">Durée de conservation :</strong> 3 ans pour les données de contact (prospects), 5 ans pour les clients, ou toute autre durée imposée par la loi.</p>
            <p><strong className="text-white">Droits des utilisateurs :</strong> Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants : Droit d’accès à vos données ; Droit de rectification ; Droit à l’effacement (« droit à l’oubli ») ; Droit d’opposition ; Droit à la portabilité ; Droit à la limitation du traitement. Pour exercer vos droits, vous pouvez adresser une demande écrite à l’adresse suivante : <span className="text-blue-400">teamrafale.chaine@gmail.com</span>, accompagnée d’un justificatif d’identité valide.</p>
            <p><strong className="text-white">Confidentialité :</strong> Les données personnelles ne sont en aucun cas cédées, louées ou vendues à des tiers, sauf en cas d’obligation légale ou judiciaire.</p>
            <p><strong className="text-white">Lieu de stockage :</strong> Les données sont hébergées dans l’Union européenne, sur des serveurs sécurisés exploités par OnRender.</p>
          </section>

          <hr className="border-white/5" />

          {/* 7. POLITIQUE DE COOKIES */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black uppercase tracking-wider text-xs mb-4">
              <Cookie size={16} className="text-blue-500" />
              <h2>7. Politique de cookies</h2>
            </div>
            <p>
              La navigation sur le site <span className="text-white">https://kenzosite-a99a.onrender.com/</span> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. 
            </p>
            <p>
              Un cookie est un petit fichier texte enregistré sur le disque dur de votre terminal (ordinateur, tablette, mobile) lors de votre visite sur un site internet. Il permet de conserver des données utilisateur afin de faciliter la navigation, permettre certaines fonctionnalités ou analyser le comportement des internautes.
            </p>
            <p><strong className="text-white">Cookies soumis au consentement :</strong> Les cookies non essentiels (ex. : mesure d’audience, partage réseaux sociaux) sont déposés uniquement après votre accord explicite.</p>
            <p>
              Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :  
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xs font-mono bg-slate-950/40 p-4 rounded-xl border border-white/5">
              <li><strong>Sous Internet Explorer :</strong> onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.</li>
              <li><strong>Sous Firefox :</strong> en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l’onglet Options. Cliquer sur l’onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l’historique. Enfin décochez-la pour désactiver les cookies.</li>
              <li><strong>Sous Safari :</strong> Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section “Confidentialité”, cliquez sur Paramètres de contenu. Dans la section “Cookies”, vous pouvez bloquer les cookies.</li>
              <li><strong>Sous Chrome :</strong> Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section “Confidentialité”, cliquez sur préférences. Dans l’onglet “Confidentialité”, vous pouvez bloquer les cookies.</li>
            </ul>
          </section>

          <hr className="border-white/5" />

          {/* 8. LIENS HYPERTEXTES */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black uppercase tracking-wider text-xs mb-4">
              <Link2 size={16} className="text-blue-500" />
              <h2>8. Liens hypertextes</h2>
            </div>
            <p>
              Le site <span className="text-white">https://kenzosite-a99a.onrender.com/</span> peut contenir un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de Kenzo Pancaldi. 
            </p>
            <p>
              Cependant, Kenzo Pancaldi n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.
            </p>
            <p>
              Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Kenzo Pancaldi.
            </p>
            <p>
              Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité. En conséquence, Kenzo Pancaldi ne saurait être tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une quelconque perte de données consécutives au téléchargement.
            </p>
          </section>

          <hr className="border-white/5" />

          {/* 9. DROIT APPLICABLE – ATTRIBUTION DE JURIDICTION */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black uppercase tracking-wider text-xs mb-4">
              <Gavel size={16} className="text-blue-500" />
              <h2>9. Droit applicable – attribution de juridiction</h2>
            </div>
            <p>
              Les présentes conditions du site <span className="text-white">https://kenzosite-a99a.onrender.com/</span> sont régies par les lois françaises et toute contestation ou litiges qui pourraient naître de l'interprétation ou de l'exécution de celles-ci seront de la competence exclusive des tribunaux dont dépend le siège social de la société KZV. La langue de référence, pour le règlement de contentieux éventuels, est le français.
            </p>
          </section>

          <hr className="border-white/5" />

          {/* 10. LES TEXTES DE RÉFÉRENCE */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black uppercase tracking-wider text-xs mb-4">
              <FileText size={16} className="text-blue-500" />
              <h2>10. Les textes de référence</h2>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Loi n°78-17 du 6 janvier 1978 modifiée (Informatique et Libertés)</li>
              <li>Règlement (UE) 2016/679 du Parlement européen (RGPD)</li>
              <li>Loi n°2004-575 du 21 juin 2004 (LCEN)</li>
            </ul>
          </section>

          <hr className="border-white/5" />

          {/* 11. LEXIQUE */}
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-white font-black uppercase tracking-wider text-xs mb-4">
              <HelpCircle size={16} className="text-blue-500" />
              <h2>11. Lexique</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <li><strong className="text-white text-xs block uppercase tracking-wide mb-1">Propriétaire du site :</strong> Entité responsable du contenu et de l’activité du site.</li>
              <li><strong className="text-white text-xs block uppercase tracking-wide mb-1">Responsable de la publication :</strong> Personne gérant le contenu éditorial.</li>
              <li><strong className="text-white text-xs block uppercase tracking-wide mb-1">Webmaster :</strong> Technicien ou société en charge de la maintenance technique.</li>
              <li><strong className="text-white text-xs block uppercase tracking-wide mb-1">Hébergeur :</strong> Fournisseur du serveur sur lequel le site est stocké.</li>
              <li><strong className="text-white text-xs block uppercase tracking-wide mb-1">Utilisateur :</strong> Internaute naviguant sur le site.</li>
              <li><strong className="text-white text-xs block uppercase tracking-wide mb-1">Donnée personnelle :</strong> Toute information permettant d’identifyer une personne.</li>
              <li><strong className="text-white text-xs block uppercase tracking-wide mb-1">Traitement de données :</strong> Toute action (collecte, stockage, suppression) sur des données personnelles.</li>
              <li><strong className="text-white text-xs block uppercase tracking-wide mb-1">Cookie :</strong> Fichier qui stocke des données sur la navigation.</li>
              <li><strong className="text-white text-xs block uppercase tracking-wide mb-1">DPO :</strong> Délégué à la protection des données, garant de la conformité RGPD.</li>
              <li><strong className="text-white text-xs block uppercase tracking-wide mb-1">Crédit :</strong> Mention d’un auteur ou fournisseur de contenu utilisé sur le site.</li>
            </ul>
          </section>

        </div>

        {/* FOOTER MINI */}
        <p className="text-center mt-12 text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">
          KZV.STUDIO — Droits Réservés © 2026.
        </p>

      </div>
    </main>
  );
}