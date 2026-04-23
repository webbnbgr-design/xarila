/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Scale, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  ShieldCheck, 
  Globe, 
  Gavel, 
  Briefcase, 
  Users, 
  FileText,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

const COLORS = {
  navy: '#0f172a',
  silver: '#94a3b8',
  white: '#ffffff'
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#home' },
    { name: 'Η Δικηγόρος', href: '#about' },
    { name: 'Υπηρεσίες', href: '#services' },
    { name: 'Πανελλαδική Εκπροσώπηση', href: '#nationwide' },
    { name: 'Επικοινωνία', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'backdrop-blur-md bg-white/70 border-b border-slate-100 py-3 shadow-sm' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`p-2 rounded-lg transition-colors ${isScrolled ? 'bg-slate-900 text-white' : 'bg-white/10 backdrop-blur-sm text-slate-900 border border-slate-200'}`}>
              <Scale size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight leading-none">ΕΥΘΥΜΙΑ Η. ΧΑΡΙΛΑ</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-500">Δικηγόρος παρ' Αρείω Πάγω</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-slate-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:2231030850"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/10"
            >
              Κλήση Τώρα
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:2231030850"
              className="mt-2 bg-slate-900 text-center text-white px-5 py-4 rounded-xl text-md font-medium"
            >
              22310 30850
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_top_right,rgba(148,163,184,0.08),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.03),transparent_50%)]" />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50" 
        />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold mb-6 uppercase tracking-wider">
                <ShieldCheck size={14} />
                Νομικό Κύρος & Αξιοπιστία
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-800 to-slate-500">
                Ευθυμία Η. Χαρίλα: <br />
                <span className="text-slate-800">Νομική Εκπροσώπηση παρ' Αρείω Πάγω</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                Υπηρεσίες υψηλού επιπέδου με πανελλαδική εμβέλεια. Στρατηγική νομική καθοδήγηση και εκπροσώπηση στα ανώτατα δικαστικά όργανα της χώρας.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-slate-900/20 flex items-center justify-center gap-3 group"
                >
                  Προγραμματίστε Συνεδρία
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center gap-4 px-6 py-5 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm">
                  <div className="bg-slate-100 p-2 rounded-lg">
                    <Phone size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Άμεση Επικοινωνία</p>
                    <a href="tel:2231030850" className="text-lg font-bold text-slate-900">22310 30850</a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
                  alt="Supreme Court Architecture" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="p-6 backdrop-blur-md bg-white/20 border border-white/30 rounded-3xl text-white">
                    <p className="text-sm font-medium mb-1 opacity-80 uppercase tracking-widest">Έδρα</p>
                    <p className="text-xl font-bold">Λεωνίδου 6, Λαμία</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-slate-100 border border-slate-200 rounded-full" />
              <div className="absolute top-1/2 -right-12 w-24 h-24 bg-white shadow-xl rounded-2xl flex items-center justify-center -rotate-12 border border-slate-100">
                <Gavel className="text-slate-900" size={32} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supreme Court Focus */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
            <Scale size={800} className="text-white scale-150 rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Εκπροσώπηση στον <br />
                <span className="text-slate-400">Άρειο Πάγο</span>
              </h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  Η ιδιότητα της Δικηγόρου παρ' Αρείω Πάγω αποτελεί την ανώτατη βαθμίδα νομικής εκπροσώπησης στην Ελλάδα. Διασφαλίζει ότι η υπόθεσή σας τυγχάνει του υψηλότερου δυνατού επιπέδου νομικής θεμελίωσης.
                </p>
                <div className="flex gap-4 items-start pt-4">
                  <div className="mt-1 bg-white/10 p-2 rounded-lg">
                    <ShieldCheck size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Ανώτατη Νομική Θωράκιση</h4>
                    <p className="text-base opacity-80">Χειρισμός σύνθετων υποθέσεων που απαιτούν βαθιά γνώση της νομολογίας και του ακυρωτικού ελέγχου.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="mt-1 bg-white/10 p-2 rounded-lg">
                    <FileText size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Στρατηγική Προσέγγιση</h4>
                    <p className="text-base opacity-80">Προετοιμασία υποθέσεων με ορίζοντα την τελική δικαίωση στα ανώτατα δικαστήρια.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="order-1 lg:order-2 flex justify-center">
                <motion.div 
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   className="relative group h-full w-full"
                >
                    <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full" />
                    <img 
                        src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
                        alt="Legal Gavel" 
                        className="relative rounded-3xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                        referrerPolicy="no-referrer"
                    />
                </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About The Lawyer */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 block mb-4"
            >
              Το Προφίλ
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-slate-900"
            >
              Ευθυμία Η. Χαρίλα
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-50 relative aspect-[4/5]"
              >
                 <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Professional Portrait Placeholder" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                <p className="text-3xl font-bold mb-1">20+</p>
                <p className="tracking-widest text-xs uppercase opacity-70">Έτη Εμπειρίας</p>
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                Δικηγόρος παρ' Αρείω Πάγω <br />
                <span className="text-slate-500 font-medium">Με έδρα τη Λαμία και δράση σε όλη την επικράτεια.</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Με πολυετή εμπειρία και εξειδίκευση σε όλο το φάσμα του δικαίου, το γραφείο μας προσφέρει ολοκληρωμένες νομικές υπηρεσίες, θέτοντας ως προτεραιότητα την αποτελεσματική προάσπιση των συμφερόντων των εντολέων μας. 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Η ικανότητα παράστασης στον Άρειο Πάγο και το Συμβούλιο της Επικρατείας (ΣτΕ) υποδηλώνει τη δυνατότητα χειρισμού υποθέσεων στο υψηλότερο δικονομικό επίπεδο, διασφαλίζοντας την αρτιότερη νομική αντιμετώπιση κάθε ζητήματος.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-hover hover:bg-white hover:shadow-xl duration-300">
                  <h4 className="font-bold text-slate-900 mb-2">Κύρος</h4>
                  <p className="text-sm text-slate-500">Αδιαμφισβήτητη εγκυρότητα στην ανώτατη βαθμίδα της δικαιοσύνης.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-hover hover:bg-white hover:shadow-xl duration-300">
                  <h4 className="font-bold text-slate-900 mb-2">Εμπιστοσύνη</h4>
                  <p className="text-sm text-slate-500">Προσωπική επαφή και απόλυτη εχεμύθεια σε κάθε υπόθεση.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 block mb-4"
              >
                Υπηρεσίες Ανώτατης Βαθμίδας
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-slate-900"
              >
                Ολιστική Κάλυψη σε Κάθε Τομέα Δικαίου
              </motion.h2>
            </div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-slate-500 text-lg mb-2"
            >
              Υπηρεσίες Full-Service Legal Support
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
             {/* Large Item 1 */}
            <motion.div 
               whileHover={{ y: -5, scale: 1.01 }}
               className="md:col-span-2 md:row-span-2 bg-white rounded-[2.5rem] p-10 flex flex-col justify-between border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.03)] group"
            >
              <div>
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                  <Briefcase size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Αστικό & Εμπορικό Δίκαιο</h3>
                <p className="text-slate-500 leading-relaxed text-lg mb-8">
                  Εξειδικευμένο χειρισμό υποθέσεων συμβάσεων, ακινήτων, κληρονομικών και ενοχικών διαφορών, καθώς και εταιρικών ζητημάτων.
                </p>
                <ul className="space-y-3 text-slate-600 font-medium">
                  {['Υποθέσεις Ακινήτων / Κτηματολόγιο', 'Οικογενειακό & Κληρονομικό Δίκαιο', 'Εμπορικές Συμβάσεις & Εταιρείες'].map(i => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 border-t border-slate-50">
                <span className="text-slate-400 group-hover:text-slate-900 font-medium inline-flex items-center gap-2 transition-colors">
                  Περισσότερα <ArrowRight size={18} />
                </span>
              </div>
            </motion.div>

            {/* Square Item 1 */}
            <motion.div 
               whileHover={{ y: -5, scale: 1.01 }}
               className="md:col-span-2 bg-slate-900 text-white rounded-[2.5rem] p-10 flex flex-col justify-between shadow-2xl shadow-slate-900/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Users size={120} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Ποινικό Δίκαιο</h3>
                <p className="text-slate-300 leading-relaxed text-md mb-6">
                  Υπεύθυνη εκπροσώπηση σε όλα τα στάδια της ποινικής διαδικασίας, από την προδικασία έως και το ακροατήριο.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Πλημμελήματα</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Κακουργήματα</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium">Οικονομικό Έγκλημα</span>
                </div>
              </div>
            </motion.div>

            {/* Small Item 1 */}
            <motion.div 
               whileHover={{ y: -5, scale: 1.02 }}
               className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-900/5 group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Διοικητικό Δίκαιο</h3>
              <p className="text-sm text-slate-500">Διαφορές με το Δημόσιο και εκπροσώπηση στα Διοικητικά Δικαστήρια.</p>
            </motion.div>

             {/* Small Item 2 */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-900/5 group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 mb-6 group-hover:scale-110 transition-transform">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Εργατικό Δίκαιο</h3>
              <p className="text-sm text-slate-500">Διασφάλιση εργασιακών δικαιωμάτων και επίλυση διαφορών.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nationwide Coverage */}
      <section id="nationwide" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden group">
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800/30 to-transparent pointer-events-none" />
            <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-slate-800 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
            
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold mb-6 uppercase tracking-wider">
                  <MapPin size={14} className="text-slate-400" />
                  Πανελλαδική Εμβέλεια
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Νομική Υποστήριξη <br />
                  <span className="text-slate-400">σε Όλη την Ελλάδα</span>
                </h2>
                <p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
                  Το γραφείο μας καταρρίπτει τα τοπικά σύνορα, αναλαμβάνοντας υποθέσεις σε οποιαδήποτε περιοχή της επικράτειας. Διαθέτουμε ένα ευρύ δίκτυο συνεργατών για την άμεση και αποτελεσματική εξυπηρέτηση των αναγκών σας, ανεξαρτήτως γεωγραφικής θέσης.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                       <MapPin className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold tracking-tight">Λαμία</h4>
                      <p className="text-sm opacity-60">Κεντρικό Γραφείο</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                       <Globe className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold tracking-tight">Ελλάδα</h4>
                      <p className="text-sm opacity-60">Πλήρης Κάλυψη</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center lg:justify-end"
              >
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 border border-white/10 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-48 h-48 md:w-60 md:h-60 border border-white/20 rounded-full flex items-center justify-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                        <MapPin size={48} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white selection:bg-slate-900 selection:text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-slate-400 block mb-4">Επικοινωνία</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Είμαστε στη διάθεσή σας για κάθε νομικό ζήτημα.
              </h2>
              <p className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed">
                Προγραμματίστε σήμερα μια συμβουλευτική συνάντηση στο γραφείο μας στη Λαμία ή μέσω τηλεδιάσκεψης για την άμεση εξέταση της υπόθεσής σας.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Διεύθυνση</h4>
                    <p className="text-xl font-bold text-slate-900">Λεωνίδου 6, Λαμία, Τ.Κ. 35131</p>
                    <p className="text-sm text-slate-500 mt-1">Κέντρο πόλης, έναντι Πλατείας</p>
                  </div>
                </div>
                
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Τηλέφωνα</h4>
                    <div className="flex flex-col gap-1">
                      <a href="tel:2231030850" className="text-xl font-bold text-slate-900 hover:text-slate-600 transition-colors">22310 30850</a>
                      <a href="tel:6974095261" className="text-xl font-bold text-slate-900 hover:text-slate-600 transition-colors">69740 95261</a>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Email</h4>
                    <a href="mailto:info@charila-law.gr" className="text-xl font-bold text-slate-900 hover:text-slate-600 transition-colors">info@charila-law.gr</a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
              <div className="absolute inset-0 bg-slate-100 rounded-[3rem] -rotate-3" />
              <div className="relative bg-white rounded-[3rem] p-1 shadow-2xl border border-slate-100 h-full min-h-[400px] overflow-hidden">
                 {/* Placeholder for map */}
                 <div className="w-full h-full bg-slate-50 flex items-center justify-center group overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                      alt="Map Location Placeholder" 
                      className="w-full h-full object-cover grayscale opacity-50 contrast-125 group-hover:scale-110 transition-transform duration-[20s]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute flex flex-col items-center gap-4 text-center">
                        <div className="w-20 h-20 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                           <MapPin size={32} />
                        </div>
                        <div className="px-6 py-3 bg-white/90 backdrop-blur shadow-xl rounded-full border border-slate-100">
                           <span className="font-bold text-slate-900">Λεωνίδου 6, Λαμία</span>
                        </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-white/5 selection:bg-white selection:text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-white text-slate-900 rounded-lg">
                  <Scale size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold tracking-tight">ΕΥΘΥΜΙΑ Η. ΧΑΡΙΛΑ</h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-50">Δικηγόρος παρ' Αρείω Πάγω</p>
                </div>
              </div>
              <p className="text-slate-400 text-lg max-w-md leading-relaxed">
                Πιστοποιημένες νομικές υπηρεσίες με έμφαση στην ακρίβεια, το κύρος και την αποτελεσματική εκπροσώπηση σε όλη την Ελλάδα.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-8">Πλοήγηση</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <div className="w-1.5 h-1.5 bg-slate-700 rounded-full group-hover:bg-white transition-colors" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold mb-8">Επικοινωνία</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <Phone size={18} className="text-slate-500 mt-1" />
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Τηλέφωνο Γραφείου</p>
                    <p className="font-bold">22310 30850</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail size={18} className="text-slate-500 mt-1" />
                  <div>
                    <p className="text-slate-400 text-sm mb-1">Email</p>
                    <p className="font-bold">info@charila-law.gr</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Δικηγορικό Γραφείο Ευθυμίας Η. Χαρίλα. Με επιφύλαξη παντός δικαιώματος.
            </p>
            <div className="flex gap-8">
               <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors uppercase tracking-widest font-bold">Όροι Χρήσης</a>
               <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors uppercase tracking-widest font-bold">Πολιτική Απορρήτου</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Trigger - Invisible usually but good for accessibility/logic */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-[60] bg-white text-slate-900 border border-slate-100 p-4 rounded-2xl shadow-2xl transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ChevronRight className="-rotate-90" />
      </button>
    </div>
  );
}
