/*
  Edit this file to personalize the site. Keep PDF files inside assets/papers
  and assets/resume, then change `available` to true when each file is uploaded.
*/
window.siteData = {
  person: {
    name: 'Ding Ruikang',
    nameZh: '丁瑞康',
    initials: 'DR',
    role: 'Researcher & Scholar',
    roleZh: '研究者',
    intro: 'A concise space for research, writing, and professional work.',
    introZh: '一个用于呈现研究成果、学术写作与专业经历的个人空间。',
    about: 'This site collects selected research and professional materials. It is designed to make the work easy to read, cite, and discuss.',
    aboutZh: '本站整理并展示部分研究与专业材料，让读者能够清晰地阅读、引用并交流相关工作。',
    institution: 'Institution to be added',
    institutionZh: '机构信息待补充',
    location: 'China',
    locationZh: '中国',
    email: 'your.email@example.com',
    portrait: '',
    socials: [
      { label: 'GitHub', url: 'https://github.com/Dingeric' },
      { label: 'Google Scholar', url: '' },
      { label: 'LinkedIn', url: '' }
    ]
  },
  interests: [
    { en: 'Research Methodology', zh: '研究方法论' },
    { en: 'Applied Technology', zh: '应用技术' },
    { en: 'Interdisciplinary Studies', zh: '交叉学科研究' },
    { en: 'Academic Writing', zh: '学术写作' }
  ],
  publications: [
    {
      year: '—',
      title: 'Paper title to be added', titleZh: '论文题目待补充',
      authors: 'Ding Ruikang', authorsZh: '丁瑞康',
      venue: 'Journal or conference to be added', venueZh: '期刊或会议待补充',
      abstract: 'The abstract and publication details will appear here after the paper is added.', abstractZh: '添加论文后，此处将展示摘要与出版信息。',
      tags: ['Research'], tagsZh: ['研究'],
      file: 'assets/papers/paper-01.pdf', available: false
    }
  ],
  resume: { file: 'assets/resume/Ding_Ruikang_CV.pdf', filename: 'Ding_Ruikang_CV.pdf', available: false }
};
