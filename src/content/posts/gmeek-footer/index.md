---
title: 站点杂项改动备份
published: 2026-04-09
pinned: false
description: (AIGC / 未完待续) Gmeek footer 引入超链接 / NotionNext 接入 Waline 评论 / Mizuki 引入不蒜子计数器
tags: [网站]
category: 存档备份
licenseName: "CC BY-NC-SA 4.0"
draft: false
date: 2026-04-09
pubDate: 2026-07-09
permalink: "gmeek-footer"
---

<aside>
⚠️

使用 AIGC 技术辅助写作

</aside>

# Gmeek 博客页脚添加超链接

## 起因

在 **Gmeek** 的官方文档中，讲了很多的基础设置项，但未提及在页脚处添加文案或超链接的方法。

## 一键添加

只需在仓库的 **`config.json`** 中添加以下行。

> 若已有 allHead ，直接把 **`<script>`** 到 **</script>** 复制进去即可，链接根据自己的需求替换:
> 

```json
"allHead":"<script>document.addEventListener('DOMContentLoaded', function() { var interval = setInterval(function() { var footer = document.getElementById('footer2'); if (footer) { if (!document.getElementById('customLink')) { var link = document.createElement('a'); link.id = 'customLink'; link.href = '<https://你的链接.com>'; link.innerHTML = '你的链接文字'; link.style.marginLeft = '8px'; link.target = '_blank'; footer.appendChild(document.createTextNode(' | ')); footer.appendChild(link); } clearInterval(interval); } }, 100); });</script>",
```

## 碎碎念

<aside>
💤 在测试过程中，我踩了几个坑，我会指出并且给出对应的修改方法。

</aside>

开始时，我根据 Gmeek 文档描述，决定从 **`bottomText`** 入手。结果就是在文章的右下角多了一串文字，除此之外没有什么变化。在添加了几个斜杠后，超链接就可以正常跳转 (见3) 。

后来，我觉得应该在 **`script`** 上动点东西，我在 **`script`** 上添加了下面的代码，发现超链接只在文章页面有效。

```json
<script>function addLink(){var f=document.getElementById('footer2');if(f&&!document.getElementById('customLink')){var s=document.createElement('span');s.id='customLink';s.innerHTML=' | <a href=\\"<https://你的链接.com>\\" target=\\"_blank\\">你的链接</a>';f.appendChild(s);clearInterval(it)}}var it=setInterval(addLink,200);</script>
```

因此，我又关注到了 **`indexScript`** ，但要在两个地方加入同样的代码多少是有点多余了。我看到了 Gmeek 的插件，其通过在 **`allHead`** 中添加字段，最终也可以在页脚添加文字。但在我把上面的代码移到 **`allHead`** 中时，问题出现了，它不在任何地方显示。

上面似乎是渲染速率的问题，添加了定时器轮询后超链接便能够正常显示在页脚了。最后只需要在一个地方插入代码。

# 将 Waline 评论插件接入 NotionNext

<aside>
😋 我想为这个博客添加评论功能。此前曾关注过 Valine，但因其部署繁琐最终放弃。但现在有了一个相当简便的方案。

</aside>

## 起因

在 NotionNext 的 Waline 部署文档 里，我发现了 Valine 的全新替代品 **Waline** 。

随着 LeanCloud 停止对外提供服务 ，文档里的部署方法已经不再适用。但我在 Waline 官网的评论区发现了一个可用的托管服务。

## 开始吧

1. 注册并登录 ZeroCat 。感谢 孙悟元。
2. 创建一个评论空间。进入所创建的空间，选择接入指南。进入后，复制 Waline 服务端地址。
3. 登录 Vercel。进入 NotionNext 的 **`Environment Variables`** 选项卡，点击上方的 **`Add Environment Variable`。**
4. 在 **`Key`** 处 填写 **`NEXT_PUBLIC_WALINE_SERVER_URL`**，并在 **`Value`** 处粘贴刚才复制的 Waline 服务端地址。完成后重新部署网站即可。

经过上面的操作，NotionNext 就成功接入了 Waline 评论插件，不需要任何复杂配置。

# Mizuki 引入不蒜子计数器

<aside>
😇 不蒜子是我博客长期引用的统计工具，它可以方便的统计站点累计访问数。

</aside>

## **问题起点**

在 **`FooterConfig.html`** 中引入不蒜子计数器时，误用了 Astro 组件语法 **`<Script strategy="afterInteractive" />`**，导致 footer 布局崩溃（音乐播放器、live2d、FAB 全部错位）。

## 快速引入

1. **FooterConfig.html（纯 HTML，通过 `set:html` 注入）**

```
<span id="busuanzi_container_site_pv">本站总访问量<span id="busuanzi_value_site_pv">...</span>次;</span>
```

> **只放 HTML 标签**，不要放 **`<script>`**（Astro 的 **`set:html`** 会剥离）。 如需限宽隐藏，用 Tailwind 类（如 **`hidden lg:inline`**），但**不能用外层的 `style`**（会被 busuanzi 外部脚本覆盖）。
> 
1. **Footer.astro（JS 逻辑）**

往 **`/src/components/organisms/footer/footer.astro`** 末尾添加如下代码。

```
<script is:inline>
  function fetchBusuanzi(retry) {
    var el = document.querySelectorAll('#busuanzi_value_site_pv');
    if (!el) { if (!retry) setTimeout(function() { fetchBusuanzi(true); }, 500); return; }
    var s = document.createElement('script');
    var cb = 'bsz' + Date.now();
    window[cb] = function(d) { if (d && d.site_pv) el.forEach(e => e.textContent = d.site_pv); };
    s.src = 'https://busuanzi.ibruce.info/busuanzi?jsonpCallback=' + cb;
    s.onerror = function() { setTimeout(function() { fetchBusuanzi(true); }, 3000); };
    document.head.appendChild(s);
  }
  fetchBusuanzi(false);
  document.addEventListener('astro:page-load', function() { fetchBusuanzi(false); });
</script>
```

## 最终方案 (PR @Kuriyona)

| **文件** | **改动** |
| --- | --- |
| **`FooterConfig.html`** | 移除 **`hidden lg:inline`**，纯 HTML 只含计数器和 ICP 链接 |
| **`Footer.astro`** | 用 **`querySelectorAll`** + **`forEach`** 替代 **`getElementById`**，更新 **所有** 匹配元素 |
| **`Layout.astro`** | 无改动（外部脚本在 Footer.astro 的 **`is:inline`** 中加载） |

核心修复：**`document.querySelectorAll('#busuanzi_value_site_pv').forEach(e => e.textContent = data.site_pv)`** —— 无论 busuanzi 创建了多少个重复节点，全部更新。

## **关键要点**

| **规则** | **说明** |
| --- | --- |
| JS 放 **`.astro`** 模板中 | 用 **`<script is:inline>`**，不能放 FooterConfig.html |
| 用 **`querySelectorAll`** | 不用 **`getElementById`**，兼容外部脚本可能创建的重复节点 |
| JSONP 而非 fetch | busuanzi API 不支持 CORS，必须用 script 标签注入 |
| 失败重试 | **`onerror`** 中 3 秒后重试 |
| Swup 兼容 | **`astro:page-load`** 事件中重新获取 |
