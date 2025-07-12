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
    title: "Traidr E-commerce Platform",
    des: "Full-stack MVP with Google Sign-In, live search, and PostgreSQL backend.",
    img: "/traider.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/Fabito97/traidr_e-commerce"
  },
  {
    id: 2,
    title: "AI Blogger Agent",
    des: "AI-powered blogging platform built with C# and Gemini API.",
    img: "/blog.png",
    iconLists: ["/c.svg", "/re.svg"],
    link: "https://github.com/telexintegrations/telex-blogger-agent"
  },
  {
    id: 3,
    title: "AI Monitoring Agent",
    des: "An AI monitoring agent for C# applications. Interacts with you about your system errors, traces and metrics",
    img: "/monitor.png",
    iconLists: ["/c.svg"],
    link: "https://github.com/telexorg/vigil-apm-agent"
  },
  {
    id: 4,
    title: "Contact Book API",
    des: "JWT-secured .NET Web API for managing client contacts.",
    img: "/contact.png",
    iconLists: ["/c.svg"],
    link: "https://github.com/Fabito97/contactbook_webapi"
  },
  {
    id: 5,
    title: "Portfolio Management System",
    des: "ASP.NET MVC app with admin editing and role-based access.",
    img: "/porfolio.png",
    iconLists: ["/c.svg"],
    link: "https://github.com/Fabito97/portfolio_mvc"
  },
  {
    id: 6,
    title: "Todo List Task Manager",
    des: "Simple task manager built with React and C# for productivity.",
    img: "/todo.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://toidotaskapp.netlify.app/"
  }
];

export const testimonials = [
  {
    quote:
      "Working with Fabian was inspiring — he combines deep backend expertise with front-end finesse. His contributions at Penzra Hub consistently elevated our product quality and team morale.",
    name: "Lucky Otono",
    title: "CEO, Penzra Hub"
  },
  {
    quote:
      "Fabian is a sharp and reliable developer. I was impressed by his attention to detail and ability to deliver complex features under tight deadlines. He’s a problem-solver who brings clarity to the chaos.",
    name: "Godwin Etebenueme",
    title: "Team mate"
  },
  {
    quote:
      "Few developers learn as quickly and adapt as smoothly as Fabian. He took ownership of backend API flows and even optimized areas beyond the initial scope. A solid contributor and communicator.",
    name: "John Ansa",
    title: "Senior Software Engineer"
  },
  {
    quote:
      "Fabian’s energy is contagious. Whether it's refactoring legacy code or shipping MVP features, he jumps right in with thoughtful solutions and clear enthusiasm. He’s a builder at heart.",
    name: "Amalachukwu",
    title: "Protroleum Engineer"
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
    title: "Software Engineer Trainee – Decagon Institute",
    desc: "Completed 4 week intensive training in React, .NET Core, SQL Server, and Agile methodologies. Spearheaded the development of a full-stack e-commerce MVP featuring Google Sign-In and real-time search, and managed database efficiency using Entity Framework.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg"
  },
  {
    id: 2,
    title: "Backend Engineer Intern – HNG Tech",
    desc: "Engineered RESTful APIs using .NET and the Gemini API to power AI-Agentic systems for task automation. Designed real-time error logging middleware leveraging TDD for faster debugging and an AI Blogging agent for task automation.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg"
  },
  {
    id: 3,
    title: "Volunteer Software Engineer – Penzra Hub",
    desc: "Contributed to the backend development of a travel app using .NET Core and PostgreSQL, ensuring clean code and enhanced performance.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg"
  },
  {
    id: 4,
    title: "Freelance Backend Developer – Telex.im",
    desc: "Designed and maintained backend AI agent systems with C#/.NET and MongoDB including an AI Monitorin agent. Created internal integration guides to sped up team onboarding.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg"
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