import { COLORS, FONTS, genericStyles } from '../constant';

const renderToast = (
  toast: any,
  msg: string,
  type: string,
  duration = 2000,
) => {
  toast?.hideAll();
  return toast?.show(msg, {
    type: type ?? 'normal',
    placement: 'bottom',
    duration: duration ?? 2500,
    offset: 30,
    textStyle: [FONTS.CaudexBold, { color: COLORS.black }],
    animationType: 'slide-in',

    // 🎨 colors
    normalColor: COLORS.backgroundColor,
    successColor: COLORS.backgroundColor,
    dangerColor: COLORS.backgroundColor,
    warningColor: COLORS.secondary,
    primaryColor: '#F0F0F0', // ✅ your primary color
  });
};

export default renderToast;
