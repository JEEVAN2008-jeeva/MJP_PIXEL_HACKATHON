import React, { useState } from 'react';
import {
  ShieldCheck,
  CreditCard,
  Hospital,
  PhoneCall,
  Volume2,
  VolumeX,
  ArrowRight,
  Check,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { LanguageCode, getTranslation } from '../utils/translations';
import { SpeechService } from '../utils/speech';

interface SeniorModeAssistantProps {
  currentLang: LanguageCode;
  onSelectService: (service: 'eligibility' | 'card' | 'hospital' | 'benefits' | 'help') => void;
  onOpenHelpModal: () => void;
}

export const SeniorModeAssistant: React.FC<SeniorModeAssistantProps> = ({
  currentLang,
  onSelectService,
  onOpenHelpModal,
}) => {
  const t = getTranslation(currentLang);

  const [step, setStep] = useState<number>(1);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [hasId, setHasId] = useState<boolean | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Play audio for current question
  const handleSpeakCurrentQuestion = () => {
    let questionText = '';
    if (step === 1) {
      questionText = `${t.guidedAssistantTitle}. ${t.stepQuestion1}`;
    } else if (step === 2) {
      questionText = t.stepQuestion2;
    } else {
      questionText = 'We are now taking you to your chosen service. Do you have any questions?';
    }

    setIsSpeaking(true);
    SpeechService.speak(
      questionText,
      currentLang,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );
  };

  const handleChooseGoal = (goal: 'eligibility' | 'card' | 'hospital' | 'help') => {
    setSelectedGoal(goal);
    if (goal === 'help') {
      onOpenHelpModal();
      return;
    }
    setStep(2);
    // Voice prompt for step 2
    SpeechService.speak(t.stepQuestion2, currentLang);
  };

  const handleAnswerCard = (haveCard: boolean) => {
    setHasId(haveCard);
    setStep(3);
  };

  const handleFinishAndNavigate = () => {
    if (selectedGoal === 'eligibility') {
      onSelectService('eligibility');
    } else if (selectedGoal === 'card') {
      onSelectService('card');
    } else if (selectedGoal === 'hospital') {
      onSelectService('hospital');
    } else {
      onSelectService('eligibility');
    }
  };

  return (
    <div className="bg-amber-50/70 border-4 border-amber-400 rounded-3xl p-6 sm:p-10 my-6 shadow-md max-w-4xl mx-auto">
      {/* Header of Senior Assistant */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b-2 border-amber-300 gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-900 font-extrabold text-sm sm:text-base tracking-wide uppercase mb-1">
            <span className="bg-amber-300 px-3 py-1 rounded-full">
              Senior Citizen Step-by-Step Helper
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#172B4D]">
            {t.guidedAssistantTitle}
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 font-semibold mt-1">
            {t.guidedAssistantSubtitle}
          </p>
        </div>

        {/* Audio Helper Button */}
        <button
          type="button"
          onClick={handleSpeakCurrentQuestion}
          className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-extrabold text-lg border-2 transition-all cursor-pointer shrink-0 ${
            isSpeaking
              ? 'bg-[#198754] text-white border-[#198754]'
              : 'bg-white hover:bg-amber-100 text-[#124B8A] border-[#124B8A]'
          }`}
          aria-label="Listen to question instructions"
        >
          {isSpeaking ? <VolumeX className="w-6 h-6 animate-pulse" /> : <Volume2 className="w-6 h-6" />}
          <span>{isSpeaking ? 'Listening...' : 'Listen to Voice'}</span>
        </button>
      </div>

      {/* Step 1: "What would you like help with today?" */}
      {step === 1 && (
        <div className="pt-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] mb-6 text-center sm:text-left">
            Question 1: {t.stepQuestion1}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => handleChooseGoal('eligibility')}
              className="min-h-[80px] p-5 bg-white hover:bg-[#EEF5FC] border-3 border-[#124B8A] text-[#124B8A] rounded-2xl font-extrabold text-xl sm:text-2xl flex items-center justify-between gap-4 transition-all shadow-xs hover:shadow-md cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-9 h-9 text-[#124B8A] shrink-0" />
                <span>{t.choiceEligibility}</span>
              </div>
              <ArrowRight className="w-7 h-7 shrink-0 text-[#124B8A]" />
            </button>

            <button
              onClick={() => handleChooseGoal('card')}
              className="min-h-[80px] p-5 bg-white hover:bg-emerald-50 border-3 border-[#198754] text-[#198754] rounded-2xl font-extrabold text-xl sm:text-2xl flex items-center justify-between gap-4 transition-all shadow-xs hover:shadow-md cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="w-9 h-9 text-[#198754] shrink-0" />
                <span>{t.choiceCard}</span>
              </div>
              <ArrowRight className="w-7 h-7 shrink-0 text-[#198754]" />
            </button>

            <button
              onClick={() => handleChooseGoal('hospital')}
              className="min-h-[80px] p-5 bg-white hover:bg-amber-100 border-3 border-amber-600 text-amber-900 rounded-2xl font-extrabold text-xl sm:text-2xl flex items-center justify-between gap-4 transition-all shadow-xs hover:shadow-md cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <Hospital className="w-9 h-9 text-amber-700 shrink-0" />
                <span>{t.choiceHospital}</span>
              </div>
              <ArrowRight className="w-7 h-7 shrink-0 text-amber-700" />
            </button>

            <button
              onClick={() => handleChooseGoal('help')}
              className="min-h-[80px] p-5 bg-white hover:bg-red-50 border-3 border-red-500 text-red-900 rounded-2xl font-extrabold text-xl sm:text-2xl flex items-center justify-between gap-4 transition-all shadow-xs hover:shadow-md cursor-pointer text-left"
            >
              <div className="flex items-center gap-3">
                <PhoneCall className="w-9 h-9 text-red-600 shrink-0" />
                <span>{t.choiceCallHelp}</span>
              </div>
              <ArrowRight className="w-7 h-7 shrink-0 text-red-600" />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: "Do you have your Aadhaar or Ration card with you?" */}
      {step === 2 && (
        <div className="pt-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] mb-6 text-center sm:text-left">
            Question 2: {t.stepQuestion2}
          </h3>

          <div className="space-y-4 max-w-xl mx-auto sm:mx-0">
            <button
              onClick={() => handleAnswerCard(true)}
              className="w-full min-h-[76px] p-5 bg-white hover:bg-emerald-50 border-3 border-[#198754] text-[#198754] rounded-2xl font-extrabold text-xl sm:text-2xl flex items-center justify-between gap-4 transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Check className="w-8 h-8 text-[#198754]" />
                <span>{t.yesHaveId}</span>
              </div>
              <ArrowRight className="w-7 h-7 text-[#198754]" />
            </button>

            <button
              onClick={() => handleAnswerCard(false)}
              className="w-full min-h-[76px] p-5 bg-white hover:bg-slate-100 border-3 border-slate-400 text-slate-800 rounded-2xl font-extrabold text-xl sm:text-2xl flex items-center justify-between gap-4 transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <PhoneCall className="w-8 h-8 text-slate-600" />
                <span>{t.noNeedHelp}</span>
              </div>
              <ArrowRight className="w-7 h-7 text-slate-600" />
            </button>
          </div>

          <div className="mt-8 pt-4 border-t border-amber-200">
            <button
              onClick={() => setStep(1)}
              className="text-base font-bold text-slate-700 hover:text-slate-900 underline cursor-pointer"
            >
              ← Go back to previous question
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Ready confirmation */}
      {step === 3 && (
        <div className="pt-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-3 border-emerald-500 shadow-sm mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Check className="w-9 h-9 text-[#198754]" />
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
                Ready to Proceed
              </h3>
            </div>

            <p className="text-lg sm:text-xl text-slate-700 font-semibold mb-4 leading-relaxed">
              We have set up the easiest screen for you. Click the big green button below to start.
            </p>

            <button
              onClick={handleFinishAndNavigate}
              className="w-full min-h-[64px] py-4 bg-[#198754] hover:bg-[#157347] text-white font-extrabold text-2xl rounded-2xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-3"
            >
              <span>Open My Healthcare Screen Now</span>
              <ArrowRight className="w-7 h-7" />
            </button>
          </div>

          <button
            onClick={() => setStep(1)}
            className="flex items-center gap-2 text-base font-bold text-slate-700 hover:text-slate-900 cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Start from beginning</span>
          </button>
        </div>
      )}
    </div>
  );
};
