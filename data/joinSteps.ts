export interface JoinStep {
    id: number;
    name: string;
    icon: string;
    positionY: string;
    url: string;
  }
  
export const joinSteps:JoinStep[] = [
    {
      id: 1,
      name: "본인인증",
      icon: "/images/resources/join/join_steps.png",
      positionY: "",
      url: "/member/join/cert",
    },
    {
      id: 2,
      name: "약관동의",
      icon: "/images/resources/join/join_steps.png",
      positionY: "translate-y-[-70px]",
      url: "/member/join/agree",
    },
    {
      id: 3,
      name: "정보입력",
      icon: "/images/resources/join/join_steps.png",
      positionY: "translate-y-[-140px]",
      url: "/member/join/form",
    },
    {
      id: 4,
      name: "가입완료",
      icon: "/images/resources/join/join_steps.png",
      positionY: "translate-y-[-210px]",
      url: "/member/join/success",
    },
  ];