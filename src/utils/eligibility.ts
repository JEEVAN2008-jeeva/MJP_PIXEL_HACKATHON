export interface BeneficiaryMember {
  name: string;
  relation: string;
  age: number;
  gender: string;
  status: 'Eligible' | 'Verified';
}

export interface EligibilityResult {
  isEligible: boolean;
  pmjayId?: string;
  beneficiaryName?: string;
  headOfFamily?: string;
  state?: string;
  district?: string;
  annualCoverage?: string;
  familyMembers?: BeneficiaryMember[];
  category?: string;
  remarks?: string;
  errorMessage?: string;
}

export const INDIAN_STATES = [
  'Karnataka',
  'Maharashtra',
  'Uttar Pradesh',
  'Tamil Nadu',
  'Delhi (NCT)',
  'Gujarat',
  'West Bengal',
  'Kerala',
  'Andhra Pradesh',
  'Punjab',
  'Rajasthan',
  'Madhya Pradesh',
  'Bihar',
  'Odisha',
  'Haryana',
  'Assam',
];

export const ID_TYPES = [
  { id: 'aadhaar', label: 'Aadhaar Card Number (12 Digits)' },
  { id: 'ration', label: 'Ration Card Number (NFSA / State)' },
  { id: 'pmjay', label: 'Existing PM-JAY / ABHA ID' },
  { id: 'mobile', label: 'Registered Mobile Number' },
];

/**
 * Pure function: validate and sanitize ID input
 */
export function cleanIdInput(raw: string): string {
  return raw.replace(/[^0-9a-zA-Z]/g, '').trim();
}

/**
 * Pure function to evaluate mock eligibility deterministically
 */
export function evaluateEligibility(
  state: string,
  idType: string,
  idNumber: string,
  mobileNumber?: string
): EligibilityResult {
  const cleanedId = cleanIdInput(idNumber);

  if (!state || cleanedId.length < 4) {
    return {
      isEligible: false,
      errorMessage: 'Please enter valid identification details and select a state.',
    };
  }

  // Simulated condition for not-found case:
  if (cleanedId.includes('0000') || cleanedId === '1111') {
    return {
      isEligible: false,
      errorMessage: 'We could not find your details in the PM-JAY beneficiary database. Please check your information or contact 14555.',
    };
  }

  // Generate realistic verified result
  const seedNum = cleanedId.slice(-4).padStart(4, '7');
  const shortStateCode = state.slice(0, 2).toUpperCase();

  return {
    isEligible: true,
    pmjayId: `PMJAY-${shortStateCode}-2024-${seedNum}981`,
    beneficiaryName: 'Rameshwar Prasad Sharma',
    headOfFamily: 'Rameshwar Prasad Sharma (Self - Senior Citizen, Age 68)',
    state: state,
    district: `${state} Central District`,
    annualCoverage: '₹5,00,000 / Year (100% Cashless)',
    category: 'Senior Citizen Healthcare Priority (Ayushman Vayoshri)',
    familyMembers: [
      { name: 'Rameshwar Prasad Sharma', relation: 'Self (Head)', age: 68, gender: 'Male', status: 'Verified' },
      { name: 'Savitri Devi Sharma', relation: 'Spouse', age: 64, gender: 'Female', status: 'Verified' },
      { name: 'Anil Kumar Sharma', relation: 'Son', age: 41, gender: 'Male', status: 'Eligible' },
      { name: 'Sunita Sharma', relation: 'Daughter-in-law', age: 38, gender: 'Female', status: 'Eligible' },
    ],
    remarks: 'Your family is fully verified and covered for cashless hospitalization across all empanelled hospitals.',
  };
}
