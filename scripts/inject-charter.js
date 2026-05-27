const fs = require('fs');

// ─── FRENCH ──────────────────────────────────────────────────────────────────
const fr = JSON.parse(fs.readFileSync('D:/CDA/Portfolio/src/assets/i18n/fr.json', 'utf8'));

fr['Charter.VisionLinkLabel'] = 'Lire notre charte produit & marque complète →';
fr['Charter.BackLink']        = '← Retour';
fr['Charter.Title']           = 'Charte BackLab';
fr['Charter.Subtitle']        = 'Product & Brand Charter v2.0';
fr['Charter.Intro']           = 'Ce document définit les fondements, la philosophie produit et les engagements de BackLab. Il s’applique à tous nos produits, nos communications et notre façon de travailler.';

fr['Charter.Sections'] = [
  {
    Num: 'I', Title: 'Fondation',
    Articles: [
      { Id: '1.1', Title: 'Mission', P: [
        'BackLab existe pour rendre les outils numériques professionnels réellement accessibles aux petites structures.',
        'Trop d’indépendants, d’artisans, de commerces et de petites équipes doivent aujourd’hui choisir entre des logiciels hors de prix, des plateformes pensées pour de grosses équipes, des interfaces intimidantes ou des outils qui demandent presque une formation.',
        'Nous refusons cette norme. BackLab construit des outils simples, explicites, utiles immédiatement, financièrement accessibles et conçus pour des humains réels.',
        'Nous ne construisons pas des logiciels pour des « power users ». Nous construisons des logiciels pour des gens qui ont un métier à faire.'
      ]},
      { Id: '1.2', Title: 'Vision', P: [
        'Nous croyons qu’un bon logiciel doit simplifier le quotidien. Pas l’alourdir.',
        'Le numérique ne devrait pas être réservé aux profils techniques ou aux entreprises structurées. Les petites structures méritent des outils aussi bons que les grandes entreprises — mais conçus pour leur réalité.',
        'Notre vision : créer un écosystème de logiciels sobres, humains et accessibles qui aident les petites structures à mieux travailler, gagner du temps, récupérer du chiffre d’affaires et avancer sereinement.'
      ]},
      { Id: '1.3', Title: 'Positionnement', P: [
        'BackLab est une software company founder-led, un studio produit, une marque d’outils business accessibles, une approche calm software et une alternative aux SaaS intimidants.',
        'BackLab n’est pas un ERP, une usine à gaz, un logiciel enterprise, une suite all-in-one surchargée, ni un outil pensé pour les geeks du SaaS.'
      ]},
      { Id: '1.4', Title: 'Différenciation', P: [
        'Notre vraie différence : concevoir des logiciels pour des utilisateurs peu à l’aise avec le numérique.',
        'Nous concevons pour les artisans, commerçants, restaurateurs, gérants, indépendants et professionnels terrain — pas pour les product managers ou les administrateurs systèmes.',
        'Le concurrent de BackLab n’est pas seulement un SaaS concurrent. C’est aussi : un carnet papier, WhatsApp, un Excel bricolé, « je vais m’en souvenir ».'
      ]}
    ]
  },
  {
    Num: 'II', Title: 'Audience',
    Articles: [
      { Id: '2.1', Title: 'Qui nous servons', P: [
        'BackLab s’adresse principalement aux artisans, freelances, micro-entrepreneurs, petites entreprises, commerces de proximité, bars, restaurants, salons, garages, cabinets indépendants et petites équipes.'
      ]},
      { Id: '2.2', Title: 'Réalité utilisateur', P: [
        'Nos utilisateurs n’ont pas envie de devenir experts logiciels. Ils ont peu de temps, ont souvent peu de budget, travaillent dans le monde réel et ont d’autres urgences que configurer un dashboard.',
        'Ils veulent quelque chose qui fonctionne, simplement.'
      ]},
      { Id: '2.3', Title: 'Persona BackLab', P: [
        'Le persona type BackLab est compétent dans son métier, pas forcément à l’aise avec l’informatique, peut ressentir de l’anxiété face aux outils complexes, travaille souvent sur mobile, déteste perdre du temps et veut une valeur claire immédiatement.',
        'Question systématique : cette personne comprend-elle ce produit sans aide ?'
      ]}
    ]
  },
  {
    Num: 'III', Title: 'ADN Produit',
    Articles: [
      { Id: '3.1', Title: 'Calm Software', P: [
        'BackLab construit du software calme. Un produit BackLab doit réduire l’anxiété, rassurer, guider, donner une impression de contrôle et être compréhensible rapidement.',
        'Un produit BackLab ne doit jamais sembler agressif, confus ou intimidant.'
      ]},
      { Id: '3.2', Title: 'Anti-bloat SaaS', P: [
        'Nous rejetons la logique « plus de fonctionnalités = meilleur produit ».',
        'Notre philosophie : moins, mais mieux. Chaque fonctionnalité doit justifier son existence.'
      ]},
      { Id: '3.3', Title: 'La règle du 10 / 90', P: [
        'Nous construisons les 10 % de fonctionnalités qui créent 90 % de la valeur.',
        'Si une fonctionnalité ajoute de la complexité sans ROI évident, elle doit être supprimée.'
      ]},
      { Id: '3.4', Title: 'ROI-first', P: [
        'Chaque fonctionnalité doit répondre à au moins un objectif : gagner du temps, réduire du stress, récupérer du chiffre d’affaires, éviter des erreurs, simplifier un workflow ou fluidifier une tâche métier.',
        'Sinon, elle n’appartient pas au produit.'
      ]},
      { Id: '3.5', Title: 'Human Software', P: [
        'BackLab ne construit pas des interfaces machine-first. Nous construisons des expériences humaines.',
        'Le produit doit sembler accueillant, logique, explicite et humain. Jamais froid. Jamais bureaucratique.'
      ]}
    ]
  },
  {
    Num: 'IV', Title: 'Principes UX',
    Articles: [
      { Id: '4.1', Title: 'Clarté radicale', P: [
        'Chaque écran doit répondre immédiatement : Où suis-je ? Que puis-je faire ? Que dois-je faire maintenant ?',
        'Si ce n’est pas évident, le design est mauvais.'
      ]},
      { Id: '4.2', Title: 'Interfaces explicites', P: [
        'Nous ne supposons jamais la culture logicielle de l’utilisateur.',
        '« Pipeline » devient « Clients à relancer ». « Configure webhook » devient « Connecter un autre outil ».'
      ]},
      { Id: '4.3', Title: 'UX guidée', P: [
        'Un produit BackLab accompagne. Il ne laisse jamais l’utilisateur seul face à une interface vide.',
        'Onboarding guidé, assistants de configuration, textes d’aide, placeholders pédagogiques, next best action et exemples sont attendus.'
      ]},
      { Id: '4.4', Title: 'Visual-first UX', P: [
        'Nos utilisateurs comprennent mieux visuellement. Nous privilégions cartes, badges, couleurs explicites, pictogrammes, timelines et progress bars.',
        'Nous évitons murs de texte, tableaux anxi ogènes et interfaces trop denses.'
      ]},
      { Id: '4.5', Title: 'Faible charge cognitive', P: [
        'Chaque écran doit réduire l’effort mental. On évite trop d’actions, trop d’options, dashboards surchargés, formulaires interminables et ambiguïté.'
      ]}
    ]
  },
  {
    Num: 'V', Title: 'Accessibilité',
    Articles: [
      { Id: '5.1', Title: 'Accessibilité visuelle', P: ['Contrastes solides, typographie lisible, spacing confortable, grandes zones cliquables, hiérarchie claire.'] },
      { Id: '5.2', Title: 'Accessibilité cognitive', P: ['BackLab prend au sérieux l’accessibilité cognitive : concepts simples, wording clair, prévisibilité, peu d’ambiguïté, messages rassurants.'] },
      { Id: '5.3', Title: 'Accessibilité technique', P: ['Navigation clavier, focus visibles, aria labels, HTML sémantique, formulaires accessibles, labels explicites.'] },
      { Id: '5.4', Title: 'Mobile-first terrain', P: [
        'Nos utilisateurs travaillent en déplacement, entre deux rendez-vous, derrière un comptoir, entre deux clients.',
        'Le produit doit être réellement utilisable sur mobile — pas juste « responsive ».'
      ]}
    ]
  },
  {
    Num: 'VI', Title: 'Politique linguistique',
    Articles: [
      { Id: '6', Title: 'Bannir le jargon inutile', P: [
        'BackLab bannit le jargon inutile : webhook, endpoint, pipeline, lifecycle, trigger, analytics suite, sync, config engine — sauf si la cible est explicitement technique.',
        'Le ton doit être humain, rassurant, clair, direct et calme. Jamais corporate, flou ou bullshit.'
      ]}
    ]
  },
  {
    Num: 'VII', Title: 'Philosophie des erreurs',
    Articles: [
      { Id: '7', Title: 'Les erreurs ne doivent pas punir', P: [
        'Un produit BackLab doit être tolérant : confirmations destructives, messages humains, safe defaults, validation claire, undo quand pertinent.',
        'Mauvais : « 500 internal server error ». Bon : « Impossible d’envoyer votre message pour le moment. »'
      ]}
    ]
  },
  {
    Num: 'VIII', Title: 'Engagement local & responsable',
    Articles: [
      { Id: '8.1', Title: 'Ancrage local', P: [
        'BackLab est une entreprise indépendante née à Limoges. Cet ancrage compte.',
        'Nous connaissons les réalités des petites structures françaises — artisans, commerces, indépendants, économie locale.',
        'Nous construisons pour le terrain. Pas pour des cas théoriques enterprise.'
      ]},
      { Id: '8.2', Title: 'Sobrieté numérique', P: [
        'BackLab croit en un numérique plus sobre — pas comme argument marketing creux, mais comme philosophie produit.',
        'Nous rejetons la surcharge, les dashboards inutiles, les fonctionnalités décoratives et la complexité artificielle.',
        'Moins de bruit. Moins de friction. Plus d’utilité.'
      ]},
      { Id: '8.3', Title: 'Europe-friendly mindset', P: [
        'BackLab privilégie, quand cela est réaliste : conformité RGPD, minimisation des données, architecture privacy-conscious, infrastructure compatible standards européens.',
        'Pas de greenwashing. Pas de compliance theatre.'
      ]}
    ]
  },
  {
    Num: 'IX', Title: 'Design System',
    Articles: [
      { Id: '9', Title: 'Cohérence inter-produits', P: [
        'Tous les produits BackLab partagent un ADN commun : navigation cohérente, layouts similaires, CTA cohérents, badges communs, interaction patterns identiques, empty states cohérents.',
        'Couleurs produits : BackBoost → vert · BackCall → orange · BackReview → violet · BackFill → cyan · BackBar → ambre · BackLab core → bleu signature.',
        'Objectif : créer familiarité et confiance. Un utilisateur doit penser : « Je sais déjà comment ça fonctionne. »'
      ]}
    ]
  },
  {
    Num: 'X', Title: 'Gouvernance produit',
    Articles: [
      { Id: '10', Title: 'Questions avant toute feature', P: [
        'Avant toute fonctionnalité : réduit-elle le stress ? fait-elle gagner du temps ? fait-elle gagner de l’argent ? simplifie-t-elle une tâche ? reste-t-elle compréhensible sans documentation ?',
        'Si NON : supprimer. Question ultime : cette fonctionnalité mérite-t-elle le nom BackLab ?'
      ]}
    ]
  },
  {
    Num: 'XI', Title: 'Standards engineering',
    Articles: [
      { Id: '11', Title: 'Ce qu’on attend', P: [
        'Modularité, maintenabilité, accessibilité by default, architecture claire, cohérence inter-produits, sécurité raisonnable, simplicité structurelle.',
        'Pas de spaghetti architecture.'
      ]}
    ]
  },
  {
    Num: 'XII', Title: 'Éthique produit',
    Articles: [
      { Id: '12', Title: 'Ce que BackLab refuse', P: [
        'BackLab refuse : dark patterns, fausse urgence, pricing opaque, lock-in abusif, UX manipulatrice, notifications toxiques.',
        'Nous préférons : honnêteté, transparence, simplicité, respect utilisateur.'
      ]}
    ]
  },
  {
    Num: 'XIII', Title: 'Manifeste', isManifesto: true,
    Articles: [
      { Id: '', Title: '', P: [
        'Nous ne construisons pas des cathédrales logicielles.',
        'Nous construisons des outils qui aident.',
        'Clairs. Humains. Utiles. Sobres.',
        'Pas d’usines à gaz. Pas de jargon. Pas de complexité pour impressionner.',
        'Juste des logiciels qui respectent les gens qui les utilisent.',
        'BackLab construit les outils que nous aurions aimé voir exister.'
      ]}
    ]
  }
];

