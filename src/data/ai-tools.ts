export type AIToolCategory =
	| "chat"
	| "coding"
	| "image"
	| "audio"
	| "video"
	| "writing"
	| "search"
	| "other";

export type AIToolFrequency =
	| "daily"
	| "weekly"
	| "occasional"
	| "experimental";

export type LocaleString = Partial<
	Record<"en" | "zh_CN" | "zh_TW" | "ja", string>
>;

export function getLocaleString(value: LocaleString, lang: string): string {
	return value[lang as keyof LocaleString] ?? value.en ?? "";
}

export interface AITool {
	id: string;
	name: string;
	description: LocaleString;
	icon: string;
	category: AIToolCategory;
	frequency: AIToolFrequency;
	url?: string;
	usage?: LocaleString;
	tags?: string[];
	color?: string;
}

// Replace the examples below with your own AI tools
export const aiToolsData: AITool[] = [
	{
		id: "chatgpt",
		name: "ChatGPT",
		description: {
			en: "ChatGPT helps you find answers, gain inspiration, and boost productivity with ease.",
			zh_CN: "ChatGPT 帮助你轻松找到答案、获得灵感并提高生产力。",
		},
		icon: "mingcute:openai-line",
		category: "chat",
		frequency: "daily",
		url: "https://chatgpt.com/",
		usage: {
			en: "Daily: chat, write and plan",
			zh_CN: "每天：聊天、写作与规划",
		},
		tags: ["Chat"],
		color: "#10A37F",
	},
	{
		id: "codex",
		name: "Codex",
		description: {
			en: "Move faster, go further, and bring your biggest ideas to life.",
			zh_CN: "加快开发步伐，走得更远，将最宏大的构想变为现实。",
		},
		icon: "material-symbols:code",
		category: "coding",
		frequency: "weekly",
		url: "https://chatgpt.com/codex/",
		usage: {
			en: "Weekly: build, explore, code review",
			zh_CN: "每周：构建、探索与代码审查",
		},
		tags: ["Coding"],
		color: "#666666",
	},
	{
		id: "dsh",
		name: "DeepSeek Harness",
		description: {
			en: "Everything is a Plugin.",
			zh_CN: "以可自由组合的插件，拓展 Agent 能力。",
		},
		icon: "mingcute:deepseek-line",
		category: "other",
		frequency: "occasional",
		url: "",
		tags: ["Other"],
		usage: {
			en: "Occasionally: use as a priority when the Codex quota is running low.",
			zh_CN: "偶尔：简单任务处理, Codex 额度不足时使用。",
		},
		color: "#1A73E8",
	},
];
