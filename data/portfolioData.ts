import {
  ProfileData,
  Project,
  SkillCategory,
  Testimonial,
  EducationData,
} from "../types";

export const profileData: ProfileData = {
  name: "Shoaib Uddin",
  role: "Designer first Developer | AI/ML Enthusiast",
  email: "shoaibu.ramim@gmail.com",
  location: "Chattogram, Bangladesh",
  about:
    "UI/UX-focused Computer Science and Engineering graduate who bridges human-centered design with AI/ML engineering. I build intuitive experiences and learning-based systems, from rapid prototyping and design systems to model development, evaluation, and deployment into usable products.",
  socials: {
    linkedin: "https://linkedin.com/in/shoaibramim",
    github: "https://github.com/shoaibramim",
    huggingface: "https://huggingface.co/shoaibramim",
    behance: "https://www.behance.net/shoaibramim",
  },
};

export const projectsData: Project[] = [
  {
    id: "quickhire",
    title: "QuickHire – Full-Stack Job Board Platform",
    description:
      "Built a full-stack job board enabling employers to manage listings and applicants and job seekers to search and apply for jobs, implementing role-based access control and JWT authentication with a Next.js (App Router) + TypeScript + Tailwind CSS frontend and a Node.js (Express) + MongoDB + Mongoose REST API backend deployed on Vercel.",
    image: "/images/projects/quickhire/QuickHire_Landing_Page.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "Vercel",
    ],
    githubUrl: "https://github.com/shoaibramim/QuickHire",
    liveUrl: "https://quickhirebd.vercel.app/",
    category: "Full-Stack",
  },
  {
    id: "cotton-disease",
    title: "CottonGuard - Cotton Leaf Disease Detection",
    description:
      "Fine-tuned and evaluated deep learning models for cotton leaf disease detection using Python, TensorFlow, and Scikit-learn across varied augmentation, class balancing, dropout, and learning rate settings. Deployed the best-performing model on Hugging Face Spaces with a Gradio interface and integrated it into a React-based web application hosted on Vercel, enabling image-based inference via API communication.",
    image: "/images/projects/cottonguard/CLDD.webp",
    tags: [
      "Deep Learning",
      "Computer Vision",
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "React",
      "HuggingFace",
      "Vercel",
    ],
    githubUrl: "https://github.com/shoaibramim/CottonGuard",
    liveUrl: "https://cottonguard.vercel.app/",
    manuscriptUrl:
      "https://drive.google.com/file/d/1GqX_BBJdZYkOvJ7ycFt11dqDwYU3xv4k/view?usp=sharing",
    category: "AI/ML",
  },
  {
    id: "voter-slip",
    title: "Voter Slip Generator",
    description:
      "Developed an end-to-end web application that processes layout-specific PDFs to extract Bengali text and generate structured JSON for automated voter slip creation with customizable designs, using a backend pipeline built with YOLOv8n, Python, and Tesseract OCR, exposed via APIs to a React (Vite) + TypeScript frontend deployed on Vercel.",
    image: "/images/projects/voter_slip_generator/voter_slip_generator.webp",
    tags: [
      "React",
      "TypeScript",
      "HuggingFace",
      "Python",
      "YOLOv8n",
      "Tesseract OCR",
      "Vercel",
      "PDF Generation",
    ],
    githubUrl: "https://github.com/shoaibramim/VoterSlip-Generator",
    liveUrl: "https://voter-slip-generator.vercel.app/",
    category: "Full-Stack",
  },
  {
    id: "krishibid",
    title: "Krishibid",
    description:
      "Developed a mobile application integrating a TensorFlow Lite model for real-time crop disease prediction. Designed the UI in Figma and implemented the app using React Native and Firebase, and added interactive features: real-time comments, reactions, rating, Google Maps, pagination, and animations using Reanimated and GSAP.",
    image: "/images/projects/krishibid/Krishibid_UI_Promo.webp",
    tags: [
      "React Native",
      "Firebase",
      "Figma",
      "TensorFlow lite",
      "Reanimated",
      "GSAP",
    ],
    githubUrl: "https://github.com/shoaibramim/Krishibid",
    liveUrl: "https://appetize.io/app/b_fc3ajqenc6ejwcdketfo4egcsu",
    category: "Mobile App",
  },
  {
    id: "zas_mobile_app_ui",
    title: "ZAS Mobile App UI Design",
    description:
      "Designed an accessible, user-centered mobile interface in Figma for a multinational client, ensuring seamless alignment with functionality.",
    image: "/images/projects/ZAS/ZAS_Med_App_UI.webp",
    tags: ["Figma"],
    figmaUrl:
      "https://www.figma.com/proto/IAOY9PeXuSZZ0XrC7V9cSA?node-id=0-1&t=1yGif17kzkJ9Cpev-6",
    category: "UI/UX",
  },
  {
    id: "result-processing",
    title: "Result Processing System",
    description:
      "Designed UI wireframes in Figma and built user-focused result dashboards using React, TypeScript, Tailwind CSS, and Shadcn UI, coordinating closely with backend and database teams in an Agile environment.",
    image: "/images/projects/RPS/Teacher_View.webp",
    tags: ["React", "Figma", "Shadcn UI", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/ZahidHasan321/RPS_V2",
    figmaUrl:
      "https://www.figma.com/design/srv5efCd47DGTslEQpASno/Result-Processing-System-UI-Draft?node-id=0-1&t=hCgpyZJwRKfgPhcH-1",
    category: "Frontend",
  },
];

