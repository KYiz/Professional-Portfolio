export type Language = 'en' | 'zh'
export type Localized = { en: string; zh: string }
export const t = (value: Localized, language: Language) => value[language]

export const profile = {
  name: 'Yixiang Zou',
  chineseName: '邹逸翔',
  email: 'yixiangzou2012@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kelvin-zou-211yxz/',
  github: 'https://github.com/KYiz',
  resume: './docs/Yixiang_Zou_Resume.pdf',
  portfolio: './docs/Yixiang_Zou_AI_Agent_Product_Portfolio.pdf',
  location: { en: 'Auckland, New Zealand', zh: '新西兰 · 奥克兰' },
  headline: {
    en: 'Building useful AI applications with Python and Java.',
    zh: '用 Python 与 Java 开发可落地的 AI 应用。',
  },
  introduction: {
    en: 'I develop AI applications with Python and Java, including retrieval workflows, agent systems, and computer vision.',
    zh: '主要使用 Python 与 Java 开发 AI 应用，涉及企业检索工作流、Agent 系统与计算机视觉。',
  },
}

export const skills = [
  { label: 'AI / Agent', title: { en: 'AI / Agent', zh: 'AI / Agent' }, items: ['RAG', 'Hybrid search', 'Reranking', 'LangGraph', 'Human review'] },
  { label: 'Engineering', title: { en: 'Engineering', zh: '工程开发' }, items: ['Python', 'Java', 'FastAPI', 'Spring Boot', 'REST APIs', 'Docker', 'React', 'TypeScript'] },
  { label: 'Data / ML', title: { en: 'Data / ML', zh: '数据与机器学习' }, items: ['PostgreSQL', 'pgvector', 'MongoDB', 'SQLite', 'PyTorch', 'Computer vision'] },
  { label: 'Product', title: { en: 'Product', zh: '产品设计' }, items: ['Workflow design', 'Pydantic', 'Checkpoints', 'Idempotency', 'Evaluation'] },
]

export type Project = {
  slug: string
  index: string
  category: Localized
  title: Localized
  subtitle: Localized
  period: Localized
  role: Localized
  tags: string[]
  status: Localized
  repo?: string
  overview: Localized
  challenge: Localized
  responsibility: Localized[]
  architecture: Localized[]
  process: Localized[]
  outcomes: Localized[]
  reflection: Localized
  note?: Localized
}

