import type { PioConfig } from "../types/config";

// Pio 看板娘配置
export const pioConfig: PioConfig = {
	enable: true, // 启用看板娘
	models: [
		{
			path: "/pio/models/airi/07airi_normal_3.0_f_t03.model3.json",
			scale: 1.22, // 微调贴底：模型画板自带上边距，默认 scale 下角色浮空约 24px
		},
	], // 默认模型路径
	position: "left", // 模型位置
	width: 280, // 默认宽度
	height: 250, // 默认高度
	mode: "draggable", // 默认为可拖拽模式
	hiddenOnMobile: true, // 默认在移动设备上隐藏
	hideAboutMenu: true, // 隐藏内置 About 菜单按钮
	dialog: {
		welcome: "出会ってくれた人に希望を届けられたら、最高じゃない？", // 欢迎词
		touch: [
			"そんなんでアイドルになれると思ってんの！？",
		], // 触摸提示
		home: "点击这里返回首页。", // 首页提示
		skin: ["不同形态的摸摸一爱莉？", "你确定要这样做吗？"], // 换装提示
		close: "下次再见啦！", // 关闭提示
		link: "https://space.bilibili.com/501335897", // 关于链接
	},
};
