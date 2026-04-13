// Tour stop data for San Miguel de Allende Audio Tour
// ─────────────────────────────────────────────────────────────────
// To add a new stop: copy one object below, fill in all fields,
// then drop your .mp3 into audio/ and photos into images/audio_N/.
//
// NOTE: There is also "audio/5 Fray Juan J 9.20.mp3" — an alternate
// recording for the San Juan area — kept here for reference.
// ─────────────────────────────────────────────────────────────────

const STOPS = [
  {
    id: "intro",
    name_en: "Introduction to San Miguel de Allende",
    name_es: "Introducción a San Miguel de Allende",
    description_en: "Welcome to San Miguel de Allende — a UNESCO World Heritage city whose cobblestone streets and unique skyline have changed little since the 18th century. This audio tour will guide you through the landmarks that shaped Mexico's struggle for independence and the culture that still pulses through the city today.",
    description_es: "Bienvenido a San Miguel de Allende, ciudad Patrimonio de la Humanidad por la UNESCO, cuyas calles empedradas y horizonte único han cambiado poco desde el siglo XVIII. Este audiorecorrido te guiará por los monumentos que marcaron la lucha de México por la independencia y la cultura que aún late en la ciudad hoy.",
    lat: 20.91396,
    lng: -100.74374,
    audio_en: "audio/1 Allende Intro 4 mins.mp3",
    audio_es: null,
    images: [
      "images/audio_1/parroquia_nice.png",
      "images/audio_1/Ignacio.jpg",
      "images/audio_1/Parroquia10.jpg"
    ]
  },
  {
    id: "conspiracy",
    name_en: "House of Conspiracy",
    name_es: "Casa de las Conspiraciones",
    description_en: "In the years before 1810, this building was one of the clandestine meeting places where Ignacio Allende, Juan Aldama, and fellow patriots quietly plotted Mexico's break from Spanish rule. The conversations held here helped set the independence movement in motion.",
    description_es: "En los años previos a 1810, este edificio fue uno de los lugares de reunión clandestina donde Ignacio Allende, Juan Aldama y otros patriotas planeaban en silencio la independencia de México. Las conversaciones sostenidas aquí ayudaron a poner en marcha el movimiento independentista.",
    lat: 20.91443,
    lng: -100.74353,
    audio_en: "audio/2 House of Conspiracy 2 mins.mp3",
    audio_es: null,
    images: [
      "images/audio_2/1_Gazebo.jpg",
      "images/audio_2/2_Walk1.jpg",
      "images/audio_2/3_Walk2.jpg",
      "images/audio_2/4_Plaza de la Conspiracion.jpg"
    ]
  },
  {
    id: "hidalgo",
    name_en: "Hidalgo",
    name_es: "Hidalgo",
    description_en: "Miguel Hidalgo y Costilla — priest, intellectual, and revolutionary — is revered as the Father of Mexican Independence. Though his famous Grito de Independencia rang out in nearby Dolores, his alliance with San Miguel's patriots was central to the uprising that began Mexico's long road to nationhood.",
    description_es: "Miguel Hidalgo y Costilla — sacerdote, intelectual y revolucionario — es venerado como el Padre de la Independencia de México. Aunque su famoso Grito de Independencia resonó en el cercano Dolores, su alianza con los patriotas de San Miguel fue fundamental en el levantamiento que inició el camino de México hacia la nación.",
    lat: 20.914229,
    lng: -100.743920,
    audio_en: "audio/3 Hidalgo 6.10.mp3",
    audio_es: null,
    images: []
  },
  {
    id: "jardin",
    name_en: "El Jardín Principal",
    name_es: "El Jardín Principal",
    description_en: "The Jardín is the beating heart of San Miguel — a shaded central plaza ringed by colonial arcades, outdoor cafés, and the iconic towers of the Parroquia. Locals and visitors gather here at all hours, from the morning tianguis to the evening paseo.",
    description_es: "El Jardín es el corazón palpitante de San Miguel: una plaza central sombreada rodeada de portales coloniales, cafés al aire libre y las icónicas torres de la Parroquia. Locales y visitantes se reúnen aquí a todas horas, desde el tianguis matutino hasta el paseo vespertino.",
    lat: 20.914221,
    lng: -100.743646,
    audio_en: "audio/4 Jardin 3.10.mp3",
    audio_es: null,
    images: [
      "images/audio_4/Jardin.jpg"
    ]
  },
  {
    id: "san_juan",
    name_en: "Fray Juan de San Miguel",
    name_es: "Fray Juan de San Miguel",
    description_en: "Fray Juan de San Miguel was the Franciscan friar who founded this settlement around 1542, planting the seed of what would grow into San Miguel de Allende. Known for his compassion and his close ties with the indigenous Chichimec people, he established the town near the natural springs at El Chorro that still flow today. He eventually moved on to found other communities, but his legacy endures in the city's very name.",
    description_es: "Fray Juan de San Miguel fue el fraile franciscano que fundó este asentamiento alrededor de 1542, sembrando la semilla de lo que se convertiría en San Miguel de Allende. Conocido por su compasión y sus estrechos vínculos con el pueblo indígena chichimeca, estableció la población cerca de los manantiales de El Chorro que aún fluyen hoy. Con el tiempo partió a fundar otras comunidades, pero su legado perdura en el nombre mismo de la ciudad.",
    lat: 20.91392,
    lng: -100.74396,
    audio_en: "audio/5 San Juan 8.25 mins.mp3",
    audio_es: null,
    images: [
      "images/audio_5/5-San Juan.jpg"
    ]
  },
  {
    id: "parroquia_exterior",
    name_en: "Parroquia — Exterior",
    name_es: "Parroquia — Exterior",
    description_en: "The soaring neo-Gothic towers of the Parroquia de San Miguel Arcángel define the city's skyline. Self-taught indigenous architect Zeferino Gutiérrez designed this extraordinary facade in the late 19th century, reportedly sketching his inspiration from postcards of European cathedrals.",
    description_es: "Las imponentes torres neogóticas de la Parroquia de San Miguel Arcángel definen el horizonte de la ciudad. El arquitecto indígena autodidacta Zeferino Gutiérrez diseñó esta extraordinaria fachada a finales del siglo XIX, inspirándose supuestamente en postales de catedrales europeas.",
    lat: 20.91371,
    lng: -100.74359,
    audio_en: "audio/6 Parroquia Outside J 9.40.mp3",
    audio_es: null,
    images: [
      "images/audio_6/4 San Raphael.jpg",
      "images/audio_6/5 Office.jpg",
      "images/audio_6/6 Parroquia.jpg",
      "images/audio_6/7 Parroquia12.jpg"
    ],
    aerial_view: true,
    old_parroquia: true
  },
  {
    id: "parroquia_interior",
    name_en: "Parroquia — Interior",
    name_es: "Parroquia — Interior",
    description_en: "Step inside and the full splendor of the Parroquia reveals itself: gilded altarpieces, devotional chapels, and centuries of accumulated faith. The interior has been the spiritual heart of San Miguel through more than three centuries of baptisms, weddings, and feast days.",
    description_es: "Al entrar, se revela todo el esplendor de la Parroquia: retablos dorados, capillas devocionales y siglos de fe acumulada. El interior ha sido el corazón espiritual de San Miguel durante más de tres siglos de bautizos, bodas y días de fiesta.",
    lat: 20.91351,
    lng: -100.74370,
    audio_en: "audio/7 Parroquia Inside J 17.30.mp3",
    audio_es: null,
    images: [
      "images/audio_7/1  St. Mike.jpg",
      "images/audio_7/2  Senor.jpg",
      "images/audio_7/3  Senor1.jpg",
      "images/audio_7/4  main aisle.jpg",
      "images/audio_7/5  floor.jpg",
      "images/audio_7/6  Virgin.jpg",
      "images/audio_7/7  St Pat.jpg"
    ],
  },
  {
    id: "allende_house",
    name_en: "House of Allende",
    name_es: "Casa de Allende",
    description_en: "This elegant colonial mansion on Cuna de Allende is the birthplace of Ignacio Allende, the military leader who co-commanded the 1810 uprising. Today it houses the Museo Histórico de San Miguel de Allende, with exhibits tracing the city's pivotal role in the independence movement.",
    description_es: "Esta elegante mansión colonial en Cuna de Allende es el lugar de nacimiento de Ignacio Allende, el líder militar que co-comandó el levantamiento de 1810. Hoy alberga el Museo Histórico de San Miguel de Allende, con exhibiciones que narran el papel clave de la ciudad en el movimiento de independencia.",
    lat: 20.91393,
    lng: -100.74405,
    audio_en: "audio/8 Allende House.mp3",
    audio_es: null,
    images: [
      "images/audio_8/photo1jpg.jpg"
    ]
  },
  {
    id: "canal_house",
    name_en: "House of the Canal",
    name_es: "Casa del Canal",
    description_en: "The Casa del Mayorazgo de Canal is one of San Miguel's finest 18th-century mansions, built by the Canal family whose fortune came from silver mining. Its elaborate baroque facade is a testament to the wealth and artistic ambition of colonial New Spain at its height.",
    description_es: "La Casa del Mayorazgo de Canal es una de las mansiones más destacadas del San Miguel del siglo XVIII, construida por la familia Canal cuya fortuna provenía de la minería de plata. Su elaborada fachada barroca da testimonio de la riqueza y ambición artística de la Nueva España colonial en su apogeo.",
    lat: 20.91445,
    lng: -100.74425,
    audio_en: "audio/9 Canal House 5.0.mp3",
    audio_es: null,
    images: [
      "images/audio_9/IMG_1976.jpg",
      "images/audio_9/3 Virgin Loretto.jpg",
      "images/audio_9/4 Doorway.jpg",
      "images/audio_9/5 Back Hallway.jpg"
    ]
  },
  {
    id: "bellas_artes",
    name_en: "Bellas Artes",
    name_es: "Bellas Artes",
    description_en: "The Centro Cultural El Nigromante — known as Bellas Artes — occupies the former convent of La Concepción. Since the 1950s it has been San Miguel's premier art school and cultural center, drawing painters, sculptors, and muralists from across Mexico and the world.",
    description_es: "El Centro Cultural El Nigromante, conocido como Bellas Artes, ocupa el antiguo convento de La Concepción. Desde la década de 1950 ha sido la principal escuela de arte y centro cultural de San Miguel, atrayendo a pintores, escultores y muralistas de todo México y el mundo.",
    lat: 20.91488,
    lng: -100.74532,
    audio_en: "audio/10 Bellas Artes.mp3",
    audio_es: null,
    images: []
  }
];
