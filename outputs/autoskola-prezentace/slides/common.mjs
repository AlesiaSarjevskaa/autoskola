const projectRoot = "C:/Users/nela.ondilova/Desktop/autoskola";

const C = {
  wine: "#7b0000",
  wineDark: "#4b0000",
  red: "#ff5252",
  cream: "#faf7f2",
  paper: "#fffaf3",
  ink: "#1f1717",
  muted: "#675a5a",
  line: "#eaded4",
};

const slides = [
  {
    kicker: "PROJEKT",
    title: "Web pro Autoškolu Jiří Jiráček",
    subtitle: "Prezentace návrhu, vývoje a výsledku",
    image: `${projectRoot}/client/src/assets/Auto.png`,
    type: "cover",
    note: "Cíl prezentace: ukázat, co jsme postavili, proč jsme to udělali tímto způsobem a jak web funguje.",
  },
  {
    kicker: "CÍL",
    title: "Chtěli jsme moderní web, který návštěvníka rychle dovede k akci.",
    bullets: [
      "zpřehlednit nabídku autoškoly a důležité kontakty",
      "vytvořit úvodní stránku s výrazným vizuálním dojmem",
      "zachovat praktickou boční navigaci a novinky",
      "doplnit funkce: vyhledávání, mapa, galerie a responzivita",
    ],
    side: "Hlavní akce webu je přihláška. Proto je zvýrazněná v menu i v obsahu.",
  },
  {
    kicker: "ROZSAH",
    title: "Projekt jsme rozdělili na přehledné stránky a opakovaně použitelné části.",
    cards: [
      ["Úvod", "hero, vyhledávání, služby, mapa"],
      ["Služby", "skupiny B, A1, A2, A a další nabídka"],
      ["Ceník", "rychlé porovnání cen"],
      ["Přihláška", "formulář pro zájemce"],
      ["Fotogalerie", "náhledy + velké rozkliknutí"],
      ["Kontakt", "adresa, telefon, e-mail"],
    ],
  },
  {
    kicker: "TECHNOLOGIE",
    title: "Frontend stojí na Reactu a Vite, serverová část zůstala oddělená.",
    bullets: [
      "React komponenty pro jednotlivé stránky",
      "React Router pro přepínání mezi stránkami bez reloadu",
      "Vite pro rychlý vývoj a finální build",
      "společný soubor s obsahem pro navigaci, novinky, služby a galerii",
    ],
    side: "Díky rozdělení na komponenty lze web jednoduše rozšiřovat bez přepisování celé stránky.",
  },
  {
    kicker: "DESIGN",
    title: "Vizuální styl jsme posunuli od staršího webu k čistému modernímu rozhraní.",
    bullets: [
      "vínová barva jako hlavní identita autoškoly",
      "velký hero úvod s fotografií auta",
      "světlé obsahové bloky pro lepší čitelnost",
      "jednoduché karty služeb a konzistentní tlačítka",
    ],
    swatches: [C.wineDark, C.wine, C.red, C.paper],
  },
  {
    kicker: "ÚVOD",
    title: "Nejdůležitější část webu je první obrazovka.",
    image: `${projectRoot}/client/src/assets/Auto.png`,
    bullets: [
      "výrazný nadpis: „Naučíme vás řídit bezpečně a sebejistě“",
      "vyhledávání přímo v hero části",
      "fotka auta vytváří vztah k tématu",
      "kontrastní text zůstává čitelný i na tmavém pozadí",
    ],
    type: "imageText",
  },
  {
    kicker: "NAVIGACE",
    title: "Horní menu jsme zjednodušili na nejdůležitější odkazy.",
    bullets: [
      "nahoře zůstalo pouze O nás, Ceník, Přihláška a Kontakty",
      "Přihláška je trvale zvýrazněná jako hlavní akce",
      "boční menu zůstává kompletní pro podrobnější pohyb po webu",
      "při změně stránky se web automaticky posune nahoru",
    ],
    side: "To snižuje zmatek: nahoře jsou jen nejčastější rozhodovací kroky.",
  },
  {
    kicker: "RESPONZIVITA",
    title: "Web se přizpůsobuje desktopu, tabletu i mobilu.",
    bullets: [
      "hlavní menu se včas přepne na hamburger",
      "obsahové karty přechází ze tří sloupců na jeden",
      "vyhledávání se na mobilu skládá pod sebe",
      "boční panel se při menších šířkách přesune nad obsah",
    ],
    steps: ["Desktop", "Tablet", "Mobil"],
  },
  {
    kicker: "FUNKCE",
    title: "Vyhledávání už není jen dekorace, ale opravdu pracuje s obsahem webu.",
    bullets: [
      "dotaz se porovnává se seznamem stránek a služeb",
      "funguje i bez diakritiky: cenik, prihlaska, kontakt",
      "příklad: „kondiční jízdy“ otevře detail služby",
      "když se nic nenajde, zobrazí se krátká hláška",
    ],
    side: "Vyhledávání zrychluje cestu pro návštěvníky, kteří přesně vědí, co hledají.",
  },
  {
    kicker: "OBSAH",
    title: "Důležité informace jsme drželi na jednom místě a opakovali je konzistentně.",
    bullets: [
      "služby, novinky, ceny a galerie se berou ze strukturovaných dat",
      "snáze se mění texty bez zásahu do každé stránky zvlášť",
      "karty služeb odkazují přímo na detail",
      "boční novinky zůstávají viditelné jako aktuální informace",
    ],
  },
  {
    kicker: "GALERIE",
    title: "Fotogalerie teď umožňuje rozkliknout obrázky do většího náhledu.",
    image: `${projectRoot}/client/src/assets/image_auto.png`,
    bullets: [
      "kliknutí na náhled otevře větší fotografii",
      "náhled lze zavřít křížkem, kliknutím mimo obrázek nebo klávesou Esc",
      "na kartách je jemný zoom efekt",
      "galerie je použitelná i na mobilu",
    ],
    type: "imageText",
  },
  {
    kicker: "MAPA",
    title: "Na úvod jsme přidali mapu, aby návštěvník hned viděl, kde autoškola sídlí.",
    bullets: [
      "adresa: Jaselská 1173, 295 01 Mnichovo Hradiště",
      "vložená Google mapa bez potřeby API klíče",
      "mapa je responzivní a drží design světlé obsahové sekce",
      "kontakt je tak podpořen konkrétním místem",
    ],
    side: "Mapa je umístěná před spodním kontaktem, takže uzavírá úvod praktickou informací.",
  },
  {
    kicker: "OVĚŘENÍ",
    title: "Každou změnu jsme průběžně kontrolovali buildem, lintem a náhledem.",
    bullets: [
      "npm run build ověřil, že projekt jde sestavit",
      "npm run lint hlídal chyby ve zdrojovém kódu",
      "lokální náhled pomohl zkontrolovat hero, menu a vyhledávání",
      "problémy s překrýváním v responzivitě jsme řešili úpravou breakpointů",
    ],
    steps: ["Implementace", "Kontrola", "Úprava", "Ověření"],
  },
  {
    kicker: "ZÁVĚR",
    title: "Výsledkem je modernější, přehlednější a použitelnější web autoškoly.",
    bullets: [
      "návštěvník rychle najde služby, cenu, kontakt i přihlášku",
      "web funguje na různých velikostech obrazovky",
      "obsah je připravený na další rozšiřování",
      "další krok: reálné nasazení, doplnění aktuálních fotek a průběžná správa novinek",
    ],
    side: "Doporučený závěr prezentace: krátce ukázat web živě a projít jednu cestu uživatele.",
  },
];

