export const portfolioData = {
  proofPoints: [
    "Google Agentathon Finalist",
    "Published in IJESAT",
    "Google Cloud Top Learner",
    "SIH Finalist",
    "AI Tinkerers Global Hackathon",
  ],
  projects: [
    {
      id: "finsmartai",
      title: "FinSmartAI",
      subtitle: "AI Personal Finance Assistant",
      description: "Full-stack GenAI fintech platform with RAG pipeline achieving BERTScore F1 0.8605, significantly reducing LLM hallucinations in financial queries.",
      tags: ["Python", "FastAPI", "RAG", "AstraDB", "React"],
      link: "https://github.com/ThirupathiBurra",
    },
    {
      id: "audit-iq",
      title: "Audit IQ",
      subtitle: "Autonomous AI Compliance Auditor",
      description: "Multi-agent AI system using CrewAI for automated compliance validation and anomaly detection. Reduced audit time by ~60%.",
      tags: ["CrewAI", "Multi-Agent", "LangChain", "Pinecone"],
      link: "https://github.com/ThirupathiBurra",
    },
    {
      id: "uiverse",
      title: "UIVerse",
      subtitle: "AI-Native Runtime Workspace",
      description: "A multi-agent runtime interface engine where AI dynamically generates and evolves software interfaces in real time. Built at AI Tinkerers Hackathon.",
      tags: ["React", "CopilotKit", "CrewAI", "Gemini 2.5 Flash"],
      link: "https://github.com/ThirupathiBurra",
    },
  ],
  experience: [
    {
      role: "AI/ML Engineer Intern",
      company: "Infosys Springboard",
      date: "Aug 2025 – Oct 2025",
      description: "Architected an end-to-end KYC verification pipeline using OCR and ensemble ML classifiers, improving automated accuracy by 35%. Engineered real-time Flask REST APIs.",
    },
    {
      role: "AI & Cloud Intern",
      company: "Edunet Foundation",
      date: "Jun 2025 – Jul 2025",
      description: "Built and deployed AI-powered applications on cloud infrastructure, strengthening skills in LLMs and scalable ML system design.",
    },
  ],
  skills: [
    { category: "AI & ML", items: ["LangChain", "CrewAI", "RAG", "Vector DBs", "PyTorch", "NLP"] },
    { category: "Backend", items: ["Python", "FastAPI", "Flask", "Docker", "SQL", "REST APIs"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand"] },
  ],
  events: [
    { name: "AI Tinkerers Global Hackathon", role: "Participant", date: "May 2026" },
    { name: "Google Agentathon", role: "National Finalist", date: "2025" },
    { name: "Smart India Hackathon (SIH)", role: "National Finalist", date: "2025" },
    { name: "Google Cloud GenAI Exchange", role: "Top Learner", date: "2025" },
  ],
  achievements: [
    { title: "Published Research in IJESAT", date: "Apr 2026", details: "Peer-reviewed paper on RAG pipelines in financial analysis." },
    { title: "GSSoC 2026", date: "2026", details: "Open Source AI/ML Contributor." },
  ]
};
