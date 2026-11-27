export type Project = {
  slug: string;
  title: string;
  category: string;
  domains: string[];
  summary: string;
  description?: string;
  highlights?: string[];
  stack: string[];
  link?: string;
  repo?: string;
  status?: string;
  thumbnail: string;
  gallery?: string[];
};

export const featuredProjects: Project[] = [
  {
    slug: 'idx-terminal',
    title: 'alphaIdx — IDX Quant Terminal',
    category: 'Quantitative Systems',
    domains: ['Fintech', 'AI', 'Data Visualization'],
    summary:
      'An institutional research terminal for the Indonesia Stock Exchange.',
    description:
      'A four-pillar research platform for IDX equities: fundamentals, broker flow (bandarmology), technicals, and sentiment. It brings quant scoring, portfolios built in whole IDX lots, an AI research assistant, and Telegram and WhatsApp alerts into one terminal.',
    highlights: [
      'Four screening engines with Top, Mid, and Low tiers, each with its own screener page and CSV export.',
      'A portfolio builder that sizes positions from Rp1 million to Rp10 billion, rounds to IDX lots, and applies mandate profiles.',
      'Role-based access control on PostgreSQL, quant insight from Gemini, PDF dossiers, Telegram and WhatsApp alerts, and an installable app.',
    ],
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind v4',
      'FastAPI',
      'PostgreSQL',
      'Prisma',
      'Gemini',
      'Docker',
    ],
    status: 'Private build',
    thumbnail: '/assets/idx-terminal/01-landing.jpg',
    gallery: [
      '/assets/idx-terminal/01-landing.jpg',
      '/assets/idx-terminal/02-top-gainers.jpg',
      '/assets/idx-terminal/03-screener-pattern.jpg',
      '/assets/idx-terminal/04-bandarmologi.jpg',
      '/assets/idx-terminal/05-stock-detail.jpg',
      '/assets/idx-terminal/06-stock-ai-insight.jpg',
      '/assets/idx-terminal/07-quant-scorecard.jpg',
      '/assets/idx-terminal/08-broker-flow.jpg',
      '/assets/idx-terminal/09-backtesting.jpg',
      '/assets/idx-terminal/10-sentiment-screener.jpg',
      '/assets/idx-terminal/11-playbook.jpg',
      '/assets/idx-terminal/12-watchlist-correlation.jpg',
      '/assets/idx-terminal/13-paper-trading.jpg',
      '/assets/idx-terminal/14-paper-trading-journal.jpg',
    ],
  },
  {
    slug: 'kg-smart-search',
    title: 'KG Smart Search',
    category: 'Data Platforms',
    domains: ['Data Engineering', 'Knowledge Graph', 'NLP'],
    summary:
      'Natural-language statistics search that lands on verified SQL, not guesses.',
    description:
      'A neuro-symbolic search layer over official statistics from BPS, Indonesia’s statistics agency. A three-layer knowledge graph maps Indonesian questions to verified SQL, a natural-language parser extracts entities, and an LLM writes a cited narrative answer. The analyst workspace adds maps, ECharts, dynamic tables, saved queries, and a dashboard builder.',
    highlights: [
      'A pipeline that turns a natural-language question into resolved entities, SQL, and a cited narrative.',
      'An analyst workspace with maps, ECharts, dynamic tables, saved queries, and a dashboard builder.',
      'The repository records 270 passing tests and 88 of 88 deterministic evaluations.',
    ],
    stack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Neo4j',
      'Redis',
      'sqlglot',
      'MapLibre',
      'Apache ECharts',
    ],
    status: 'Internal build',
    thumbnail: '/assets/kg-smart-search/01-hero.jpg',
    gallery: [
      '/assets/kg-smart-search/01-hero.jpg',
      '/assets/kg-smart-search/02-workspace.jpg',
      '/assets/kg-smart-search/03-synthesis.jpg',
      '/assets/kg-smart-search/04-saved-table.jpg',
      '/assets/kg-smart-search/05-chart-gallery.jpg',
      '/assets/kg-smart-search/06-map-3d.jpg',
      '/assets/kg-smart-search/07-map-3d-analysis.jpg',
      '/assets/kg-smart-search/08-dashboard-builder.jpg',
      '/assets/kg-smart-search/09-dashboard.jpg',
    ],
  },
  {
    slug: 'modelrouter',
    title: 'ModelRouter',
    category: 'AI Infrastructure',
    domains: ['AI Infrastructure', 'Developer Tools'],
    summary:
      'Reads each prompt’s complexity, then routes it to the right model in under 30 ms.',
    description:
      'A reverse proxy that scores prompt complexity with Liquid d1. It picks a model from a registry that tracks capability, tags, and cost. It offers OpenAI- and Anthropic-compatible endpoints, with streaming in both directions over SSE.',
    highlights: [
      'Scores complexity from 1.00 to 5.00 in a single forward pass.',
      'Serves /v1/chat/completions and /v1/messages, both with streaming.',
      'A registry of 16 models with routing policies, cost accounting, and a deterministic fallback.',
    ],
    stack: [
      'Hono',
      'TanStack Router',
      'React',
      'Vite',
      'TypeScript',
      'Zod',
      'Liquid d1',
      'Ollama',
      'SSE',
    ],
    repo: 'https://github.com/fikrianggara/modelrouter',
    status: 'Open source',
    thumbnail: '/assets/modelrouter/01-overview.jpg',
    gallery: [
      '/assets/modelrouter/01-overview.jpg',
      '/assets/modelrouter/02-pipeline.jpg',
      '/assets/modelrouter/03-playground.jpg',
      '/assets/modelrouter/04-decision-flow.jpg',
      '/assets/modelrouter/05-registry.jpg',
    ],
  },
  {
    slug: 'design-system',
    title: 'Design System Studio',
    category: 'Developer Tools',
    domains: ['Design Systems', 'Tooling'],
    summary:
      'A visual studio that turns design systems into code, schemas, and AI prompts.',
    description:
      'A canvas editor for assembling primitives, tokens, and components. It compiles them into HTML, CSS, and JavaScript, plus JSON Schema and Markdown that AI tools can read. Tokens follow the Design Tokens Community Group format, and each preview runs isolated in a Shadow DOM.',
    highlights: [
      'Canvas editor with an inspector for layout, typography, tokens, and inheritance.',
      'Compiles to HTML and CSS, JSON Schema, and Markdown written for AI tools.',
      'A theme studio, presets, and local projects saved in IndexedDB.',
    ],
    stack: [
      'React 19',
      'Vite',
      'TypeScript',
      'TanStack Router',
      'TanStack Query',
      'Zustand',
      'Dexie',
      'Zod',
      'Tailwind v4',
    ],
    repo: 'https://github.com/fikrianggara/design-system',
    status: 'Open source',
    thumbnail: '/assets/design-system/01-canvas.jpg',
    gallery: [
      '/assets/design-system/01-canvas.jpg',
      '/assets/design-system/02-theme-studio.jpg',
    ],
  },
  {
    slug: 'ascii-studio',
    title: 'ASCII Studio',
    category: 'Creative Tools',
    domains: ['Creative Tools', 'Image Processing'],
    summary:
      'Turns any image into editable ASCII art, live in the browser.',
    description:
      'A browser-native studio that converts an image into ASCII. Upload a photo, adjust grid density, cell aspect, tone, and edge depth, and watch the output update live. Everything runs locally in a Web Worker, and the result exports as text or a rendered PNG.',
    highlights: [
      'Live preview with grid columns, cell aspect, auto-level, brightness, contrast, gamma, edge depth, and sharpness controls.',
      'Image processing runs in a Web Worker, keeping the interface responsive without uploading the source file.',
      'Exports copyable text, .txt, and a PNG rendering of the ASCII output.',
    ],
    stack: ['React', 'Vite', 'Canvas API', 'Web Worker'],
    link: 'https://ascii-studio.fikrianggara.com',
    status: 'Live tool',
    thumbnail: '/assets/ascii-studio/01-studio.png',
    gallery: ['/assets/ascii-studio/01-studio.png'],
  },
];

