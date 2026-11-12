import React, { useState } from 'react';
import {
  CheckCircle,
  CreditCard,
  Hospital,
  HeartHandshake,
  HelpCircle,
  ArrowRight,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { LanguageCode, getTranslation } from '../utils/translations';
import { SpeechService } from '../utils/speech';

interface ServiceCardsProps {
  currentLang: LanguageCode;
  onSelectService: (service: 'eligibility' | 'card' | 'hospital' | 'benefits' | 'help') => void;
  seniorMode: boolean;
}

export const ServiceCards: React.FC<ServiceCardsProps> = ({
  currentLang,
  onSelectService,
  seniorMode,
}) => {
  const t = getTranslation(currentLang);
  const [playingCard, setPlayingCard] = useState<string | null>(null);

  const handleSpeakCard = (id: string, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (playingCard === id) {
      SpeechService.stopSpeaking();
      setPlayingCard(null);
      return;
    }
    setPlayingCard(id);
    SpeechService.speak(
      text,
      currentLang,
      () => setPlayingCard(id),
      () => setPlayingCard(null)
    );
  };

  const services = [
    {
      id: 'eligibility' as const,
      number: '1',
      title: t.checkEligibilityTitle,
      desc: t.checkEligibilityDesc,
      action: t.checkEligibilityAction,
      icon: CheckCircle,
      accentColor: 'text-[#124B8A]',
      btnBg: 'bg-[#124B8A] hover:bg-[#0e3b6e]',
      borderColor: 'border-[#124B8A]/40',
      badge: 'Step 1: Check First',
    },
    {
      id: 'card' as const,
      number: '2',
      title: t.downloadCardTitle,
      desc: t.downloadCardDesc,
      action: t.downloadCardAction,
      icon: CreditCard,
      accentColor: 'text-[#198754]',
      btnBg: 'bg-[#198754] hover:bg-[#146c43]',
      borderColor: 'border-[#198754]/40',
      badge: 'Official Card',
    },
    {
      id: 'hospital' as const,
      number: '3',
      title: t.findHospitalTitle,
      desc: t.findHospitalDesc,
      action: t.findHospitalAction,
      icon: Hospital,
      accentColor: 'text-amber-700',
      btnBg: 'bg-amber-600 hover:bg-amber-700',
      borderColor: 'border-amber-500/40',
      badge: '29,000+ Hospitals',
    },
    {
      id: 'benefits' as const,
      number: '4',
      title: t.checkBenefitsTitle,
      desc: t.checkBenefitsDesc,
      action: t.checkBenefitsAction,
      icon: HeartHandshake,
      accentColor: 'text-[#124B8A]',
      btnBg: 'bg-[#124B8A] hover:bg-[#0e3b6e]',
      borderColor: 'border-[#124B8A]/40',
      badge: '₹5 Lakh Free Cover',
    },
    {
      id: 'help' as const,
      number: '5',
      title: t.getHelpTitle,
      desc: t.getHelpDesc,
      action: t.getHelpAction,
      icon: HelpCircle,
      accentColor: 'text-[#172B4D]',
      btnBg: 'bg-slate-800 hover:bg-slate-900',
      borderColor: 'border-slate-400',
      badge: 'Toll-Free 14555',
    },
  ];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 max-w-7xl mx-auto" aria-labelledby="services-heading">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-slate-200 gap-3">
        <div>
          <h2 id="services-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#172B4D] tracking-tight">
            Key Services for You & Your Family
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium mt-1">
            Choose what you want to do. Each card is simple and guided.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
          <span>Tap speaker icon on any card to hear it aloud</span>
        </div>
      </div>

      {/* Grid of 5 Large Service Cards */}
      <div className={`grid gap-6 sm:gap-8 ${seniorMode ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {services.map((item) => {
          const Icon = item.icon;
          const isPlaying = playingCard === item.id;

          return (
            <div
              key={item.id}
              onClick={() => onSelectService(item.id)}
              className={`bg-[#EEF5FC] hover:bg-[#e4effa] border-3 ${item.borderColor} rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all shadow-sm hover:shadow-md cursor-pointer group focus-within:ring-4 focus-within:ring-[#124B8A]/40`}
              role="button"
              tabIndex={0}
              aria-label={`${item.title}. ${item.desc}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService(item.id);
                }
              }}
            >
              <div>
                {/* Top Row: Icon + Badge + Audio Button */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className={`w-8 h-8 sm:w-9 sm:h-9 ${item.accentColor}`} aria-hidden="true" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold bg-white text-slate-700 px-3 py-1 rounded-full border border-slate-300">
                      {item.badge}
                    </span>

                    {/* Speaker Button on Each Card */}
                    <button
                      type="button"
                      onClick={(e) => handleSpeakCard(item.id, `${item.title}. ${item.desc}`, e)}
                      className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer ${
                        isPlaying
                          ? 'bg-[#198754] text-white border-[#198754] scale-110'
                          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                      aria-label={`Listen to ${item.title}`}
                      title={`Hear ${item.title} read out loud`}
                    >
                      {isPlaying ? (
                        <VolumeX className="w-5 h-5 animate-pulse" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Card Title (large, min 22px as required) */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] tracking-tight leading-snug group-hover:text-[#124B8A] transition-colors">
                  {item.title}
                </h3>

                {/* Plain-Language Description */}
                <p className="text-lg sm:text-xl text-slate-700 font-medium mt-3 mb-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Obvious Action Button (Extra-large, >= 56px clickable height) */}
              <button
                type="button"
                className={`w-full min-h-[56px] py-3.5 px-5 ${item.btnBg} text-white font-bold text-lg sm:text-xl rounded-xl shadow-xs transition-all flex items-center justify-between gap-3 group-hover:shadow-md cursor-pointer`}
              >
                <span>{item.action}</span>
                <ArrowRight className="w-6 h-6 stroke-[2.5] group-hover:translate-x-1.5 transition-transform shrink-0" aria-hidden="true" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
