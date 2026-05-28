export type ProductSpec = {
  label: string
  value: string
}

export type ProductCategory = 'alarm' | 'camera'

export type Product = {
  slug: string
  name: string
  priceCents: number       // voor Mollie (centen)
  priceEuros: number       // voor weergave
  shortDescription: string
  longDescription: string
  specs: ProductSpec[]
  image: string
  alt: string
  badge: string | null
  featured: boolean
  category: ProductCategory
}

export const products: Product[] = [
  {
    slug: 'ajax-hub-2',
    name: 'Ajax Hub 2 Beveiligingspakket',
    priceCents: 37000,
    priceEuros: 370,
    shortDescription: 'Compleet draadloos alarmsysteem voor woningen en bedrijven.',
    longDescription: `Het Ajax Hub 2 pakket is hét complete draadloze alarmsysteem dat Addendum installeert voor particulieren en MKB-bedrijven. De Hub 2 is de intelligente centrale die alle detectoren, sirenes en bedienpanelen met elkaar verbindt via het gepatenteerde Jeweler RF-protocol — betrouwbaar en versleuteld.

Dankzij de ingebouwde Ethernet, WiFi én GSM-verbinding blijft uw systeem altijd online, ook als uw internet wegvalt. U bedient alles vanuit de overzichtelijke Ajax-app op uw telefoon: inschakelen, uitschakelen, de status van elke detector controleren — wanneer u wilt, waar u ook bent.

Addendum installeert het systeem volledig op uw situatie en geeft u uitgebreide uitleg over de bediening. U hoeft nergens over na te denken.`,
    specs: [
      { label: 'Communicatie',      value: 'Ethernet + WiFi + GSM (2G/3G)' },
      { label: 'Draadloos bereik',  value: 'Tot 2.000 m (open terrein)' },
      { label: 'Max. apparaten',    value: '100 apparaten per centrale' },
      { label: 'Back-up batterij',  value: 'Tot 16 uur bij stroomuitval' },
      { label: 'Bediening',         value: 'Ajax-app (iOS & Android)' },
      { label: 'Behuizing',         value: 'IP55 spatwaterdicht' },
      { label: 'Protocol',          value: 'Jeweler RF 868 MHz (bi-directioneel, versleuteld)' },
      { label: 'Sabotagebeveiliging', value: 'Ingebouwde tamper, versleutelde communicatie' },
    ],
    image: '/products/ajax-hub-2.png',
    alt: 'Ajax Hub 2 draadloos beveiligingspakket — centrale hub voor alarm en detectoren',
    badge: 'Bestseller',
    featured: true,
    category: 'alarm',
  },
  {
    slug: 'dahua-hdw2849',
    name: 'Dahua IPC-HDW2849TM-2-IL',
    priceCents: 18000,
    priceEuros: 180,
    shortDescription: '8MP full-color camera met dual light nachtzicht en AI-bewegingsdetectie.',
    longDescription: `De Dahua IPC-HDW2849TM-2-IL levert scherpe 8MP (4K) beelden — dag én nacht in volledig kleur. Dankzij de Dual Light technologie beschikt de camera over twee verlichtingsbronnen: infrarood voor discreet nachtzicht én warm wit licht voor full-color nachtbeelden wanneer dat nodig is.

De ingebouwde Smart Motion Detection Plus (SMD+) maakt gebruik van AI om menselijke figuren en voertuigen te onderscheiden van ruis zoals bladeren, dieren of schaduwen. Dit resulteert in aanzienlijk minder foutmeldingen en alleen relevante alerts op uw telefoon.

Met één PoE-kabel (Power over Ethernet) regelt u zowel stroom als data. De robuuste IP67-behuizing is volledig waterdicht; IK10-certificering garandeert bescherming tegen vandalisme.`,
    specs: [
      { label: 'Resolutie',         value: '8MP (3840 × 2160 / 4K UHD)' },
      { label: 'Verlichting',       value: 'IR 30m + Warm licht 30m (Dual Light)' },
      { label: 'Lens',              value: '2,8 mm — 120° kijkhoek' },
      { label: 'Codering',          value: 'H.265+ / H.265 / H.264+' },
      { label: 'AI-detectie',       value: 'SMD Plus: mensherkenning & voertuig' },
      { label: 'Stroomtoevoer',     value: 'PoE IEEE 802.3af (max. 10 W)' },
      { label: 'Bescherming',       value: 'IP67 waterdicht · IK10 vandaalbestendig' },
      { label: 'Montagetype',       value: 'Inbouw plafond / wand (eyeball)' },
    ],
    image: '/products/dahua-hdw2849.png',
    alt: 'Dahua IPC-HDW2849TM-2-IL 8MP full-color beveiligingscamera met dual light technologie',
    badge: null,
    featured: false,
    category: 'camera',
  },
  {
    slug: 'dahua-pdw3849',
    name: 'Dahua IPC-PDW3849P 180° Duallens',
    priceCents: 19000,
    priceEuros: 190,
    shortDescription: '8MP panoramacamera met 180° overzicht, TiOC technologie en ingebouwde audio.',
    longDescription: `De Dahua IPC-PDW3849P is een geavanceerde panoramacamera die twee 4MP-sensoren combineert tot één naadloos 180°-beeld. Ideaal voor ingangen, parkeerplaatsen, winkelruimten of de volledige gevel van een bedrijfspand — zonder blinde hoeken.

De TiOC-technologie (Three in One Camera) bundelt drie functies in één apparaat: full-color 24/7 beelden, actieve afschrikking (wit zichtbaar flitslicht bij detectie) én twee-richtingsaudio. Beweegt er iemand in de gedefinieerde zone? De camera kan automatisch een visueel of geluidssignaal activeren als waarschuwing.

Via de ingebouwde microfoon en speaker kunt u vanuit de beveiligingsapp direct communiceren met personen bij de camera — handig als intercom of bij een incident.`,
    specs: [
      { label: 'Resolutie',         value: '2× 4MP sensor (totaal 8MP panorama)' },
      { label: 'Kijkhoek',          value: '180° panoramisch (duallens, naadloos)' },
      { label: 'Technologie',       value: 'TiOC: full-color · actief licht · audio' },
      { label: 'Audio',             value: 'Ingebouwde microfoon + speaker (2-richtings)' },
      { label: 'Codering',          value: 'H.265+ / H.264+' },
      { label: 'Stroomtoevoer',     value: 'PoE IEEE 802.3af/at' },
      { label: 'Bescherming',       value: 'IP67 waterdicht' },
      { label: 'AI-detectie',       value: 'SMD Plus: mens & voertuig herkenning' },
    ],
    image: '/products/dahua-pdw3849.png',
    alt: 'Dahua IPC-PDW3849P 180 graden panorama beveiligingscamera met duallens en TiOC',
    badge: null,
    featured: false,
    category: 'camera',
  },
  {
    slug: 'hikvision-ds2cd2343',
    name: 'Hikvision DS-2CD2343G2-IU 4MP',
    priceCents: 18000,
    priceEuros: 180,
    shortDescription: '4MP AcuSense Turret camera met ingebouwde microfoon en deep learning detectie.',
    longDescription: `De Hikvision DS-2CD2343G2-IU is een veelzijdige 4MP Turret-camera uit de AcuSense-serie, ontworpen voor nauwkeurige detectie met minimale valse alarmen. Het deep learning algoritme onderscheidt mensen en voertuigen van andere beweging zoals dieren, regenwater of wuivende bomen — waardoor u tot 90% minder onterechte meldingen ontvangt.

De ingebouwde microfoon maakt audio-opname mogelijk, zodat u situaties rondom uw pand volledig kunt beoordelen. Met 120 dB Wide Dynamic Range presteert de camera uitstekend bij tegenlicht, sterk wisselende lichtomstandigheden of een deur die rechtstreeks op de buitenlucht uitkomt.

IR nachtzicht reikt tot 40 meter. Dankzij de robuuste behuizing (IP67 + IK10) is de camera geschikt voor zowel buiten als binnen.`,
    specs: [
      { label: 'Resolutie',         value: '4MP (2688 × 1520)' },
      { label: 'Nachtzicht',        value: 'IR tot 40 m (zwart-wit)' },
      { label: 'Lens',              value: '2,8 mm — 107° kijkhoek' },
      { label: 'AI-detectie',       value: 'AcuSense: deep learning mens & voertuig' },
      { label: 'Audio',             value: 'Ingebouwde microfoon' },
      { label: 'WDR',               value: '120 dB Wide Dynamic Range' },
      { label: 'Codering',          value: 'H.265+ / H.265 / H.264+' },
      { label: 'Stroomtoevoer',     value: 'PoE IEEE 802.3af' },
      { label: 'Bescherming',       value: 'IP67 waterdicht · IK10 vandaalbestendig' },
    ],
    image: '/products/hikvision-ds2cd2343.png',
    alt: 'Hikvision DS-2CD2343G2-IU 4MP AcuSense Turret beveiligingscamera met microfoon',
    badge: 'Populair',
    featured: false,
    category: 'camera',
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getOtherProducts(slug: string): Product[] {
  return products.filter((p) => p.slug !== slug)
}
