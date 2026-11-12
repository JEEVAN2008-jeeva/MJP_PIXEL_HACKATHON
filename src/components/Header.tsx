import React from 'react';
import {
  Globe,
  PhoneCall,
  Volume2,
  VolumeX,
  Type,
  ShieldCheck,
  UserCheck,
  RotateCcw,
} from 'lucide-react';
import { LanguageCode, SUPPORTED_LANGUAGES, getTranslation } from '../utils/translations';
import { SpeechService } from '../utils/speech';

interface HeaderProps {
  currentLang: LanguageCode;
  onOpenLanguageModal: () => void;
  seniorMode: boolean;
  onToggleSeniorMode: () => void;
  fontScale: number;
  onChangeFontScale: (delta: number) => void;
  audioGuideActive: boolean;
  onToggleAudioGuide: () => void;
  onNavigateHome: () => void;
  onOpenHelpModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onOpenLanguageModal,
  seniorMode,
  onToggleSeniorMode,
  fontScale,
  onChangeFontScale,
  audioGuideActive,
  onToggleAudioGuide,
  onNavigateHome,
  onOpenHelpModal,
}) => {
  const t = getTranslation(currentLang);
  const currentLangInfo = SUPPORTED_LANGUAGES.find((l) => l.code === currentLang);

  const handleSpeechHelp = () => {
    SpeechService.speak(
      `${t.portalTitle}. ${t.helplineNumber}. Call 14555 for any assistance.`,
      currentLang
    );
  };

  return (
    <header className="bg-white border-b-2 border-[#124B8A]/20 sticky top-0 z-40 shadow-xs">
      {/* Top Government Strip */}
      <div className="bg-[#124B8A] text-white px-4 py-1.5 text-xs sm:text-sm font-medium flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Government Emblem / Tricolor indicator */}
          <div className="flex h-3 w-5 overflow-hidden rounded-xs border border-white/40">
            <div className="w-1/3 bg-[#FF9933]"></div>
            <div className="w-1/3 bg-white"></div>
            <div className="w-1/3 bg-[#138808]"></div>
          </div>
          <span className="tracking-wide">{t.portalSubtitle}</span>
        </div>

        {/* 24x7 Helpline pill button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenHelpModal}
            className="flex items-center gap-1.5 bg-[#198754] hover:bg-[#157347] text-white px-3 py-1 rounded-sm text-xs sm:text-sm font-bold transition-colors cursor-pointer"
            aria-label="Call 14555 Toll-Free Helpline"
          >
            <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.helplineNumber}</span>
          </button>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        {/* Brand Zone */}
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 sm:gap-3 text-left group cursor-pointer focus:outline-hidden shrink-0"
          aria-label="Ayushman Bharat PM-JAY Home"
        >
          <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-lg bg-[#124B8A] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-[#0d3b6e] transition-colors">
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-amber-300" aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-extrabold text-[#124B8A] tracking-tight leading-tight">
              {t.portalTitle}
            </span>
            <span className="text-[11px] sm:text-sm font-medium text-slate-600">
              {t.governmentBadge}
            </span>
          </div>
        </button>

        {/* Center / Right Zone: Accessibility & Senior Mode Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3 flex-wrap justify-end">
          {/* Senior Citizen Mode Button */}
          <button
            onClick={onToggleSeniorMode}
            className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg font-bold text-xs sm:text-base border-2 transition-all cursor-pointer whitespace-nowrap ${
              seniorMode
                ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-sm'
                : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
            }`}
            aria-pressed={seniorMode}
            aria-label="Toggle Senior Citizen Mode"
          >
            <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-950" aria-hidden="true" />
            <span>{seniorMode ? t.seniorModeActive : t.seniorMode}</span>
          </button>

          {/* Font Size Adjuster */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              onClick={() => onChangeFontScale(-0.1)}
              disabled={fontScale <= 0.9}
              className="px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-white rounded disabled:opacity-40 transition-colors cursor-pointer"
              title="Decrease text size"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <button
              onClick={() => onChangeFontScale(0)}
              className="px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-white rounded transition-colors cursor-pointer"
              title="Reset text size"
              aria-label="Reset font size"
            >
              A
            </button>
            <button
              onClick={() => onChangeFontScale(0.1)}
              disabled={fontScale >= 1.4}
              className="px-2.5 py-1 text-xs font-bold text-slate-700 hover:bg-white rounded disabled:opacity-40 transition-colors cursor-pointer"
              title="Increase text size"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>

          {/* Audio Guide Toggle Button */}
          <button
            onClick={onToggleAudioGuide}
            className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm border transition-colors cursor-pointer ${
              audioGuideActive
                ? 'bg-[#198754] text-white border-[#198754]'
                : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
            }`}
            aria-label={audioGuideActive ? t.audioGuideOn : t.audioGuideOff}
            title={audioGuideActive ? t.audioGuideOn : t.audioGuideOff}
          >
            {audioGuideActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                <span className="text-xs">{t.audioGuideOn}</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden="true" />
                <span className="text-xs">{t.audioGuideOff}</span>
              </>
            )}
          </button>

          {/* Persistent Language Selector Button */}
          <button
            onClick={onOpenLanguageModal}
            className="flex items-center gap-1.5 bg-[#EEF5FC] hover:bg-[#dce9f8] text-[#124B8A] border-2 border-[#124B8A]/30 px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg font-bold text-xs sm:text-base transition-colors cursor-pointer shadow-2xs whitespace-nowrap"
            aria-label={`Change Language. Current: ${currentLangInfo?.nativeName}`}
          >
            <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#124B8A]" aria-hidden="true" />
            <span className="font-bold underline decoration-[#124B8A] decoration-2 underline-offset-2">
              {currentLangInfo?.nativeName || 'English'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