function addBg(slide, ctx, dark = false) {
  ctx.addShape(slide, {
    x: 0,
    y: 0,
    w: ctx.W,
    h: ctx.H,
    fill: dark ? C.wineDark : C.cream,
  });
}

function addKicker(slide, ctx, text, dark = false) {
  ctx.addShape(slide, {
    x: 64,
    y: 48,
    w: 10,
    h: 10,
    fill: dark ? C.red : C.wine,
  });
  ctx.addText(slide, {
    text,
    x: 84,
    y: 42,
    w: 320,
    h: 24,
    fontSize: 15,
    bold: true,
    color: dark ? "#ffd7d7" : C.wine,
    typeface: "Aptos",
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });
}

function addFooter(slide, ctx, index) {
  ctx.addText(slide, {
    text: `Autoškola Jiří Jiráček / projektový postup / ${String(index).padStart(2, "0")}`,
    x: 64,
    y: 674,
    w: 780,
    h: 22,
    fontSize: 12,
    color: C.muted,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });
}

function addTitle(slide, ctx, title, dark = false, y = 88, w = 760) {
  ctx.addText(slide, {
    text: title,
    x: 64,
    y,
    w,
    h: 130,
    fontSize: 38,
    bold: true,
    color: dark ? C.paper : C.ink,
    typeface: "Aptos Display",
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });
}

function addBullets(slide, ctx, bullets, x = 80, y = 254, w = 640, color = C.ink) {
  const text = bullets.map((bullet) => `• ${bullet}`).join("\n");
  ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h: 250,
    fontSize: 22,
    color,
    typeface: "Aptos",
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });
}

function addSideNote(slide, ctx, text, dark = false) {
  ctx.addShape(slide, {
    x: 850,
    y: 268,
    w: 330,
    h: 180,
    fill: dark ? "#650000" : C.paper,
    line: ctx.line(dark ? "#8d1b1b" : C.line, 1),
  });
  ctx.addText(slide, {
    text,
    x: 880,
    y: 300,
    w: 270,
    h: 112,
    fontSize: 22,
    bold: true,
    color: dark ? C.paper : C.wineDark,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });
}

