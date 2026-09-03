export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-2 lg:row-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end md:pb-10",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start md:justify-center lg:justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center lg:text-sm",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start md:justify-center lg:justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "lg:col-span-2 lg:row-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 md:h-[80%]",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-1 lg:row-span-1 md:col-span-6 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center  md:max-w-full max-w-60 text-center m-auto",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Masin Advisory Group Platform",
    des: "Full-stack business platform combining content, events, payments, and AI-powered customer support.",
    img: "/blog.png",
    iconLists: ["/nextjs.svg", "/ts.svg", "/tail.svg", "/re.svg"],
    link: "https://masinadvisory.com",
    liveLink: "https://masinadvisory.com",
    demo: "",
    techStack: ["Next.js", "TypeScript", "Cloudflare D1", "Vercel AI SDK", "Grok", "Cloudflare AI"],
    role: "Software Engineer",
    timeline: "Jan 2025 - Present"
  },
  {
    id: 2,
    title: "AI-Assisted Application Monitoring Agent",
    des: "An AI-assisted application monitoring system that allows developers to investigate application activity through natural-language queries. Built during my work at Telex.",
    img: "/monitor.png",
    iconLists: ["/csharp.svg", "/mongodb.svg"],
    link: "https://github.com/Fabito97/apm-agent",
    liveLink: "",
    demo: "",
    techStack: ["C#", "ASP.NET Core", "MongoDB", "Semantic Kernel", "REST APIs"],
    role: "Backend / AI Engineer",
    timeline: "Apr 2025 - Dec 2025"
  },
  {
    id: 3,
    title: "RAG Agent System",
    des: "End-to-end Retrieval-Augmented Generation system allowing users to query information contained within uploaded documents using multi-step agentic retrieval.",
    img: "/b5.svg",
    iconLists: ["/ts.svg"],
    link: "https://github.com/Fabito97/ragent",
    liveLink: "",
    demo: "",
    techStack: ["Python", "FastAPI", "LangChain", "ChromaDB", "LLM APIs", "Vector Embeddings"],
    role: "Backend / AI Engineer",
    timeline: "2025"
  },
  {
    id: 4,
    title: "Traïdr E-Commerce Platform",
    des: "Full-stack e-commerce MVP built as a team capstone project with Google Sign-In, catalog indexing, and shopping cart transactions.",
    img: "/traider.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/csharp.svg"],
    link: "https://github.com/Fabito97/traidr_e-commerce",
    liveLink: "",
    demo: "",
    techStack: ["C#", "ASP.NET Core", "PostgreSQL", "React", "EF Core", "Tailwind CSS"],
    role: "Team Lead / Full-Stack Contributor",
    timeline: "2024"
  }
];

export const testimonials = [
  {
    quote:
      "Working with Fabian was inspiring. He combines deep backend expertise with full-stack execution. His contributions consistently elevated our product quality and team momentum.",
    name: "Lucky Otono",
    title: "CEO, Penzra Hub"
  },
  {
    quote:
      "Fabian is a sharp and reliable developer. I was impressed by his attention to detail and ability to deliver complex features under tight deadlines. He brings clarity to engineering challenges.",
    name: "Godwin Etebenueme",
    title: "Software Engineer"
  },
  {
    quote:
      "Few developers learn as quickly and adapt as smoothly as Fabian. He took ownership of backend API flows, agent workflows, and optimized areas beyond initial scope.",
    name: "John Ansa",
    title: "Senior Software Engineer"
  }
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer - Flex Your Brands",
    desc: "Built and maintained a full-stack Next.js application combining content management, blog publishing, event management, payments, and AI customer support with tool calling.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg"
  },
  {
    id: 2,
    title: "Backend Developer (Contributor) - Telex",
    desc: "Designed and implemented backend APIs and Semantic Kernel orchestration workflows supporting AI applications. Built the AI-assisted application monitoring agent.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg"
  },
  {
    id: 3,
    title: "Backend Engineer - HNG Tech (HNG 12)",
    desc: "Engineered RESTful APIs, led boilerplate backend refactors, and automated Docker container deployment pipelines to AWS EC2 using GitHub Actions.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg"
  }
];

export const skills = [
  { name: "HTML", icon: "/html.svg", level: 95 },
  { name: "CSS", icon: "/css.svg", level: 90 },
  { name: "C#", icon: "/csharp.svg", level: 90},
  { name: "JavaScript", icon: "/javascript.svg", level: 80 },
  { name: "TypeScript", icon: "/typescript.svg", level: 70 },
  { name: "React", icon: "/react.svg", level: 85 },
  { name: "Node.js", icon: "/nodejs.svg", level: 80 },
  { name: "Next.js", icon: "/nextjs.svg", level: 50 },
  { name: "MSSQL", icon: "/sql.svg", level: 85 },
  { name: "PostgresQL", icon: "/postgresql.svg", level: 80 },
  { name: "MongoDb", icon: "/mongodb.svg", level: 70 },
]

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    url: "https://github.com/fabito97",
  },
  {
    id: 2,
    name: "Twitter",
    img: "/twit.svg",
    url: "https://x.com/muoghalufabian",
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    url: "https://www.linkedin.com/in/fabian-muoghalu-37aa7a1a9/"
  },
];