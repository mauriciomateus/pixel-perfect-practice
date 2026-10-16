import { Quicksand } from 'next/font/google';
import localFont from 'next/font/local'


export const quicksand=Quicksand({weight: '700' });
export const latoSemibold= localFont({
  variable: "--font-lato",
  src: '/app/fonts/Lato-SemiBold.ttf'
});


export const latoLight= localFont({
  variable: "--font-lato",
  src: '/app/fonts/Lato-Light.ttf'
});

export const latoBold= localFont({
  variable: "--font-lato",
  src: '/app/fonts/Lato-Bold.ttf'
});

export const supremaSemibold=localFont({
    variable: "--font-suprema-semibold",
  src: '/app/fonts/Suprema-SemiBold.ttf'
})


export const supremaRegular=localFont({
    variable: "--font-suprema-regular",
  src: '/app/fonts/Suprema-Regular.ttf'
})