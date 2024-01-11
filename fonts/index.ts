import {
    Nunito,
    Send_Flowers,
    Press_Start_2P,
    Archivo_Black,
    Red_Hat_Display,
} from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });
const sendFlowers = Send_Flowers({ subsets: ['latin'], weight: "400" });
const redHatDisplay = Red_Hat_Display({ subsets: ['latin'], weight: "700" });
const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: "400" });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: "400" });

export { nunito, sendFlowers, redHatDisplay, pressStart2P, archivoBlack };