export const projects: Project[] = [
  {
    slug: 'allied-medical-rag', index: '01',
    category: { en: 'Enterprise AI · Internship', zh: '企业 AI · 实习' },
    title: { en: 'Multimodal RAG for Medical Parts', zh: '医疗零部件多模态 RAG 系统' },
    subtitle: { en: 'Connect fragmented product knowledge to the service team’s daily workflow.', zh: '连接分散的产品知识与客服日常工作流。' },
    period: { en: 'Mar – Jul 2026', zh: '2026.03 – 07' },
    role: { en: 'AI Engineering Intern · Allied Medical Limited', zh: 'AI 工程实习生 · Allied Medical Limited' },
    tags: ['Java', 'Spring Boot', 'Spring AI', 'Azure OpenAI', 'pgvector', 'MongoDB', 'React'],
    status: { en: 'Internship delivery', zh: '实习项目交付' },
    overview: { en: 'Extended an existing Java / Spring Boot prototype into a connected service workflow. I worked across source ingestion, knowledge refresh, retrieval evidence, and Front integration, turning partial descriptions, images, manuals, and ERP records into actionable parts suggestions for staff.', zh: '在已有 Java / Spring Boot 原型上，推进从资料摄入、知识刷新、检索证据到 Front 集成的完整链路，将不完整描述、图片、手册和 ERP 记录整理为员工可直接审核的零件建议。' },
    challenge: { en: 'More than 50,000 stock records, technical diagrams, and mixed file formats made finding the right replacement part difficult. The engineering challenge was to keep this knowledge current and return useful evidence inside the existing service tools.', zh: '50,000 多条库存记录、技术图纸与多种格式资料，让替换零件定位变得复杂。工程重点是保持知识及时更新，并在现有客服工具中返回可用的候选与依据。' },
    responsibility: [
      { en: 'Developed and maintained source keyed ingestion and refresh for ERP exports, spreadsheets, PDFs, manuals, diagrams, and reference images.', zh: '开发并维护 ERP、表格、PDF、手册、图纸及图片的资料摄入、来源标识与刷新流程。' },
      { en: 'Refined parts suggestions, supporting evidence, and follow up questions for staff review.', zh: '优化候选零件、支撑证据与补充追问的输出，服务员工审核与后续沟通。' },
      { en: 'Connected tagged Front conversations to asynchronous analysis and editable internal comments.', zh: '将 Front 标签触发的会话接入异步分析，并生成可编辑的内部评论。' },
    ],
    architecture: [
      { en: 'Source files → text and image parsing → embeddings → pgvector hybrid search, Top-20 retrieval and Top-5 reranking.', zh: '源文件 → 文本与图像解析 → 向量化 → pgvector 混合检索 Top-20 与重排 Top-5。' },
      { en: 'Spring Boot / Spring AI orchestrated retrieval and analysis; PostgreSQL / pgvector held ERP data and embeddings, while MongoDB held leads and workflow state.', zh: 'Spring Boot / Spring AI 编排检索和分析；PostgreSQL / pgvector 保存 ERP 数据与向量，MongoDB 保存线索及工作流状态。' },
      { en: 'Front API posted suggestions as internal comments for human editing.', zh: 'Front API 将建议发布为内部评论，供员工编辑。' },
    ],
    process: [
      { en: 'Used the Windows 365 Cloud PC OneDrive folder for normal file ingestion and embedding refresh; SFTP remained a fallback.', zh: '通过 Windows 365 Cloud PC 的 OneDrive 文件夹完成常规资料摄入与向量刷新，SFTP 作为备用路径。' },
      { en: 'Connected Front webhooks to asynchronous analysis with @Async / CompletableFuture, confidence thresholds, and staff review.', zh: '将 Front Webhook 接入 @Async / CompletableFuture 异步分析，设置置信度阈值并保留人工审核。' },
    ],
    outcomes: [
      { en: 'The system remained in service use; Top-1 accuracy reached 86.32% and Recall@5 reached 88.16%.', zh: '系统持续投入客服使用；Top-1 准确率为 86.32%，Recall@5 为 88.16%。' },
      { en: 'A React review UI lets staff inspect and edit the AI summary and suggested matches; configured Front tag intake can post an internal comment, never a customer reply.', zh: 'React 审核界面供员工检查和编辑 AI 摘要与候选零件；配置后的 Front 标签流程可发布内部评论，不会直接回复客户。' },
    ],
    reflection: { en: 'An enterprise AI workflow succeeds when knowledge freshness, useful evidence, and delivery into existing tools work together. Treating staff review as part of the architecture made the output fit the service process.', zh: '企业 AI 的价值来自知识时效、有效证据与现有工具集成的共同作用。把员工审核作为架构的一部分，才能让模型输出真正进入服务流程。' },
    note: { en: 'Public case study omits customer messages, ERP records, credentials, and internal configuration.', zh: '公开案例不展示客户消息、ERP 数据、密钥或内部配置。' },
  },
  {
    slug: 'caretrip-ops', index: '02',
    category: { en: 'Agent development · Hackathon', zh: 'Agent 开发 · 黑客松' },
    title: { en: 'CareTrip Ops · ZEIL', zh: 'CareTrip Ops · ZEIL' },
    subtitle: { en: 'A senior travel workflow with evidence checks and traveler approval.', zh: '为银发出行设计证据核验与本人确认的 Agent 工作流。' },
    period: { en: 'Sep – Oct 2026', zh: '2026.09 – 10' },
    role: { en: 'AI Agent development · ZEIL Hackathon', zh: 'AI Agent 开发 · ZEIL Hackathon' },
    tags: ['Python', 'FastAPI', 'LangGraph', 'PostgreSQL', 'React', 'TypeScript', 'Docker'],
    repo: 'https://github.com/KYiz/CareTripOps',
    status: { en: 'Working PoC; repository extended to V5', zh: '可运行 PoC；仓库已扩展至 V5' },
    overview: { en: 'The ZEIL Hackathon version began as a New Zealand travel Agent PoC. The current V5 repository extends it into a senior-travel service: requirements, synthetic supplier offers, per-claim accessibility evidence, ranking, traveler approval, payment and booking states, cancellation, and a trip companion. Supplier data is synthetic; payments are simulated or use Stripe test mode.', zh: 'ZEIL Hackathon 版本从新西兰旅行 Agent PoC 起步。当前仓库 V5 扩展为银发出行服务，覆盖需求澄清、模拟供应商报价、逐项无障碍证据核验、排序、本人审批、支付与预订状态、取消和旅途陪伴。供应商数据为模拟数据，支付为模拟流程或 Stripe 测试模式。' },
    challenge: { en: 'Travel suggestions can be generated by a model, but accessibility claims, exact prices and consequential state changes require independent evidence, deterministic rules and explicit traveler approval.', zh: '模型可以生成旅行建议，但无障碍声明、准确价格和关键状态变更需要独立证据、确定性规则与旅行者本人确认。' },
    responsibility: [
      { en: 'Built FastAPI business APIs and a constrained LangGraph workflow with PostgreSQL checkpoints, human interrupts and recovery.', zh: '开发 FastAPI 业务接口和受约束的 LangGraph 工作流，使用 PostgreSQL 检查点、人工中断与恢复机制。' },
      { en: 'Separated Planner / Reviewer model output from deterministic offer, evidence, budget, payment and booking rules.', zh: '将 Planner / Reviewer 模型输出与报价、证据、预算、支付和预订的确定性规则分开。' },
      { en: 'Connected React / TypeScript traveler, family and advisor views to the case workflow and approval states.', zh: '用 React / TypeScript 将旅行者、家属和顾问界面接入 Case 工作流与审批状态。' },
    ],
    architecture: [
      { en: 'React → FastAPI → PostgreSQL job queue → LangGraph worker → synthetic supplier and simulated or Stripe test payment interfaces.', zh: 'React → FastAPI → PostgreSQL 任务队列 → LangGraph Worker → 模拟供应商与模拟支付或 Stripe 测试接口。' },
      { en: 'The graph pauses for clarification, advisor review and traveler approval; per-claim evidence, quote snapshots, versions and idempotency keys guard decisions.', zh: '工作流在需求澄清、顾问复核和旅行者审批时暂停；逐项证据、报价快照、版本与幂等键保护关键决策。' },
    ],
    process: [
      { en: 'The Hackathon PoC in the October resume passed 65 backend and 11 frontend tests, including 18 PostgreSQL integration tests.', zh: '10 月简历所述的 Hackathon PoC 通过 65 项后端和 11 项前端测试，其中包括 18 项 PostgreSQL 集成测试。' },
      { en: 'The repository subsequently added accounts, family roles, an advisor console, trip companion, bilingual UI and browser-level accessibility checks.', zh: '仓库后续加入账号与家属角色、顾问控制台、旅途陪伴、双语界面及浏览器层面的无障碍检查。' },
    ],
    outcomes: [
      { en: 'The current V5 README reports 187 backend, 15 frontend and 21 browser tests passing locally; its CI also checks migrations and image builds.', zh: '当前 V5 README 记录 187 项后端、15 项前端及 21 项浏览器测试在本地通过；CI 还检查数据库迁移和镜像构建。' },
      { en: 'The repository includes a runnable demo with synthetic offers; live models and voice paths are optional and were not re-verified against real providers in V5.', zh: '仓库包含使用模拟报价的可运行演示；实时模型与语音路径为可选功能，V5 未再次针对真实服务商验证。' },
    ],
    reflection: { en: 'Model output is most useful here when evidence, payment and booking decisions stay under testable business rules and traveler control.', zh: '在这个项目中，模型负责辅助规划；证据、支付和预订决策应由可测试的业务规则与旅行者本人把控。' },
    note: { en: 'The October resume describes the earlier Hackathon PoC. This page also reflects later public V5 repository work. No production supplier or real-payment integration is claimed.', zh: '10 月简历描述的是较早的 Hackathon PoC；此页同时反映公开仓库后续的 V5 工作，不声称接入真实供应商或正式支付。' },
  },
  {
    slug: 'uav-advisory-agent', index: '03',
    category: { en: 'LLM application · Agent project', zh: '大模型应用 · Agent 项目' },
    title: { en: 'UAV Export Advisory Agent', zh: '无人机出口管制咨询 Agent' },
    subtitle: { en: 'Turn regulatory documents into a structured, five stage advisory workflow.', zh: '将复杂法规材料转为结构化五阶段咨询流程。' },
    period: { en: 'Jan – Jun 2025', zh: '2025.01 – 06' },
    role: { en: 'AI Agent development · New Zealand Customs', zh: 'AI Agent 开发 · 新西兰海关' },
    tags: ['IBM watsonx', 'RAG', 'LangGraph', 'ReAct', 'NZSGL', 'Prompt Lab'],
    status: { en: 'Advisory Agent PoC', zh: '咨询 Agent PoC' },
    overview: { en: 'For a New Zealand Customs advisory scenario, I developed a UAV export-controls Agent in IBM watsonx. The work connected regulatory knowledge, LangGraph / ReAct reasoning, five-stage decisions, and human review into a structured consultation workflow.', zh: '面向新西兰海关无人机出口管制咨询场景，在 IBM watsonx 环境中开发 Agent，将法规知识库、LangGraph / ReAct 推理、五阶段判断与人工复核连接成结构化咨询工作流。' },
    challenge: { en: 'Threshold values, incomplete descriptions, and dual use scenarios require more than a plausible answer. The agent needed to explain its grounds consistently across classification, controls, exemptions, and final advice.', zh: '阈值判断、不完整描述与军民两用场景需要清晰的推理过程。Agent 必须在清单分类、管制、豁免与最终建议之间保持依据和结论的一致性。' },
    responsibility: [
      { en: 'Organised NZSGL rules, UAV terminology, and public regulatory material into a retrieval-ready knowledge base.', zh: '整理 NZSGL 规则、UAV 术语与公开法规资料，构建可检索的知识库。' },
      { en: 'Designed the five-stage Agent workflow with state transitions, conditional branches, structured outputs, and human review.', zh: '设计五阶段 Agent 工作流，串联状态流转、条件分支、结构化输出与人工复核。' },
      { en: 'Used zero- and few-shot prompting to test more than 15 ambiguous, threshold, and dual-use scenarios.', zh: '运用零样本与少样本提示，测试 15 个以上模糊、临界及军民两用边界场景。' },
    ],
    architecture: [
      { en: 'Natural language case → IBM watsonx / LangGraph + ReAct → RAG retrieval from NZSGL and UAV terminology → staged reasoning → human review.', zh: '自然语言案例 → IBM watsonx / LangGraph + ReAct → NZSGL 与 UAV 术语 RAG 检索 → 分阶段推理 → 人工复核。' },
      { en: 'The five stages cover listing, initial conclusion, catch all control, exemption, and final conclusion.', zh: '五阶段包括清单判断、初步结论、兜底管制、豁免和最终结论。' },
    ],
    process: [
      { en: 'Built a 15+ case evaluation set covering ambiguous, borderline, and dual-use export-control questions.', zh: '构建 15 个以上案例的评测集，覆盖模糊、临界和军民两用出口管制问题。' },
      { en: 'Compared candidate model behaviour and selected LLaMA-3-70B-Instruct for the structured advisory output.', zh: '比较候选模型表现，选择 LLaMA-3-70B-Instruct 生成结构化咨询输出。' },
    ],
    outcomes: [
      { en: 'Built a five-stage advisory Agent PoC with regulatory retrieval, state-based branching, and auditable structured output.', zh: '形成五阶段咨询 Agent PoC，涵盖法规检索、基于状态的条件分支与可复核的结构化输出。' },
      { en: 'Regulatory judgment accuracy reached 88.24%, with 90.91% recall on controlled cases.', zh: '法规判断准确率为 88.24%，受控案例召回率为 90.91%。' },
    ],
    reflection: { en: 'Good prompts define the path from retrieved material to conclusions. Separating listing, controls, exemptions, and final advice makes inconsistencies easier to detect and gives reviewers a clear point of intervention.', zh: '好的提示工程要定义从检索材料到结论的路径。分离清单、管制、豁免与最终建议，便于定位推理不一致，也为人工审核提供明确入口。' },
    note: { en: 'Public case study uses sandbox scenarios and public regulatory material; application and partner data are excluded.', zh: '公开案例使用沙箱场景与公开法规材料，不展示申请或合作方内部数据。' },
  },
  {
    slug: 'meet-ta', index: '04',
    category: { en: 'Multimodal AI · Team prototype', zh: '多模态 AI · 团队原型' },
    title: { en: 'Meet-ta', zh: 'Meet-ta 情绪感知对话系统' },
    subtitle: { en: 'Give conversational AI a visual emotion signal and a multimodal interaction loop.', zh: '让对话 AI 感知视觉情绪，连接多模态交互。' },
    period: { en: 'Mar – Jul 2026', zh: '2026.03 – 07' },
    role: { en: 'Vision model development and multimodal integration', zh: '视觉模型开发与多模态集成' },
    tags: ['YOLOv8n-face', 'ConvNeXtV2-Huge', 'FastAPI', 'FasterWhisper', 'SQLite', 'Groq'],
    repo: 'https://github.com/KYiz/Meet-ta',
    status: { en: 'Working team prototype', zh: '团队可运行原型' },
    overview: { en: 'Meet-ta combines webcam, text, and voice with LLM responses and session memory for companionship and communication practice. I developed the visual emotion pipeline, from data and model selection to training, evaluation, and integration with the team’s browser prototype.', zh: 'Meet-ta 将摄像头、文本、语音与 LLM 回复及会话记忆结合，服务陪伴与沟通练习场景。我推进视觉情绪链路，从数据处理、模型选型到训练评估，再与团队浏览器原型集成。' },
    challenge: { en: 'An offline emotion model is only useful in this product when its inference, timing, and confidence can be integrated into the interaction loop.', zh: '离线情绪模型只有与交互链路中的推理、时间信息和置信度结合，才能对产品有用。' },
    responsibility: [
      { en: 'Researched emotion categories, cleaned data, compared detection and classification models, and evaluated vision results.', zh: '研究情绪类别、清洗数据、比较检测与分类模型，并评估视觉结果。' },
      { en: 'Trained and assessed the selected ConvNeXtV2 model using curves and a confusion matrix.', zh: '训练并通过曲线和混淆矩阵评估选定的 ConvNeXtV2 模型。' },
      { en: 'Integrated vision outputs with teammates’ voice, frontend, and avatar modules.', zh: '与队友的语音、前端和虚拟角色模块协作，完成视觉结果的系统集成。' },
    ],
    architecture: [
      { en: 'Webcam → YOLOv8n face detection → ConvNeXtV2 emotion classification.', zh: '摄像头 → YOLOv8n 人脸检测 → ConvNeXtV2 情绪分类。' },
      { en: 'Text / FasterWhisper transcript + turn-level emotion timeline + persona and SQLite memory → FastAPI → Groq Llama-3.3-70B response; optional TTS reads it aloud.', zh: '文本 / FasterWhisper 转写 + 当前轮次情绪时间线 + 角色设定与 SQLite 记忆 → FastAPI → Groq Llama-3.3-70B 回复；可选 TTS 朗读。' },
    ],
    process: [
      { en: 'Compared five visual classifiers, using validation curves and confusion matrices to select ConvNeXtV2-Huge.', zh: '比较五种视觉分类模型，通过验证曲线和混淆矩阵选定 ConvNeXtV2-Huge。' },
      { en: 'Used 1.3-second sampling and three-prediction smoothing, then fused the emotion timeline with text or speech for each conversation turn.', zh: '以 1.3 秒采样和三次预测平滑降低波动，再将情绪时间线与每轮文本或语音进行后期融合。' },
    ],
    outcomes: [
      { en: 'The selected model achieved 85.69% validation accuracy and 85.34% test accuracy.', zh: '选定模型取得 85.69% 验证准确率与 85.34% 测试准确率。' },
      { en: 'The repository includes a FastAPI browser app with webcam emotion detection, text and voice chat, English / Chinese switching, and optional TTS. Model weights are distributed separately.', zh: '仓库提供 FastAPI 浏览器应用，支持摄像头情绪识别、文字与语音对话、英中切换及可选 TTS；模型权重需单独获取。' },
    ],
    reflection: { en: 'A vision model adds product value when its outputs fit the interaction loop. Turn level fusion connects emotion timing and confidence to conversation context while leaving room for text and voice signals.', zh: '视觉模型的产品价值来自与交互链路的衔接。按轮次融合，让情绪的时间与置信度进入对话上下文，同时结合文本和语音信号。' },
  },
  {
    slug: 'discourse-research', index: '05',
    category: { en: 'NLP · Experimental research', zh: 'NLP · 实验研究' },
    title: { en: 'Implicit Discourse Relation Research', zh: '隐式篇章关系分类研究' },
    subtitle: { en: 'Test how positional and structural signals affect discourse classification.', zh: '用受控实验检验位置与结构信号的分类价值。' },
    period: { en: 'Jun – Nov 2025', zh: '2025.06 – 11' },
    role: { en: 'Data processing, model tuning, and experiments', zh: '数据处理、模型调参与实验执行' },
    tags: ['TED-MDB', 'MiniLM', 'PyTorch', 'spaCy', 'Ablation'],
    repo: 'https://github.com/KYiz/CS764_Implicit_discourse_indexing_research_proejct',
    status: { en: 'Completed research project', zh: '已完成研究项目' },
    overview: { en: 'The project tested whether positional and structural cues improve explicit versus implicit discourse relation classification with a fixed MiniLM backbone.', zh: '项目在固定 MiniLM 骨干上，检验位置与结构提示能否改进显式与隐式篇章关系分类。' },
    challenge: { en: 'With limited annotated data, the challenge was to separate cue effects from training variation. Reproducible splits, a fixed backbone, and multi seed experiments made the comparison meaningful.', zh: '在有限标注数据上，需要区分提示效果与训练波动。通过可复现划分、固定模型骨干与多随机种子实验，让模型比较具备解释力。' },
    responsibility: [
      { en: 'Processed TED-MDB annotations and extracted Arg1 / Arg2 span pairs.', zh: '处理 TED-MDB 标注并提取 Arg1 / Arg2 片段对。' },
      { en: 'Ran model tuning and 8 cue configurations across 5 random seeds, with metric and loss visualization.', zh: '执行模型调参、8 组提示配置 × 5 个随机种子实验，并可视化指标与损失。' },
      { en: 'Analyzed metrics and training curves, created visualizations, and contributed to the research report, working with a collaborator who led cue and experiment design.', zh: '负责指标分析、训练曲线与可视化，并参与研究报告写作；与主导提示及实验设计的合作者协作。' },
    ],
    architecture: [
      { en: 'TED-MDB annotations → data cleaning and span extraction → structural cue inputs → MiniLM experiments → evaluation.', zh: 'TED-MDB 标注 → 数据清洗与片段提取 → 结构提示输入 → MiniLM 实验 → 评估。' },
      { en: 'Cues represent length ratio, dependency depth ratio, and argument distance.', zh: '提示分别表示长度比、依存深度比和论元距离。' },
    ],
    process: [
      { en: 'Kept the model backbone and training protocol fixed to isolate cue effects.', zh: '固定模型骨干和训练协议，隔离提示的影响。' },
      { en: 'Compared accuracy, F1, precision, recall, variance, and loss behavior across runs.', zh: '比较多次运行的准确率、F1、精确率、召回率、方差和损失行为。' },
    ],
    outcomes: [
      { en: 'The repository’s five-seed summary reports a no-label baseline of 0.7116 ± 0.0362 accuracy and 0.6332 ± 0.0754 F1.', zh: '仓库的五随机种子汇总显示，无标签基准准确率为 0.7116 ± 0.0362，F1 为 0.6332 ± 0.0754。' },
      { en: 'Across 40 experimental runs, the tested cues did not consistently improve the baseline, identifying the limits of this cue injection approach.', zh: '通过 40 次实验发现，当前提示未稳定改善基准，明确了该提示注入方式的适用限制。' },
    ],
    reflection: { en: 'Repeated experiments revealed where extra structure did and did not help. This supports more focused next experiments on corpus scale and alternative cue injection, rather than choosing a model from a single run.', zh: '重复实验揭示了额外结构信号的实际作用，帮助下一轮研究聚焦语料规模与提示注入方式，也形成了基于多次比较进行模型判断的工作方法。' },
  },
]

