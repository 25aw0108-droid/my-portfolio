export const worksList = [
  {
    id: "project1",
    title: "Webデザイン科スペシャルサイト",
    image: "/images/スペシャルサイト.png",
    alt: "Webデザイン科スペシャルサイト",
    pill: "前期課程",
    roles: ["企画書", "デザイン", "実装"],
    tools: ["HTML", "CSS", "JavaScript"],
    link: "/project/project1",
    isExternal: false
  },
  {
    id: "project2",
    title: "焼き菓子3＆1ECサイト制作",
    image: "/images/焼き菓子.png", 
    alt: "焼き菓子3＆1ECサイト制作",
    pill: "進級制作",
    roles: ["企画書", "デザイン", "実装"],
    tools: ["HTML", "CSS", "JavaScript", "React Js"],
    link: "/project/project2",
    isExternal: false
  },
  {
    id: "project3",
    title: "Weatherアプリ",
    image: "/images/myworks3.png",
    alt: "Weatherアプリのスクリーンショット",
    pill: "授業課題",
    roles: ["デザイン", "実装"],
    tools: ["HTML", "CSS", "JavaScript", "React Js"],
    link: "https://weather-app-with-react-seven.vercel.app/",
    isExternal: true 
  },
  {
    id: "project4",
    title: "ポートフォリオ制作",
    image: "/images/portfolio_mockup.png",
    alt: "ポートフォリオ制作",
    pill: "自主制作",
    roles: ["デザイン", "実装"],
    tools: ["HTML", "CSS", "JavaScript", "React Js"],
    link: "/", 
    isExternal: false
  },
  {
    id: "project5",
    title: "DJI Osmo Pocket3 スペシャルサイト",
    image: "/images/osmo pocket3.png", 
    alt: "OsmoPocket3スペシャルサイト",
    pill: "授業課題",
    roles: ["企画", "デザイン"], 
    tools: [], 
    link: "/project/project3", 
    isExternal: false
  }
];

// 2. Object for the Project Detail Pages
export const projectsData = {
  "project1": {
    id: "project1",
    title: "Webデザイン科スペシャルサイト",
    image: "/images/スペシャルサイト.png", 
    request: "入学検討者をWebデザイン科の学生生活をおしえて、Webデザイン科の学生人数を増やしたい。",
    target: "留学生の入学検討者。",
    concept: "不安な将来を明るく灯すランプ。",
    uiDesign: "「自分と同じ境遇の先輩がいる」という安心感を与えるため、国別のインタビューページを1ページずつ制作しました。学科のイメージカラーである「紫色」を基調に採用しました。",
    duration: "3か月間",
    role: "企画、デザイン、実装",
    tools: "Figma / Photoshop / Visual Studio Code",
    struggles: "企画書の作成から設計、実装までを初めて一人で担当しました。UI設計と実装の両立の難しさを強く実感しました。",
    learnings: "開発工程全体を見通しながらスケジュールを管理する力が身につきました。",
    websiteLink: "https://nu-two-33.vercel.app/",
  },
  "project2": {
    id: "project2",
    title: "焼き菓子3＆１ECサイト制作",
    image: "/images/焼き菓子.png", 
    request: "子供に安心して食べさせられる、ギフトセットをメインとした売れるオンラインショップサイトを構築したい。",
    target: "子供と一緒に楽しい時間を過ごしたい20歳から40歳の主婦。",
    concept: "忙しい毎日でも、子どもと過ごす時間をもっと楽しく、ほっとできる焼き菓でリフレッシュなひとときを届けます。",
    uiDesign: "サイト全体のイメージは、「信頼感」「安心感」「女性らしさ」を感じられるブランドにしました。緑色とレモンの黄色を基調に使用。",
    duration: "4か月間",
    role: "企画、デザイン、実装",
    tools: "Figma / Photoshop / Visual Studio Code / GitHub",
    struggles: "Reactを勉強しながらつくったので、エラーの原因を調べる時間が多かったです。",
    learnings: "自分がやりたいデザインを、Reactを使って形にすることができました。コンポーネントの作り方もきちんと理解できました。",
    websiteLink: "https://lemon-project-azure.vercel.app/",
  },
  "project3": {
    id: "project3",
    title: "DJI Osmo Pocket3 スペシャルサイト制作",
    image: "/images/osmo pocket3.png", 
    request: "一般層への知名度向上と売上拡大を目的とし、費用対効果の高いSNS連動型スペシャルサイトを制作する。",
    target: "小学生以下の子供を持つ30代～40代の親",
    concept: "一生の記憶を自分の目で。",
    uiDesign: "白をベースにして、あたたかいイメージにしています。スマートフォンで見やすいように、たてにスクロールする形にしました。",
    duration: "1か月間",
    role: "企画、デザイン",
    tools: "Figma / Photoshop / Miro",
    struggles: "進級制作をしながら制作を進めたので、チームみんなとても大変でした。時間の管理がとても大事でした。",
    learnings: "チームみんなで力を入れて作りました。その中で、チームワークや時間の管理をしっかりすることができました。"
  }
};