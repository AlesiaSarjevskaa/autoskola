import imageAuto from "../assets/image_auto.png"
import imageDite from "../assets/image_dite.png"
import imageMotorka from "../assets/image_motorka.png"
import imageStoly from "../assets/image_stoly.png"

export const navigationItems = [
  { label: "Úvod", path: "/" },
  { label: "O nás", path: "/o-nas" },
  { label: "Služby", path: "/sluzby" },
  { label: "Fotografie", path: "/fotografie" },
  { label: "Kontakt", path: "/kontakt" },
  { label: "Ceník", path: "/cenik" },
  { label: "Přihláška", path: "/prihlaska" },
  { label: "Novinky", path: "/novinky" },
]

export const newsItems = [
  {
    slug: "kurz-13-6-2026",
    title: "Nový kurz autoškoly 13. 6. 2026",
    date: "07.05.2026 17:59",
    text: "Nový kurz výuky pro skupiny B, A1, A2, A a AM bude zahájen 13. 6. 2026 v 10:00 v učebně autoškoly v Jaselské 1173, Mnichovo Hradiště.",
  },
  {
    slug: "kurz-14-2-2026",
    title: "Nový kurz autoškoly 14. 2. 2026",
    date: "04.01.2026 14:48",
    text: "K zahájení kurzu stačí přijít. Žádost o řidičské oprávnění a lékařské potvrzení můžete přinést hned nebo dodat později.",
  },
  {
    slug: "kurz-20-9-2025",
    title: "Nový kurz autoškoly 20. 9. 2025",
    date: "31.08.2025 22:31",
    text: "Další termín pro skupiny B, A1, A2, A a AM proběhl v sobotu 20. 9. 2025 v 11:00 v učebně autoškoly.",
  },
]

export const serviceCards = [
  {
    slug: "osobni-automobily",
    badge: "B",
    title: "Osobní automobily",
    text: "Výuka a výcvik řidičů pro získání řidičského průkazu skupiny B především v Mnichově Hradišti, Mladé Boleslavi a okolí. Jedna vyučovací hodina trvá 45 minut, teorie probíhá jednou nebo dvakrát týdně přibližně 2 hodiny.",
  },
  {
    slug: "male-motocykly",
    badge: "A1",
    title: "Malé motocykly",
    text: "Skupina A1 je určena pro motocykly do 125 ccm a 11 kW. Výcvik lze zahájit po dovršení věku 16 let.",
  },
  {
    slug: "vetsi-motocykly",
    badge: "A2",
    title: "Větší motocykly",
    text: "Výcvik pro skupinu A2 je vhodný pro zájemce o silnější motocykly a navazuje na nabídku motocyklových oprávnění autoškoly Jiří Jiráček.",
  },
  {
    slug: "motocykly-bez-omezeni",
    badge: "A",
    title: "Motocykly bez omezení",
    text: "Skupina A bez omezení je určena pro motocykly s výkonem nad 25 kW. Získat ji lze po dovršení věku 21 let.",
  },
  {
    slug: "kondicni-jizdy",
    badge: "Jízdy",
    title: "Kondiční jízdy",
    text: "Kondiční jízdy jsou pro každého, kdo delší dobu neřídil, chce se zdokonalit nebo získat jistotu v dnešním hustém provozu. Počet i průběh hodin si určíte sami.",
  },
  {
    slug: "skoleni-ridicu",
    badge: "Firma",
    title: "Školení řidičů",
    text: "Autoškola zajišťuje profesní školení řidičů - referentů pro firmy, jejichž zaměstnanci jezdí služebními auty. Školení probíhá v rozsahu skupiny B.",
  },
]

export const priceItems = [
  { label: "AM, A1", price: "14 000 Kč" },
  { label: "A2", price: "15 000 Kč" },
  { label: "A", price: "16 000 Kč" },
  { label: "B", price: "20 000 Kč" },
]

export const galleryImages = [
  {
    src: imageAuto,
    alt: "Osobní automobil",
  },
  {
    src: imageMotorka,
    alt: "Motocykly",
  },
  {
    src: imageStoly,
    alt: "Učebna autoškoly",
  },
  {
    src: imageDite,
    alt: "Hlavní vchod do autoškoly",
  },
]

export const contactInfo = {
  company: "Autoškola Jiráček",
  address: "Jaselská 1173, 295 01 Mnichovo Hradiště",
  phone: "+420 737 286 495",
  email: "autoskola.jiracek@seznam.cz",
  ico: "47030763",
}
