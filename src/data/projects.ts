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
    fullDescription: '여행자들을 위한 소셜 네트워킹 플랫폼입니다. 사용자들이 여행지를 공유하고, 함께 여행할 동반자를 찾을 수 있는 서비스를 개발했습니다. 여행지 소개, 여행지 리뷰, 여행자 커뮤니티 기능을 구현했습니다. 이 프로젝트에서 저는 MySQL DB 설계 및 구축하는 역할과 Node.js로 백엔드 서버를 구축하고 REST API, JWT토큰을 통한 로그인 기능 및 로그인 상태, DB연결 등을 관리하는 역할을 맡았습니다.',
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
    description: 'React와 Node.js를 활용한 풀스택 에너지 관리 애플리케이션',
    fullDescription: '공장 에너지 관리 시스템(Factory Energy Management System)를 웹 앱의 형태로 구현했습니다. 실시간 에너지 사용량 모니터링, 데이터 시각화, AI모델을 활용한 추후 에너지 사용량 예측 등을 구현하여 에너지 효율을 최적화하는 것을 목적으로 만들어졌습니다. 해당 프로젝트에서 저는 웹 앱에 기능을 제공하는 용도의 Node.js 서버와 AI예측값을 제공하는 용도의 Django 서버를 구축/관리하여 프론트엔드에서의 공장별 로그인, 예측값 데이터시각화 등의 기능이 원활히 이루어지는 것에 기여하였습니다. 또한 본 프로젝트로 \'인공지능 기술을 활용한 에너지 사용량 계측 웹 어플리케이션 설계 및 구현\' 이라는 논문을 기재하여 2024년 한국정보기술학회 추계종합학술대회에서 동상을 수상하였습니다.',
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

  {
    slug: 'Daegu-EV-Stations',
    title: '대구 전기차 충전소 정보 웹사이트',
    description: 'Next.js와 Java SpringBoot를 활용한 풀스택  전기차 충전소 정보 제공 애플리케이션',
    fullDescription: '대구광역시 전기차 충전소 정보를 제공하는 웹 서비스입니다. 공공데이터포털 API를 통해 충전소 데이터를 수집하고, Kakao Geocoding API로 주소를 좌표로 변환하여 지도 기반으로 시각화하였습니다. 충전소 이름 및 주소 검색, 급속/완속 필터링 기능을 제공하며, 회원가입/로그인 기능과 함께 회원별 충전소 즐겨찾기 기능을 구현하였습니다. 프론트엔드는 Next.js, 백엔드는 Spring Boot와 Spring Security를 활용한 JWT 기반 인증, 데이터베이스는 MongoDB Atlas를 사용하였으며, GitHub Actions를 통해 공공데이터를 주기적으로 수집하여 DB에 업데이트하는 자동화 파이프라인을 구축하였습니다.',
    tech: ['React','Next.js', 'Spring Boot', 'MongoDB Atlas', 'GitHub Actions'],
    images: [
      '/images/projects/fems-1.png',
      '/images/projects/fems-2.png',
      '/images/projects/fems-3.png',
    ],
    thumbnail: '/images/projects/fems-thumb.jpg',
    period: '2026.05- 2026.06',
    role: '백엔드/프론트엔드/DB/배포',
    team: '개인 프로젝트',
    features: [
      '공공데이터 기반 실시간 충전소 정보 제공',
      '지도 기반 충전소 위치 시각화',
      '충전소 이름 및 주소 검색 / 급속·완속 필터링',
      '회원 인증 및 즐겨찾기 기능',
    ],
    challenges: [
      'Kakao Geocoding API 주소 변환 실패 시 충전소명 기반 재검색 로직 구현',
      'Spring Security JWT 필터 연동 및 CORS 설정',
      'GitHub Actions Cron 기반 공공데이터 자동 수집 구현',
    ],
    links: {
      github: 'https://github.com/chu5046/EvStation',
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
