import { LanguageCode } from './translations';

export interface AssistantResponse {
  spokenText: string;
  displayText: string;
  recommendedAction?: 'eligibility' | 'hospital' | 'card' | 'benefits' | 'help';
  actionLabel?: string;
}

export function processSeniorVoiceQuery(
  rawQuery: string,
  lang: LanguageCode
): AssistantResponse {
  const q = rawQuery.trim().toLowerCase();

  // 1. Kannada specific matching (as requested in prompt)
  if (q.includes('ಕಾರ್ಡ್') || q.includes('ಪಡೆಯುವುದು') || q.includes('card') && lang === 'kn') {
    return {
      spokenText: 'ನಿಮ್ಮ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಪಡೆಯಲು, ಮೊದಲು ನಿಮ್ಮ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ. ನಾವು ನಿಮಗೆ ಹಂತ ಹಂತವಾಗಿ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
      displayText: 'ನಿಮ್ಮ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಪಡೆಯಲು, ಮೊದಲು ನಿಮ್ಮ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ. ನಾವು ನಿಮಗೆ ಹಂತ ಹಂತವಾಗಿ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
      recommendedAction: 'card',
      actionLabel: 'ಕಾರ್ಡ್ ಡೌನ್‌ಲೋಡ್ ಪುಟಕ್ಕೆ ಹೋಗಿ',
    };
  }

  if (q.includes('ಆಸ್ಪತ್ರೆ') || q.includes('hospital') && lang === 'kn') {
    return {
      spokenText: 'ನಿಮ್ಮ ಹತ್ತಿರದ ಆಯುಷ್ಮಾನ್ ನೋಂದಾಯಿತ ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಲು ನಾವು ನೆರವಾಗುತ್ತೇವೆ.',
      displayText: 'ನಿಮ್ಮ ಹತ್ತಿರದ ಆಯುಷ್ಮಾನ್ ನೋಂದಾಯಿತ ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಲು ನಾವು ನೆರವಾಗುತ್ತೇವೆ.',
      recommendedAction: 'hospital',
      actionLabel: 'ಆಸ್ಪತ್ರೆ ಹುಡುಕಿ',
    };
  }

  // 2. Hindi queries
  if (q.includes('कार्ड') || q.includes('डाउनलोड') || (q.includes('card') && lang === 'hi')) {
    return {
      spokenText: 'आयुष्मान कार्ड प्राप्त करने के लिए आप यहाँ सत्यापन करके सीधे कार्ड डाउनलोड कर सकते हैं।',
      displayText: 'आयुष्मान कार्ड प्राप्त करने के लिए आप यहाँ सत्यापन करके सीधे कार्ड डाउनलोड कर सकते हैं।',
      recommendedAction: 'card',
      actionLabel: 'आयुष्मान कार्ड डाउनलोड करें',
    };
  }

  if (q.includes('अस्पताल') || q.includes('इलाज') || q.includes('मोतियाबिंद') || q.includes('हॉस्पिटल')) {
    return {
      spokenText: 'मान्यता प्राप्त अस्पतालों में मोतियाबिंद, हृदय और घुटने की सर्जरी सहित सभी इलाज पूरी तरह मुफ्त हैं।',
      displayText: 'मान्यता प्राप्त अस्पतालों में मोतियाबिंद, हृदय और घुटने की सर्जरी सहित सभी इलाज पूरी तरह मुफ्त हैं।',
      recommendedAction: 'hospital',
      actionLabel: 'नजदीकी अस्पताल खोजें',
    };
  }

  if (q.includes('कितना') || q.includes('पैसा') || q.includes('लाभ') || q.includes('रुपए')) {
    return {
      spokenText: 'आयुष्मान भारत के तहत प्रत्येक पात्र परिवार को प्रति वर्ष ₹5 लाख का मुफ्त कैशलेस इलाज मिलता है।',
      displayText: 'आयुष्मान भारत के तहत प्रत्येक पात्र परिवार को प्रति वर्ष ₹5,00,000 का मुफ्त कैशलेस इलाज मिलता है।',
      recommendedAction: 'benefits',
      actionLabel: 'स्वास्थ्य लाभ देखें',
    };
  }

  // 3. English queries
  if (q.includes('card') || q.includes('download')) {
    return {
      spokenText: 'To download your Ayushman card, simply verify your details. Let me take you to the download card screen.',
      displayText: 'To download your Ayushman card, simply verify your details. Let me take you to the download card screen.',
      recommendedAction: 'card',
      actionLabel: 'Go to Download Card',
    };
  }

  if (q.includes('hospital') || q.includes('doctor') || q.includes('clinic') || q.includes('cataract') || q.includes('surgery')) {
    return {
      spokenText: 'Under PM-JAY, all empanelled hospitals offer 100% free cashless treatment. Let us find a hospital near you.',
      displayText: 'Under PM-JAY, all empanelled hospitals offer 100% free cashless treatment. Let us find a hospital near you.',
      recommendedAction: 'hospital',
      actionLabel: 'Search Hospitals',
    };
  }

  if (q.includes('eligible') || q.includes('check') || q.includes('eligibility') || q.includes('aadhaar')) {
    return {
      spokenText: 'You can check your family eligibility right now using your state and identity number.',
      displayText: 'You can check your family eligibility right now using your state and identity number.',
      recommendedAction: 'eligibility',
      actionLabel: 'Check Eligibility Now',
    };
  }

  if (q.includes('money') || q.includes('cover') || q.includes('amount') || q.includes('benefit') || q.includes('5 lakh')) {
    return {
      spokenText: 'PM-JAY provides up to 5 Lakh Rupees per family every year for hospitalization, medicines, and surgeries completely free.',
      displayText: 'PM-JAY provides up to ₹5,00,000 per family every year for hospitalization, medicines, and surgeries completely free.',
      recommendedAction: 'benefits',
      actionLabel: 'View Full Benefits',
    };
  }

  if (q.includes('help') || q.includes('phone') || q.includes('call') || q.includes('mitra') || q.includes('14555')) {
    return {
      spokenText: 'You can call the official 24x7 toll-free helpline at 14555 for immediate human support in your language.',
      displayText: 'You can call the official 24x7 toll-free helpline at 14555 for immediate human support in your language.',
      recommendedAction: 'help',
      actionLabel: 'Open Help & Support',
    };
  }

  // Default multilingual fallback
  const defaultResponses: Record<LanguageCode, AssistantResponse> = {
    en: {
      spokenText: 'I am here to help you. You can check your eligibility, find a nearby hospital, or download your Ayushman card.',
      displayText: 'I am here to help you. You can check your eligibility, find a nearby hospital, or download your Ayushman card.',
      recommendedAction: 'eligibility',
      actionLabel: 'Check Eligibility',
    },
    hi: {
      spokenText: 'नमस्ते! मैं आपकी सहायता के लिए तैयार हूँ। आप अपनी पात्रता जांच सकते हैं, अस्पताल खोज सकते हैं, या कार्ड डाउनलोड कर सकते हैं।',
      displayText: 'नमस्ते! मैं आपकी सहायता के लिए तैयार हूँ। आप अपनी पात्रता जांच सकते हैं, अस्पताल खोज सकते हैं, या कार्ड डाउनलोड कर सकते हैं।',
      recommendedAction: 'eligibility',
      actionLabel: 'पात्रता जांचें',
    },
    kn: {
      spokenText: 'ನಮಸ್ಕಾರ! ನಿಮ್ಮ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಪಡೆಯಲು, ಮೊದಲು ನಿಮ್ಮ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ. ನಾವು ನಿಮಗೆ ಹಂತ ಹಂತವಾಗಿ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
      displayText: 'ನಮಸ್ಕಾರ! ನಿಮ್ಮ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಪಡೆಯಲು, ಮೊದಲು ನಿಮ್ಮ ಅರ್ಹತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ. ನಾವು ನಿಮಗೆ ಹಂತ ಹಂತವಾಗಿ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
      recommendedAction: 'eligibility',
      actionLabel: 'ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ',
    },
    ta: {
      spokenText: 'வணக்கம்! நான் உங்களுக்கு உதவ தயாராக உள்ளேன். தகுதியை சரிபார்க்கலாம் அல்லது மருத்துவமனை தேடலாம்.',
      displayText: 'வணக்கம்! நான் உங்களுக்கு உதவ தயாராக உள்ளேன். தகுதியை சரிபார்க்கலாம் அல்லது மருத்துவமனை தேடலாம்.',
      recommendedAction: 'eligibility',
      actionLabel: 'தகுதியை சரிபார்க்கவும்',
    },
    te: {
      spokenText: 'నమస్కారం! నేను మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నాను. అర్హత తనిఖీ చేయండి లేదా ఆసుపత్రులను కనుగొనండి.',
      displayText: 'నమస్కారం! నేను మీకు సహాయం చేయడానికి సిద్ధంగా ఉన్నాను. అర్హత తనిਖీ చేయండి లేదా ఆసుపత్రులను కనుగొనండి.',
      recommendedAction: 'eligibility',
      actionLabel: 'అర్హతను తనిఖీ చేయండి',
    },
    ml: {
      spokenText: 'നമസ്കാരം! ഞാൻ നിങ്ങളെ സഹായിക്കാൻ ഇവിടെയുണ്ട്. യോഗ്യത പരിശോധിക്കുകയോ ആശുപത്രി കണ്ടെത്തുകയോ ചെയ്യാം.',
      displayText: 'നമസ്കാരം! ഞാൻ നിങ്ങളെ സഹായിക്കാൻ ഇവിടെയുണ്ട്. യോഗ്യത പരിശോധിക്കുകയോ ആശുപത്രി കണ്ടെത്തുകയോ ചെയ്യാം.',
      recommendedAction: 'eligibility',
      actionLabel: 'യോഗ്യത പരിശോധിക്കുക',
    },
    bn: {
      spokenText: 'নমস্কার! আমি আপনাকে সাহায্য করতে এখানে আছি। আপনি কীভাবে সাহায্য চান?',
      displayText: 'নমস্কার! আমি আপনাকে সাহায্য করতে এখানে আছি। আপনি কীভাবে সাহায্য চান?',
      recommendedAction: 'eligibility',
      actionLabel: 'যোগ্যতা পরীক্ষা করুন',
    },
    mr: {
      spokenText: 'नमस्ते! मी तुम्हाला मदत करण्यासाठी येथे आहे. आपण पात्रता तपासू शकता किंवा रुग्णालय शोधू शकता.',
      displayText: 'नमस्ते! मी तुम्हाला मदत करण्यासाठी येथे आहे. आपण पात्रता तपासू शकता किंवा रुग्णालय शोधू शकता.',
      recommendedAction: 'eligibility',
      actionLabel: 'पात्रता तपासा',
    },
    gu: {
      spokenText: 'નમસ્તે! હું તમારી સહાય માટે અહીં છું. તમે પાત્રતા તપાસી શકો છો કે હોસ્પિટલ શોધી શકો છો.',
      displayText: 'નમસ્તે! હું તમારી સહાય માટે અહીં છું. તમે પાત્રતા તપાસી શકો છો કે હોસ્પિટલ શોધી શકો છો.',
      recommendedAction: 'eligibility',
      actionLabel: 'પાત્રતા તપાસો',
    },
    pa: {
      spokenText: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਇੱਥੇ ਹਾਂ। ਤੁਸੀਂ ਯੋਗਤਾ ਚੈੱਕ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ ਹਸਪਤਾਲ ਲੱਭ ਸਕਦੇ ਹੋ।',
      displayText: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਇੱਥੇ ਹਾਂ। ਤੁਸੀਂ ਯੋਗਤਾ ਚੈੱਕ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ ਹਸਪਤਾਲ ਲੱਭ ਸਕਦੇ ਹੋ।',
      recommendedAction: 'eligibility',
      actionLabel: 'ਯੋਗਤਾ ਚੈੱਕ ਕਰੋ',
    },
  };

  return defaultResponses[lang] || defaultResponses.en;
}