const projectExperience = [
  { projectSlug: 'allied-medical-rag', title: { en: 'AI Engineering Intern', zh: 'AI 工程实习生' }, place: 'Allied Medical Limited', description: { en: 'Connected multimodal RAG, source refresh, and Front API integration to the service team’s workflow.', zh: '推进多模态 RAG、知识刷新与 Front API 集成，连接企业客服工作流。' } },
  { projectSlug: 'meet-ta', title: { en: 'Vision AI & multimodal integration', zh: '视觉 AI 与多模态集成' }, place: 'University of Auckland', description: { en: 'Developed and evaluated the visual emotion pipeline, then integrated it into Meet-ta’s conversational prototype.', zh: '开发与评估视觉情绪链路，接入 Meet-ta 多模态对话原型。' } },
  { projectSlug: 'discourse-research', title: { en: 'NLP research & model experiments', zh: 'NLP 研究与模型实验' }, place: 'University of Auckland', description: { en: 'Built the TED-MDB data pipeline and ran 40 MiniLM experiments with metrics and visual analysis.', zh: '完成 TED-MDB 数据处理与 40 次 MiniLM 实验，进行指标分析与可视化。' } },
  { projectSlug: 'uav-advisory-agent', title: { en: 'LLM application & agent design', zh: '大模型应用与智能体设计' }, place: 'New Zealand Customs', description: { en: 'Built a five-stage UAV export-controls advisory Agent and evaluated 15+ boundary scenarios.', zh: '开发五阶段无人机出口管制咨询 Agent，并用 15 个以上边界场景进行评测。' } },
  { projectSlug: 'caretrip-ops', title: { en: 'CareTrip Ops · Agent development', zh: 'CareTrip Ops · Agent 开发' }, place: 'ZEIL Hackathon', description: { en: 'Built and tested the travel agent workflow with verifiable quotes, approval checkpoints, and simulated orders.', zh: '开发旅行 Agent 工作流，覆盖报价核验、用户确认和模拟订单，并完成前后端测试。' } },
].map(item => ({ ...item, kind: 'project' as const, period: projects.find(project => project.slug === item.projectSlug)!.period }))

