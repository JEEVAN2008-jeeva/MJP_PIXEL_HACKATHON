import React, { useState } from 'react';
import {
  ArrowLeft,
  CreditCard,
  Download,
  CheckCircle,
  QrCode,
  ShieldCheck,
  Printer,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { LanguageCode, getTranslation } from '../utils/translations';
import { SpeechService } from '../utils/speech';

interface CardDownloadScreenProps {
  currentLang: LanguageCode;
  onBack: () => void;
  onOpenHelpModal: () => void;
}

export const CardDownloadScreen: React.FC<CardDownloadScreenProps> = ({
  currentLang,
  onBack,
  onOpenHelpModal,
}) => {
  const t = getTranslation(currentLang);

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [aadhaarInput, setAadhaarInput] = useState<string>('9876 5432 1098');
  const [otpInput, setOtpInput] = useState<string>('742819');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Beneficiary Verified Data
  const cardData = {
    name: 'Rameshwar Prasad Sharma',
    dobYear: '1956',
    age: 68,
    gender: 'Male',
    pmjayId: 'PMJAY-KA-2024-8849201',
    abhaNumber: '91-2048-8192-3847',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    coverage: '₹5,00,000 / Year',
    issueDate: '12-Nov-2024',
    validity: 'Lifetime (Senior Citizen Priority)',
  };

  const handleVerifyStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleConfirmOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep(3);

      SpeechService.speak(
        `${t.cardDownloadTitle}. Your verified Ayushman card is ready to download.`,
        currentLang,
        () => setIsSpeaking(true),
        () => setIsSpeaking(false)
      );
    }, 600);
  };

  const handleDownloadCard = () => {
    setIsDownloaded(true);

    // Trigger print window for physical card printing, or simulate download
    SpeechService.speak(
      t.cardDownloadedNotice,
      currentLang,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false)
    );

    // Create a printable blob / download
    const cardHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Ayushman Bharat Card - ${cardData.name}</title>
          <style>
            body { font-family: sans-serif; padding: 20px; background: #fafafa; }
            .card { width: 500px; margin: 0 auto; border: 3px solid #124B8A; border-radius: 12px; background: #fff; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.15); }
            .header { background: #124B8A; color: #fff; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; }
            .stripe { height: 6px; background: linear-gradient(to right, #FF9933 33%, #fff 33%, #fff 66%, #138808 66%); }
            .body { padding: 16px; display: flex; gap: 16px; }
            .photo { width: 100px; height: 120px; background: #e2e8f0; border: 2px solid #cbd5e1; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #475569; }
            .details { flex: 1; }
            .name { font-size: 18px; font-weight: bold; color: #0f172a; margin-bottom: 4px; }
            .item { font-size: 13px; color: #334155; margin-bottom: 3px; }
            .footer { background: #EEF5FC; border-top: 1px solid #cbd5e1; padding: 8px 16px; font-size: 12px; font-weight: bold; color: #124B8A; display: flex; justify-content: space-between; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="stripe"></div>
            <div class="header">
              <div><strong>PM-JAY AYUSHMAN CARD</strong><br><small>National Health Authority</small></div>
              <div>₹5,00,000 Free Cover</div>
            </div>
            <div class="body">
              <div class="photo">PHOTO</div>
              <div class="details">
                <div class="name">${cardData.name}</div>
                <div class="item"><strong>PM-JAY ID:</strong> ${cardData.pmjayId}</div>
                <div class="item"><strong>ABHA ID:</strong> ${cardData.abhaNumber}</div>
                <div class="item"><strong>Year of Birth:</strong> ${cardData.dobYear} (Age: ${cardData.age})</div>
                <div class="item"><strong>Gender:</strong> ${cardData.gender}</div>
                <div class="item"><strong>State:</strong> ${cardData.state}</div>
              </div>
            </div>
            <div class="footer">
              <span>Senior Citizen Priority Health Cover</span>
              <span>Toll Free: 14555</span>
            </div>
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;

    const blob = new Blob([cardHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const printWindow = window.open(url, '_blank');
    if (!printWindow) {
      // Fallback direct link download
      const link = document.createElement('a');
      link.href = url;
      link.download = `Ayushman_Card_${cardData.name.replace(/\s+/g, '_')}.html`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
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
            {step === 1 && t.stepEnterDetails}
            {step === 2 && t.stepVerify}
            {step === 3 && t.stepPreview}
          </span>
        </div>
      </div>

      {/* Screen Title */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
          {t.cardDownloadTitle}
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 font-medium mt-1">
          {t.cardDownloadDesc}
        </p>
      </div>

      {/* Step 1: Enter Aadhaar / Beneficiary ID */}
      {step === 1 && (
        <form onSubmit={handleVerifyStep1} className="bg-white border-3 border-slate-300 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="space-y-6">
            <div className="p-4 bg-[#EEF5FC] border border-[#124B8A]/30 rounded-xl">
              <span className="text-base font-bold text-[#124B8A] block">
                Official Card Access Process
              </span>
              <p className="text-sm text-slate-700 mt-1">
                Enter your 12-digit Aadhaar number or PM-JAY registration ID to access your official card.
              </p>
            </div>

            <div>
              <label htmlFor="card-aadhaar" className="block text-xl font-bold text-[#172B4D] mb-2">
                1. Enter Aadhaar Card Number
              </label>
              <input
                id="card-aadhaar"
                type="text"
                value={aadhaarInput}
                onChange={(e) => setAadhaarInput(e.target.value)}
                placeholder="9876 5432 1098"
                required
                className="w-full text-2xl font-bold tracking-wider p-4 rounded-xl border-3 border-slate-300 focus:border-[#124B8A] focus:outline-hidden"
              />
              <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium">
                {t.demoDisclaimer}
              </p>
            </div>

            <button
              type="submit"
              className="w-full min-h-[56px] py-4 bg-[#124B8A] hover:bg-[#0e3b6e] text-white font-bold text-xl rounded-xl shadow-md transition-all cursor-pointer"
            >
              Verify My Identity →
            </button>
          </div>
        </form>
      )}

      {/* Step 2: Verification with OTP */}
      {step === 2 && (
        <form onSubmit={handleConfirmOtp} className="bg-white border-3 border-slate-300 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl mb-6">
            <span className="text-emerald-900 font-bold text-base block">
              Security OTP Sent
            </span>
            <span className="text-emerald-700 text-sm">
              A 6-digit verification code has been sent to your registered mobile ending in ****2345:
            </span>
          </div>

          <div className="mb-6">
            <label htmlFor="card-otp" className="block text-xl font-bold text-[#172B4D] mb-2">
              Enter 6-Digit OTP
            </label>
            <input
              id="card-otp"
              type="text"
              value={otpInput}
              onChange={(e) => setOtpInput(e.target.value)}
              placeholder="742819"
              required
              className="w-full text-3xl font-extrabold tracking-widest text-center p-4 rounded-xl border-3 border-[#124B8A] bg-slate-50"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-4 bg-white border-2 border-slate-300 text-slate-700 font-bold text-lg rounded-xl hover:bg-slate-50 cursor-pointer"
            >
              Back
            </button>

            <button
              type="submit"
              disabled={isVerifying}
              className="flex-1 min-h-[56px] py-4 bg-[#198754] hover:bg-[#157347] text-white font-bold text-xl rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isVerifying ? (
                <span>Retrieving Official Card...</span>
              ) : (
                <>
                  <CheckCircle className="w-6 h-6" />
                  <span>Confirm & View My Card</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Verified Ayushman Golden Health Card Display */}
      {step === 3 && (
        <div className="space-y-6">
          {/* Card Success Notification */}
          <div className="bg-emerald-50 border-2 border-emerald-400 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-[#198754] shrink-0" />
              <div>
                <span className="font-bold text-lg text-emerald-950 block">
                  Identity Verified Successfully!
                </span>
                <span className="text-sm text-emerald-800">
                  Your official Ayushman Card is ready for download and printing.
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                SpeechService.speak(
                  `${cardData.name}. Ayushman Bharat Card. PM-JAY ID ${cardData.pmjayId}. You have 5 Lakh Rupees annual cover.`,
                  currentLang
                );
              }}
              className="px-3.5 py-2 bg-white text-emerald-900 border border-emerald-300 rounded-lg font-bold text-sm flex items-center gap-1.5 hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              <Volume2 className="w-4 h-4" />
              <span>Listen</span>
            </button>
          </div>

          {/* Authentic Ayushman Bharat Digital Card Preview */}
          <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 border-4 border-amber-500 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            {/* National Tricolor Top Stripe */}
            <div className="absolute top-0 inset-x-0 h-3 flex">
              <div className="w-1/3 bg-[#FF9933]"></div>
              <div className="w-1/3 bg-white"></div>
              <div className="w-1/3 bg-[#138808]"></div>
            </div>

            {/* Card Header */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b-2 border-amber-200 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#124B8A] text-white flex items-center justify-center font-bold shadow-xs">
                  <ShieldCheck className="w-7 h-7 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#124B8A] tracking-tight">
                    AYUSHMAN BHARAT PM-JAY
                  </h3>
                  <span className="text-xs sm:text-sm font-bold text-slate-700">
                    National Health Authority • Government of India
                  </span>
                </div>
              </div>

              <div className="bg-amber-100 border border-amber-400 px-3 py-1.5 rounded-lg text-amber-950 font-extrabold text-xs sm:text-sm self-start sm:self-center">
                ★ SENIOR CITIZEN PRIORITY
              </div>
            </div>

            {/* Card Main Body */}
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Photo Area */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="w-32 h-38 bg-slate-100 border-3 border-amber-400 rounded-xl overflow-hidden shadow-sm relative flex items-center justify-center">
                  <img
                    src="/src/assets/images/senior_healthcare_ayushman_1794467410550.jpg"
                    alt={cardData.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#124B8A] text-white text-[10px] font-bold py-0.5">
                    VERIFIED
                  </div>
                </div>
                <span className="mt-2 text-xs font-mono font-bold text-slate-600">
                  ABHA: {cardData.abhaNumber}
                </span>
              </div>

              {/* Beneficiary Details */}
              <div className="md:col-span-8 space-y-2.5">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    {t.beneficiaryName}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#172B4D]">
                    {cardData.name}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <span className="text-xs font-bold text-slate-500 block">PM-JAY ID</span>
                    <span className="text-lg font-mono font-black text-[#124B8A]">
                      {cardData.pmjayId}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-500 block">Year of Birth / Age</span>
                    <span className="text-lg font-bold text-slate-800">
                      {cardData.dobYear} ({cardData.age} Years)
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-500 block">Gender</span>
                    <span className="text-lg font-bold text-slate-800">{cardData.gender}</span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-500 block">State & District</span>
                    <span className="text-lg font-bold text-slate-800">{cardData.district}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer: QR Code & Golden Guarantee */}
            <div className="pt-4 border-t-2 border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-white p-1 rounded-lg border border-slate-300 flex items-center justify-center">
                  <QrCode className="w-12 h-12 text-slate-800" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-600 block">
                    Cashless Hospitalization Entitlement
                  </span>
                  <span className="text-xl font-extrabold text-[#198754]">
                    ₹5,00,000 / Family / Year
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-500 font-semibold text-center sm:text-right">
                <span>Valid at all PM-JAY Empanelled Hospitals across India</span>
                <span className="block font-bold text-[#124B8A]">National Helpline: 14555</span>
              </div>
            </div>
          </div>

          {/* Action Row: Big Obvious DOWNLOAD Button (Required by prompt) */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={handleDownloadCard}
              className="flex-1 min-h-[64px] py-4 px-6 bg-[#198754] hover:bg-[#157347] text-white font-extrabold text-xl sm:text-2xl rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-3 active:scale-[0.99]"
              aria-label="Download Ayushman Card PDF"
            >
              <Download className="w-8 h-8 stroke-[2.5]" />
              <span>{t.downloadCardBtn}</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadCard}
              className="px-6 min-h-[64px] py-4 bg-white border-3 border-[#124B8A] text-[#124B8A] hover:bg-[#EEF5FC] font-bold text-xl rounded-2xl transition-colors cursor-pointer flex items-center justify-center gap-2"
              title="Print Card directly"
            >
              <Printer className="w-6 h-6" />
              <span>Print Card</span>
            </button>
          </div>

          {/* Downloaded Confirmation Notice */}
          {isDownloaded && (
            <div className="p-4 bg-emerald-100 border-2 border-emerald-400 rounded-xl text-emerald-950 font-bold text-base sm:text-lg flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-700 shrink-0" />
              <span>{t.cardDownloadedNotice}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
