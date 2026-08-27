import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import about_me from './about_me.jpeg';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img-o.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import headr from './headr.png';
import header_bg from './header_bg.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import hpe_image from './hpe_image.jpg';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import home_page from './home_page.jpeg';
import footer_image from './footer_image.jpeg';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    about_me,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    headr,
    header_bg,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    hpe_image,
    img1,
    img2,
    img3,
    img4,
    img5,
    home_page,
    footer_image,

};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Semantic Book Recommender', description: 'A recommendation engine that helps readers discover their next favorite book....', link: 'https://github.com/kritadnya/semantic-book-recommender' },
    { icon: assets.mobile_icon, title: 'NLP based News Summarizer', description: 'This application allows users to paste any article or blog post and receive an instant one-sentence summary... ', link: 'https://github.com/kritadnya/Text-Summarizer-Project' },
    { icon: assets.ui_icon, title: ' DeepFake Image Detection', description: 'Implemented a Deep Learning algorithm that is able to correctly distinguish between real and DeepFake....', link: 'https://github.com/kritadnya/DeepFake-Image-Detection-using-AI-and-ML' },
    { icon: assets.graphics_icon, title: 'FastAPI CRUD blog', description: 'Production-ready FastAPI backend with authentication and CRUD operations...', link: 'https://github.com/kritadnya/personal-fastapi-blog' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

// export const toolsData = [
//     assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
// ];

export const toolsData = [
  {
    icon: assets.vscode,
    name: "VS Code",
  },
  {
    icon: assets.git,
    name: "Git",
  },
  {
    icon: assets.firebase,
    name: "GitHub",
  },
  {
    icon: assets.mongodb,
    name: "Postman",
  },
];


export const experiences = [
  {
    company: "HPE Juniper Networks",
    role: "Software Engineer",
    period: "Jul 2024 - Present",
    image: assets.hpe_image,
    location: "Bengaluru, Karnataka",
    shortDescription:
      "Engineering scalable network automation solutions for cloud-scale Junos environments, contributing to Google B4 and Amazon Direct Connect network automation.",
    details: [
      "Contributed to the development of 60+ automation scripts supporting Google B4 and Amazon Direct Connect network environments.",
      "Helped achieve a 75% reduction in deployment cycles, accelerating releases and improving engineering efficiency.",
      "Developed modular and reusable automation solutions using Python, Java, JavaScript, and Robot Framework for Junos-based platforms.",
      "Built scalable automation for telemetry validation and gRIBI route programming, improving fault detection and overall network stability.",
      "Worked with modern networking technologies and protocols including EVPN, OpenConfig, Telemetry, MPLS, gNMI, gNOI, gRPC, and gRIBI.",
      "Developed internal engineering tools using FastAPI and PostgreSQL to improve task tracking, communication, and workflow visibility.",
      "Provided end-to-end technical support during critical escalations, troubleshooting complex network automation and validation issues.",
    ],
  },

  {
    company: "Juniper Networks",
    role: "Software Engineer Intern",
    period: "Jan 2024 - Jun 2024",
    image: assets.about_me,
    location: "Bengaluru, Karnataka",
    shortDescription:
      "Applied machine learning and NLP techniques to Problem Report data to build predictive solutions for identifying high-risk software defects.",
    details: [
      "Led ML and NLP analysis of Problem Report data to identify patterns and high-risk bug areas.",
      "Applied TF-IDF, Logistic Regression, Random Forest, Decision Trees, XGBoost, regression, and classification techniques.",
      "Evaluated and optimized multiple classification and forecasting models to improve predictive performance.",
      "Explored Large Language Models (LLMs) alongside traditional machine learning approaches for engineering data analysis.",
      "Performed feature analysis, experimentation, and model evaluation to identify effective approaches for production use.",
      "Developed robust predictive models that contributed to a production-ready AI software solution for proactive defect analysis.",
    ],
  },
];

export const timelineData = [
//   {
//     type: "work",
//     date: "08 Jul 2024 – Present",
//     title: "Software Engineer",
//     organization: "HPE Juniper Networks",
//     location: "Bengaluru, Karnataka",

//     description:
//       "Software Engineer with hands-on experience building complete software solutions, spanning backend development, API design, database integration, automation and internal web applications/tools. Developed scalable tools using Python, Java, JavaScript, FastAPI and PostgreSQL, taking projects from requirements and system design through implementation, testing, integration and production support. Built internal engineering tools for task tracking and communication with complete backend workflows and persistent data management, while also developing 60+ automation solutions for large-scale network environments. Experienced in designing reusable components, integrating APIs and modern protocols, debugging production issues, and optimizing application workflows, with a strong focus on building reliable, maintainable and scalable full-stack products.",

//     highlights: [
//       "60+ automation scripts for Google B4 & Amazon DX networks",
//       "75% reduction in deployment cycles",
//       "Python, Java, JavaScript & Robot Framework",
//       "EVPN, OpenConfig, Telemetry, MPLS, gNOI & gRPC",
//       "Telemetry validation & GRIBI route programming",
//       "FastAPI & PostgreSQL internal engineering tools",
//     ],
//   },

//   {
//     type: "work",
//     date: "03 Jan 2024 – 28 Jun 2024",
//     title: "Software Engineer Intern",
//     organization: "HPE Juniper Networks",
//     location: "Bengaluru, Karnataka",

//     description:
//       "During my internship, I worked on development of AI Predictive Analytics: Juniper Bug Detector, a machine learning based application designed to improve software testing and proactive bug prediction. I developed automated data-mining workflows for extracting historical test data, performed data cleaning and labeling, and applied NLP and machine learning techniques to classify test cases into categories, keywords, and subcategories. I also developed forecasting models to predict future test-case category occurrences based on release versions and platforms. The project included risk assessment and 2×2 heat-map visualization, enabling test engineers to identify high-risk areas, prioritize testing efforts, reduce testing overhead, and make more data-driven decisions.",

//     highlights: [
//       "ML & NLP analysis of Problem Report data",
//       "TF-IDF Vectorizer",
//       "Logistic Regression & Random Forest",
//       "XGBoost & Decision Trees",
//       "LLMs & classification techniques",
//       "Classification & forecasting optimization",
//       "Production-ready predictive AI tool",
//     ],
//   },

//   {
//     type: "work",
//     date: "25 Sep 2023 – 04 Nov 2023",
//     title: "Student Intern",
//     organization: "Visual Computing - Center of Excellence",
//     location: "Bengaluru, Karnataka",

//     description:
//       "During my CoE-VC internship, I worked on an AI-powered image captioning system, focusing on making visual information more accessible through deep learning and NLP. I conducted a literature review of existing image-captioning techniques, identified research gaps, and explored CNN, LSTM, and multimodal approaches. I worked with the Flickr 8k dataset, performing image feature extraction using InceptionV3, text preprocessing, vocabulary construction, and data preparation. The project aimed to generate accurate, contextually relevant image descriptions with potential for real-time processing and adaptability across different environments.",

//     highlights: [
//       "ML & NLP analysis of Problem Report data",
//       "TF-IDF Vectorizer",
//       "Logistic Regression & Random Forest",
//       "XGBoost & Decision Trees",
//       "LLMs & classification techniques",
//       "Classification & forecasting optimization",
//       "Production-ready predictive AI tool",
//     ],
//   },


//   {
//     type: "education",
//     date: "24 Dec 2020 – 03 Aug 2024",
//     title: "B.E. in Computer Science",
//     organization: "Rashtreeya Vidyalaya College of Engineering",
//     location: "Bengaluru, Karnataka",

//     description:
//       "Completed my Bachelor’s degree in Computer Science with a strong academic record and a CGPA of 9.0/10.0, building a solid foundation in software engineering, data structures, algorithms, databases, machine learning and system development. Beyond academics, I was an active member of the Debate Club, earning multiple prizes in 0+ national and international competitions. I also mentored and trained 50+ junior and school students, strengthening my leadership, communication, and ability to simplify and teach complex concepts. My college experience combined strong technical fundamentals with competitive problem-solving, leadership, collaboration and mentoring.",

//     highlights: [
//       "CGPA: 9.0 / 10.0",
//       "Computer Science & Engineering",
//       "Graduated in 2024",
//     ],
//   },

//   {
//     type: "education",
//     date: "03 Jul 2018 - 23 Mar 2020",
//     title: "Senior Secondary",
//     organization: "Army Public School",
//     location: "Bengaluru, Karnataka",

//     description:
//       "Graduated at the top of the class with 96% and an excellent academic record while actively contributing to the academic and cultural life of the school.I competed in virtually every major school dance event and served as a choreographer for prominent school programs and celebrations. I was also an active member of the Debate Club, Literary Society, and Arts & Science Club, developing strong communication, creativity, and critical-thinking skills. Beyond extracurriculars, I used to take free Mathematics and Physics tutoring sessions for peers.",

//     highlights: [
//       "95.6%",
//       "Completed in 2020",
//     ],
//   },

{
  type: "work",
  date: "08 Jul 2024 – Present",
  title: "Software Engineer",
  organization: "HPE Juniper Networks",
  location: "Bengaluru, Karnataka",

  points: [
    "Built complete software solutions spanning backend development, API design, database integration, automation, and internal web applications.",
    "Developed scalable tools using Python, Java, JavaScript, FastAPI, and PostgreSQL, taking projects from requirements and system design through implementation, testing, integration, and production support.",
    "Built internal engineering tools for task tracking and communication with complete backend workflows and persistent data management.",
    "Developed 60+ automation solutions for large-scale network environments, improving testing efficiency and reducing manual effort.",
    "Designed reusable components and integrated APIs and modern networking protocols to support reliable and maintainable systems.",
    "Debugged production issues and optimized application workflows with a focus on scalability, reliability, and maintainability."
  ]
},

{
  type: "work",
  date: "03 Jan 2024 – 28 Jun 2024",
  title: "Software Engineer Intern",
  organization: "HPE Juniper Networks",
  location: "Bengaluru, Karnataka",

  points: [
    "Developed Juniper Bug Detector, an AI-powered predictive analytics application designed to improve software testing and proactive bug prediction.",
    "Built automated data-mining workflows to extract historical test data and performed data cleaning, preprocessing, and labeling.",
    "Applied NLP and machine learning techniques to classify test cases into categories, keywords, and subcategories.",
    "Developed forecasting models to predict future test-case category occurrences based on release versions and platforms.",
    "Implemented risk assessment and 2×2 heat-map visualizations to help test engineers identify high-risk areas and prioritize testing efforts.",
    "Helped reduce testing overhead by enabling more data-driven testing and prioritization."
  ]
},

{
  type: "work",
  date: "25 Sep 2023 – 04 Nov 2023",
  title: "Student Intern",
  organization: "Visual Computing - Center of Excellence",
  location: "Bengaluru, Karnataka",

  points: [
    "Developed an AI-powered image captioning system using deep learning and NLP to generate descriptions of visual content.",
    "Conducted a literature review of existing image-captioning techniques and explored CNN, LSTM, and multimodal approaches.",
    "Worked with the Flickr8k dataset for image feature extraction, text preprocessing, vocabulary construction, and data preparation.",
    "Used InceptionV3 for image feature extraction and prepared visual and textual features for model training.",
    "Focused on generating accurate and contextually relevant image descriptions with potential for real-time processing and adaptability."
  ]
},

{
  type: "education",
  date: "24 Dec 2020 – 03 Aug 2024",
  title: "B.E. in Computer Science",
  organization: "Rashtreeya Vidyalaya College of Engineering",
  location: "Bengaluru, Karnataka",

  points: [
    "Graduated with a CGPA of 9.0/10.0, building strong foundations in software engineering, data structures, algorithms, databases, machine learning, and system development.",
    "Active member of the Debate Club, participating in national and international competitions.",
    "Mentored and trained 50+ junior and school students, developing leadership, communication, and teaching skills.",
    "Strengthened problem-solving, collaboration, and technical communication through academic and extracurricular activities."
  ],

  highlights: [
    "CGPA: 9.0 / 10.0",
    "Computer Science & Engineering",
    "Graduated in 2024",
    
  ]
},

{
  type: "education",
  date: "03 Jul 2018 - 23 Mar 2020",
  title: "Senior Secondary",
  organization: "Army Public School",
  location: "Bengaluru, Karnataka",

  points: [
    "Graduated at the top of the class with 96% and maintained an excellent academic record.",
    "Participated in major school dance events and served as a choreographer for prominent school programs and celebrations.",
    "Active member of the Debate Club, Literary Society, and Arts & Science Club.",
    "Conducted free Mathematics and Physics tutoring sessions for peers."
  ],
  highlights: [
    "CGPA: 10.0 / 10.0",
    "Percentage: 96%",
    "Science Stream - Physics Chemistry Mathematics Biology",
    "Graduated in 2020",

    
  ]
},

];


export const dailyRoutine = [
  {
    time: "120",
    description: "minutes of coding. I code religiously and i love to code!",
    image: assets.img5,
  },
  {
    time: "60",
    description: "minutes of studying computer science topics, algorithms and data structures. I believe having strong foundational knowledge goes a long way.",
    image: assets.img4,
  },
  {
    time: "60",
    description: "minutes of learning new concepts and technologies. System design and computer architechture are my favourite! I am also currenlty learning microservices.",
    image: assets.img3,
  },
  {
    time: "30",
    description:
      "minutes of reading blogs of engineers and designers and connecting for discussions. Everyday on my commute I use the time to update myself with developments in the science world.",
    image: assets.img2,
  },
  {
    time: "30",
    description:
      "minutes of recharging: yoga, dance or art. I love doing activities that require high focus and low stimulation, yoga helps me stay grounded and bring me so much joy! ",
    image: assets.img1,
  },
];

export const skills = [
  {
    name: "Python",
    level: 95,
  },

{
    name: "Java",
    level: 90,
  },
  {
    name: "FastAPI",
    level: 90,
  },
    {
    name: "Node",
    level: 80,
  },
    {
    name: "React",
    level: 80,
  },

  {
    name: "SQL (PostgreSQL)",
    level: 80,
  },
  {
    name: "HTML5, CSS3",
    level: 80,
  },
  {
    name: "JavaScript",
    level: 70,
  },
  {
    name: "jQuery",
    level: 60,
  },

];