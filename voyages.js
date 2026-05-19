// ============================================================
//  PARTIR EN MOTS — voyages.js
//  Ajoute ici chacun de tes voyages.
//  La page voyage.html lit ce fichier et génère tout seule.
// ============================================================

const VOYAGES = [

  {
    id:     "lisbonne",
    titre:  "Lisbonne sous la pluie",
    lieu:   "Portugal",
    date:   "Novembre 2024",
    saison: "Automne",
    duree:  "5 jours",
    intro:  "Il y a des villes qu'on aime davantage quand elles ne cherchent pas à plaire. Lisbonne mouillée a cette franchise-là.",
    cover:  "",

    lieux: [
      { nom: "Lisbonne", lat: 38.7169, lng: -9.1395 },
    ],

    jours: [
      {
        titre:         "Arrivée à Lisbonne",
        lieux_du_jour: "Aéroport · Alfama",
        entrees: [
          {
            layout: "left",
            photo:  "",
            tag:    "Arrivée",
            titre:  "L'aéroport sentait l'eau salée et le café brûlé",
            texte:  "On est arrivées un mardi matin sous un ciel couleur ardoise. Le chauffeur de taxi avait les essuie-glaces en panne et s'en fichait complètement. La ville apparaissait par fragments entre les gouttes — des façades carrelées, des câbles de tramway, une femme avec un parapluie rouge qui ne regardait pas où elle allait.",
            quote:  "",
          },
          {
            layout: "right",
            photo:  "",
            tag:    "Alfama",
            titre:  "Les pavés brillaient comme si on les avait cirés pour nous",
            texte:  "Alfama sous la pluie, c'est un labyrinthe qui rétrécit. Les ruelles deviennent des rigoles, les escaliers des cascades au ralenti. On a monté, descendu, remonté. On ne savait plus si on cherchait le Castelo ou juste un endroit abrité où souffler.",
            quote:  "",
          },
        ],
      },
      {
        titre:         "Le Tage et Bairro Alto",
        lieux_du_jour: "Cais do Sodré · Bairro Alto",
        entrees: [
          {
            layout: "full",
            photo:  "",
            tag:    "Tage",
            titre:  "Le fleuve et le ciel avaient la même couleur",
            texte:  "On s'est arrêtées longtemps sur le Cais do Sodré à regarder le Tage disparaître dans le brouillard. Impossible de dire où finissait l'eau et où commençait le ciel.",
            quote:  "« Il faut du mauvais temps pour voir une ville telle qu'elle est vraiment — sans le filtre du beau temps et des bonnes intentions. »",
          },
          {
            layout: "left",
            photo:  "",
            tag:    "Bairro Alto",
            titre:  "Un bar sans enseigne, une fenêtre embuée, du fado",
            texte:  "On l'a trouvé par hasard — une porte entrouverte, de la lumière orange, une voix de femme qui faisait quelque chose d'inhabituel avec le silence. On est restées deux heures. On n'a pas commandé grand-chose. Personne ne nous a rien reproché.",
            quote:  "",
          },
        ],
      },
      {
        titre:         "Dernier jour",
        lieux_du_jour: "Lisbonne",
        entrees: [
          {
            layout: "right",
            photo:  "",
            tag:    "Dernier jour",
            titre:  "Le soleil est sorti le matin du départ, évidemment",
            texte:  "Cinq jours de pluie, et le dernier matin — valises bouclées, taxi commandé — la lumière dorée s'est posée sur les azulejos comme si elle avait attendu qu'on soit sur le départ pour se montrer. C'était parfait. C'était exactement Lisbonne.",
            quote:  "« On revient toujours de Lisbonne avec des photos floues et l'envie d'y retourner. »",
          },
        ],
      },
    ],
  },

  {
    id:     "cotswolds",
    titre:  "Les Cotswolds, pierre après pierre",
    lieu:   "Angleterre",
    date:   "7–14 mai 2026",
    saison: "Printemps",
    duree:  "8 jours",
    intro:  "Il y a des endroits qui ressemblent exactement à ce qu'on imaginait — et c'est encore mieux que prévu. Les Cotswolds, c'est ça : du miel en pierre, des rivières tranquilles, et un printemps qui ne fait pas semblant.",
    cover:  "photos/cotswolds-2026/cover.jpg",

    lieux: [
      { nom: "Bibury",            lat: 51.7600, lng: -1.8387 },
      { nom: "Burford",           lat: 51.8083, lng: -1.6333 },
      { nom: "Cirencester",       lat: 51.7185, lng: -1.9669 },
      { nom: "Toddington (GWSR)", lat: 51.9965, lng: -2.0162 },
      { nom: "Winchcombe",        lat: 51.9609, lng: -1.9720 },
      { nom: "Broadway",          lat: 52.0357, lng: -1.8594 },
      { nom: "Cleeve Hill",       lat: 51.9290, lng: -2.0120 },
      { nom: "Bourton-on-the-Water", lat: 51.8858, lng: -1.7587 },
      { nom: "Lower Slaughter",   lat: 51.8986, lng: -1.7573 },
      { nom: "Upper Slaughter",   lat: 51.9058, lng: -1.7620 },
      { nom: "Stow-on-the-Wold",  lat: 51.9300, lng: -1.7267 },
      { nom: "Chipping Campden",  lat: 52.0519, lng: -1.7803 },
      { nom: "Snowshill",         lat: 52.0189, lng: -1.8320 },
      { nom: "Stanton",           lat: 52.0128, lng: -1.8656 },
      { nom: "Stanway",           lat: 51.9975, lng: -1.8608 },
      { nom: "Broadway Tower",    lat: 52.0276, lng: -1.8453 },
      { nom: "Castle Combe",      lat: 51.4940, lng: -2.2285 },
      { nom: "Lacock",            lat: 51.4150, lng: -2.1140 },
      { nom: "Malmesbury",        lat: 51.5850, lng: -2.1040 },
      { nom: "Westonbirt Arboretum", lat: 51.6070, lng: -2.2100 },
      { nom: "Tetbury",           lat: 51.6380, lng: -2.1600 },
      { nom: "Gloucester",        lat: 51.8642, lng: -2.2381 },
      { nom: "Oxford",            lat: 51.7520, lng: -1.2577 },
    ],

    jours: [
      {
        titre:         "Paris → Londres → Oxford → Bibury",
        lieux_du_jour: "Oxford · Bibury",
        entrees: [
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j1-01.jpg",
            tag:    "Trajet",
            titre:  "L'Eurostar, puis les Cotswolds apparaissent",
            texte:  "Paris le matin, Londres en milieu de journée, et les Cotswolds en fin d'après-midi. Le trajet fait partie du voyage — les paysages changent imperceptiblement depuis la fenêtre du train, jusqu'à ce que les pierres dorées remplacent le béton.",
            quote:  "",
          },
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j1-02.jpg",
            tag:    "Bibury",
            titre:  "Premiers pas dans le village qui ressemble à une aquarelle",
            texte:  "Bibury pour poser les valises — et déjà, la surprise. Arlington Row, ses maisons en pierre du 14e siècle le long du ruisseau Coln, la lumière de fin de journée. On ne s'attendait pas à être aussi vite conquises.",
            quote:  "",
          },
        ],
      },
      {
        titre:         "Burford et Cirencester",
        lieux_du_jour: "Burford · Cirencester",
        entrees: [
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j2-01.jpg",
            tag:    "Burford",
            titre:  "La grand-rue qui descend vers la rivière",
            texte:  "Burford s'étire sur une seule rue principale qui dévale vers le Windrush. Les façades se succèdent, chacune légèrement différente, chacune en pierre de la même couleur miel. C'est à la fois répétitif et jamais monotone.",
            quote:  "",
          },
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j2-02.jpg",
            tag:    "Cirencester",
            titre:  "L'ancienne capitale romaine, tranquille et fière",
            texte:  "Cirencester était autrefois la deuxième ville de Bretagne romaine. Aujourd'hui c'est une ville de marché paisible avec une église-cathédrale démesurément belle pour sa taille. On a pris le temps de s'y perdre.",
            quote:  "",
          },
        ],
      },
      {
        titre:         "Le train à vapeur et Cleeve Hill",
        lieux_du_jour: "Toddington · Winchcombe · Broadway · Cleeve Hill",
        entrees: [
          {
            layout: "full",
            photo:  "photos/cotswolds-2026/j3-01.jpg",
            tag:    "GWSR",
            titre:  "Le train à vapeur qui ne va nulle part d'urgent",
            texte:  "Le Gloucestershire Warwickshire Steam Railway relie Toddington à Broadway en longeant les collines. Ce n'est pas fait pour aller vite — c'est fait pour regarder défiler les prairies par la fenêtre, sentir l'odeur du charbon, et comprendre pourquoi certaines choses méritent d'être conservées.",
            quote:  "",
          },
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j3-02.jpg",
            tag:    "Winchcombe",
            titre:  "Un village discret, loin des cars de touristes",
            texte:  "Winchcombe n'est pas sur tous les guides. C'est peut-être pour ça qu'il garde quelque chose d'authentique — des habitants qui vivent là, des commerces qui ne sont pas tous des tea rooms, une rue principale sans filet.",
            quote:  "",
          },
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j3-03.jpg",
            tag:    "Cleeve Hill",
            titre:  "Le point culminant des Cotswolds, et une belle leçon d'humilité",
            texte:  "Cleeve Hill est le point le plus haut des Cotswolds — ce qui ne garantit pas forcément la vue. Le sommet s'ouvre sur une grande plaine herbeuse, sans vraiment de belvédère sur la région. Pas le panorama espéré. Mais la balade dans les champs, le vent, l'espace — c'était une autre sorte de beauté.",
            quote:  "« On ne voit pas toujours ce qu'on cherche. On voit parfois mieux. »",
          },
        ],
      },
      {
        titre:         "Bourton, Lower et Upper Slaughter",
        lieux_du_jour: "Bourton-on-the-Water · Lower Slaughter · Upper Slaughter",
        entrees: [
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j4-01.jpg",
            tag:    "Bourton-on-the-Water",
            titre:  "La Venise des Cotswolds, avant les touristes",
            texte:  "Bourton-on-the-Water mérite son surnom — à condition d'y arriver tôt. La rivière Windrush traverse le village sous une succession de petits ponts en pierre. On s'est assises sur l'un d'eux. Longtemps.",
            quote:  "",
          },
          {
            layout: "full",
            photo:  "photos/cotswolds-2026/j4-02.jpg",
            tag:    "Lower Slaughter",
            titre:  "Tout était réuni — et une éclaircie est arrivée",
            texte:  "Les maisons en pierre dorée, les jardinières débordantes de fleurs, la rivière Eye qui coule sans se presser, le vieux moulin au bout du chemin. Et puis la lumière a changé — une éclaircie franche, d'un coup, comme un cadeau.",
            quote:  "« Il y a des villages qu'on ne veut pas quitter, pas parce qu'il s'y passe quelque chose, mais précisément parce qu'il ne s'y passe rien. »",
          },
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j4-03.jpg",
            tag:    "Upper Slaughter",
            titre:  "Le village d'à côté, presque vide, presque secret",
            texte:  "Upper Slaughter est à vingt minutes à pied de Lower Slaughter et à des années-lumière en termes de fréquentation. Quelques maisons, une église normande, et le silence. On a failli ne pas y aller. On aurait eu tort.",
            quote:  "",
          },
        ],
      },
      {
        titre:         "Les villages du nord et la Broadway Tower",
        lieux_du_jour: "Stow-on-the-Wold · Chipping Campden · Snowshill · Stanton · Stanway · Broadway Tower",
        entrees: [
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j5-01.jpg",
            tag:    "Stow-on-the-Wold",
            titre:  "Le carrefour des Cotswolds",
            texte:  "Stow-on-the-Wold est perché sur une colline au croisement de plusieurs routes romaines. Sa grande place, ses ruelles étroites entre les maisons en pierre — on comprend pourquoi les marchés s'y tenaient depuis le Moyen Âge.",
            quote:  "",
          },
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j5-02.jpg",
            tag:    "Chipping Campden",
            titre:  "La rue la plus belle des Cotswolds, peut-être",
            texte:  "La High Street de Chipping Campden est souvent citée comme la plus belle des Cotswolds. On comprend pourquoi — les façades s'enchaînent sans discontinuer, chacune différente, toutes dans la même pierre miel du pays.",
            quote:  "",
          },
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j5-03.jpg",
            tag:    "Snowshill · Stanton · Stanway",
            titre:  "Trois villages, une même lumière de fin d'après-midi",
            texte:  "Snowshill et son manoir plein de curiosités, Stanton et ses maisons à colombages, Stanway et son château discret derrière les arbres. Une journée de marche entre ces trois-là, et on a l'impression d'avoir traversé plusieurs siècles.",
            quote:  "",
          },
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j5-04.jpg",
            tag:    "Broadway Tower",
            titre:  "La folie néogothique au sommet de la colline",
            texte:  "La Broadway Tower est une «folie» — une tour construite au 18e siècle pour le seul plaisir de la vue. Par temps clair, on voit jusqu'à treize comtés. Ce soir-là, on a surtout vu le soleil descendre sur les champs. C'était largement suffisant.",
            quote:  "",
          },
        ],
      },
      {
        titre:         "Le sud des Cotswolds",
        lieux_du_jour: "Castle Combe · Lacock · Malmesbury · Westonbirt · Tetbury",
        entrees: [
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j6-01.jpg",
            tag:    "Castle Combe",
            titre:  "Le village le plus photographié d'Angleterre",
            texte:  "Castle Combe mérite sa réputation — et la dépasse. Pas une antenne, pas un câble visible, pas une façade moderne. Le village est figé dans le temps, et ce n'est pas une figure de style. On a du mal à y croire, et pourtant.",
            quote:  "",
          },
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j6-02.jpg",
            tag:    "Lacock",
            titre:  "Le village où le temps s'est arrêté pour de vrai",
            texte:  "Lacock appartient au National Trust — ce qui explique qu'il soit aussi bien préservé. L'abbaye, les ruelles pavées, les maisons à colombages. On reconnaît des décors de films sans les avoir vus. Le lieu a cette qualité rare : il est authentique et irréel en même temps.",
            quote:  "",
          },
          {
            layout: "full",
            photo:  "photos/cotswolds-2026/j6-03.jpg",
            tag:    "Westonbirt Arboretum",
            titre:  "Une cathédrale végétale",
            texte:  "Le National Arboretum de Westonbirt abrite des milliers d'arbres du monde entier. En mai, les azalées et les rhododendrons sont en fleur. On marche dans les allées comme dans une nef — silencieux, un peu émerveillés.",
            quote:  "« Les arbres ont une façon de remettre les choses à leur place. »",
          },
        ],
      },
      {
        titre:         "Gloucester",
        lieux_du_jour: "Gloucester — Docks · Cathédrale",
        entrees: [
          {
            layout: "full",
            photo:  "photos/cotswolds-2026/j7-01.jpg",
            tag:    "Cathédrale",
            titre:  "La cathédrale, les cloîtres, et un silence inattendu",
            texte:  "Gloucester se visite souvent en coup de vent. On a pris le temps. La cathédrale cache des cloîtres d'une sérénité rare — de la pierre, de la lumière tamisée, et personne pour vous presser. On comprend que des scènes de Harry Potter y aient été tournées.",
            quote:  "",
          },
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j7-02.jpg",
            tag:    "Gloucester Docks",
            titre:  "Les anciens docks reconvertis avec goût",
            texte:  "Le long des docks victoriens, les entrepôts en brique rouge ont été transformés en musées, cafés et librairies. Une ville qui connaît son histoire sans en faire un musée à ciel ouvert — c'est plus rare qu'on ne le croit.",
            quote:  "",
          },
        ],
      },
      {
        titre:         "Oxford et retour",
        lieux_du_jour: "Oxford · Londres",
        entrees: [
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j8-01.jpg",
            tag:    "Oxford",
            titre:  "Des vélos, des spires, et l'impression d'avoir raté une vocation",
            texte:  "Oxford intimide un peu, puis séduit beaucoup. Les collèges s'enchaînent, chacun avec sa cour secrète et ses pelouses interdites. On repart avec l'envie d'avoir étudié là — ou au moins d'y revenir.",
            quote:  "« Oxford donne envie d'être plus curieux qu'on ne l'est. »",
          },
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j8-02.jpg",
            tag:    "Bodleian Library",
            titre:  "Des livres et de la pierre, dans le bon ordre",
            texte:  "La Bodleian Library est l'une des plus anciennes bibliothèques du monde. On ne peut pas y emprunter de livres, on ne peut pas s'y asseoir librement. Et pourtant, rien que d'en traverser les cours, on a envie de lire.",
            quote:  "",
          },
        ],
      },
    ],
  },

  // ============================================================
  //  MODÈLE VIDE — copie-colle ce bloc pour chaque nouveau voyage
  // ============================================================
  /*
  {
    id:     "mon-voyage",
    titre:  "Mon titre",
    lieu:   "Pays",
    date:   "Mois Année",
    saison: "Printemps",
    duree:  "X jours",
    intro:  "Une phrase d'accroche.",
    cover:  "photos/mon-voyage/cover.jpg",

    lieux: [
      { nom: "Ville A", lat: 00.0000, lng: 00.0000 },
    ],

    jours: [
      {
        titre:         "Jour 1",
        lieux_du_jour: "Ville A · Quartier X",
        entrees: [
          {
            layout: "left",
            photo:  "photos/mon-voyage/j1-01.jpg",
            tag:    "Un mot",
            titre:  "Le titre de cette photo",
            texte:  "Ton paragraphe ici.",
            quote:  "",
          },
        ],
      },
    ],
  },
  */

];
