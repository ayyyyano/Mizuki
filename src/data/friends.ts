// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Smirnova Oyama",
		imgurl: "https://mahiro.uk/content/nekoxun.jpg?t=583a0fbd-a377-83a0-a1ac-8100ac653245",
		desc: "一个本科计算机学生",
		siteurl: "https://mahiro.uk/",
		tags: ["推荐链接"],
	},
	{
		id: 2,
		title: "雾小蒜の小窝",
		imgurl: "https://ciallovo.top/assets/pic/icon.png?t=351a0fbd-a377-80af-82d9-ec983d08a51e",
		desc: "共寻繁星，逐光前行！",
		siteurl: "https://ciallovo.top/",
		tags: ["推荐链接", "好朋友们"],
	},
	{
		id: 3,
		title: "Catarium",
		imgurl: "https://cdn.jsdelivr.net/gh/Eofs791/catpic@main/img/avatar.ico?t=353a0fbd-a377-806c-8b63-ca34292114ee",
		desc: "见崎的猫箱",
		siteurl: "https://catarium.me/",
		tags: ["推荐链接", "好朋友们"],
	},
	{
		id: 4,
		title: "Bingxin Home",
		imgurl: "https://blog.byteloid.one/img/march7th.webp?t=357a0fbd-a377-8064-ba90-c3b8dae5139a",
		desc: "相聚于此乐土。",
		siteurl: "https://byteloid.one/",
		tags: ["推荐链接"],
	},
	{
		id: 5,
		title: "ユキの隠れ家",
		imgurl: "https://www.yukinon.cc/images/avatar.avif",
		desc: "人間になりたいですわ。",
		siteurl: "https://www.yukinon.cc/",
		tags: ["推荐链接"],
	},
	{
		id: 6,
		title: "Amicors",
		imgurl: "https://amicors.cc/_astro/avatar.WKle1sZJ_22GWqu.webp?t=362a0fbd-a377-80e2-9c31-c1f83cb0d9d2",
		desc: "喵喵喵喵喵?",
		siteurl: "https://amicors.cc/",
		tags: ["推荐链接"],
	},
	{
		id: 7,
		title: "锦木祈杰のblog",
		imgurl: "https://oss.qijieya.cn/1/hutao_hai.gif",
		desc: "敬....不完美的明天。",
		siteurl: "https://qijieya.cn/",
		tags: ["推荐链接"],
	},
	{
		id: 8,
		title: "默然的补给站",
		imgurl: "https://moran-neko.moe/img/mortis.ico",
		desc: "一个野生的互联网存档点",
		siteurl: "https://moran-neko.moe/",
		tags: ["推荐链接"],
	},
	{
		id: 9,
		title: "Clover Yan 的小屋",
		imgurl: "https://www.khyan.top/favicon.png?t=353a0fbd-a377-8080-b5de-c752417ff6ae",
		desc: "生命是灰色的，理论之树常青。",
		siteurl: "https://cloveryan.com/",
		tags: ["推荐链接"],
	},
	{
		id: 10,
		title: "ALoneSKy 的小窝",
		imgurl: "https://alonesky.moe/avatar.jpg?t=369a0fbd-a377-80e5-827d-e7402c3bb297",
		desc: "晚安 明天不会更好",
		siteurl: "https://alonesky.moe/",
		tags: ["推荐链接"],
	},
	{
		id: 11,
		title: "Kuriyona's Space",
		imgurl: "https://r2.kuriyona.com/img/avatar/Avatar_256.png?t=370a0fbd-a377-8082-80a0-c1c2cf9fccaa",
		desc: "「一个可爱的女孩子，18 岁中国准大学生，宅，亚二次元，MtF 和兴趣使然的开发者」",
		siteurl: "https://kuriyona.com/",
		tags: ["推荐链接"],
	},
	{
		id: 12,
		title: "Orange's",
		imgurl: "https://orangestd.cn/images/avatar.png",
		desc: "Enjoy freedom.",
		siteurl: "https://orangestd.cn/",
		tags: ["推荐链接"],
	},
	{
		id: 13,
		title: "我的飛鳥集",
		imgurl: "https://api.fmcf.cc/api/v3/objects/avatar/q4yxd5smqxro8lfm69.png",
		desc: "代码与诗的世界",
		siteurl: "https://fmcf.cc/",
		tags: ["推荐链接"],
	},
	{
		id: 14,
		title: "LKDenchin's Blog",
		imgurl: "https://blog.1007777.xyz/img/avatar.jpg",
		desc: "現實與夢想只差一步之遙",
		siteurl: "https://blog.1007777.xyz/",
		tags: ["推荐链接", "好朋友们"],
	},
	{
		id: 15,
		title: "晓怕的宁静一隅",
		imgurl: "https://shiaupa.top/Avatar.png",
		desc: "晓怕的个人网站",
		siteurl: "https://shiaupa.top/",
		tags: ["推荐链接"],
	},
	{
		id: 16,
		title: "启动台の小窝",
		imgurl: "https://launchpadx.top/avatar.jpg",
		desc: "用代码改变世界",
		siteurl: "https://launchpadx.top/",
		tags: ["推荐链接"],
	},
	{
		id: 17,
		title: "Yasaitori",
		imgurl: "https://yatori.cc/assets/me-Bq6z1W4B.jpeg",
		desc: "Always be brave to sleep Dream.",
		siteurl: "https://yatori.cc/",
		tags: ["推荐链接"],
	},
	{
		id: 18,
		title: "Cynosura",
		imgurl: "https://cynosura.one/img/avatar.webp",
		desc: "Trying to light up the dark.",
		siteurl: "https://cynosura.one/",
		tags: ["推荐链接", "好朋友们"],
	},
	{
		id: 19,
		title: "XUNYISHI",
		imgurl: "https://www.xunyishi.com/avatar.jpg",
		desc: "「願世界與你溫柔相待」",
		siteurl: "https://www.xunyishi.com/",
		tags: ["推荐链接"],
	},
	{
		id: 20,
		title: "XFJの主页",
		imgurl: "https://cdn.jsdelivr.net/gh/XFJ-YYQF/Picture@main/img/home192.webp",
		desc: "我永远喜欢哈次捏米库！！！",
		siteurl: "https://minecraftxfj.top/",
		tags: ["推荐链接"],
	},
	{
		id: 21,
		title: "白熊の小窝",
		imgurl: "https://www.hk256.top/avatar/avatar256.jpg",
		desc: "播种与期待之歌，亦是收获与欢愉之歌。",
		siteurl: "https://www.hk256.top/",
		tags: ["推荐链接"],
	},
	{
		id: 22,
		title: "RhenCloud",
		imgurl: "https://rhen.cloud/avatar-1.webp",
		desc: "趁世界还未重启之前 约一次爱恋",
		siteurl: "https://rhen.cloud/",
		tags: ["推荐链接"],
	},
	{
		id: 23,
		title: "阿弃の精神世界",
		imgurl: "https://mihari.cyou/images/favicon.ico",
		desc: "你好呀～这里是 阿弃Akiramenai (一只可爱的猫娘?",
		siteurl: "https://mihari.cyou/",
		tags: ["推荐链接", "好朋友们"],
	},
	{
		id: 24,
		title: "Chanke's Blog",
		imgurl: "https://avatars.githubusercontent.com/u/156302052?v=4&t=353a0fbd-a377-800e-be61-ffe39d927abb",
		desc: "远来的朋友，愿你幸福。",
		siteurl: "https://chanke-blog.pages.dev/",
		tags: ["单向链接"],
	},
	{
		id: 25,
		title: "Aira",
		imgurl: "https://aira.cafe/_vercel/image?url=%2Fimages%2Favatar.webp&w=640&q=100&t=354a0fbd-a377-802a-9be3-c4e0e67459f1",
		desc: "Kind and Kawaii, Forever!~",
		siteurl: "https://aira.cafe/",
		tags: ["单向链接"],
	},
	{
		id: 26,
		title: "Ariasakaの小窝",
		imgurl: "https://img.0v0.my/2024/12/05/67517bcf104da.png?t=353a0fbd-a377-809a-93c8-d6530fd01c0f",
		desc: "人有悲欢离合，月有阴晴圆缺。",
		siteurl: "https://blog.yaria.top/",
		tags: ["等待添加"],
	},
	{
		id: 27,
		title: "孟古一的博客",
		imgurl: "https://blog.mengguyi.com/logo.avif?t=353a0fbd-a377-8059-9d13-fd400306765d",
		desc: "世界上没有绝对的正义，只有不同的观点和立场。",
		siteurl: "https://blog.mengguyi.com/",
		tags: ["等待添加"],
	},
    {
		id: 28,
		title: "清凤小栈",
		imgurl: "https://清凤.fun/images/logo/logo.webp",
		desc: "喜欢捣鼓点技术和哲学",
		siteurl: "https://清凤.fun/",
		tags: ["等待添加"],
	},
	{
		id: 29,
		title: "Asutaka的小站",
		imgurl: "https://www.asutaka.ink/image/head.png",
		desc: "黑夜给了我一双黑色眼睛，但我却用它去寻找光明",
		siteurl: "https://www.asutaka.ink/",
		tags: ["等待添加"],
	},
	{
		id: 30,
		title: "YuanRetro",
		imgurl: "https://www.yuanshen.dev/img/nahida.png",
		desc: "这是一个成分复杂的小站哦~",
		siteurl: "https://www.yuanshen.dev/",
		tags: ["推荐链接"],
	},
	{
		id: 31,
		title: "Hikaru Lab",
		imgurl: "https://webp.isla.fan/avatar/hikaru-tomo.png",
		desc: "即使是人造的记忆，也有它存在的价值",
		siteurl: "https://www.mengxiblog.top/",
		tags: ["推荐链接"],
	},
	{
		id: 32,
		title: "NEKOTSUKI",
		imgurl: "https://www.catsuki.cc/favicon/avatar-icon.jpg",
		desc: "好奇猫a的博客",
		siteurl: "https://www.catsuki.cc/",
		tags: ["推荐链接"],
	},
	{
		id: 33,
		title: "for_the_zero的小站",
		imgurl: "https://ftz.is-a.dev/assets/intro/avatar.png",
		desc: "想要成为一个有趣的、厉害的、快乐的、善良的、……能被你记住的人",
		siteurl: "https://ftz.is-a.dev/",
		tags: ["推荐链接"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
