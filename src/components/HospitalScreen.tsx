import React, { useState } from 'react';
import {
  ArrowLeft,
  Hospital,
  MapPin,
  Phone,
  Search,
  Filter,
  UserCheck,
  CheckCircle2,
  Volume2,
  VolumeX,
  ExternalLink,
  Navigation,
} from 'lucide-react';
import { LanguageCode, getTranslation } from '../utils/translations';
import {
  EMPANELLED_HOSPITALS,
  HospitalRecord,
  searchHospitals,
} from '../utils/hospitals';
import { INDIAN_STATES } from '../utils/eligibility';
import { SpeechService } from '../utils/speech';

interface HospitalScreenProps {
  currentLang: LanguageCode;
  onBack: () => void;
  onOpenHelpModal: () => void;
}

export const HospitalScreen: React.FC<HospitalScreenProps> = ({
  currentLang,
  onBack,
  onOpenHelpModal,
}) => {
  const t = getTranslation(currentLang);

  const [selectedState, setSelectedState] = useState<string>('Karnataka');
  const [selectedType, setSelectedType] = useState<'all' | 'Government' | 'Private Empanelled'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedHospitalForModal, setSelectedHospitalForModal] = useState<HospitalRecord | null>(null);
  const [speakingHospId, setSpeakingHospId] = useState<string | null>(null);

  const filteredHospitals = searchHospitals(
    EMPANELLED_HOSPITALS,
    searchQuery,
    selectedState,
    selectedType
  );

  const handleSpeakHospital = (hosp: HospitalRecord, e: React.MouseEvent) => {
    e.stopPropagation();
    if (speakingHospId === hosp.id) {
      SpeechService.stopSpeaking();
      setSpeakingHospId(null);
      return;
    }

    const text = `${hosp.name}. Located at ${hosp.address}. Phone number: ${hosp.phone}. Ayushman Mitra contact: ${hosp.ayushmanMitraName}.`;
    setSpeakingHospId(hosp.id);
    SpeechService.speak(
      text,
      currentLang,
      () => setSpeakingHospId(hosp.id),
      () => setSpeakingHospId(null)
    );
  };

  const handleQuickSpecialtyFilter = (specialty: string) => {
    setSearchQuery(specialty);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
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

        <span className="text-sm sm:text-base font-bold text-[#198754] bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-300">
          ✓ All Listed Hospitals Provide Cashless Treatment
        </span>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172B4D] tracking-tight">
          {t.hospitalFinderTitle}
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 font-medium mt-1">
          {t.hospitalFinderDesc}
        </p>
      </div>

      {/* Filter and Search Card */}
      <div className="bg-[#EEF5FC] border-3 border-[#124B8A]/30 rounded-2xl p-5 sm:p-6 mb-8 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* State Filter */}
          <div>
            <label htmlFor="hosp-state" className="block text-base sm:text-lg font-bold text-[#172B4D] mb-1.5">
              1. {t.selectState}
            </label>
            <select
              id="hosp-state"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full text-base sm:text-lg font-semibold p-3.5 rounded-xl border-2 border-slate-300 bg-white focus:border-[#124B8A] focus:outline-hidden"
            >
              <option value="all">All States</option>
              {INDIAN_STATES.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          {/* Hospital Type Filter */}
          <div>
            <label htmlFor="hosp-type" className="block text-base sm:text-lg font-bold text-[#172B4D] mb-1.5">
              2. {t.filterByType}
            </label>
            <select
              id="hosp-type"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="w-full text-base sm:text-lg font-semibold p-3.5 rounded-xl border-2 border-slate-300 bg-white focus:border-[#124B8A] focus:outline-hidden"
            >
              <option value="all">{t.allTypes}</option>
              <option value="Government">{t.publicHospital}</option>
              <option value="Private Empanelled">{t.privateHospital}</option>
            </select>
          </div>

          {/* Hospital / Specialty Search input */}
          <div>
            <label htmlFor="hosp-query" className="block text-base sm:text-lg font-bold text-[#172B4D] mb-1.5">
              3. Search Name or Treatment
            </label>
            <div className="relative">
              <input
                id="hosp-query"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchHospitalPlaceholder}
                className="w-full text-base sm:text-lg font-semibold p-3.5 pl-10 rounded-xl border-2 border-slate-300 bg-white focus:border-[#124B8A] focus:outline-hidden"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-4" />
            </div>
          </div>
        </div>

        {/* Quick Treatment Filter Pills for Seniors */}
        <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs sm:text-sm font-bold text-slate-700">Quick Filters:</span>
          {['Cataract / Eye', 'Heart / Cardiology', 'Knee / Orthopedics', 'Dialysis', 'General Medicine'].map((spec) => (
            <button
              key={spec}
              type="button"
              onClick={() => handleQuickSpecialtyFilter(spec.split(' ')[0])}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg text-xs sm:text-sm font-bold text-[#124B8A] transition-colors cursor-pointer"
            >
              + {spec}
            </button>
          ))}
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-bold transition-colors cursor-pointer"
            >
              Clear Search
            </button>
          )}
        </div>
      </div>

      {/* Hospital Results Count */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#172B4D]">
          Available Hospitals ({filteredHospitals.length})
        </h2>
        <span className="text-xs sm:text-sm text-slate-500 font-medium">
          Showing empanelled providers near {selectedState}
        </span>
      </div>

      {/* Hospital Cards List */}
      <div className="space-y-6">
        {filteredHospitals.length === 0 ? (
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-8 text-center">
            <Hospital className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-slate-800">No Hospitals Found</h3>
            <p className="text-lg text-slate-600 mt-2 max-w-md mx-auto">
              We could not find matching hospitals for your search. Try changing the state or clearing search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedState('Karnataka');
                setSelectedType('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-3 bg-[#124B8A] text-white font-bold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredHospitals.map((hosp) => {
            const isSpeaking = speakingHospId === hosp.id;

            return (
              <div
                key={hosp.id}
                className="bg-white border-3 border-slate-300 hover:border-[#124B8A] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Header: Name + Badge + Audio Button */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#EEF5FC] border border-[#124B8A]/30 flex items-center justify-center shrink-0 mt-1">
                        <Hospital className="w-6 h-6 text-[#124B8A]" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span
                            className={`px-3 py-1 rounded-md text-xs sm:text-sm font-bold ${
                              hosp.type === 'Government'
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                                : 'bg-blue-100 text-blue-900 border border-blue-300'
                            }`}
                          >
                            {hosp.type === 'Government' ? t.publicHospital : t.privateHospital}
                          </span>
                          <span className="text-xs font-bold text-slate-500">
                            {hosp.district}, {hosp.state}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] leading-snug">
                          {hosp.name}
                        </h3>
                      </div>
                    </div>

                    {/* Audio read button */}
                    <button
                      type="button"
                      onClick={(e) => handleSpeakHospital(hosp, e)}
                      className={`p-2.5 rounded-xl border-2 self-start flex items-center gap-1.5 transition-colors cursor-pointer ${
                        isSpeaking
                          ? 'bg-[#198754] text-white border-[#198754]'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-300'
                      }`}
                      aria-label={`Listen to details of ${hosp.name}`}
                      title="Read hospital details aloud"
                    >
                      {isSpeaking ? (
                        <>
                          <VolumeX className="w-5 h-5 animate-pulse" />
                          <span className="text-xs font-bold">Stop</span>
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-5 h-5" />
                          <span className="text-xs font-bold hidden sm:inline">Listen</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2.5 text-slate-700 text-base sm:text-lg mb-4 pl-1">
                    <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                    <span>{hosp.address}</span>
                  </div>

                  {/* Treatments covered */}
                  <div className="mb-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <span className="text-xs sm:text-sm font-bold text-slate-700 block mb-2">
                      {t.specialtiesCovered}:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {hosp.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-white text-slate-800 text-xs sm:text-sm font-semibold rounded-md border border-slate-300"
                        >
                          ✓ {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dedicated Ayushman Mitra Desk */}
                  <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl mb-4 flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-[#198754]" />
                      <span className="text-xs sm:text-sm font-bold text-emerald-950">
                        {t.pmjayDesk}: <span className="font-normal">{hosp.ayushmanMitraName}</span>
                      </span>
                    </div>

                    <a
                      href={`tel:${hosp.ayushmanMitraContact}`}
                      className="text-xs sm:text-sm font-bold text-[#198754] underline flex items-center gap-1"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{hosp.ayushmanMitraContact}</span>
                    </a>
                  </div>
                </div>

                {/* Bottom Action Buttons (Extra-Large, Accessible) */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${hosp.phone}`}
                    className="flex-1 min-h-[52px] py-3 px-5 bg-[#124B8A] hover:bg-[#0e3b6e] text-white font-bold text-lg rounded-xl shadow-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{t.callHospital}: {hosp.phone}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedHospitalForModal(hosp)}
                    className="px-6 min-h-[52px] py-3 bg-white border-2 border-[#124B8A] text-[#124B8A] hover:bg-[#EEF5FC] font-bold text-lg rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-5 h-5" />
                    <span>{t.getDirections}</span>
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Directions & Transport Modal */}
      {selectedHospitalForModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border-4 border-[#124B8A]">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
              <h3 className="text-2xl font-bold text-[#172B4D]">
                Hospital Directions & Advice
              </h3>
              <button
                onClick={() => setSelectedHospitalForModal(null)}
                className="text-slate-500 hover:text-slate-800 font-bold text-xl px-2 py-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-slate-800">
              <div className="p-4 bg-[#EEF5FC] rounded-xl border border-[#124B8A]/30">
                <span className="font-bold text-lg text-[#124B8A] block">
                  {selectedHospitalForModal.name}
                </span>
                <span className="text-sm text-slate-700 block mt-1">
                  {selectedHospitalForModal.address}
                </span>
              </div>

              <div>
                <span className="font-bold block text-slate-900 mb-1">
                  How to reach (Senior Citizen Tips):
                </span>
                <ul className="list-disc pl-5 space-y-1.5 text-sm sm:text-base text-slate-700">
                  <li>Wheelchair assistance is available free of charge at the main entrance gate.</li>
                  <li>Go directly to the <strong>PM-JAY Ayushman Mitra Desk</strong> on the Ground Floor.</li>
                  <li>Carry your Aadhaar card or Ration card with you.</li>
                  <li>No payment or deposit is required at empanelled hospital counters.</li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    selectedHospitalForModal.name + ' ' + selectedHospitalForModal.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[52px] py-3 bg-[#198754] hover:bg-[#157347] text-white font-bold text-lg rounded-xl flex items-center justify-center gap-2 shadow-sm"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Open in Google Maps / Navigation</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
