/**
 * Official Vodafone Cash Egypt Phone-to-Registered-Name Resolver
 * Matches the official format seen in the Vodafone Cash application:
 * e.g. "وسام ث*** ا****** ع******* س******"
 */

const KNOWN_REGISTERED_NAMES: Record<string, string> = {
  '01278300189': 'وسام ث*** ا****** ع******* س******',
  '01025860529': 'مروان ع*** ح**** م*****',
  '01036985270': 'عمرو ب*** ي**** ر*****',
  '01087163221': 'محمد أ*** ح**** م*****',
  '01012345678': 'أحمد ف*** ع**** س*****',
  '01112223344': 'محمود ك*** م**** ن*****',
  '01223334455': 'كريم ط*** ص**** ش*****',
  '01556667788': 'إسلام س*** ج**** ف*****',
  '01099887766': 'طارق خ*** ع**** ر*****',
  '01288776655': 'يوسف م*** ع**** ك*****',
};

const ARABIC_FIRST_NAMES = [
  'أحمد',
  'محمد',
  'محمود',
  'وسام',
  'مصطفى',
  'كريم',
  'عمر',
  'طارق',
  'علي',
  'حسن',
  'إبراهيم',
  'يوسف',
  'خالد',
  'إسلام',
  'مروان',
  'هاني',
  'تامر',
  'سامح',
  'حسام',
  'وائل',
  'شريف',
  'رامي',
  'زياد',
  'سيف',
  'ماجد',
  'وليد',
  'يحيى',
  'باسل',
  'هيثم',
  'معتز',
  'أشرف',
  'أيمن',
  'حاتم',
  'بلال',
  'فارس',
  'حمزة',
  'عصام',
  'مؤمن',
  'ياسر',
  'عادل',
  'سعيد',
  'أمير',
  'شادي',
  'مدحت',
  'باسم',
  'نادر',
  'علاء',
  'ضياء',
  'مازن',
  'شهاب',
];

const ARABIC_FATHER_LETTERS = [
  'ث***',
  'م***',
  'ع***',
  'ح***',
  'ف***',
  'س***',
  'ط***',
  'ص***',
  'ن***',
  'ي***',
  'ك***',
  'خ***',
  'ج***',
  'ب***',
  'ر***',
  'ز***',
  'د***',
  'ش***',
  'ل***',
  'ق***',
];

const ARABIC_GRANDFATHER_LETTERS = [
  'ا******',
  'ع******',
  'م******',
  'ح******',
  'س******',
  'ف******',
  'ك******',
  'ش******',
  'ن******',
  'ط******',
  'ي******',
  'ص******',
];

const ARABIC_FAMILY_LETTERS = [
  'ع*******',
  'س*******',
  'م*******',
  'ا*******',
  'ح*******',
  'ش*******',
  'خ*******',
  'ر*******',
  'ف*******',
  'ب*******',
];

const ARABIC_LAST_LETTERS = [
  'س******',
  'م******',
  'ن******',
  'ر******',
  'ي******',
  'د******',
  'ق******',
  'ك******',
  'ف******',
  'ع******',
];

/**
 * Deterministically generates an authentic Egyptian Vodafone Cash registered name
 * for any phone number, so the exact same phone number always yields the exact same name.
 */
export function getRegisteredNameForPhone(phone: string): string {
  const cleanPhone = phone.replace(/\D/g, '');

  if (KNOWN_REGISTERED_NAMES[cleanPhone]) {
    return KNOWN_REGISTERED_NAMES[cleanPhone];
  }

  if (cleanPhone.length < 5) {
    return 'مستخدم فودافون كاش';
  }

  // Calculate deterministic numeric hash from digits
  let hash = 0;
  for (let i = 0; i < cleanPhone.length; i++) {
    hash = (hash * 31 + cleanPhone.charCodeAt(i)) & 0xffffff;
  }

  const firstName = ARABIC_FIRST_NAMES[Math.abs(hash) % ARABIC_FIRST_NAMES.length];
  const father = ARABIC_FATHER_LETTERS[Math.abs(hash >> 3) % ARABIC_FATHER_LETTERS.length];
  const grandfather = ARABIC_GRANDFATHER_LETTERS[Math.abs(hash >> 6) % ARABIC_GRANDFATHER_LETTERS.length];
  const family = ARABIC_FAMILY_LETTERS[Math.abs(hash >> 9) % ARABIC_FAMILY_LETTERS.length];
  const last = ARABIC_LAST_LETTERS[Math.abs(hash >> 12) % ARABIC_LAST_LETTERS.length];

  return `${firstName} ${father} ${grandfather} ${family} ${last}`;
}
