import React, { useState } from 'react';
import {
  ArrowLeft,
  HeartHandshake,
  ShieldCheck,
  CheckCircle,
  Volume2,
  VolumeX,
  CreditCard,
  Hospital,
  Clock,
  Sparkles,
} from 'lucide-react';
import { LanguageCode, getTranslation } from '../utils/translations';
import { SpeechService } from '../utils/speech';

interface BenefitsScreenProps {
  currentLang: LanguageCode;
  onBack: () => void;
  onNavigateToEligibility: () => void;
}

export const BenefitsScreen: React.FC<BenefitsScreenProps> = ({
  currentLang,
  onBack,
  onNavigateToEligibility,
}) => {
  const t = getTranslation(currentLang);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const handleSpeakBenefits = () => {
    if (isSpeaking) {
      SpeechService.stopSpeaking();
      setIsSpeaking(false);
      return;
    }

    const text = `${t.benefitsTitle}. ${t.coverageAmount}. ${t.seniorSpecialNote}. ${t.cashlessTreatment}. ${t.hospitalStaysIncluded}.`;
    setIsSpeaking(true);
    SpeechService.speak(
      text,
      currentLang,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );
  };

  const benefitPillars = [
    {
      title: '₹5,00,000 Every Year',
      desc: 'Free health protection per family every single year. Reloads automatically annually.',
      icon: ShieldCheck,
      color: 'text-[#124B8A]',
      bg: 'bg-[#EEF5FC]',
    },
    {
      title: '100% Cashless & Free',
      desc: 'No money deposit or advance needed at the hospital. Everything from admission to discharge is covered.',
      icon: CreditCard,
      color: 'text-[#198754]',
      bg: 'bg-emerald-50',
    },
    {
      title: 'Senior Citizen Special Care',
      desc: 'Seniors aged 60+ receive dedicated queue assistance and specialized geriatric hospital beds.',
      icon: HeartHandshake,
      color: 'text-amber-800',
      bg: 'bg-amber-50',
    },
    {
      title: 'All Pre-Existing Diseases',
      desc: 'Heart issues, diabetes, high blood pressure, and joint problems are covered from Day 1 without waiting periods.',
      icon: CheckCircle,
      color: 'text-[#124B8A]',
      bg: 'bg-[#EEF5FC]',
    },
  ];

  const coveredProcedures = [
    'Eye Care & Cataract Surgery (Lens replacement)',
    'Heart Care: Angioplasty, Stenting, Bypass Surgery & Pacemaker',
    'Knee and Hip Joint Replacement Surgeries',
    'Kidney Dialysis and Nephrology treatments',
    'Cancer Care: Chemotherapy, Radiotherapy, and Oncology Surgeries',
    'ICU care, general medicine, diagnostic tests, and doctor visits',
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-slate-300 rounded-xl text-slate-800 hover:bg-slate-50 font-bold text-base sm:text-lg transition-colors cursor-pointer"
          aria-label={t.back}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t.back}</span>
        </button>

        <button
          type="button"
          onClick={handleSpeakBenefits}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-base border-2 transition-all cursor-pointer ${
            isSpeaking
              ? 'bg-[#198754] text-white border-[#198754]'
              : 'bg-[#EEF5FC] text-[#124B8A] border-[#124B8A] hover:bg-[#dce9f8]'
          }`}
          aria-label="Listen to healthcare benefits aloud"
        >
          {isSpeaking ? <VolumeX className="w-5 h-5 animate-pulse" /> : <Volume2 className="w-5 h-5" />}
          <span>{isSpeaking ? 'Stop Voice' : 'Listen to Benefits'}</span>
        </button>
      </div>

      {/* Screen Title */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
          {t.benefitsTitle}
        </h1>
        <p className="text-xl sm:text-2xl text-[#124B8A] font-bold mt-2">
          {t.benefitsSubtitle}
        </p>
      </div>

      {/* Golden Guarantee Card */}
      <div className="bg-gradient-to-r from-[#124B8A] to-[#0e3b6e] text-white p-6 sm:p-8 rounded-3xl shadow-lg mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-amber-300 font-bold text-sm sm:text-base uppercase tracking-wider block">
              Government Guaranteed Protection
            </span>
            <div className="text-3xl sm:text-5xl font-black text-white mt-1">
              ₹5,00,000 / Year
            </div>
            <p className="text-blue-100 text-base sm:text-lg mt-2 font-medium">
              Free hospital treatment for each eligible family every year.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/20 self-start sm:self-center">
            <span className="text-amber-300 font-bold block text-sm">Valid Nationwide</span>
            <span className="text-xs text-white">29,000+ Empanelled Hospitals</span>
          </div>
        </div>
      </div>

      {/* 4 Benefit Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {benefitPillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className={`${p.bg} border-2 border-slate-300 rounded-2xl p-6 flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 mb-4 shadow-2xs">
                  <Icon className={`w-7 h-7 ${p.color}`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#172B4D] mb-2">
                  {p.title}
                </h3>
                <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Senior Citizen Common Surgeries Covered */}
      <div className="bg-white border-3 border-slate-300 rounded-2xl p-6 sm:p-8 mb-8">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] mb-4">
          Popular Surgeries & Treatments Covered for Seniors:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {coveredProcedures.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <CheckCircle className="w-5 h-5 text-[#198754] shrink-0 mt-0.5" />
              <span className="text-base sm:text-lg font-semibold text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 bg-[#FAF9F6] border-2 border-[#124B8A]/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xl font-bold text-[#172B4D] block">
            Ready to check if you are eligible?
          </span>
          <span className="text-base text-slate-600">
            Takes less than 1 minute using your state and card.
          </span>
        </div>

        <button
          onClick={onNavigateToEligibility}
          className="w-full sm:w-auto px-8 py-4 bg-[#124B8A] hover:bg-[#0e3b6e] text-white font-bold text-xl rounded-xl shadow-md transition-all cursor-pointer"
        >
          Check My Eligibility Now →
        </button>
      </div>
    </div>
  );
};