export const experience = [
  ...projectExperience,
  {
    kind: 'volunteer' as const,
    period: { en: '2026 · 10 hours', zh: '2026 · 志愿服务 10 小时' },
    title: {
      en: 'Mobile Support Team Volunteer – Traffic & Security Support',
      zh: '流动支援组志愿者 · 交通与安保支援',
    },
    place: 'Auckland Moon Festival',
    description: {
      en: 'Supported traffic management, road condition monitoring and event security; helped coordinate pedestrian and vehicle flow, adapt to changing on-site conditions, and assist other volunteer teams as needed.',
      zh: '参与现场交通管理、道路状况巡查和活动安保；协助疏导行人与车辆、维护会场周边通行秩序，并根据现场变化支援其他志愿者团队。',
    },
    certificate: './docs/Auckland_Moon_Festival_2026_Volunteer_Certificate.pdf',
  },
]

export const education = [
  { degree: { en: 'Master of Artificial Intelligence · First Class Honours', zh: '人工智能硕士 · 一等荣誉' }, school: 'University of Auckland', period: '2025.03 – 2026.09' },
  { degree: { en: 'BSc Statistics / BCom Finance', zh: '统计学理学学士 / 金融商学学士' }, school: 'University of Auckland', period: '2019.03 – 2024.09' },
]

