export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  images: string[];
  thumbnail: string;
  period: string;
  role: string;
  team: string;
  features: string[];
  challenges: string[];
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'connectrip',
    title: 'Connectrip',
    description: '여행지 소개, 여행자 매칭 커뮤니티 웹사이트 개발',
    fullDescription: '여행자들을 위한 소셜 네트워킹 플랫폼입니다. 사용자들이 여행지를 공유하고, 함께 여행할 동반자를 찾을 수 있는 서비스를 개발했습니다. 여행지 소개, 여행지 리뷰, 여행자 커뮤니티 기능을 구현했습니다.',
    tech: ['React', 'CSS', 'Node.js', 'MySQL'],
    images: [
      '/images/projects/connectrip-1.png',
      '/images/projects/connectrip-2.png',
      '/images/projects/connectrip-3.png',
    ],
    thumbnail: '/images/projects/connectrip-thumb.png',
    period: '2024.03 - 2024.06',
    role: '백엔드 개발',
    team: '5인 팀 프로젝트',
    features: [
      '여행지 소개',
      '여행지 리뷰 및 북마크',
      '여행 동반자 커뮤니티/동반자 매칭',
      '반응형 UI/UX 디자인',
    ],
    challenges: [
      '실시간 데이터 동기화 구현',
      '복잡한 상태 관리 최적화',
      '크로스 브라우저 호환성 확보',
    ],
    links: {
      github: 'https://github.com/hyeonsu0311/itec0401_t6',
      demo: 'https://www.youtube.com/embed/y8YFObZyzLk',
    },
  },
  {
    slug: 'smart-fems',
    title: '스마트 FEMS 프로젝트',
    description: 'React와 Node.js를 활용한 풀스택 일정 관리 애플리케이션',
    fullDescription: '공장 에너지 관리 시스템(Factory Energy Management System)를 웹 앱의 형태로 구현했습니다. 실시간 에너지 사용량 모니터링, 데이터 시각화, AI모델을 활용한 추후 에너지 사용량 예측 등을 구현하여 에너지 효율을 최적화하는 데 기여했습니다. 본 프로젝트로 \'인공지능 기술을 활용한 에너지 사용량 계측 웹 어플리케이션 설계 및 구현\' 이라는 논문은 기재하여 2024년 한국정보기술학회 추계종합학술대회에서 동상을 수상하였습니다.',
    tech: ['React Typescript','Node.js', 'MySQL InfluxDB', 'Pytorch'],
    images: [
      '/images/projects/fems-1.png',
      '/images/projects/fems-2.png',
      '/images/projects/fems-3.png',
    ],
    thumbnail: '/images/projects/fems-thumb.jpg',
    period: '2024.09 - 2024.12',
    role: '백엔드/DB',
    team: '4인 팀 프로젝트',
    features: [
      '실시간 에너지 사용량 대시보드',
      '데이터 시각화 차트 구현',
      '추후 에너지 사용량 예측',
      '공장별 사용자 로그인 기능 구현',
    ],
    challenges: [
      '대용량 실시간 데이터 처리',
      '복잡한 차트 렌더링 최적화',
      'AI 예측모델 생성',
    ],
    links: {
      github: 'https://github.com/minseokbae/KNU-ITEC0402-Backend',
      demo:'https://www.youtube.com/embed/ltMRDMfrudc'
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
