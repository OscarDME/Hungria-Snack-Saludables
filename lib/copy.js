// lib/copy.js — todo el copy visible de la landing. Húngaro, adaptado de
// loncherafeliz.aprende-hoy.shop.

export const copy = {
  metadata: {
    title:
      "Egészséges gyerek nasik | 500 gyors és finom recept",
    description:
      "Fedezz fel 500 egészséges gyerek rágcsálnivaló és tízórai receptet, amik kevesebb mint 15 perc alatt elkészülnek. 9 ingyenes bónusszal. Különleges ajánlat: 2990 Ft.",
    productName: "Egészséges Gyerek Nasik Kézikönyve",
  },

  hero: {
    urgencyBar:
      "⚡ KORLÁTOZOTT IDEJŰ AJÁNLAT! Csak ma: 95% kedvezmény",
    badge: "Kevesebb mint 15 perc alatt kész",
    headline: {
      before: "Reformáld meg gyerekeid étkezését ",
      accent: "egészséges nasikkal",
      after: ", amelyek villámgyorsak és isteni finomak",
    },
    subheadline:
      "Egyszerű és tápláló receptek, amiket a kicsik imádni fognak – tökéletesek az iskolába vagy otthonra. 500 ötlet, amivel gondoskodhatsz az egészségükről anélkül, hogy órákat töltenél a konyhában!",
    ctaLabel: "Vedd meg most és spórolj 95%-ot!",
    starsAriaLabel: "5 csillag",
    socialProof: "+5 000 elégedett család", // CORREGIDO: Caracteres especiales
    trustChips: [
      { icon: "🥗", text: "500 recept" },
      { icon: "🎁", text: "Több mint 35 000 Ft értékű AJÁNDÉK" },
      { icon: "🛡️", text: "14 napos kockázatmentes garancia" },
    ],
    image: {
      src: "/hero-snacks.webp",
      alt: "Átalakulás az egészségtelen ételektől a 15 perces egészséges nasikig",
    },
    floatingBadges: {
      speed: { icon: "⏱️", top: "Kész", bottom: "15 perc alatt" },
      discount: { icon: "💚", top: "95%", bottom: "kedvezmény" },
    },
  },

  story: {
    kicker: "A mi történetünk",
    paragraphs: [
      "A gyermeked naponta többször is eszik, és amit elfogyaszt, közvetlenül hatással van az egészségére, energiájára és hangulatára.",
      "Nem az a baj, ha néha megeszik egy kekszet. A probléma ott kezdődik, amikor idő- vagy ötlethiány miatt ez válik a mindennapos rutinná.",
      "Nem arról van szó, hogy nem törődsz velük. Egyszerűen csak a fáradtság, a házimunka és a napi ezer teendő mellett néha valami igazán gyors és egyszerű megoldásra van szükséged.",
      "Az „EGÉSZSÉGES GYEREK NASIK KÉZIKÖNYVE” pontosan az ilyen szülőknek készült: akik törődnek a gyermekeik egészségével, de bonyolult receptek és megvalósíthatatlan ötletek helyett praktikus és gyors megoldásokat keresnek.",
    ],
  },

  benefits: {
    kicker: "Főbb előnyök",
    headline: "Az Egészséges Gyerek Nasik Kézikönyvével búcsút inthetsz...",
    items: [
      {
        icon: "🍪",
        title: "Az egészségtelen ételeknek",
        desc: "Gyors receptek természetes alapanyagokból, mesterséges adalékanyagok és tartósítószerek nélkül.",
      },
      {
        icon: "⏱️",
        title: "Az időhiánynak",
        desc: "Akár 15 perc alatt elkészíthető receptek, amik tökéletesen beilleszthetők a legzsúfoltabb mindennapokba is.",
      },
      {
        icon: "🥦",
        title: "Az aggódásnak az étkezésük miatt",
        desc: "Fontos vitaminokkal és ásványi anyagokkal teli finomságok, amiket mindenki imádni fog.",
      },
      {
        icon: "😩",
        title: "A főzéssel járó stressznek",
        desc: "Ínycsiklandó receptek, amelyekkel elérheted, hogy a gyerekek alig várják a tízórait.",
      },
    ],
  },

  transformation: {
    kicker: "A változás, amire vágysz",
    headline: "Nézd meg, hogyan változik meg a gyerekeid étkezése és energiaszintje",
    before: {
      tag: "ELŐTTE",
      title: "Energia- és tápanyaghiány",
      desc: "Feldolgozott élelmiszerek, tele cukorral és adalékanyagokkal, amelyek semmi jót nem adnak a szervezetnek.",
    },
    after: {
      tag: "UTÁNA",
      title: "Boldogok és energikusak",
      desc: "Természetes, finom és tápláló nasik, amiket a gyerekek imádnak.",
    },
    image: {
      src: "/kids-transformation.webp",
      alt: "Átalakulás: egészségtelen étel vs egészséges nasi",
    },
  },

  samples: {
    headline: "Ellenállhatatlan receptek, amiket imádni fognak",
    subheadline:
      "Nézz meg egy kis ízelítőt azokból a finom receptekből, amiket az e-könyvben találsz",
    items: [
      {
        image: "/recipe-pancakes.webp",
        title: "Egészséges palacsinta",
        desc: "Könnyű és aranybarna, friss gyümölcsökkel és valódi mézzel.",
      },
      {
        image: "/recipe-pizza.webp",
        title: "Gluténmentes pizza",
        desc: "Isteni pizza friss zöldségekkel és olvasztott sajttal.",
      },
      {
        image: "/recipe-smoothies.webp",
        title: "Természetes turmixok",
        desc: "Színes gyümölcsturmixok, amik elvarázsolják őket.",
      },
      {
        image: "/recipe-cookies.webp",
        title: "Zabkeksz",
        desc: "Ropogós házi keksz zabpehellyel és mandulával.",
      },
    ],
    footnote: "Mind az 500 recept rád vár a teljes e-könyvben",
  },

  testimonials: {
    kicker: "BIZONYÍTOTT EREDMÉNYEK",
    headline: "Több mint 5000 család változtatta már meg az étkezési szokásait",
    subheadline:
      "Csatlakozz több ezer szülőhöz, akik már felesleges stressz nélkül élvezik az egészségesebb ételeket",
    rating: 5,
    ratingLabel: "5/5",
    reviewCount: "150 értékelés",
    items: [
      {
        initial: "G",
        name: "Gabriella",
        role: "2 kisgyermek édesanyja",
        quote:
          "Soha nem gondoltam volna, hogy a kisfiam ilyen gyorsan megszereti az egészséges nasikat! A receptek nemcsak nagyon egyszerűek, de imádja is őket. Köszönöm, hogy megkönnyítettétek az életem!",
      },
      {
        initial: "N",
        name: "Norbert",
        role: "3 gyermekes édesapa",
        quote:
          "Korábban sokat aggódtam amiatt, hogy mit adok a gyerekeimnek, de ezzel a könyvvel rendkívül finom és egészséges alternatívákat találtam. Most már mindenki jobban eszik!",
      },
      {
        initial: "E",
        name: "Eszter",
        role: "táplálkozási tanácsadó és édesanya",
        quote:
          "Szakemberként megerősíthetem, hogy ezek a receptek tökéletesen kiegyensúlyozottak. A gyerekeim imádják őket, én pedig nyugodt vagyok, mert tudom, hogy jókat esznek.",
      },
      {
        initial: "D",
        name: "Dóra",
        role: "dolgozó édesanya",
        quote:
          "A sűrű beosztásom miatt egyáltalán nem volt időm főzni. Ez a könyv mindent megváltoztatott: 15 perces receptek, amiket a gyerekeim újra és újra kérnek. Minden fillért megért!",
      },
    ],
  },

  whatYouGet: {
    kicker: "MIT TARTALMAZ?",
    headline: "Minden, amit ebben a fantasztikus e-könyvben találsz",
    subheadline: "Teljes útmutató az egészséges gyermekétkeztetéshez",
    items: [
      "500 gyors és tápláló recept a tízóraikhoz és uzsonnákhoz", // Ajustado para ser más coherente con "Snacks"
      "Kész heti menük + gazdaságos bevásárlólisták",
      "Ötletek a napközbeni étkezések tökéletes kombinálásához",
      "Könnyen követhető, lépésről lépésre bemutatott útmutatók",
      "Lista az egészséges helyettesítőkről alapanyaghiány esetére",
      "Ingyenes frissítések új receptekkel és menükkel",
      "És még sok más…",
    ],
    footnote: {
      line1: "És ez még nem minden...",
      line2: "Van még más is!",
      line3: "Ezeket is megkapod...",
    },
  },

  bonuses: {
    flagline: "🔥 CSAK MA!",
    headline: "Szerezz több mint 35 000 Ft értékű INGYENES bónuszt most",
    subheadline:
      "36 950 Ft értékben — teljesen INGYEN a mai vásárlásod mellé!",
    badgeLabel: "INGYENES",
    valueLabel: "Értéke:",
    items: [
      {
        value: "10 990 Ft",
        title: "Cukor- és gluténmentes muffin és pizza receptek",
        desc: "Készítsd el a kedvenc ételeik egészséges változatát hozzáadott cukor nélkül, percek alatt.",
      },
      {
        value: "7 990 Ft",
        title: "Gyakorlati útmutató a rendszerezéshez és fagyasztáshoz",
        desc: "Tanuld meg, hogyan készíts el mindent egyszerre, hogy egész hétre kész ételed legyen.",
      },
      {
        value: "5 990 Ft",
        title: "Speciális receptek allergiás gyermekeknek",
        desc: "Biztonságos és finom receptek ételallergiákra (tej, tojás, szója, mogyoró) szabva.",
      },
      {
        value: "5 990 Ft",
        title: "Ínycsiklandó és egészséges desszertreceptek",
        desc: "Cseréld le a bolti édességeket természetes összetevőkből készült finomságokra.",
      },
      {
        value: "5 990 Ft",
        title: "Egészséges és gyors frissen préselt gyümölcslevek",
        desc: "Praktikus receptek tápláló és isteni finom levekre a családnak.",
      },
    ],
    totalLabel: "🎁 A bónuszok összértéke: 36 950 Ft",
    totalCta: "EZEKET TELJESEN INGYEN MEGKAPOD A MAI VÁSÁRLÁSOD MELLÉ!",
  },

  exclusiveBonuses: {
    kicker: "RÁADÁSUL.. ⭐ EXKLUZÍV BÓNUSZOK!",
    headline: "Csak ma! Szerezd meg ezeket az extra bónuszokat is",
    subheadline: "hogy megreformáld gyermeked egészségét",
    badgeLabel: "INGYENES",
    valueLabel: "Értéke:",
    items: [
      {
        value: "7 490 Ft",
        title: "Házi gyümölcsös gumicukrok magas C-vitaminnal",
        desc: "Természetes gumicukor az immunrendszer erősítéséhez, hozzáadott cukor nélkül.",
      },
      {
        value: "7 990 Ft",
        title: "Hogyan szerettessük meg a zöldségeket?",
        desc: "Változtasd a zöldségeket egy ízletes és vidám kalanddá a gyerekek számára.",
      },
      {
        value: "6 990 Ft",
        title: "Gyors nasi útmutató válogatós gyerekeknek",
        desc: "Egyszerű és tápláló falatok még a legválogatósabb kicsiknek is.",
      },
      {
        value: "6 990 Ft",
        title: "Szuperélelmiszer útmutató gyerekeknek",
        desc: "Tudd meg, hogyan építs be szuperélelmiszereket az étrendbe egyszerűen.",
      },
    ],
    totalLabel: "🎁 AZ ÖSSZES bónusz összértéke: 66 410 Ft",
    totalCta: "EZEKET TELJESEN INGYEN MEGKAPOD A MAI VÁSÁRLÁSOD MELLÉ!",
  },

  finalCta: {
    flagline: "⏰ AZ AJÁNLAT CSAK MA ÉRVÉNYES!",
    headline: "A teljes csomag értéke: 77 990 Ft",
    subheadline: "Ma hihetetlen 95% kedvezménnyel viheted el",
    regularPriceLabel: "Normál ár:",
    regularPrice: "77 990 Ft",
    offerPrice: "2990 Ft",
    bundleList: [
      "✅ 500 recept egészséges nasikhoz (12 990 Ft értékben)",
      "✅ 9 exkluzív bónusz 66 410 Ft értékben — TELJESEN INGYEN!",
      "✅ Kevesebb mint 15 perc alatt elkészíthető receptek",
      "✅ Azonnali és élethosszig tartó hozzáférés",
      "✅ 14 napos pénzvisszafizetési garancia",
    ],
    button: "Vedd meg most és spórolj 95%-ot!",
    trustRow: "🔒 100% biztonságos fizetés • ⚡ Azonnali hozzáférés • ✅ 14 nap garancia",
    bonusesBadge: "✓ 9 INGYENES BÓNUSZ",
    discountStickerLabel: "Csak ma",
    discountStickerValue: "-95%",
    imageAlt: "Teljes csomag: Egészséges Gyerek Nasik e-könyv + 9 Bónusz",
    image: "/mockup-cta.webp",
  },

  guarantee: {
    alt: "Garancia",
    headline: "A vásárlásod 100%-ban védett a 14 napos garanciánkkal",
    tag: "SZÁMODRA NULLA KOCKÁZAT",
    body: "Annyira biztosak vagyunk benne, hogy imádni fogod ezt a kézikönyvet, hogy feltétel nélküli 14 napos garanciát vállalunk. Ha bármilyen okból nem vagy 100%-ig elégedett, minden fillért visszatérítünk. Kérdések nélkül.",
    footer: "✅ Garantált teljes visszatérítés • ✅ Kérdések nélkül • ✅ Azonnali ügyintézés",
  },

  faq: {
    kicker: "GYIK",
    headline: "Gyakran ismételt kérdések",
    items: [
      {
        q: "Milyen korosztálynak szól a Kézikönyv?",
        a: "A kézikönyvet a 2 és 12 év közötti korosztályra terveztük, de a receptek bármilyen életkorhoz könnyen adaptálhatók.",
      },
      {
        q: "Allergiás gyerekek számára is megfelelő?",
        a: "Igen! Kínálunk recepteket tej-, tojás-, szója- és mogyorómentes változatban is.",
      },
      {
        q: "Tudnom kell jól főzni?",
        a: "Nem, a recepteket úgy alkottuk meg, hogy bárki könnyen követhesse őket egyszerű lépésekkel és kevés hozzávalóval.",
      },
      {
        q: "Drágák az alapanyagok?",
        a: "Nem, minden hozzávaló megfizethető és beszerezhető bármelyik helyi szupermarketben.",
      },
      {
        q: "Mennyi ideig tart a nasik elkészítése?",
        a: "A receptek rendkívül gyorsak, a legtöbb kevesebb mint 15 perc alatt elkészül.",
      },
      {
        q: "Fizethetek a saját valutámban?",
        a: "Igen! A rendszerünk automatikusan átváltja az összeget. A fizetésnél már a saját valutádnak megfelelő árat fogod látni.",
      },
    ],
  },

  closing: {
    kicker: "UTOLSÓ ESÉLY! ⚡ Ez az ajánlat hamarosan lejár",
    headline:
      "Ne szalaszd el ezt a lehetőséget gyermeked egészségéért!",
    subheadline:
      "Teljes Kézikönyv + 9 Bónusz AJÁNDÉKBA! Mindez egyetlen vacsora áráért.",
    regularPrice: "77 990 Ft",
    offerPrice: "2990 Ft",
    ctaLabel: "IGEN, KÉREM A KÉZIKÖNYVEMET MOST!",
    trustRow:
      "🔒 100% biztonságos fizetés • ⚡ Azonnali hozzáférés • ✅ 14 napos garancia",
  },

  footer: {
    madeWith: "Készült",
    forWho: "az egészséges családokért",
    copyright: "© 2026 Egészséges Nasik. Minden jog fenntartva.",
  },

  stickyCta: {
    label: "2990 Ft",
    ctaLabel: "Vedd meg most és spórolj 95%-ot!",
    urgency: "⚡ Korlátozott idejű ajánlat",
  },
};