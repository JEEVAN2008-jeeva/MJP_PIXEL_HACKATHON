import React, { useState } from 'react';
import {
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  CreditCard,
  User,
  Users,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { LanguageCode, getTranslation } from '../utils/translations';
import {
  INDIAN_STATES,
  ID_TYPES,
  evaluateEligibility,
  EligibilityResult,
} from '../utils/eligibility';
import { SpeechService } from '../utils/speech';

interface EligibilityScreenProps {
  currentLang: LanguageCode;
  onBack: () => void;
  onNavigateToCardDownload: () => void;
  onOpenHelpModal: () => void;
}

export const EligibilityScreen: React.FC<EligibilityScreenProps> = ({
  currentLang,
  onBack,
  onNavigateToCardDownload,
  onOpenHelpModal,
}) => {
  const t = getTranslation(currentLang);

  const [selectedState, setSelectedState] = useState<string>('Karnataka');
  const [selectedIdType, setSelectedIdType] = useState<string>('aadhaar');
  const [idNumber, setIdNumber] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [otpCode, setOtpCode] = useState<string>('');
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<EligibilityResult | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Quick autofill for seniors to test without tedious typing
  const handleAutofillEligible = () => {
    setSelectedState('Karnataka');
    setSelectedIdType('aadhaar');
    setIdNumber('9876 5432 1098');
    setMobileNumber('98451 22345');
    setOtpCode('742819');
  };

  const handleAutofillNotFound = () => {
    setSelectedState('Karnataka');
    setSelectedIdType('aadhaar');
    setIdNumber('0000 0000 0000');
    setMobileNumber('98451 00000');
    setOtpCode('123456');
  };

  const handleProceedToOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!idNumber.trim()) return;
    setStep(2);
    if (!otpCode) setOtpCode('824190'); // Simulated auto-sent OTP for ease
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const res = evaluateEligibility(selectedState, selectedIdType, idNumber, mobileNumber);
      setResult(res);
      setIsLoading(false);
      setStep(3);

      // Voice read out of result
      if (res.isEligible) {
        SpeechService.speak(
          `${t.eligibleSuccessTitle}. ${t.eligibleSuccessDesc}`,
          currentLang,
          () => setIsSpeaking(true),
          () => setIsSpeaking(false)
        );
      } else {
        SpeechService.speak(
          `${t.notEligibleTitle}. ${t.notEligibleDesc}`,
          currentLang,
          () => setIsSpeaking(true),
          () => setIsSpeaking(false)
        );
      }
    }, 700);
  };

  const handleToggleSpeakResult = () => {
    if (isSpeaking) {
      SpeechService.stopSpeaking();
      setIsSpeaking(false);
      return;
    }

    if (!result) return;
    const msg = result.isEligible
      ? `${t.eligibleSuccessTitle}. ${t.eligibleSuccessDesc}. Head of family: ${result.beneficiaryName}. Coverage: ₹5,00,000 per year.`
      : `${t.notEligibleTitle}. ${t.notEligibleDesc}`;

    SpeechService.speak(
      msg,
      currentLang,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );
  };

  const handleReset = () => {
    setStep(1);
    setIdNumber('');
    setMobileNumber('');
    setOtpCode('');
    setResult(null);
    SpeechService.stopSpeaking();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2.5 bg-white border-2 border-slate-300 rounded-xl text-slate-800 hover:bg-slate-50 font-bold text-base sm:text-lg transition-colors cursor-pointer"
          aria-label={t.back}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t.back}</span>
        </button>

        <div className="text-right">
          <span className="text-xs sm:text-sm font-bold text-[#124B8A] uppercase tracking-wider block">
            Step {step} of 3
          </span>
          <span className="text-base sm:text-lg font-bold text-slate-800">
            {step === 1 && t.eligibilityStep1}
            {step === 2 && t.eligibilityStep2}
            {step === 3 && t.eligibilityStep3}
          </span>
        </div>
      </div>

      {/* Screen Title */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
          {t.checkEligibilityTitle}
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 font-medium mt-1">
          {t.checkEligibilityDesc}
        </p>
      </div>

      {/* Senior Help Notice */}
      <div className="bg-[#EEF5FC] border-2 border-[#124B8A]/30 rounded-xl p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-[#124B8A] shrink-0" />
          <span className="text-sm sm:text-base font-semibold text-slate-800">
            For demonstration, you can tap sample buttons to quickly test:
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleAutofillEligible}
            className="px-3 py-1.5 bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-500 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            Fill Sample (Eligible)
          </button>
          <button
            type="button"
            onClick={handleAutofillNotFound}
            className="px-3 py-1.5 bg-white hover:bg-amber-50 text-amber-800 border border-amber-500 rounded-lg text-xs sm:text-sm font-bold transition-colors cursor-pointer"
          >
            Fill Sample (Not Found)
          </button>
        </div>
      </div>

      {/* Step 1: State & Identification Selection */}
      {step === 1 && (
        <form onSubmit={handleProceedToOtp} className="bg-white border-3 border-slate-300 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="space-y-6">
            {/* Field 1: State Selection */}
            <div>
              <label htmlFor="state-select" className="block text-xl font-bold text-[#172B4D] mb-2">
                1. {t.selectState}
              </label>
              <select
                id="state-select"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full text-lg sm:text-xl font-semibold p-4 rounded-xl border-3 border-slate-300 bg-white focus:border-[#124B8A] focus:outline-hidden"
              >
                {INDIAN_STATES.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 2: Identification Type */}
            <div>
              <label htmlFor="idtype-select" className="block text-xl font-bold text-[#172B4D] mb-2">
                2. {t.selectIdType}
              </label>
              <select
                id="idtype-select"
                value={selectedIdType}
                onChange={(e) => setSelectedIdType(e.target.value)}
                className="w-full text-lg sm:text-xl font-semibold p-4 rounded-xl border-3 border-slate-300 bg-white focus:border-[#124B8A] focus:outline-hidden"
              >
                {ID_TYPES.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Field 3: ID Number Input */}
            <div>
              <label htmlFor="id-number-input" className="block text-xl font-bold text-[#172B4D] mb-2">
                3. {t.enterIdNumber}
              </label>
              <input
                id="id-number-input"
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                placeholder="e.g. 9876 5432 1098"
                required
                className="w-full text-xl sm:text-2xl font-bold tracking-wider p-4 rounded-xl border-3 border-slate-300 focus:border-[#124B8A] focus:outline-hidden placeholder:text-slate-400"
              />
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                {t.demoDisclaimer}
              </p>
            </div>

            {/* Field 4: Mobile Number (Optional for SMS) */}
            <div>
              <label htmlFor="mobile-input" className="block text-xl font-bold text-[#172B4D] mb-2">
                4. {t.enterMobileNumber}
              </label>
              <input
                id="mobile-input"
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="e.g. 98451 22345"
                className="w-full text-xl font-semibold p-4 rounded-xl border-3 border-slate-300 focus:border-[#124B8A] focus:outline-hidden placeholder:text-slate-400"
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={!idNumber.trim()}
              className="w-full min-h-[56px] py-4 bg-[#124B8A] hover:bg-[#0e3b6e] text-white font-bold text-xl rounded-xl shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to Simple Verification →
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Simulated OTP Verification */}
      {step === 2 && (
        <form onSubmit={handleVerify} className="bg-white border-3 border-slate-300 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl mb-6">
            <span className="text-emerald-900 font-bold text-base block">
              Authentication Code Sent to Registered Mobile
            </span>
            <span className="text-emerald-700 text-sm">
              For ease of testing, simulation OTP has been pre-filled below:
            </span>
          </div>

          <div className="mb-6">
            <label htmlFor="otp-input" className="block text-xl font-bold text-[#172B4D] mb-2">
              {t.verifyWithOtp}
            </label>
            <input
              id="otp-input"
              type="text"
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value)}
              placeholder="e.g. 742819"
              required
              className="w-full text-3xl font-extrabold tracking-widest text-center p-4 rounded-xl border-3 border-[#124B8A] focus:outline-hidden bg-slate-50"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold text-lg rounded-xl hover:bg-slate-50 cursor-pointer"
            >
              Back to Edit Details
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 min-h-[56px] py-4 bg-[#198754] hover:bg-[#157347] text-white font-bold text-xl rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <span>Checking Database...</span>
              ) : (
                <>
                  <CheckCircle className="w-6 h-6" />
                  <span>{t.verifyAction}</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Verified Results Screen */}
      {step === 3 && result && (
        <div className="space-y-6">
          {result.isEligible ? (
            /* Eligible Success Card */
            <div className="bg-white border-4 border-[#198754] rounded-2xl p-6 sm:p-8 shadow-lg">
              {/* Header result row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-10 h-10 text-[#198754]" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#198754] uppercase tracking-wide">
                      Official PM-JAY Status: Verified
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] leading-tight">
                      {t.eligibleSuccessTitle}
                    </h2>
                  </div>
                </div>

                {/* Speaker Button to listen to result */}
                <button
                  type="button"
                  onClick={handleToggleSpeakResult}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-base border-2 transition-all cursor-pointer shrink-0 ${
                    isSpeaking
                      ? 'bg-[#198754] text-white border-[#198754]'
                      : 'bg-emerald-50 text-emerald-800 border-emerald-400 hover:bg-emerald-100'
                  }`}
                  aria-label="Listen to eligibility result"
                >
                  {isSpeaking ? <VolumeX className="w-5 h-5 animate-pulse" /> : <Volume2 className="w-5 h-5" />}
                  <span>{isSpeaking ? 'Stop Voice' : 'Listen Result'}</span>
                </button>
              </div>

              {/* Coverage Highlights Banner */}
              <div className="my-6 p-5 bg-[#EEF5FC] border-2 border-[#124B8A]/30 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-slate-600 block">
                    {t.annualCoverage}
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#124B8A]">
                    {result.annualCoverage}
                  </span>
                </div>

                <div className="bg-white px-4 py-2 rounded-lg border border-slate-200">
                  <span className="text-xs font-bold text-slate-500 block">PM-JAY ID</span>
                  <span className="text-lg font-mono font-bold text-slate-900">{result.pmjayId}</span>
                </div>
              </div>

              {/* Family Members Covered Table */}
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xl font-bold text-[#172B4D] mb-3">
                  <Users className="w-6 h-6 text-[#124B8A]" />
                  <span>Eligible Family Members:</span>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-200">
                  {result.familyMembers?.map((m, idx) => (
                    <div key={idx} className="p-4 flex items-center justify-between bg-slate-50 hover:bg-white text-base sm:text-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-700 text-sm">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900">{m.name}</div>
                          <div className="text-xs sm:text-sm text-slate-500 font-medium">
                            {m.relation} • Age {m.age} • {m.gender}
                          </div>
                        </div>
                      </div>

                      <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold rounded-full">
                        {m.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps Buttons */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={onNavigateToCardDownload}
                  className="flex-1 min-h-[56px] py-4 bg-[#198754] hover:bg-[#157347] text-white font-bold text-xl rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-6 h-6" />
                  <span>Download Ayushman Card Now →</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold text-lg rounded-xl hover:bg-slate-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Check Another ID</span>
                </button>
              </div>
            </div>
          ) : (
            /* Not Eligible / Not Found Card */
            <div className="bg-white border-4 border-amber-500 rounded-2xl p-6 sm:p-8 shadow-lg">
              <div className="flex items-center gap-4 pb-6 border-b border-slate-200">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-10 h-10 text-amber-600" />
                </div>
                <div>
                  <span className="text-xs sm:text-sm font-bold text-amber-700 uppercase tracking-wide">
                    Search Complete
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] leading-tight">
                    {t.notEligibleTitle}
                  </h2>
                </div>
              </div>

              <div className="my-6 p-5 bg-amber-50 border-2 border-amber-200 rounded-xl">
                <p className="text-lg sm:text-xl text-amber-950 font-semibold leading-relaxed">
                  {t.notEligibleDesc}
                </p>
                <p className="text-base text-slate-700 mt-3">
                  Under the new Senior Citizen expansion (70+ Universal Cover), you can register at your nearest Common Service Centre (CSC) or any government hospital PM-JAY desk with just your Aadhaar card.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={onOpenHelpModal}
                  className="flex-1 min-h-[56px] py-4 bg-[#124B8A] hover:bg-[#0e3b6e] text-white font-bold text-xl rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Speak to Ayushman Helpline (14555)</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold text-lg rounded-xl hover:bg-slate-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Try With Another Number</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