export const awards = [
  { title: { en: 'Weekly Champion', zh: '周冠军' }, event: 'IKCEST 2025 Global Competition · AI Model Development', kind: { en: 'Competition award', zh: '竞赛奖项' } },
  { title: { en: 'Top 4 Nationwide', zh: '新西兰全国前四' }, event: 'NZ eVouch Growth Marketing Case Competition', kind: { en: 'Competition result', zh: '竞赛成绩' } },
]

export const categories = [
  { slug: 'role', name: { en: 'The person', zh: '角色' }, subtitle: { en: 'Mindset, story & experience', zh: '背景、工作方式与经历' }, image: './visuals/role.webp', link: '#/about', projectSlugs: [] },
  { slug: 'product', name: { en: 'Product', zh: '产品' }, subtitle: { en: 'From a need to a workflow', zh: '从需求到可执行工作流' }, image: './visuals/product.webp', link: '#/categories/product', projectSlugs: ['caretrip-ops', 'meet-ta'] },
  { slug: 'development', name: { en: 'Development', zh: '开发' }, subtitle: { en: 'Engineering useful applications', zh: 'AI 应用与工程集成' }, image: './visuals/development.webp', link: '#/categories/development', projectSlugs: ['allied-medical-rag', 'meet-ta'] },
  { slug: 'agent', name: { en: 'Agents', zh: 'Agent' }, subtitle: { en: 'Reason, retrieve & collaborate', zh: '检索、推理与协同' }, image: './visuals/agent.webp', link: '#/categories/agent', projectSlugs: ['uav-advisory-agent', 'caretrip-ops'] },
  { slug: 'algorithm', name: { en: 'Algorithms', zh: '算法' }, subtitle: { en: 'Train, compare & understand', zh: '训练、比较与模型理解' }, image: './visuals/algorithm.webp', link: '#/categories/algorithm', projectSlugs: ['discourse-research', 'meet-ta'] },
]

