import React, { useState } from 'react';
import {
  PhoneCall,
  UserCheck,
  HelpCircle,
  X,
  Volume2,
  VolumeX,
  MapPin,
  Clock,
  ShieldAlert,
} from 'lucide-react';
import { LanguageCode, getTranslation } from '../utils/translations';
import { SpeechService } from '../utils/speech';

interface HelpSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: LanguageCode;
}

export const HelpSupportModal: React.FC<HelpSupportModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const t = getTranslation(currentLang);
  const [playingFaqIndex, setPlayingFaqIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const faqs = [
    {
      q: 'Do I have to pay any money at the hospital?',
      a: 'No. Ayushman Bharat PM-JAY is 100% cashless. All medicines, tests, surgeries, and bed charges are completely covered up to ₹5 Lakh per year.',
    },
    {
      q: 'Who can help me if I visit the hospital alone?',
      a: 'Every empanelled hospital has a dedicated "Ayushman Mitra" desk at the entrance. They will guide you in person, verify your card, and arrange your doctor appointment.',
    },
    {
      q: 'Are seniors aged 70 and above eligible automatically?',
      a: 'Yes! Under the expanded Ayushman Bharat Senior Citizen scheme, all seniors aged 70 and above are eligible for dedicated ₹5 Lakh healthcare cover regardless of income.',
    },
    {
      q: 'What should I do in an emergency?',
      a: 'Call national emergency at 108 or the Ayushman PM-JAY helpline at 14555 immediately. Go to the nearest empanelled hospital with any government ID.',
    },
  ];

  const handleSpeakFaq = (index: number, text: string) => {
    if (playingFaqIndex === index) {
      SpeechService.stopSpeaking();
      setPlayingFaqIndex(null);
      return;
    }

    setPlayingFaqIndex(index);
    SpeechService.speak(
      text,
      currentLang,
      () => setPlayingFaqIndex(index),
      () => setPlayingFaqIndex(null)
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border-4 border-[#124B8A] overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Header */}
        <div className="bg-[#124B8A] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <PhoneCall className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <h2 id="help-modal-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {t.getHelpTitle}
              </h2>
              <span className="text-blue-100 text-sm sm:text-base font-semibold">
                Available 24 Hours • Free Government Assistance
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close help window"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Main Emergency Call Tile (Massive button for seniors) */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white p-6 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-emerald-200 text-xs sm:text-sm font-bold uppercase tracking-wider block">
                Official 24x7 Toll-Free Support
              </span>
              <div className="text-3xl sm:text-4xl font-black mt-1">
                Call 14555
              </div>
              <p className="text-emerald-100 text-sm sm:text-base font-medium mt-1">
                Toll-free from any mobile or landline in your native language.
              </p>
            </div>

            <a
              href="tel:14555"
              className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-xl rounded-xl shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
            >
              <PhoneCall className="w-6 h-6 text-emerald-700" />
              <span>Call 14555 Now</span>
            </a>
          </div>

          {/* In-Person Help: Ayushman Mitra Desk */}
          <div className="p-5 bg-[#EEF5FC] border-2 border-[#124B8A]/30 rounded-2xl flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#124B8A]/30 flex items-center justify-center shrink-0 mt-1">
              <UserCheck className="w-7 h-7 text-[#124B8A]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#172B4D]">
                In-Person Ayushman Mitra Helpdesk
              </h3>
              <p className="text-base text-slate-700 mt-1 leading-relaxed">
                Every empanelled government and private hospital has dedicated Ayushman Mitra officers stationed near the reception to help senior citizens with registration, card printing, and doctor visits.
              </p>
            </div>
          </div>

          {/* Senior Frequently Asked Questions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#172B4D] mb-4">
              Common Questions for Seniors:
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isPlaying = playingFaqIndex === idx;

                return (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-xl hover:bg-white transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-lg font-bold text-[#172B4D]">
                        Q: {faq.q}
                      </h4>

                      <button
                        type="button"
                        onClick={() => handleSpeakFaq(idx, `${faq.q}. ${faq.a}`)}
                        className={`p-2 rounded-lg border transition-colors shrink-0 ${
                          isPlaying
                            ? 'bg-[#198754] text-white border-[#198754]'
                            : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
                        }`}
                        aria-label={`Listen to answer for ${faq.q}`}
                      >
                        {isPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>

                    <p className="text-base text-slate-700 mt-2 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 text-center">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-8 py-3 bg-[#124B8A] hover:bg-[#0e3b6e] text-white font-bold text-lg rounded-xl transition-colors cursor-pointer"
          >
            Close Help Window
          </button>
        </div>
      </div>
    </div>
  );
};
