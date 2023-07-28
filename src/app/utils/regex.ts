export const regex = {
    charPattern: '[A-Za-zŽžÀ-ÖØ-Ýà-öø-ÿ ]*$',
    numberPattern: '^(0|[1-9][0-9]*)$',
    emailPattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
    rgPattern: '[0-9.]{10}-[0-9Xx]{1}',
    cpfPattern: '^[0-9.]{11}-[0-9]{2}$',
    phonePattern: '^[+[0-9]{2}][(][0-9]{2}[)][ ]?[9]?[0-9]{4}[-]?[0-9]{4}$',
    postalCodePattern: '^[0-9-]{9}$',
    requiresUppercase: '(?=.*[A-Z])',
    requiresLowercase: '(?=.*[a-z])',
    requiresSpecialChars: '(?=.*[#$@^!%*?&])',
    requiresDigit: '(?=.*[0-9])',
  };