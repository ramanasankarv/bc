// ---------------------------------------------------------------------------
// Blue Cloud AI Technologies — single source of truth for site copy.
// Edit text here and every page updates. Structured so content can be
// added or removed without touching component code.
// ---------------------------------------------------------------------------

export const company = {
  name: "Blue Cloud AI Technologies",
  short: "Blue Cloud AI",
  tagline: "Cloud. Data. AI. Transformation.",
  email: "hello@bluecloudai.tech",
  location: "177 SW Range Ave, Unit #5705 Madison, FL 32340",
  mission:
    "Blue Cloud AI Technologies empowers organizations to modernize legacy data platforms and operationalize artificial intelligence through cloud-native architectures, intelligent automation, and enterprise-scale systems integration.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
];

export const hero = {
  eyebrow: "Database Modernization · AI Transformation",
  headline: ["Modernize legacy data.", "Accelerate AI.", "Transform the enterprise."],
  lead: "A next-generation IT consulting and systems-integration firm moving organizations from legacy databases, mainframes, and monoliths into secure cloud environments engineered for intelligent agents and real-time analytics.",
  flow: [
    { from: "Legacy", to: "Cloud" },
    { from: "Data", to: "Intelligence" },
    { from: "Systems", to: "AI" },
  ],
};

// Honest, capability-based figures — no invented track record.
export const metrics = [
  { k: "6", u: "+", l: "Legacy sources supported" },
  { k: "AI", u: "·first", l: "Automation-led delivery" },
  { k: "100", u: "%", l: "Metadata-driven pipelines" },
  { k: "5", u: "", l: "Stage modernization framework" },
];

export const whoWeAre = {
  eyebrow: "Who we are",
  title: "Enterprise engineering discipline, met with an AI-first innovation mindset.",
  body: "Blue Cloud AI Technologies helps enterprises modernize legacy data platforms and operationalize AI at scale — turning legacy complexity into intelligent, high-performing data platforms.",
  capabilities: [
    "Cloud engineering",
    "Data modernization",
    "AI implementation",
    "Systems integration",
    "Automation frameworks",
    "Intelligent metadata architectures",
  ],
};

export type Service = {
  num: string;
  title: string;
  summary: string;
  capabilities: string[];
  from?: string[];
  to?: string[];
};

export const services: Service[] = [
  {
    num: "01",
    title: "Database Modernization",
    summary:
      "Move enterprise data estates off legacy engines into scalable cloud and hybrid-cloud data platforms.",
    from: ["SQL Server", "Oracle", "DB2", "Mainframe / COBOL", "Hive Metastore", "Legacy warehouses"],
    to: ["Azure Synapse", "Databricks Lakehouse", "Snowflake", "PostgreSQL", "Hybrid-cloud"],
    capabilities: [
      "schema conversion",
      "code remediation",
      "DDL modernization",
      "performance tuning",
      "query optimization",
      "cloud migration",
    ],
  },
  {
    num: "02",
    title: "AI-Powered Modernization Frameworks",
    summary:
      "GenAI agents and intelligent automation frameworks that accelerate modernization programs and cut technical debt.",
    capabilities: [
      "AI-driven schema analysis",
      "automated code conversion",
      "metadata annotation",
      "tech-debt inventory",
      "AI-assisted testing",
      "NLP-powered data discovery",
    ],
  },
  {
    num: "03",
    title: "Mainframe to Cloud Transformation",
    summary:
      "Mainframe decomposition and modernization into cloud-native, API-driven microservices architectures.",
    capabilities: [
      "COBOL modernization",
      "DB2 migration",
      "ingestion to Azure / AWS / GCP",
      "microservices decomposition",
      "API enablement",
    ],
  },
  {
    num: "04",
    title: "AI Solutions & Intelligent Agents",
    summary:
      "Enterprise AI solutions designed and deployed — from assistants and agentic workflows to data-intelligence platforms.",
    capabilities: [
      "AI assistants",
      "agentic AI workflows",
      "RAG frameworks",
      "NLP engines",
      "semantic search",
      "enterprise copilots",
    ],
  },
  {
    num: "05",
    title: "Metadata-Driven Data Platforms",
    summary:
      "Intelligent metadata frameworks enabling governed, AI-ready analytics across modern lakehouse ecosystems.",
    capabilities: [
      "batch migration",
      "streaming pipelines",
      "lineage",
      "governance",
      "semantic enrichment",
      "AI-ready analytics",
    ],
    to: ["Microsoft Purview", "Unity Catalog", "Semantic layers", "Lakehouse metadata"],
  },
  {
    num: "06",
    title: "Performance Optimization for AI",
    summary:
      "Data estates tuned specifically for AI workloads — a differentiator few modernization partners engineer for.",
    capabilities: [
      "AI-assistant performance",
      "vector search",
      "NLP frameworks",
      "semantic retrieval",
      "agent orchestration",
    ],
  },
  {
    num: "07",
    title: "Data and AI Governance",
    summary:
      "Governance frameworks that keep data trustworthy and AI accountable — from access controls and data quality to responsible-AI oversight.",
    capabilities: [
      "data quality & stewardship",
      "access & policy controls",
      "regulatory compliance",
      "model risk & responsible AI",
      "audit & lineage tracking",
      "governance operating models",
    ],
  },
];

export const framework = {
  eyebrow: "Our framework",
  title: "A five-stage path from legacy inventory to AI-scale operations.",
  steps: [
    { n: "01", title: "Assess", body: "Inventory legacy systems, schemas, lineage, and technical debt." },
    { n: "02", title: "Transform", body: "AI-powered schema and code conversion." },
    { n: "03", title: "Modernize", body: "Move to cloud-native or hybrid-cloud architecture." },
    { n: "04", title: "Operationalize", body: "Deploy AI frameworks and automation." },
    { n: "05", title: "Scale", body: "Optimize for enterprise growth and AI workloads." },
  ],
};

export const differentiators = [
  {
    title: "AI-First Modernization",
    body: "We don't modernize manually. We modernize with GenAI agents, automated conversion pipelines, AI-assisted testing, and metadata-driven orchestration.",
    points: ["GenAI agents", "automated conversion pipelines", "AI-assisted testing", "metadata-driven orchestration"],
  },
  {
    title: "Automation-First Strategy",
    body: "Our methodology favors repeatable accelerators over manual remediation — governed pipelines that reduce migration risk.",
    points: ["automation over manual remediation", "repeatable accelerators", "governed pipelines", "reduced migration risk"],
  },
  {
    title: "Performance Optimization for AI",
    body: "We specifically tune modern data estates for AI assistant performance, vector search, semantic retrieval, and agent orchestration.",
    points: ["AI assistant performance", "vector search", "NLP frameworks", "semantic retrieval", "agent orchestration"],
  },
];

export const contact = {
  eyebrow: "Contact",
  title: "Turn your data into a strategic asset.",
  body: "Whether you're planning a migration, optimizing performance, or implementing AI — we'll tailor a strategy to your business goals and technical landscape.",
};
