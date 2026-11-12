import React, { useState } from 'react';
import { Volume2, VolumeX, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import { LanguageCode, getTranslation } from '../utils/translations';
import { SpeechService } from '../utils/speech';

interface SeniorWelcomeHeroProps {
  currentLang: LanguageCode;
  seniorMode: boolean;
  onOpenHelpModal: () => void;
  onSelectService: (service: 'eligibility' | 'card' | 'hospital' | 'benefits' | 'help') => void;
}

export const SeniorWelcomeHero: React.FC<SeniorWelcomeHeroProps> = ({
  currentLang,
  seniorMode,
  onOpenHelpModal,
  onSelectService,
}) => {
  const t = getTranslation(currentLang);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handlePlayWelcomeAudio = () => {
    if (isPlayingAudio) {
      SpeechService.stopSpeaking();
      setIsPlayingAudio(false);
      return;
    }

    const message = seniorMode
      ? `${t.seniorWelcomeMsg} ${t.seniorWelcomeListen}`
      : `${t.welcomeTitle}. ${t.welcomeSubtitle}. ${t.seniorWelcomeMsg}`;

    setIsPlayingAudio(true);
    SpeechService.speak(
      message,
      currentLang,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  return (
    <section className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Text Column: Primary Reading Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Government Scheme Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#124B8A] mb-2 tracking-wide uppercase">
              <span className="bg-[#EEF5FC] px-3 py-1 rounded-md border border-[#124B8A]/20">
                Pradhan Mantri Jan Arogya Yojana (PM-JAY)
              </span>
              <span className="hidden sm:inline text-slate-400">·</span>
              <span className="hidden sm:inline text-[#198754]">₹5 Lakh Free Treatment</span>
            </div>

            {/* Welcome Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172B4D] tracking-tight leading-tight">
              {t.welcomeTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-bold text-[#124B8A] mt-2 mb-4">
              {t.welcomeSubtitle}
            </p>

            {/* Senior Friendly Message Box */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF9F6] border-2 border-[#124B8A]/30 mb-6 shadow-2xs">
              <p className="text-lg sm:text-xl text-[#172B4D] leading-relaxed font-semibold">
                {seniorMode ? t.seniorWelcomeMsg : t.seniorWelcomeMsg}
              </p>

              {/* Audio Listen Bar */}
              <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handlePlayWelcomeAudio}
                  className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-xl font-bold text-base sm:text-lg border-2 transition-all cursor-pointer ${
                    isPlayingAudio
                      ? 'bg-[#198754] text-white border-[#198754] ring-2 ring-emerald-300'
                      : 'bg-[#EEF5FC] text-[#124B8A] border-[#124B8A] hover:bg-[#dce9f8]'
                  }`}
                  aria-label={isPlayingAudio ? 'Stop audio instructions' : 'Listen to instructions aloud'}
                >
                  {isPlayingAudio ? (
                    <>
                      <VolumeX className="w-5 h-5 animate-pulse" />
                      <span>Stop Listening</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-6 h-6 text-[#124B8A]" />
                      <span>Listen to Voice Guide (ಧ್ವನಿ / आवाज़)</span>
                    </>
                  )}
                </button>

                <span className="text-xs sm:text-sm font-medium text-slate-600">
                  {t.seniorWelcomeListen}
                </span>
              </div>
            </div>

            {/* Quick Action Assistance Ribbon */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectService('eligibility')}
                className="px-6 py-3.5 bg-[#124B8A] hover:bg-[#0e3b6e] text-white font-bold text-lg sm:text-xl rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2"
                aria-label="Check Eligibility button"
              >
                <ShieldCheck className="w-6 h-6 text-amber-300" />
                <span>{t.checkEligibilityAction}</span>
              </button>

              <button
                onClick={onOpenHelpModal}
                className="px-5 py-3.5 bg-white hover:bg-slate-50 text-[#172B4D] border-2 border-slate-300 font-bold text-base sm:text-lg rounded-xl transition-all cursor-pointer flex items-center gap-2"
                aria-label="Emergency Call Support"
              >
                <PhoneCall className="w-5 h-5 text-[#198754]" />
                <span>Call 14555 Helpline</span>
              </button>
            </div>
          </div>

          {/* Right Image Column: High-Fidelity Photo Asset of Indian Senior Couple */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-4 border-[#124B8A]/20 shadow-lg bg-[#EEF5FC]">
              <img
                src="/src/assets/images/senior_healthcare_ayushman_1794467410550.jpg"
                alt="Smiling Indian senior citizen couple holding their Ayushman Bharat healthcare card in a hospital"
                className="w-full h-72 sm:h-88 lg:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Bottom Card Overlay Badge */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-4 sm:p-5 text-white">
                <div className="flex items-center gap-2 font-bold text-base sm:text-lg text-amber-300">
                  <HeartHandshake className="w-5 h-5 text-amber-300" />
                  <span>Dignified Senior Care • 60+ Special Priority</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  100% Cashless treatment at 29,000+ empanelled hospitals across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
