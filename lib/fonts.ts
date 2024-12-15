import { Bebas_Neue, Grand_Hotel, Gugi, IBM_Plex_Mono, K2D, Poppins, Rajdhani, Righteous, Sofia_Sans } from "next/font/google";

export const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "700", "800", "900"] });
export const grandHotel = Grand_Hotel({subsets:["latin"], weight:["400"]});
export const gugi = Gugi({ weight: ['400'], subsets: ['latin'] });
export const bebas = Bebas_Neue({weight:["400"], subsets:['latin']});
export const rajdhani = Rajdhani({weight:["300","400","500","600","700"], subsets:['latin']});
export const k2d = K2D({weight:["100","200","300","500","600","700","800"], subsets:['latin']});
export const righteous = Righteous({weight:["400"], subsets:['latin']});
export const plexMono = IBM_Plex_Mono({weight:["100","200","300","500","600", "700"], subsets:['latin']});
export const sofia = Sofia_Sans({weight:["1", "100", "200", "300","400", "500","600","700","800","900","1000"], subsets:['latin']});