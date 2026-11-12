import { LanguageCode, SUPPORTED_LANGUAGES } from './translations';

export class SpeechService {
  private static synth: SpeechSynthesis | null = typeof window !== 'undefined' ? window.speechSynthesis : null;
  private static currentUtterance: SpeechSynthesisUtterance | null = null;
  private static recognition: any = null;

  public static isSpeechSynthesisSupported(): boolean {
    return typeof window !== 'undefined' && 'speechSynthesis' in window;
  }

  public static isSpeechRecognitionSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  }

  public static stopSpeaking(): void {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch {
        // Safe fallback
      }
    }
  }

  public static speak(
    text: string,
    lang: LanguageCode,
    onStart?: () => void,
    onEnd?: () => void
  ): void {
    if (!this.synth) {
      if (onEnd) onEnd();
      return;
    }

    try {
      this.synth.cancel();

      const langInfo = SUPPORTED_LANGUAGES.find((l) => l.code === lang);
      const targetLocale = langInfo?.speechLocale || 'en-IN';

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = targetLocale;
      utterance.rate = 0.9; // Slightly slower, calm cadence for seniors
      utterance.pitch = 1.0;

      // Try finding preferred voice
      const voices = this.synth.getVoices();
      const matchedVoice = voices.find(
        (v) => v.lang === targetLocale || v.lang.startsWith(targetLocale.split('-')[0])
      );
      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }

      utterance.onstart = () => {
        if (onStart) onStart();
      };
      utterance.onend = () => {
        if (onEnd) onEnd();
      };
      utterance.onerror = () => {
        if (onEnd) onEnd();
      };

      this.currentUtterance = utterance;
      this.synth.speak(utterance);
    } catch {
      if (onEnd) onEnd();
    }
  }

  public static startListening(
    lang: LanguageCode,
    onResult: (transcript: string) => void,
    onError: (error: string) => void,
    onEnd: () => void
  ): { stop: () => void } {
    if (!this.isSpeechRecognitionSupported()) {
      onError('Voice recognition is not supported in this browser.');
      onEnd();
      return { stop: () => {} };
    }

    try {
      const SpeechRecognitionClass =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognizer = new SpeechRecognitionClass();

      const langInfo = SUPPORTED_LANGUAGES.find((l) => l.code === lang);
      recognizer.lang = langInfo?.speechLocale || 'en-IN';
      recognizer.continuous = false;
      recognizer.interimResults = false;

      recognizer.onresult = (event: any) => {
        const transcript = event.results[0]?.[0]?.transcript || '';
        onResult(transcript);
      };

      recognizer.onerror = (event: any) => {
        onError(event.error || 'Could not understand audio.');
      };

      recognizer.onend = () => {
        onEnd();
      };

      recognizer.start();
      this.recognition = recognizer;

      return {
        stop: () => {
          try {
            recognizer.stop();
          } catch {
            // ignore
          }
        },
      };
    } catch (err: any) {
      onError(err?.message || 'Could not start microphone.');
      onEnd();
      return { stop: () => {} };
    }
  }
}
