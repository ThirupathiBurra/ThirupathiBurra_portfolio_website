export type ProjectCategory = "GenAI" | "Backend" | "ML" | "CV" | "Data Science" | "Automation" | "Other";

export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  keyLearnings: string;
  category: ProjectCategory;
}

export interface SecondaryProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  category: ProjectCategory;
}

export const flagshipProjects: CaseStudy[] = [
  {
    id: "finsmartai",
    title: "FinSmartAI",
    summary: "Full-stack GenAI platform for financial document Q&A and market sentiment analysis.",
    problem: "Financial analysts waste hours manually parsing complex compliance documents, and standard LLMs hallucinate critical financial figures.",
    solution: "Designed an end-to-end RAG pipeline using AstraDB vector search that grounds LLM responses exclusively in cited financial documents, alongside a real-time market sentiment module.",
    architecture: "FastAPI backend handles document ingestion and semantic search. React frontend delivers a seamless chat interface. LangChain orchestrates the retrieval augmented generation.",
    techStack: ["Python", "FastAPI", "LLMs", "RAG", "AstraDB", "LangChain", "React"],
    impact: "Achieved BERTScore F1 0.8605 and Semantic Similarity 0.834, significantly reducing hallucinations. Published peer-reviewed research in IJESAT (Vol. 26, Issue 4, Apr 2026).",
    githubUrl: "https://github.com/ThirupathiBurra",
    keyLearnings: "Learned how to rigorously evaluate RAG pipelines using BERTScore and manage large-scale vector embeddings in a production environment.",
    category: "GenAI"
  },
  {
    id: "audit-iq",
    title: "Audit IQ",
    summary: "Autonomous multi-agent system for automated compliance validation.",
    problem: "Manual compliance auditing is slow, error-prone, and struggles to scale across thousands of highly dense legal and financial documents.",
    solution: "Built an autonomous multi-agent orchestration system using CrewAI. Specialized agents handle OCR extraction, rule-based validation, and dynamic risk scoring.",
    architecture: "PyMuPDF and Retriever OCR extract context. CrewAI delegates tasks to specialized LLM agents. Pinecone acts as the memory bank for regulatory context.",
    techStack: ["CrewAI", "LangChain", "FastAPI", "Pinecone", "React", "Python"],
    impact: "Reduced audit time by ~60%. Secured a National Finalist position at the Google Agentathon (36-hour hackathon).",
    githubUrl: "https://github.com/ThirupathiBurra",
    keyLearnings: "Mastered multi-agent orchestration patterns and handling non-deterministic LLM outputs in strict, rule-based compliance environments.",
    category: "GenAI"
  },
  {
    id: "ai-kyc",
    title: "AI Identity Verification & Fraud Detection",
    summary: "Multimodal OCR and Machine Learning pipeline for KYC automation.",
    problem: "Traditional KYC processes require intensive manual review and are susceptible to sophisticated document forgery.",
    solution: "Architected a multimodal pipeline that extracts text via OCR and applies ensemble ML classifiers to detect anomalies and fraudulent patterns in identity documents.",
    architecture: "Flask REST APIs expose the inference engine. The entire service is containerized via Docker for horizontal scaling, with real-time monitoring dashboards.",
    techStack: ["Python", "Computer Vision", "OCR", "Scikit-learn", "Flask", "Docker"],
    impact: "Improved automated KYC verification accuracy by ~35% and cut manual review time during the Infosys Springboard internship.",
    githubUrl: "https://github.com/ThirupathiBurra",
    keyLearnings: "Gained enterprise-level experience in containerizing ML inference APIs and optimizing for sub-second response times.",
    category: "CV"
  }
];

export const secondaryProjects: SecondaryProject[] = [
  {
    id: "uiverse",
    title: "UIVerse",
    description: "Multi-agent runtime workspace generator where AI dynamically generates interfaces in real-time. Built at AI Tinkerers Global Hackathon.",
    techStack: ["React", "CopilotKit", "CrewAI", "Gemini 2.5 Flash"],
    githubUrl: "https://github.com/ThirupathiBurra",
    category: "GenAI"
  },
  {
    id: "career-advisor",
    title: "GenAI Career & Skills Advisor",
    description: "Recommendation system for career pathways mapping user profiles to skill gaps using prompt engineering.",
    techStack: ["Python", "Gemini", "LLMs"],
    githubUrl: "https://github.com/ThirupathiBurra",
    category: "GenAI"
  },
  {
    id: "openclaw",
    title: "OpenClaw Desktop Assistant",
    description: "Locally running desktop automation assistant for seamless workflow management.",
    techStack: ["Python", "Automation", "OS APIs"],
    githubUrl: "https://github.com/ThirupathiBurra",
    category: "Automation"
  },
  {
    id: "plant-disease",
    title: "Plant Disease Detector",
    description: "Computer Vision model designed to identify crop diseases from leaf images.",
    techStack: ["PyTorch", "Computer Vision", "Python"],
    githubUrl: "https://github.com/ThirupathiBurra",
    category: "CV"
  },
  {
    id: "house-price",
    title: "House Price Prediction",
    description: "End-to-end machine learning pipeline utilizing regression models to forecast real estate prices.",
    techStack: ["Scikit-learn", "Pandas", "Flask"],
    githubUrl: "https://github.com/ThirupathiBurra",
    category: "ML"
  },
  {
    id: "intern-eda",
    title: "Internship EDA Suite",
    description: "Collection of advanced Exploratory Data Analysis notebooks and visualizations created during Edunet Foundation internship.",
    techStack: ["Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/ThirupathiBurra",
    category: "Data Science"
  }
];
