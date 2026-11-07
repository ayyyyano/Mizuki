import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "", // 公告标题，填空使用i18n字符串Key.announcement
	content:
		"如果本站内容对你有所帮助，欢迎自愿支持我的创作。此外，我正在入驻爱发电。", // 公告内容
	closable: false, // 允许用户关闭公告
	link: {
		enable: true, // 启用链接
		text: "点此支持", // 链接文本
		url: "https://pay.nekro.top/", // 链接 URL
		external: false, // 内部链接
	},
};