export const strengths = [
  { title: { en: 'Connect the engineering chain', zh: '打通 AI 工程链路' }, description: { en: 'From knowledge refresh and retrieval to APIs and service tools.', zh: '贯通知识刷新、检索、API 与业务工具集成。' }, link: '#/projects/allied-medical-rag', category: 'development' },
  { title: { en: 'Turn needs into architecture', zh: '把需求转化为系统设计' }, description: { en: 'Agent workflows, quote verification, and approval checkpoints.', zh: '实现 Agent 工作流、报价核验与用户确认。' }, link: '#/projects/caretrip-ops', category: 'product' },
  { title: { en: 'Structure agent reasoning', zh: '设计结构化 Agent 推理' }, description: { en: 'Connect retrieval, prompts, and scenario tests into a consistent flow.', zh: '连接检索、提示与场景测试，形成一致的推理流程。' }, link: '#/projects/uav-advisory-agent', category: 'agent' },
  { title: { en: 'Understand models through experiments', zh: '通过实验理解模型' }, description: { en: 'Controlled comparisons, multiple seeds, and visual analysis.', zh: '用受控比较、多随机种子与可视化定位模型表现。' }, link: '#/projects/discourse-research', category: 'algorithm' },
  { title: { en: 'Build across disciplines', zh: '推动跨模块协作' }, description: { en: 'Bring vision models into a shared multimodal product.', zh: '衔接视觉模型与交互模块，共同完成多模态产品。' }, link: '#/projects/meet-ta', category: 'role' },
]

