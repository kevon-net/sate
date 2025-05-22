import { BASE_URL } from '@/data/constants';

const imageUrl = `${BASE_URL}/images`;
const iconUrl = `https://img.icons8.com`;

export const images = {
  brand: {
    icon: {
      default: `${imageUrl}/brand/icon/default.png`,
      meta: `${imageUrl}/brand/icon/meta.png`,
    },

    logo: {
      default: {
        light: `${imageUrl}/brand/logo/default/light.png`,
        dark: `${imageUrl}/brand/logo/default/dark.png`,
      },
      meta: {
        light: `${imageUrl}/brand/logo/meta/light.png`,
        dark: `${imageUrl}/brand/logo/meta/dark.png`,
      },
    },
  },

  icons: {
    social: {
      facebook: `${iconUrl}/?size=100&id=13912&format=png&color=000000`,
      instagram: `${iconUrl}/?size=100&id=32323&format=png&color=000000`,
      twitterx: `${iconUrl}/?size=100&id=ClbD5JTFM7FA&format=png&color=000000`,
      linkedin: `${iconUrl}/?size=100&id=13930&format=png&color=000000`,
      whatsapp: `${iconUrl}/?size=100&id=16713&format=png&color=000000`,
    },

    google: `${iconUrl}/?size=100&id=17949&format=png&color=000000`,
    credentials: `${iconUrl}/?size=100&id=jicLxt1sA2qa&format=png&color=000000`,
  },
};
