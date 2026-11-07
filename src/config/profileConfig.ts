import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
	name: "Nekro",
	bio: "日常记录 / 经验分享",
	typewriter: {
		enable: true, // 启用个人简介打字机效果
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "GitHub",
			icon: "line-md:github",
			url: "https://github.com/ayyyyano",
		},
		{
			name: "Twitter",
			icon: "line-md:twitter",
			url: "https://x.com/pavlova233",
		},
		{
			name: "Telegram",
			icon: "line-md:telegram",
			url: "https://github.com/ayyyyano",
		},
		{
			name: "Email",
			icon: "line-md:email",
			url: "mailto:i@nekro.top",
		},
		{
			name: "RSS",
			icon: "line-md:rss",
			url: "/rss/",
		},
	],
};