export const archiveProjects: Project[] = [
  {
    slug: 'pennywise',
    title: 'PennyWise — Expense Tracker',
    category: 'Web Development',
    domains: ['Web Development'],
    summary:
      'A personal expense tracker for daily spending, budgets, and monthly summaries.',
    stack: ['Next.js', 'Shadcn UI', 'TailwindCSS', 'TypeScript'],
    thumbnail: '/assets/pennywise.png',
    link: 'https://pennywise.fikrianggara.dev',
  },
  {
    slug: 'cuecard-jambi',
    title: 'Cuecard Statistik Jambi',
    category: 'Web Development',
    domains: ['Web Development', 'Statistics'],
    summary:
      'A digital cue card of official BPS Jambi figures for quick reference in the field.',
    stack: ['Next.js', 'TailwindCSS', 'TypeScript', 'Supabase'],
    thumbnail: '/assets/cuecard.png',
    link: 'https://1500-statistic-indicator.vercel.app/',
  },
  {
    slug: 'siitung-v2',
    title: 'SIITUNG V2',
    category: 'Web Development',
    domains: ['Web Development', 'Data Visualization'],
    summary:
      'A statistics information system for Kuala Tungkal, from publication to data display.',
    stack: ['Next.js', 'TailwindCSS', 'TypeScript'],
    thumbnail: '/assets/siitung.png',
    link: 'https://siitung-bps1507.vercel.app/',
  },
  {
    slug: 'konreg-pdrb-2024',
    title: 'Konreg PDRB Sumatera 2024',
    category: 'Web Development',
    domains: ['Web Development'],
    summary:
      'Event site and data presentation for the 2024 Sumatra regional PDRB coordination meeting.',
    stack: ['Next.js', 'TailwindCSS', 'TypeScript'],
    thumbnail: '/assets/konreg.png',
    link: 'https://konreg2024.bpsjambi.id',
  },
  {
    slug: 'stock-fundamental',
    title: 'Stock Fundamental Clustering',
    category: 'Machine Learning',
    domains: ['Data Science', 'Machine Learning'],
    summary:
      'Groups stocks by fundamental indicators using K-Means, DBSCAN, and Gaussian Mixture Models.',
    stack: ['Python'],
    thumbnail: '/assets/stock-analysis.png',
    repo: 'https://github.com/fikrianggara/applied-ML-dicoding/blob/main/submission1/README.md',
  },
  {
    slug: 'transjakarta-forecast',
    title: 'Transjakarta Passenger Forecasting',
    category: 'Data Science',
    domains: ['Data Science', 'Forecasting'],
    summary:
      'A SARIMAX forecast of Transjakarta passenger volume, built for a 2024 data competition.',
    stack: ['Python'],
    thumbnail: '/assets/transjakarta-passenger-forecasting.png',
    repo: 'https://github.com/fikrianggara/indathon-round1-2024/blob/main/main.ipynb',
  },
  {
    slug: 'microservice',
    title: 'Microservice Implementation',
    category: 'Distributed Systems',
    domains: ['Distributed Systems'],
    summary:
      'A reference microservice deployment with Docker, Kubernetes, and an Istio service mesh.',
    stack: ['Docker', 'Kubernetes', 'Istio'],
    thumbnail: '/assets/microservice.png',
    repo: 'https://github.com/fikrianggara/microservice',
  },
  {
    slug: 'airbnb-clone',
    title: 'Airbnb Clone',
    category: 'Mobile Development',
    domains: ['Mobile Development'],
    summary: 'A Flutter clone of the Airbnb browsing and booking flow.',
    stack: ['Flutter'],
    thumbnail: '/assets/airbnb.png',
    repo: 'https://github.com/fikrianggara/flutter-airbnb-clone',
  },
  {
    slug: 'simosi',
    title: 'SIMOSI — Survey Monitoring',
    category: 'Web Development',
    domains: ['Web Development'],
    summary:
      'A survey monitoring system that tracks field data collection progress across assignments.',
    stack: ['Next.js', 'TailwindCSS', 'TypeScript', 'Supabase'],
    thumbnail: '/assets/simosi.png',
    link: 'https://simosi.vercel.app/',
  },
  {
    slug: 'ml-r',
    title: 'Machine Learning with R',
    category: 'Machine Learning',
    domains: ['Data Science', 'Machine Learning'],
    summary: 'Machine learning algorithms written in R.',
    stack: ['R'],
    thumbnail: '/assets/ml-r.png',
    repo: 'https://github.com/fikrianggara/machine-learning-algorithm-with-R',
  },
  {
    slug: 'multivariate-r',
    title: 'Multivariate Analysis using R',
    category: 'Statistics',
    domains: ['Data Analysis', 'Statistics'],
    summary: 'Notebooks for applied multivariate statistical analysis in R.',
    stack: ['R'],
    thumbnail: '/assets/multivariate-r.png',
    repo: 'https://github.com/fikrianggara/Multivariate-Analysis-on-R',
  },
  {
    slug: 'ml-python',
    title: 'Machine Learning with Python',
    category: 'Machine Learning',
    domains: ['Data Science', 'Machine Learning'],
    summary: 'Machine learning algorithms and exercises in Python.',
    stack: ['Python'],
    thumbnail: '/assets/ml-python.png',
    repo: 'https://github.com/fikrianggara/Machine-learning-with-Python',
  },
  {
    slug: 'expenditure-wizard',
    title: 'Expenditure Wizard',
    category: 'Web Development',
    domains: ['Web Development'],
    summary: 'A guided wizard for recording and categorizing expenses.',
    stack: ['Next.js', 'TailwindCSS', 'TypeScript'],
    thumbnail: '/assets/expenditure-wizard.png',
    link: 'https://expenditure-wizard.vercel.app/',
  },
  {
    slug: 'susenas-seruti',
    title: 'Susenas Seruti Data Checker',
    category: 'Data Processing',
    domains: ['Web Development', 'Data Processing'],
    summary: 'A data checking platform for the Susenas and Seruti surveys.',
    stack: ['Python', 'Streamlit'],
    thumbnail: '/assets/susenas-seruti.png',
    status: 'Internal build',
  },
  {
    slug: 'export-sumsel',
    title: 'South Sumatra Export Dashboard',
    category: 'Data Visualization',
    domains: ['Web Development', 'Data Visualization'],
    summary: 'An R Shiny dashboard visualizing South Sumatra export data.',
    stack: ['R Shiny'],
    thumbnail: '/assets/export-sumsel.png',
    link: 'https://fikrianggara26.shinyapps.io/Export-Sumatera_Selatan-2020-Fikri_septrian_anggara-221810306/',
  },
  {
    slug: 'pia',
    title: 'PIA — Peduli Ibu dan Anak',
    category: 'Progressive Web App',
    domains: ['Progressive Web App', 'Web Development'],
    summary: 'A progressive web app for mother and child health information.',
    stack: ['React', 'TailwindCSS'],
    thumbnail: '/assets/pia.png',
    link: 'https://peduli-ibu-anak.netlify.app/ibu-anak',
  },
];

export const projects: Project[] = [...featuredProjects, ...archiveProjects];
