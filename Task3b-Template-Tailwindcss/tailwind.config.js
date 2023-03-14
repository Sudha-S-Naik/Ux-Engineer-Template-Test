module.exports = {
  content: [
      './public/*.html',
      './public/*.js',
  ],
  theme: {
      fontFamily: {
          semibold: ['SemiBold', 'Outfit'],
          bold: ['Bold', 'Outfit'],
          light: ['Light', 'Outfit'],
          extrabold: ['ExtraBold', 'Outfit'],
          extralight: ['ExtraLight', 'Outfit'],
          medium: ['Medium', 'Outfit'],
          normal: ['Regular', 'Outfit'],
          thin: ['Thin', 'Outfit'],
      },
      extend: {
          fontSize: {
              xs1: ['15px', '19px'],
              xs2: ['28px', '24px'],
              xs3: ['13px', '16px'],
              xs4: ['22px', '28px'],
              xs5: ['17px', '22px'],
              xs6: ['19px', '24px'],
              xs7: ['11px', '15px'],
              xs8: ['10px', '13px'],
              xs9: ['16px', '21px'],
              xs10: ['29px', '34px'],
              xs11: ['50px', '55px'],
              xs12: ['40px', '45px'],
          },
          boxShadow: {
              's1': '0px 24px 48px #00000029',
              's2': '0px 3px 6px #A85C0026',
              's3': '0px 3px 6px #00000029',
              's4': '0px 12px 24px #00000029',
          },
          maxWidth: {
              'container': '1280px',
          },
      },
  },
  plugins: [
      require('tw-elements/dist/plugin'),
  ],
};
