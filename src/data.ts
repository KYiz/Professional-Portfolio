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
    subtitle: { en: 'Combine email text, images, PDFs and ERP data into evidence-backed parts suggestions.', zh: '融合邮件文本、图片、PDF 和 ERP 数据，生成有依据的零件建议。' },
    period: { en: 'Mar – Jul 2026', zh: '2026.03 – 07' },
    role: { en: 'AI Engineering Intern · Allied Medical Limited', zh: 'AI 工程实习生 · Allied Medical Limited' },
    tags: ['Java', 'Spring Boot', 'Spring AI', 'Azure GPT-4o', 'Hybrid RAG', 'pgvector', 'MongoDB', 'React'],
    status: { en: 'Internship delivery', zh: '实习项目交付' },
    overview: { en: 'Engineered an existing parts-identification prototype into a staff-facing system in continued use. It accepts Front email text and image / PDF attachments, analyzes visual clues with Azure GPT-4o, searches manuals and ERP records, and returns parts suggestions with evidence for staff review.', zh: '将已有零件识别原型工程化为持续使用的员工业务系统。系统接收 Front 邮件正文及图片、PDF 附件，用 Azure GPT-4o 分析视觉线索，结合手册与 ERP 数据检索，输出带依据的零件建议供员工审核。' },
    challenge: { en: 'More than 50,000 stock records, technical diagrams, and mixed file formats made finding the right replacement part difficult. The engineering challenge was to keep this knowledge current and return useful evidence inside the existing service tools.', zh: '50,000 多条库存记录、技术图纸与多种格式资料，让替换零件定位变得复杂。工程重点是保持知识及时更新，并在现有客服工具中返回可用的候选与依据。' },
    responsibility: [
      { en: 'Built the Java / Spring Boot and Spring AI backend path from Front webhook and REST intake through attachment retrieval, text / image / PDF parsing and Azure GPT-4o analysis.', zh: '负责 Java / Spring Boot、Spring AI 后端链路：从 Front Webhook 与 REST 接入，到附件获取、文本 / 图片 / PDF 解析和 Azure GPT-4o 分析。' },
      { en: 'Implemented PostgreSQL / pgvector Hybrid RAG, retrieving Top-20 candidates and reranking to Top-5; added evidence and provisional confidence levels for human review.', zh: '实现 PostgreSQL / pgvector 混合 RAG：先召回 Top-20，再重排筛选 Top-5；设置证据级与暂定级置信度，供人工复核。' },
      { en: 'Connected OneDrive source refresh, asynchronous processing, React review and editable Front internal comments; worked with the Front team on webhook / HTTPS issues and business acceptance.', zh: '打通 OneDrive 资料刷新、异步处理、React 审核界面和可编辑的 Front 内部评论，并与 Front 团队排查 Webhook / HTTPS 问题及完成业务验收。' },
    ],
    architecture: [
      { en: 'Front email body + image / PDF attachments → text extraction and GPT-4o visual descriptions → Hybrid RAG over ERP rows, manuals and image references → Top-5 suggestions with cited evidence.', zh: 'Front 邮件正文 + 图片 / PDF 附件 → 文本提取与 GPT-4o 视觉描述 → 对 ERP、手册和参考图片进行混合检索 → 输出带证据的 Top-5 候选。' },
      { en: 'Spring Boot / Spring AI orchestrated retrieval and analysis; PostgreSQL / pgvector held ERP data and embeddings, while MongoDB held leads and workflow state.', zh: 'Spring Boot / Spring AI 编排检索和分析；PostgreSQL / pgvector 保存 ERP 数据与向量，MongoDB 保存线索及工作流状态。' },
      { en: 'React review UI → staff edits → Front API internal comment; the system never sends an automatic customer-facing reply.', zh: 'React 审核界面 → 员工编辑 → Front API 内部评论；系统不会自动向客户发送回复。' },
    ],
    process: [
      { en: 'Used the Windows 365 Cloud PC OneDrive folder for normal file ingestion and embedding refresh; SFTP remained a fallback.', zh: '通过 Windows 365 Cloud PC 的 OneDrive 文件夹完成常规资料摄入与向量刷新，SFTP 作为备用路径。' },
      { en: 'Connected Front webhooks to asynchronous analysis with @Async / CompletableFuture, confidence thresholds, and staff review.', zh: '将 Front Webhook 接入 @Async / CompletableFuture 异步分析，设置置信度阈值并保留人工审核。' },
      { en: 'Used Evidence ≥0.80 and Provisional 0.55–0.79 confidence bands; uncertain matches remain reviewable instead of being treated as confirmed parts.', zh: '设置 Evidence ≥0.80 与 Provisional 0.55–0.79 两级置信度；不确定匹配进入审核，不当作已确认零件。' },
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
      { en: 'Defined Pydantic input / output schemas, bounded model calls and typed skills for requirement extraction, offer comparison, evidence checks and approval preparation.', zh: '定义 Pydantic 输入输出结构、模型调用上限及类型化 Skills，覆盖需求提取、报价比较、证据核验和审批准备。' },
    ],
    architecture: [
      { en: 'React → FastAPI → PostgreSQL job queue → LangGraph worker → synthetic supplier and simulated or Stripe test payment interfaces.', zh: 'React → FastAPI → PostgreSQL 任务队列 → LangGraph Worker → 模拟供应商与模拟支付或 Stripe 测试接口。' },
      { en: 'The graph pauses for clarification, advisor review and traveler approval; per-claim evidence, quote snapshots, versions and idempotency keys guard decisions.', zh: '工作流在需求澄清、顾问复核和旅行者审批时暂停；逐项证据、报价快照、版本与幂等键保护关键决策。' },
      { en: 'A single active job per trip, worker heartbeat, explicit recovery and idempotent external writes guard replay and interruption; Redis shares rate limits across API processes.', zh: '每个旅程只允许一个活动任务，通过 Worker 心跳、显式恢复和幂等外部写入控制中断与重放；Redis 在多个 API 进程间共享限流。' },
    ],
    process: [
      { en: 'The Hackathon PoC in the October resume passed 65 backend and 11 frontend tests, including 18 PostgreSQL integration tests.', zh: '10 月简历所述的 Hackathon PoC 通过 65 项后端和 11 项前端测试，其中包括 18 项 PostgreSQL 集成测试。' },
      { en: 'The repository subsequently added accounts, family roles, an advisor console, trip companion, bilingual UI and browser-level accessibility checks.', zh: '仓库后续加入账号与家属角色、顾问控制台、旅途陪伴、双语界面及浏览器层面的无障碍检查。' },
      { en: 'The demo walks through a three-day Auckland trip: a contradicted offer is blocked, an unproven claim reaches advisor review, and a verified offer proceeds only after the traveler approves its price.', zh: '演示以奥克兰三日行程为例：证据冲突的报价被阻断，证据不足的声明转顾问审核，核验通过的报价只有在旅行者确认价格后才继续。' },
    ],
    outcomes: [
      { en: 'The current V5 README reports 187 backend, 15 frontend and 21 browser tests passing locally; its CI also checks migrations and image builds.', zh: '当前 V5 README 记录 187 项后端、15 项前端及 21 项浏览器测试在本地通过；CI 还检查数据库迁移和镜像构建。' },
      { en: 'The repository includes a runnable demo with synthetic offers; live models and voice paths are optional and were not re-verified against real providers in V5.', zh: '仓库包含使用模拟报价的可运行演示；实时模型与语音路径为可选功能，V5 未再次针对真实服务商验证。' },
      { en: 'V5 also includes an evidence-citing travel guide, a printable trip card, family updates, cancellation / refund rules and English / Chinese accessibility checks.', zh: 'V5 还包含引用证据的旅行向导、可打印行程卡、家属同步、取消与退款规则，以及英中双语无障碍检查。' },
    ],
    reflection: { en: 'Model output is most useful here when evidence, payment and booking decisions stay under testable business rules and traveler control.', zh: '在这个项目中，模型负责辅助规划；证据、支付和预订决策应由可测试的业务规则与旅行者本人把控。' },
    note: { en: 'The October resume describes the earlier Hackathon PoC. This page also reflects later public V5 repository work. No production supplier or real-payment integration is claimed.', zh: '10 月简历描述的是较早的 Hackathon PoC；此页同时反映公开仓库后续的 V5 工作，不声称接入真实供应商或正式支付。' },
  },
  {
    slug: 'uav-advisory-agent', index: '03',
    category: { en: 'AI Agent · Internship', zh: 'AI Agent · 实习' },
    title: { en: 'UAV Export Advisory Agent', zh: '无人机出口管制咨询 Agent' },
    subtitle: { en: 'Python / LangGraph workflow grounded in NZSGL rules through IBM watsonx.', zh: '结合 Python / LangGraph 与 IBM watsonx，将 NZSGL 法规转为可追溯的咨询流程。' },
    period: { en: 'Jan – Jun 2025', zh: '2025.01 – 06' },
    role: { en: 'Prompt engineering and Agent development · New Zealand Customs', zh: '提示工程与 Agent 开发 · 新西兰海关' },
    tags: ['Python', 'IBM watsonx', 'Agent Lab', 'Prompt Lab', 'RAG', 'LangGraph', 'ReAct'],
    status: { en: 'Sandbox advisory Agent PoC', zh: '沙箱咨询 Agent PoC' },
    overview: { en: 'Built a sandbox proof of concept for UAV export-control advice under the New Zealand Strategic Goods List. Python / LangGraph organised retrieval and stepwise reasoning, while IBM watsonx supplied model and prompt tooling. The Agent turns a natural-language UAV description into a structured, evidence-linked recommendation for human review.', zh: '面向新西兰战略物资清单（NZSGL）开发无人机出口管制咨询沙箱 PoC。使用 Python / LangGraph 组织检索与分阶段推理，以 IBM watsonx 提供模型和提示词工具，将自然语言技术描述转为有法规依据的结构化建议，供人工审核。' },
    challenge: { en: 'UAV specifications often use different terms from regulatory text. Endurance thresholds, incomplete descriptions, catch-all controls and exemption conditions can change the conclusion, so a fluent answer alone is not sufficient.', zh: '无人机技术描述与法规术语不完全一致，续航阈值、信息缺失、全面管制和豁免条件都可能改变结论，因此不能只生成流畅回答。' },
    responsibility: [
      { en: 'As a prompt engineer, organised NZSGL Parts 1–2, catch-all / exemption material and UAV terminology into a searchable knowledge base; worked on prompt design and testing in watsonx Prompt Lab / Agent Lab.', zh: '作为提示工程成员，整理 NZSGL 第 1–2 部分、全面管制与豁免材料及无人机术语，构建可检索知识库，并在 watsonx Prompt Lab / Agent Lab 设计、测试提示词。' },
      { en: 'Used Python and LangGraph / ReAct to connect document search, conditional routing and a five-stage advisory output: listing, initial assessment, catch-all, exemption and final conclusion.', zh: '使用 Python 与 LangGraph / ReAct 串联文档检索、条件路由及五阶段输出：清单判断、初步评估、全面管制、豁免判断和最终结论。' },
      { en: 'Refined zero-shot and few-shot prompts and tested ambiguous, endurance-threshold and dual-use synthetic cases; compared IBM watsonx model behaviour for readable, consistent advice.', zh: '迭代零样本和少样本提示，测试模糊描述、续航临界值与军民两用的模拟案例，并比较 IBM watsonx 模型在可读性与一致性上的表现。' },
    ],
    architecture: [
      { en: 'UAV description → Python / LangGraph state → watsonx document search over NZSGL and terminology → ReAct-style reasoning → five-step structured output → human review.', zh: '无人机描述 → Python / LangGraph 状态 → watsonx 文档检索 NZSGL 与术语 → ReAct 式推理 → 五阶段结构化输出 → 人工复核。' },
      { en: 'IBM watsonx Prompt Lab and Agent Lab supported prompt and Agent development; project experiments compared LLaMA-3-70B and Granite-3-2B for structured advice.', zh: 'IBM watsonx Prompt Lab 与 Agent Lab 支持提示词和 Agent 开发；项目实验比较了 LLaMA-3-70B 与 Granite-3-2B 的结构化建议表现。' },
    ],
    process: [
      { en: 'Designed explicit output rules for each regulatory stage and required retrieved grounds before a permit recommendation.', zh: '为每个法规阶段设计明确的输出规则，要求最终建议具备检索依据。' },
      { en: 'Used more than 15 synthetic standard and edge cases to iterate prompts and check threshold, exemption and evidence-traceability behaviour.', zh: '使用 15 个以上标准与边界模拟案例迭代提示词，检查阈值、豁免和证据追溯表现。' },
    ],
    outcomes: [
      { en: 'Delivered a five-stage advisory PoC, architecture, prompts, validation and demo. The October resume reports 88.24% regulatory judgment accuracy and 90.91% recall on controlled cases.', zh: '交付五阶段咨询 PoC、架构、提示词、验证与演示。10 月简历记录法规判断准确率 88.24%、受管制案例召回率 90.91%。' },
      { en: 'The output separates listing, catch-all, exemption and final recommendation with supporting evidence, giving reviewers an auditable path.', zh: '输出分开展示清单、全面管制、豁免与最终建议及其依据，为审核人员提供可追溯路径。' },
    ],
    reflection: { en: 'For a compliance Agent, retrieval and a structured decision path matter as much as model fluency. Human reviewers remain responsible for formal determinations.', zh: '合规场景中，法规检索和结构化判断路径与模型表达能力同样重要；正式决定仍由人工审核人员负责。' },
    note: { en: 'Sandbox cases and public regulatory material only. This is advisory support, not a formal export-control decision.', zh: '仅使用模拟案例与公开法规材料；系统提供咨询辅助，不替代正式出口管制决定。' },
  },
  {
    slug: 'meet-ta', index: '04',
    category: { en: 'Multimodal AI · Team prototype', zh: '多模态 AI · 团队原型' },
    title: { en: 'Meet-ta', zh: 'Meet-ta 情绪感知对话系统' },
    subtitle: { en: 'Train a visual emotion model and bring it into a voice-enabled conversation loop.', zh: '训练视觉情绪模型，并接入支持语音的对话系统。' },
    period: { en: 'Mar – Jul 2026', zh: '2026.03 – 07' },
    role: { en: 'Vision model training, inference API and multimodal integration', zh: '视觉模型训练、推理接口与多模态集成' },
    tags: ['YOLOv8n-face', 'ConvNeXtV2-Huge', 'FastAPI', 'FasterWhisper', 'SQLite', 'Groq'],
    repo: 'https://github.com/KYiz/Meet-ta',
    status: { en: 'Working team prototype', zh: '团队可运行原型' },
    overview: { en: 'Meet-ta is a low-pressure virtual conversation practice system. I took the visual emotion pipeline from three-dataset preparation and five-model comparison through ConvNeXtV2-Huge training, evaluation, face detection and real-time inference, then connected it to the team’s Python / FastAPI conversation app with speech, memory and optional voice output.', zh: 'Meet-ta 面向低压力虚拟对话练习。我负责视觉情绪链路：整合三套数据、比较五种模型、训练与评估 ConvNeXtV2-Huge，完成人脸检测和实时推理，再接入团队的 Python / FastAPI 对话应用，与语音、记忆和可选语音输出形成完整交互。' },
    challenge: { en: 'An offline emotion model is only useful in this product when its inference, timing, and confidence can be integrated into the interaction loop.', zh: '离线情绪模型只有与交互链路中的推理、时间信息和置信度结合，才能对产品有用。' },
    responsibility: [
      { en: 'Prepared AffectNet-HQ, RAF-DB and FER2013 for seven-class emotion classification in PyTorch; compared five vision backbones and trained / evaluated ConvNeXtV2-Huge.', zh: '使用 PyTorch 整合 AffectNet-HQ、RAF-DB 和 FER2013，完成七类情绪数据准备；比较五种视觉骨干并训练、评估 ConvNeXtV2-Huge。' },
      { en: 'Built the YOLOv8n-face detection and emotion-inference path, with 1.3-second sampling, three-prediction smoothing and a turn-level emotion timeline.', zh: '构建 YOLOv8n-face 人脸检测与情绪推理链路，采用 1.3 秒采样、三次预测平滑和按对话轮次累计的情绪时间线。' },
      { en: 'Developed Python / FastAPI vision and LLM interfaces, fused visual labels with FasterWhisper transcripts and SQLite history, and integrated with the team’s TTS and Live2D work.', zh: '开发 Python / FastAPI 视觉推理与 LLM 接口，将视觉标签、FasterWhisper 转写和 SQLite 历史记忆进行后期融合，并与团队的 TTS、Live2D 模块联调。' },
    ],
    architecture: [
      { en: 'Webcam → YOLOv8n-face detection → ConvNeXtV2-Huge seven-class inference → smoothed emotion timeline.', zh: '摄像头 → YOLOv8n-face 人脸检测 → ConvNeXtV2-Huge 七类情绪推理 → 平滑后的情绪时间线。' },
      { en: 'Text / FasterWhisper transcript + turn-level emotion timeline + persona and SQLite memory → FastAPI → Groq Llama-3.3-70B response; optional TTS reads it aloud.', zh: '文本 / FasterWhisper 转写 + 当前轮次情绪时间线 + 角色设定与 SQLite 记忆 → FastAPI → Groq Llama-3.3-70B 回复；可选 TTS 朗读。' },
    ],
    process: [
      { en: 'Compared five model backbones using validation curves and a confusion matrix, then selected ConvNeXtV2-Huge for the visual module.', zh: '结合验证曲线和混淆矩阵比较五种骨干模型，选定 ConvNeXtV2-Huge 作为视觉模块。' },
      { en: 'Designed late fusion at the conversation-turn level: the visual timeline, spoken or typed text, persona and recovered SQLite memory form the LLM context.', zh: '按对话轮次设计后期融合：视觉情绪时间线、语音或文字、角色设定与 SQLite 历史记忆共同构成 LLM 上下文。' },
    ],
    outcomes: [
      { en: 'The selected model achieved 85.69% validation accuracy and 85.34% test accuracy.', zh: '选定模型取得 85.69% 验证准确率与 85.34% 测试准确率。' },
      { en: 'The repository includes a FastAPI browser app with webcam emotion detection, text and voice chat, English / Chinese switching, and optional TTS. Model weights are distributed separately.', zh: '仓库提供 FastAPI 浏览器应用，支持摄像头情绪识别、文字与语音对话、英中切换及可选 TTS；模型权重需单独获取。' },
      { en: 'The team connected emotion-aware LLM replies, speech input and avatar feedback into an end-to-end interaction prototype; the vision pipeline and its API integration were my main contributions.', zh: '团队将情绪感知回复、语音输入与虚拟角色反馈串成端到端原型；视觉链路及其接口集成是我的主要贡献。' },
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
  {
    slug: 'vibe-kangbo', index: '06',
    category: { en: 'Creative coding · Video', zh: '创意编程 · 视频' },
    title: { en: 'Vibe Coding Knowledge Showcase · Kondratiev Wave', zh: 'Vibe Coding知识大赏-康波' },
    subtitle: { en: 'A short-form episode with an editable video project.', zh: '从内容结构到可编辑视频工程的短片制作。' },
    period: { en: 'Oct 2026', zh: '2026.10' },
    role: { en: 'Video content and production', zh: '视频内容与制作' },
    tags: ['HyperFrames', 'HTML / CSS / SVG', 'GSAP', 'Python', 'FFmpeg'],
    repo: 'https://github.com/KYiz/vibe-kangbo-K-wave',
    status: { en: 'Episode 1 complete', zh: '第一集成片' },
    overview: { en: 'Built the first Vibe Coding Knowledge Showcase episode around Kondratiev waves, graduate hiring and individual choice. It is a code-rendered vertical explainer: the public repository includes research notes, content structure, storyboards, editable HyperFrames source, audio work and the finished video.', zh: '围绕康波周期、毕业招聘与个人选择制作“Vibe Coding知识大赏”第一集。这是一支由代码渲染的竖屏知识短片；公开仓库包含资料整理、内容结构、分镜、可编辑 HyperFrames 工程、音频制作与成片。' },
    challenge: { en: 'Condense an economic concept and its personal relevance into a short vertical video without losing the limits of the claims.', zh: '在短竖屏视频中讲清经济概念与个人选择的关系，同时保留事实边界。' },
    responsibility: [
      { en: 'Turned source material into a five-part argument and storyboard, including the boundary that macroeconomic cycles do not determine an individual’s fate.', zh: '把原始资料整理为五段论述与分镜，并明确宏观经济周期不能决定个人命运的事实边界。' },
      { en: 'Built 17 scenes with HTML, CSS and SVG, using GSAP timelines for transitions and motion; retained the editable composition.', zh: '用 HTML、CSS 和 SVG 制作 17 个场景，以 GSAP 时间轴控制切换与运动，并保留可编辑的画面工程。' },
      { en: 'Mixed music and sound effects with Python / FFmpeg, checked the render and kept asset and review records.', zh: '使用 Python / FFmpeg 混合配乐与音效，核对导出成片并保存素材和审核记录。' },
    ],
    architecture: [
      { en: 'Research and storyboard → HTML / SVG scenes + GSAP timelines → HyperFrames video track; Python / FFmpeg audio mix supplies the sound track → MP4 render.', zh: '资料与分镜 → HTML / SVG 场景及 GSAP 时间轴 → HyperFrames 视频轨；Python / FFmpeg 生成音频轨 → MP4 成片。' },
    ],
    process: [
      { en: 'Used reproducible visual scripts for selected effects and ran the project check, preview and render workflow before reviewing output.', zh: '对部分视觉效果使用可复现脚本，按工程检查、预览、渲染和成片核对的流程迭代。' },
    ],
    outcomes: [
      { en: 'Completed a 134.3-second episode at 1080 × 1920 and 30 fps, with H.264 video, AAC audio and an editable source project.', zh: '完成 134.3 秒、1080 × 1920、30 fps 的第一集，输出 H.264 视频、AAC 音频及可编辑源工程。' },
    ],
    reflection: { en: 'A compact explainer works best when every visual supports a specific point and the source material remains traceable.', zh: '短视频的信息表达需要让每个画面服务于具体观点，并保留可追溯的素材依据。' },
  },
  {
    slug: 'massage-mayhem', index: '07',
    category: { en: 'Game prototype', zh: '游戏原型' },
    title: { en: 'Massage Mayhem', zh: '按摩大混乱' },
    subtitle: { en: 'A playable massage-shop rules and interaction prototype.', zh: '可玩的按摩店规则与交互原型。' },
    period: { en: 'Oct 2026', zh: '2026.10' },
    role: { en: 'Game rules and interaction prototype', zh: '游戏规则与交互原型' },
    tags: ['JavaScript', 'TypeScript', 'Canvas', 'Game rules', 'localStorage'],
    repo: 'https://github.com/KYiz/massage-mayhem',
    status: { en: 'Playable prototype', zh: '可玩原型' },
    overview: { en: 'A playable browser prototype for a comic massage-shop game. Players take orders, choose therapists, perform gesture-based services and respond to customer results. The repository combines a 30-level rules campaign, an animation architecture prototype, character and item plans, and visual concepts.', zh: '制作喜剧风格按摩店游戏的可玩浏览器原型：接单、选择技师、手势服务并处理顾客反馈。仓库同时包含 30 关规则进程、动画架构样机、角色与道具策划及视觉概念。' },
    challenge: { en: 'Make the core loop playable and testable before formal art, animation and commercial systems are added.', zh: '先把核心玩法做成可体验、可测试的规则闭环，再考虑正式美术与商业化系统。' },
    responsibility: [
      { en: 'Implemented seed-based customer generation, gesture scoring, service outcomes, therapist skills, appeals, rewards, unlocks and cooldowns as DOM-independent rules.', zh: '把带随机种子的顾客生成、手势评分、服务结果、技师技能、申诉、奖励、解锁和冷却实现为独立于 DOM 的规则。' },
      { en: 'Connected the rules to a playable browser interface with 30 data-defined levels, therapist selection, order handling, settlement and localStorage saves.', zh: '将规则接入可玩浏览器界面，包含 30 个数据驱动关卡、技师选择、接单、结算和 localStorage 存档。' },
      { en: 'Designed an item system with stage and character unlock conditions, per-run uses and cooldowns; produced a Canvas-based animation prototype for body types, scenes and contact events.', zh: '设计道具的关卡与角色双重解锁、单局次数及冷却，并制作 Canvas 动画技术样机验证不同体型、场景和接触事件。' },
    ],
    architecture: [
      { en: 'Pure JavaScript rules + JSON level and item data → browser interaction layer → versioned localStorage save.', zh: '纯 JavaScript 规则与 JSON 关卡、道具数据 → 浏览器交互层 → 带版本的 localStorage 存档。' },
      { en: 'Separate TypeScript / Canvas animation sample models layered characters and reusable actions; its geometric art is a technical placeholder.', zh: '独立的 TypeScript / Canvas 动画样机验证角色分层与复用动作；几何图形仅作技术占位。' },
    ],
    process: [
      { en: 'Added automated tests for level goals, seeded replay, action limits, result priority, rare customers, duplicate rewards, skills and appeals.', zh: '用自动测试覆盖关卡目标、种子复现、操作上限、结算优先级、稀有顾客、重复领奖、技能与申诉。' },
      { en: 'Validated animation interruption and contact timing, then documented the remaining work before formal art and engine integration.', zh: '验证动画中断与接触帧时序，并记录接入正式美术与游戏引擎前的待办。' },
    ],
    outcomes: [
      { en: 'Delivered a playable 30-level rules prototype and a separate animation architecture sample covering eight therapists and seven customer types.', zh: '完成可玩的 30 关规则原型，以及覆盖 8 名技师、7 类顾客的独立动画架构样机。' },
      { en: 'Formal character art, skeletal animation, sound and commercial integrations are still planned rather than shipped.', zh: '正式角色美术、骨骼动画、音效及商业化接入仍属于后续阶段。' },
    ],
    reflection: { en: 'Separating rules from presentation makes it easier to test balance and change the visual layer later.', zh: '规则与表现层分离，便于先验证数值和玩法，再迭代视觉表现。' },
  },
  {
    slug: 'menu-weixin', index: '08',
    category: { en: 'WeChat mini program', zh: '微信小程序' },
    title: { en: 'Xiaxia Food Time', zh: '小夏饱饱时光' },
    subtitle: { en: 'A menu and order workflow for a WeChat mini program.', zh: '从菜单浏览到订单同步的微信小程序。' },
    period: { en: 'Oct 2026', zh: '2026.10' },
    role: { en: 'Mini program development', zh: '小程序开发' },
    tags: ['WeChat Mini Program', 'JavaScript', 'Cloud Functions', 'Cloud Database'],
    repo: 'https://github.com/KYiz/Menu-Weixin-DevTools',
    status: { en: 'Source and local checks complete', zh: '源码与本地检查完成' },
    overview: { en: 'Built a private WeChat ordering mini program with dish browsing, adjustable recipes, favorites, cart, recommendations, ordering and chef-side fulfillment. Orders are stored locally first, then synchronized through a WeChat cloud function to the cloud database.', zh: '开发私人微信点餐小程序，覆盖菜品浏览、可按人数换算的菜谱、收藏、购物车、随机推荐、下单和主厨处理。订单先本机保存，再经微信云函数同步到云数据库。' },
    challenge: { en: 'Keep order state consistent across local storage and the cloud while restricting chef actions to a verified WeChat identity.', zh: '在本机与云端之间保持订单状态一致，并确保主厨操作只对经微信身份验证的账号开放。' },
    responsibility: [
      { en: 'Built menu, detail, recipe, cart, favorites, random recommendation, order history and chef pages, with local persistence and 47 dish images.', zh: '实现菜单、详情、菜谱、购物车、收藏、随机推荐、订单历史和主厨页面，接入本机持久化与 47 道菜品图片。' },
      { en: 'Supported one-to-four-person ingredient scaling, delivery versus dine-in orders, and distinct fulfillment states for each mode.', zh: '支持 1 至 4 人份食材用量换算，以及外送和堂食两种订单模式及各自的履约状态。' },
      { en: 'Used cloud functions to verify WeChat OpenID, isolate customer orders, protect chef-only actions and validate status transitions in database transactions.', zh: '在云函数中核验微信 OpenID、隔离顾客订单、保护主厨操作，并在数据库事务中校验状态流转。' },
      { en: 'Added retryable cloud synchronization, duplicate-order protection and explicit stale-status feedback for network failures.', zh: '加入可重试的云端同步、重复订单保护，以及网络异常时对旧状态的明确提示。' },
    ],
    architecture: [
      { en: 'WeChat pages and local storage → orders cloud function (identity, idempotency and transitions) → cloud database orders collection.', zh: '微信小程序页面与本机存储 → orders 云函数（身份、幂等与状态校验）→ 云数据库 orders 集合。' },
      { en: 'The chef entry is shown only after cloud-verified identity; server logic uses the WeChat context OpenID rather than client-supplied role fields.', zh: '主厨入口依赖云端核验身份；服务端使用微信上下文 OpenID，不信任客户端传入的角色字段。' },
    ],
    process: [
      { en: 'Added scripted checks for menu data and layout, recipe scaling, order flow, duplicate submission, cross-account privacy, cloud recovery and package size.', zh: '以脚本检查菜单数据与布局、菜谱换算、订单流程、重复提交、跨账号隐私、云端恢复及代码包体积。' },
    ],
    outcomes: [
      { en: 'Completed source and local validation for the full ordering path, including delivery and dine-in status flows and failure recovery.', zh: '完成点餐全流程源码及本地验证，覆盖外送、堂食状态流转与故障恢复。' },
      { en: 'WeChat DevTools compilation, simulator review and real-device testing remain pending in the repository.', zh: '仓库仍将微信开发者工具编译、模拟器核对和真机测试列为待完成事项。' },
    ],
    reflection: { en: 'Order flows need clear identity checks and recovery when synchronization fails.', zh: '订单流程需要明确的身份校验，也要在同步失败时给用户可恢复的路径。' },
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
  'vibe-kangbo': './visuals/product.webp',
  'massage-mayhem': './visuals/role.webp',
  'menu-weixin': './visuals/development.webp',
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
