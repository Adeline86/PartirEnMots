// ============================================================
//  PARTIR EN MOTS — voyages.js
//  Ajoute ici chacun de tes voyages.
//  La page voyage.html lit ce fichier et génère tout seule.
// ============================================================

const VOYAGES = [

  {
    // ── Identifiant unique (URL : voyage.html?id=lisbonne)
    id:     "lisbonne",
    titre:  "Lisbonne sous la pluie",
    lieu:   "Portugal",
    date:   "Novembre 2024",
    saison: "Automne",
    duree:  "5 jours",
    intro:  "Il y a des villes qu'on aime davantage quand elles ne cherchent pas à plaire. Lisbonne mouillée a cette franchise-là.",
    cover:  "",

    // ── Lieux visités (affichés sur la carte)
    lieux: [
      { nom: "Lisbonne", lat: 38.7169, lng: -9.1395 },
    ],

    // ── Jours
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
    date:   "7–15 mai 2025",
    saison: "Printemps",
    duree:  "9 jours",
    intro:  "Il y a des endroits qui ressemblent exactement à ce qu'on imaginait — et c'est encore mieux que prévu. Les Cotswolds, c'est ça : du miel en pierre, des rivières tranquilles, et un printemps qui ne fait pas semblant.",
    cover:  "photos/cotswolds-2026/cover.jpg",

    lieux: [
      { nom: "Lower Slaughter",    lat: 51.8986, lng: -1.7573 },
      { nom: "Bourton-on-the-Water", lat: 51.8858, lng: -1.7587 },
      { nom: "Chipping Campden",   lat: 52.0519, lng: -1.7803 },
      { nom: "Broadway",           lat: 52.0357, lng: -1.8594 },
      { nom: "Gloucester",         lat: 51.8642, lng: -2.2381 },
      { nom: "Oxford",             lat: 51.7520, lng: -1.2577 },
    ],

    jours: [
      {
        titre:         "Arrivée dans les Cotswolds",
        lieux_du_jour: "Chipping Campden · Bourton-on-the-Water",
        entrees: [
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j1-01.jpg",
            tag:    "Chipping Campden",
            titre:  "La couleur du calcaire au soleil de mai",
            texte:  "On ne s'attendait pas à ce que les pierres soient vraiment dorées. C'est pourtant le premier mot qui vient — doré, miel, chaud. Les Cotswolds ont une couleur à eux, et elle s'impose dès le premier village traversé.",
            quote:  "",
          },
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j1-02.jpg",
            tag:    "Bourton-on-the-Water",
            titre:  "Le village aux ponts de pierre",
            texte:  "Bourton-on-the-Water mérite son surnom de « Venise des Cotswolds » — à condition d'y arriver tôt, avant les cars de touristes. La rivière Windrush traverse le village sous une succession de petits ponts en pierre. On s'est assises sur l'un d'eux. Longtemps.",
            quote:  "",
          },
        ],
      },
      {
        titre:         "Lower Slaughter",
        lieux_du_jour: "Lower Slaughter · Upper Slaughter",
        entrees: [
          {
            layout: "full",
            photo:  "photos/cotswolds-2026/j2-01.jpg",
            tag:    "Lower Slaughter",
            titre:  "Tout était réuni — et une éclaircie est arrivée",
            texte:  "Les maisons en pierre dorée, les jardinières débordantes de fleurs, la rivière Eye qui coule sans se presser, le vieux moulin au bout du chemin. On ne cherchait pas mieux. Et puis la lumière a changé — une éclaircie franche, d'un coup, comme un cadeau.",
            quote:  "« Il y a des villages qu'on ne veut pas quitter, pas parce qu'il s'y passe quelque chose, mais précisément parce qu'il ne s'y passe rien. »",
          },
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j2-02.jpg",
            tag:    "Bords de rivière",
            titre:  "L'eau est partout, discrète et indispensable",
            texte:  "Ce qui unit les villages des Cotswolds, c'est peut-être ça — une rivière, un ruisseau, un bief qui longe les jardins. On marche le long de l'eau sans savoir où elle va, et ça suffit.",
            quote:  "",
          },
        ],
      },
      {
        titre:         "Le train à vapeur",
        lieux_du_jour: "Cheltenham · Broadway · Winchcombe (GWSR)",
        entrees: [
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j3-01.jpg",
            tag:    "GWSR",
            titre:  "Le train à vapeur qui ne va nulle part d'urgent",
            texte:  "Le Gloucestershire Warwickshire Steam Railway n'est pas fait pour aller vite ni loin. Il est fait pour regarder défiler les collines par la fenêtre, sentir l'odeur de la vapeur et du charbon, et comprendre pourquoi certaines choses méritent d'être conservées.",
            quote:  "",
          },
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j3-02.jpg",
            tag:    "Broadway",
            titre:  "Un village de carte postale assumé",
            texte:  "Broadway sait exactement ce qu'il est — et ne s'en excuse pas. Les jardins sont parfaits, les façades impeccables, les salons de thé bondés. On a joué le jeu. Le scone aux raisins était excellent.",
            quote:  "",
          },
        ],
      },
      {
        titre:         "Gloucester",
        lieux_du_jour: "Gloucester",
        entrees: [
          {
            layout: "full",
            photo:  "photos/cotswolds-2026/j4-01.jpg",
            tag:    "Cathédrale",
            titre:  "La cathédrale, les cloîtres, et un silence inattendu",
            texte:  "Gloucester se visite souvent en coup de vent. On a pris le temps. La cathédrale cache des cloîtres d'une sérénité rare — de la pierre, de la lumière tamisée, et personne pour vous presser.",
            quote:  "",
          },
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j4-02.jpg",
            tag:    "Gloucester Docks",
            titre:  "Les anciens docks reconvertis avec goût",
            texte:  "Le long des docks victoriens, les entrepôts en brique rouge ont été transformés en musées, cafés et librairies. Une ville qui connaît son histoire sans en faire un musée à ciel ouvert.",
            quote:  "",
          },
        ],
      },
      {
        titre:         "Oxford",
        lieux_du_jour: "Oxford",
        entrees: [
          {
            layout: "left",
            photo:  "photos/cotswolds-2026/j5-01.jpg",
            tag:    "Oxford",
            titre:  "Des vélos, des spires, et l'impression d'avoir raté une vocation",
            texte:  "Oxford intimide un peu, puis séduit beaucoup. Les collèges s'enchaînent, chacun avec sa cour secrète et ses pelouses interdites. On repart avec l'envie d'avoir étudié là — ou au moins d'y revenir.",
            quote:  "« Oxford donne envie d'être plus curieux qu'on ne l'est. »",
          },
          {
            layout: "right",
            photo:  "photos/cotswolds-2026/j5-02.jpg",
            tag:    "Bodleian Library",
            titre:  "Des livres et de la pierre, dans le bon ordre",
            texte:  "La Bodleian Library est l'une des plus anciennes bibliothèques du monde. On ne peut pas y emprunter de livres. On ne peut pas s'y asseoir librement. Et pourtant, rien que d'en traverser les cours, on a envie de lire.",
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
