/*
  Edit this file to personalize the site. Keep PDF files inside assets/papers
  and assets/resume, then change `available` to true when each file is uploaded.
*/
window.siteData = {
  person: {
    name: 'Ding Ruikang',
    nameZh: '丁睿康',
    initials: 'DR',
    role: 'Researcher & Scholar',
    roleZh: '研究者',
    intro: 'A concise space for research, writing, and professional work.',
    introZh: '一个用于呈现研究成果、学术写作与专业经历的个人空间。',
    about: 'This site collects selected research and professional materials. It is designed to make the work easy to read, cite, and discuss.',
    aboutZh: '本站整理并展示部分研究与专业材料，让读者能够清晰地阅读、引用并交流相关工作。',
    institution: 'Fudan University',
    institutionZh: '复旦大学',
    location: 'China',
    locationZh: '中国',
    email: '2430XH10025@fudan.edu.cn',
    // portrait: '',
    socials: [
      { label: 'GitHub', url: 'https://github.com/Dingeric' },
      { label: 'Google Scholar', url: '' },
      { label: 'LinkedIn', url: '' }
    ]
  },
  interests: [
    { en: 'Optical Metrology', zh: '光学计量' },
    { en: 'Economic Networks', zh: '经济网络' },
    { en: 'Operations Research', zh: '运筹优化' },
    { en: 'Mathematical Modeling', zh: '数学建模' }
  ],
  publications: [
    {
      year: '2026',
      title: 'Infrared Interferometric Estimation of Silicon Carbide Epitaxial-Layer Thickness: Cross-Angle and Cross-Model Consistency',
      titleZh: '碳化硅外延层厚度的红外干涉测量：跨角度与跨模型一致性',
      authors: 'Ruikang Ding, Dian Jin',
      authorsZh: '丁睿康、金典',
      venue: 'Preprint', venueZh: '预印本',
      abstract: 'Fourier-transform infrared (FTIR) reflectance fringes can estimate epitaxial-layer thickness without destructive sectioning, but the result depends on the refractive-index model, incidence geometry, fringe localization, and the treatment of repeated internal reflections. We examine those dependencies using four reflectance spectra released with the 2025 China Undergraduate Mathematical Contest in Modeling (CUMCM) Problem B, comparing two-beam and multiple-reflection estimators across incidence angles.',
      abstractZh: '傅里叶变换红外（FTIR）反射条纹可在不破坏样品的情况下估算外延层厚度，但结果取决于折射率模型、入射几何、条纹定位以及对多次内反射的处理。本文利用 2025 年中国大学生数学建模竞赛（CUMCM）B 题发布的四组反射光谱，在多个入射角度下对比双光束与多次反射两种估算模型，考察这些依赖关系。',
      tags: ['FTIR', 'SiC', 'Thin-film metrology'],
      tagsZh: ['傅里叶红外', '碳化硅', '薄膜测量'],
      file: 'assets/papers/sic-ftir-thickness.pdf', available: true
    },
    {
      year: '2026',
      title: 'Predictive Economic Connectedness among Guangdong Cities: An Exploratory PCA–VAR Network Audit',
      titleZh: '广东省城市间预测性经济关联：探索性 PCA–VAR 网络审计',
      authors: 'Dian Jin, Ruikang Ding',
      authorsZh: '金典、丁睿康',
      venue: 'Preprint', venueZh: '预印本',
      abstract: 'We revisit an archived PCA–VAR analysis of GDP for 21 Guangdong cities over 1999–2023. The retained outputs record 336 directed predictive links, corresponding to density 0.80 and average total degree 32, and the archived degree counts reconcile with those totals. Other outputs do not reconcile, so we treat the network as an exploratory record of predictive connectedness rather than a calibrated significance or causal network.',
      abstractZh: '本文重新审视了 1999–2023 年广东省 21 个城市 GDP 的一份存档 PCA–VAR 分析。保留的输出记录了 336 条有向预测连接（对应密度 0.80、平均总度 32），且存档的度数统计与该总数一致；但其余输出无法相互印证。因此我们将该网络视为预测性经济关联的探索性记录，而非经过校准的显著性检验或因果网络。',
      tags: ['Economic connectedness', 'PCA–VAR', 'Network analysis'],
      tagsZh: ['经济关联', 'PCA–VAR', '网络分析'],
      file: 'assets/papers/guangdong-economic-connectedness.pdf', available: true
    },
    {
      year: '2026',
      title: 'Data-Aware Cost Accounting and Hybrid Route Consolidation for Pharmaceutical Cold-Chain Logistics',
      titleZh: '面向医药冷链物流的数据感知成本核算与混合路径合并',
      authors: 'Ruikang Ding, Dian Jin',
      authorsZh: '丁睿康、金典',
      venue: 'Preprint', venueZh: '预印本',
      abstract: 'Pharmaceutical cold-chain distribution couples routing decisions with refrigeration, vehicle utilization, service reliability, and data-quality constraints. We study anonymized dispatch and terminal records from a logistics case dataset, combining a six-component accounting model with daily route consolidation using Clarke–Wright initialization, genetic search, and 2-opt improvement.',
      abstractZh: '医药冷链配送将路径决策与制冷、车辆利用率、服务可靠性和数据质量约束耦合在一起。本文研究一份物流案例数据集中匿名化的发运与终端记录，将六部分成本核算模型与基于 Clarke–Wright 初始化、遗传搜索与 2-opt 改进的日度路径合并相结合。',
      tags: ['Cold-chain logistics', 'Vehicle routing', 'Cost accounting'],
      tagsZh: ['冷链物流', '车辆路径', '成本核算'],
      file: 'assets/papers/pharmaceutical-cold-chain-routing.pdf', available: true
    }
  ],
  // resume: { file: 'assets/resume/Ding_Ruikang_CV.pdf', filename: 'Ding_Ruikang_CV.pdf', available: false }
};
