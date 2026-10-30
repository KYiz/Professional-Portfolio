import { education, profile, projects, t, type Language, type Localized, type Project } from './data'

const internshipSlugs = ['allied-medical-rag', 'uav-advisory-agent']
const internships = internshipSlugs.map(slug => projects.find(project => project.slug === slug)!).filter(Boolean)
const featuredSlugs = ['caretrip-ops', 'meet-ta']
const featured = featuredSlugs.map(slug => projects.find(project => project.slug === slug)!).filter(Boolean)
const other = projects.filter(project => !internshipSlugs.includes(project.slug) && !featuredSlugs.includes(project.slug))
const featuredSummaries: Record<string, Localized> = {
  'allied-medical-rag': {
    en: 'Connected Front intake, Azure OpenAI, hybrid retrieval, OneDrive knowledge refresh, and a staff review UI in a Spring Boot service.',
    zh: '用 Spring Boot 串联 Front 邮件、Azure OpenAI、混合检索、OneDrive 知识刷新与员工审核界面。',
  },
  'caretrip-ops': {
    en: 'Built a LangGraph travel workflow with evidence checks and traveler approval; the public repository now extends the Hackathon PoC to V5.',
    zh: '开发含证据核验和本人审批的 LangGraph 旅行工作流；公开仓库现已从 Hackathon PoC 扩展至 V5。',
  },
  'meet-ta': {
    en: 'Developed the visual emotion model and connected it to a team-built multimodal conversation prototype; test accuracy reached 85.34%.',
    zh: '负责视觉情绪模型开发，并接入团队的多模态对话原型；模型测试准确率为 85.34%。',
  },
  'uav-advisory-agent': {
    en: 'Built a five-stage RAG advisory Agent for UAV export controls; regulatory judgment accuracy reached 88.24%.',
    zh: '开发无人机出口管制五阶段 RAG 咨询 Agent；法规判断准确率为 88.24%。',
  },
}

function ProjectEntry({ project, lang }: { project: Project; lang: Language }) {
  return (
    <article className="project-entry">
      <div className="project-entry-meta">{t(project.period, lang)} · {t(project.role, lang)}</div>
      <h3><a href={`#/projects/${project.slug}`}>{t(project.title, lang)}</a></h3>
      <p>{t(featuredSummaries[project.slug], lang)}</p>
      <div className="entry-links">
        <a href={`#/projects/${project.slug}`}>{lang === 'zh' ? (internshipSlugs.includes(project.slug) ? '实习工作说明' : '项目说明') : 'Case study'} →</a>
        {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">GitHub ↗</a>}
      </div>
    </article>
  )
}

export default function Home({ lang }: { lang: Language }) {
  return (
    <main className="page-width home">
      <section className="intro" id="about" aria-labelledby="home-title">
        <div className="intro-copy">
          <p className="eyebrow">{lang === 'zh' ? '个人主页' : 'Personal website'}</p>
          <h1 id="home-title">{lang === 'zh' ? '邹逸翔' : 'Yixiang Zou'}<span>{lang === 'zh' ? 'Yixiang Zou' : '邹逸翔'}</span></h1>
          <p className="intro-lead">{lang === 'zh'
            ? '我在奥克兰大学学习人工智能，主要做 AI 应用开发。下面分别记录我的实习工作与项目，包括企业知识检索、Agent 工作流和视觉模型。'
            : 'I studied artificial intelligence at the University of Auckland and work on applied AI. Below are my internship work and projects in enterprise search, agent workflows, and computer vision.'}</p>
          <div className="intro-links">
            <a href={profile.resume} target="_blank" rel="noreferrer">{lang === 'zh' ? '简历 PDF' : 'CV (Chinese PDF)'} ↗</a>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={`mailto:${profile.email}`}>Email ↗</a>
          </div>
        </div>
        <img className="profile-photo" src="./profile.jpg" alt={lang === 'zh' ? '邹逸翔的照片' : 'Portrait of Yixiang Zou'} width="180" height="220" />
      </section>

      <section className="content-section" id="experience" aria-labelledby="experience-title">
        <h2 id="experience-title">{lang === 'zh' ? '实习经历' : 'Internship experience'}</h2>
        <div className="project-list">{internships.map(project => <ProjectEntry key={project.slug} project={project} lang={lang} />)}</div>
      </section>

      <section className="content-section" id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title">{lang === 'zh' ? '项目经历' : 'Selected projects'}</h2>
        <p className="section-intro">{lang === 'zh'
          ? '下面的项目涉及旅行 Agent、多模态对话和 NLP 研究。点开项目说明可查看问题、个人贡献、方法和结果。'
          : 'Projects in travel agents, multimodal conversation, and NLP research. Each case study explains the problem, my contribution, approach, and result.'}</p>
        <div className="project-list">{featured.map(project => <ProjectEntry key={project.slug} project={project} lang={lang} />)}</div>
        <div className="other-work">
          <h3>{lang === 'zh' ? '其他项目' : 'Other work'}</h3>
          <ul>{other.map(project => <li key={project.slug}><a href={`#/projects/${project.slug}`}>{t(project.title, lang)}</a><span>{t(project.status, lang)}{project.repo && <> · <a href={project.repo} target="_blank" rel="noreferrer">GitHub ↗</a></>}</span></li>)}</ul>
        </div>
      </section>

      <section className="content-section compact-section" id="background" aria-labelledby="background-title">
        <h2 id="background-title">{lang === 'zh' ? '教育背景' : 'Education'}</h2>
        <ul className="education-list">{education.map(item => <li key={item.period}><strong>{t(item.degree, lang)}</strong><span>{item.school} · {item.period}</span></li>)}</ul>
      </section>

      <section className="content-section compact-section contact-section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title">{lang === 'zh' ? '联系' : 'Contact'}</h2>
        <p>{lang === 'zh' ? '欢迎通过邮件联系。' : 'The best way to reach me is by email.'} <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
      </section>
    </main>
  )
}
