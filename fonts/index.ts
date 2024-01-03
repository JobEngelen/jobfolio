import {
    Nunito,
    Send_Flowers,
    Hammersmith_One,
    Press_Start_2P,
    Archivo_Black
} from 'next/font/google';

const nunito = Nunito({ subsets: ['latin'] });
const sendFlowers = Send_Flowers({ subsets: ['latin'], weight: "400" });
const hammersmithOne = Hammersmith_One({ subsets: ['latin'], weight: "400" });
const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: "400" });
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: "400" });

export { nunito, sendFlowers, hammersmithOne, pressStart2P, archivoBlack };
