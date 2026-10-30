import { education, profile, projects, t, type Language, type Localized, type Project } from './data'

const internshipSlugs = ['allied-medical-rag', 'uav-advisory-agent']
const internships = internshipSlugs.map(slug => projects.find(project => project.slug === slug)!).filter(Boolean)
const featuredSlugs = ['caretrip-ops', 'meet-ta', 'discourse-research']
const featured = featuredSlugs.map(slug => projects.find(project => project.slug === slug)!).filter(Boolean)
const otherSlugs = ['vibe-kangbo', 'massage-mayhem', 'menu-weixin', 'deposit-wars']
const otherProjects = otherSlugs.map(slug => projects.find(project => project.slug === slug)!).filter(Boolean)
const featuredSummaries: Record<string, Localized> = {
  'allied-medical-rag': {
    en: 'Built the multimodal path from Front email text, images and PDFs to GPT-4o analysis, hybrid retrieval and evidence-backed parts suggestions for staff.',
    zh: '打通 Front 邮件文本、图片和 PDF 到 GPT-4o 分析、混合检索及带证据零件建议的多模态链路。',
  },
  'caretrip-ops': {
    en: 'Built a LangGraph travel workflow with evidence checks, traveler approval and recoverable booking states; the repository now extends the Hackathon PoC to V5.',
    zh: '开发含证据核验、本人审批与可恢复预订状态的 LangGraph 旅行工作流；仓库现已从 Hackathon PoC 扩展至 V5。',
  },
  'meet-ta': {
    en: 'Trained the ConvNeXtV2-Huge emotion model, built YOLO face inference and FastAPI interfaces, and fused vision with speech and memory; test accuracy reached 85.34%.',
    zh: '训练 ConvNeXtV2-Huge 情绪模型，开发 YOLO 人脸推理与 FastAPI 接口，再融合语音和记忆；测试准确率为 85.34%。',
  },
  'uav-advisory-agent': {
    en: 'Used Python, LangGraph and IBM watsonx to build a five-stage, evidence-linked UAV export advisory Agent; regulatory judgment accuracy reached 88.24%.',
    zh: '结合 Python、LangGraph 与 IBM watsonx 开发五阶段、可追溯依据的无人机出口咨询 Agent；法规判断准确率为 88.24%。',
  },
  'discourse-research': {
    en: 'Processed TED-MDB data and compared structural cues across 40 MiniLM runs; the repository records the five-seed results.',
    zh: '处理 TED-MDB 数据，并通过 40 次 MiniLM 实验比较结构提示；仓库记录了五随机种子的结果。',
  },
  'vibe-kangbo': {
    en: 'Produced a 134-second vertical explainer with 17 code-built scenes, GSAP motion, Python audio mixing and editable HyperFrames source.',
    zh: '制作 134 秒竖屏知识短片：17 个代码场景、GSAP 动画、Python 混音及可编辑的 HyperFrames 工程。',
  },
  'massage-mayhem': {
    en: 'Built a playable 30-level rules prototype with gesture scoring and saves, plus a separate character animation architecture sample.',
    zh: '制作含手势评分与存档的可玩 30 关规则原型，并验证角色动画架构样机。',
  },
  'menu-weixin': {
    en: 'Built a WeChat ordering flow with 47 dishes, scaled recipes, delivery and dine-in modes, chef identity checks and recoverable cloud sync.',
    zh: '开发微信点餐流程：47 道菜、菜谱换算、外送与堂食、主厨身份校验及可恢复的云端同步。',
  },
  'deposit-wars': {
    en: 'Built a local nine-level rental puzzle demo with tenant and landlord perspectives, object collection and evidence-based marking.',
    zh: '制作九关租房找茬本地 Demo，包含租客与房东双视角、物件收集及线索标注。',
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
          <h3>{lang === 'zh' ? '其他项目' : 'Other projects'}</h3>
          <div className="project-list">{otherProjects.map(project => <ProjectEntry key={project.slug} project={project} lang={lang} />)}</div>
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
