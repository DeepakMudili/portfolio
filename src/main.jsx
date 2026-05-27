import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BrainCircuit,
  CircleCheckBig,
  Code2,
  Cpu,
  Database,
  Download,
  Gauge,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Radar,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Deepak Mudili',
  title: 'Python GenAI Engineer | FastAPI | RAG | LangChain | LLM Applications',
  phone: '+91 9110721434',
  email: 'deepakmudilli@gmail.com',
  location: 'India',
  resume: './Deepak_Mudili_Resume.pdf',
  live: 'https://ai-hiring-53c18c.netlify.app/index.html',
  github: 'https://github.com/DeepakMudili/ai-hiring-decision-engine',
};

const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    items: ['Python', 'SQL', 'JavaScript'],
  },
  {
    title: 'GenAI / LLM',
    icon: BrainCircuit,
    items: ['LangChain', 'LangGraph', 'OpenAI API', 'Groq API', 'Llama 3.1', 'RAG', 'Prompt Engineering'],
  },
  {
    title: 'Backend / APIs',
    icon: Server,
    items: ['FastAPI', 'REST APIs', 'Microservices', 'JWT Authentication', 'Swagger/OpenAPI', 'Postman'],
  },
  {
    title: 'Data / Vector',
    icon: Database,
    items: ['PostgreSQL', 'SQL Server', 'Supabase', 'ChromaDB', 'FAISS', 'Vector Search'],
  },
  {
    title: 'AI & Data Processing',
    icon: Cpu,
    items: ['PyMuPDF', 'Resume Parsing', 'PDF Processing', 'Pandas', 'Data Validation', 'Semantic Search'],
  },
  {
    title: 'Cloud & Delivery',
    icon: Rocket,
    items: ['Git', 'GitHub', 'Render', 'Netlify', 'Environment Variables', 'SDLC', 'Agile'],
  },
];

const experienceBullets = [
  'Engineered FastAPI microservices and REST workflows for resume upload, application tracking, and recruiter operations across 10+ backend endpoints.',
  'Automated AI resume evaluation using LangChain and Groq/Llama 3.1 prompts to generate scores, skill gaps, feedback, and candidate summaries in structured JSON.',
  'Resolved API, SQL, file-upload, and deployment issues by analyzing logs and validating requests, reducing recurring application defects by 30%.',
  'Executed Agile delivery activities including requirement analysis, sprint planning, Swagger validation, release checks, and deployment support.',
  'Strengthened application quality through unit checks, peer reviews, Postman/Swagger validation, and database verification before releases.',
];

