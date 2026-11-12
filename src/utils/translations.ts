export type LanguageCode =
  | 'en'
  | 'hi'
  | 'kn'
  | 'ta'
  | 'te'
  | 'ml'
  | 'bn'
  | 'mr'
  | 'gu'
  | 'pa';

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  speechLocale: string;
  greeting: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', speechLocale: 'en-IN', greeting: 'Namaste! Welcome to Ayushman Bharat' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', speechLocale: 'hi-IN', greeting: 'नमस्ते! आयुष्मान भारत में आपका स्वागत है' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', speechLocale: 'kn-IN', greeting: 'ನಮಸ್ಕಾರ! ಆಯುಷ್ಮಾನ್ ಭಾರತ್‌ಗೆ ಸುಸ್ವಾಗತ' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', speechLocale: 'ta-IN', greeting: 'வணக்கம்! ஆயுஷ்மான் பாரத் வரவேற்பு' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', speechLocale: 'te-IN', greeting: 'నమస్కారం! ఆయుష్మాన్ భారత్‌కు స్వాగతం' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', speechLocale: 'ml-IN', greeting: 'നമസ്കാരം! ആയുഷ്മാൻ ഭാരതിലേക്ക് സ്വാഗതം' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', speechLocale: 'bn-IN', greeting: 'নমস্কার! আয়ুষ্মান ভারতে আপনাকে স্বাগতম' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', speechLocale: 'mr-IN', greeting: 'नमस्ते! आयुष्यमान भारत मध्ये आपले स्वागत आहे' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', speechLocale: 'gu-IN', greeting: 'નમસ્તે! આયુષ્માન ભારતમાં આપનું સ્વાગત છે' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', speechLocale: 'pa-IN', greeting: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ' },
];

export interface TranslationDictionary {
  // Header & Brand
  portalTitle: string;
  portalSubtitle: string;
  governmentBadge: string;
  seniorMode: string;
  seniorModeActive: string;
  fontSize: string;
  highContrast: string;
  audioGuide: string;
  audioGuideOn: string;
  audioGuideOff: string;
  home: string;
  back: string;
  help: string;
  helplineNumber: string;

  // Welcome section
  welcomeTitle: string;
  welcomeSubtitle: string;
  seniorWelcomeMsg: string;
  seniorWelcomeListen: string;

  // 5 Main Services
  checkEligibilityTitle: string;
  checkEligibilityDesc: string;
  checkEligibilityAction: string;

  downloadCardTitle: string;
  downloadCardDesc: string;
  downloadCardAction: string;

  findHospitalTitle: string;
  findHospitalDesc: string;
  findHospitalAction: string;

  checkBenefitsTitle: string;
  checkBenefitsDesc: string;
  checkBenefitsAction: string;

  getHelpTitle: string;
  getHelpDesc: string;
  getHelpAction: string;

  // Eligibility Flow
  eligibilityStep1: string;
  eligibilityStep2: string;
  eligibilityStep3: string;
  selectState: string;
  selectIdType: string;
  enterIdNumber: string;
  enterMobileNumber: string;
  verifyWithOtp: string;
  verifyAction: string;
  eligibleSuccessTitle: string;
  eligibleSuccessDesc: string;
  notEligibleTitle: string;
  notEligibleDesc: string;
  beneficiaryName: string;
  familyHead: string;
  annualCoverage: string;
  pmjayId: string;
  demoDisclaimer: string;

  // Hospital Finder
  hospitalFinderTitle: string;
  hospitalFinderDesc: string;
  filterByDistrict: string;
  filterByType: string;
  allTypes: string;
  publicHospital: string;
  privateHospital: string;
  searchHospitalPlaceholder: string;
  callHospital: string;
  getDirections: string;
  specialtiesCovered: string;
  pmjayDesk: string;

  // Card Download Flow
  cardDownloadTitle: string;
  cardDownloadDesc: string;
  stepEnterDetails: string;
  stepVerify: string;
  stepPreview: string;
  stepDownload: string;
  downloadCardBtn: string;
  cardDownloadedNotice: string;

  // Benefits info
  benefitsTitle: string;
  benefitsSubtitle: string;
  coverageAmount: string;
  seniorSpecialNote: string;
  cashlessTreatment: string;
  hospitalStaysIncluded: string;

  // Voice Assistant
  voiceAssistantTitle: string;
  voiceAssistantPrompt: string;
  voiceListening: string;
  voiceSpeakNow: string;
  voiceClickToSpeak: string;
  quickQuestions: string;
  assistantDefaultResponse: string;

  // Senior Step-by-Step Assistant
  guidedAssistantTitle: string;
  guidedAssistantSubtitle: string;
  stepQuestion1: string;
  stepQuestion2: string;
  stepQuestion3: string;
  choiceEligibility: string;
  choiceCard: string;
  choiceHospital: string;
  choiceCallHelp: string;
  yesHaveId: string;
  noNeedHelp: string;
}

