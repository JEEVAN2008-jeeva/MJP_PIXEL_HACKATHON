import React, { useState } from 'react';
import { Volume2, Check, X, Globe } from 'lucide-react';
import { LanguageCode, SUPPORTED_LANGUAGES, getTranslation } from '../utils/translations';
import { SpeechService } from '../utils/speech';

interface LanguageModalProps {
  isOpen: boolean;
  currentLang: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  onClose: () => void;
  isFirstVisit?: boolean;
}

export const LanguageModal: React.FC<LanguageModalProps> = ({
  isOpen,
  currentLang,
  onSelectLanguage,
  onClose,
  isFirstVisit = false,
}) => {
  const [selectedLang, setSelectedLang] = useState<LanguageCode>(currentLang);
  const [playingLang, setPlayingLang] = useState<LanguageCode | null>(null);

  if (!isOpen) return null;

  const currentDict = getTranslation(selectedLang);

  const handleAudioPreview = (lang: LanguageCode, e: React.MouseEvent) => {
    e.stopPropagation();
    setPlayingLang(lang);
    const item = SUPPORTED_LANGUAGES.find((l) => l.code === lang);
    if (item) {
      SpeechService.speak(
        item.greeting,
        lang,
        () => setPlayingLang(lang),
        () => setPlayingLang(null)
      );
    }
  };

  const handleConfirm = () => {
    onSelectLanguage(selectedLang);
    SpeechService.speak(
      `${getTranslation(selectedLang).welcomeTitle}. ${getTranslation(selectedLang).welcomeSubtitle}`,
      selectedLang
    );
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-modal-title"
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border-4 border-[#124B8A] overflow-hidden flex flex-col my-auto max-h-[95vh]">
        {/* Modal Top Bar */}
        <div className="bg-[#124B8A] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-xl">
              <Globe className="w-8 h-8 text-amber-300" aria-hidden="true" />
            </div>
            <div>
              <h2 id="language-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Choose Your Language / ಭಾಷೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ
              </h2>
              <p className="text-blue-100 text-sm sm:text-base font-medium mt-1">
                अपनी भाषा चुनें • Select a language to proceed
              </p>
            </div>
          </div>

          {!isFirstVisit && (
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close language selector"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Modal Body: 10 Large Language Cards */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          <p className="text-slate-700 text-base sm:text-lg mb-4 font-semibold">
            Tap your language below. You can also tap the speaker button to hear voice instructions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {SUPPORTED_LANGUAGES.map((langItem) => {
              const isSelected = selectedLang === langItem.code;
              const isSpeaking = playingLang === langItem.code;

              return (
                <div
                  key={langItem.code}
                  onClick={() => setSelectedLang(langItem.code)}
                  className={`relative flex items-center justify-between p-4 sm:p-5 rounded-xl border-3 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[#124B8A] bg-[#EEF5FC] shadow-md ring-2 ring-[#124B8A]/30'
                      : 'border-slate-200 bg-white hover:border-[#124B8A]/50 hover:bg-slate-50'
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedLang(langItem.code);
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border-2 ${
                        isSelected
                          ? 'border-[#124B8A] bg-[#124B8A] text-white'
                          : 'border-slate-300 text-transparent'
                      }`}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-[#172B4D]">
                        {langItem.nativeName}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-500">
                        {langItem.name}
                      </div>
                    </div>
                  </div>

                  {/* Audio Preview Button */}
                  <button
                    type="button"
                    onClick={(e) => handleAudioPreview(langItem.code, e)}
                    className={`p-2.5 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isSpeaking
                        ? 'bg-[#198754] text-white border-[#198754]'
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                    }`}
                    aria-label={`Listen to sample greeting in ${langItem.name}`}
                    title={`Hear greeting in ${langItem.nativeName}`}
                  >
                    <Volume2 className={`w-5 h-5 ${isSpeaking ? 'animate-pulse' : ''}`} />
                    <span className="text-xs font-bold hidden sm:inline">
                      {isSpeaking ? 'Listening...' : 'Listen'}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-sm sm:text-base font-semibold text-slate-700 text-center sm:text-left">
            Selected: <span className="text-[#124B8A] font-bold">{SUPPORTED_LANGUAGES.find((l) => l.code === selectedLang)?.nativeName}</span>
          </div>

          <button
            onClick={handleConfirm}
            className="w-full sm:w-auto px-8 py-4 bg-[#198754] hover:bg-[#157347] text-white text-lg sm:text-xl font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-3"
            aria-label="Confirm Language and Continue"
          >
            <span>Continue / ಮುಂದುವರಿಯಿರಿ / आगे बढ़ें</span>
            <Check className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