async function cover(slide, ctx, spec, index) {
  addBg(slide, ctx, true);
  await ctx.addImage(slide, {
    path: spec.image,
    x: 642,
    y: 0,
    w: 638,
    h: 720,
    fit: "cover",
    alt: "Auto autoškoly",
  });
  ctx.addShape(slide, { x: 0, y: 0, w: 1280, h: 720, fill: "#4b0000bb" });
  addKicker(slide, ctx, spec.kicker, true);
  ctx.addText(slide, {
    text: spec.title,
    x: 64,
    y: 158,
    w: 670,
    h: 145,
    fontSize: 48,
    bold: true,
    color: C.paper,
    typeface: "Aptos Display",
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });
  ctx.addText(slide, {
    text: spec.subtitle,
    x: 64,
    y: 326,
    w: 560,
    h: 46,
    fontSize: 24,
    color: "#ffd7d7",
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });
  ctx.addText(slide, {
    text: spec.note,
    x: 64,
    y: 492,
    w: 560,
    h: 70,
    fontSize: 19,
    color: "#fff0e6",
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });
  addFooter(slide, ctx, index);
}

async function imageText(slide, ctx, spec, index) {
  addBg(slide, ctx);
  addKicker(slide, ctx, spec.kicker);
  addTitle(slide, ctx, spec.title, false, 86, 640);
  addBullets(slide, ctx, spec.bullets, 80, 288, 560);
  await ctx.addImage(slide, {
    path: spec.image,
    x: 735,
    y: 118,
    w: 455,
    h: 320,
    fit: "cover",
    alt: spec.title,
  });
  ctx.addShape(slide, { x: 735, y: 458, w: 455, h: 88, fill: C.wine });
  ctx.addText(slide, {
    text: spec.kicker === "GALERIE" ? "Interakce: náhled se otevře přes stránku" : "První dojem rozhoduje, kam návštěvník klikne dál.",
    x: 760,
    y: 486,
    w: 400,
    h: 36,
    fontSize: 18,
    bold: true,
    color: C.paper,
    insets: { left: 0, right: 0, top: 0, bottom: 0 },
  });
  addFooter(slide, ctx, index);
}

function cardsSlide(slide, ctx, spec, index) {
  addBg(slide, ctx);
  addKicker(slide, ctx, spec.kicker);
  addTitle(slide, ctx, spec.title, false, 84, 980);
  const startX = 70;
  const startY = 255;
  const cardW = 355;
  const cardH = 118;
  spec.cards.forEach(([title, text], i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * 395;
    const y = startY + row * 145;
    ctx.addShape(slide, { x, y, w: cardW, h: cardH, fill: C.paper, line: ctx.line(C.line, 1) });
    ctx.addText(slide, {
      text: title,
      x: x + 24,
      y: y + 20,
      w: cardW - 48,
      h: 28,
      fontSize: 24,
      bold: true,
      color: C.wine,
      insets: { left: 0, right: 0, top: 0, bottom: 0 },
    });
    ctx.addText(slide, {
      text,
      x: x + 24,
      y: y + 58,
      w: cardW - 48,
      h: 42,
      fontSize: 17,
      color: C.muted,
      insets: { left: 0, right: 0, top: 0, bottom: 0 },
    });
  });
  addFooter(slide, ctx, index);
}

function standard(slide, ctx, spec, index) {
  addBg(slide, ctx);
  addKicker(slide, ctx, spec.kicker);
  addTitle(slide, ctx, spec.title);
  addBullets(slide, ctx, spec.bullets);
  if (spec.side) addSideNote(slide, ctx, spec.side);
  if (spec.steps) {
    spec.steps.forEach((step, i) => {
      const x = 778 + i * 132;
      ctx.addShape(slide, { x, y: 292, w: 105, h: 105, fill: i === 1 ? C.wine : C.paper, line: ctx.line(C.line, 1) });
      ctx.addText(slide, {
        text: step,
        x: x + 12,
        y: 328,
        w: 82,
        h: 38,
        fontSize: 18,
        bold: true,
        align: "center",
        color: i === 1 ? C.paper : C.wine,
        insets: { left: 0, right: 0, top: 0, bottom: 0 },
      });
    });
  }
  if (spec.swatches) {
    spec.swatches.forEach((swatch, i) => {
      ctx.addShape(slide, { x: 828 + i * 72, y: 310, w: 56, h: 150, fill: swatch });
    });
    ctx.addText(slide, {
      text: "Jednoduchá paleta: vínová, červený akcent a světlý papír.",
      x: 828,
      y: 486,
      w: 330,
      h: 55,
      fontSize: 18,
      bold: true,
      color: C.wineDark,
      insets: { left: 0, right: 0, top: 0, bottom: 0 },
    });
  }
  addFooter(slide, ctx, index);
}

export async function buildSlide(presentation, ctx, index) {
  const spec = slides[index - 1];
  const slide = presentation.slides.add();

  if (spec.type === "cover") {
    await cover(slide, ctx, spec, index);
  } else if (spec.type === "imageText") {
    await imageText(slide, ctx, spec, index);
  } else if (spec.cards) {
    cardsSlide(slide, ctx, spec, index);
  } else {
    standard(slide, ctx, spec, index);
  }

  return slide;
}
