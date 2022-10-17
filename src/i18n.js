import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import tanslationEn from "../src/locales/en.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const resources = {
  en: {
    translation: tanslationEn,
  },
  fr: {
    translation: {
      address_1: "Dakar, Senegal",
      email: "E-mail",
      whatsApp: "WhatsApp",
      Message: "Message",
      contact_phone: "+221 78 155 9669",
      contact_ww: "CONTACT",
      slider_w4: "CLIQUEZ",
      slider_w5: "ICI",
      slider_w1: "Vous voulez capter un marche",
      slider_w2: "de 360 millions de consommateurs ?",
      slider_w3: "le Sénégal vous ouvre ses portes !!",
      footer_p1: "ADRESSE",
      contact_p1: "Nom et prénom",
      contact_p2: "L'e-mail est requis",
      contact_p3: "Téléphone",
      contact_p4: "veuillez insérer un numéro de téléphone correct",
      contact_p5: "Message",
      contact_p6: "veuillez écrire votre demande ici...",
      contact_p7: "Pour toute demande, merci de remplir le formulaire",
      contact_p8: "Soumettre",
      contact_p9: "CONTACTEZ",
      contact_p11: "Le nom complet est requis",
      contact_p12: "Bien envoyé",
      sub_w1: "RESERVEZ",
      err_1: "Le nom de l'entreprise est requis",
      err_2: "L'adresse est obligatoire",
      err_3: "Le pays est requis",
      err_4: "veuillez insérer un numéro de téléphone correct",
      err_5: "L'e-mail est requis",
      err_6: "Ce champ est requis",
      sub_1: "Nom de l'entreprise",
      sub_2: "Adresse ",
      sub_3: "Pays",
      sub_4: "Dirigeant",
      sub_5: "Téléphone",
      sub_6: "Email",
      sub_7: "Website ",
      sub_8: "Secteur d'activité",
      sub_9: "Nature du produit projeté à fabriquer au Sénégal",
      sub_10: "Soumettre",
      option_1: "LES OPTIONS",
      option_2: "Vous avez le choix :",
      option_3: "OPTION 1: Terrain viabilise nus de 2,500 M2 a 20,000 M2",
      option_4:
        "OPTION 2: Terrain + bâtiments et bureaux selon vos désirs et suivants os spécificités techniques",
      option_5:
        "Si nous construisons vos hangars et bureaux vous n'avez rien à faire on gère tout selon vos normes et désirs et se suivant les normes et réglementation locales. Délais très courts.",
      phone_1: "TÉLÉPHONE",
      pole_101: "Cliquez ici",
      pole_100: "Pour plus d'informations s'il vous plaît",
      header_s1: "LE SENEGAL",
      header_s2: "RESERVEZ",
      header_s3: "LES OPTIONS",
      pole_45: "Un restaurant spécialité 50 couverts",
      pole_46: "Un restaurant gastronomique 40 couverts",
      pole_47: "SANTÉ",
      pole_48: "Médecin permanent",
      pole_49: "Infirmerie",
      pole_50: "SERVICES DIVERS",
      pole_51: "Bureau presse / tabac / papeterie",
      pole_52: "Banque",
      pole_53: "Supérette",
      pole_54: "BUREAU ADMINISTRATIFS",
      pole_55: "Guichet unique APIX",
      pole_56: "Notaire",
      pole_57: "Bureau douanes",
      pole_58: "LOISIRS",
      pole_59: "Piscine",
      pole_60: "Salle de sport",
      pole_61: "Espaces verts de détentes",
      pole_62: "Lieux de culte",
      pole_63:
        "Le pole matech est fait pour éviter le maximum de déplacement et chaque membre dois avoir tout sous la main.",
      pole_64:
        "S'INSCRIRE à pole matech c'est la garantie d'une efficacité au quotidien",
      pole_65: "Adhérer",
      pole_66:
        "Faites votre choix de la superficie que vous voulez et on fera un devis sur mesure qui englobera",
      pole_67: "Le droit d'entrée unique",
      pole_68: "La redevance annuelle",
      pole_69: "Les frais de connections",
      pole_70: "La construction de vos hangars et vos bureaux si vous voulez",
      pole_71:
        "A la suite de cela nous vous établirons un bail emphytéotique de 25 ans renouvelable Une fois soit 50 ans et ce le tout en moins de 1 mois !!",
      pole_72: "Conditions d’obtentions d’assiette foncière",
      pole_73: "Monter une unité de production",
      pole_74: "Construire sous 12 Mois",
      pole_75: "Embaucher 50 personnes localement",
      pole_76: "Respecter la charte environnementale",
      pole_77: "Adhérer au règlement intérieur de la zone",
      pole_78: "Exporter hors Sénégal 50% de sa production",
      pole_79: "Maintenir sa parcelle propre et aux normes",
      pole_80: "Adhérer aux règles de sécurité de la zone",
      pole_81: "Payer ses charges annuelles",
      pole_82: "Droit d'entrée",
      pole_83: "S’acquitter d’un droit d'entrée unique",
      pole_84: "S’acquitter des frais de connections eau électricité fibre",
      pole_85: "Ses droits sont variable en fonction de la superficie demande",
      pole_86: "Demandez maintenant un devis en ligne!",
      apix_p1: "APIX EST UN GUICHET UNIQUE qui a pour mission",
      apix_p1_p1:
        "Accompagner les investisseurs étrangers et nationaux au Sénégal",
      apix_p1_p10: "Les Zones Économiques Spéciales",
      apix_p1_p11:
        "Les Zones Économiques Spéciales sont des espaces d’accueil d’activités économiques qui ont pour vocation d’offrir un ensemble d’infrastructures et de services qui assurent aux entreprises les meilleures conditions d’exercice de leurs activités.",
      apix_p1_p12: "Le cadre de gouvernance des ZES",
      apix_p1_p13:
        "Comme spécifié dans la loi 2017-06 portant sur les zones économiques spéciales (ZES), le cadre de gouvernance est composé des entités suivantes",
      apix_p1_p14: "Ministère chargé de la Promotion des Investissements",
      apix_p1_p15:
        "responsable des orientations stratégiques et de la mise en œuvre de la politique de développement des ZES.",
      apix_p1_p16: "Le Comité paritaire public-privé",
      apix_p1_p17:
        "chargé du contrôle, de la régulation, de la médiation et de la conciliation entre tous les acteurs évoluant dans les ZES.",
      apix_p1_p18: "L’Administrateur des ZES",
      apix_p1_p19:
        "chargé de l'administration et de la gestion des zones économiques spéciales du Sénégal.",
      apix_p1_p2:
        "Promouvoir l’image économique et l’attractivité de la destination Sénégal.",
      apix_p1_p20: "Les promoteurs/développeurs",
      apix_p1_p21:
        "chargés de la promotion, du développement, de l'aménagement et de l’exploitation dans des ZES.",
      apix_p1_p22: "Les entreprises de la ZES",
      apix_p1_p23:
        "qui sont les entités économiques ayant reçus un agrément délivré par l’Administrateur des ZES, pour réaliser toute activité économique notamment industrielle.",
      apix_p1_p24: "Le dispositif incitatif applicable dans les ZES",
      apix_p1_p25:
        "Les entreprises y compris les promoteurs/développeurs des ZES peuvent bénéficier d’un paquet incitatif qui donne droit à des exonérations fiscales et douanières.Tel que prévu dans la loi n° 2017-07 du 06 janvier 2017 portant dispositif d’incitations applicable dans les ZES et le décret n°2017-1174 portant application de la loi n° 2017-07 du 06 janvier 2017, les entreprises exonérées bénéficieront notamment",
      apix_p1_p26:
        "du droit d’admission en franchise de tous droits et taxes perçus au cordon douanier à l’exclusion des prélèvements communautaires sur les matières premières, équipements, autres biens et ainsi que du droit d’exportation en franchise en dehors du territoire national des mêmes biens.",
      apix_p1_p27:
        "d’une exonération du paiement de tout impôts sur le revenu.",
      apix_p1_p28:
        "d’un taux d’imposition de 15% sur l'impôt sur les sociétés.",
      apix_p1_p29:
        "d’une possibilité de conclure des contrat a durée déterminée sur une durée de cinq (5) années.",
      apix_p1_p3:
        "Participer à l'effort national de mise à niveau des infrastructures.",
      apix_p1_p30:
        "d’une exonération de la contribution forfaitaire à la charge de l’employeur ou tout autre impôt ayant pour assiette les salaires versés par les entreprises et supportées par elles",
      apix_p1_p31:
        "d’une exonération de l'impôt minimum forfaitaire sur les sociétés.",
      apix_p1_p32: "Sur une durée de 25 ans renouvelable",
      apix_p1_p33: "Opportunités d'investissement dans les ZES",
      apix_p1_p34:
        "Les ZES ont pour principales vocations les secteurs d'activité suivants",
      apix_p1_p35: "l'agrobusiness",
      apix_p1_p36: "l'industrie",
      apix_p1_p37: "les technologies de l'information et de la communication",
      apix_p1_p38: "le tourisme",
      apix_p1_p39: "l'offre de services médicaux",
      apix_p1_p4: "Fournir des services aux investisseurs.",
      apix_p1_p40: "les services",
      apix_p1_p41: "Services délivrés par l’Administrateur dans les ZES",
      apix_p1_p42:
        " L’Administrateur se doit d’assurer à chaque promoteur/développeur la disponibilité des facteurs techniques de production notamment :  connectivité routière, réseaux d’eau, d’électricité, d’assainissement & IT. De plus, l’Administrateur assurera la mise en place d’un guichet-unique / centre de service au niveau de chaque ZES pour notamment",
      apix_p1_p43: "Guichet unique",
      apix_p1_p44: "l’enregistrement des entreprises des ZES",
      apix_p1_p45:
        "l'établissement des déclarations liés aux activités des entreprises",
      apix_p1_p46:
        "la délivrance des différents agréments, certifications et visas liés aux activités des entreprises",
      apix_p1_p47: "Zone économique de Diass",
      apix_p1_p48:
        "Décret de création: décret n° 2017-932 du 09 mai 2017 portant création de la Zone Économique Spéciale Intégrée de Diass ; Localisation: 45 km de Dakar (mitoyen à l’Aéroport Dakar Blaise Diagne de Diass) ; Superficie (site 1) : 718 ha ; Connectivité: accès par l’autoroute a péage et par la route nationale 1 (Dakar – M’bour).",
      apix_p1_p49: "Activités éligibles",
      apix_p1_p5: "Reformer l’environnement des affaires.",
      apix_p1_p50: "Industrie",
      apix_p1_p51: "Agrobusiness",
      apix_p1_p52: "Tourisme",
      apix_p1_p53: "Activités portuaires",
      apix_p1_p54: "Offres de services médicaux",
      apix_p1_p55: "Critères d'éligibilité spécifiques",
      apix_p1_p56:
        "Dédier 60% du chiffre d'affaires à l'exportation Investissement minimum de 100 millions de FCFA 150 emplois directs durant la 1ère année d’exercice",
      apix_p1_p57: "NOTRE PARTENARIAT",
      apix_p1_p58: "Le groupe",
      apix_p1_p59: "ÁFRICA PIPES INDUSTRIE est officiellement mandaté par",
      apix_p1_p6: "Co-construire l'administration de demain.",
      apix_p1_p60: "La présidence de la république du senegal",
      apix_p1_p61: "Le ministère de l'économie et des finances",
      apix_p1_p62:
        "Pour promouvoir et développer 21 hectares de zones franche sur la zes de diass avec tous les pouvoirs conférés à cet effet dans une ZES.",
      apix_p1_p63:
        "Le groupe Africa pipe industries est en mesure de vous céder un bail et tous les droits et avantages lies a la zone et ce très rapidement sans perdre de temps.",
      apix_p1_p7:
        "Accompagner l'Etat dans le processus de formalisation des mémorandums d’entente.",
      apix_p1_p8:
        "C est une administration de grande efficacité qui est gere de main de maitre par une équipé de grandes valeurs.le poumon economique du senegal.",
      apix_p1_p9: "ZONE ÉCONOMIQUE SPÉCIALES DE DIASS",
      pole_p1: "SON IMPLANTATION",
      pole_p10: "Chaque lot pourra être livres",
      pole_p11:
        "Nu avec connections eaux, égouts et électricité en bordure du terrain",
      pole_p12: "Avec hangar de production et bureaux selon vos plans",
      pole_p13: "AVANTAGES EXCEPTIONNELS",
      pole_p14: "Être sur le pôle matech c’est pouvoir prétendre",
      pole_p15: "a de très nombreux avantages",
      pole_p16: "Fiscaux",
      pole_p17: "Exonération d'impôts pendant 10 ans",
      pole_p18: "Exonération de TVA",
      pole_p19: "Sociale",
      pole_p2:
        "Le pôle matech est implanté dans la zone économique de Diass a 40 km de Dakar dans la vielle de Diass",
      pole_p20: "Exonération de charge sociales",
      pole_p21: "Exonération de charges patronales",
      pole_p22: "Douanes",
      pole_p23:
        "Pas de taxes douanière aux intrants du projets (bâtiments, véhicules machines ect..).",
      pole_p24: "Pas de taxes douanières pour les matières premières",
      pole_p25: "Facilitation d'affaires",
      pole_p26: "Bureau de douanes sur le site",
      pole_p27: "Bureau APIX sur le site",
      pole_p28: "Le pôle matech vous offre des services exceptionnels",
      pole_p29: "Sécurité",
      pole_p3: "Son implantation est idéale car",
      pole_p30:
        "Équipe permanente de 40 personnes 24/7 surveille le site dote de camera de supervision",
      pole_p31: "Accès au site sous contrôle",
      pole_p32: "Contrôle des marchandises",
      pole_p33: "Incendie",
      pole_p34:
        "Équipe de protection civile permanente pour lutte anti-incendie",
      pole_p35: "Camions citernes, extincteurs et poudre sur site",
      pole_p36: "Nettoyage",
      pole_p37:
        "Equipe d'intervenants sur le site pour les ordures et nettoyage des chaussées",
      pole_p38: "Camion nettoyeur ramassage d'ordures",
      pole_p39: "Incinérateur sur place",
      pole_p4:
        "A 1km de l’aéroport internationale de Dakar et de la zone cargo",
      pole_p40: "ESPACE VERTS",
      pole_p41: "Jardiniers pour entretien des espaces verts",
      pole_p42: "Hôtellerie Restauration",
      pole_p43: "Hôtel 4 Etoiles de 30 chambres sur site",
      pole_p44: "Un self-service 200 couverts",
      pole_p5:
        "A 15 kilomètres du nouveau port international géré par Dubaï port",
      pole_p6:
        "Sur une assiette foncière de 21 hectares le pôle matech est une zone qui accueille plus de 20 entreprises toutes tournées vers la production technologiques et l’innovation",
      pole_p7:
        "Toutes les commodités de vie, techniques et logistiques sont a votre dispositions",
      pole_p8: "LE PLAN D'AMÉNAGEMENT",
      pole_p9:
        "Le pôle matech est aménagé en terrain aménageable avec des accès pour véhicule léger et poids lourds.",
      senegal_p1: "Raison investir au Sénégal",
      senegal_p2: "RAISONS D'INVESTIR AU SENEGAL",
      senegal_p3: "Un pays stable et ouvert",
      senegal_p3_p1:
        "Situé sur la côte ouest de l’Afrique, entre 12 ° 88 et 16 °41 de latitude nord et 11 °21 et 17 °32 de longitude Ouest, la situation du Sénégal à l’extrémité occidentale du continent africain dans sa partie\nla plus avancée dans l’océan Atlantique, lui confère une position de hub reliant l’Afrique au reste du monde. Plébiscité comme la porte d’entrée la plus simple et la plus rapide vers l’Afrique de l’Ouest, il ouvre l’accès à un marché commun de 300 millions de consommateurs.Le Sénégal sert également de passerelle importante vers les principaux marchés d’exportation en Europe, en Asie et dans les Amériques. Les indicateurs économiques sont en constante amélioration depuis plusieurs années.",
      senegal_p3_p10: "Des infrastructures modernes et structurantes",
      senegal_p3_p10_p1:
        "Le Sénégal a fait des progrès significatifs dans l’amélioration de ses infrastructures de transport. Des investissements conséquents ont permis l’expansion des réseaux nationaux et transfrontaliers pour améliorer la mobilité et la sécurité des personnes et des biens, et promouvoir la création de nouveaux centres économiques à travers le pays.",
      senegal_p3_p10_p2:
        "Grâce au bon état de ses infrastructures (air, terre, mer) et à sa position géographique unique, le Sénégal occupe la première place en\nAfrique de l’Ouest au classement de la performance logistique, selon la Banque Mondiale. Ayant récemment investi fortement dans ses infrastructures de transport, le Sénégal offre aux entreprises des ouvrages d’art de calibre mondial, basés sur un mécanisme « porte –corridor » qui leur permettent d’expédier plus rapidement leurs marchandises vers les marchés, dans des conditions modernes et performantes.",
      senegal_p3_p10_p3:
        "Les plus grandes compagnies aériennes relient tous les jours Dakar aux centres d’affaires du monde : Paris, Londres, Dubaï, New York, Johannesburg et Air Sénégal S.A., la compagnie aérienne nationale, assure, à partir de Dakar, la correspondance vers l’intérieur du Sénégal et vers d’autres pays.",
      senegal_p3_p10_p4:
        "Le Sénégal est une escale maritime performante qui offre un gain de navigation pour les navires venant du Nord par rapport aux autres ports de la Côte Ouest Africaine. Le Port de Dakar offre 24h/24, une gamme de services professionnels et des infrastructures de dernière génération concourant à optimiser les conditions d’escale, de transit et de transbordement.",
      senegal_p3_p10_p5:
        "Selon l'Union Internationale des Télécommunications (UIT), le Sénégal est le premier pays d’Afrique de l’Ouest pour le taux de pénétration et a qualité de services.",
      senegal_p3_p11: "Les Grands projets d'infrastructures",
      senegal_p3_p11_p1:
        "Le développement d’infrastructures performantes est un préalable au développement économique. Il constitue un facteur clé de toute stratégie de promotion de l’investissement. Dans cet esprit, les autorités ont initié une série de projets structurants.",
      senegal_p3_p12: "Routières",
      senegal_p3_p12_p1:
        "Le Sénégal possède un réseau routier dense et bien entretenu pouvant assurer une circulation fluide des personnes et des biens. Un programme d’amélioration de la mobilité urbaine est en cours afin d’optimiser les déplacements vers et à l’intérieur de la capitale.",
      senegal_p3_p12_p2:
        "Dans le secteur routier, les grands projets tels que les autoroutes à péage Dakar-AIBD-SINDIA, Ila Touba et les projets de construction et réhabilitation de routes nationales permettront d’améliorer encore l’accès aux grands axes routiers Dakar – Bamako, Dakar – Conakry et Dakar – Tanger.",
      senegal_p3_p13: "Ferroviaires",
      senegal_p3_p13_p1:
        "De grands projets sont en cours pour réhabiliter et moderniser le système ferroviaire au Sénégal.",
      senegal_p3_p13_p3_p1: "Le chemin de fer Dakar – Bamako",
      senegal_p3_p13_p3_p2:
        "avec 1 286 km pour améliorer la connectivité entre Dakar et Bamako.",
      senegal_p3_p13_p4_p1: "Le Train Express Régional (TER)",
      senegal_p3_p13_p4_p2:
        "de Dakar avec 55 km pour relier Dakar à l’aéroport AIBD.",
      senegal_p3_p13_p5_p1:
        "Le Train Express Régional Dakar-AIBD (ou TER Dakar-AIBD) est une ligne de",
      senegal_p3_p13_p5_p1_blue: "chemin de fer",
      senegal_p3_p13_p5_p2: "électrique à",
      senegal_p3_p13_p5_p2_blue: "écartement standard",
      senegal_p3_p13_p5_p3:
        "en construction au Sénégal dont l’ouverture du premier tronçon est prévue pour début 2019. Elle reliera la capitale de",
      senegal_p3_p13_p5_p3_blue: "Dakar",
      senegal_p3_p13_p5_p4: ", à l’",
      senegal_p3_p13_p5_p4_blue: "Aéroport international Blaise-Diagne",
      senegal_p3_p13_p5_p5:
        "(AIBD) ainsi que des villes nouvelles situées sur la partie continentale du pays.",
      senegal_p3_p13_p6:
        "Ce projet permettra de désenclaver la capitale, qui représente la majeure partie de l’activité du pays, du reste du Sénégal et de s’orienter vers les réseaux de chemins de fer internationaux.",
      senegal_p3_p14: "Aéroportuaires",
      senegal_p3_p14_p1:
        "Le Sénégal a mis en service un aéroport international de dernière génération , situé à une cinquantaine de kilomètres de Dakar. L’Aéroport International Blaise Diagne (AIBD) offre ce qu’il y’a de meilleur en matière de standards aéroportuaires de classe mondiale. Il dispose actuellement d’une capacité de trois (03) millions de passagers par an et devrait atteindre dix (10) millions par an, ce qui en fait un pôle de mobilité régional et international. Désengorgement de Dakar et émergence d’un second pôle économique à l’extérieur de la capitale. Conformité aux nouvelles exigences du trafic aérien international.",
      senegal_p3_p15: "Énergiques",
      senegal_p3_p15_p1:
        "Une production d’électricité de qualité satisfaisante et en quantité suffisante grâce à des investissements majeurs dans le secteur de l’énergie.",
      senegal_p3_p15_p2: "4 centrales solaires",
      senegal_p3_p15_p3: "1000 mégawatts produit en 2017",
      senegal_p3_p15_p4:
        "Des coûts de facteurs de production (eau, électricité, etc) en baisse.",
      senegal_p3_p16: "Portuaires",
      senegal_p3_p16_p1:
        "À la croisée de plusieurs routes maritimes, le Port Autonome de Dakar jouit d’une situation géographique exceptionnelle. Situé au carrefour de trois voies commerciales clés (Amérique du Nord – Afrique, Europe – Afrique et Europe – Amérique du Sud), l’accès est direct, en toute période de l’année, sans restriction de marée, et des opérations de navires et de manutention 24/7 . Conteneurs, hydrocarbures, denrées et produits de la mer y sont manutentionnés jour et nuit. L’offre de service est compétitive et diversifiée et inclut la réparation navale. Un important programme de modernisation et d’extension, en cours, prévoit la réalisation d’un troisième terminal à conteneur, d’une nouvelle gare maritime et d’un quai fruitier. La réalisation d’un terminal minéralier est également projetée.",
      senegal_p3_p17: "Communicationnelles",
      senegal_p3_p17_p1:
        "Leader incontesté en Afrique de l’Ouest, le Sénégal dispose d’un réseau de télécommunication efficace et entièrement numérisé qui compte plus de 2200 km de fibres optiques. Il est relié à l’Europe, l’Amérique, l’Asie et le Moyen Orient via des connections permanentes par câbles. La pénétration d’Internet et des services de téléphonie est importante en entreprises comme chez les particuliers. La libéralisation du secteur des télécommunications a entraîné une saine concurrence dans les services de base et une explosion de l’offre dans les services spécialisés.",
      senegal_p3_p17_p10:
        "Les ZES, pôles de compétitivité et moteurs de croissance pour\nl’économie du Sénégal",
      senegal_p3_p17_p11:
        "Avec un cadre fiscal et douanier incitatif, des infrastructures de dernière génération et une gestion répondant aux meilleurs standards internationaux, les ZES sont des espaces conçus pour accueillir des activités économiques et visent à positionner le Sénégal comme un hub de plateformes logistiques intégrées en Afrique de l’Ouest. A terme, elles permettront au Sénégal d’être aux meilleurs standards d’environnement des affaires et d’offrir, aux investisseurs, des gammes de services de grande facture.",
      senegal_p3_p17_p2: "Quelques chiffres clés en 2017",
      senegal_p3_p17_p3: "Téléphone Mobile",
      senegal_p3_p17_p4: "15,7 millions d'abonnés",
      senegal_p3_p17_p5: "Taux de pénétration services mobiles",
      senegal_p3_p17_p6: "Couverture",
      senegal_p3_p17_p7: "Taux de pénétration des services Internet",
      senegal_p3_p17_p8: "d'abonnés",
      senegal_p3_p17_p9: "taux de couverture de 97,20%",
      senegal_p3_p18:
        "Un cadre juridique et fiscal incitatif soeurs, des gammes de services de grande facture.",
      senegal_p3_p18_p1: "Compétitif",
      senegal_p3_p18_p10: "Rénové",
      senegal_p3_p18_p2:
        " Le Sénégal a adopté un nouveau code des investissements qui prévoit des incitations spécifiques pour stimuler l’investissement dans des secteurs clés tels que l’agriculture et l’agroalimentaire, la pêche, l’élevage et les industries connexes, l’industrie manufacturière, le tourisme, et les mines, entre autres secteurs. Les incitations à l’investissement comprennent, sans toutefois s’y limiter",
      senegal_p3_p18_p3: "Des exemptions de droits de douane (sur 03 ans)",
      senegal_p3_p18_p4: "Une suspension de la TVA (sur 03 ans)",
      senegal_p3_p18_p5:
        "Des crédits d'impôt de 40% pour l'investissement admissible et déductibles dans les 50 ans",
      senegal_p3_p18_p6:
        "Un statut de société d’exportation gratuite pour les entreprises de l’agriculture, de l’industrie et des télécommunications tirant au moins 8% de leur chiffre d’affaires de l’exportation.",
      senegal_p3_p18_p7: "Statut d’entreprise franche d'exportation",
      senegal_p3_p18_p8:
        " Ce statut est accordé aux entreprises qui exportent au moins 80% de leur production. L’agriculture au sens large, l’industrie et les télé-services sont les secteurs éligibles au statut de l’EFE. Plusieurs avantages sont accordés aux entreprises, notamment la réduction de l’impôt sur les sociétés (15%), l’exonération de l’impôt sur les salaires, sur les droits d’enregistrement et de timbre, sur la contribution des patentes, l’exonération des droits et taxes sur l’équipement de production et les matières premières, et plus encore.",
      senegal_p3_p18_p9:
        "Au Sénégal, l’investissement est soutenu par une politique incitative attrayante qui s’appuie sur des dispositifs légaux, fiscaux et douaniers régulièrement actualisés. Des mesures d’allégement fiscal, des garanties et des avantages sont consentis aux investisseurs à travers le nouveau code des investissements, le régime d’entreprise franche d’exportation et la loi BOT. Un guichet unique moderne centralise, facilite et accélère les formalités administratives.",
      senegal_p3_p19:
        "Un accès privilégié aux marchés régionaux et internationaux",
      senegal_p3_p19_p1: "Intégré",
      senegal_p3_p19_p10:
        "Et de l'Organisation pour la Mise en Valeur du fleuve Sénégal",
      senegal_p3_p19_p11: "Privilégié",
      senegal_p3_p19_p12:
        "Le Sénégal bénéficie d’accès préférentiels aux marchés européen (accords UE/ACP), américain (AGOA) et canadien (Loi sur l’initiative canadienne). Ces mesures permettent d’y exporter des biens de consommation sans quotas et en franchise de droits ou à des taux allégés.",
      senegal_p3_p19_p13:
        "Le Sénégal est à moins de 5 heures de l’Europe et à 7 heures des États Unis, par avion. Dakar est à la croisée de nombreuses routes maritimes et présente un réel avantage comparatif pour le fret maritime. La liaison s’effectue en moins de 6 jours pour l’Europe, et en 7 jours pour les États-Unis. Le port de Dakar offre des services logistiques de qualité et une liaison directe avec le train et les grands axes routiers.",
      senegal_p3_p19_p14: "Une qualité de vie exceptionnelle",
      senegal_p3_p19_p15:
        "L’hospitalité de la population est légendaire. L’épithète de Pays de la « Téranga », recouvre cette vertu bien sénégalaise. Le « World Economic Forum » a classé le Sénégal 6ème pays le plus accueillant au monde, selon les touristes.",
      senegal_p3_p19_p16:
        "Le Sénégal est un pays aux conditions de vie plaisantes. Son climat doux et ensoleillé est rafraîchi par les 700km de plages qui offrent à ses résidents et visiteurs, un choix varié de loisirs. Les quartiers résidentiels modernes avec des logements de standing, les centres commerciaux où se côtoient des enseignes internationales célèbres, les restaurants gastronomiques, les écoles étrangères (françaises, américaines) participent à la création d’une palette de commodités haut de gamme et adaptée aux expatriés.",
      senegal_p3_p19_p17:
        "Authenticité et innovation donnent un cachet unique à la programmation artistique sénégalaise. La scène culturelle est extrêmement vibrante, animée par des artistes mondialement connus et aux styles éclectiques. L’Industrie cinématographique, elle, connait son apogée avec la consécration internationale des talents sénégalais.",
      senegal_p3_p19_p18: "Accueillant",
      senegal_p3_p19_p19:
        "Le Sénégal est un pays où l’hospitalité constitue une véritable devise nationale. La population est jeune, dynamique et tolérante. Le climat est agréable et le soleil brille toute l’année. Le pays offre un cadre de vie idéal pour se réaliser, travailler et faire de bonnes affaires.",
      senegal_p3_p19_p2:
        "Le Sénégal est membre de l’Union Économique et Monétaire Ouest Africaine (UEMOA) une organisation régionale de 8 pays et 112 millions d’habitants qui représente un marché de 90 millions de consommateurs, dont la mission est de promouvoir l’intégration économique en renforçant la compétitivité de leurs économies dans le cadre d’un marché ouvert et compétitif et d’un environnement juridique harmonisé.",
      senegal_p3_p19_p21: "Rassurant",
      senegal_p3_p19_p22:
        "Havre de paix, le Sénégal propose un environnement sécurisé et apaisant. Le pays dispose d’hôpitaux et de centres de santé bien équipés. Sur Dakar et dans les grandes agglomérations, des polycliniques privées modernes offrent des soins spécialisés de qualité internationale, incluant des services d’évacuation sanitaire.",
      senegal_p3_p19_p3:
        "Le Sénégal est aussi membre de la Communauté Économique des États de l’Afrique de l’Ouest (CEDEAO) , un bloc régional de 15 pays (360 millions d’habitants environ) pour promouvoir l’intégration économique dans différents secteurs, incluant le transport, l’énergie, l’industrie, l’agriculture, les ressources naturelles et le commerce.",
      senegal_p3_p19_p4:
        "En tant que membre important des blocs économiques ci – dessus, et grâce à sa position stratégique, le Sénégal est un point d’accès à un grand marché de plus de 300 millions de consommateurs situés en Afrique.",
      senegal_p3_p19_p5: "Membre de",
      senegal_p3_p19_p6: "L’ Union économique et monétaire ouest-africaine",
      senegal_p3_p19_p7:
        "La Communauté économique des États de l'Afrique de l'Ouest",
      senegal_p3_p19_p8: "L'Union Africaine",
      senegal_p3_p19_p9:
        "L'Organisation pour la Mise en Valeur du fleuve Gambie",
      senegal_p3_p2: "Superficie",
      senegal_p3_p20: "Pratique",
      senegal_p3_p20_p1:
        "Les formalités de séjour sont simples pour les visiteurs comme pour les résidents. Hôtel, résidence ou villa de rêve, l’offre en matière d’hébergement de qualité est multiple et variée. Pour la scolarisation des enfants, l’école privée offre des possibilités de formation de qualité, en français comme en anglais, du préscolaire au supérieur.",
      senegal_p3_p20_p10: "Faire un transfert de propriété en 50 jours",
      senegal_p3_p20_p11:
        "Obtenir un permis de construire en ligne en 40 jours",
      senegal_p3_p20_p12:
        "Faire une déclaration en ligne et un paiement d'impôt",
      senegal_p3_p20_p13: "Créer une SARL sans exigence de capital social",
      senegal_p3_p20_p14: "Bénéficier des services des tribunaux de commerce",
      senegal_p3_p20_p15:
        "Effectuer toutes les procédures liées à la vie de l’entreprise en ligne (e – tax, Teledac, etc)",
      senegal_p3_p20_p16: "Protection des investissements",
      senegal_p3_p20_p17:
        "Le Sénégal est une terre d’opportunités, l’environnement des affaires y est favorable et en constante amélioration. Le gouvernement du Sénégal met en œuvre depuis 2013, le Programme de Réformes de l’Environnement des Affaires et de la Compétitivité (PREAC). De nombreuses innovations ont été apportées à l’instar de la suppression du capital social pour la création d’une SARL, la création de guichets uniques pour la constitution d’une entreprise ou le raccordement à l’électricité, la dématérialisation des procédures douanières, la réduction des taxes pour les sociétés qui investissent, ainsi que les différentes incitations fiscales permises par le Code des Investissements et le régime d’entreprise franche d’exportation. La mise sur pied d’un paquet de 52 mesures a propulsé le Sénégal parmi les 10 meilleurs réformateurs au monde par le classement « Doing Business » établi par la Banque Mondiale et ses partenaires.",
      senegal_p3_p20_p18:
        "Le Sénégal a signé plusieurs Accords de Protection et de Promotion des Investissements (APPI) avec plusieurs dizaines de pays partenaires à travers le monde. Dans un contexte de mondialisation, ces accords améliorent la sécurité juridique des investissements. Ils prévoient le rapatriement libre des capitaux d’investissement et des retours sur investissement, garantissent l’expropriation et prévoient une clause de la Nation la Plus Favorisée (NPF) au traitement des investisseurs. Ils prévoient aussi l’indemnisation des pertes en cas de guerre, de conflit armé ou d’émeute. Le Sénégal est pleinement engagé à améliorer son climat des affaires pour promouvoir les investissements et favoriser une croissance économique tirée par le secteur privé.",
      senegal_p3_p20_p19: "Le Plan Sénégal Emergent",
      senegal_p3_p20_p2: "Convivial",
      senegal_p3_p20_p20: "Plan Sénégal Émergent",
      senegal_p3_p20_p21:
        "Pour s'inscrire dans la trajectoire de l'emergence vers l'horizon 2035, le Sénégal a adopté depuis 2014 le Plan Sénégal Emergent PSE qui constitue le referentiel de sa politique economique et sociale. Cette demarche traduit la volonté politique d'enclencher une dynamique d'expansion économique tout en garantissant le bien-être des populations. La Phase II contribuera à la réalisation de la vision \"d'un Sénégal émergent en 2035 avec une société solidaire dans un État de droit\"",
      senegal_p3_p20_p22: "Télécharger",
      senegal_p3_p20_p3:
        "Le Sénégal propose un cadre de vie où se côtoient tradition et modernité. Un important réseau de banques offre les services automatisés et les transferts bancaires instantanés, à l’échelle du pays. La présence de centres commerciaux, de grandes surfaces, de librairies, de casinos et d’excellents restaurants agrémente le quotidien.",
      senegal_p3_p20_p4: "Stimulant",
      senegal_p3_p20_p5:
        "Le sport, les loisirs et la culture occupent une place de choix dans la société sénégalaise. La pêche sportive, la plongée, la voile, le karting et le golf comptent parmi les activités prisées. La vie culturelle est riche et propose aux amateurs des productions locales et internationales de haut niveau. Des gîtes en bord de mer, des réserves naturelles et des centres de thalasso invitent à la détente et au dépaysement.",
      senegal_p3_p20_p6: "Un climat des affaires très attractif",
      senegal_p3_p20_p7:
        "Le gouvernement du Sénégal a pris des mesures importantes pour améliorer l’environnement des affaires du pays. À la suite de la mise en œuvre des réformes sur l’environnement des affaires, il est beaucoup plus facile de créer et d’exploiter une entreprise au Sénégal. Les investisseurs sont maintenant en mesure de",
      senegal_p3_p20_p8: "Enregistrer une entreprise en 24h",
      senegal_p3_p20_p9:
        "Faire une opération d'importation ou d'exportation en 10 jours",
      senegal_p3_p3: "Capitale",
      senegal_p3_p4: "d’habitants",
      senegal_p3_p5:
        "Démocratie, multipartisme, solidité des institutions, reconnaissance des droits politiques et sociaux, liberté d’expression : le Sénégal est un modèle en Afrique de l’Ouest • Un pays stable cité en exemple dans le monde entier et présentant un niveau de risque modéré selon « Credit Risk International »(CRI). Le pays a une longue tradition de paix et de démocratie. Ce climat pacifique a contribué à créer un environnement des affaires propice à l’investissement et à l’augmentation des flux d’IDE . Carrefour de l’Afrique de l’Ouest, le Sénégal est un pays aux influences multiples conciliant modernité et respect des traditions. Un lieu d’échanges où tout investisseur, sans distinction d’origine, est libre de s’installer, de prospérer et de rapatrier des capitaux.",
      senegal_p3_p6:
        "Le Sénégal est un pays à l’économie libérale où le secteur privé est soutenu sans réserve par les autorités. Le vaste programme de\nprivatisation, la libre concurrence, la simplification du cadre\nréglementaire et juridique et le dynamisme du dispositif de promotion\ndes investissements favorisent un climat des affaires sain.",
      senegal_p3_p7:
        "Acteur influent en Afrique, le Sénégal est signataire des conventions internationales sur la protection de l’environnement, les droits de l’homme, le commerce, les droits d’auteurs, le droit du travail, etc. Il se distingue par son leadership dans la prise de grandes décisions en faveur de l’Afrique.",
      senegal_p3_p7_p1: "Une économie saine et compétitive",
      senegal_p3_p7_p2: "Des ressources humaines de qualité",
      senegal_p3_p7_p3: "Des infrastructures modernes et structurantes",
      senegal_p3_p7_p4: "Un cadre juridique et fiscal incitatif",
      senegal_p3_p7_p5:
        "Un accès privilégié aux marchés régionaux et internationaux",
      senegal_p3_p7_p6: "Une qualité de vie exceptionnelle",
      senegal_p3_p7_p7: "Un climat des affaires très attractif",
      senegal_p3_p8: "Une économie saine et compétitive",
      senegal_p3_p8_p1:
        "Le Sénégal est la deuxième plus grande économie de l’Afrique de l’Ouest francophone",
      senegal_p3_p8_p2: "Croissance du PIB : > 7 %",
      senegal_p3_p8_p3:
        "Le Sénégal est une exception politique en Afrique. Une valeur sûre\nconfirmée par un bon nombre d’organisations internationales, et de\nmultinationales qui ont fait de Dakar, la capitale, la base de leurs opérations régionales. L’exemplarité à tous les niveaux de l’Etat a été érigée en dogme et la promotion de la bonne gouvernance est un axe majeur de la politique étatique.",
      senegal_p3_p8_p4:
        "Premier pays en Afrique de l’Ouest à avoir été noté « B+/B » par Standard & Poors, le Sénégal confirme sa reconnaissance internationale avec la note Ba3 avec perspective stable, attribuée par Moody’s et due à sa stabilité macroéconomique, un accès illimité aux devises, une dette croissante mais modérée, un soutien de la communauté financière internationale. La politique monétaire est régie par la Banque Centrale des Etats d’Afrique de l’Ouest (BCEAO) dont le siège est à Dakar. La parité fixe entre l’euro et le franc CFA (1€ = 655 CFA) garantit une stabilité du taux de change dans les relations commerciales avec les partenaires de l’Union Européenne. Le Sénégal partage une monnaie commune avec 8 pays de l’Union Économique et Monétaire Ouest Africaine (UEMOA).",
      senegal_p3_p8_p5:
        "Tourné vers l’avenir, l’État a mis en œuvre une stratégie de croissance accélérée destinée à doper les investissements et à lutter durablement contre la pauvreté. Cet engagement formel se traduit par une politique volontariste et novatrice de promotion des investissements et la mise en place de mesures incitatives.",
      senegal_p3_p8_p6:
        "Les objectifs macro-économiques et les choix stratégiques sont\nclairement définis et diffusés, par avance, au secteur privé. Les conditions posées et les avantages consentis sont connus et identiques pour tous, nationaux et étrangers. Grâce à ses pratiques de bonne gouvernance, le Sénégal jouit de la confiance des institutions financières internationales.",
      senegal_p3_p8_p7:
        "Le Sénégal est le premier pays ouest africain à se voir attribuer la notation « B+ / stable / B » trois années consécutives (Standards & Poor’s). L’inflation y est maîtrisée, les recettes financières en hausse, et le pays figure dans le top 5 des pays en Afrique à la croissance la plus forte en 2018.",
      senegal_p3_p9: "Des ressources humaines de qualité",
      senegal_p3_p9_p1:
        "Le Sénégal dispose d’un important réservoir de main – d’œuvre jeune, qualifiée. On estime que la majorité de la population a entre 15 et 55 ans, donc est active. En effet, la formation technique et professionnelle est une option sérieuse dans la politique de l’État.\nParallèlement au système d’éducation classique (primaire, moyen,\nsecondaire et supérieur) il existe plusieurs dispositifs de formation\ndont les effectifs sont sans cesse croissants (de 29 000 apprenants en 2012 , ils sont passés à 55 000 en 2016 ) . En outre, l’Approche Par les Compétences (APC) s’est substituée à l’approche traditionnelle, pour une formation professionnelle qualifiante permettant aux élèves et étudiants une plus rapide opérationnalité.",
      senegal_p3_p9_p2:
        "Convaincu que la qualité des hommes et des femmes constitue la véritable richesse d’un pays, le Sénégal consacre plus de la moitié de son budget national à l’éducation et à la santé. Le pays compte de nombreux établissements publics et privés d’enseignement primaire, secondaire et supérieur. De prestigieuses universités et écoles étrangères proposent des formations spécialisées de haut niveau sur place, ou en partenariat.",
      senegal_p3_p9_p3:
        "Le Sénégal dispose d’un important pool de cadres et d’experts de haut niveau formés localement ou à l’étranger. L’offre locale propose un large éventail de formation professionnelle de qualité. L’apprentissage technique dispense des formations pratiques adaptées aux besoins du marché du travail.",
      senegal_ul_p1: "Une économie saine et compétitive",
      senegal_ul_p2: "Des ressources humaines de qualité",
      senegal_ul_p3: "Des infrastructures modernes et structurantes",
      senegal_ul_p4: "Un cadre juridique et fiscal incitatif",
      senegal_ul_p5:
        "Un accès privilégié aux marchés régionaux et internationaux",
      senegal_ul_p6: "Une qualité de vie exceptionnelle",
      senegal_ul_p7: "Un climat des affaires très attractif",
      senegal_w1: "LE SENEGAL",
      home_ww: "HOME",
    },
  },
  ar: {
    translation: {
      address_1: "داكار, السنغال",
      whatsApp: " الواتساب ",
      Message: "الرسالة",
      contact_ww: "اتصل بنا",
      slider_w1: "هل تريد الانضمام",
      slider_w2: "لسوق يضم 360 مليون مستهلك؟",
      slider_w3: "السنغال تفتح لك أبوابها !!",
      slider_w4: "اضغط هنا",
      slider_w5: "",
      footer_p1: "العنوان",
      contact_p1: "الاسم الكامل",
      contact_p2: "البريد الإلكتروني مطلوب",
      contact_p3: "رقم الهاتف",
      contact_p4: "الرجاء إدخال رقم الهاتف الصحيح",
      contact_p5: "رسالة",
      contact_p6: "الرجاء كتابة استفسارك هنا ...",
      contact_p7: "لأي استفسار , يرجى ملء النموذج",
      contact_p8: "إرسال",
      contact_p9: "اتصل بنا",
      contact_p11: "الاسم الكامل مطلوب",
      contact_p12: "تم الإرسال بنجاح",
      sub_w1: "الاشتراك",

      err_1: "اسم الشركة مطلوب",
      err_2: "العنوان مطلوب",
      err_3: "البلد مطلوب",
      Err_4: "الرجاء إدخال رقم هاتف صحيح",
      Err_5: "البريد الإلكتروني مطلوب",
      Err_6: "هذا الحقل مطلوب",
      sub_1: "اسم الشركة",
      sub_2: "العنوان",
      sub_3: "البلد",
      sub_4: "القائد",
      sub_5: "هاتف",
      sub_6: "البريد الإلكتروني",
      sub_7: "موقع الويب",
      sub_8: "منطقة النشاط",
      sub_9: "طبيعة المنتج المتوقع تصنيعه في السنغال",
      sub_10: "إرسال",
      option_1: "الخيارات",
      option_2: "لديك الخيار:",
      option_3: "الخيار 1: أرض خالية من الخدمات من 2500 م 2 إلى 20000 م 2",
      option_4:
        "الخيار الثاني: أرض + مباني ومكاتب حسب رغباتك واتباع المواصفات الفنية الخاصة بك",
      option_5:
        "إذا قمنا ببناء حظائرك ومكاتبك , فلن يكون لديك ما تفعله , فنحن ندير كل شيء وفقًا لمعاييرك ورغباتك ووفقًا للمعايير واللوائح المحلية. فترات زمنية قصيرة جدًا.",
      phone_1: "الهاتف",
      pole_101: "انقر هنا",
      pole_100: "لمزيد من المعلومات من فضلك",
      header_s1: "السنغال",
      header_s2: "الاشتراك",
      header_s3: "الخيارات",
      pole_45: "مطعم متخصص به 50 طبقًا",
      pole_46: "مطعم ذواقة به 40 مقعدًا",
      pole_47: "الصحة",
      pole_48: "طبيب دائم",
      pole_49: "عيادة",
      pole_50: "خدمات متنوعة",
      pole_51: "صحافة / صانع سجائر / مكتب القرطاسية",
      pole_52: "بنك",
      pole_53: "متجر صغير",
      pole_54: "مكاتب إدارية",
      pole_55: "نافذة واحدة APIX",
      pole_56: "كاتب العدل",
      pole_57: "مكتب الجمارك",
      pole_58: "الهوايات",
      pole_59: "حمام السباحة",
      pole_60: "صالة الرياضة",
      pole_61: "مساحات خضراء للاسترخاء",
      pole_62: "دور العبادة",
      pole_63:
        "تم تصميم عمود ماتيك لتجنب الحد الأقصى من الإزاحة ويجب أن يكون كل عضو في متناول اليد.",
      pole_64: "الاشتراك في pole matech هو ضمان الكفاءة اليومية",
      pole_65: "انضمام",
      pole_66: "حدد اختيارك للمنطقة التي تريدها وسنقدم اقتباسًا مخصصًا يتضمن",
      pole_67: "رسم الدخول الفردي",
      pole_68: "الرسم السنوي",
      pole_69: "رسوم التوصيل",
      pole_70: "بناء حظائر الطائرات والمكاتب الخاصة بك إذا أردت",
      pole_71:
        "بعد ذلك , سنؤسس لك عقد إيجار علاجي لمدة 25 عامًا , قابل للتجديد مرة واحدة , أي 50 عامًا وكل ذلك في أقل من شهر واحد !!",
      pole_72: "شروط الحصول على قاعدة ضريبية للأرض",
      pole_73: "إعداد وحدة إنتاج",
      pole_74: "الإنشاء في غضون 12 شهرًا",
      pole_75: "وظف 50 شخصًا محليًا",
      pole_76: "احترام ميثاق البيئة",
      pole_77: "الالتزام بالقواعد الداخلية للمنطقة",
      pole_78: "تصدير 50٪ من إنتاجها خارج السنغال",
      pole_79: "حافظ على قطعة أرضك نظيفة ومستوفية للمعايير",
      pole_80: "انضم إلى قواعد أمان المنطقة",
      pole_81: "دفع الرسوم السنوية",
      pole_82: "رسم الدخول",
      pole_83: "دفع رسم دخول واحد",
      pole_84: "دفع تكاليف توصيلات المياه بالكهرباء بالألياف الضوئية",
      pole_85: "حقوقه متغيرة حسب السطح المطلوب",
      pole_86: "اطلب عرض أسعار عبر الإنترنت الآن!",
      apix_p1: "APIX هي نافذة واحدة مهمتها",
      apix_p1_p1: "دعم المستثمرين الأجانب والوطنيين في السنغال",
      apix_p1_p10: "المناطق الاقتصادية الخاصة",
      apix_p1_p11:
        "المناطق الاقتصادية الخاصة هي مساحات لاستضافة الأنشطة الاقتصادية التي تهدف إلى تقديم مجموعة من البنى التحتية والخدمات التي توفر للشركات أفضل الظروف لممارسة أنشطتها.",
      apix_p1_p12: "إطار حوكمة المناطق الاقتصادية الخاصة",
      apix_p1_p13:
        "كما هو محدد في القانون 2017-06 بشأن المناطق الاقتصادية الخاصة (SEZs) , يتكون إطار الحوكمة من الكيانات التالية",
      apix_p1_p14: "الوزارة المكلفة بتشجيع الاستثمار",
      apix_p1_p15:
        "مسؤول عن التوجهات الاستراتيجية وتنفيذ سياسة تطوير المناطق الاقتصادية الخاصة",
      apix_p1_p16: "اللجنة المشتركة بين القطاعين العام والخاص",
      apix_p1_p17: "المسؤول عن الرقابة والتنظيم ",
      home_ww: "الصفحة الرئيسية",
      pole_p2:
        "تقع في منطقة دياس الاقتصادية على بعد 40 كم من داكار في بلدة دياس القديمة",
      pole_p4: "كيلومتر واحد من مطار داكار الدولي ومنطقة الشحن-",
      pole_p5: "15 كيلومترا من الميناء الدولي الجديد الذي يديره ميناء دبي-",
      pole_p6:
        "على قاعدة أرضية تبلغ 21 هكتارًا , يعد مجمع ماتيك منطقة تستضيف أكثر من 20 شركة تركز جميعها على الإنتاج التكنولوجي والابتكار.",
      pole_p6:
        "على قاعدة أرضية تبلغ 21 هكتارًا , يعد مجمع ماتيك منطقة تستضيف أكثر من 20 شركة تركز جميعها على الإنتاج التكنولوجي والابتكار.",
      pole_p7: "جميع المرافق المعيشية والتقنية واللوجستية تحت تصرفك",
      pole_p3: "موقعه مثالي لأن",
      pole_p8: "خطة التنمية",
      pole_p9:
        "تم وضع مركز على أرض قابلة للتطوير مع إمكانية وصول المركبات الخفيفة ومركبات البضائع الثقيلة.",
      pole_p10: "يمكن تسليم كل دفعة",
      pole_p11: "تخلو من توصيلات المياه والصرف الصحي والكهرباء على حافة الأرض",
      pole_p12: "مع حظيرة الإنتاج والمكاتب وفقًا لخططك",
      senegal_ul_p1: "اقتصاد صحي وتنافسي",
      senegal_ul_p2: "جودة الموارد البشرية",
      senegal_ul_p3: "البنى التحتية الحديثة والمنظمة",
      senegal_ul_p4: "إطار قانوني ومالي حافز",
      senegal_ul_p5: "امتياز الوصول إلى الأسواق الإقليمية والدولية",
      senegal_ul_p6: "نوعية حياة استثنائية",
      senegal_ul_p7: "مناخ عمل جذاب للغاية",
      senegal_w1: "السنغال",
      senegal_p1: "سبب الاستثمار في السنغال",
      senegal_p2: "أسباب الاستثمار في السنغال",
      senegal_p3: "بلد مستقر ومنفتح",
      senegal_p3_p1:
        "تقع السنغال على الساحل الغربي لأفريقيا , بين خط عرض 12 ° 88 و 16 ° 41 شمالًا وخط طول 11 ° 21 و 17 ° 32 غربًا , وهي حالة السنغال في الطرف الغربي من القارة الأفريقية في جزء منها   الأكثر تقدمًا في المحيط الأطلسي , يمنحه موقعًا محوريًا يربط إفريقيا ببقية العالم. يُعتبر أسهل وأسرع بوابة إلى غرب إفريقيا , ويفتح الوصول إلى سوق مشترك يضم 300 مليون مستهلك. كما تعمل السنغال كبوابة مهمة إلى أسواق التصدير الرئيسية. التصدير إلى أوروبا وآسيا والأمريكتين. كانت المؤشرات الاقتصادية تتحسن باستمرار لعدة سنوات. ",
      senegal_p3_p2: "المنطقة",
      senegal_p3_p3: "عاصمة",
      senegal_p3_p4: "سكان",
      senegal_p3_p5:
        "الديمقراطية , نظام التعددية الحزبية , صلابة المؤسسات , الاعتراف بالحقوق السياسية والاجتماعية , حرية التعبير: السنغال نموذج في غرب إفريقيا • بلد مستقر يُستشهد به كمثال في جميع أنحاء العالم ويمثل مستوى معتدلًا من المخاطر وفقًا لمخاطر الائتمان دولي (CRI). للبلد تقليد طويل من السلام والديمقراطية. وقد ساعد هذا المناخ السلمي على خلق بيئة أعمال مواتية للاستثمار وزيادة تدفقات الاستثمار الأجنبي المباشر. مفترق طرق لغرب إفريقيا , السنغال بلد له تأثيرات متعددة توفق بين الحداثة واحترام التقاليد. مكان التبادل حيث يكون لأي مستثمر , بغض النظر عن أصله , حرية الاستقرار والازدهار والعودة إلى رأس المال ",
      senegal_p3_p6:
        "السنغال بلد يتمتع باقتصاد ليبرالي حيث يدعم القطاع الخاص بالكامل من قبل السلطات. والبرنامج الواسع للخصخصة والمنافسة الحرة وتبسيط الإطار التنظيمي والقانوني وديناميكية استثمارات نظام الترويج الذي يعمل على تعزيز مناخ الأعمال الصحي. ",
      senegal_p3_p7:
        "لاعب مؤثر في أفريقيا , السنغال هو أحد الموقعين على الاتفاقيات الدولية بشأن حماية البيئة , وحقوق الإنسان , والتجارة , وحقوق التأليف والنشر , وقانون العمل , وما إلى ذلك. لقد برز لقيادته في اتخاذ القرارات الرئيسية لصالح أفريقيا.",
      senegal_p3_p7_p1: "اقتصاد صحي وتنافسي",
      senegal_p3_p7_p2: "جودة الموارد البشرية",
      senegal_p3_p7_p3: "البنى التحتية الحديثة والمنظمة",
      senegal_p3_p7_p4: "إطار قانوني ومالي حافز",
      senegal_p3_p7_p5: "امتياز الوصول إلى الأسواق الإقليمية والدولية",
      senegal_p3_p7_p6: "نوعية حياة استثنائية",
      senegal_p3_p7_p7: "مناخ أعمال جذاب للغاية",
      senegal_p3_p8: "اقتصاد صحي وتنافسي",
      senegal_p3_p8_p1:
        "السنغال هي ثاني أكبر اقتصاد في غرب إفريقيا الناطقة بالفرنسية",
      senegal_p3_p8_p2: "نمو الناتج المحلي الإجمالي:> 7٪",
      senegal_p3_p8_p3:
        "السنغال استثناء سياسي في أفريقيا. رهان آمن أكده عدد لا بأس به من المنظمات الدولية والشركات متعددة الجنسيات التي جعلت من داكار , العاصمة , قاعدة عملياتها الإقليمية. وقد كان مثالاً يحتذى به على جميع مستويات الدولة أن تكون عقيدة وأن تعزيز الحكم الرشيد هو محور رئيسي لسياسة الدولة ",
      senegal_p3_p8_p4:
        "تؤكد السنغال , أول دولة في غرب إفريقيا تحصل على التصنيف B + / B من قبل Standard & Poors , على اعترافها الدولي بتصنيف Ba3 مع نظرة مستقبلية مستقرة , تنسبه Moody وبسبب استقرارها الاقتصادي الكلي , والوصول غير المحدود إلى العملات , ديون متنامية لكن معتدلة , دعم من المجتمع المالي الدولي. تخضع السياسة النقدية للبنك المركزي لدول غرب إفريقيا (BCEAO) , ومقره في داكار. يضمن التكافؤ الثابت بين اليورو وفرنك CFA (1 يورو = 655 فرنك أفريقي) استقرار سعر الصرف في العلاقات التجارية مع شركاء الاتحاد الأوروبي. تشترك السنغال في عملة مشتركة مع 8 دول من الاتحاد الاقتصادي والنقدي لغرب إفريقيا (UEMOA).",
      senegal_p3_p8_p5:
        "بالنظر إلى المستقبل , نفذت الدولة استراتيجية نمو متسارعة تهدف إلى تعزيز الاستثمار ومكافحة الفقر بشكل مستدام. ويترجم هذا الالتزام الرسمي إلى سياسة استباقية ومبتكرة لتشجيع الاستثمار وتنفيذ تدابير حافزة",
      senegal_p3_p8_p6:
        "إن أهداف الاقتصاد الكلي والخيارات الاستراتيجية محددة بوضوح وإبلاغ القطاع الخاص سلفا. الشروط الموضوعة والمزايا الممنوحة معروفة ومتطابقة للجميع , مواطنين وأجانب. وبفضل ممارساتها في الإدارة الرشيدة , تتمتع السنغال بثقة المؤسسات المالية الدولية. ",
      senegal_p3_p8_p7:
        " السنغال هي أول دولة في غرب إفريقيا تُمنح تصنيف B + / Stable / B لمدة ثلاث سنوات متتالية (معايير & ضعيف). التضخم تحت السيطرة , والإيرادات المالية آخذة في الارتفاع , والبلاد هي من بين البلدان الخمسة الأولى في أفريقيا مع أقوى نمو في عام 2018",
      senegal_p3_p9: "جودة الموارد البشرية",
      senegal_p3_p9_p1:
        "السنغال لديها مخزون كبير من العمالة الشابة المؤهلة. وتشير التقديرات إلى أن غالبية السكان تتراوح أعمارهم بين 15 و 55 سنة , وبالتالي فهي نشطة. والواقع أن التدريب التقني والمهني هو خيار جاد في سياسة الدولة. بالتوازي مع نظام التعليم الكلاسيكي (الابتدائي والمتوسط ​​والثانوي والعالي) هناك العديد من خطط التدريب التي تتزايد أعدادها باستمرار (من 29000 متعلم في عام 2012 , وارتفعت إلى 55000 في عام 2016). بالإضافة إلى ذلك , حل النهج القائم على الكفاءة (APC) محل النهج التقليدي , لتأهيل التدريب المهني الذي يسمح للتلاميذ والطلاب بالعمل بسرعة أكبر. ",
      senegal_p3_p9_p2:
        "واقتناعا منها بأن جودة الرجال والنساء تشكل الثروة الحقيقية لأي بلد , تخصص السنغال أكثر من نصف ميزانيتها الوطنية للتعليم والصحة. يوجد في البلد العديد من مؤسسات التعليم الابتدائي والثانوي والعالي العامة والخاصة. تقدم المدارس تدريبًا متخصصًا عالي المستوى في الموقع أو بالشراكة. ",

      senegal_p3_p9_p3:
        "السنغال لديها مجموعة كبيرة من المديرين التنفيذيين رفيعي المستوى والخبراء المدربين محليًا أو في الخارج. يقدم العرض المحلي مجموعة واسعة من التدريب المهني الجيد. يوفر التلمذة المهنية التقنية تدريبًا عمليًا يتكيف مع احتياجات سوق العمل.",
      senegal_p3_p10: "البنى التحتية الحديثة والمنظمة",
      senegal_p3_p10_p1:
        "لقد أحرزت السنغال تقدمًا كبيرًا في تحسين البنية التحتية للنقل. وقد مكّنت الاستثمارات الكبيرة من توسيع الشبكات الوطنية والعابرة للحدود لتحسين تنقل وأمن الأشخاص والبضائع , وتعزيز إنشاء مراكز اقتصادية جديدة في جميع أنحاء البلاد.",
      senegal_p3_p10_p2:
        " وفقًا للبنك الدولي , تحتل السنغال المرتبة الأولى في شمال غرب إفريقيا في ترتيب الأداء اللوجستي , وذلك بفضل الحالة الجيدة لبنيتها التحتية (الجوية والبرية والبحرية) وموقعها الجغرافي الفريد. بعد أن استثمرت السنغال مؤخرًا بكثافة في البنية التحتية للنقل , تقدم للشركات هياكل هندسية عالمية المستوى , تعتمد على آلية بوابة ممر تسمح لها بشحن بضائعها إلى الأسواق بسرعة أكبر , في ظل ظروف مواتية. حديثة وفعالة. ",
      senegal_p3_p10_p3:
        "تربط أكبر شركات الطيران داكار كل يوم بالمراكز التجارية في العالم: باريس ولندن ودبي ونيويورك وجوهانسبرغ وطيران السنغال S.A , شركة الطيران الوطنية , تضمن , من داكار , المراسلات داخل السنغال وإلى دول أخرى.",
      senegal_p3_p10_p4:
        "السنغال ميناء بحري فعال يوفر مكاسب في الملاحة للسفن القادمة من الشمال مقارنة بالموانئ الأخرى على ساحل غرب إفريقيا. يوفر ميناء داكار 24 ساعة في اليوم , ومجموعة من الخدمات المهنية وحالة من -البنية التحتية المتطورة لتحسين ظروف التوقف والعبور والشحن. ",
      senegal_p3_p10_p5:
        "وفقًا للاتحاد الدولي للاتصالات (ITU) , فإن السنغال هي الدولة الأولى في غرب إفريقيا من حيث معدل الاختراق وجودة الخدمات.",
      senegal_p3_p11: "مشاريع البنية التحتية الكبرى",
      senegal_p3_p11_p1:
        "إن تطوير بنية تحتية فعالة هو شرط أساسي للتنمية الاقتصادية. وهو عامل رئيسي في أي استراتيجية لتشجيع الاستثمار. وبهذه الروح , بدأت السلطات سلسلة من مشاريع الهيكلة.",
      senegal_p3_p12: "الطريق",
      senegal_p3_p12_p1:
        "السنغال لديها شبكة طرق كثيفة وجيدة الصيانة يمكنها ضمان الحركة السلسة للأشخاص والبضائع. وهناك برنامج لتحسين التنقل الحضري قيد التنفيذ لتحسين السفر إلى العاصمة وداخلها",
      senegal_p3_p12_p2:
        "في قطاع الطرق , ستعمل المشاريع الكبرى مثل الطرق السريعة في داكار- AIBD-SINDIA وإيلا توبا ومشاريع بناء وإعادة تأهيل الطرق الوطنية على تحسين الوصول إلى الطرق السريعة الرئيسية داكار - باماكو , داكار - كوناكري وداكار - طنجة.",
      senegal_p3_p13: "السكك الحديدية",
      senegal_p3_p13_p1:
        "المشاريع الكبرى جارية لإعادة تأهيل وتحديث نظام السكك الحديدية في السنغال",
      senegal_p3_p13_p3_p1: "سكة حديد داكار – باماكو",
      senegal_p3_p13_p3_p2: "مع 1,286 كم لتحسين الاتصال بين داكار وباماكو.",
      senegal_p3_p13_p4_p1: "القطار الإقليمي السريع (TER)",
      senegal_p3_p13_p4_p2: "من داكار ب 55 كم لربط داكار بمطار AIBD.",
      senegal_p3_p13_p5_p1:
        "قطار داكار- AIBD الإقليمي السريع (أو TER Dakar-AIBD) هو خط",
      senegal_p3_p13_p5_p1_blue: "سكة حديدية",
      senegal_p3_p13_p5_p2: "كهربائي إلى",
      senegal_p3_p13_p5_p2_blue: "مقياس قياسي",
      senegal_p3_p13_p5_p3:
        "قيد الإنشاء في السنغال ومن المقرر افتتاح القسم الأول منه مطلع عام 2019. وسيربط العاصمة",
      senegal_p3_p13_p5_p3_blue: "داكار",
      senegal_p3_p13_p5_p4: ", في",
      senegal_p3_p13_p5_p4_blue: "مطار بليز دياني الدولي",
      senegal_p3_p13_p5_p5:
        "(AIBD) وكذلك البلدات الجديدة الواقعة على البر الرئيسي للبلاد.",
      senegal_p3_p13_p6:
        "سيمكن هذا المشروع من فتح العاصمة , التي تمثل الجزء الأكبر من نشاط البلاد , من بقية السنغال والتوجه نحو شبكات السكك الحديدية الدولية.",
      senegal_p3_p14: "المطارات",
      senegal_p3_p14_p1:
        "وضعت السنغال في الخدمة أحدث جيل من المطارات الدولية , التي تقع على بعد حوالي خمسين كيلومترًا من داكار. يقدم مطار بليز دياني الدولي (AIBD) أفضل المطارات على مستوى العالم. ويتسع حاليًا لثلاثة (03) مليون مسافر لكل عام ويجب أن تصل إلى عشرة (10) ملايين في السنة , مما يجعلها مركزًا للتنقل الإقليمي والدولي. تخفيف الازدحام في داكار وظهور قطب اقتصادي ثانٍ خارج العاصمة. الامتثال للمتطلبات الجديدة للحركة الجوية الدولية. ",
      senegal_p3_p15: "حيوية",
      senegal_p3_p15_p1:
        "إنتاج الكهرباء بجودة مرضية وبكميات كافية بفضل الاستثمارات الكبيرة في قطاع الطاقة",
      senegal_p3_p15_p2: "4 محطات طاقة شمسية",
      senegal_p3_p15_p3: "إنتاج عام 2017 1000 ميغاواط",
      senegal_p3_p15_p4:
        "انخفاض تكاليف عوامل الإنتاج (الماء والكهرباء وما إلى ذلك).",
      senegal_p3_p16: "المنافذ",
      senegal_p3_p17_p1:
        "السنغال , الشركة الرائدة بلا منازع في غرب إفريقيا , لديها شبكة اتصالات سلكية ولاسلكية فعالة ورقمنة بالكامل بأكثر من 2200 كيلومتر من الألياف البصرية. وهي متصلة بأوروبا وأمريكا وآسيا والشرق الأوسط عبر وصلات الكابلات الدائمة. اختراق خدمات الإنترنت والهاتف مهم في الأعمال التجارية وكذلك في الأفراد. وقد أدى تحرير قطاع الاتصالات السلكية واللاسلكية إلى منافسة صحية في الخدمات الأساسية وانتشار العرض في الخدمات المتخصصة. ",
      senegal_p3_p17_p10:
        "المناطق الاقتصادية الخاصة , مجموعات القدرة التنافسية ومحركات النمو لاقتصاد السنغال",
      senegal_p3_p17_p11:
        "من خلال إطار ضرائب الحوافز والجمارك , وبنية تحتية على أحدث طراز وإدارة تلبي أفضل المعايير الدولية , فإن المناطق الاقتصادية الخاصة هي مساحات مصممة لاستيعاب الأنشطة الاقتصادية وتهدف إلى وضع السنغال كمركز لمنصات الخدمات اللوجستية المتكاملة في جنوب إفريقياالغرب في النهاية , سيسمحون للسنغال بتلبية أعلى معايير بيئة الأعمال وتقديم نطاقات خدمة عالية الجودة للمستثمرين.",
      senegal_p3_p17_p2: "بعض الشخصيات الرئيسية في عام 2017",
      senegal_p3_p17_p3: "هاتف محمول",
      senegal_p3_p17_p4: "15.7 مليون مشترك",
      senegal_p3_p17_p5: "معدل انتشار خدمة الجوال",
      senegal_p3_p17_p6: "التغطية",
      senegal_p3_p17_p7: "معدل انتشار خدمة الإنترنت",
      senegal_p3_p17_p8: "المشتركون",
      senegal_p3_p17_p9: "نسبة تغطية 97.20٪",
      senegal_p3_p18:
        "إطار حافز قانوني وضريبي للأخوات , نطاقات كبيرة من خدمات الفاتورة.",
      senegal_p3_p18_p1: "تنافسي",
      senegal_p3_p18_p10: "تم تجديده",
      senegal_p3_p16_p1:
        "عند مفترق طرق عدة بحرية ، يتمتع ميناء داكار المستقل بموقع جغرافي استثنائي. يقع على مفترق طرق ثلاثة طرق تجارية رئيسية (أمريكا الشمالية - أفريقيا ، أوروبا - أفريقيا وأوروبا - أمريكا الجنوبية) ، الوصول مباشر ، في في أي وقت من السنة ، دون قيود على المد والجزر ، وعمليات السفن. والتعامل على مدار الساعة طوال أيام الأسبوع. يتم التعامل مع الحاويات والهيدروكربونات والمواد الغذائية والمنتجات البحرية هناك ليل نهار. عرض الخدمة تنافسي ومتنوع ويشمل إصلاح السفن. برنامج التحديث والتوسيع ، قيد التنفيذ ، ينص على بناء محطة حاويات ثالثة ، ومحطة عبّارات جديدة ورصيف فواكه. ومن المقرر أيضًا إنشاء محطة ركاز. ",
      senegal_p3_p17: "الاتصالات",
      senegal_p3_p18_p2:
        "اعتمدت السنغال قانونًا جديدًا للاستثمار يوفر حوافز محددة لتحفيز الاستثمار في القطاعات الرئيسية مثل الزراعة والأعمال التجارية الزراعية وصيد الأسماك والثروة الحيوانية والصناعات ذات الصلة والتصنيع والسياحة والتعدين ، من بين قطاعات أخرى. وتشمل حوافز الاستثمار ، على سبيل المثال لا الحصر إلى",
      senegal_p3_p18_p3: "الإعفاءات من الرسوم الجمركية (أكثر من 03 سنوات)",
      senegal_p3_p18_p4: "تعليق ضريبة القيمة المضافة (أكثر من 03 سنوات)",
      senegal_p3_p18_p5:
        "إعفاءات ضريبية بنسبة 40٪ للاستثمار المؤهل وقابلة للخصم في غضون 50 عامًا",
      senegal_p3_p18_p6:
        "وضع شركة تصدير حرة لشركات الزراعة والصناعة والاتصالات التي تستمد ما لا يقل عن 8٪ من حجم مبيعاتها من الصادرات.",
      senegal_p3_p18_p7: "حالة شركة التصدير الحرة",
      senegal_p3_p18_p8:
        "تُمنح هذه الحالة للشركات التي تصدر ما لا يقل عن 80٪ من إنتاجها. الزراعة بالمعنى الواسع ، والصناعة والخدمات عن بعد هي القطاعات المؤهلة للحصول على وضع EFE. تُمنح العديد من المزايا للشركات ، ولا سيما تخفيض ضريبة الشركات (15٪) ، وإعفاء من ضريبة المرتبات ، ورسوم التسجيل والطوابع ، ومساهمة براءات الاختراع ، والإعفاء من الرسوم والضرائب على معدات الإنتاج والمواد الخام ، وغير ذلك ",
      senegal_p3_p18_p9:
        "في السنغال ، يتم دعم الاستثمار بسياسة حوافز جذابة تستند إلى أنظمة قانونية وضريبية وجمركية يتم تحديثها بانتظام. وتُمنح تدابير الإعفاء الضريبي والضمانات والمزايا للمستثمرين من خلال قانون الاستثمار الجديد ونظام مؤسسة التصدير الحرة وقانون BOT. متجر حديث يجمع بين الإجراءات الإدارية وتسهيلها وتسريعها. ",
      senegal_p3_p19_p2:
        "السنغال عضو في الاتحاد الاقتصادي والنقدي لغرب إفريقيا (UEMOA) ، وهي منظمة إقليمية تضم 8 دول ويبلغ عدد سكانها 112 مليون نسمة والتي تمثل سوقًا يضم 90 مليون مستهلك ، وتتمثل مهمتها في تعزيز التكامل الاقتصادي من خلال تعزيز القدرة التنافسية لاقتصاداتها داخل إطار عمل لسوق مفتوح وتنافسي وبيئة قانونية منسقة. ",
      senegal_p3_p19: "امتياز الوصول إلى الأسواق الإقليمية والدولية",
      senegal_p3_p19_p1: "متكامل",
      senegal_p3_p19_p3:
        "السنغال عضو أيضًا في الجماعة الاقتصادية لدول غرب أفريقيا (ECOWAS) ، وهي كتلة إقليمية تضم 15 دولة (حوالي 360 مليون نسمة) لتعزيز التكامل الاقتصادي في مختلف القطاعات ، بما في ذلك النقل ، والطاقة ، والصناعة ، والزراعة ، والموارد الطبيعية والتجارة. ",
      senegal_p3_p19_p4:
        "بصفتها عضوًا مهمًا في الكتل الاقتصادية المذكورة أعلاه ، وبفضل موقعها الاستراتيجي ، تعد السنغال نقطة وصول إلى سوق كبير يضم أكثر من 300 مليون مستهلك في إفريقيا.",
      senegal_p3_p19_p5: "عضو في",
      senegal_p3_p19_p6: "الاتحاد الاقتصادي والنقدي لغرب إفريقيا",
      senegal_p3_p19_p7: "المجموعة الاقتصادية لدول غرب إفريقيا",
      senegal_p3_p19_p8: "الاتحاد الأفريقي",
      senegal_p3_p19_p9: "منظمة تنمية نهر غامبيا",
      senegal_p3_p19_p10: "ومنظمة تنمية نهر السنغال",
      senegal_p3_p19_p11: "مميز",
      senegal_p3_p19_p12:
        "تتمتع السنغال بوصول تفضيلي إلى الأسواق الأوروبية (اتفاقيات الاتحاد الأوروبي / دول أفريقيا والكاريبي والمحيط الهادئ) والأمريكية (أغوا) والكندية (قانون المبادرة الكندية). تتيح هذه الإجراءات تصدير السلع الاستهلاكية هناك بدون حصص ومعفاة من الرسوم الجمركية أو بأسعار مخفضة.",
      senegal_p3_p19_p13:
        "تقع السنغال على بعد أقل من 5 ساعات من أوروبا و 7 ساعات من الولايات المتحدة بالطائرة. وتقع داكار على مفترق طرق للعديد من الطرق البحرية وتتمتع بميزة نسبية حقيقية للشحن البحري. ويتم الاتصال في أقل من 6 أيام بالنسبة لأوروبا ، وفي غضون 7 أيام للولايات المتحدة. يقدم ميناء داكار خدمات لوجستية عالية الجودة ووصلة مباشرة مع القطار والطرق السريعة الرئيسية. ",
      senegal_p3_p19_p14: "نوعية حياة استثنائية",
      senegal_p3_p19_p15:
        " إن كرم السكان أسطوري. ويغطي لقب بلد 'Téranga' هذه الفضيلة السنغالية ذاتها. صنف المنتدى الاقتصادي العالمي السنغال في المرتبة السادسة بين أكثر البلدان ترحيباً في العالم ، وفقاً للسياح.",
      senegal_p3_p19_p16:
        "السنغال بلد يتمتع بظروف معيشية ممتعة ، ومناخها المعتدل والمشمس منتعش من خلال 700 كيلومتر من الشواطئ التي توفر لسكانها وزوارها مجموعة متنوعة من الأنشطة الترفيهية. الأحياء السكنية الحديثة مع الإقامة الفاخرة ، ومراكز التسوق حيث توجد العلامات التجارية العالمية الشهيرة. ، ومطاعم الذواقة ، والمدارس الأجنبية (الفرنسية والأمريكية) تساهم في إنشاء مجموعة من المرافق الراقية التي تتكيف مع المغتربين. ",
      senegal_p3_p19_p17:
        "الأصالة والابتكار يضفيان طابعًا فريدًا على البرمجة الفنية السنغالية. المشهد الثقافي نابض بالحياة للغاية ، يحركه فنانون مشهورون عالميًا وأنماط انتقائية. صناعة السينما في ذروتها مع التكريس الدولي للمواهب السنغالية.",
      senegal_p3_p19_p18: "ترحيب",
      senegal_p3_p19_p19:
        "السنغال بلد حيث الضيافة هي عملة وطنية حقيقية. السكان شباب وحيويون ومتسامحون. المناخ لطيف والشمس تشرق على مدار السنة. يوفر البلد إطارًا مثاليًا للحياة لتحقيق الذات والعمل والقيام عمل جيد.",
      senegal_p3_p19_p21: "مطمئنة",
      senegal_p3_p19_p22:
        "تعتبر السنغال ملاذًا للسلام ، وتوفر بيئة آمنة وسلمية. ويوجد بالبلد مستشفيات ومراكز صحية مجهزة تجهيزًا جيدًا. وفي داكار وفي المدن الكبرى ، تقدم العيادات الخاصة الحديثة رعاية متخصصة ذات جودة عالمية ، بما في ذلك خدمات الإجلاء الطبي.",
      senegal_p3_p20: "الممارسة",
      senegal_p3_p20_p1:
        "إجراءات الإقامة بسيطة للزوار والمقيمين على حد سواء. الفندق أو الإقامة أو فيلا الأحلام ، العرض من حيث جودة الإقامة متعدد ومتنوع. لتعليم الأطفال ، تقدم المدرسة الخاصة فرص تدريب عالية الجودة باللغتين الفرنسية والإنجليزية ، من مرحلة ما قبل المدرسة إلى التعليم العالي. ",
      senegal_p3_p20_p2: "سهل الاستخدام",
      senegal_p3_p20_p3:
        "توفر السنغال بيئة معيشية تتعايش فيها التقاليد والحداثة. وهناك شبكة كبيرة من البنوك تقدم خدمات مؤتمتة وتحويلات مصرفية فورية ، على الصعيد الوطني. ووجود مراكز التسوق ومحلات السوبر ماركت والمكتبات والكازينوهات والمطاعم الممتازة يعزز الحياة اليومية.",
      senegal_p3_p20_p4: "تحفيز",
      senegal_p3_p20_p5:
        "تحتل الرياضة والترفيه والثقافة مكانة خاصة في المجتمع السنغالي. تعتبر رياضة الصيد والغوص والإبحار والكارتينج والجولف من الأنشطة الشعبية. الحياة الثقافية غنية وتقدم للهواة منتجات محلية وعالمية رفيعة المستوى. والمحميات الطبيعية ومراكز العلاج بمياه البحر تدعوك للاسترخاء والابتعاد عن كل شيء. ",
      senegal_p3_p20_p6: "مناخ أعمال جذاب للغاية",
      senegal_p3_p20_p7:
        "اتخذت حكومة السنغال خطوات مهمة لتحسين بيئة الأعمال في البلاد. بعد تنفيذ إصلاحات بيئة الأعمال ، أصبح من الأسهل بكثير بدء وتشغيل مشروع تجاري في السنغال. أصبح المستثمرون الآن قادرين على ذلك",
      senegal_p3_p20_p8: "سجل نشاطك التجاري خلال 24 ساعة",
      senegal_p3_p20_p9: "قم بإجراء عملية استيراد أو تصدير في غضون 10 أيام",
      senegal_p3_p20_p10: "قم بنقل الملكية في غضون 50 يومًا",
      senegal_p3_p20_p11: "احصل على رخصة بناء عبر الإنترنت خلال 40 يومًا",
      senegal_p3_p20_p12: "تقديم إقرار ضريبي ودفع عبر الإنترنت",
      senegal_p3_p20_p13:
        "إنشاء شركة ذات مسؤولية محدودة بدون متطلبات رأس المال",
      senegal_p3_p20_p14: "الاستفادة من خدمات المحاكم التجارية",
      senegal_p3_p20_p15:
        "تنفيذ جميع الإجراءات المتعلقة بحياة الأعمال التجارية عبر الإنترنت (الضرائب الإلكترونية ، Teledac ، إلخ)",
      senegal_p3_p20_p16: "حماية الاستثمار",
      senegal_p3_p20_p17:
        " السنغال هي أرض الفرص ، وبيئة الأعمال مواتية وتتحسن باستمرار. تنفذ حكومة السنغال برنامج إصلاح بيئة الأعمال والقدرة التنافسية (PREAC) منذ عام 2013. وقد تم إجراء العديد من الابتكارات ، مثل إلغاء رأس المال لإنشاء شركة ذات مسؤولية محدودة ، وإنشاء متاجر شاملة لإنشاء نشاط تجاري أو توصيل الكهرباء ، وإزالة الطابع المادي من الإجراءات الجمركية ، وتخفيض الضرائب على الشركات المستثمرة ، فضلاً عن الحوافز الضريبية المختلفة التي يسمح بها قانون الاستثمار ونظام مؤسسة التصدير الحرة. لقد أدى وضع مجموعة من 52 إجراءً إلى دفع السنغال إلى مكانة بين أفضل 10 مصلحين في العالم حسب تصنيف ممارسة أنشطة الأعمال الذي وضعه البنك الدولي وشركاؤه",
      senegal_p3_p20_p18:
        "وقعت السنغال عدة اتفاقيات لحماية وتشجيع الاستثمار (APPI) مع عشرات من البلدان الشريكة في جميع أنحاء العالم. وفي سياق العولمة ، تعمل هذه الاتفاقات على تحسين الأمن القانوني للاستثمارات. وهي تنص على إعادة رأس المال الاستثماري وعائدات الاستثمار إلى الوطن بحرية ، تضمن مصادرة الملكية وتوفر شرط الدولة الأولى بالرعاية (MFN) لمعاملة المستثمرين. كما تنص على تعويض الخسائر في حالة الحرب أو النزاع المسلح أو الشغب. تلتزم السنغال التزاما كاملا بتحسين مناخ أعمالها لتشجيع الاستثمار وتعزيز النمو الاقتصادي بقيادة القطاع الخاص. ",
      senegal_p3_p20_p19: "خطة السنغال الناشئة",
      senegal_p3_p20_p20: "خطة السنغال الناشئة",
      senegal_p3_p20_p21:
        " لتكون جزءًا من مسار الظهور نحو أفق عام 2035 ، اعتمدت السنغال منذ عام 2014 خطة السنغال الناشئة PSE التي تشكل مرجعية لسياستها الاقتصادية والاجتماعية. يعكس هذا النهج الإرادة السياسية لإطلاق ديناميكية التوسع الاقتصادي مع ضمان رفاهية السكان. ستساهم المرحلة الثانية في تحقيق رؤية سنغال ناشئة في عام 2035 بمجتمع موحد في ظل سيادة القانون",
      senegal_p3_p20_p22: "تنزيل",
      apix_p1_p2: "تعزيز الصورة الاقتصادية للسنغال وجاذبيتها كوجهة سياحية",
      apix_p1_p3: "المشاركة في الجهود الوطنية لتطوير البنى التحتية",
      apix_p1_p4: "تقديم الخدمات للمستثمرين.",
      apix_p1_p5: "إصلاح بيئة الأعمال.",
      apix_p1_p6: "المشاركة في بناء إدارة الغد.",
      apix_p1_p7: "دعم الدولة في عملية إضفاء الطابع الرسمي على مذكرات التفاهم",
      apix_p1_p8:
        "إنها إدارة فعالة للغاية يديرها ببراعة شخص ذو قيم عظيمة. الرئة الاقتصادية للسنغال.",
      apix_p1_p9: "مناطق اقتصادية خاصة للدياس",
      apix_p1_p18: "مسؤول ZES",
      apix_p1_p19:
        "المسؤول عن إدارة وتنظيم المناطق الاقتصادية الخاصة في السنغال",
      apix_p1_p20: "المروجون / المطورون",
      apix_p1_p21:
        "مسؤول عن الترويج والتطوير والتخطيط والتشغيل في المناطق الاقتصادية الخاصة.",
      apix_p1_p22: "شركات المناطق الاقتصادية الخاصة",
      apix_p1_p23:
        "وهي الكيانات الاقتصادية التي حصلت على موافقة صادرة عن مدير ZES ، لممارسة أي نشاط اقتصادي ، ولا سيما الصناعي.",
      apix_p1_p24: "نظام الحوافز المطبق في المناطق الاقتصادية الخاصة",
      apix_p1_p25:
        "يمكن للشركات بما في ذلك مروجو / مطورو ZES الاستفادة من حزمة الحوافز التي تمنحهم إعفاءات ضريبية وجمركية. ZES والمرسوم رقم 2017-1174 المتعلق بتنفيذ القانون رقم 2017-07 المؤرخ 6 يناير 2017 ، ستستفيد الشركات المعفاة بشكل خاص",
      apix_p1_p26:
        "حق الدخول معفى من جميع الرسوم والضرائب المفروضة في الطوق الجمركي ، باستثناء الرسوم المجتمعية على المواد الخام والمعدات والسلع الأخرى وكذلك حق التصدير المجاني خارج الإقليم الوطني لنفس البضائع.",
      apix_p1_p27: "الإعفاء من دفع أي ضريبة دخل.",
      apix_p1_p28: "معدل ضريبة بنسبة 15٪ على ضريبة الشركات.",
      apix_p1_p29: "إمكانية إبرام عقود محددة المدة على مدى خمس (5) سنوات.",
      apix_p1_p30:
        "إعفاء من المساهمة الثابتة التي يدفعها صاحب العمل أو أي ضريبة أخرى على أساس الأجور التي تدفعها الشركات وتتحملها",
      apix_p1_p31: "إعفاء من الحد الأدنى لضريبة الشركات ذات المعدل الثابت.",
      apix_p1_p32: "على مدى 25 سنة قابلة للتجديد",
      apix_p1_p33: "فرص الاستثمار في المناطق الاقتصادية الخاصة",
      apix_p1_p34: "المهن الرئيسية لـ ZES هي قطاعات النشاط التالية",
      apix_p1_p35: "الأعمال الزراعية",
      apix_p1_p36: "الصناعة",
      apix_p1_p37: "تكنولوجيا المعلومات والاتصالات",
      apix_p1_p38: "السياحة",
      apix_p1_p39: "توريد الخدمات الطبية",
      apix_p1_p40: "الخدمات",
      apix_p1_p41: "الخدمات التي يقدمها المسؤول في المناطق الاقتصادية الخاصة",
      apix_p1_p42:
        "يجب أن يضمن المسؤول لكل مروج / مطور توافر عوامل الإنتاج التقنية ، ولا سيما: اتصال الطرق والمياه والكهرباء والصرف الصحي وشبكات تكنولوجيا المعلومات. بالإضافة إلى ذلك ، سيضمن المسؤول إنشاء متجر / خدمة شاملة مركز على مستوى كل ZES من أجل ، على وجه الخصوص ، ",
      apix_p1_p43: "متجر شامل",
      apix_p1_p44: "تسجيل الشركات الاقتصادية الخاصة",
      apix_p1_p45: "تأسيس الإقرارات الخاصة بنشاط الشركات",
      apix_p1_p46:
        "إصدار الموافقات والشهادات والتأشيرات المختلفة المتعلقة بأنشطة الشركات",
      apix_p1_p47: "منطقة دياس الاقتصادية",
      apix_p1_p48:
        "مرسوم الإنشاء: المرسوم رقم 932 2017 المؤرخ في 09 مايو 2017 بشأن إنشاء المنطقة الاقتصادية الخاصة المتكاملة في دياس ؛ الموقع: 45 كيلومترًا من داكار (المجاورة لمطار داكار بليز ديان دي دياس) ؛ المنطقة (الموقع 1): 718 هكتار ؛ الاتصال : الوصول عن طريق الطريق السريع وبالطريق الوطني 1 (داكار - مبور). ",
      apix_p1_p49: "الأنشطة المؤهلة",
      apix_p1_p50: "الصناعة",
      apix_p1_p51: "الأعمال الزراعية",
      apix_p1_p52: "السياحة",
      apix_p1_p53: "أنشطة الموانئ",
      apix_p1_p54: "عروض الخدمات الطبية",
      apix_p1_p55: "معايير الأهلية المحددة",
      apix_p1_p56:
        "تخصيص 60٪ من حجم المبيعات للتصدير الحد الأدنى للاستثمار 100 مليون فرنك أفريقي 150 وظيفة مباشرة خلال السنة الأولى من التشغيل",
      apix_p1_p57: "شراكتنا",
      apix_p1_p58: "المجموعة",
      apix_p1_p59: "تم تفويض AFRICA PIPES INDUSTRIE رسميًا من قِبل",
      apix_p1_p6: "المشاركة في بناء إدارة الغد.",
      apix_p1_p60: "رئاسة جمهورية السنغال",
      apix_p1_p61: "وزارة الاقتصاد والمالية",
      apix_p1_p62:
        "لتعزيز وتطوير 21 هكتارًا من المناطق الحرة في zes de diass مع جميع الصلاحيات الممنوحة لهذا الغرض في ZES.",
      apix_p1_p63:
        "مجموعة صناعات الأنابيب الأفريقية قادرة على منحك عقد إيجار وجميع الحقوق والمزايا المتعلقة بالمنطقة وهذا بسرعة كبيرة دون إضاعة الوقت.",
      pole_p1: "موقعنا",
      pole_p13: "مزايا استثنائية",
      pole_p14: "التواجد على القطب ماتيك يعني القدرة على المطالبة",
      pole_p15: "له العديد من المزايا",
      pole_p16: "الضرائب",
      pole_p17: "إعفاء ضريبي لمدة 10 سنوات",
      pole_p18: "إعفاء من ضريبة القيمة المضافة",
      pole_p19: "اجتماعي",
      pole_p20: "الإعفاء من الرسوم الاجتماعية",
      pole_p21: "الإعفاء من رسوم صاحب العمل",
      pole_p22: "الجمارك",
      pole_p23:
        "لا توجد ضرائب جمركية على مدخلات المشروع (المباني ، المركبات ، الآلات ، إلخ).",
      pole_p24: "لا توجد رسوم جمركية على المواد الخام",
      pole_p25: "تسهيل الأعمال",
      pole_p26: "مكتب الجمارك في الموقع",
      pole_p27: "سطح مكتب APIX في الموقع",
      pole_p28: "يقدم لك Pole Matech خدمات استثنائية",
      pole_p29: "الأمان",
      pole_p30: "فريق دائم من 40 شخصا يراقب 24/7 الموقع مجهز بكاميرا مراقبة",
      pole_p31: "الوصول إلى الموقع تحت السيطرة",
      pole_p32: "مراقبة البضائع",
      pole_p33: "نار",
      pole_p34: "فريق الحماية المدنية الدائم لمكافحة الحرائق",
      pole_p35: "شاحنات صهريجية وطفايات حريق ومسحوق في الموقع",
      pole_p36: "تنظيف",
      pole_p37: "فريق من المستجيبين في الموقع لتنظيف القمامة والطرق",
      pole_p38: "شاحنة تنظيف القمامة",
      pole_p39: "محرقة في الموقع",
      pole_p40: "مساحة خضراء",
      pole_p41: "بستانيون لصيانة المساحات الخضراء",
      pole_p42: "فندق وطعام",
      pole_p43: "فندق 4 نجوم به 30 غرفة بالموقع",
      pole_p44: "200 مقعد للخدمة الذاتية",
      contact_phone: "9669 155 78 221+",
      email: "الايميل",
    },
  },
};
const DETECTION_OPTIONS = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    debug: true,
    resources,
    detection: DETECTION_OPTIONS,
    fallbackLng: "en",
    // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
// const DETECTION_OPTIONS = {
//   order: ["localStorage", "navigator"],
//   caches: ["localStorage"],
// };
// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources,
//     detection: DETECTION_OPTIONS,
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false,
//     },
//   });

export default i18n;
