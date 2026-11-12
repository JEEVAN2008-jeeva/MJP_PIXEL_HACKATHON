export interface HospitalRecord {
  id: string;
  name: string;
  type: 'Government' | 'Private Empanelled';
  state: string;
  district: string;
  address: string;
  phone: string;
  emergencyPhone: string;
  ayushmanMitraName: string;
  ayushmanMitraContact: string;
  specialties: string[];
  bedsAvailable: number;
  rating: number;
  distanceKm?: number;
}

export const EMPANELLED_HOSPITALS: HospitalRecord[] = [
  {
    id: 'hosp-1',
    name: 'Victoria District Government Hospital & Medical College',
    type: 'Government',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    address: 'Fort Road, Near City Market, Kalasipalya, Bengaluru, Karnataka 560002',
    phone: '080-26701150',
    emergencyPhone: '108',
    ayushmanMitraName: 'Sri Raghavendra K. (Ayushman Helpdesk, Ground Floor)',
    ayushmanMitraContact: '98451 22345',
    specialties: ['Eye Surgery / Cataract', 'General Medicine', 'Cardiology & Heart Care', 'Knee & Joint Replacement', 'Emergency & ICU'],
    bedsAvailable: 84,
    rating: 4.8,
    distanceKm: 2.4,
  },
  {
    id: 'hosp-2',
    name: 'Sri Jayadeva Institute of Cardiovascular Sciences',
    type: 'Government',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    address: 'Bannerghatta Main Road, Jayanagar 9th Block, Bengaluru, Karnataka 560069',
    phone: '080-22977400',
    emergencyPhone: '080-22977456',
    ayushmanMitraName: 'Smt. Manjula Gowda (Dedicated Senior Desk)',
    ayushmanMitraContact: '94481 99820',
    specialties: ['Cardiology & Heart Care', 'Angioplasty & Bypass Surgery', 'Pacemaker Implantation', 'ICU Care'],
    bedsAvailable: 35,
    rating: 4.9,
    distanceKm: 4.1,
  },
  {
    id: 'hosp-3',
    name: 'Apollo Speciality Hospital (Empanelled Center)',
    type: 'Private Empanelled',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    address: '154/11, Opp. IIM-B, Bannerghatta Road, Bengaluru, Karnataka 560076',
    phone: '080-26304050',
    emergencyPhone: '1066',
    ayushmanMitraName: 'Mr. Pradeep Kumar (PM-JAY Reception Desk)',
    ayushmanMitraContact: '99002 44331',
    specialties: ['Orthopedics / Knee Replacement', 'Oncology & Cancer Care', 'Neurology', 'Eye & Cataract Microsurgery'],
    bedsAvailable: 22,
    rating: 4.7,
    distanceKm: 5.6,
  },
  {
    id: 'hosp-4',
    name: 'Bowring and Lady Curzon Super Speciality Hospital',
    type: 'Government',
    state: 'Karnataka',
    district: 'Bengaluru Urban',
    address: 'Lady Curzon Road, Shivaji Nagar, Bengaluru, Karnataka 560001',
    phone: '080-25591325',
    emergencyPhone: '080-25591326',
    ayushmanMitraName: 'Sri Suresh Babu (Ayushman Mitra Desk)',
    ayushmanMitraContact: '98800 11223',
    specialties: ['General Medicine', 'Dialysis & Kidney Care', 'Eye Surgery', 'Geriatric Senior Clinic'],
    bedsAvailable: 48,
    rating: 4.6,
    distanceKm: 3.2,
  },
  {
    id: 'hosp-5',
    name: 'All India Institute of Medical Sciences (AIIMS)',
    type: 'Government',
    state: 'Delhi (NCT)',
    district: 'New Delhi',
    address: 'Sri Aurobindo Marg, Ansari Nagar, New Delhi 110029',
    phone: '011-26588500',
    emergencyPhone: '011-26593677',
    ayushmanMitraName: 'Dr. Rakesh Meena (PM-JAY Facilitation Center)',
    ayushmanMitraContact: '011-26593450',
    specialties: ['Comprehensive Heart Care', 'Knee & Hip Replacement', 'Eye / Cataract', 'Oncology', 'Neurology'],
    bedsAvailable: 110,
    rating: 4.9,
    distanceKm: 1.8,
  },
  {
    id: 'hosp-6',
    name: 'King Edward Memorial (KEM) Hospital & Medical College',
    type: 'Government',
    state: 'Maharashtra',
    district: 'Mumbai City',
    address: 'Acharya Donde Marg, Parel, Mumbai, Maharashtra 400012',
    phone: '022-24107000',
    emergencyPhone: '022-24136051',
    ayushmanMitraName: 'Shri Deepak Sawant (Ayushman Mitra Main Hall)',
    ayushmanMitraContact: '98201 55432',
    specialties: ['Cardiology', 'General Surgery', 'Dialysis', 'Senior Citizen Geriatric Wing', 'Eye Care'],
    bedsAvailable: 72,
    rating: 4.8,
    distanceKm: 3.5,
  },
  {
    id: 'hosp-7',
    name: 'Rajiv Gandhi Government General Hospital',
    type: 'Government',
    state: 'Tamil Nadu',
    district: 'Chennai',
    address: 'EVR Periyar Salai, Park Town, Chennai, Tamil Nadu 600003',
    phone: '044-25305000',
    emergencyPhone: '108',
    ayushmanMitraName: 'Mr. S. Karthik (PM-JAY Helpdesk Counter 4)',
    ayushmanMitraContact: '94440 66789',
    specialties: ['Heart Care', 'Orthopedic Surgeries', 'Kidney Care & Dialysis', 'Eye & Cataract', 'Cancer Treatment'],
    bedsAvailable: 95,
    rating: 4.8,
    distanceKm: 2.9,
  },
  {
    id: 'hosp-8',
    name: 'Civil Hospital & B.J. Medical College',
    type: 'Government',
    state: 'Gujarat',
    district: 'Ahmedabad',
    address: 'Asarwa, Ahmedabad, Gujarat 380016',
    phone: '079-22683721',
    emergencyPhone: '108',
    ayushmanMitraName: 'Shri Hasmukh Patel (Ayushman Mitra Entrance)',
    ayushmanMitraContact: '98790 33211',
    specialties: ['General Medicine', 'Heart Surgeries', 'Eye Clinic', 'Orthopedics', 'Dialysis'],
    bedsAvailable: 80,
    rating: 4.7,
    distanceKm: 3.0,
  },
];

/**
 * Pure search function
 */
export function searchHospitals(
  hospitals: HospitalRecord[],
  query: string,
  stateFilter: string,
  typeFilter: 'all' | 'Government' | 'Private Empanelled'
): HospitalRecord[] {
  const q = query.trim().toLowerCase();

  return hospitals.filter((h) => {
    // State match
    if (stateFilter && stateFilter !== 'all' && h.state !== stateFilter) {
      return false;
    }

    // Type match
    if (typeFilter !== 'all' && h.type !== typeFilter) {
      return false;
    }

    // Query match across name, address, district, specialties
    if (!q) return true;

    const matchesName = h.name.toLowerCase().includes(q);
    const matchesDistrict = h.district.toLowerCase().includes(q);
    const matchesAddress = h.address.toLowerCase().includes(q);
    const matchesSpecialty = h.specialties.some((s) => s.toLowerCase().includes(q));

    return matchesName || matchesDistrict || matchesAddress || matchesSpecialty;
  });
}
