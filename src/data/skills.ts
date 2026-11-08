// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"A type-safe superset of JavaScript that enhances code quality and development efficiency.",
		icon: "simple-icons:typescript",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 5 },
		projects: ["personal-askbox", "littleapple-start", "nozoki"],
		color: "#3178C6",
	},
	{
		id: "nextjs",
		name: "Next.js",
		description:
			"A production-level React framework supporting SSR, SSG, and full-stack development.",
		icon: "simple-icons:nextdotjs",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 5 },
		projects: ["personal-askbox", "littleapple-start"],
		color: "#616161", // 更改为深灰色，避免纯黑色
	},
	{
		id: "nuxtjs",
		name: "Nuxt.js",
		description:
			"The full-stack Vue framework.",
		icon: "simple-icons:nuxt",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 2 },
		projects: ["nozoki"],
		color: "#00DC82", // 更改为深灰色，避免纯黑色
	},
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
		icon: "simple-icons:javascript",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["personal-askbox", "littleapple-start", "nozoki"],
		color: "#F7DF1E",
	},
	{
		id: "astro",
		name: "Astro",
		description:
			"A modern static site generator supporting multi-framework integration and excellent performance.",
		icon: "simple-icons:astro",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 2 },
		color: "#FF5D01",
	},

	// Backend Skills
	{
		id: "python",
		name: "Python",
		description:
			"A general-purpose programming language suitable for web development, data analysis, machine learning, and more.",
		icon: "simple-icons:python",
		category: "backend",
		level: "beginner",
		experience: { years: 2, months: 0 },
		projects: ["bbtl-thumb"],
		color: "#3776AB",
	},
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"A JavaScript runtime based on Chrome V8 engine, used for server-side development.",
		icon: "simple-icons:nodedotjs",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 5 },
		projects: ["personal-askbox", "nozoki"],
		color: "#339933",
	},
	{
		id: "php",
		name: "PHP",
		description:
			"A widely-used server-side scripting language, particularly suitable for web development.",
		icon: "simple-icons:php",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#777BB4",
	},

	// Database Skills
	{
		id: "sqlite",
		name: "SQLite",
		description:
			"A lightweight, serverless database engine that is widely used in mobile and desktop applications.",
		icon: "simple-icons:sqlite",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 3 },
		color: "#666666",
	},
	{
		id: "postgres",
		name: "PostgreSQL",
		description:
			"An advanced open-source relational database management system known for its robustness and extensibility.",
		icon: "simple-icons:postgresql",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#2196F3",
	},
	{
		id: "mysql",
		name: "MySQL",
		description:
			"The world's most popular open-source relational database management system, widely used in web applications.",
		icon: "simple-icons:mysql",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 2 },
		color: "#4479A1",
	},

	// Tools
	{
		id: "docker",
		name: "Docker",
		description:
			"A containerization platform that simplifies application deployment and environment management.",
		icon: "simple-icons:docker",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 2 },
		projects: ["littleapple-start"],
		color: "#2496ED",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"An open-source operating system, the preferred choice for server deployment and development environments.",
		icon: "simple-icons:linux",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["dms-splayer-lyrics"],
		color: "#FCC624",
	},
	{
		id: "git",
		name: "Git",
		description:
			"A distributed version control system, an essential tool for code management and team collaboration.",
		icon: "simple-icons:git",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 10 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"A lightweight but powerful code editor with a rich plugin ecosystem.",
		icon: "simple-icons:visualstudiocode",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		color: "#007ACC",
	},
	{
		id: "nginx",
		name: "Nginx",
		description: "A high-performance web server and reverse proxy server.",
		icon: "simple-icons:nginx",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#009639",
	},

	// Other Skills
	{
		id: "mdui",
		name: "MDUI",
		description:
			"Material Design 3 (Material You) UI components, build with Web Components.",
		icon: "material-symbols:all-inbox",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 6 },
		projects: ["personal-askbox"],
		color: "#E10098",
	},
	{
		id: "varlet",
		name: "Varlet",
		description:
			"Varlet UI is a Material design component library developed based on Vue3",
		icon: "material-symbols:all-inbox",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 2 },
		projects: ["nozoki"],
		color: "#1976D2",
	},
	{
		id: "algolia",
		name: "Algolia",
		description:
			"A distributed search and analytics engine used for full-text search and data analysis.",
		icon: "material-symbols:search",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 4 },
		projects: ["personal-askbox"],
		color: "#005571",
	},
];
