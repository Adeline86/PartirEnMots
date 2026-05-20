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
        quote:         "",
        // ── photos[] : une entrée par photo
        // photo  : chemin vers le fichier, ex: "photos/lisbonne/j1-01.jpg"
        // tag    : petit mot en haut (lieu, moment...)
        // titre  : titre affiché dans la lightbox
        // texte  : légende affichée dans la lightbox (3-4 lignes)
        photos: [
          {
            photo: "",
            tag:   "Arrivée",
            titre: "L'aéroport sentait l'eau salée et le café brûlé",
            texte: "On est arrivés un mardi matin sous un ciel couleur ardoise. Le chauffeur de taxi avait les essuie-glaces en panne et s'en fichait complètement. La ville apparaissait par fragments entre les gouttes — des façades carrelées, des câbles de tramway, une femme avec un parapluie rouge qui ne regardait pas où elle allait.",
          },
          {
            photo: "",
            tag:   "Alfama",
            titre: "Les pavés brillaient comme si on les avait cirés pour nous",
            texte: "Alfama sous la pluie, c'est un labyrinthe qui rétrécit. Les ruelles deviennent des rigoles, les escaliers des cascades au ralenti. On a monté, descendu, remonté. On ne savait plus si on cherchait le Castelo ou juste un endroit abrité où souffler.",
          },
        ],
      },
      {
        titre:         "Le Tage et Bairro Alto",
        lieux_du_jour: "Cais do Sodré · Bairro Alto",
        quote:         "« Il faut du mauvais temps pour voir une ville telle qu'elle est vraiment — sans le filtre du beau temps et des bonnes intentions. »",
        photos: [
          {
            photo: "",
            tag:   "Tage",
            titre: "Le fleuve et le ciel avaient la même couleur",
            texte: "On s'est arrêtés longtemps sur le Cais do Sodré à regarder le Tage disparaître dans le brouillard. Impossible de dire où finissait l'eau et où commençait le ciel.",
          },
          {
            photo: "",
            tag:   "Bairro Alto",
            titre: "Un bar sans enseigne, une fenêtre embuée, du fado",
            texte: "On l'a trouvé par hasard — une porte entrouverte, de la lumière orange, une voix de femme qui faisait quelque chose d'inhabituel avec le silence. On est restés deux heures. On n'a pas commandé grand-chose. Personne ne nous a rien reproché.",
          },
        ],
      },
      {
        titre:         "Dernier jour",
        lieux_du_jour: "Lisbonne",
        quote:         "« On revient toujours de Lisbonne avec des photos floues et l'envie d'y retourner. »",
        photos: [
          {
            photo: "",
            tag:   "Dernier jour",
            titre: "Le soleil est sorti le matin du départ, évidemment",
            texte: "Cinq jours de pluie, et le dernier matin — valises bouclées, taxi commandé — la lumière dorée s'est posée sur les azulejos comme si elle avait attendu qu'on soit sur le départ pour se montrer. C'était parfait. C'était exactement Lisbonne.",
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
      { nom: "Bibury",               lat: 51.7600, lng: -1.8387 },
      { nom: "Burford",              lat: 51.8083, lng: -1.6333 },
      { nom: "Cirencester",          lat: 51.7185, lng: -1.9669 },
      { nom: "Toddington (GWSR)",    lat: 51.9965, lng: -2.0162 },
      { nom: "Winchcombe",           lat: 51.9609, lng: -1.9720 },
      { nom: "Broadway",             lat: 52.0357, lng: -1.8594 },
      { nom: "Cleeve Hill",          lat: 51.9290, lng: -2.0120 },
      { nom: "Bourton-on-the-Water", lat: 51.8858, lng: -1.7587 },
      { nom: "Lower Slaughter",      lat: 51.8986, lng: -1.7573 },
      { nom: "Upper Slaughter",      lat: 51.9058, lng: -1.7620 },
      { nom: "Stow-on-the-Wold",     lat: 51.9300, lng: -1.7267 },
      { nom: "Chipping Campden",     lat: 52.0519, lng: -1.7803 },
      { nom: "Snowshill",            lat: 52.0189, lng: -1.8320 },
      { nom: "Stanton",              lat: 52.0128, lng: -1.8656 },
      { nom: "Stanway",              lat: 51.9975, lng: -1.8608 },
      { nom: "Broadway Tower",       lat: 52.0276, lng: -1.8453 },
      { nom: "Castle Combe",         lat: 51.4940, lng: -2.2285 },
      { nom: "Lacock",               lat: 51.4150, lng: -2.1140 },
      { nom: "Malmesbury",           lat: 51.5850, lng: -2.1040 },
      { nom: "Westonbirt Arboretum", lat: 51.6070, lng: -2.2100 },
      { nom: "Tetbury",              lat: 51.6380, lng: -2.1600 },
      { nom: "Gloucester",           lat: 51.8642, lng: -2.2381 },
      { nom: "Oxford",               lat: 51.7520, lng: -1.2577 },
    ],
    jours: [
      {
        titre:         "Les premiers pas",
        lieux_du_jour: "Oxford · Bibury",
        quote:         "",
        legende:       "Paris le matin, Londres en milieu de journée, et Bibury en fin d'après-midi — le trajet fait partie du voyage. Arlington Row nous a accueillis comme une promesse tenue : les maisons en pierre du 14e siècle le long du Coln, les jardinières qui débordent, la lumière de mai qui change tout selon l'heure. On a pris le temps de regarder les détails — le grain de la pierre, les lichens sur les murs, les reflets dans le ruisseau. On est restés jusqu'à la fermeture du soleil. On ne s'attendait pas à être aussi vite conquis.",
        photos: [
          { photo: "photos/cotswolds-2026/j1-01.jpg",  tag: "Trajet",  titre: "L'Eurostar, puis les Cotswolds apparaissent", texte: "Paris le matin, Londres en milieu de journée, et les Cotswolds en fin d'après-midi. Le trajet fait partie du voyage — les paysages changent imperceptiblement depuis la fenêtre du train, jusqu'à ce que les pierres dorées remplacent le béton." },
          { photo: "photos/cotswolds-2026/j1-02.jpg",  tag: "Bibury",  titre: "Premiers pas dans le village qui ressemble à une aquarelle", texte: "Bibury pour poser les valises — et déjà, la surprise. Arlington Row, ses maisons en pierre du 14e siècle le long du ruisseau Coln, la lumière de fin de journée. On ne s'attendait pas à être aussi vite conquis." },
          { photo: "photos/cotswolds-2026/j1-03.jpg",  tag: "Bibury",  titre: "Arlington Row au crépuscule", texte: "La rangée de cottages la plus photographiée d'Angleterre mérite sa réputation. En fin de journée, quand les touristes sont repartis, le silence revient et la lumière change tout." },
          { photo: "photos/cotswolds-2026/j1-04.jpg",  tag: "Bibury",  titre: "Le ruisseau Coln longe les jardins", texte: "L'eau est partout à Bibury — le Coln traverse le village avec une discrétion que démentent ses reflets. On s'est arrêtés longtemps sur le petit pont." },
          { photo: "photos/cotswolds-2026/j1-05.jpg",  tag: "Bibury",  titre: "Les pierres et les fleurs de mai", texte: "Mai est le meilleur mois pour les Cotswolds. Les jardinières débordent, les grimpantes couvrent les façades, et la pierre dorée contraste avec le vert vif du printemps." },
          { photo: "photos/cotswolds-2026/j1-06.jpg",  tag: "Bibury",  titre: "Une façade, cent nuances de beige", texte: "La pierre calcaire des Cotswolds change de couleur selon la lumière — dorée le matin, miel à midi, presque rose au coucher du soleil." },
          { photo: "photos/cotswolds-2026/j1-07.jpg",  tag: "Bibury",  titre: "Le moulin à eau de Bibury", texte: "L'ancien moulin à truite de Bibury est l'un des bâtiments les plus anciens du village. L'eau tourbillonne encore dans les bassins comme si le temps s'était arrêté." },
          { photo: "photos/cotswolds-2026/j1-08.jpg",  tag: "Bibury",  titre: "Jardins et haies bien taillées", texte: "Les jardins anglais ont cette façon d'être à la fois ordonnés et généreux — tout pousse avec exubérance dans un cadre très structuré." },
          { photo: "photos/cotswolds-2026/j1-09.jpg",  tag: "Bibury",  titre: "La lumière de la fin d'après-midi", texte: "Vers 18h, la lumière de mai rase les toits et allume les façades. C'est l'heure où les villages des Cotswolds sont les plus beaux." },
          { photo: "photos/cotswolds-2026/j1-10.jpg",  tag: "Bibury",  titre: "Détails de pierre", texte: "On finit par regarder les détails — le grain de la pierre, le lichens sur les murs, les joints centenaires. Chaque façade est un peu différente." },
          { photo: "photos/cotswolds-2026/j1-11.jpg",  tag: "Bibury",  titre: "Le soir tombe sur Arlington Row", texte: "On est restés jusqu'à la fermeture du soleil. Dernier regard sur Arlington Row avant de rentrer. Demain, les Cotswolds commencent vraiment." },
        ],
      },
      {
        titre:         "Burford et Cirencester",
        lieux_du_jour: "Burford · Cirencester",
        quote:         "",
        legende:       "Deux villes, deux ambiances — Burford et sa grand-rue en pente vers le Windrush, Cirencester et son passé romain discret sous les façades en pierre. Une journée pour comprendre que les Cotswolds ne se résument pas aux villages de carte postale.",
        photos: [
          { photo: "photos/cotswolds-2026/j2-01.jpg", tag: "Burford",      titre: "La grand-rue qui descend vers la rivière", texte: "Burford s'étire sur une seule rue principale qui dévale vers le Windrush. Les façades se succèdent, chacune légèrement différente, chacune en pierre de la même couleur miel. C'est à la fois répétitif et jamais monotone." },
          { photo: "photos/cotswolds-2026/j2-02.jpg", tag: "Cirencester",  titre: "L'ancienne capitale romaine, tranquille et fière", texte: "Cirencester était autrefois la deuxième ville de Bretagne romaine. Aujourd'hui c'est une ville de marché paisible avec une église-cathédrale démesurément belle pour sa taille. On a pris le temps de s'y perdre." },
        ],
      },
      {
        titre:         "Le train à vapeur",
        lieux_du_jour: "Toddington · Winchcombe · Broadway · Cleeve Hill",
        quote:         "",
        legende:       "Une journée entre nostalgie et grand air — le GWSR pour traverser les collines à la vitesse du siècle dernier, Winchcombe pour l'authenticité, et Cleeve Hill pour une leçon d'humilité face à une plaine sans horizon.",
        photos: [
          { photo: "photos/cotswolds-2026/j3-01.jpg", tag: "GWSR",        titre: "Le train à vapeur qui ne va nulle part d'urgent", texte: "Le Gloucestershire Warwickshire Steam Railway relie Toddington à Broadway en longeant les collines. Ce n'est pas fait pour aller vite — c'est fait pour regarder défiler les prairies par la fenêtre, sentir l'odeur du charbon, et comprendre pourquoi certaines choses méritent d'être conservées." },
          { photo: "photos/cotswolds-2026/j3-02.jpg", tag: "Winchcombe",  titre: "Un village discret, loin des cars de touristes", texte: "Winchcombe n'est pas sur tous les guides. C'est peut-être pour ça qu'il garde quelque chose d'authentique — des habitants qui vivent là, des commerces qui ne sont pas tous des tea rooms, une rue principale sans filet." },
          { photo: "photos/cotswolds-2026/j3-03.jpg", tag: "Cleeve Hill", titre: "Le point culminant des Cotswolds, et une belle leçon d'humilité", texte: "Cleeve Hill est le point le plus haut des Cotswolds — ce qui ne garantit pas forcément la vue. Le sommet s'ouvre sur une grande plaine herbeuse, sans vraiment de belvédère sur la région. Pas le panorama espéré. Mais la balade dans les champs, le vent, l'espace — c'était une autre sorte de beauté." },
        ],
      },
      {
        titre:         "Bourton, Lower et Upper Slaughter",
        lieux_du_jour: "Bourton-on-the-Water · Lower Slaughter · Upper Slaughter",
        quote:         "« Il y a des villages qu'on ne veut pas quitter, pas parce qu'il s'y passe quelque chose, mais précisément parce qu'il ne s'y passe rien. »",
        legende:       "La journée la plus douce du séjour — on a marché le long de l'Eye d'un village à l'autre, sans plan précis. Lower Slaughter sous l'éclaircie, Upper Slaughter dans le silence. L'eau, la pierre, les fleurs.",
        photos: [
          { photo: "photos/cotswolds-2026/j4-01.jpg", tag: "Bourton-on-the-Water", titre: "La Venise des Cotswolds, avant les touristes", texte: "Bourton-on-the-Water mérite son surnom — à condition d'y arriver tôt. La rivière Windrush traverse le village sous une succession de petits ponts en pierre. On s'est assis sur l'un d'eux. Longtemps." },
          { photo: "photos/cotswolds-2026/j4-02.jpg", tag: "Lower Slaughter",       titre: "Tout était réuni — et une éclaircie est arrivée", texte: "Les maisons en pierre dorée, les jardinières débordantes de fleurs, la rivière Eye qui coule sans se presser, le vieux moulin au bout du chemin. Et puis la lumière a changé — une éclaircie franche, d'un coup, comme un cadeau." },
          { photo: "photos/cotswolds-2026/j4-03.jpg", tag: "Upper Slaughter",       titre: "Le village d'à côté, presque vide, presque secret", texte: "Upper Slaughter est à vingt minutes à pied de Lower Slaughter et à des années-lumière en termes de fréquentation. Quelques maisons, une église normande, et le silence. On a failli ne pas y aller. On aurait eu tort." },
        ],
      },
      {
        titre:         "Les villages du nord",
        lieux_du_jour: "Stow-on-the-Wold · Chipping Campden · Snowshill · Stanton · Stanway · Broadway Tower",
        quote:         "",
        legende:       "La journée la plus dense — six étapes, des kilomètres à pied entre les villages, et la Broadway Tower en point final au coucher du soleil. Le nord des Cotswolds dans toute sa générosité.",
        photos: [
          { photo: "photos/cotswolds-2026/j5-01.jpg", tag: "Stow-on-the-Wold",  titre: "Le carrefour des Cotswolds", texte: "Stow-on-the-Wold est perché sur une colline au croisement de plusieurs routes romaines. Sa grande place, ses ruelles étroites entre les maisons en pierre — on comprend pourquoi les marchés s'y tenaient depuis le Moyen Âge." },
          { photo: "photos/cotswolds-2026/j5-02.jpg", tag: "Chipping Campden",  titre: "La rue la plus belle des Cotswolds, peut-être", texte: "La High Street de Chipping Campden est souvent citée comme la plus belle des Cotswolds. On comprend pourquoi — les façades s'enchaînent sans discontinuer, chacune différente, toutes dans la même pierre miel du pays." },
          { photo: "photos/cotswolds-2026/j5-03.jpg", tag: "Snowshill · Stanton · Stanway", titre: "Trois villages, une même lumière de fin d'après-midi", texte: "Snowshill et son manoir plein de curiosités, Stanton et ses maisons à colombages, Stanway et son château discret derrière les arbres. Une journée de marche entre ces trois-là, et on a l'impression d'avoir traversé plusieurs siècles." },
          { photo: "photos/cotswolds-2026/j5-04.jpg", tag: "Broadway Tower",     titre: "La folie néogothique au sommet de la colline", texte: "La Broadway Tower est une «folie» — une tour construite au 18e siècle pour le seul plaisir de la vue. Par temps clair, on voit jusqu'à treize comtés. Ce soir-là, on a surtout vu le soleil descendre sur les champs. C'était largement suffisant." },
        ],
      },
      {
        titre:         "Le sud des Cotswolds",
        lieux_du_jour: "Castle Combe · Lacock · Malmesbury · Westonbirt · Tetbury",
        quote:         "",
        legende:       "Le sud a une autre texture — plus humide, plus boisé, moins couru. Castle Combe irréelle, Lacock hors du temps, Westonbirt et ses arbres en fleur. Une journée pour les amoureux de verdure et de silence.",
        photos: [
          { photo: "photos/cotswolds-2026/j6-01.jpg", tag: "Castle Combe",         titre: "Le village le plus photographié d'Angleterre", texte: "Castle Combe mérite sa réputation — et la dépasse. Pas une antenne, pas un câble visible, pas une façade moderne. Le village est figé dans le temps, et ce n'est pas une figure de style. On a du mal à y croire, et pourtant." },
          { photo: "photos/cotswolds-2026/j6-02.jpg", tag: "Lacock",               titre: "Le village où le temps s'est arrêté pour de vrai", texte: "Lacock appartient au National Trust — ce qui explique qu'il soit aussi bien préservé. L'abbaye, les ruelles pavées, les maisons à colombages. On reconnaît des décors de films sans les avoir vus. Le lieu est authentique et irréel en même temps." },
          { photo: "photos/cotswolds-2026/j6-03.jpg", tag: "Westonbirt Arboretum", titre: "Une cathédrale végétale", texte: "Le National Arboretum de Westonbirt abrite des milliers d'arbres du monde entier. En mai, les azalées et les rhododendrons sont en fleur. On marche dans les allées comme dans une nef — silencieux, un peu émerveillés." },
        ],
      },
      {
        titre:         "Gloucester",
        lieux_du_jour: "Gloucester — Docks · Cathédrale",
        quote:         "",
        legende:       "Gloucester mérite qu'on lui consacre une journée entière. La cathédrale et ses cloîtres, les docks victoriens reconvertis — une ville qui assume son histoire sans en faire un décor.",
        photos: [
          { photo: "photos/cotswolds-2026/j7-01.jpg", tag: "Cathédrale",       titre: "La cathédrale, les cloîtres, et un silence inattendu", texte: "Gloucester se visite souvent en coup de vent. On a pris le temps. La cathédrale cache des cloîtres d'une sérénité rare — de la pierre, de la lumière tamisée, et personne pour vous presser. On comprend que des scènes de Harry Potter y aient été tournées." },
          { photo: "photos/cotswolds-2026/j7-02.jpg", tag: "Gloucester Docks", titre: "Les anciens docks reconvertis avec goût", texte: "Le long des docks victoriens, les entrepôts en brique rouge ont été transformés en musées, cafés et librairies. Une ville qui connaît son histoire sans en faire un musée à ciel ouvert — c'est plus rare qu'on ne le croit." },
        ],
      },
      {
        titre:         "Oxford et retour",
        lieux_du_jour: "Oxford · Londres",
        quote:         "« Oxford donne envie d'être plus curieux qu'on ne l'est. »",
        legende:       "Dernier jour, première impression d'Oxford — les collèges, les vélos, la Bodleian. On repart avec l'envie d'y revenir plus longtemps. L'Eurostar du soir ramène à Paris, les Cotswolds déjà dans la catégorie des voyages qu'on refait.",
        photos: [
          { photo: "photos/cotswolds-2026/j8-01.jpg", tag: "Oxford",            titre: "Des vélos, des spires, et l'impression d'avoir raté une vocation", texte: "Oxford intimide un peu, puis séduit beaucoup. Les collèges s'enchaînent, chacun avec sa cour secrète et ses pelouses interdites. On repart avec l'envie d'avoir étudié là — ou au moins d'y revenir." },
          { photo: "photos/cotswolds-2026/j8-02.jpg", tag: "Bodleian Library",  titre: "Des livres et de la pierre, dans le bon ordre", texte: "La Bodleian Library est l'une des plus anciennes bibliothèques du monde. On ne peut pas y emprunter de livres, on ne peut pas s'y asseoir librement. Et pourtant, rien que d'en traverser les cours, on a envie de lire." },
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
        quote:         "",   // citation affichée avant la galerie, "" si aucune
        legende:       "",   // texte italique sous le titre, décrit la journée entière
        photos: [
          {
            photo: "photos/mon-voyage/j1-01.jpg",
            tag:   "Un mot",
            titre: "Le titre affiché dans la lightbox",
            texte: "La légende affichée dans la lightbox.",
          },
          {
            photo: "photos/mon-voyage/j1-02.jpg",
            tag:   "Un mot",
            titre: "Deuxième photo",
            texte: "Sa légende.",
          },
        ],
      },
    ],
  },
  */

];
