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
      'A four-pillar screening and research platform for IDX equities: fundamental, bandarmology, technical, and sentiment. It combines quantitative scoring, foreign–domestic broker flow, lot-aware portfolio construction, an AI research assistant, and multi-channel alerts in one terminal.',
    highlights: [
      'Four screening engines with Top, Mid, and Low tiers, plus dedicated screener pages and CSV export.',
      'Capital-aware portfolio builder from Rp 1 million to Rp 10 billion, with IDX lot rounding and mandate profiles.',
      'RBAC on PostgreSQL, Gemini-powered quant insight, PDF dossiers, Telegram and WhatsApp alerts, and a PWA shell.',
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
      'A neuro-symbolic search layer over BPS statistics. A three-layer knowledge graph bridges Indonesian questions to verified SQL, we use a natural-language parser to extract entities, and a promptable LLM synthesizes a narrative answer with citations. The analyst workspace includes maps, ECharts, dynamic tables, saved queries, and a dashboard builder.',
    highlights: [
      'Pipeline from natural-language question to entity resolution, SQL, and a cited narrative.',
      'Analyst workspace with maps, ECharts, dynamic tables, saved queries, and a dashboard builder.',
      '270 green tests and 88/88 deterministic evaluations as recorded in the repository.',
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
      'Routes each prompt to the right model in under 30 ms, by reading its complexity.',
    description:
      'A reverse proxy that scores prompt complexity with Liquid d1, then selects a model from a capability, tag, and cost-aware registry. It exposes both OpenAI and Anthropic compatible endpoints, including bidirectional SSE streaming.',
    highlights: [
      'Continuous complexity score from 1.00 to 5.00 in a single forward pass.',
      'Dual protocol surface: /v1/chat/completions and /v1/messages with streaming.',
      'A 16-model registry with routing policies, cost accounting, and deterministic fallback.',
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
      'A visual studio that compiles design systems into code, schemas, and AI prompts.',
    description:
      'A canvas editor for assembling primitives, tokens, and components, then compiling them into HTML/CSS/JS, JSON Schema, and AI-promptable Markdown. Tokens follow the DTCG format, and component previews stay isolated inside Shadow DOM.',
    highlights: [
      'Canvas editor with an inspector for layout, typography, tokens, and inheritance.',
      'Multi-target compiler: CSS/HTML, JSON Schema, and Markdown written for AI consumption.',
      'Theme studio, presets, and an IndexedDB-backed local project store.',
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
      'A digital cue card of official BPS Jambi figures, built for quick field reference.',
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
      'Event site and data presentation for the 2024 Sumatera regional PDRB coordination meeting.',
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
    link: 'https://github.com/fikrianggara/applied-ML-dicoding/blob/main/submission1/README.md',
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
    link: 'https://github.com/fikrianggara/indathon-round1-2024/blob/main/main.ipynb',
  },
  {
    slug: 'microservice',
    title: 'Microservice Implementation',
    category: 'Distributed Systems',
    domains: ['Distributed System'],
    summary:
      'A reference microservice deployment with Docker, Kubernetes, and an Istio service mesh.',
    stack: ['Docker', 'Kubernetes', 'Istio'],
    thumbnail: '/assets/microservice.png',
    link: 'https://github.com/fikrianggara/microservice',
  },
  {
    slug: 'airbnb-clone',
    title: 'Airbnb Clone',
    category: 'Mobile Development',
    domains: ['Mobile Development'],
    summary: 'A Flutter clone of the Airbnb browsing and booking flow.',
    stack: ['Flutter'],
    thumbnail: '/assets/airbnb.png',
    link: 'https://github.com/fikrianggara/flutter-airbnb-clone',
  },
  {
    slug: 'simosi',
    title: 'SIMOSI — Survey Monitoring',
    category: 'Web Development',
    domains: ['Web Development'],
    summary:
      'A survey monitoring system for tracking field enumeration progress across assignments.',
    stack: ['Next.js', 'TailwindCSS', 'TypeScript', 'Supabase'],
    thumbnail: '/assets/simosi.png',
    link: 'https://simosi.vercel.app/',
  },
  {
    slug: 'ml-r',
    title: 'Machine Learning with R',
    category: 'Machine Learning',
    domains: ['Data Science', 'Machine Learning'],
    summary: 'A collection of machine learning algorithms implemented in R.',
    stack: ['R'],
    thumbnail: '/assets/ml-r.png',
    link: 'https://github.com/fikrianggara/machine-learning-algorithm-with-R',
  },
  {
    slug: 'multivariate-r',
    title: 'Multivariate Analysis using R',
    category: 'Statistics',
    domains: ['Data Analysis', 'Statistics'],
    summary: 'Applied multivariate statistical analysis notebooks in R.',
    stack: ['R'],
    thumbnail: '/assets/multivariate-r.png',
    link: 'https://github.com/fikrianggara/Multivariate-Analysis-on-R',
  },
  {
    slug: 'ml-python',
    title: 'Machine Learning with Python',
    category: 'Machine Learning',
    domains: ['Data Science', 'Machine Learning'],
    summary: 'Machine learning implementations and exercises in Python.',
    stack: ['Python'],
    thumbnail: '/assets/ml-python.png',
    link: 'https://github.com/fikrianggara/Machine-learning-with-Python',
  },
  {
    slug: 'expenditure-wizard',
    title: 'Expenditure Wizard',
    category: 'Web Development',
    domains: ['Web Development'],
    summary: 'A guided wizard for recording and categorising expenses.',
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
    title: 'South Sumatera Export Dashboard',
    category: 'Data Visualization',
    domains: ['Web Development', 'Data Visualization'],
    summary: 'An R Shiny dashboard visualising South Sumatera export data.',
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
