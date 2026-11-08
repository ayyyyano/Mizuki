// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "askbox",
		title: "Personal-AskBox",
		description:
			"An anonymous Q&A site that can be quickly deployed to Cloudflare Workers.",
		image: "/assets/projects/askbox.png",
		category: "web",
		techStack: ["Next.js", "React", "TypeScript"],
		status: "in-progress",
		sourceCode: "https://github.com/ayyyyano/Personal-AskBox",
		visitUrl: "https://askbox.nekro.top",
		startDate: "2026-06-20",
		featured: true,
		tags: ["AskBox", "Cloudflare Workers", "MDUI"],
	},
	{
		id: "nozoki",
		title: "Nozoki",
		description: "A self-deployable, comprehensive data dashboard.",
		image: "/assets/projects/nozoki.png",
		category: "web",
		techStack: ["Nuxt.js", "Vue", "TypeScript"],
		status: "planned",
		sourceCode: "https://github.com/ayyyyano/Nozoki",
		visitUrl: "https://github.com/ayyyyano/Nozoki",
		startDate: "2026-10-30",
		tags: ["Dashboard", "Cloudflare Workers", "Varlet"],
	},
	{
		id: "littleapple-start",
		title: "LittleApple-Start",
		description: "A local-first browser start page centered on personal background, color, and visual composition.",
		image: "/assets/projects/littleapple-start.png",
		category: "web",
		techStack: ["Next.js", "React", "TypeScript"],
		status: "in-progress",
		sourceCode: "https://github.com/ayyyyano/LittleApple-Start",
		visitUrl: "https://github.com/ayyyyano/LittleApple-Start",
		startDate: "2026-10-02",
		tags: ["StartPage", "Vercel", "TailwindCSS"],
	},
	{
		id: "dsl",
		title: "DMS-SPlayer-Lyrics",
		description: "A real-time lyrics plugin for DankMaterialShell (DMS).",
		image: "/assets/projects/dsl.png",
		category: "desktop",
		techStack: ["QML", "Python"],
		status: "completed",
		sourceCode: "https://github.com/ayyyyano/DMS-SPlayer-Lyrics",
		visitUrl: "https://github.com/ayyyyano/DMS-SPlayer-Lyrics",
		startDate: "2026-08-05",
		endDate: "2026-08-07",
		tags: ["DankMaterialShell", "Lyrics", "SPlayer"],
	},
	{
		id: "bbtl",
		title: "Bilibili-Timeline-Thumb",
		description: "Provide a thumb service for updates from creators you follow on your Bilibili timeline.",
		image: "",
		category: "other",
		techStack: ["Python"],
		status: "completed",
		sourceCode: "https://github.com/ayyyyano/bbtl-thumb",
		visitUrl: "https://github.com/ayyyyano/bbtl-thumb",
		startDate: "2026-07-31",
		endDate: "2026-07-31",
		tags: ["Bilibili", "CLI"],
	},
	{
		id: "mytig",
		title: "MYTIG",
		description: "A CLI tool that converts arbitrary app logos into Android 12+ monochrome themed icons.",
		image: "",
		category: "other",
		techStack: ["Python"],
		status: "completed",
		sourceCode: "https://github.com/ayyyyano/MYTIG",
		visitUrl: "https://github.com/ayyyyano/MYTIG",
		startDate: "2026-07-11",
		endDate: "2026-07-14",
		tags: ["MonoChrome", "Icon", "CLI"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
