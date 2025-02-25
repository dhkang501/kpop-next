export const categories = [
  "차트",
  "Whook",
  "이벤트",
  "뉴스",
  "스토어",
  "충전소",
];

export const banners = [
  {
    id: 1,
    image: "/images/banner1.png",
    link: "https://www.naver.com",
    isOngoing: true,
    contents: {
      title: "네이버",
      description: "네이버 홈페이지로 이동합니다. 클릭해주세요",
      isVote: true,
      startTime: "2020.02.08 10:00",
      endTime: "2020.04.08 17:00",
      timezone: "KST",
    },
  },
  {
    id: 2,
    image: "/images/banner2.png",
    link: "https://www.daum.net",
    isOngoing: false,
    contents: {
      title: "다음",
      description: "다음 홈페이지로 이동합니다.",
      isVote: true,
    },
  },
  {
    id: 3,
    image: "/images/banner3.png",
    link: "https://www.google.com",
    isOngoing: true,
  },
  {
    id: 4,
    image: "/images/banner4.png",
    link: "https://www.yahoo.com",
    isOngoing: false,
  },
  {
    id: 5,
    image: "/images/banner5.png",
    link: "https://www.bing.com",
    isOngoing: true,
  },
];
