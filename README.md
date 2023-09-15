# ssg-point-FE

<<<<<<< HEAD
## 📌 프로젝트 소개

> 2023 Spharos Academy 3기 1차 프로젝트
> 신세계포인트 클론 코딩 프론트엔드

### Project Repositories
- [프론트엔드](https://github.com/Spharos4team/ssg-point-FE)
- [백엔드](https://github.com/Spharos4team/ssg-point-BE)

## 📌 시스템 아키텍처
![KakaoTalk_20230914_142212237](https://github.com/Spharos4team/ssg-point-FE/assets/122842139/d9ae2877-adff-43aa-ad70-fab32d8a1e45)


## 📌 개발 환경

    "next": "13.4.19"
    "react": "18.2.0"
    "tailwindcss": "3.3.3"
    "typescript": "5.2.2"
    
## 📌 디렉터리 구조

    ├─ ... # 환경설정 파일들
    ├─ README.md
    ├─ app # 라우팅
    │   ├─ ... # 라우팅 폴더들
    │   ├─ globals.css
    │   └─ middleware.ts # next-auth
    ├─ components # 컴포넌트 폴더
    │   ├─ atom
    │   ├─ module
    │   └─ organism
    ├─ data # json data
    ├─ provider # custom provider
    ├─ public # images for develop
    ├─ type # 미리 정의된 타입
    └─ utils # helpers



## 📌 to-do

- [x] WBS 작성(화면 설계 참고)
- [ ] prettier, eslint 설정(보류),
- [x] 라이브러리 정리
- [x] json-server 활용 방안
  - Mock API test
  - auth test
- [x] Branch 전략
- [x] docs: git 설정, commit msg
- [x] 이미지소스: storage 사용 여부에 따라 결정되겠지만, 일단 프론트에 표시되어야 하는 것들은 모두 표시되어야만 한다. 로컬이든 스토리지든 상관없다.
- [x] 타입 대신 인터페이스: 조금 불편하더라도 구현 의무를 지니고, 미약하나마 성능상 우월한 인터페이스 사용
- [x] component
  - ui
    - [x] ContentHeader: 현재 레이아웃에서 한번 불러내고 있는데, 이는 컴포넌트의 재사용성을 높여 좋아보이지만, 같은 맥락에서 레이아웃을 공유하고자 한다면 페이지를 도메인으로 묶기 어려워진다. 때문에 페이지마다 해당 컴포넌트를 임포트하는 것을 고려해볼 만 하다
    - [x] LinkImageWithFallback: 링크를 가진 이미지 컴포넌트(src 에러 또는 loading fallback 적용)

## 📌 Reference Libraries

- [ ] [styled-components](https://styled-components.com/docs/basics)
- [ ] [redux](https://redux.js.org/introduction/getting-started)
- [ ] [redux-saga](https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html)
- [ ] [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [x] [json-server](https://github.com/typicode/json-server)
- [x] [prettier](https://prettier.io/docs/en/install.html)
- [x] [eslint](https://eslint.org/docs/user-guide/getting-started)
- [ ] [lodash](https://lodash.com/docs/4.17.15)
- [x] [Todo Tree]()
- [x] [SWR]
- [x] [html-react-parser](https://www.npmjs.com/package/html-react-parser)

## 📌 Check

### Naming Convention

- 컴포넌트는 컴포넌트 폴더 하위에 index.tsx로 생성하지 말고 파일명으로 사용
  - ~~ExampleComponent/inde.tsx~~
- Component: {컴포넌트}{위치}{범위}.tsx
  - TabBarTopMain.tsx


=======
> 2023 Spharos Academy 3기 1차 프로젝트
>>>>>>> 3b2363ca957659b3b4eadfaf8d63e5643c7199e7