export const skillsData: SkillCategory[] = [
  {
    title: "UI Design",
    skills: [
      { name: "Figma" },
      { name: "Google Stitch" },
      { name: "Adobe Illustrator" },
      { name: "Google AI Studio" },
      { name: "Claude Design" },
      { name: "Canva" },
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "Deep Learning" },
      { name: "Computer Vision" },
      { name: "LLMs & GenAI" },
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-Learn" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Shadcn UI" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Python" },
      { name: "Firebase" },
      { name: "NoSQL" },
      { name: "MySQL" },
      { name: "Node.js" },
      { name: "FastAPI" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "Express.js" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "Linux" },
      { name: "Vercel" },
      { name: "Hugging Face Spaces" },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "DaVinci Resolve Studio" },
      { name: "Adobe Photoshop" },
      { name: "Communication" },
      { name: "Collaboration" },
      { name: "Problem-Solving" },
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Martha Rose",
    role: "Host & Producer",
    company: "The Benefits of Therapy Podcast",
    text: "Timely communication, patience for a newbie, detail oriented, commitment to quality work. I hired two people for the same job compared their work, and hands down, Shoaib's work was SO much better. I will rehire him!",
    rating: 5,
  },
  {
    id: "t2",
    name: "Jana Sosnowski",
    role: "Client",
    company: "Upwork",
    text: "Shoaib went above and beyond to meet a very urgent deadline. He has extremely strong editing skills and created seamless videos. I will definitely rehire in the future.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Alexandra Lauber",
    role: "Literature Reviewer",
    company: "A NovelTea Podcast",
    text: "Great to work with! Good communication and solid work.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Jude Bunney",
    role: "Client",
    company: "Fiverr",
    text: "It was a pleasure working with Shoaib! He was professional and polite and create some amazing social media content for our cricket club. We are already getting feedback on how great the posts look already. Thanks Shoaib!",
    rating: 5,
  },
];

export const educationData: EducationData = {
  education: [
    {
      degree: "M.S. in Engineering",
      institution: "University of Chittagong",
      field: "Computer Science & Engineering",
      year: "Expected: Dec, 2026",
      status: "Currently Enrolled",
    },
    {
      degree: "B.Sc. in Engineering",
      institution: "University of Chittagong",
      field: "Computer Science & Engineering",
      year: "2025",
      gpa: "3.43",
      scale: "4.00",
      status: "Graduated",
      courses: [
        "Machine Learning",
        "Artificial Intelligence",
        "Digital Image Processing",
        "Software Engineering and Design Patterns",
        "Computer Networks",
        "Design and Analysis of Algorithms",
        "Database Systems",
        "Data Structures",
        "Discrete Mathematics",
      ],
    },
    {
      degree: "HSC",
      institution: "Cox's Bazar Govt. College",
      field: "Science",
      year: "2018",
      gpa: "4.67",
      scale: "5.00",
      status: "Completed",
    },
  ],
  certifications: [
    {
      title: "Fundamentals of AI Agents Using RAG and LangChain",
      issuer: "IBM",
      url: "https://www.coursera.org/account/accomplishments/certificate/Z97OA7FRND9D",
      pdfPath: "/Coursera_Certifcate_On_Fundamentals_of_AI_Agents.pdf",
    },
  ],
  activities: [
    "Participant and National Round Qualifier – 8th Dutch-Bangla Bank–Prothom Alo Bangladesh Physics Olympiad, 2018.",
    "Team Lead – Design and Marketing Team, CSEPL 2022 & 2023, organized by the CSE Department, University of Chittagong.",
    "Volunteer – 5th Convocation of the University of Chittagong (Departmental), 2025 and CSE Fest 2020. Created an official video presentation showcased at the CSE Department during Convocation.",
  ],
};
