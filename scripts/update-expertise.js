const fs = require('fs');

// ─── FRENCH ──────────────────────────────────────────────────────────────────
const fr = JSON.parse(fs.readFileSync('D:/CDA/Portfolio/src/assets/i18n/fr.json', 'utf8'));

fr['Expertise.Items'] = [
  {
    Icon: '💻',
    Title: 'Développement web moderne et sécurisé',
    Description: 'Les outils BackLab sont construits avec les meilleures technologies pour vous proposer le meilleur en terme de conception d\'architectures logicielles sécurisées. Pas de bricolage.',
    Certs: [
      {
        Name: 'Titre RNCP — Conceptrice Développeuse d\'Applications',
        Note: 'Niveau 6 · Bac+4 · Architecture logicielle, conception produit, full-stack'
      },
      {
        Name: 'Certification OPQUAST',
        Note: 'Bonnes pratiques web & mise en conformité des prestations'
      }
    ],
    Stack: ['Angular', 'React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Python', 'APIs REST']
  },
  {
    Icon: '🎨',
    Title: 'Design pensé pour les humains',
    Description: 'Chaque interface est conçue pour être comprise sans formation. Design accessible, contrastes corrects, navigation claire — même sur mobile.',
    Certs: [
      {
        Name: 'Webdesign Sensoriel & Stratégies de Créations en Ligne',
        Note: 'Titre professionnel · Création de sites web modernes & designés'
      }
    ],
    Stack: ['WCAG', 'Mobile-first', 'Accessibilité', 'UX/UI']
  },
  {
    Icon: '⚙️',
    Title: 'Automatisation & outils métier',
    Description: 'Des automatisations pragmatiques qui réduisent les tâches répétitives. Pas de solutions sur-dimensionnées ou d\'intégration IA sur-caféinée — juste ce qui marche pour votre activité.',
    Stack: ['Zapier', 'n8n', 'APIs sur mesure']
  },
  {
    Icon: '✍️',
    Title: 'Communication et Rédaction de qualité',
    Description: 'Une communication claire et efficace, c\'est aussi une compétence technique. Je rédige des contenus web pensés pour convertir, convaincre et rassurer — avec les mots justes pour votre audience.',
    Certs: [
      {
        Name: 'Sciences du Langage, de l\'Information et de la Communication',
        Note: 'Université de Limoges · Communication digitale & stratégies marketing'
      }
    ],
    Stack: ['Copywriting', 'SEO éditorial', 'UX writing', 'Stratégie de contenu']
  }
];

fs.writeFileSync('D:/CDA/Portfolio/src/assets/i18n/fr.json', JSON.stringify(fr, null, 2), 'utf8');
console.log('fr.json Expertise.Items updated');

// ─── ENGLISH ──────────────────────────────────────────────────────────────────
const en = JSON.parse(fs.readFileSync('D:/CDA/Portfolio/src/assets/i18n/en.json', 'utf8'));

en['Expertise.Items'] = [
  {
    Icon: '💻',
    Title: 'Modern & Secure Web Development',
    Description: 'BackLab tools are built with the technologies powering the best SaaS products on the market. No patchwork solutions.',
    Certs: [
      {
        Name: 'RNCP Title — Application Designer & Developer',
        Note: 'Level 6 · Bac+4 · Software architecture, product design, full-stack'
      },
      {
        Name: 'OPQUAST Certification',
        Note: 'Web best practices & quality compliance'
      }
    ],
    Stack: ['Angular', 'React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Python', 'REST APIs']
  },
  {
    Icon: '🎨',
    Title: 'UX Designed for Humans',
    Description: 'Every interface is designed to be understood without training. Accessible design, correct contrast, clear navigation — even on mobile.',
    Certs: [
      {
        Name: 'Sensory Web Design & Online Creation Strategies',
        Note: 'Professional title · Modern web design & UX'
      }
    ],
    Stack: ['WCAG', 'Mobile-first', 'Accessibility', 'UX/UI']
  },
  {
    Icon: '⚙️',
    Title: 'Automation & Business Tools',
    Description: 'Pragmatic workflows that reduce repetitive tasks. No over-engineered solutions — just what works for your business.',
    Stack: ['Zapier', 'n8n', 'Custom APIs']
  },
  {
    Icon: '✍️',
    Title: 'Quality Communication & Copywriting',
    Description: 'Clear, effective communication is also a technical skill. I write web content designed to convert, convince and reassure — with the right words for your audience.',
    Certs: [
      {
        Name: 'Language, Information & Communication Sciences',
        Note: 'University of Limoges · Digital communication & marketing strategies'
      }
    ],
    Stack: ['Copywriting', 'SEO writing', 'UX writing', 'Content strategy']
  }
];

fs.writeFileSync('D:/CDA/Portfolio/src/assets/i18n/en.json', JSON.stringify(en, null, 2), 'utf8');
console.log('en.json Expertise.Items updated');
