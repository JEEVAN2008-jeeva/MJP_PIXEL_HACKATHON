import React, { useState, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  X,
  Sparkles,
  ArrowRight,
  Bot,
  RotateCcw,
} from 'lucide-react';
import { LanguageCode, getTranslation } from '../utils/translations';
import { SpeechService } from '../utils/speech';
import { processSeniorVoiceQuery, AssistantResponse } from '../utils/voiceAssistant';

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: LanguageCode;
  onNavigateToScreen: (screen: 'eligibility' | 'hospital' | 'card' | 'benefits' | 'help') => void;
}

export const VoiceAssistantModal: React.FC<VoiceAssistantModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onNavigateToScreen,
}) => {
  const t = getTranslation(currentLang);

  const [isListening, setIsListening] = useState<boolean>(false);
  const [userTranscript, setUserTranscript] = useState<string>('');
  const [assistantResult, setAssistantResult] = useState<AssistantResponse | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');

  // Sample quick questions by language
  const samplePromptsByLang: Record<LanguageCode, string[]> = {
    kn: [
      'ನನ್ನ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಹೇಗೆ ಪಡೆಯುವುದು?',
      'ನನಗೆ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆ ಎಲ್ಲಿದೆ?',
      'ಸರ್ಕಾರದಿಂದ ಎಷ್ಟು ಹಣದ ಉಚಿತ ಚಿಕಿತ್ಸೆ ಸಿಗುತ್ತದೆ?',
      'ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆ ಯಾವುದು?',
    ],
    hi: [
      'आयुष्मान कार्ड कैसे डाउनलोड करें?',
      'नजदीकी अस्पताल कैसे खोजें?',
      'इलाज के लिए कितने रुपये मिलते हैं?',
      'मोतियाबिंद का इलाज मुफ्त है क्या?',
    ],
    en: [
      'How to download my Ayushman card?',
      'Find a hospital near me for surgery',
      'How much money is covered under PM-JAY?',
      'Is cataract surgery completely free?',
    ],
    ta: [
      'ஆயுஷ்மான் அட்டை எவ்வாறு பெறுவது?',
      'அருகிலுள்ள மருத்துவமனை எங்குள்ளது?',
      'எவ்வளவு மருத்துவ சிகிச்சை இலவசம்?',
    ],
    te: [
      'ఆయుష్మాన్ కార్డు ఎలా డౌన్‌లోడ్ చేయాలి?',
      'సమీపంలోని ఆసుపత్రి ఎక్కడ ఉంది?',
      'ఎంత మొత్తం వరకు ఉచిత చికిత్స లభిస్తుంది?',
    ],
    ml: [
      'ആയുഷ്മാൻ കാർഡ് എങ്ങനെ ലഭിക്കും?',
      'അടുത്തുള്ള ആശുപത്രി എവിടെയാണ്?',
    ],
    bn: [
      'আয়ুষ্মান কার্ড কীভাবে ডাউনলোড করব?',
      'কাছের হাসপাতাল কোথায় আছে?',
    ],
    mr: [
      'आयुष्मान कार्ड कसे डाउनलोड करावे?',
      'जवळचे रुग्णालय कोठे आहे?',
    ],
    gu: [
      'આયુષ્માન કાર્ડ કેવી રીતે ડાઉનલોડ કરવું?',
      'નજીકની હોસ્પિટલ ક્યાં છે?',
    ],
    pa: [
      'ਆਯੁਸ਼ਮਾਨ ਕਾਰਡ ਕਿਵੇਂ ਡਾਊਨਲੋਡ ਕਰੀਏ?',
      'ਨੇੜਲਾ ਹਸਪਤਾਲ ਕਿੱਥੇ ਹੈ?',
    ],
  };

  const sampleQuestions = samplePromptsByLang[currentLang] || samplePromptsByLang.en;

  // Speak initial greeting when opening
  useEffect(() => {
    if (isOpen) {
      setUserTranscript('');
      const defaultResp = processSeniorVoiceQuery('', currentLang);
      setAssistantResult(defaultResp);
      setStatusMessage(t.voiceClickToSpeak);
    } else {
      SpeechService.stopSpeaking();
    }
  }, [isOpen, currentLang]);

  if (!isOpen) return null;

  const handleStartListening = () => {
    if (isListening) return;

    setIsListening(true);
    setStatusMessage(t.voiceListening);
    SpeechService.stopSpeaking();

    SpeechService.startListening(
      currentLang,
      (transcript) => {
        setUserTranscript(transcript);
        const resp = processSeniorVoiceQuery(transcript, currentLang);
        setAssistantResult(resp);
        setIsListening(false);
        setStatusMessage('Answer ready:');

        // Speak the answer aloud
        SpeechService.speak(
          resp.spokenText,
          currentLang,
          () => setIsSpeaking(true),
          () => setIsSpeaking(false)
        );
      },
      (error) => {
        setIsListening(false);
        setStatusMessage(`Mic notice: ${error}. You can tap a quick question below.`);
      },
      () => {
        setIsListening(false);
      }
    );
  };

  const handleSelectSampleQuery = (query: string) => {
    setUserTranscript(query);
    const resp = processSeniorVoiceQuery(query, currentLang);
    setAssistantResult(resp);
    setStatusMessage('Answer:');

    SpeechService.speak(
      resp.spokenText,
      currentLang,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );
  };

  const handleToggleSpeechPlayback = () => {
    if (!assistantResult) return;
    if (isSpeaking) {
      SpeechService.stopSpeaking();
      setIsSpeaking(false);
    } else {
      SpeechService.speak(
        assistantResult.spokenText,
        currentLang,
        () => setIsSpeaking(true),
        () => setIsSpeaking(false)
      );
    }
  };

  const handleExecuteRecommendedAction = () => {
    if (assistantResult?.recommendedAction) {
      onNavigateToScreen(assistantResult.recommendedAction);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="voice-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border-4 border-[#124B8A] overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#124B8A] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Bot className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <h2 id="voice-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {t.voiceAssistantTitle}
              </h2>
              <span className="text-blue-100 text-sm font-semibold">
                Multilingual Voice Assistant for Seniors
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close voice assistant"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Microphone Action Center */}
          <div className="text-center bg-[#FAF9F6] p-6 rounded-2xl border-2 border-slate-200">
            <button
              onClick={handleStartListening}
              className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto flex items-center justify-center transition-all cursor-pointer shadow-lg ${
                isListening
                  ? 'bg-red-500 text-white ring-8 ring-red-200 animate-pulse scale-105'
                  : 'bg-[#124B8A] hover:bg-[#0e3b6e] text-white'
              }`}
              aria-label="Activate Microphone and Speak"
            >
              {isListening ? (
                <Mic className="w-12 h-12" />
              ) : (
                <Mic className="w-12 h-12 text-amber-300" />
              )}
            </button>

            <div className="mt-4">
              <div className="text-xl sm:text-2xl font-extrabold text-[#172B4D]">
                {isListening ? t.voiceListening : t.voiceClickToSpeak}
              </div>
              <p className="text-sm sm:text-base font-semibold text-slate-600 mt-1">
                {isListening ? t.voiceSpeakNow : 'Tap the microphone and speak your question in your language'}
              </p>
            </div>
          </div>

          {/* User Transcript (if any) */}
          {userTranscript && (
            <div className="p-4 bg-slate-100 rounded-xl border border-slate-300">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-1">
                You asked:
              </span>
              <p className="text-lg font-bold text-slate-900 italic">
                "{userTranscript}"
              </p>
            </div>
          )}

          {/* Assistant Spoken Response Display */}
          {assistantResult && (
            <div className="bg-[#EEF5FC] border-3 border-[#124B8A] rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-[#124B8A]" />
                  <span className="text-xs sm:text-sm font-bold text-[#124B8A] uppercase tracking-wide">
                    Ayushman Assistant Answer
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleToggleSpeechPlayback}
                  className={`p-2 rounded-lg border flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isSpeaking
                      ? 'bg-[#198754] text-white border-[#198754]'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                  }`}
                  aria-label="Play or stop audio answer"
                >
                  {isSpeaking ? <VolumeX className="w-4 h-4 animate-pulse" /> : <Volume2 className="w-4 h-4" />}
                  <span className="text-xs font-bold">{isSpeaking ? 'Stop' : 'Listen'}</span>
                </button>
              </div>

              <p className="text-lg sm:text-xl font-bold text-[#172B4D] leading-relaxed">
                {assistantResult.displayText}
              </p>

              {/* Action Button to navigate directly to service */}
              {assistantResult.recommendedAction && (
                <div className="mt-4 pt-3 border-t border-[#124B8A]/20">
                  <button
                    onClick={handleExecuteRecommendedAction}
                    className="w-full min-h-[52px] py-3 px-5 bg-[#198754] hover:bg-[#157347] text-white font-extrabold text-lg rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{assistantResult.actionLabel || 'Proceed to Service'}</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Quick Tap Suggested Questions in Native Language */}
          <div>
            <span className="text-sm sm:text-base font-bold text-slate-700 block mb-3">
              {t.quickQuestions}:
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {sampleQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectSampleQuery(q)}
                  className="p-3.5 bg-white hover:bg-amber-50 border-2 border-slate-300 hover:border-amber-400 rounded-xl text-left font-bold text-base sm:text-lg text-slate-800 transition-colors flex items-center justify-between gap-3 cursor-pointer"
                >
                  <span>"{q}"</span>
                  <ArrowRight className="w-5 h-5 text-slate-400 shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 text-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 bg-white border-2 border-slate-300 text-slate-700 font-bold text-base rounded-xl hover:bg-slate-50 cursor-pointer"
          >
            Close Assistant
          </button>
        </div>
      </div>
    </div>
  );
};
