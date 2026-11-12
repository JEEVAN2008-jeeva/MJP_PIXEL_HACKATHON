import React, { useState, useEffect } from 'react';
import {
  Mic,
  PhoneCall,
  ShieldCheck,
  Globe,
  UserCheck,
  Volume2,
  Heart,
  ExternalLink,
  ArrowUp,
} from 'lucide-react';
import { LanguageCode, getTranslation, SUPPORTED_LANGUAGES } from './utils/translations';
import { SpeechService } from './utils/speech';
import { Header } from './components/Header';
import { LanguageModal } from './components/LanguageModal';
import { SeniorWelcomeHero } from './components/SeniorWelcomeHero';
import { ServiceCards } from './components/ServiceCards';
import { SeniorModeAssistant } from './components/SeniorModeAssistant';
import { EligibilityScreen } from './components/EligibilityScreen';
import { HospitalScreen } from './components/HospitalScreen';
import { CardDownloadScreen } from './components/CardDownloadScreen';
import { BenefitsScreen } from './components/BenefitsScreen';
import { HelpSupportModal } from './components/HelpSupportModal';
import { VoiceAssistantModal } from './components/VoiceAssistantModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('kn'); // Default to Kannada or user choice
  const [seniorMode, setSeniorMode] = useState<boolean>(true); // Senior mode on by default as requested!
  const [fontScale, setFontScale] = useState<number>(1.15); // Large accessible font by default
  const [audioGuideActive, setAudioGuideActive] = useState<boolean>(true);
  const [activeScreen, setActiveScreen] = useState<'home' | 'eligibility' | 'hospital' | 'card' | 'benefits'>('home');
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState<boolean>(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState<boolean>(false);
  const [isVoiceAssistantOpen, setIsVoiceAssistantOpen] = useState<boolean>(false);

  // Check URL query param ?autostart=1 or initial first-visit
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const autostart = urlParams.get('autostart');
    const hasVisited = localStorage.getItem('ayushman_pmjay_visited');

    if (!hasVisited && !autostart) {
      setIsLanguageModalOpen(true);
      localStorage.setItem('ayushman_pmjay_visited', 'true');
    }
  }, []);

  // Update root font-scale CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty('--font-scale', fontScale.toString());
  }, [fontScale]);

  const t = getTranslation(currentLang);

  const handleToggleSeniorMode = () => {
    const next = !seniorMode;
    setSeniorMode(next);
    if (next) {
      setFontScale(1.25);
      SpeechService.speak(t.seniorWelcomeMsg, currentLang);
    } else {
      setFontScale(1.0);
    }
  };

  const handleChangeFontScale = (delta: number) => {
    if (delta === 0) {
      setFontScale(1.0);
    } else {
      setFontScale((prev) => Math.min(1.4, Math.max(0.9, Number((prev + delta).toFixed(2)))));
    }
  };

  const handleToggleAudioGuide = () => {
    const next = !audioGuideActive;
    setAudioGuideActive(next);
    if (next) {
      SpeechService.speak(t.audioGuideOn, currentLang);
    } else {
      SpeechService.stopSpeaking();
    }
  };

  const handleSelectService = (service: 'eligibility' | 'card' | 'hospital' | 'benefits' | 'help') => {
    if (service === 'help') {
      setIsHelpModalOpen(true);
      return;
    }
    setActiveScreen(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (audioGuideActive) {
      if (service === 'eligibility') SpeechService.speak(t.checkEligibilityTitle, currentLang);
      if (service === 'hospital') SpeechService.speak(t.hospitalFinderTitle, currentLang);
      if (service === 'card') SpeechService.speak(t.cardDownloadTitle, currentLang);
      if (service === 'benefits') SpeechService.speak(t.benefitsTitle, currentLang);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col bg-[#FAF9F6] text-[#172B4D] ${seniorMode ? 'senior-mode-active' : ''}`}>
      {/* Header */}
      <Header
        currentLang={currentLang}
        onOpenLanguageModal={() => setIsLanguageModalOpen(true)}
        seniorMode={seniorMode}
        onToggleSeniorMode={handleToggleSeniorMode}
        fontScale={fontScale}
        onChangeFontScale={handleChangeFontScale}
        audioGuideActive={audioGuideActive}
        onToggleAudioGuide={handleToggleAudioGuide}
        onNavigateHome={() => setActiveScreen('home')}
        onOpenHelpModal={() => setIsHelpModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeScreen === 'home' && (
          <>
            {/* Welcome Section */}
            <SeniorWelcomeHero
              currentLang={currentLang}
              seniorMode={seniorMode}
              onOpenHelpModal={() => setIsHelpModalOpen(true)}
              onSelectService={handleSelectService}
            />

            {/* Special Senior Citizen Guided Assistant (Shown when Senior Mode is active) */}
            {seniorMode && (
              <SeniorModeAssistant
                currentLang={currentLang}
                onSelectService={handleSelectService}
                onOpenHelpModal={() => setIsHelpModalOpen(true)}
              />
            )}

            {/* 5 Main Large Service Cards */}
            <ServiceCards
              currentLang={currentLang}
              onSelectService={handleSelectService}
              seniorMode={seniorMode}
            />
          </>
        )}

        {/* Screen 1: Check Eligibility */}
        {activeScreen === 'eligibility' && (
          <EligibilityScreen
            currentLang={currentLang}
            onBack={() => setActiveScreen('home')}
            onNavigateToCardDownload={() => setActiveScreen('card')}
            onOpenHelpModal={() => setIsHelpModalOpen(true)}
          />
        )}

        {/* Screen 2: Find a Hospital */}
        {activeScreen === 'hospital' && (
          <HospitalScreen
            currentLang={currentLang}
            onBack={() => setActiveScreen('home')}
            onOpenHelpModal={() => setIsHelpModalOpen(true)}
          />
        )}

        {/* Screen 3: Download Ayushman Card */}
        {activeScreen === 'card' && (
          <CardDownloadScreen
            currentLang={currentLang}
            onBack={() => setActiveScreen('home')}
            onOpenHelpModal={() => setIsHelpModalOpen(true)}
          />
        )}

        {/* Benefits Overview */}
        {activeScreen === 'benefits' && (
          <BenefitsScreen
            currentLang={currentLang}
            onBack={() => setActiveScreen('home')}
            onNavigateToEligibility={() => setActiveScreen('eligibility')}
          />
        )}
      </main>

      {/* Floating Senior Action Controls (Microphone & Helpline) */}
      <div className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2.5">
        {/* Floating AI Voice Assistant Button */}
        <button
          onClick={() => setIsVoiceAssistantOpen(true)}
          className="flex items-center gap-2 sm:gap-3 px-3.5 py-2.5 sm:px-5 sm:py-3.5 bg-[#124B8A] hover:bg-[#0d3b6e] text-white rounded-full shadow-2xl border-2 sm:border-3 border-amber-300 font-extrabold text-sm sm:text-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Open Voice Assistant to ask questions by voice"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
            <Mic className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </div>
          <span>Speak to Assistant (ಧ್ವನಿ / बोलें)</span>
        </button>

        {/* Floating Helpline Quick Button */}
        <button
          onClick={() => setIsHelpModalOpen(true)}
          className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#198754] hover:bg-[#157347] text-white rounded-full shadow-lg font-bold text-xs sm:text-sm transition-transform hover:scale-105 cursor-pointer"
          aria-label="Call 14555 Helpline"
        >
          <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span>Toll-Free 14555 Help</span>
        </button>
      </div>

      {/* Modals */}
      <LanguageModal
        isOpen={isLanguageModalOpen}
        currentLang={currentLang}
        onSelectLanguage={(lang) => setCurrentLang(lang)}
        onClose={() => setIsLanguageModalOpen(false)}
      />

      <HelpSupportModal
        isOpen={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        currentLang={currentLang}
      />

      <VoiceAssistantModal
        isOpen={isVoiceAssistantOpen}
        onClose={() => setIsVoiceAssistantOpen(false)}
        currentLang={currentLang}
        onNavigateToScreen={(screen) => {
          if (screen === 'help') {
            setIsHelpModalOpen(true);
          } else {
            setActiveScreen(screen);
          }
        }}
      />

      {/* Trustworthy Government Footer */}
      <footer className="bg-[#172B4D] text-white mt-12 border-t-4 border-[#124B8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-700">
            {/* Left Brand Col */}
            <div className="md:col-span-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#124B8A] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-amber-300" />
                </div>
                <span className="text-xl font-bold tracking-tight">Ayushman Bharat PM-JAY</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                National Health Authority, Ministry of Health and Family Welfare, Government of India. Providing ₹5 Lakh annual free healthcare cover to over 50 crore citizens.
              </p>
              <div className="flex items-center gap-2 text-xs text-amber-300 font-semibold">
                <span>Senior Citizen Friendly • WCAG 2.1 AAA Compliant</span>
              </div>
            </div>

            {/* Middle Quick Links */}
            <div className="md:col-span-3 space-y-2">
              <span className="text-sm font-bold text-amber-300 uppercase tracking-wider block mb-2">
                Important Services
              </span>
              <ul className="space-y-1.5 text-sm text-slate-300">
                <li>
                  <button onClick={() => setActiveScreen('eligibility')} className="hover:text-white underline cursor-pointer">
                    Check Eligibility
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveScreen('hospital')} className="hover:text-white underline cursor-pointer">
                    Find Empanelled Hospital
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveScreen('card')} className="hover:text-white underline cursor-pointer">
                    Download Ayushman Card
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveScreen('benefits')} className="hover:text-white underline cursor-pointer">
                    Healthcare Benefits
                  </button>
                </li>
              </ul>
            </div>

            {/* Right Helpline Col */}
            <div className="md:col-span-4 space-y-3">
              <span className="text-sm font-bold text-amber-300 uppercase tracking-wider block">
                24x7 National Helpline
              </span>
              <div className="text-2xl font-black text-white">
                Toll-Free: 14555 / 1800-111-565
              </div>
              <p className="text-xs text-slate-400">
                Dedicated assistance available in 10 languages for senior citizens, family members, and caregivers.
              </p>
            </div>
          </div>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>© 2026 National Health Authority, Government of India. All rights reserved.</span>
            <span>Simulation prototype for senior accessibility evaluation. No real Aadhaar data collected.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
