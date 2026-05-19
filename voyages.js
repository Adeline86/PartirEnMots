// ============================================================
//  PARTIR EN MOTS — voyages.js
//  Ajoute ici chacun de tes voyages.
//  La page voyage.html lit ce fichier et génère tout seule.
// ============================================================

const VOYAGES = [

  {
    // ── Identifiant unique (utilisé dans l'URL : voyage.html?id=lisbonne)
    id: "lisbonne",

    // ── Infos générales
    titre:      "Lisbonne sous la pluie",
    lieu:       "Portugal",
    date:       "Novembre 2024",
    saison:     "Automne",
    duree:      "5 jours",

    // ── Phrase d'intro (affichée sur la couverture)
    intro: "Il y a des villes qu'on aime davantage quand elles ne cherchent pas à plaire. Lisbonne mouillée a cette franchise-là.",

    // ── Photo de couverture
    // Chemin relatif depuis la racine du repo, ex: "photos/lisbonne/cover.jpg"
    // Laisse "" pour utiliser le dégradé par défaut
    cover: "",

    // ── Entrées du roman photo
    // Chaque entrée = une photo + un texte
    // layout: "left" | "right" | "full"  (alternance gauche/droite recommandée)
    // photo: chemin vers ton image, ex: "photos/lisbonne/01.jpg"
    // tag: petit mot en haut (lieu, moment, anecdote courte)
    // titre: titre de l'entrée (affiché en serif)
    // texte: ton paragraphe (3-4 lignes)
    // quote: si tu veux une citation flottante AVANT cette entrée, sinon ""
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
    intro:  "Une phrase d'accroche pour la couverture.",
    cover:  "photos/mon-voyage/cover.jpg",
    entrees: [
      {
        layout: "left",
        photo:  "photos/mon-voyage/01.jpg",
        tag:    "Un mot",
        titre:  "Le titre de cette photo",
        texte:  "Ton paragraphe ici.",
        quote:  "",
      },
      {
        layout: "right",
        photo:  "photos/mon-voyage/02.jpg",
        tag:    "Un mot",
        titre:  "Le titre de cette photo",
        texte:  "Ton paragraphe ici.",
        quote:  "« Une citation si tu veux. »",
      },
    ],
  },
  */

];
