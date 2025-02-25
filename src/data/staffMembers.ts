import { TFunction } from "i18next";

  export const getStaffData = (t: TFunction): StaffMember[] => [
    {
      name: 'Lena Franzz',
      avatar: '/images/avatar-lena.webp',
      description: t('about-lena'),
      linkedin: 'https://www.linkedin.com/in/lenafranzz/'
    },
    {
      name: 'Luiza Ferraz',
      avatar: '/images/avatar-luiza.webp',
      description: t('about-luiza'),
      linkedin: 'https://www.linkedin.com/in/luizaferrazz/'
    },
    {
      name: 'Priscila Vilas Boas',
      avatar: '/images/avatar-priscila.webp',
      description: t('about-priscila'),
      linkedin: 'https://www.linkedin.com/in/priscila-vilas-boas-production/'
    }
  ]
