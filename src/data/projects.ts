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
		techStack: ["Next.js", "TypeScript"],
		status: "completed",
		sourceCode: "https://github.com/ayyyyano/Personal-AskBox",
		visitUrl: "https://askbox.nekro.top",
		startDate: "2026-06-20",
		endDate: "2026-08-31",
		featured: true,
		tags: ["AskBox", "Vibe Coding", "Open Source"],
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
		featured: true,
		tags: ["DankMaterialShell", "Vibe Coding", "Open Source"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
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