fs.writeFileSync('D:/CDA/Portfolio/src/assets/i18n/fr.json', JSON.stringify(fr, null, 2), 'utf8');
console.log('fr.json OK');

// ─── ENGLISH ──────────────────────────────────────────────────────────────────
const en = JSON.parse(fs.readFileSync('D:/CDA/Portfolio/src/assets/i18n/en.json', 'utf8'));

en['Charter.VisionLinkLabel'] = 'Read our full product & brand charter →';
en['Charter.BackLink']        = '← Back to home';
en['Charter.Title']           = 'BackLab Charter';
en['Charter.Subtitle']        = 'Product & Brand Charter v2.0';
en['Charter.Intro']           = 'This document defines the foundations, product philosophy and commitments of BackLab. It applies to all our products, communications and ways of working.';

en['Charter.Sections'] = [
  {
    Num: 'I', Title: 'Foundation',
    Articles: [
      { Id: '1.1', Title: 'Mission', P: [
        'BackLab exists to make professional digital tools genuinely accessible to small businesses.',
        'Too many independent professionals, artisans, local shops and small teams are forced to choose between overpriced software, platforms built for much larger organizations, intimidating interfaces or tools that require a learning curve just to get started.',
        'We reject that standard. BackLab builds software that is simple, explicit, immediately useful, financially accessible and designed for real humans.',
        'We do not build software for SaaS power users. We build software for people who have actual work to do.'
      ]},
      { Id: '1.2', Title: 'Vision', P: [
        'We believe software should simplify work. Not make it heavier.',
        'Digital tools should not be reserved for technical users or highly structured organizations. Small businesses deserve software that is just as good as enterprise tools — but built for their reality.',
        'Our vision: to create an ecosystem of calm, human and accessible business software that helps small businesses work better, save time, recover revenue and operate with less stress.'
      ]},
      { Id: '1.3', Title: 'Positioning', P: [
        'BackLab is a founder-led software company, a product studio, an accessible business software brand, a calm software philosophy and an alternative to intimidating SaaS tools.',
        'BackLab is NOT enterprise software, bloated all-in-one platforms, ERP systems, admin-heavy software or products built for software geeks.'
      ]},
      { Id: '1.4', Title: 'Differentiation', P: [
        'Our true difference: designing software for users with low digital confidence.',
        'We design for artisans, local business owners, restaurant operators, freelancers, independent professionals and real-world business operators — not for product managers or sysadmins.',
        'BackLab’s competitors are not only SaaS vendors. The competition is also: paper notebooks, WhatsApp, messy spreadsheets, memory, “I’ll do it later.”'
      ]}
    ]
  },
  {
    Num: 'II', Title: 'Audience',
    Articles: [
      { Id: '2.1', Title: 'Who We Serve', P: [
        'BackLab primarily serves artisans, freelancers, solo founders, micro-businesses, small businesses, local shops, bars, restaurants, salons, garages, independent consultants and small teams.'
      ]},
      { Id: '2.2', Title: 'User Reality', P: [
        'Our users do not want to become software experts. They have limited time, often have limited budgets, work in the real world and have more urgent priorities than configuring dashboards.',
        'They want something that simply works.'
      ]},
      { Id: '2.3', Title: 'BackLab Persona', P: [
        'The typical BackLab user is competent in their profession, may not be digitally confident, may feel anxiety around complex software, often works from mobile, hates wasting time and wants immediate value.',
        'Core question: can this person understand the product without help?'
      ]}
    ]
  },
  {
    Num: 'III', Title: 'Product DNA',
    Articles: [
      { Id: '3.1', Title: 'Calm Software', P: [
        'BackLab builds calm software. A BackLab product must reduce anxiety, reassure users, guide clearly, create confidence and feel understandable immediately.',
        'A BackLab product must never feel aggressive, confusing or intimidating.'
      ]},
      { Id: '3.2', Title: 'Anti-Bloat SaaS', P: [
        'We reject the idea that “more features = better product.”',
        'Our philosophy: less, but better. Every feature must justify its existence.'
      ]},
      { Id: '3.3', Title: 'The 10/90 Rule', P: [
        'We build the 10% of features that create 90% of the value.',
        'If a feature increases complexity without obvious ROI, remove it.'
      ]},
      { Id: '3.4', Title: 'ROI-First', P: [
        'Every feature must do at least one of the following: save time, reduce stress, recover revenue, prevent mistakes, simplify workflows or reduce operational friction.',
        'Otherwise, it does not belong.'
      ]},
      { Id: '3.5', Title: 'Human Software', P: [
        'BackLab does not build machine-first interfaces. We build human-first experiences.',
        'Products should feel welcoming, logical, explicit and human. Never cold. Never bureaucratic.'
      ]}
    ]
  },
  {
    Num: 'IV', Title: 'UX Principles',
    Articles: [
      { Id: '4.1', Title: 'Radical Clarity', P: [
        'Every screen must immediately answer: Where am I? What can I do? What should I do next?',
        'If not, the design failed.'
      ]},
      { Id: '4.2', Title: 'Explicit Interfaces', P: [
        'We never assume software literacy.',
        '“Pipeline” becomes “Clients to follow up.” “Configure webhook” becomes “Connect another tool.”'
      ]},
      { Id: '4.3', Title: 'Guided UX', P: [
        'BackLab products guide users. They never abandon users in front of empty or confusing interfaces.',
        'Expected: onboarding flows, setup wizards, helper text, educational placeholders, next best actions, practical examples.'
      ]},
      { Id: '4.4', Title: 'Visual-First UX', P: [
        'Our users understand visual systems faster. We prioritize cards, badges, clear colors, iconography, timelines and progress indicators.',
        'We avoid text walls, overwhelming tables and dense dashboards.'
      ]},
      { Id: '4.5', Title: 'Low Cognitive Load', P: [
        'Every interface must minimize mental effort. Avoid too many actions, too many choices, overloaded dashboards, endless forms and ambiguity.'
      ]}
    ]
  },
  {
    Num: 'V', Title: 'Accessibility',
    Articles: [
      { Id: '5.1', Title: 'Visual Accessibility', P: ['Strong contrast, readable typography, comfortable spacing, large tap targets, clear hierarchy.'] },
      { Id: '5.2', Title: 'Cognitive Accessibility', P: ['BackLab takes cognitive accessibility seriously: simple concepts, explicit wording, predictable navigation, low ambiguity, reassuring messages.'] },
      { Id: '5.3', Title: 'Technical Accessibility', P: ['Keyboard navigation, visible focus states, aria labels, semantic HTML, accessible forms, explicit labels.'] },
      { Id: '5.4', Title: 'Mobile-First Real World Usage', P: [
        'Our users work on the move, between appointments, behind counters, between customers.',
        'Products must be genuinely usable on mobile. Not merely “responsive.”'
      ]}
    ]
  },
  {
    Num: 'VI', Title: 'Language Policy',
    Articles: [
      { Id: '6', Title: 'Avoid Unnecessary Jargon', P: [
        'BackLab avoids unnecessary jargon: webhook, endpoint, pipeline, lifecycle, trigger, analytics suite, sync, config engine — unless explicitly targeting technical users.',
        'Tone must be human, reassuring, clear, direct and calm. Never corporate, vague or buzzword-heavy.'
      ]}
    ]
  },
  {
    Num: 'VII', Title: 'Error Philosophy',
    Articles: [
      { Id: '7', Title: 'Errors Should Not Punish', P: [
        'BackLab products must be forgiving: destructive confirmations, human error messages, safe defaults, clear validation, undo when relevant.',
        'Bad: “500 internal server error.” Good: “Unable to send your message right now.”'
      ]}
    ]
  },
  {
    Num: 'VIII', Title: 'Local & Responsible Commitment',
    Articles: [
      { Id: '8.1', Title: 'Local Roots', P: [
        'BackLab is an independent company born in Limoges, France. That matters.',
        'We understand the realities of artisans, local businesses, independent professionals and small real-world operators.',
        'We build for the real economy. Not hypothetical enterprise scenarios.'
      ]},
      { Id: '8.2', Title: 'Digital Sobriety', P: [
        'BackLab believes in more responsible software — not as empty marketing, but as product philosophy.',
        'We reject unnecessary complexity, overloaded dashboards, decorative features and artificial friction.',
        'Less noise. Less waste. More usefulness.'
      ]},
      { Id: '8.3', Title: 'Europe-Friendly Mindset', P: [
        'BackLab prioritizes, whenever realistic: GDPR-conscious design, data minimization, privacy-aware architecture, infrastructure compatible with European standards.',
        'No greenwashing. No compliance theatre.'
      ]}
    ]
  },
  {
    Num: 'IX', Title: 'Design System',
    Articles: [
      { Id: '9', Title: 'Cross-Product Consistency', P: [
        'All BackLab products share a common UX language: consistent navigation, familiar layouts, unified CTA logic, common forms, shared badges, identical interaction patterns, coherent empty states.',
        'Product accent colors: BackBoost → green · BackCall → orange · BackReview → purple · BackFill → cyan · BackBar → amber · BackLab core → signature blue.',
        'Goal: create familiarity and trust. Users should think: “I already know how this works.”'
      ]}
    ]
  },
  {
    Num: 'X', Title: 'Product Governance',
    Articles: [
      { Id: '10', Title: 'Questions Before Any Feature', P: [
        'Before shipping any feature: does it reduce stress? does it save time? does it recover money? does it simplify work? is it understandable without documentation?',
        'If NO: remove it. Ultimate question: does this feature deserve the BackLab name?'
      ]}
    ]
  },
  {
    Num: 'XI', Title: 'Engineering Standards',
    Articles: [
      { Id: '11', Title: 'What We Expect', P: [
        'Modularity, maintainability, accessibility by default, clean architecture, cross-product consistency, reasonable security, structural simplicity.',
        'No spaghetti architecture.'
      ]}
    ]
  },
  {
    Num: 'XII', Title: 'Ethical Product Principles',
    Articles: [
      { Id: '12', Title: 'What BackLab Rejects', P: [
        'BackLab rejects: dark patterns, fake urgency, opaque pricing, abusive lock-in, manipulative UX, toxic notification systems.',
        'We prefer: honesty, transparency, simplicity, user respect.'
      ]}
    ]
  },
  {
    Num: 'XIII', Title: 'Manifesto', isManifesto: true,
    Articles: [
      { Id: '', Title: '', P: [
        'We do not build software cathedrals.',
        'We build tools that help.',
        'Clear. Human. Useful. Focused.',
        'No software labyrinths. No jargon. No complexity designed to impress.',
        'Just software that respects the people using it.',
        'BackLab builds the tools we wish existed.'
      ]}
    ]
  }
];

fs.writeFileSync('D:/CDA/Portfolio/src/assets/i18n/en.json', JSON.stringify(en, null, 2), 'utf8');
console.log('en.json OK');
