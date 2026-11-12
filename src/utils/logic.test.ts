import test from 'node:test';
import assert from 'node:assert/strict';
import { SUPPORTED_LANGUAGES, getTranslation, LanguageCode } from './translations';
import { evaluateEligibility, cleanIdInput } from './eligibility';
import { EMPANELLED_HOSPITALS, searchHospitals } from './hospitals';
import { processSeniorVoiceQuery } from './voiceAssistant';

test('translations contains all 10 Indian languages with native scripts', () => {
  assert.equal(SUPPORTED_LANGUAGES.length, 10);
  const codes = SUPPORTED_LANGUAGES.map((l) => l.code);
  const expectedCodes: LanguageCode[] = ['en', 'hi', 'kn', 'ta', 'te', 'ml', 'bn', 'mr', 'gu', 'pa'];

  for (const exp of expectedCodes) {
    assert.ok(codes.includes(exp), `Language ${exp} should be supported`);
    const dict = getTranslation(exp);
    assert.ok(dict.portalTitle.length > 0, `${exp} should have portalTitle`);
    assert.ok(dict.checkEligibilityTitle.length > 0, `${exp} should have eligibility title`);
    assert.ok(dict.downloadCardTitle.length > 0, `${exp} should have download card title`);
    assert.ok(dict.findHospitalTitle.length > 0, `${exp} should have find hospital title`);
  }
});

test('cleanIdInput cleans non-alphanumeric characters', () => {
  assert.equal(cleanIdInput('9876-5432-1098'), '987654321098');
  assert.equal(cleanIdInput(' KA 123 456 '), 'KA123456');
});

test('evaluateEligibility handles missing or invalid details', () => {
  const result = evaluateEligibility('', 'aadhaar', '');
  assert.equal(result.isEligible, false);
  assert.ok(result.errorMessage);

  const notFoundResult = evaluateEligibility('Karnataka', 'aadhaar', '000000000000');
  assert.equal(notFoundResult.isEligible, false);
  assert.match(notFoundResult.errorMessage || '', /could not find your details/i);
});

test('evaluateEligibility successfully validates and outputs family coverage', () => {
  const result = evaluateEligibility('Karnataka', 'aadhaar', '987654321098', '9845100000');
  assert.equal(result.isEligible, true);
  assert.ok(result.pmjayId?.startsWith('PMJAY-KA-'));
  assert.equal(result.familyMembers?.length, 4);
  assert.match(result.annualCoverage || '', /5,00,000/);
});

test('searchHospitals filters correctly by state, type, and keyword', () => {
  const karnatakaGovt = searchHospitals(EMPANELLED_HOSPITALS, '', 'Karnataka', 'Government');
  assert.ok(karnatakaGovt.length >= 2);
  karnatakaGovt.forEach((h) => {
    assert.equal(h.state, 'Karnataka');
    assert.equal(h.type, 'Government');
  });

  const cataractHospitals = searchHospitals(EMPANELLED_HOSPITALS, 'Cataract', 'all', 'all');
  assert.ok(cataractHospitals.length > 0);
  cataractHospitals.forEach((h) => {
    const hasCataract = h.specialties.some((s) => s.toLowerCase().includes('cataract'));
    assert.ok(hasCataract);
  });
});

test('processSeniorVoiceQuery matches Kannada and English intents', () => {
  // Test Kannada question from prompt
  const knResponse = processSeniorVoiceQuery('ನನ್ನ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಹೇಗೆ ಪಡೆಯುವುದು?', 'kn');
  assert.equal(knResponse.recommendedAction, 'card');
  assert.ok(knResponse.spokenText.includes('ನಿಮ್ಮ ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಪಡೆಯಲು'));

  // Test English queries
  const enCard = processSeniorVoiceQuery('How to download my Ayushman card?', 'en');
  assert.equal(enCard.recommendedAction, 'card');

  const enHosp = processSeniorVoiceQuery('Find a hospital for heart surgery', 'en');
  assert.equal(enHosp.recommendedAction, 'hospital');

  const enMoney = processSeniorVoiceQuery('How much money do we get in Ayushman?', 'en');
  assert.equal(enMoney.recommendedAction, 'benefits');
});