const projects = [
  {
    title: 'AI Hiring Intelligence Platform',
    type: 'Python / GenAI',
    icon: BrainCircuit,
    status: 'Live AI Product',
    metric: '0–50 AI Score',
    stack: ['Python', 'FastAPI', 'LangChain', 'RAG', 'Groq API', 'Llama 3.1', 'ChromaDB', 'Supabase PostgreSQL', 'PyMuPDF'],
    summary:
      'AI-powered hiring platform for resume screening, candidate ranking, recruiter copilot workflows, semantic search, and hiring analytics.',
    highlights: [
      'Designed an end-to-end hiring platform for resume screening, candidate ranking, recruiter copilot support, semantic search, and hiring analytics.',
      'Developed REST endpoints for login, job posting, resume upload, AI analysis, interview questions, final decisions, and analytics dashboards.',
      'Implemented an LLM scoring workflow that compares resumes with job descriptions and returns a 0–50 AI score with matched and missing skills.',
      'Parsed PDF resumes with PyMuPDF, stored application records in Supabase PostgreSQL, and created ChromaDB embeddings for candidate search.',
    ],
    live: 'https://ai-hiring-53c18c.netlify.app/index.html',
    github: 'https://github.com/DeepakMudili/ai-hiring-decision-engine',
  },
  {
    title: 'PwC Customer Data Management System',
    type: 'Python Backend',
    icon: Server,
    status: 'Enterprise Backend',
    metric: '25% Faster Retrieval',
    stack: ['Python', 'FastAPI', 'REST APIs', 'JWT Authentication', 'SQL Server', 'Swagger/OpenAPI', 'Infomaker'],
    summary:
      'Python backend project for enterprise customer data management, CRUD workflows, API security, SQL optimization, and reporting support.',
    highlights: [
      'Built FastAPI CRUD services for enterprise customer data workflows and secured APIs with JWT authentication and CORS policies.',
      'Optimized SQL Server queries, joins, indexes, and stored procedures for high-volume processing, improving data retrieval performance by 25%.',
      'Supported API validation through Swagger/OpenAPI and verified database workflows before release deployments.',
      'Reduced application issues by 50% through code reviews, API validation, debugging, and release support.',
    ],
  },
  {
    title: 'AI Meeting Assistant',
    type: 'Python / GenAI',
    icon: Workflow,
    status: 'AI Automation',
    metric: 'Semantic Notes',
    stack: ['Python', 'FastAPI', 'LangChain', 'OpenAI API', 'FAISS', 'SQLite', 'APScheduler'],
    summary:
      'FastAPI application for meeting scheduling, notes management, AI summaries, action-item extraction, reminders, and semantic note retrieval.',
    highlights: [
      'Created a meeting assistant for scheduling, notes management, automated reminders, AI summaries, and action-item extraction.',
      'Integrated LangChain and OpenAI API to summarize meeting notes and extract structured follow-up actions.',
      'Enabled semantic note retrieval using OpenAI embeddings and FAISS to search relevant meeting notes across sessions.',
    ],
  },
];

const architecture = [
  {
    title: 'Frontend UI',
    text: 'JavaScript and Netlify-hosted interfaces for recruiter-facing workflows.',
    icon: Layers3,
  },
  {
    title: 'Backend APIs',
    text: 'FastAPI REST endpoints for authentication, resume upload, analytics, and AI workflows.',
    icon: Server,
  },
  {
    title: 'GenAI Layer',
    text: 'LangChain, LangGraph, RAG, OpenAI/Groq, prompt engineering, and structured AI outputs.',
    icon: BrainCircuit,
  },
  {
    title: 'Vector Search',
    text: 'ChromaDB / FAISS with embeddings for semantic retrieval and candidate matching.',
    icon: Radar,
  },
  {
    title: 'Data Layer',
    text: 'PostgreSQL, SQL Server, Supabase, and SQLite for structured data storage.',
    icon: Database,
  },
];

const certifications = [
  ['Microsoft Certified: Azure AI Fundamentals', 'AI-900 | Microsoft | 2023'],
  ['Ignite Certification', 'LTIMindtree Batch 1 | 2023'],
  ['Foundation: Introduction to LangChain — Python', 'LangChain Academy | Issued May 04, 2026'],
  ['Foundation: Introduction to LangGraph — Python', 'LangChain Academy | Issued May 18, 2026'],
];

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function SectionHeader({ label, title, text }) {
  return (
    <div className="section-header">
      <p>{label}</p>
      <h2>{title}</h2>
      {text && <span>{text}</span>}
    </div>
  );
}

function StatCard({ number, label, icon: Icon }) {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Icon size={22} />
      <strong>{number}</strong>
      <span>{label}</span>
    </motion.div>
  );
}