export const TRANSLATIONS: Record<LanguageCode, TranslationDictionary> = {
  en: {
    portalTitle: 'Ayushman Bharat PM-JAY',
    portalSubtitle: 'National Health Authority • Government of India',
    governmentBadge: 'Government of India Health Portal',
    seniorMode: 'Senior Citizen Mode',
    seniorModeActive: 'Senior Mode ON',
    fontSize: 'Text Size',
    highContrast: 'High Contrast',
    audioGuide: 'Audio Guide',
    audioGuideOn: 'Audio Voice ON',
    audioGuideOff: 'Audio Voice OFF',
    home: 'Home',
    back: 'Go Back',
    help: 'Need Help? Call 14555',
    helplineNumber: 'Toll-Free 14555',

    welcomeTitle: 'Welcome to Ayushman Bharat',
    welcomeSubtitle: 'Your healthcare benefits, made simple.',
    seniorWelcomeMsg: 'Namaste! We are here to help you access your healthcare benefits. Choose a service below. You can also listen to the instructions.',
    seniorWelcomeListen: 'Click the speaker button anytime to hear instructions spoken aloud.',

    checkEligibilityTitle: '1. Check Your Eligibility',
    checkEligibilityDesc: 'Find out whether your family is eligible for ₹5 Lakh free medical care.',
    checkEligibilityAction: 'Check My Eligibility Now',

    downloadCardTitle: '2. Download Ayushman Card',
    downloadCardDesc: 'Access and download your official Ayushman card easily.',
    downloadCardAction: 'Download My Card',

    findHospitalTitle: '3. Find a Hospital',
    findHospitalDesc: 'Search for nearby empanelled government and private hospitals.',
    findHospitalAction: 'Search Hospitals Near Me',

    checkBenefitsTitle: '4. Check Your Benefits',
    checkBenefitsDesc: 'Understand your ₹5,00,000 annual cashless coverage and free treatments.',
    checkBenefitsAction: 'View Healthcare Benefits',

    getHelpTitle: '5. Get Help & Support',
    getHelpDesc: 'Call 24x7 toll-free 14555 or find your nearest Ayushman Mitra.',
    getHelpAction: 'Get Easy Assistance',

    eligibilityStep1: 'Step 1: Choose Your State',
    eligibilityStep2: 'Step 2: Enter Identity Card Details',
    eligibilityStep3: 'Step 3: Verification & Results',
    selectState: 'Select State',
    selectIdType: 'Select ID Type',
    enterIdNumber: 'Enter Card / Aadhaar Number',
    enterMobileNumber: 'Enter Mobile Number (for verification)',
    verifyWithOtp: 'Enter 6-Digit OTP received on phone',
    verifyAction: 'Check My Eligibility',
    eligibleSuccessTitle: 'Congratulations! You are eligible for Ayushman Bharat',
    eligibleSuccessDesc: 'Your family is covered for up to ₹5,00,000 every year for hospital treatment.',
    notEligibleTitle: 'We could not find your details',
    notEligibleDesc: 'Please check your information or contact support at toll-free 14555. An Ayushman Mitra can assist you in person.',
    beneficiaryName: 'Beneficiary Name',
    familyHead: 'Head of Family',
    annualCoverage: 'Available Annual Cover',
    pmjayId: 'PM-JAY ID',
    demoDisclaimer: 'Simulation demonstration. Does not store personal Aadhaar or biometric data.',

    hospitalFinderTitle: 'Find an Empanelled Hospital',
    hospitalFinderDesc: 'All listed hospitals provide free cashless treatment under PM-JAY.',
    filterByDistrict: 'Filter by District',
    filterByType: 'Hospital Type',
    allTypes: 'All Types (Govt & Private)',
    publicHospital: 'Government Hospital',
    privateHospital: 'Private Empanelled Hospital',
    searchHospitalPlaceholder: 'Search by hospital name or treatment (e.g. Cataract, Heart, Knee)...',
    callHospital: 'Call Hospital',
    getDirections: 'View Map & Directions',
    specialtiesCovered: 'Key Treatments Available',
    pmjayDesk: 'PM-JAY Ayushman Mitra Desk',

    cardDownloadTitle: 'Download Your Ayushman Card',
    cardDownloadDesc: 'Follow 3 simple steps to view and download your official health card.',
    stepEnterDetails: '1. Enter Details',
    stepVerify: '2. Simple Verification',
    stepPreview: '3. Download Card',
    stepDownload: 'Download Official Ayushman Card',
    downloadCardBtn: 'DOWNLOAD AYUSHMAN CARD (PDF)',
    cardDownloadedNotice: 'Your card has been downloaded to your device for easy printing and hospital admission.',

    benefitsTitle: 'Ayushman Bharat Healthcare Benefits',
    benefitsSubtitle: 'Complete financial protection for hospitalization and surgeries.',
    coverageAmount: '₹5,00,000 Annual Free Cover Per Family',
    seniorSpecialNote: 'Special priority for Senior Citizens (aged 60 and above) with dedicated Ayushman Mitra hospital desk support.',
    cashlessTreatment: '100% Cashless & Paperless at all empanelled hospitals across India.',
    hospitalStaysIncluded: 'Covers medicine, doctor consultations, ICU, surgeries, diagnostic tests, and post-hospitalization recovery.',

    voiceAssistantTitle: 'Ayushman Voice Assistant',
    voiceAssistantPrompt: 'Ask any question or tap a suggested topic below:',
    voiceListening: 'Listening to your voice...',
    voiceSpeakNow: 'Please speak now in your chosen language...',
    voiceClickToSpeak: 'Tap to Speak',
    quickQuestions: 'Common Questions for Seniors',
    assistantDefaultResponse: 'I am here to guide you. You can check eligibility, locate a nearby hospital, or download your Ayushman card. How can I help you right now?',

    guidedAssistantTitle: 'Senior Step-by-Step Helper',
    guidedAssistantSubtitle: 'Answer simple questions one at a time. We will do the rest.',
    stepQuestion1: 'What would you like help with today?',
    stepQuestion2: 'Do you have your Aadhaar or Ration card with you?',
    stepQuestion3: 'Would you like to speak to an Ayushman Mitra officer directly?',
    choiceEligibility: 'Check If I Am Eligible',
    choiceCard: 'Download My Card',
    choiceHospital: 'Find Nearby Hospital',
    choiceCallHelp: 'Speak to Helper (14555)',
    yesHaveId: 'Yes, I have my card ready',
    noNeedHelp: 'No, please guide me without it',
  },

  hi: {
    portalTitle: 'आयुष्मान भारत पीएम-जय',
    portalSubtitle: 'राष्ट्रीय स्वास्थ्य प्राधिकरण • भारत सरकार',
    governmentBadge: 'भारत सरकार स्वास्थ्य पोर्टल',
    seniorMode: 'वरिष्ठ नागरिक मोड',
    seniorModeActive: 'वरिष्ठ मोड चालू',
    fontSize: 'अक्षर का आकार',
    highContrast: 'उच्च कंट्रास्ट',
    audioGuide: 'आवाज़ में सुनें',
    audioGuideOn: 'ऑडियो चालू',
    audioGuideOff: 'ऑडियो बंद',
    home: 'होम',
    back: 'पीछे जाएं',
    help: 'मदद चाहिए? 14555 पर कॉल करें',
    helplineNumber: 'टोल-फ्री 14555',

    welcomeTitle: 'आयुष्मान भारत में आपका स्वागत है',
    welcomeSubtitle: 'आपका स्वास्थ्य लाभ, बिल्कुल आसान और सरल।',
    seniorWelcomeMsg: 'नमस्ते! हम आपके स्वास्थ्य लाभ प्राप्त करने में आपकी मदद के लिए हैं। नीचे दी गई सेवा चुनें। आप निर्देशों को सुन भी सकते हैं।',
    seniorWelcomeListen: 'निर्देशों को बोलकर सुनने के लिए कभी भी स्पीकर बटन दबाएं।',

    checkEligibilityTitle: '1. अपनी पात्रता जांचें',
    checkEligibilityDesc: 'पता करें कि क्या आपका परिवार ₹5 लाख के मुफ्त इलाज के लिए पात्र है।',
    checkEligibilityAction: 'मेरी पात्रता अभी जांचें',

    downloadCardTitle: '2. आयुष्मान कार्ड डाउनलोड करें',
    downloadCardDesc: 'अपना आधिकारिक आयुष्मान कार्ड आसानी से देखें और डाउनलोड करें।',
    downloadCardAction: 'मेरा कार्ड डाउनलोड करें',

    findHospitalTitle: '3. अस्पताल खोजें',
    findHospitalDesc: 'अपने नजदीकी सरकारी और निजी मान्यता प्राप्त अस्पताल खोजें।',
    findHospitalAction: 'नजदीकी अस्पताल खोजें',

    checkBenefitsTitle: '4. अपने लाभ समझें',
    checkBenefitsDesc: 'वार्षिक ₹5,00,000 का मुफ्त कैशलेस इलाज और मिलने वाली सुविधाएं जानें।',
    checkBenefitsAction: 'स्वास्थ्य लाभ देखें',

    getHelpTitle: '5. सहायता एवं मदद पाएं',
    getHelpDesc: '24 घंटे मुफ्त 14555 पर फोन करें या नजदीकी आयुष्मान मित्र से मिलें।',
    getHelpAction: 'सरल सहायता प्राप्त करें',

    eligibilityStep1: 'चरण 1: अपना राज्य चुनें',
    eligibilityStep2: 'चरण 2: पहचान पत्र संख्या दर्ज करें',
    eligibilityStep3: 'चरण 3: सत्यापन और परिणाम',
    selectState: 'राज्य चुनें',
    selectIdType: 'पहचान पत्र का प्रकार चुनें',
    enterIdNumber: 'कार्ड / आधार नंबर दर्ज करें',
    enterMobileNumber: 'मोबाइल नंबर दर्ज करें',
    verifyWithOtp: 'फोन पर आया 6 अंकों का ओटीपी दर्ज करें',
    verifyAction: 'मेरी पात्रता जांचें',
    eligibleSuccessTitle: 'बधाई हो! आप आयुष्मान भारत के लिए पात्र हैं',
    eligibleSuccessDesc: 'आपके परिवार को अस्पताल में इलाज के लिए प्रति वर्ष ₹5,00,000 तक का मुफ्त कवर प्राप्त है।',
    notEligibleTitle: 'हमें आपका विवरण नहीं मिला',
    notEligibleDesc: 'कृपया अपनी जानकारी दोबारा जांचें या टोल-फ्री 14555 पर संपर्क करें। एक आयुष्मान मित्र आपकी व्यक्तिगत सहायता कर सकते हैं।',
    beneficiaryName: 'लाभार्थी का नाम',
    familyHead: 'परिवार का मुखिया',
    annualCoverage: 'उपलब्ध वार्षिक बीमा राशि',
    pmjayId: 'पीएम-जय पहचान संख्या',
    demoDisclaimer: 'प्रदर्शन हेतु सिमुलेशन। कोई भी व्यक्तिगत आधार या बायोमेट्रिक डेटा एकत्र नहीं किया जाता है।',

    hospitalFinderTitle: 'मान्यता प्राप्त अस्पताल खोजें',
    hospitalFinderDesc: 'सूचीबद्ध सभी अस्पतालों में पीएम-जय के तहत मुफ्त कैशलेस इलाज मिलता है।',
    filterByDistrict: 'जिले के अनुसार देखें',
    filterByType: 'अस्पताल का प्रकार',
    allTypes: 'सभी प्रकार (सरकारी और निजी)',
    publicHospital: 'सरकारी अस्पताल',
    privateHospital: 'निजी मान्यता प्राप्त अस्पताल',
    searchHospitalPlaceholder: 'अस्पताल का नाम या बीमारी (जैसे मोतियाबिंद, हृदय, घुटना) खोजें...',
    callHospital: 'अस्पताल को फोन करें',
    getDirections: 'नक्शा और रास्ता देखें',
    specialtiesCovered: 'उपलब्ध प्रमुख उपचार',
    pmjayDesk: 'पीएम-जय आयुष्मान मित्र सहायता केंद्र',

    cardDownloadTitle: 'अपना आयुष्मान कार्ड डाउनलोड करें',
    cardDownloadDesc: 'अपना आधिकारिक स्वास्थ्य कार्ड देखने और डाउनलोड करने के 3 आसान चरण।',
    stepEnterDetails: '1. विवरण भरें',
    stepVerify: '2. सरल सत्यापन',
    stepPreview: '3. कार्ड देखें व डाउनलोड करें',
    stepDownload: 'आधिकारिक आयुष्मान कार्ड डाउनलोड करें',
    downloadCardBtn: 'आयुष्मान कार्ड डाउनलोड करें (PDF)',
    cardDownloadedNotice: 'आपका कार्ड आपके फोन/कंप्यूटर पर डाउनलोड हो गया है।',

    benefitsTitle: 'आयुष्मान भारत स्वास्थ्य लाभ',
    benefitsSubtitle: 'अस्पताल में भर्ती और सर्जरी के लिए पूर्ण वित्तीय सुरक्षा।',
    coverageAmount: 'प्रति परिवार प्रति वर्ष ₹5,00,000 का मुफ्त इलाज',
    seniorSpecialNote: 'वरिष्ठ नागरिकों (60 वर्ष और अधिक) के लिए विशेष प्राथमिकता और अस्पताल में आयुष्मान मित्र सहायता।',
    cashlessTreatment: 'पूरे भारत में सभी मान्यता प्राप्त अस्पतालों में 100% कैशलेस और पेपरलेस सुविधा।',
    hospitalStaysIncluded: 'दवाएं, डॉक्टर परामर्श, आईसीयू, सर्जरी और अस्पताल के बाद की देखभाल पूरी तरह मुफ्त।',

    voiceAssistantTitle: 'आयुष्मान आवाज़ सहायक (Voice Assistant)',
    voiceAssistantPrompt: 'कोई भी प्रश्न पूछें या नीचे दिए गए विषय पर टैप करें:',
    voiceListening: 'आपकी आवाज़ सुन रहे हैं...',
    voiceSpeakNow: 'कृपया अब अपनी भाषा में बोलें...',
    voiceClickToSpeak: 'बोलने के लिए दबाएं',
    quickQuestions: 'वरिष्ठ नागरिकों के सामान्य प्रश्न',
    assistantDefaultResponse: 'नमस्ते! मैं आपकी सहायता के लिए तैयार हूँ। आप पात्रता जांच सकते हैं, अस्पताल खोज सकते हैं, या कार्ड डाउनलोड कर सकते हैं।',

    guidedAssistantTitle: 'वरिष्ठ नागरिक चरण-दर-चरण सहायक',
    guidedAssistantSubtitle: 'एक बार में केवल एक सरल प्रश्न का उत्तर दें।',
    stepQuestion1: 'आज आप किस काम में मदद चाहते हैं?',
    stepQuestion2: 'क्या आपके पास आपका आधार या राशन कार्ड है?',
    stepQuestion3: 'क्या आप सीधे आयुष्मान मित्र अधिकारी से बात करना चाहते हैं?',
    choiceEligibility: 'पात्रता जांचें',
    choiceCard: 'कार्ड डाउनलोड करें',
    choiceHospital: 'अस्पताल खोजें',
    choiceCallHelp: 'सहायक से बात करें (14555)',
    yesHaveId: 'हाँ, मेरे पास कार्ड है',
    noNeedHelp: 'नहीं, बिना कार्ड के मार्गदर्शन दें',
  },

  kn: {
    portalTitle: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಪಿಎಂ-ಜೆಎವೈ',
    portalSubtitle: 'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಪ್ರಾಧಿಕಾರ • ಭಾರತ ಸರ್ಕಾರ',
    governmentBadge: 'ಭಾರತ ಸರ್ಕಾರದ ಆರೋಗ್ಯ ತಾಣ',
    seniorMode: 'ಹಿರಿಯ ನಾಗರಿಕರ ಮೋಡ್',
    seniorModeActive: 'ಹಿರಿಯ ಮೋಡ್ ಸಕ್ರಿಯವಾಗಿದೆ',
    fontSize: 'ಅಕ್ಷರದ ಗಾತ್ರ',
    highContrast: 'ಹೆಚ್ಚು ಕಾಂಟ್ರಾಸ್ಟ್',
    audioGuide: 'ಧ್ವನಿ ಮಾರ್ಗದರ್ಶಿ',
    audioGuideOn: 'ಧ್ವನಿ ಆನ್',
    audioGuideOff: 'ಧ್ವನಿ ಆಫ್',
    home: 'ಮುಖಪುಟ',
    back: 'ಹಿಂದಕ್ಕೆ ಹೋಗಿ',
    help: 'ಸಹಾಯ ಬೇಕೇ? 14555 ಗೆ ಕರೆ ಮಾಡಿ',
    helplineNumber: 'ಉಚಿತ ಕರೆ 14555',

    welcomeTitle: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್‌ಗೆ ಸುಸ್ವಾಗತ',
    welcomeSubtitle: 'ನಿಮ್ಮ ಆರೋಗ್ಯ ಸೌಲಭ್ಯಗಳು, ಅತ್ಯಂತ ಸರಳ ರೂಪದಲ್ಲಿ.',
    seniorWelcomeMsg: 'ನಮಸ್ಕಾರ! ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರಯೋಜನಗಳನ್ನು ಸುಲಭವಾಗಿ ಪಡೆಯಲು ನಾವು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ. ಕೆಳಗಿನ ಸೇವೆಯನ್ನು ಆರಿಸಿ. ನೀವು ಸೂಚನೆಗಳನ್ನು ಧ್ವನಿಯಲ್ಲೂ ಕೇಳಬಹುದು.',
    seniorWelcomeListen: 'ಸೂಚನೆಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ಕೇಳಲು ಧ್ವನಿವರ್ಧಕ ಗುಂಡಿಯನ್ನು ಒತ್ತಿರಿ.',

    checkEligibilityTitle: '1. ನಿಮ್ಮ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ',
    checkEligibilityDesc: 'ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ₹5 ಲಕ್ಷದ ಉಚಿತ ಚಿಕಿತ್ಸೆ ಲಭ್ಯವಿದೆಯೇ ಎಂದು ತಿಳಿಯಿರಿ.',
    checkEligibilityAction: 'ನನ್ನ ಅರ್ಹತೆ ಈಗಲೇ ಪರಿಶೀಲಿಸಿ',

    downloadCardTitle: '2. ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    downloadCardDesc: 'ನಿಮ್ಮ ಅಧಿಕೃತ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಅನ್ನು ಸುಲಭವಾಗಿ ಪಡೆದುಕೊಳ್ಳಿ.',
    downloadCardAction: 'ನನ್ನ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',

    findHospitalTitle: '3. ಆಸ್ಪತ್ರೆಯನ್ನು ಹುಡುಕಿ',
    findHospitalDesc: 'ನಿಮ್ಮ ಹತ್ತಿರದ ನೋಂದಾಯಿತ ಸರ್ಕಾರಿ ಮತ್ತು ಖಾಸಗಿ ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಿ.',
    findHospitalAction: 'ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಿ',

    checkBenefitsTitle: '4. ನಿಮ್ಮ ಸೌಲಭ್ಯಗಳನ್ನು ತಿಳಿಯಿರಿ',
    checkBenefitsDesc: 'ವರ್ಷಕ್ಕೆ ₹5,00,000 ವರೆಗಿನ ಉಚಿತ ನಗದುರಹಿತ ಚಿಕಿತ್ಸೆಯ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.',
    checkBenefitsAction: 'ಆರೋಗ್ಯ ಸೌಲಭ್ಯಗಳನ್ನು ನೋಡಿ',

    getHelpTitle: '5. ಸಹಾಯ ಮತ್ತು ಬೆಂಬಲ ಪಡೆಯಿರಿ',
    getHelpDesc: '24 ಗಂಟೆಗಳ ಉಚಿತ ಸಹಾಯವಾಣಿ 14555 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ ಆಯುಷ್ಮಾನ್ ಮಿತ್ರರನ್ನು ಭೇಟಿ ಮಾಡಿ.',
    getHelpAction: 'ಸುಲಭ ಸಹಾಯ ಪಡೆಯಿರಿ',

    eligibilityStep1: 'ಹಂತ 1: ನಿಮ್ಮ ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    eligibilityStep2: 'ಹಂತ 2: ಗುರುತಿನ ಚೀಟಿ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
    eligibilityStep3: 'ಹಂತ 3: ಪರಿಶೀಲನೆ ಮತ್ತು ಫಲಿತಾಂಶ',
    selectState: 'ರಾಜ್ಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
    selectIdType: 'ಗುರುತಿನ ಚೀಟಿಯ ವಿಧ',
    enterIdNumber: 'ಕಾರ್ಡ್ / ಆಧಾರ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    enterMobileNumber: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ನಮೂದಿಸಿ',
    verifyWithOtp: 'ಫೋನ್‌ಗೆ ಬಂದ 6 ಅಂಕಿಯ ಒಟಿಪಿ ನಮೂದಿಸಿ',
    verifyAction: 'ನನ್ನ ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ',
    eligibleSuccessTitle: 'ಅಭಿನಂದನೆಗಳು! ನೀವು ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಯೋಜನೆಗೆ ಅರ್ಹರಾಗಿದ್ದೀರಿ',
    eligibleSuccessDesc: 'ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಆಸ್ಪತ್ರೆ ಚಿಕಿತ್ಸೆಗಾಗಿ ಪ್ರತಿ ವರ್ಷ ₹5,00,000 ವರೆಗೆ ಉಚಿತ ವಿಮೆ ಲಭ್ಯವಿದೆ.',
    notEligibleTitle: 'ನಿಮ್ಮ ವಿವರಗಳು ಕಂಡುಬಂದಿಲ್ಲ',
    notEligibleDesc: 'ದಯವಿಟ್ಟು ಮಾಹಿತಿಯನ್ನು ಮರುಪರಿಶೀಲಿಸಿ ಅಥವಾ 14555 ಗೆ ಕರೆ ಮಾಡಿ. ಆಯುಷ್ಮಾನ್ ಮಿತ್ರರು ಖುದ್ದಾಗಿ ನೆರವಾಗುತ್ತಾರೆ.',
    beneficiaryName: 'ಫಲಾನುಭವಿಯ ಹೆಸರು',
    familyHead: 'ಕುಟುಂಬದ ಮುಖ್ಯಸ್ಥರು',
    annualCoverage: 'ಲಭ್ಯವಿರುವ ವಾರ್ಷಿಕ ರಕ್ಷಣೆ',
    pmjayId: 'ಪಿಎಂ-ಜೆಎವೈ ಗುರುತು ಸಂಖ್ಯೆ',
    demoDisclaimer: 'ಮಾದರಿ ಪ್ರಾತ್ಯಕ್ಷಿಕೆ. ಯಾವುದೇ ಖಾಸಗಿ ಆಧಾರ್ ಅಥವಾ ಬಯೋಮೆಟ್ರಿಕ್ ಡೇಟಾವನ್ನು ಸಂಗ್ರಹಿಸುವುದಿಲ್ಲ.',

    hospitalFinderTitle: 'ನೋಂದಾಯಿತ ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಿ',
    hospitalFinderDesc: 'ಇಲ್ಲಿ ಪಟ್ಟಿ ಮಾಡಲಾದ ಎಲ್ಲಾ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ ಪಿಎಂ-ಜೆಎವೈ ಅಡಿಯಲ್ಲಿ ಉಚಿತ ನಗದುರಹಿತ ಚಿಕಿತ್ಸೆ ಲಭ್ಯ.',
    filterByDistrict: 'ಜಿಲ್ಲೆಯ ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ',
    filterByType: 'ಆಸ್ಪತ್ರೆಯ ವಿಧ',
    allTypes: 'ಎಲ್ಲಾ ಆಸ್ಪತ್ರೆಗಳು (ಸರ್ಕಾರಿ ಮತ್ತು ಖಾಸಗಿ)',
    publicHospital: 'ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ',
    privateHospital: 'ಖಾಸಗಿ ನೋಂದಾಯಿತ ಆಸ್ಪತ್ರೆ',
    searchHospitalPlaceholder: 'ಆಸ್ಪತ್ರೆಯ ಹೆಸರು ಅಥವಾ ಚಿಕಿತ್ಸೆ (ಉದಾ. ಕಣ್ಣಿನ ಪೊರೆ, ಹೃದಯ, ಮೊಣಕಾಲು) ಹುಡುಕಿ...',
    callHospital: 'ಆಸ್ಪತ್ರೆಗೆ ಕರೆ ಮಾಡಿ',
    getDirections: 'ನಕ್ಷೆ ಮತ್ತು ದಾರಿ ನೋಡಿ',
    specialtiesCovered: 'ಲಭ್ಯವಿರುವ ಮುಖ್ಯ ಚಿಕಿತ್ಸೆಗಳು',
    pmjayDesk: 'ಪಿಎಂ-ಜೆಎವೈ ಆಯುಷ್ಮಾನ್ ಮಿತ್ರ ಸಹಾಯ ಕೇಂದ್ರ',

    cardDownloadTitle: 'ನಿಮ್ಮ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    cardDownloadDesc: 'ನಿಮ್ಮ ಅಧಿಕೃತ ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಪಡೆಯಲು 3 ಸರಳ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ.',
    stepEnterDetails: '1. ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
    stepVerify: '2. ಸರಳ ಪರಿಶೀಲನೆ',
    stepPreview: '3. ಕಾರ್ಡ್ ಪರಿಶೀಲಿಸಿ',
    stepDownload: 'ಅಧಿಕೃತ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    downloadCardBtn: 'ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ (PDF)',
    cardDownloadedNotice: 'ನಿಮ್ಮ ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಆಗಿದೆ. ಆಸ್ಪತ್ರೆಗೆ ಹೋಗುವಾಗ ಇದನ್ನು ಮುದ್ರಿಸಿ ತೋರಿಸಬಹುದು.',

    benefitsTitle: 'ಆಯುಷ್ಮಾನ್ ಭಾರತ್ ಆರೋಗ್ಯ ಸೌಲಭ್ಯಗಳು',
    benefitsSubtitle: 'ಆಸ್ಪತ್ರೆ ದಾಖಲಾತಿ ಮತ್ತು ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗೆ ಸಂಪೂರ್ಣ ಆರ್ಥಿಕ ರಕ್ಷಣೆ.',
    coverageAmount: 'ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ ಪ್ರತಿ ವರ್ಷ ₹5,00,000 ಉಚಿತ ವಿಮೆ',
    seniorSpecialNote: 'ಹಿರಿಯ ನಾಗರಿಕರಿಗೆ (60 ವರ್ಷ ಮೇಲ್ಪಟ್ಟವರಿಗೆ) ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ಆಯುಷ್ಮಾನ್ ಮಿತ್ರ ವಿಶೇಷ ಆದ್ಯತೆ ಮತ್ತು ನೆರವು.',
    cashlessTreatment: 'ದೇಶಾದ್ಯಂತ ಎಲ್ಲಾ ನೋಂದಾಯಿತ ಆಸ್ಪತ್ರೆಗಳಲ್ಲಿ 100% ನಗದುರಹಿತ ಮತ್ತು ಕಾಗದರಹಿತ ಸೌಲಭ್ಯ.',
    hospitalStaysIncluded: 'ಔಷಧಿಗಳು, ವೈದ್ಯರ ಸಮಾಲೋಚನೆ, ಐಸಿಯು, ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮತ್ತು ನಂತರದ ಆರೈಕೆ ಸಂಪೂರ್ಣ ಉಚಿತ.',

    voiceAssistantTitle: 'ಆಯುಷ್ಮಾನ್ ಧ್ವನಿ ಸಹಾಯಕ (Voice Assistant)',
    voiceAssistantPrompt: 'ಯಾವುದೇ ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ ಅಥವಾ ಕೆಳಗಿನ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ:',
    voiceListening: 'ನಿಮ್ಮ ಧ್ವನಿಯನ್ನು ಆಲಿಸಲಾಗುತ್ತಿದೆ...',
    voiceSpeakNow: 'ದಯವಿಟ್ಟು ಈಗ ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಿ...',
    voiceClickToSpeak: 'ಮಾತನಾಡಲು ಒತ್ತಿರಿ',
    quickQuestions: 'ಹಿರಿಯರ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು',
    assistantDefaultResponse: 'ನಿಮ್ಮ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಪಡೆಯಲು, ಮೊದಲು ನಿಮ್ಮ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ. ನಾವು ನಿಮಗೆ ಹಂತ ಹಂತವಾಗಿ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',

    guidedAssistantTitle: 'ಹಿರಿಯ ನಾಗರಿಕರ ಸರಳ ಮಾರ್ಗದರ್ಶಿ',
    guidedAssistantSubtitle: 'ಒಂದು ಬಾರಿಗೆ ಕೇವಲ ಒಂದು ಪ್ರಶ್ನೆಗೆ ಉತ್ತರಿಸಿ. ಉಳಿದದ್ದನ್ನು ನಾವು ಮಾಡುತ್ತೇವೆ.',
    stepQuestion1: 'ಇಂದು ನೀವು ಯಾವ ಸಹಾಯ ಪಡೆಯಲು ಬಯಸುತ್ತೀರಿ?',
    stepQuestion2: 'ನಿಮ್ಮ ಬಳಿ ಆಧಾರ್ ಅಥವಾ ರೇಷನ್ ಕಾರ್ಡ್ ಇದೆಯೇ?',
    stepQuestion3: 'ನೀವು ನೇರವಾಗಿ ಆಯುಷ್ಮಾನ್ ಮಿತ್ರ ಅಧಿಕಾರಿಯೊಂದಿಗೆ ಮಾತನಾಡಲು ಬಯಸುವಿರಾ?',
    choiceEligibility: 'ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ',
    choiceCard: 'ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ',
    choiceHospital: 'ಆಸ್ಪತ್ರೆ ಹುಡುಕಿ',
    choiceCallHelp: 'ಸಹಾಯಕರ ಜೊತೆ ಮಾತನಾಡಿ (14555)',
    yesHaveId: 'ಹೌದು, ನನ್ನ ಬಳಿ ಕಾರ್ಡ್ ಇದೆ',
    noNeedHelp: 'ಇಲ್ಲ, ಕಾರ್ಡ್ ಇಲ್ಲದೆ ಮಾರ್ಗದರ್ಶನ ನೀಡಿ',
  },

  ta: {
    portalTitle: 'ஆயுஷ்மான் பாரத் பிஎம்-ஜேஏஒய்',
    portalSubtitle: 'தேசிய சுகாதார ஆணையம் • இந்திய அரசு',
    governmentBadge: 'இந்திய அரசு சுகாதார தளம்',
    seniorMode: 'முதியோர் முறை (Senior Mode)',
    seniorModeActive: 'முதியோர் முறை இயக்கத்தில் உள்ளது',
    fontSize: 'எழுத்து அளவு',
    highContrast: 'அதிக மாறுபாடு (High Contrast)',
    audioGuide: 'குரல் வழிகாட்டி',
    audioGuideOn: 'ஆடியோ ஆன்',
    audioGuideOff: 'ஆடியோ ஆஃப்',
    home: 'முகப்பு',
    back: 'பின்னே செல்லவும்',
    help: 'உதவி வேண்டுமா? 14555 அழைக்கவும்',
    helplineNumber: 'இலவச அழைப்பு 14555',

    welcomeTitle: 'ஆயுஷ்மான் பாரத் வரவேற்கிறது',
    welcomeSubtitle: 'உங்கள் மருத்துவ நன்மைகள், மிகவும் எளிமையாக.',
    seniorWelcomeMsg: 'வணக்கம்! உங்கள் சுகாதார நன்மைகளைப் பெற உங்களுக்கு உதவ நாங்கள் இருக்கிறோம். கீழே உள்ள சேவையைத் தேர்வு செய்யவும். வழிமுறைகளைக் கேட்கலாம்.',
    seniorWelcomeListen: 'வழிமுறைகளைக் குரலில் கேட்க ஸ்பீக்கர் பொத்தானை அழுத்தவும்.',

    checkEligibilityTitle: '1. உங்கள் தகுதியைச் சரிபார்க்கவும்',
    checkEligibilityDesc: 'உங்கள் குடும்பத்திற்கு ₹5 லட்சம் இலவச சிகிச்சை உள்ளதா என அறியவும்.',
    checkEligibilityAction: 'எனது தகுதியை இப்போது சரிபார்க்கவும்',

    downloadCardTitle: '2. ஆயுஷ்மான் அட்டை பதிவிறக்கம்',
    downloadCardDesc: 'உங்கள் அதிகாரப்பூர்வ ஆயுஷ்மான் அட்டையை எளிதாகப் பெறுங்கள்.',
    downloadCardAction: 'என் அட்டையைப் பதிவிறக்குக',

    findHospitalTitle: '3. மருத்துவமனையைத் தேடுங்கள்',
    findHospitalDesc: 'அருகிலுள்ள அரசு மற்றும் தனியார் மருத்துவமனைகளைக் கண்டறியவும்.',
    findHospitalAction: 'அருகிலுள்ள மருத்துவமனையைத் தேடுங்கள்',

    checkBenefitsTitle: '4. உங்கள் நன்மைகளை அறியவும்',
    checkBenefitsDesc: 'வருடத்திற்கு ₹5,00,000 இலவச பணமில்லா சிகிச்சை பற்றி அறியவும்.',
    checkBenefitsAction: 'சுகாதார நன்மைகளைப் பார்க்கவும்',

    getHelpTitle: '5. உதவி மற்றும் ஆதரவு பெறவும்',
    getHelpDesc: '24 மணி நேர இலவச உதவி எண் 14555 அழைக்கவும் அல்லது ஆயுஷ்மான் மித்ராவைச் சந்திக்கவும்.',
    getHelpAction: 'எளிதான உதவி பெறவும்',

    eligibilityStep1: 'படி 1: உங்கள் மாநிலத்தைத் தேர்ந்தெடுக்கவும்',
    eligibilityStep2: 'படி 2: அடையாள அட்டை விவரங்களை உள்ளிடவும்',
    eligibilityStep3: 'படி 3: சரிபார்ப்பு மற்றும் முடிவுகள்',
    selectState: 'மாநிலத்தைத் தேர்ந்தெடுக்கவும்',
    selectIdType: 'அடையாள அட்டை வகை',
    enterIdNumber: 'அட்டை / ஆதார் எண் உள்ளிடவும்',
    enterMobileNumber: 'மொபைல் எண் உள்ளிடவும்',
    verifyWithOtp: 'போனுக்கு வந்த 6 இலக்க OTP ஐ உள்ளிடவும்',
    verifyAction: 'தகுதியைச் சரிபார்க்கவும்',
    eligibleSuccessTitle: 'வாழ்த்துகள்! நீங்கள் ஆயுஷ்மான் பாரத் திட்டத்திற்கு தகுதியானவர்',
    eligibleSuccessDesc: 'மருத்துவமனை சிகிச்சைக்கு உங்கள் குடும்பத்திற்கு ஆண்டுக்கு ₹5,00,000 வரை இலவச காப்பீடு உண்டு.',
    notEligibleTitle: 'உங்கள் விவரங்கள் கிடைக்கவில்லை',
    notEligibleDesc: 'தயவுசெய்து தகவலைச் சரிபார்க்கவும் அல்லது 14555 என்ற எண்ணை அழைக்கவும். ஆயுஷ்மான் மித்ரா நேரில் உதவுவார்.',
    beneficiaryName: 'பயனாளி பெயர்',
    familyHead: 'குடும்பத் தலைவர்',
    annualCoverage: 'கிடைக்கும் வருடாந்திர காப்பீடு',
    pmjayId: 'பிஎம்-ஜேஏஒய் எண்',
    demoDisclaimer: 'மாதிரி செயல்விளக்கம். தனிப்பட்ட ஆதார் அல்லது பயோமெட்ரிக் தரவு சேமிக்கப்படாது.',

    hospitalFinderTitle: 'அங்கீகரிக்கப்பட்ட மருத்துவமனைகள்',
    hospitalFinderDesc: 'பட்டியலிடப்பட்டுள்ள அனைத்து மருத்துவமனைகளிலும் இலவச பணமில்லா சிகிச்சை கிடைக்கும்.',
    filterByDistrict: 'மாவட்டம் வாரியாகத் தேடுங்கள்',
    filterByType: 'மருத்துவமனை வகை',
    allTypes: 'அனைத்து மருத்துவமனைகளும் (அரசு மற்றும் தனியார்)',
    publicHospital: 'அரசு மருத்துவமனை',
    privateHospital: 'தனியார் அங்கீகரிக்கப்பட்ட மருத்துவமனை',
    searchHospitalPlaceholder: 'மருத்துவமனை பெயர் அல்லது சிகிச்சை (கண்புரை, இதயம், முழங்கால்) தேடுங்கள்...',
    callHospital: 'மருத்துவமனைக்கு அழைக்கவும்',
    getDirections: 'வரைபடம் மற்றும் வழி பார்க்கவும்',
    specialtiesCovered: 'கிடைக்கும் முக்கிய சிகிச்சைகள்',
    pmjayDesk: 'ஆயுஷ்மான் மித்ரா உதவி மையம்',

    cardDownloadTitle: 'ஆயுஷ்மான் அட்டையைப் பதிவிறக்குக',
    cardDownloadDesc: 'உங்கள் அட்டையைப் பெற 3 எளிய படிகளைப் பின்பற்றவும்.',
    stepEnterDetails: '1. விவரங்களை உள்ளிடவும்',
    stepVerify: '2. எளிய சரிபார்ப்பு',
    stepPreview: '3. அட்டை சரிபார்த்தல்',
    stepDownload: 'அதிகாரப்பூர்வ அட்டை பதிவிறக்கம்',
    downloadCardBtn: 'ஆயுஷ்மான் அட்டையைப் பதிவிறக்குக (PDF)',
    cardDownloadedNotice: 'உங்கள் அட்டை பதிவிறக்கம் செய்யப்பட்டது.',

    benefitsTitle: 'ஆயுஷ்மான் பாரத் சுகாதார நன்மைகள்',
    benefitsSubtitle: 'மருத்துவமனை அனுமதி மற்றும் அறுவை சிகிச்சைக்கு முழு நிதிப் பாதுகாப்பு.',
    coverageAmount: 'குடும்பத்திற்கு ஆண்டுக்கு ₹5,00,000 இலவச சிகிச்சை',
    seniorSpecialNote: 'மூத்த குடிமக்களுக்கு (60 வயதுக்கு மேற்பட்டவர்கள்) சிறப்பு முன்னுரிமை மற்றும் உதவி மையம்.',
    cashlessTreatment: 'இந்தியா முழுவதும் உள்ள அனைத்து அங்கீகரிக்கப்பட்ட மருத்துவமனைகளிலும் 100% பணமில்லா சிகிச்சை.',
    hospitalStaysIncluded: 'மருந்துகள், மருத்துவர் ஆலோசனை, ஐசியு, அறுவை சிகிச்சை இலவசம்.',

    voiceAssistantTitle: 'ஆயுஷ்மான் குரல் உதவியாளர்',
    voiceAssistantPrompt: 'ஏதேனும் கேள்வி கேட்கவும் அல்லது தலைப்பைத் தொடவும்:',
    voiceListening: 'உங்கள் குரலைக் கேட்கிறது...',
    voiceSpeakNow: 'தயவுசெய்து இப்போது தமிழில் பேசுங்கள்...',
    voiceClickToSpeak: 'பேச அழுத்தவும்',
    quickQuestions: 'முதியோரின் பொதுவான கேள்விகள்',
    assistantDefaultResponse: 'வணக்கம்! நான் உங்களுக்கு உதவ தயாராக உள்ளேன். தகுதியை சரிபார்க்கலாம், மருத்துவமனை தேடலாம், அல்லது அட்டை பதிவிறக்கலாம்.',

    guidedAssistantTitle: 'முதியோர் படி-படி வழிகாட்டி',
    guidedAssistantSubtitle: 'ஒரு நேரத்தில் ஒரு எளிய கேள்விக்கு மட்டும் பதிலளிக்கவும்.',
    stepQuestion1: 'இன்று உங்களுக்கு என்ன உதவி தேவை?',
    stepQuestion2: 'உங்களிடம் ஆதார் அல்லது ரேஷன் அட்டை உள்ளதா?',
    stepQuestion3: 'ஆயுஷ்மான் மித்ரா அதிகாரியிடம் நேரடியாகப் பேச விரும்புகிறீர்களா?',
    choiceEligibility: 'தகுதியைச் சரிபார்க்கவும்',
    choiceCard: 'அட்டையைப் பதிவிறக்குக',
    choiceHospital: 'மருத்துவமனை தேடவும்',
    choiceCallHelp: 'உதவியாளரிடம் பேசவும் (14555)',
    yesHaveId: 'ஆம், என்னிடம் அட்டை உள்ளது',
    noNeedHelp: 'இல்லை, அட்டை இல்லாமல் வழிகாட்டவும்',
  },

  te: {
    portalTitle: 'ఆయుష్మాన్ భారత్ పిఎమ్-జెఎవై',
    portalSubtitle: 'నేషనల్ హెల్త్ అథారిటీ • భారత ప్రభుత్వం',
    governmentBadge: 'భారత ప్రభుత్వ ఆరోగ్య పోర్టల్',
    seniorMode: 'సీనియర్ సిటిజన్ మోడ్',
    seniorModeActive: 'సీనియర్ మోడ్ ఆన్ చేయబడింది',
    fontSize: 'అక్షర పరిమాణం',
    highContrast: 'హై కాంట్రాస్ట్',
    audioGuide: 'వాయిస్ గైడ్',
    audioGuideOn: 'ఆడియో ఆన్',
    audioGuideOff: 'ఆడియో ఆఫ్',
    home: 'హోమ్',
    back: 'వెనక్కి వెళ్ళండి',
    help: 'సహాయం కావాలా? 14555 కి కాల్ చేయండి',
    helplineNumber: 'టోల్-ఫ్రీ 14555',

    welcomeTitle: 'ఆయుష్మాన్ భారత్‌కు స్వాగతం',
    welcomeSubtitle: 'మీ ఆరోగ్య ప్రయోజనాలు, ఎంతో సరళంగా.',
    seniorWelcomeMsg: 'నమస్కారం! మీ ఆరోగ్య ప్రయోజనాలను పొందడంలో సహాయం చేయడానికి మేము ఇక్కడ ఉన్నాము. క్రింది సేవను ఎంచుకోండి. మీరు సూచనలను వినవచ్చు.',
    seniorWelcomeListen: 'సూచనలను వినడానికి స్పీకర్ బటన్‌పై నొక్కండి.',

    checkEligibilityTitle: '1. మీ అర్హతను తనిఖీ చేయండి',
    checkEligibilityDesc: 'మీ కుటుంబానికి ₹5 లక్షల ఉచిత చికిత్స లభిస్తుందో లేదో తెలుసుకోండి.',
    checkEligibilityAction: 'నా అర్హతను ఇప్పుడే తనిఖీ చేయండి',

    downloadCardTitle: '2. ఆయుష్మాన్ కార్డు డౌన్‌లోడ్ చేయండి',
    downloadCardDesc: 'మీ అధికారిక ఆయుష్మాన్ కార్డును సులభంగా పొందండి.',
    downloadCardAction: 'నా కార్డు డౌన్‌లోడ్ చేయండి',

    findHospitalTitle: '3. ఆసుపత్రిని కనుగొనండి',
    findHospitalDesc: 'మీ సమీపంలోని ప్రభుత్వ మరియు ప్రైవేట్ ఆసుపత్రులను కనుగొనండి.',
    findHospitalAction: 'సమీప ఆసుపత్రుల కోసం శోధించండి',

    checkBenefitsTitle: '4. మీ ప్రయోజనాలను తెలుసుకోండి',
    checkBenefitsDesc: 'సంవత్సరానికి ₹5,00,000 ఉచిత నగదు రహిత చికిత్స గురించి తెలుసుకోండి.',
    checkBenefitsAction: 'ఆరోగ్య ప్రయోజనాలను చూడండి',

    getHelpTitle: '5. సహాయం మరియు మద్దతు పొందండి',
    getHelpDesc: '24 గంటల ఉచిత హెల్ప్‌లైన్ 14555 కి కాల్ చేయండి లేదా ఆయుష్మాన్ మిత్రను కలవండి.',
    getHelpAction: 'సులభమైన సహాయం పొందండి',

    eligibilityStep1: 'దశ 1: మీ రాష్ట్రాన్ని ఎంచుకోండి',
    eligibilityStep2: 'దశ 2: గుర్తింపు కార్డు వివరాలను నమోదు చేయండి',
    eligibilityStep3: 'దశ 3: ధృవీకరణ మరియు ఫలితాలు',
    selectState: 'రాష్ట్రాన్ని ఎంచుకోండి',
    selectIdType: 'గుర్తింపు కార్డు రకం',
    enterIdNumber: 'కార్డు / ఆధార్ నంబర్ నమోదు చేయండి',
    enterMobileNumber: 'మొబైల్ నంబర్ నమోదు చేయండి',
    verifyWithOtp: 'ఫోన్‌కు వచ్చిన 6 అంకెల OTP నమోదు చేయండి',
    verifyAction: 'నా అర్హతను తనిఖీ చేయండి',
    eligibleSuccessTitle: 'అభినందనలు! మీరు ఆయుష్మాన్ భారత్ పథకానికి అర్హులు',
    eligibleSuccessDesc: 'మీ కుటుంబానికి ఆసుపత్రి చికిత్స కోసం సంవత్సరానికి ₹5,00,000 వరకు ఉచిత కవరేజ్ అందుబాటులో ఉంది.',
    notEligibleTitle: 'మీ వివరాలు కనుగొనబడలేదు',
    notEligibleDesc: 'దయచేసి సమాచారాన్ని సరిచూడండి లేదా 14555 కి కాల్ చేయండి. ఆయుష్మాన్ మిత్ర సహాయం చేస్తారు.',
    beneficiaryName: 'లబ్ధిదారుని పేరు',
    familyHead: 'కుటుంబ పెద్ద',
    annualCoverage: 'వార్షిక కవరేజ్',
    pmjayId: 'పిఎమ్-జెఎవై సంఖ్య',
    demoDisclaimer: 'నమూనా ప్రదర్శన. వ్యక్తిగత ఆధార్ లేదా బయోమెట్రిక్ డేటా నిల్వ చేయబడదు.',

    hospitalFinderTitle: 'గుర్తింపు పొందిన ఆసుపత్రులను కనుగొనండి',
    hospitalFinderDesc: 'జాబితా చేయబడిన అన్ని ఆసుపత్రులలో ఉచిత నగదు రహిత చికిత్స లభిస్తుంది.',
    filterByDistrict: 'జిల్లా ద్వారా ఫిల్టర్ చేయండి',
    filterByType: 'ఆసుపత్రి రకం',
    allTypes: 'అన్ని రకాలు (ప్రభుత్వ & ప్రైవేట్)',
    publicHospital: 'ప్రభుత్వ ఆసుపత్రి',
    privateHospital: 'ప్రైవేట్ గుర్తింపు పొందిన ఆసుపత్రి',
    searchHospitalPlaceholder: 'ఆసుపత్రి పేరు లేదా చికిత్స (కంటిశుక్లం, గుండె, మోకాలు) శోధించండి...',
    callHospital: 'ఆసుపత్రికి కాల్ చేయండి',
    getDirections: 'మ్యాప్ మరియు దిశలను చూడండి',
    specialtiesCovered: 'అందుబాటులో ఉన్న చికిత్సలు',
    pmjayDesk: 'ఆయుష్మాన్ మిత్ర సహాయ కేంద్రం',

    cardDownloadTitle: 'ఆయుష్మాన్ కార్డును డౌన్‌లోడ్ చేయండి',
    cardDownloadDesc: 'కార్డు పొందడానికి 3 సాధారణ దశలను అనుసరించండి.',
    stepEnterDetails: '1. వివరాలను నమోదు చేయండి',
    stepVerify: '2. సరళమైన ధృవీకరణ',
    stepPreview: '3. కార్డు ప్రివ్యూ',
    stepDownload: 'అధికారిక కార్డు డౌన్‌లోడ్ చేయండి',
    downloadCardBtn: 'ఆయుష్మాన్ కార్డు డౌన్‌లోడ్ చేయండి (PDF)',
    cardDownloadedNotice: 'మీ కార్డు డౌన్‌లోడ్ చేయబడింది.',

    benefitsTitle: 'ఆయుష్మాన్ భారత్ ఆరోగ్య ప్రయోజనాలు',
    benefitsSubtitle: 'ఆసుపత్రి చేరిక మరియు శస్త్రచికిత్సలకు పూర్తి ఆర్థిక రక్షణ.',
    coverageAmount: 'కుటుంబానికి సంవత్సరానికి ₹5,00,000 ఉచిత చికిత్స',
    seniorSpecialNote: 'సీనియర్ సిటిజన్లకు ప్రత్యేక ప్రాధాన్యత మరియు ఆసుపత్రిలో ఆయుష్మాన్ మిత్ర సహాయం.',
    cashlessTreatment: 'భారతదేశం అంతటా 100% నగదు రహిత మరియు కాగిత రహిత చికిత్స.',
    hospitalStaysIncluded: 'మందులు, వైద్యుల సంప్రదింపులు, ఐసియు, శస్త్రచికిత్సలు పూర్తిగా ఉచితం.',

    voiceAssistantTitle: 'ఆయుష్మాన్ వాయిస్ అసిస్టెంట్',
    voiceAssistantPrompt: 'ఏదైనా ప్రశ్న అడగండి లేదా అంశాన్ని ఎంచుకోండి:',
    voiceListening: 'మీ స్వరం వినబడుతోంది...',
    voiceSpeakNow: 'దయచేసి ఇప్పుడు తెలుగులో మాట్లాడండి...',
    voiceClickToSpeak: 'మాట్లాడటానికి నొక్కండి',
    quickQuestions: 'సీనియర్ల సాధారణ ప్రశ్నలు',
    assistantDefaultResponse: 'నమస్కారం! నేను మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నాను. అర్హత తనిఖీ చేయండి లేదా ఆసుపత్రులను కనుగొనండి.',

    guidedAssistantTitle: 'సీనియర్ గైడెడ్ అసిస్టెంట్',
    guidedAssistantSubtitle: 'ఒకేసారి ఒక సరళమైన ప్రశ్నకు సమాధానం ఇవ్వండి.',
    stepQuestion1: 'ఈ రోజు మీకు ఏ సహాయం కావాలి?',
    stepQuestion2: 'మీ వద్ద ఆధార్ లేదా రేషన్ కార్డు ఉందా?',
    stepQuestion3: 'మీరు నేరుగా ఆయుష్మాన్ మిత్రతో మాట్లాడాలనుకుంటున్నారా?',
    choiceEligibility: 'అర్హతను తనిఖీ చేయండి',
    choiceCard: 'కార్డు డౌన్‌లోడ్ చేయండి',
    choiceHospital: 'ఆసుపత్రిని కనుగొనండి',
    choiceCallHelp: 'సహాయకుడితో మాట్లాడండి (14555)',
    yesHaveId: 'అవును, నా వద్ద కార్డు ఉంది',
    noNeedHelp: 'లేదు, కార్డు లేకుండా సహాయం చేయండి',
  },

  ml: {
    portalTitle: 'ആയുഷ്മാൻ ഭാരത് പിഎം-ജെഎവൈ',
    portalSubtitle: 'ദേശീയ ആരോഗ്യ അതോറിറ്റി • ഭാരത സർക്കാർ',
    governmentBadge: 'ഭാരത സർക്കാർ ആരോഗ്യ പോർട്ടൽ',
    seniorMode: 'മുതിർന്ന പൗരന്മാർക്കുള്ള മോഡ്',
    seniorModeActive: 'സീനിയർ മോഡ് ഓൺ',
    fontSize: 'അക്ഷര വലുപ്പം',
    highContrast: 'ഹൈ കോൺട്രാസ്റ്റ്',
    audioGuide: 'വോയ്‌സ് ഗൈഡ്',
    audioGuideOn: 'ഓഡിയോ ഓൺ',
    audioGuideOff: 'ഓഡിയോ ഓഫ്',
    home: 'ഹോം',
    back: 'പിന്നോട്ട് പോകുക',
    help: 'സഹായം വേണോ? 14555-ൽ വിളിക്കുക',
    helplineNumber: 'ടോൾ-ഫ്രീ 14555',

    welcomeTitle: 'ആയുഷ്മാൻ ഭാരതിലേക്ക് സ്വാഗതം',
    welcomeSubtitle: 'നിങ്ങളുടെ ആരോഗ്യ ആനുകൂല്യങ്ങൾ, ഏറ്റവും ലളിതമായി.',
    seniorWelcomeMsg: 'നമസ്കാരം! നിങ്ങളുടെ ആരോഗ്യ ആനുകൂല്യങ്ങൾ എളുപ്പത്തിൽ ലഭിക്കാൻ ഞങ്ങൾ സഹായിക്കുന്നു. താഴെ ഒരു സേവനം തിരഞ്ഞെടുക്കുക. നിർദ്ദേശങ്ങൾ കേൾക്കാനും കഴിയും.',
    seniorWelcomeListen: 'നിർദ്ദേശങ്ങൾ കേൾക്കാൻ സ്പീക്കർ ബട്ടൺ അമർത്തുക.',

    checkEligibilityTitle: '1. നിങ്ങളുടെ യോഗ്യത പരിശോധിക്കുക',
    checkEligibilityDesc: 'നിങ്ങളുടെ കുടുംബത്തിന് ₹5 ലക്ഷം രൂപയുടെ സൗജന്യ ചികിത്സ ലഭിക്കുമോ എന്ന് പരിശോധിക്കുക.',
    checkEligibilityAction: 'എന്റെ യോഗ്യത ഇപ്പോൾ പരിശോധിക്കുക',

    downloadCardTitle: '2. ആയുഷ്മാൻ കാർഡ് ഡൗൺലോഡ് ചെയ്യുക',
    downloadCardDesc: 'നിങ്ങളുടെ ഔദ്യോഗിക ആയുഷ്മാൻ കാർഡ് എളുപ്പത്തിൽ നേടുക.',
    downloadCardAction: 'എന്റെ കാർഡ് ഡൗൺലോഡ് ചെയ്യുക',

    findHospitalTitle: '3. ആശുപത്രി കണ്ടെത്തുക',
    findHospitalDesc: 'നിങ്ങളുടെ അടുത്തുള്ള അംഗീകൃത സർക്കാർ, സ്വകാര്യ ആശുപത്രികൾ കണ്ടെത്തുക.',
    findHospitalAction: 'അടുത്തുള്ള ആശുപത്രികൾ തിരയുക',

    checkBenefitsTitle: '4. ആനുകൂല്യങ്ങൾ മനസ്സിലാക്കുക',
    checkBenefitsDesc: 'വർഷം തോറും ₹5,00,000 രൂപയുടെ സൗജന്യ ക്യാഷ്‌ലെസ് ചികിത്സാ വിവരങ്ങൾ അറിയുക.',
    checkBenefitsAction: 'ആരോഗ്യ ആനുകൂല്യങ്ങൾ കാണുക',

    getHelpTitle: '5. സഹായവും പിന്തുണയും നേടുക',
    getHelpDesc: '24 മണിക്കൂറും പ്രവർത്തിക്കുന്ന 14555 സൗജന്യ നമ്പറിൽ വിളിക്കുക.',
    getHelpAction: 'എളുപ്പത്തിൽ സഹായം നേടുക',

    eligibilityStep1: 'ഘട്ടം 1: നിങ്ങളുടെ സംസ്ഥാനം തിരഞ്ഞെടുക്കുക',
    eligibilityStep2: 'ഘട്ടം 2: തിരിച്ചറിയൽ കാർഡ് വിവരങ്ങൾ നൽകുക',
    eligibilityStep3: 'ഘട്ടം 3: പരിശോധനയും ഫലങ്ങളും',
    selectState: 'സംസ്ഥാനം തിരഞ്ഞെടുക്കുക',
    selectIdType: 'തിരിച്ചറിയൽ രേഖയുടെ തരം',
    enterIdNumber: 'കാർഡ് / ആധാർ നമ്പർ നൽകുക',
    enterMobileNumber: 'മൊബൈൽ നമ്പർ നൽകുക',
    verifyWithOtp: 'ഫോണിൽ വന്ന 6 അക്ക OTP നൽകുക',
    verifyAction: 'യോഗ്യത പരിശോധിക്കുക',
    eligibleSuccessTitle: 'അഭിനന്ദനങ്ങൾ! നിങ്ങൾ ആയുഷ്മാൻ ഭാരതിന് അർഹരാണ്',
    eligibleSuccessDesc: 'നിങ്ങളുടെ കുടുംബത്തിന് പ്രതിവർഷം ₹5,00,000 രൂപയുടെ സൗജന്യ ആശുപത്രി ചികിത്സ ലഭിക്കും.',
    notEligibleTitle: 'വിവരങ്ങൾ കണ്ടെത്താൻ കഴിഞ്ഞില്ല',
    notEligibleDesc: 'വിവരങ്ങൾ വീണ്ടും പരിശോധിക്കുകയോ 14555-ൽ വിളിക്കുകയോ ചെയ്യുക.',
    beneficiaryName: 'ഗുണഭോക്താവിന്റെ പേര്',
    familyHead: 'കുടുംബനാഥൻ',
    annualCoverage: 'ലഭ്യമായ വാർഷിക കവറേജ്',
    pmjayId: 'പിഎം-ജെഎവൈ നമ്പർ',
    demoDisclaimer: 'മാതൃകാ പ്രദർശനം. വ്യക്തിഗത ആധാർ ഡാറ്റ ശേഖരിക്കുന്നില്ല.',

    hospitalFinderTitle: 'അംഗീകൃത ആശുപത്രികൾ കണ്ടെത്തുക',
    hospitalFinderDesc: 'എല്ലാ ആശുപത്രികളിലും സൗജന്യ ക്യാഷ്‌ലെസ് ചികിത്സ ലഭ്യമാണ്.',
    filterByDistrict: 'ജില്ല അനുസരിച്ച് തിരയുക',
    filterByType: 'ആശുപത്രി തരം',
    allTypes: 'എല്ലാ ആശുപത്രികളും (സർക്കാർ & സ്വകാര്യ)',
    publicHospital: 'സർക്കാർ ആശുപത്രി',
    privateHospital: 'സ്വകാര്യ അംഗീകൃത ആശുപത്രി',
    searchHospitalPlaceholder: 'ആശുപത്രിയുടെ പേരോ ചികിത്സയോ തിരയുക...',
    callHospital: 'ആശുപത്രിയിലേക്ക് വിളിക്കുക',
    getDirections: 'വഴി കാണുക',
    specialtiesCovered: 'ലഭ്യമായ പ്രധാന ചികിത്സകൾ',
    pmjayDesk: 'ആയുഷ്മാൻ മിത്ര സഹായ കേന്ദ്രം',

    cardDownloadTitle: 'ആയുഷ്മാൻ കാർഡ് ഡൗൺലോഡ് ചെയ്യുക',
    cardDownloadDesc: 'കാർഡ് ലഭിക്കാൻ 3 ലളിതമായ ഘട്ടങ്ങൾ പാലിക്കുക.',
    stepEnterDetails: '1. വിവരങ്ങൾ നൽകുക',
    stepVerify: '2. പരിശോധന',
    stepPreview: '3. കാർഡ് കാണുക',
    stepDownload: 'ഔദ്യോഗിക കാർഡ് ഡൗൺലോഡ് ചെയ്യുക',
    downloadCardBtn: 'ആയുഷ്മാൻ കാർഡ് ഡൗൺലോഡ് ചെയ്യുക (PDF)',
    cardDownloadedNotice: 'കാർഡ് വിജയകരമായി ഡൗൺലോഡ് ചെയ്തു.',

    benefitsTitle: 'ആയുഷ്മാൻ ഭാരത് ആരോഗ്യ ആനുകൂല്യങ്ങൾ',
    benefitsSubtitle: 'ആശുപത്രി ചികിത്സയ്ക്കും ശസ്ത്രക്രിയകൾക്കും പൂർണ്ണ സാമ്പത്തിക പരിരക്ഷ.',
    coverageAmount: 'കുടുംബത്തിന് പ്രതിവർഷം ₹5,00,000 സൗജന്യ ചികിത്സ',
    seniorSpecialNote: 'മുതിർന്ന പൗരന്മാർക്ക് (60 വയസ്സിന് മുകളിൽ) പ്രത്യേക മുൻഗണനയും സഹായവും.',
    cashlessTreatment: 'രാജ്യത്തുടനീളം 100% ക്യാഷ്‌ലെസ് ചികിത്സ.',
    hospitalStaysIncluded: 'മരുന്നുകൾ, ഡോക്ടർ കൺസൾട്ടേഷൻ, ഐസിയു, ശസ്ത്രക്രിയ സൗജന്യം.',

    voiceAssistantTitle: 'ആയുഷ്മാൻ വോയ്‌സ് അസിസ്റ്റന്റ്',
    voiceAssistantPrompt: 'എന്തെങ്കിലും ചോദിക്കുക അല്ലെങ്കിൽ ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക:',
    voiceListening: 'ശ്രദ്ധിക്കുന്നു...',
    voiceSpeakNow: 'ദയവായി ഇപ്പോൾ സംസാരിക്കുക...',
    voiceClickToSpeak: 'സംസാരിക്കാൻ അമർത്തുക',
    quickQuestions: 'മുതിർന്നവരുടെ സാധാരണ ചോദ്യങ്ങൾ',
    assistantDefaultResponse: 'നമസ്കാരം! ഞാൻ നിങ്ങളെ സഹായിക്കാൻ ഇവിടെയുണ്ട്. എന്ത് സേവനമാണ് വേണ്ടത്?',

    guidedAssistantTitle: 'സ്റ്റെപ്പ്-ബൈ-സ്റ്റെപ്പ് സഹായി',
    guidedAssistantSubtitle: 'ലളിതമായ ചോദ്യങ്ങൾക്ക് ഓരോന്നായി മറുപടി നൽകുക.',
    stepQuestion1: 'ഇന്ന് നിങ്ങൾക്ക് എന്താണ് അറിയേണ്ടത്?',
    stepQuestion2: 'നിങ്ങളുടെ പക്കൽ ആധാർ അല്ലെങ്കിൽ റേഷൻ കാർഡ് ഉണ്ടോ?',
    stepQuestion3: 'ആയുഷ്മാൻ മിത്രയോട് നേരിട്ട് സംസാരിക്കണോ?',
    choiceEligibility: 'യോഗ്യത പരിശോധിക്കുക',
    choiceCard: 'കാർഡ് ഡൗൺലോഡ് ചെയ്യുക',
    choiceHospital: 'ആശുപത്രി കണ്ടെത്തുക',
    choiceCallHelp: 'സഹായിയെ വിളിക്കുക (14555)',
    yesHaveId: 'ഉണ്ട്, കാർഡ് കൈവശമുണ്ട്',
    noNeedHelp: 'ഇല്ല, കാർഡില്ലാതെ സഹായിക്കുക',
  },

  bn: {
    portalTitle: 'আয়ুষ্মান ভারত পিএম-জেএওয়াই',
    portalSubtitle: 'জাতীয় স্বাস্থ্য কর্তৃপক্ষ • ভারত সরকার',
    governmentBadge: 'ভারত সরকার স্বাস্থ্য পোর্টাল',
    seniorMode: 'সিনিয়র সিটিজেন মোড',
    seniorModeActive: 'সিনিয়র মোড চালু আছে',
    fontSize: 'অক্ষরের আকার',
    highContrast: 'উচ্চ বৈসাদৃশ্য',
    audioGuide: 'ভয়েস গাইড',
    audioGuideOn: 'অডিও চালু',
    audioGuideOff: 'অডিও বন্ধ',
    home: 'হোম',
    back: 'ফিরে যান',
    help: 'সাহায্য প্রয়োজন? 14555 নম্বরে কল করুন',
    helplineNumber: 'টোল-ফ্রি 14555',

    welcomeTitle: 'আয়ুষ্মান ভারতে আপনাকে স্বাগতম',
    welcomeSubtitle: 'আপনার স্বাস্থ্য সুবিধা, একেবারেই সহজ ও স্পষ্ট।',
    seniorWelcomeMsg: 'নমস্কার! আমরা আপনার স্বাস্থ্য সুবিধা সহজে পেতে সাহায্য করার জন্য এখানে আছি। নিচের একটি সেবা বেছে নিন। আপনি নির্দেশাবলী শুনতেও পারেন।',
    seniorWelcomeListen: 'নির্দেশাবলী শুনতে স্পিকার বোতামে চাপ দিন।',

    checkEligibilityTitle: '১. আপনার যোগ্যতা যাচাই করুন',
    checkEligibilityDesc: 'আপনার পরিবার ৫ লক্ষ টাকার বিনামূল্যে চিকিৎসার যোগ্য কিনা তা জানুন।',
    checkEligibilityAction: 'এখনই যোগ্যতা যাচাই করুন',

    downloadCardTitle: '২. আয়ুষ্মান কার্ড ডাউনলোড করুন',
    downloadCardDesc: 'আপনার অফিসিয়াল আয়ুষ্মান কার্ড সহজে ডাউনলোড করুন।',
    downloadCardAction: 'আমার কার্ড ডাউনলোড করুন',

    findHospitalTitle: '৩. হাসপাতাল খুঁজুন',
    findHospitalDesc: 'নিকটবর্তী সরকারি ও বেসরকারি তালিকাভুক্ত হাসপাতাল সন্ধান করুন।',
    findHospitalAction: 'কাছের হাসপাতাল খুঁজুন',

    checkBenefitsTitle: '৪. আপনার সুবিধা জানুন',
    checkBenefitsDesc: 'প্রতি বছর ₹৫,০০,০০০ টাকার বিনামূল্যে ক্যাশলেস চিকিৎসা সম্পর্কে জানুন।',
    checkBenefitsAction: 'স্বাস্থ্য সুবিধা দেখুন',

    getHelpTitle: '৫. সাহায্য ও সহায়তা পান',
    getHelpDesc: '২৪ ঘণ্টার বিনামূল্যে হেল্পলাইন 14555 নম্বরে কল করুন বা আয়ুষ্মান মিত্রের সাথে দেখা করুন।',
    getHelpAction: 'সহজ সহায়তা পান',

    eligibilityStep1: 'ধাপ ১: আপনার রাজ্য নির্বাচন করুন',
    eligibilityStep2: 'ধাপ ২: পরিচয়পত্রের বিবরণ দিন',
    eligibilityStep3: 'ধাপ ৩: যাচাইকরণ এবং ফলাফল',
    selectState: 'রাজ্য নির্বাচন করুন',
    selectIdType: 'পরিচয়পত্রের ধরন',
    enterIdNumber: 'কার্ড / আধার নম্বর লিখুন',
    enterMobileNumber: 'মোবাইল নম্বর দিন',
    verifyWithOtp: 'ফোনে আসা ৬ সংখ্যার ওটিপি দিন',
    verifyAction: 'আমার যোগ্যতা যাচাই করুন',
    eligibleSuccessTitle: 'অভিনন্দন! আপনি আয়ুষ্মান ভারতের জন্য যোগ্য',
    eligibleSuccessDesc: 'হাসপাতালে চিকিৎসার জন্য আপনার পরিবার বছরে ₹৫,০০,০০০ পর্যন্ত বিনামূল্যে কভার পাবে।',
    notEligibleTitle: 'আপনার বিবরণ পাওয়া যায়নি',
    notEligibleDesc: 'দয়া করে তথ্য পুনরায় যাচাই করুন অথবা 14555 নম্বরে কল করুন।',
    beneficiaryName: 'সুবিধাভোগীর নাম',
    familyHead: 'পরিবারের প্রধান',
    annualCoverage: 'বার্ষিক কভারেজ',
    pmjayId: 'পিএম-জেএওয়াই নম্বর',
    demoDisclaimer: 'নমুনা প্রদর্শনী। কোনো ব্যক্তিগত আধার তথ্য সংরক্ষণ করা হয় না।',

    hospitalFinderTitle: 'তালিকাভুক্ত হাসপাতাল খুঁজুন',
    hospitalFinderDesc: 'সকল তালিকাভুক্ত হাসপাতালে বিনামূল্যে ক্যাশলেস চিকিৎসা পাওয়া যায়।',
    filterByDistrict: 'জেলা অনুযায়ী খুঁজুন',
    filterByType: 'হাসপাতালের ধরন',
    allTypes: 'সকল হাসপাতাল (সরকারি ও বেসরকারি)',
    publicHospital: 'সরকারি হাসপাতাল',
    privateHospital: 'বেসরকারি তালিকাভুক্ত হাসপাতাল',
    searchHospitalPlaceholder: 'হাসপাতালের নাম বা চিকিৎসা (ছানি, হার্ট, হাঁটু) খুঁজুন...',
    callHospital: 'হাসপাতালে ফোন করুন',
    getDirections: 'মানচিত্র ও দিকনির্দেশ দেখুন',
    specialtiesCovered: 'উপলব্ধ প্রধান চিকিৎসা',
    pmjayDesk: 'আয়ুষ্মান মিত্র সহায়তা ডেস্ক',

    cardDownloadTitle: 'আয়ুষ্মান কার্ড ডাউনলোড করুন',
    cardDownloadDesc: 'আপনার কার্ড পেতে ৩টি সহজ ধাপ অনুসরণ করুন।',
    stepEnterDetails: '১. বিবরণ লিখুন',
    stepVerify: '২. সহজ যাচাইকরণ',
    stepPreview: '৩. কার্ড প্রিভিউ',
    stepDownload: 'অফিসিয়াল কার্ড ডাউনলোড করুন',
    downloadCardBtn: 'আয়ুষ্মান কার্ড ডাউনলোড করুন (PDF)',
    cardDownloadedNotice: 'আপনার কার্ড ডাউনলোড হয়েছে।',

    benefitsTitle: 'আয়ুষ্মান ভারত স্বাস্থ্য সুবিধা',
    benefitsSubtitle: 'হাসপাতালে ভর্তি এবং অস্ত্রোপচারের জন্য সম্পূর্ণ আর্থিক সুরক্ষা।',
    coverageAmount: 'পরিবার প্রতি বছরে ₹৫,০০,০০০ বিনামূল্যে চিকিৎসা',
    seniorSpecialNote: 'প্রবীণ নাগরিকদের জন্য বিশেষ অগ্রাধিকার এবং হাসপাতালে আয়ুষ্মান মিত্র সহায়তা।',
    cashlessTreatment: 'সারা দেশে ১০০% ক্যাশলেস চিকিৎসা।',
    hospitalStaysIncluded: 'ওষুধ, ডাক্তার পরামর্শ, আইসিইউ ও অস্ত্রোপচার বিনামূল্যে।',

    voiceAssistantTitle: 'আয়ুষ্মান ভয়েস সহকারী',
    voiceAssistantPrompt: 'যেকোনো প্রশ্ন জিজ্ঞাসা করুন বা বিষয় নির্বাচন করুন:',
    voiceListening: 'আপনার কথা শুনছি...',
    voiceSpeakNow: 'অনুগ্রহ করে বাংলায় বলুন...',
    voiceClickToSpeak: 'বলতে চাপ দিন',
    quickQuestions: 'প্রবীণদের সাধারণ প্রশ্ন',
    assistantDefaultResponse: 'নমস্কার! আমি আপনাকে সাহায্য করতে এখানে আছি। আপনি কীভাবে সাহায্য চান?',

    guidedAssistantTitle: 'প্রবীণদের জন্য সহজ নির্দেশিকা',
    guidedAssistantSubtitle: 'একবারে শুধুমাত্র একটি সহজ প্রশ্নের উত্তর দিন।',
    stepQuestion1: 'আজ আপনি কোন বিষয়ে সাহায্য চান?',
    stepQuestion2: 'আপনার সাথে আধার বা রেশন কার্ড আছে কি?',
    stepQuestion3: 'আপনি কি সরাসরি আয়ুষ্মান মিত্রের সাথে কথা বলতে চান?',
    choiceEligibility: 'যোগ্যতা পরীক্ষা করুন',
    choiceCard: 'কার্ড ডাউনলোড করুন',
    choiceHospital: 'হাসপাতাল খুঁজুন',
    choiceCallHelp: 'সহায়কের সাথে কথা বলুন (14555)',
    yesHaveId: 'হ্যাঁ, আমার কাছে কার্ড আছে',
    noNeedHelp: 'না, কার্ড ছাড়াই নির্দেশ দিন',
  },

  mr: {
    portalTitle: 'आयुष्मान भारत पीएम-जय',
    portalSubtitle: 'राष्ट्रीय आरोग्य प्राधिकरण • भारत सरकार',
    governmentBadge: 'भारत सरकार आरोग्य पोर्टल',
    seniorMode: 'ज्येष्ठ नागरिक मोड',
    seniorModeActive: 'ज्येष्ठ मोड सुरू',
    fontSize: 'अक्षराचा आकार',
    highContrast: 'उच्च कॉन्ट्रास्ट',
    audioGuide: 'व्हॉइस गाईड',
    audioGuideOn: 'ऑडिओ चालू',
    audioGuideOff: 'ऑडिओ बंद',
    home: 'मुख्यपृष्ठ',
    back: 'मागे जा',
    help: 'मदत हवी आहे? 14555 वर कॉल करा',
    helplineNumber: 'टोल-फ्री 14555',

    welcomeTitle: 'आयुष्मान भारत मध्ये आपले स्वागत आहे',
    welcomeSubtitle: 'तुमचे आरोग्य लाभ, अगदी सोपे आणि सुलभ.',
    seniorWelcomeMsg: 'नमस्ते! आम्ही तुम्हाला तुमचे आरोग्य लाभ मिळवून देण्यासाठी येथे आहोत. खालील सेवा निवडा. तुम्ही सूचना ऐकू शकता.',
    seniorWelcomeListen: 'सूचना ऐकण्यासाठी स्पीकर बटण दाबा.',

    checkEligibilityTitle: '१. तुमची पात्रता तपासा',
    checkEligibilityDesc: 'तुमचे कुटुंब ₹५ लाखांच्या मोफत उपचारांसाठी पात्र आहे का ते जाणून घ्या.',
    checkEligibilityAction: 'माझी पात्रता आत्ताच तपासा',

    downloadCardTitle: '२. आयुष्मान कार्ड डाउनलोड करा',
    downloadCardDesc: 'तुमचे अधिकृत आयुष्मान कार्ड सहजपणे डाउनलोड करा.',
    downloadCardAction: 'माझे कार्ड डाउनलोड करा',

    findHospitalTitle: '३. रुग्णालय शोधा',
    findHospitalDesc: 'तुमच्या जवळील सरकारी आणि खाजगी नोंदणीकृत रुग्णालये शोधा.',
    findHospitalAction: 'जवळचे रुग्णालय शोधा',

    checkBenefitsTitle: '४. तुमचे फायदे जाणून घ्या',
    checkBenefitsDesc: 'दरवर्षी ₹५,००,००० मोफत कॅशलेस उपचार आणि सुविधा जाणून घ्या.',
    checkBenefitsAction: 'आरोग्य लाभ पहा',

    getHelpTitle: '५. मदत आणि सहाय्य मिळवा',
    getHelpDesc: '२४ तास मोफत 14555 वर कॉल करा किंवा आयुष्मान मित्रांना भेटा.',
    getHelpAction: 'सुलभ मदत मिळवा',

    eligibilityStep1: 'पायरी १: आपले राज्य निवडा',
    eligibilityStep2: 'पायरी २: ओळखपत्र तपशील प्रविष्ट करा',
    eligibilityStep3: 'पायरी ३: पडताळणी आणि निकाल',
    selectState: 'राज्य निवडा',
    selectIdType: 'ओळखपत्राचा प्रकार',
    enterIdNumber: 'कार्ड / आधार क्रमांक टाका',
    enterMobileNumber: 'मोबाइल नंबर टाका',
    verifyWithOtp: 'फोनवर आलेला ६ अंकी OTP टाका',
    verifyAction: 'माझी पात्रता तपासा',
    eligibleSuccessTitle: 'अभिनंदन! तुम्ही आयुष्मान भारतसाठी पात्र आहात',
    eligibleSuccessDesc: 'तुमच्या कुटुंबाला दरवर्षी रुग्णालयातील उपचारांसाठी ₹५,००,००० पर्यंत मोफत कव्हर आहे.',
    notEligibleTitle: 'आम्हाला तुमचे तपशील सापडले नाहीत',
    notEligibleDesc: 'कृपया माहिती पुन्हा तपासा किंवा 14555 वर संपर्क साधा.',
    beneficiaryName: 'लाभार्थ्याचे नाव',
    familyHead: 'कुटुंब प्रमुख',
    annualCoverage: 'उपलब्ध वार्षिक कव्हर',
    pmjayId: 'पीएम-जय ओळख क्रमांक',
    demoDisclaimer: 'डेमो प्रात्यक्षिक. कोणताही खाजगी आधार डेटा साठवला जात नाही.',

    hospitalFinderTitle: 'नोंदणीकृत रुग्णालये शोधा',
    hospitalFinderDesc: 'सर्व सूचीबद्ध रुग्णालयांमध्ये मोफत कॅशलेस उपचार मिळतात.',
    filterByDistrict: 'जिल्ह्यानुसार शोधा',
    filterByType: 'रुग्णालयाचा प्रकार',
    allTypes: 'सर्व रुग्णालये (सरकारी व खाजगी)',
    publicHospital: 'सरकारी रुग्णालय',
    privateHospital: 'खाजगी नोंदणीकृत रुग्णालय',
    searchHospitalPlaceholder: 'रुग्णालयाचे नाव किंवा आजार (मोतीबिंदू, हृदय, गुडघा) शोधा...',
    callHospital: 'रुग्णालयाला कॉल करा',
    getDirections: 'नकाशा आणि रस्ता पहा',
    specialtiesCovered: 'उपलब्ध प्रमुख उपचार',
    pmjayDesk: 'आयुष्मान मित्र मदत कक्ष',

    cardDownloadTitle: 'आयुष्मान कार्ड डाउनलोड करा',
    cardDownloadDesc: 'कार्ड मिळवण्यासाठी ३ सोप्या पायऱ्या फॉलो करा.',
    stepEnterDetails: '१. माहिती प्रविष्ट करा',
    stepVerify: '२. पडताळणी',
    stepPreview: '३. कार्ड पूर्वावलोकन',
    stepDownload: 'अधिकृत कार्ड डाउनलोड करा',
    downloadCardBtn: 'आयुष्मान कार्ड डाउनलोड करा (PDF)',
    cardDownloadedNotice: 'तुमचे कार्ड डाउनलोड झाले आहे.',

    benefitsTitle: 'आयुष्मान भारत आरोग्य लाभ',
    benefitsSubtitle: 'रुग्णालयात दाखल होणे आणि शस्त्रक्रियेसाठी संपूर्ण आर्थिक संरक्षण.',
    coverageAmount: 'प्रति कुटुंब दरवर्षी ₹५,००,००० मोफत उपचार',
    seniorSpecialNote: 'ज्येष्ठ नागरिकांसाठी विशेष प्राधान्य आणि रुग्णालयात आयुष्मान मित्र मदत.',
    cashlessTreatment: 'संपूर्ण भारतात १००% कॅशलेस उपचार.',
    hospitalStaysIncluded: 'औषधे, डॉक्टरांचा सल्ला, आयसीयू आणि शस्त्रक्रिया पूर्णपणे मोफत.',

    voiceAssistantTitle: 'आयुष्मान व्हॉइस असिस्टंट',
    voiceAssistantPrompt: 'कोणताही प्रश्न विचारा किंवा खालील पर्याय निवडा:',
    voiceListening: 'ऐकत आहे...',
    voiceSpeakNow: 'कृपया मराठीत बोला...',
    voiceClickToSpeak: 'बोलण्यासाठी दाबा',
    quickQuestions: 'ज्येष्ठांचे सामान्य प्रश्न',
    assistantDefaultResponse: 'नमस्ते! मी तुम्हाला मदत करण्यासाठी येथे आहे. आपण पात्रता तपासू शकता किंवा रुग्णालय शोधू शकता.',

    guidedAssistantTitle: 'ज्येष्ठांसाठी सोपी मार्गदर्शिका',
    guidedAssistantSubtitle: 'एका वेळी एकाच सोप्या प्रश्नाचे उत्तर द्या.',
    stepQuestion1: 'आज तुम्हाला कशात मदत हवी आहे?',
    stepQuestion2: 'तुमच्याकडे आधार किंवा रेशन कार्ड आहे का?',
    stepQuestion3: 'तुम्हाला थेट आयुष्मान मित्राशी बोलायचे आहे का?',
    choiceEligibility: 'पात्रता तपासा',
    choiceCard: 'कार्ड डाउनलोड करा',
    choiceHospital: 'रुग्णालय शोधा',
    choiceCallHelp: 'मदतनीसाशी बोला (14555)',
    yesHaveId: 'होय, माझ्याकडे कार्ड आहे',
    noNeedHelp: 'नाही, कार्डशिवाय मार्गदर्शन करा',
  },

  gu: {
    portalTitle: 'આયુષ્માન ભારત પીએમ-જેએવાય',
    portalSubtitle: 'નેશનલ હેલ્થ ઓથોરિટી • ભારત સરકાર',
    governmentBadge: 'ભારત સરકાર હેલ્થ પોર્ટલ',
    seniorMode: 'વરિષ્ઠ નાગરિક મોડ',
    seniorModeActive: 'વરિષ્ઠ મોડ ચાલુ છે',
    fontSize: 'અક્ષરનું કદ',
    highContrast: 'હાઇ કોન્ટ્રાસ્ટ',
    audioGuide: 'વોઇસ ગાઇડ',
    audioGuideOn: 'ઓડિયો ચાલુ',
    audioGuideOff: 'ઓડિયો બંધ',
    home: 'હોમ',
    back: 'પાછા જાઓ',
    help: 'મદદ જોઈએ છે? 14555 પર કૉલ કરો',
    helplineNumber: 'ટોલ-ફ્રી 14555',

    welcomeTitle: 'આયુષ્માન ભારતમાં આપનું સ્વાગત છે',
    welcomeSubtitle: 'તમારા આરોગ્ય લાભો, એકદમ સરળ અને સુગમ.',
    seniorWelcomeMsg: 'નમસ્તે! અમે તમારા આરોગ્ય લાભો મેળવવામાં મદદ માટે અહીં છીએ. નીચે એક સેવા પસંદ કરો. તમે સૂચનાઓ સાંભળી પણ શકો છો.',
    seniorWelcomeListen: 'સૂચનાઓ સાંભળવા માટે સ્પીકર બટન દબાવો.',

    checkEligibilityTitle: '૧. તમારી પાત્રતા તપાસો',
    checkEligibilityDesc: 'તમારો પરિવાર ₹5 લાખની મફત સારવાર માટે પાત્ર છે કે નહીં તે જાણો.',
    checkEligibilityAction: 'મારી પાત્રતા હમણાં તપાસો',

    downloadCardTitle: '૨. આયુષ્માન કાર્ડ ડાઉનલોડ કરો',
    downloadCardDesc: 'તમારું સત્તાવાર આયુષ્માન કાર્ડ સરળતાથી મેળવો.',
    downloadCardAction: 'મારું કાર્ડ ડાઉનલોડ કરો',

    findHospitalTitle: '૩. હોસ્પિટલ શોધો',
    findHospitalDesc: 'નજીકની સરકારી અને ખાનગી માન્યતા પ્રાપ્ત હોસ્પિટલો શોધો.',
    findHospitalAction: 'નજીકની હોસ્પિટલ શોધો',

    checkBenefitsTitle: '૪. તમારા લાભો જાણો',
    checkBenefitsDesc: 'દર વર્ષે ₹૫,૦૦,૦૦૦ સુધીની મફત કેશલેસ સારવાર વિશે જાણો.',
    checkBenefitsAction: 'આરોગ્ય લાભો જુઓ',

    getHelpTitle: '૫. મદદ અને સહાય મેળવો',
    getHelpDesc: '૨૪ કલાક મફત હેલ્પલાઇન 14555 પર કૉલ કરો અથવા આયુષ્માન મિત્રને મળો.',
    getHelpAction: 'સરળ સહાય મેળવો',

    eligibilityStep1: 'પગલું ૧: તમારું રાજ્ય પસંદ કરો',
    eligibilityStep2: 'પગલું ૨: ઓળખકાર્ડ વિગતો દાખલ કરો',
    eligibilityStep3: 'પગલું ૩: ચકાસણી અને પરિણામ',
    selectState: 'રાજ્ય પસંદ કરો',
    selectIdType: 'ઓળખકાર્ડનો પ્રકાર',
    enterIdNumber: 'કાર્ડ / આધાર નંબર દાખલ કરો',
    enterMobileNumber: 'મોબાઇલ નંબર દાખલ કરો',
    verifyWithOtp: 'ફોન પર આવેલ ૬ અંકનો OTP દાખલ કરો',
    verifyAction: 'મારી પાત્રતા તપાસો',
    eligibleSuccessTitle: 'અભિનંદન! તમે આયુષ્માન ભારત માટે પાત્ર છો',
    eligibleSuccessDesc: 'તમારા પરિવારને હોસ્પિટલ સારવાર માટે દર વર્ષે ₹૫,૦૦,૦૦૦ સુધીનું મફત કવરેજ મળશે.',
    notEligibleTitle: 'તમારી વિગતો મળી નથી',
    notEligibleDesc: 'કૃપા કરીને વિગતો ફરી તપાસો અથવા 14555 પર સંપર્ક કરો.',
    beneficiaryName: 'લાભાર્થીનું નામ',
    familyHead: 'પરિવારના વડા',
    annualCoverage: 'ઉપલબ્ધ વાર્ષિક કવરેજ',
    pmjayId: 'પીએમ-જેએવાય નંબર',
    demoDisclaimer: 'ડેમો પ્રદર્શન. કોઈ અંગત આધાર ડેટા સાચવવામાં આવતો નથી.',

    hospitalFinderTitle: 'માન્ય હોસ્પિટલો શોધો',
    hospitalFinderDesc: 'બધી હોસ્પિટલોમાં મફત કેશલેસ સારવાર ઉપલબ્ધ છે.',
    filterByDistrict: 'જિલ્લા મુજબ ફિલ્ટર કરો',
    filterByType: 'હોસ્પિટલનો પ્રકાર',
    allTypes: 'બધી હોસ્પિટલો (સરકારી અને ખાનગી)',
    publicHospital: 'સરકારી હોસ્પિટલ',
    privateHospital: 'ખાનગી માન્ય હોસ્પિટલ',
    searchHospitalPlaceholder: 'હોસ્પિટલનું નામ અથવા રોગ (મોતિયો, હૃદય, ઘૂંટણ) શોધો...',
    callHospital: 'હોસ્પિટલને કૉલ કરો',
    getDirections: 'નકશો અને રસ્તો જુઓ',
    specialtiesCovered: 'ઉપલબ્ધ મુખ્ય સારવાર',
    pmjayDesk: 'આયુષ્માન મિત્ર સહાય કેન્દ્ર',

    cardDownloadTitle: 'આયુષ્માન કાર્ડ ડાઉનલોડ કરો',
    cardDownloadDesc: 'કાર્ડ મેળવવા માટે ૩ સરળ પગલાં અનુસરો.',
    stepEnterDetails: '૧. વિગતો દાખલ કરો',
    stepVerify: '૨. સરળ ચકાસણી',
    stepPreview: '૩. કાર્ડ જુઓ',
    stepDownload: 'સત્તાવાર કાર્ડ ડાઉનલોડ કરો',
    downloadCardBtn: 'આયુષ્માન કાર્ડ ડાઉનલોડ કરો (PDF)',
    cardDownloadedNotice: 'કાર્ડ સફળતાપૂર્વક ડાઉનલોડ થયું.',

    benefitsTitle: 'આયુષ્માન ભારત આરોગ્ય લાભો',
    benefitsSubtitle: 'હોસ્પિટલમાં દાખલ થવા અને સર્જરી માટે સંપૂર્ણ આર્થિક સુરક્ષા.',
    coverageAmount: 'પરિવાર દીઠ વાર્ષિક ₹૫,૦૦,૦૦૦ ની મફત સારવાર',
    seniorSpecialNote: 'વરિષ્ઠ નાગરિકો માટે વિશેષ અગ્રતા અને હોસ્પિટલમાં આયુષ્માન મિત્ર સહાય.',
    cashlessTreatment: 'સમગ્ર ભારતમાં ૧૦૦% કેશલેસ સારવાર.',
    hospitalStaysIncluded: 'દવાઓ, ડૉક્ટર ફી, આઈસીયુ અને સર્જરી સંપૂર્ણ મફત.',

    voiceAssistantTitle: 'આયુષ્માન વોઇસ આસિસ્ટન્ટ',
    voiceAssistantPrompt: 'કોઈપણ પ્રશ્ન પૂછો અથવા નીચે આપેલ વિષય પસંદ કરો:',
    voiceListening: 'સાંભળી રહ્યા છીએ...',
    voiceSpeakNow: 'કૃપા કરીને ગુજરાતીમાં બોલો...',
    voiceClickToSpeak: 'બોલવા માટે દબાવો',
    quickQuestions: 'વરિષ્ઠોના સામાન્ય પ્રશ્નો',
    assistantDefaultResponse: 'નમસ્તે! હું તમારી સહાય માટે અહીં છું. તમે પાત્રતા તપાસી શકો છો કે હોસ્પિટલ શોધી શકો છો.',

    guidedAssistantTitle: 'વરિષ્ઠ નાગરિક સહાયક',
    guidedAssistantSubtitle: 'એક સમયે એક જ સરળ પ્રશ્નનો જવાબ આપો.',
    stepQuestion1: 'આજે તમને શેમાં મદદ જોઈએ છે?',
    stepQuestion2: 'શું તમારી પાસે આધાર કે રેશનકાર્ડ છે?',
    stepQuestion3: 'શું તમે સીધા આયુષ્માન મિત્ર સાથે વાત કરવા માંગો છો?',
    choiceEligibility: 'પાત્રતા તપાસો',
    choiceCard: 'કાર્ડ ડાઉનલોડ કરો',
    choiceHospital: 'હોસ્પિટલ શોધો',
    choiceCallHelp: 'સહાયક સાથે વાત કરો (14555)',
    yesHaveId: 'હા, મારી પાસે કાર્ડ છે',
    noNeedHelp: 'ના, કાર્ડ વિના માર્ગદર્શન આપો',
  },

  pa: {
    portalTitle: 'ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ ਪੀਐਮ-ਜੇਏਵਾਈ',
    portalSubtitle: 'ਨੈਸ਼ਨਲ ਹੈਲਥ ਅਥਾਰਟੀ • ਭਾਰਤ ਸਰਕਾਰ',
    governmentBadge: 'ਭਾਰਤ ਸਰਕਾਰ ਸਿਹਤ ਪੋਰਟਲ',
    seniorMode: 'ਸੀਨੀਅਰ ਸਿਟੀਜ਼ਨ ਮੋਡ',
    seniorModeActive: 'ਸੀਨੀਅਰ ਮੋਡ ਚਾਲੂ ਹੈ',
    fontSize: 'ਅੱਖਰਾਂ ਦਾ ਆਕਾਰ',
    highContrast: 'ਹਾਈ ਕੰਟ੍ਰਾਸਟ',
    audioGuide: 'ਆਵਾਜ਼ ਗਾਈਡ',
    audioGuideOn: 'ਆਡੀਓ ਚਾਲੂ',
    audioGuideOff: 'ਆਡੀਓ ਬੰਦ',
    home: 'ਹੋਮ',
    back: 'ਪਿੱਛੇ ਜਾਓ',
    help: 'ਮਦਦ ਚਾਹੀਦੀ ਹੈ? 14555 ਤੇ ਕਾਲ ਕਰੋ',
    helplineNumber: 'ਟੋਲ-ਫ੍ਰੀ 14555',

    welcomeTitle: 'ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ',
    welcomeSubtitle: 'ਤੁਹਾਡੇ ਸਿਹਤ ਲਾਭ, ਬਿਲਕੁਲ ਸਰਲ ਅਤੇ ਆਸਾਨ।',
    seniorWelcomeMsg: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਅਸੀਂ ਤੁਹਾਡੇ ਸਿਹਤ ਲਾਭ ਪ੍ਰਾਪਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਇੱਥੇ ਹਾਂ। ਹੇਠਾਂ ਦਿੱਤੀ ਸੇਵਾ ਚੁਣੋ। ਤੁਸੀਂ ਹਦਾਇਤਾਂ ਸੁਣ ਵੀ ਸਕਦੇ ਹੋ।',
    seniorWelcomeListen: 'ਹਦਾਇਤਾਂ ਸੁਣਨ ਲਈ ਸਪੀਕਰ ਬਟਨ ਦਬਾਓ।',

    checkEligibilityTitle: '੧. ਆਪਣੀ ਯੋਗਤਾ ਦੀ ਜਾਂਚ ਕਰੋ',
    checkEligibilityDesc: 'ਜਾਣੋ ਕਿ ਕੀ ਤੁਹਾਡਾ ਪਰਿਵਾਰ ₹5 ਲੱਖ ਦੇ ਮੁਫ਼ਤ ਇਲਾਜ ਲਈ ਯੋਗ ਹੈ।',
    checkEligibilityAction: 'ਮੇਰੀ ਯੋਗਤਾ ਹੁਣੇ ਚੈੱਕ ਕਰੋ',

    downloadCardTitle: '੨. ਆਯੁਸ਼ਮਾਨ ਕਾਰਡ ਡਾਊਨਲੋਡ ਕਰੋ',
    downloadCardDesc: 'ਆਪਣਾ ਅਧਿਕਾਰਤ ਆਯੁਸ਼ਮਾਨ ਕਾਰਡ ਆਸਾਨੀ ਨਾਲ ਪ੍ਰਾਪਤ ਕਰੋ।',
    downloadCardAction: 'ਮੇਰਾ ਕਾਰਡ ਡਾਊਨਲੋਡ ਕਰੋ',

    findHospitalTitle: '੩. ਹਸਪਤਾਲ ਲੱਭੋ',
    findHospitalDesc: 'ਆਪਣੇ ਨੇੜਲੇ ਸਰਕਾਰੀ ਅਤੇ ਪ੍ਰਾਈਵੇਟ ਹਸਪਤਾਲ ਲੱਭੋ।',
    findHospitalAction: 'ਨੇੜਲੇ ਹਸਪਤਾਲ ਲੱਭੋ',

    checkBenefitsTitle: '੪. ਆਪਣੇ ਲਾਭ ਜਾਣੋ',
    checkBenefitsDesc: 'ਸਾਲਾਨਾ ₹੫,੦੦,੦੦੦ ਤੱਕ ਮੁਫ਼ਤ ਕੈਸ਼ਲੈੱਸ ਇਲਾਜ ਬਾਰੇ ਜਾਣੋ।',
    checkBenefitsAction: 'ਸਿਹਤ ਲਾਭ ਦੇਖੋ',

    getHelpTitle: '੫. ਮਦਦ ਅਤੇ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਕਰੋ',
    getHelpDesc: '੨੪ ਘੰਟੇ ਮੁਫ਼ਤ ਹੈਲਪਲਾਈਨ 14555 ਤੇ ਕਾਲ ਕਰੋ ਜਾਂ ਆਯੁਸ਼ਮਾਨ ਮਿੱਤਰ ਨੂੰ ਮਿਲੋ।',
    getHelpAction: 'ਸਰਲ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਕਰੋ',

    eligibilityStep1: 'ਕਦਮ ੧: ਆਪਣਾ ਰਾਜ ਚੁਣੋ',
    eligibilityStep2: 'ਕਦਮ ੨: ਪਛਾਣ ਪੱਤਰ ਦੇ ਵੇਰਵੇ ਦਰਜ ਕਰੋ',
    eligibilityStep3: 'ਕਦਮ ੩: ਤਸਦੀਕ ਅਤੇ ਨਤੀਜਾ',
    selectState: 'ਰਾਜ ਚੁਣੋ',
    selectIdType: 'ਪਛਾਣ ਪੱਤਰ ਦੀ ਕਿਸਮ',
    enterIdNumber: 'ਕਾਰਡ / ਆਧਾਰ ਨੰਬਰ ਦਰਜ ਕਰੋ',
    enterMobileNumber: 'ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ',
    verifyWithOtp: 'ਫ਼ੋਨ ਤੇ ਆਇਆ ੬ ਅੰਕਾਂ ਦਾ OTP ਦਰਜ ਕਰੋ',
    verifyAction: 'ਮੇਰੀ ਯੋਗਤਾ ਚੈੱਕ ਕਰੋ',
    eligibleSuccessTitle: 'ਵਧਾਈਆਂ! ਤੁਸੀਂ ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ ਲਈ ਯੋਗ ਹੋ',
    eligibleSuccessDesc: 'ਤੁਹਾਡੇ ਪਰਿਵਾਰ ਨੂੰ ਹਸਪਤਾਲ ਇਲਾਜ ਲਈ ਹਰ ਸਾਲ ₹੫,੦੦,੦੦੦ ਤੱਕ ਦਾ ਮੁਫ਼ਤ ਕਵਰ ਮਿਲੇਗਾ।',
    notEligibleTitle: 'ਤੁਹਾਡੇ ਵੇਰਵੇ ਨਹੀਂ ਮਿਲੇ',
    notEligibleDesc: 'ਕਿਰਪਾ ਕਰਕੇ ਜਾਣਕਾਰੀ ਦੁਬਾਰਾ ਚੈੱਕ ਕਰੋ ਜਾਂ 14555 ਤੇ ਸੰਪਰਕ ਕਰੋ।',
    beneficiaryName: 'ਲਾਭਪਾਤਰੀ ਦਾ ਨਾਮ',
    familyHead: 'ਪਰਿਵਾਰ ਦਾ ਮੁਖੀ',
    annualCoverage: 'ਸਾਲਾਨਾ ਕਵਰੇਜ',
    pmjayId: 'ਪੀਐਮ-ਜੇਏਵਾਈ ਨੰਬਰ',
    demoDisclaimer: 'ਡੈਮੋ ਪ੍ਰਦਰਸ਼ਨ। ਕੋਈ ਨਿੱਜੀ ਆਧਾਰ ਡਾਟਾ ਸਟੋਰ ਨਹੀਂ ਕੀਤਾ ਜਾਂਦਾ।',

    hospitalFinderTitle: 'ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਹਸਪਤਾਲ ਲੱਭੋ',
    hospitalFinderDesc: 'ਸਾਰੇ ਸੂਚੀਬੱਧ ਹਸਪਤਾਲਾਂ ਵਿੱਚ ਮੁਫ਼ਤ ਕੈਸ਼ਲੈੱਸ ਇਲਾਜ ਉਪਲਬਧ ਹੈ।',
    filterByDistrict: 'ਜ਼ਿਲ੍ਹੇ ਅਨੁਸਾਰ ਦੇਖੋ',
    filterByType: 'ਹਸਪਤਾਲ ਦੀ ਕਿਸਮ',
    allTypes: 'ਸਾਰੇ ਹਸਪਤਾਲ (ਸਰਕਾਰੀ ਅਤੇ ਪ੍ਰਾਈਵੇਟ)',
    publicHospital: 'ਸਰਕਾਰੀ ਹਸਪਤਾਲ',
    privateHospital: 'ਪ੍ਰਾਈਵੇਟ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਹਸਪਤਾਲ',
    searchHospitalPlaceholder: 'ਹਸਪਤਾਲ ਦਾ ਨਾਮ ਜਾਂ ਬਿਮਾਰੀ (ਮੋਤੀਆਬਿੰਦ, ਦਿਲ, ਗੋਡਾ) ਲੱਭੋ...',
    callHospital: 'ਹਸਪਤਾਲ ਨੂੰ ਕਾਲ ਕਰੋ',
    getDirections: 'ਨਕਸ਼ਾ ਅਤੇ ਰਸਤਾ ਦੇਖੋ',
    specialtiesCovered: 'ਉਪਲਬਧ ਮੁੱਖ ਇਲਾਜ',
    pmjayDesk: 'ਆਯੁਸ਼ਮਾਨ ਮਿੱਤਰ ਸਹਾਇਤਾ ਡੈਸਕ',

    cardDownloadTitle: 'ਆਯੁਸ਼ਮਾਨ ਕਾਰਡ ਡਾਊਨਲੋਡ ਕਰੋ',
    cardDownloadDesc: 'ਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ੩ ਸਰਲ ਕਦਮ ਅਪਣਾਓ।',
    stepEnterDetails: '੧. ਵੇਰਵੇ ਦਰਜ ਕਰੋ',
    stepVerify: '੨. ਸਰਲ ਤਸਦੀਕ',
    stepPreview: '੩. ਕਾਰਡ ਦੇਖੋ',
    stepDownload: 'ਅਧਿਕਾਰਤ ਕਾਰਡ ਡਾਊਨਲੋਡ ਕਰੋ',
    downloadCardBtn: 'ਆਯੁਸ਼ਮਾਨ ਕਾਰਡ ਡਾਊਨਲੋਡ ਕਰੋ (PDF)',
    cardDownloadedNotice: 'ਤੁਹਾਡਾ ਕਾਰਡ ਡਾਊਨਲੋਡ ਹੋ ਗਿਆ ਹੈ।',

    benefitsTitle: 'ਆਯੁਸ਼ਮਾਨ ਭਾਰਤ ਸਿਹਤ ਲਾਭ',
    benefitsSubtitle: 'ਹਸਪਤਾਲ ਦਾਖਲੇ ਅਤੇ ਸਰਜਰੀ ਲਈ ਪੂਰੀ ਵਿੱਤੀ ਸੁਰੱਖਿਆ।',
    coverageAmount: 'ਪ੍ਰਤੀ ਪਰਿਵਾਰ ਸਾਲਾਨਾ ₹੫,੦੦,੦੦੦ ਦਾ ਮੁਫ਼ਤ ਇਲਾਜ',
    seniorSpecialNote: 'ਸੀਨੀਅਰ ਸਿਟੀਜ਼ਨਾਂ ਲਈ ਵਿਸ਼ੇਸ਼ ਤਰਜੀਹ ਅਤੇ ਹਸਪਤਾਲ ਵਿੱਚ ਆਯੁਸ਼ਮਾਨ ਮਿੱਤਰ ਸਹਾਇਤਾ।',
    cashlessTreatment: 'ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ੧੦੦% ਕੈਸ਼ਲੈੱਸ ਇਲਾਜ।',
    hospitalStaysIncluded: 'ਦਵਾਈਆਂ, ਡਾਕਟਰ ਫੀਸ, ਆਈਸੀਯੂ ਅਤੇ ਸਰਜਰੀ ਪੂਰੀ ਤਰ੍ਹਾਂ ਮੁਫ਼ਤ।',

    voiceAssistantTitle: 'ਆਯੁਸ਼ਮਾਨ ਵੌਇਸ ਅਸਿਸਟੈਂਟ',
    voiceAssistantPrompt: 'ਕੋਈ ਵੀ ਸਵਾਲ ਪੁੱਛੋ ਜਾਂ ਵਿਸ਼ਾ ਚੁਣੋ:',
    voiceListening: 'ਸੁਣ ਰਿਹਾ ਹੈ...',
    voiceSpeakNow: 'ਕਿਰਪਾ ਕਰਕੇ ਪੰਜਾਬੀ ਵਿੱਚ ਬੋਲੋ...',
    voiceClickToSpeak: 'ਬੋਲਣ ਲਈ ਦਬਾਓ',
    quickQuestions: 'ਸੀਨੀਅਰਜ਼ ਦੇ ਆਮ ਸਵਾਲ',
    assistantDefaultResponse: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਇੱਥੇ ਹਾਂ। ਤੁਸੀਂ ਯੋਗਤਾ ਚੈੱਕ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ ਹਸਪਤਾਲ ਲੱਭ ਸਕਦੇ ਹੋ।',

    guidedAssistantTitle: 'ਸੀਨੀਅਰ ਸਿਟੀਜ਼ਨ ਗਾਈਡ',
    guidedAssistantSubtitle: 'ਇੱਕ ਵਾਰ ਵਿੱਚ ਸਿਰਫ਼ ਇੱਕ ਸਰਲ ਸਵਾਲ ਦਾ ਜਵਾਬ ਦਿਓ।',
    stepQuestion1: 'ਅੱਜ ਤੁਸੀਂ ਕਿਸ ਕੰਮ ਵਿੱਚ ਮਦਦ ਚਾਹੁੰਦੇ ਹੋ?',
    stepQuestion2: 'ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਆਧਾਰ ਜਾਂ ਰਾਸ਼ਨ ਕਾਰਡ ਹੈ?',
    stepQuestion3: 'ਕੀ ਤੁਸੀਂ ਸਿੱਧਾ ਆਯੁਸ਼ਮਾਨ ਮਿੱਤਰ ਨਾਲ ਗੱਲ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?',
    choiceEligibility: 'ਯੋਗਤਾ ਚੈੱਕ ਕਰੋ',
    choiceCard: 'ਕਾਰਡ ਡਾਊਨਲੋਡ ਕਰੋ',
    choiceHospital: 'ਹਸਪਤਾਲ ਲੱਭੋ',
    choiceCallHelp: 'ਸਹਾਇਕ ਨਾਲ ਗੱਲ ਕਰੋ (14555)',
    yesHaveId: 'ਹਾਂ, ਮੇਰੇ ਕੋਲ ਕਾਰਡ ਹੈ',
    noNeedHelp: 'ਨਹੀਂ, ਕਾਰਡ ਤੋਂ ਬਿਨਾਂ ਗਾਈਡ ਕਰੋ',
  },
};

export function getTranslation(lang: LanguageCode): TranslationDictionary {
  return TRANSLATIONS[lang] || TRANSLATIONS.en;
}
