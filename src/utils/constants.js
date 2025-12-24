// src/utils/constants.js

export const BRANDS = ['Audi', 'BMW', 'Mercedes', 'VW', 'Porsche', 'Tesla', 'Ford', 'Opel', 'Renault', 'Peugeot'];

export const FUEL_TYPES = ['Benzin', 'Diesel', 'Elektro', 'Hybrid', 'Plug-in Hybrid'];

export const KAROSSERIE_TYPES = [
  'Limousine', 'Kombi', 'SUV', 'Cabrio', 'Coupe', 
  'Kleinwagen', 'Van', 'Pickup', 'Sportwagen'
];

export const FEATURES = {
  'Komfort': [
    'Klimaanlage',
    'Klimaautomatik',
    'Sitzheizung',
    'Standheizung',
    'Beheizbares Lenkrad',
    'Elektrische Fensterheber',
    'Elektrische Seitenspiegel',
    'Elektr. verstellbare Sitze',
    'Lederlenkrad',
    'Multifunktionslenkrad',
    'Tempomat',
    'Adaptive Geschwindigkeitsregelung',
    'Einparkhilfe',
    'Rueckfahrkamera',
    '360-Grad-Kamera',
    'Park-Assistent',
    'Start/Stopp-Automatik',
    'Keyless Entry',
    'Zentralverriegelung',
    'Elektrische Heckklappe'
  ],
  'Sicherheit': [
    'ABS',
    'ESP',
    'Traktionskontrolle',
    'Airbag Fahrer',
    'Airbag Beifahrer',
    'Seitenairbags',
    'Notbremsassistent',
    'Spurhalteassistent',
    'Totwinkel-Assistent',
    'Verkehrszeichenerkennung',
    'Muedigkeitswarner',
    'Nachtsicht-Assistent',
    'Kurvenlicht',
    'LED-Scheinwerfer',
    'Xenon-Scheinwerfer',
    'Tagfahrlicht',
    'Nebelscheinwerfer',
    'Reifendruckkontrolle',
    'Isofix (Kindersitzbefestigung)'
  ],
  'Entertainment': [
    'Radio',
    'CD-Spieler',
    'Bluetooth',
    'USB-Anschluss',
    'AUX-Anschluss',
    'Apple CarPlay',
    'Android Auto',
    'Navigationssystem',
    'Soundsystem',
    'DAB+ Radio',
    'WLAN / WiFi',
    'Induktives Laden',
    'Head-Up Display',
    'Sprachsteuerung'
  ],
  'Innenausstattung': [
    'Ledersitze',
    'Teilleder',
    'Stoffsitze',
    'Alcantara',
    'Sportsitze',
    'Massagesitze',
    'Lordosenstuetze',
    'Armlehne',
    'Mittelarmlehne hinten',
    'Geteilte Rueckbank',
    'Dachhimmel Stoff',
    'Ambiente-Beleuchtung',
    'Panoramadach',
    'Schiebedach',
    'Metallic-Lackierung'
  ]
};

export const DEMO_USERS = [
  { 
    id: 1, 
    email: 'kaeufer@demo.de', 
    password: 'demo', 
    vorname: 'Max', 
    name: 'Mustermann',
    telefon: '+49 123 456789',
    plz: '10115',
    ort: 'Berlin'
  },
  { 
    id: 2, 
    email: 'verkaeufer@demo.de', 
    password: 'demo', 
    vorname: 'Lisa', 
    name: 'Mueller',
    telefon: '+49 987 654321',
    plz: '80331',
    ort: 'Muenchen'
  }
];

export const DEMO_CARS = [
  {
    id: 1,
    marke: 'BMW',
    modell: '3er',
    karosserie: 'Limousine',
    zustand: 'Gebraucht',
    verkaeuferTyp: 'Haendler',
    sitzplaetze: 5,
    tueren: 4,
    baujahr: 2020,
    preis: 35000,
    kraftstoffart: 'Benzin',
    km: 45000,
    farbe: 'Schwarz',
    beschreibung: 'Gepflegter BMW 3er in sehr gutem Zustand',
    getriebe: 'Automatik',
    ps: 184,
    standort: 'Muenchen',
    ausstattung: ['Allrad', 'Apple CarPlay', 'Alufelgen'],
    bilder: [],
    sellerId: 2
  },
  {
    id: 2,
    marke: 'Audi',
    modell: 'A4',
    karosserie: 'Kombi',
    zustand: 'Gebraucht',
    verkaeuferTyp: 'Privat',
    sitzplaetze: 5,
    tueren: 5,
    baujahr: 2019,
    preis: 28000,
    kraftstoffart: 'Diesel',
    km: 65000,
    farbe: 'Grau',
    beschreibung: 'Familienfreundlicher Kombi mit viel Platz',
    getriebe: 'Automatik',
    ps: 150,
    standort: 'Hamburg',
    ausstattung: ['Navigationssystem', 'Sitzheizung', 'Tempomat'],
    bilder: [],
    sellerId: 2
  },
  {
    id: 3,
    marke: 'Mercedes',
    modell: 'C-Klasse',
    karosserie: 'Limousine',
    zustand: 'Gebraucht',
    verkaeuferTyp: 'Haendler',
    sitzplaetze: 5,
    tueren: 4,
    baujahr: 2021,
    preis: 42000,
    kraftstoffart: 'Hybrid',
    km: 25000,
    farbe: 'Weiss',
    beschreibung: 'Moderner Hybrid mit niedriger Laufleistung',
    getriebe: 'Automatik',
    ps: 211,
    standort: 'Stuttgart',
    ausstattung: ['LED-Scheinwerfer', 'Panoramadach', 'Rueckfahrkamera'],
    bilder: [],
    sellerId: 2
  }
];

export const DEFAULT_FILTERS = {
  marke: '', 
  modell: '',
  karosserie: '',
  zustand: '',
  verkaeuferTyp: '',
  sitzplaetze: '',
  tueren: '',
  farbe: '',
  minPreis: 0, 
  maxPreis: 100000, 
  minBaujahr: 2000, 
  maxBaujahr: 2025, 
  kraftstoffart: '', 
  minKm: 0, 
  maxKm: 300000,
  getriebe: '',
  minPS: 0,
  maxPS: 500,
  umkreis: 0,
  ausstattung: []
};

export const DEFAULT_CAR_FORM = {
  marke: '',
  modell: '',
  karosserie: 'Limousine',
  zustand: 'Gebraucht',
  verkaeuferTyp: 'Privat',
  sitzplaetze: 5,
  tueren: 4,
  baujahr: 2020,
  preis: 20000,
  kraftstoffart: 'Benzin',
  km: 50000,
  farbe: '',
  beschreibung: '',
  getriebe: 'Schaltgetriebe',
  ps: 150,
  standort: '',
  ausstattung: [],
  bilder: []
};