function App() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="cyber-grid" />
        <div className="noise-layer" />
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="orb orb-three" />

        <nav>
          <strong>{profile.name}</strong>

          <div>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="eyebrow">
              <Sparkles size={16} />
              Python GenAI Engineer
            </div>

            <h1>
              Building intelligent backend systems for AI-powered products.
            </h1>

            <p className="hero-copy">
              Python GenAI Engineer with 2 years of experience building backend-first AI applications using FastAPI, REST APIs, LangChain, RAG, vector search, resume parsing, recruiter copilots, and cloud deployment.
            </p>

            <div className="contact-row">
              <span><Phone size={16} /> {profile.phone}</span>
              <span><Mail size={16} /> {profile.email}</span>
              <span><MapPin size={16} /> {profile.location}</span>
            </div>

            <div className="actions">
              <a className="btn primary" href={profile.resume} download>
                <Download size={18} /> Download Resume
              </a>

              <a className="btn" href={profile.live} target="_blank" rel="noreferrer">
                <ArrowUpRight size={18} /> Live Project
              </a>

              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                <GitBranch size={18} /> GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            className="ai-console"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="console-header">
              <span />
              <span />
              <span />
              <p>AI_BACKEND_ENGINE</p>
            </div>

            <div className="console-body">
              <div className="pulse-ring">
                <BrainCircuit size={48} />
              </div>

              <h3>Core Focus</h3>

              <ul>
                <li>RAG pipelines and LLM integrations</li>
                <li>FastAPI microservices and REST APIs</li>
                <li>Semantic search with ChromaDB / FAISS</li>
                <li>Resume parsing and recruiter intelligence workflows</li>
                <li>Cloud deployment with Render, Netlify, and Supabase</li>
              </ul>
            </div>
          </motion.div>
        </div>

      
      </section>

      <section className="section" id="skills">
        <SectionHeader
          label="Technical Stack"
          title="Hot Skills for GenAI Backend Roles"
          text="Skills aligned with Python GenAI, FastAPI, RAG pipelines, vector search, database workflows, API testing, cloud deployment, SDLC, and Agile delivery."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                className="skill-card glass-card"
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="skill-icon">
                  <Icon size={24} />
                </div>

                <h3>{group.title}</h3>

                <div className="badges">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section" id="experience">
        <SectionHeader
          label="Experience"
          title="LTIMindtree — Software Developer"
          text="March 2024 – Present | India"
        />

        <motion.div
          className="experience-card glass-card"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="experience-left">
            <p>Current Role</p>
            <h3>Python Backend & GenAI Development</h3>
            <span>FastAPI · LangChain · RAG · SQL · Swagger · Agile</span>
          </div>

          <ul>
            {experienceBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section className="section" id="projects">
        <SectionHeader
          label="Featured Projects"
          title="Creative Project Cards"
          text="Projects are shown as cards, not dropdowns. Each card highlights the business use case, AI/backend stack, and measurable impact."
        />

        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className="project-card"
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="project-card-top">
                  <div className="project-icon">
                    <Icon size={26} />
                  </div>

                  <div className="project-meta">
                    <span>{project.type}</span>
                    <h3>{project.title}</h3>
                  </div>
                </div>

                <div className="project-signal">
                  <span>{project.status}</span>
                  <strong>{project.metric}</strong>
                </div>

                <p className="summary">{project.summary}</p>

                <div className="badges">
                  {project.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>

                <ul>
                  {project.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live Demo <ArrowUpRight size={15} />
                    </a>
                  )}

                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      GitHub <GitBranch size={15} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <SectionHeader
          label="Architecture"
          title="How My AI Applications Are Designed"
          text="A clean high-level system view you can also explain in interviews."
        />

        <div className="architecture">
          {architecture.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="arch-step glass-card"
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="arch-number">{String(index + 1).padStart(2, '0')}</div>
                <Icon size={25} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="section certs">
        <SectionHeader
          label="Certifications"
          title="Learning & Credentials"
        />

        <div className="cert-grid">
          {certifications.map(([title, detail], index) => (
            <motion.div
              className="cert-card glass-card"
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <ShieldCheck size={27} />
              <h3>{title}</h3>
              <p>{detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-orbit">
          <Zap size={34} />
        </div>

        <h2>Open to Python GenAI, RAG, FastAPI, and AI Backend roles.</h2>

        <p>
          Let’s connect for AI application engineering, backend systems, RAG workflows, and LLM-powered product roles.
        </p>

        <div className="actions centered">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            <Mail size={18} /> Email Me
          </a>

          <a className="btn" href={profile.resume} download>
            <Download size={18} /> Resume
          </a>

          <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
            <GitBranch size={18} /> GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);