export const projectVisuals: Record<string, string> = {
  'allied-medical-rag': './visuals/development.webp',
  'caretrip-ops': './visuals/product.webp',
  'uav-advisory-agent': './visuals/agent.webp',
  'meet-ta': './visuals/role.webp',
  'discourse-research': './visuals/algorithm.webp',
}

export const portfolioDocument = {
  pages: 16,
  year: 2026,
  previewPath: './docs/portfolio-pages',
}

export const careerRoles = [
  { en: 'AI application developer', zh: 'AI 应用开发工程师' },
  { en: 'Applied AI engineer', zh: 'AI 应用工程师' },
]

export const homeHighlights = [
  { value: String(projects.length), label: { en: 'Core case studies', zh: '核心案例' } },
  { value: '8 × 5', label: { en: 'NLP settings × seeds', zh: 'NLP 配置 × 随机种子' } },
  { value: String(careerRoles.length), label: { en: 'Career directions', zh: '求职方向' } },
]

export const workingStyle = [
  { title: { en: 'Curious, then methodical', zh: '带着问题动手验证' }, description: { en: 'I break questions into experiments, compare multiple runs, and use metrics and visualizations to understand what changes.', zh: '习惯把问题拆成可执行实验，通过多次比较、指标与可视化理解变化，而后形成判断。' }, link: '#/projects/discourse-research' },
  { title: { en: 'Own a module, connect the team', zh: '把自己的模块做深，把接口接好' }, description: { en: 'In Meet-ta, I worked through the vision pipeline and collaborated on how its outputs fit voice, interface, and conversation modules.', zh: '在 Meet-ta 中深入完成视觉链路，也关注输出如何与语音、界面和对话模块衔接。' }, link: '#/projects/meet-ta' },
  { title: { en: 'Think through the next step', zh: '不仅想流程，也想异常与下一步' }, description: { en: 'In CareTrip Ops, I built interruption recovery, quote verification, and explicit user approval into the workflow.', zh: '在 CareTrip Ops 中，将中断恢复、报价核验与用户确认落实到工作流。' }, link: '#/projects/caretrip-ops' },
]
