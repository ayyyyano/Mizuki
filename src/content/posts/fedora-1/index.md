---
title: Fedora 个人配置
published: 2026-07-30
pinned: false
description: RedmiBook Pro 15 2023 + Fedora 44 个人配置备份
tags: [Linux]
category: 存档备份
licenseName: "CC BY-NC-SA 4.0"
draft: false
date: 2026-07-30
image: "./cover.png"
pubDate: 2026-07-30
permalink: "fedora-1"
---

# 桌面环境安装与配置

## 安装 Niri

根据官方文档，Fedora 可通过下面命令安装 Niri。安装完成后，注销，在登录页面右下方显示管理器中选择 Niri 后重新登录。

```
sudo dnf copr enable avengemedia/dms
sudo dnf install niri dms
systemctl --user add-wants niri.service dms
```

## 禁用 Waybar

终端执行：

```
nano ~/.config/niri/config.kdl
```

搜索：

```
spawn-at-startup "waybar”
```

删除或注释后，保存并重启系统。

## 锁屏快捷键

swaylock 可能存在 UI 异常，可以调用 loginctl。

Niri 设置 → 键盘快捷键 → Lock the Screen: swaylock 下的命令由 `swaylock` 替换为 `loginctl lock-session`。

## 注销问题

Niri 设置 → 电源与安全 → 电源与睡眠 → 自定义注销命令填入 `loginctl terminate-user $USER`。

## Greetd 英文问题

执行：

```
mkdir -p ~/.config/environment.d
nano ~/.config/environment.d/locale.conf
```

写入：

```
LANG=zh_CN.UTF-8
LANGUAGE=zh_CN:zh
LC_MESSAGES=zh_CN.UTF-8
```

重启系统。

# 中文输入法配置

## 安装 Fcitx 5

终端执行下面命令安装 Fcitx 5。

```
sudo dnf install fcitx5-chinese-addons fcitx5-autostart
```

## 配置环境变量

执行：

```
mkdir -p ~/.config/environment.d
nano ~/.config/environment.d/fcitx5.conf
```

填入：

```
GTK_IM_MODULE=fcitx
QT_IM_MODULE=fcitx
XMODIFIERS=@im=fcitx
```

注销重新登录。

## 主题更换

> 我使用自修改主题，原始版本来自 GitHub @Passthem-desu，食用方法见 GitHub。
> 

https://github.com/ayyyyano/fcitx5-theme-pt-cute-plus

# 中文目录迁移

## 查看当前映射

```
cat ~/.config/user-dirs.dirs
```

## 创建英文目录

```
mkdir -p ~/Desktop \
~/Downloads \
~/Documents \
~/Pictures \
~/Videos \
~/Music \
~/Templates \
~/Public
```

## 修改 XDG 配置

执行：

```
nano ~/.config/user-dirs.dirs
```

替换为下面内容后保存并退出。

```
XDG_DESKTOP_DIR="$HOME/Desktop"
XDG_DOWNLOAD_DIR="$HOME/Downloads"
XDG_DOCUMENTS_DIR="$HOME/Documents"
XDG_PICTURES_DIR="$HOME/Pictures"
XDG_VIDEOS_DIR="$HOME/Videos"
XDG_MUSIC_DIR="$HOME/Music"
XDG_TEMPLATES_DIR="$HOME/Templates"
XDG_PUBLICSHARE_DIR="$HOME/Public"
```

## 旧文件迁移

迁移：

```
mv ~/桌面/* ~/Desktop/
mv ~/下载/* ~/Downloads/
mv ~/文档/* ~/Documents/
mv ~/图片/* ~/Pictures/
mv ~/视频/* ~/Videos/
mv ~/音乐/* ~/Music/
mv ~/模板/* ~/Templates/
mv ~/公共/* ~/Public/
```

重新读取：

```
xdg-user-dirs-update
```

# 文件管理器

## 安装 Dolphin

终端执行：

```
sudo dnf install dolphin
```

## 图标更换

> 这里以 Tela-circle 为例
> 

安装 Tela-circle：

```
cd /tmp
git clone https://github.com/vinceliuice/Tela-circle-icon-theme.git
cd Tela-circle-icon-theme
./install.sh -a
```

应用：

```
sudo dnf install qt6ct
sudo dnf install kde-cli-tools
qt6ct
```

环境变量配置：

```
mkdir -p ~/.config/environment.d
nano ~/.config/environment.d/qt6ct.conf写入：
```

```
QT_QPA_PLATFORMTHEME=qt6ct
```

保存并退出。重启。

## 深色模式下字体显示

获取当前主题：

```
ls ~/.local/share/color-schemes
```

输出示例：

```
DankMatugen.colors  DankMatugenDark.colors  DankMatugenLight.colors
```

手动指定：

```
kwriteconfig6 \
--file ~/.config/kdeglobals \
--group General \
--key ColorScheme \
DankMatugenDark
```

*通过这种方式更换深色主题，有较大概率出现黑底黑字情况，文字不方便辨认，请看我的另一篇文章。

# Qt 应用问题

> 默认配置下，WPS 出现中文字体缺失与缩放问题，这里逐一解决。
> 

## 中文字体安装

```
sudo dnf install google-noto-sans-cjk-fonts langpacks-zh_CN
fc-cache -fv
```

## 环境变量

我的环境：3200*2000 175%缩放 得到 DPI 168

单独配置:

```
flatpak override --user \
--env=QT_FONT_DPI=168 \
cn.wps.wps_365
```

全局 (不推荐):

```
QT_FONT_DPI=168
```

# 主题美化相关

## 更换系统图标

可以在 https://www.gnome-look.org/ 下载自己喜欢的图标包和鼠标指针，下载后解压到 /home/.icons。完成后前往 Niri DMS 或 Gnome Tweaks 启用图标即可。

Niri：

前往 DMS 设置 → 个性化 → 主题与配色 → 图标主题 中尝试应用。

Gnome Tweaks (可选)：

```
sudo dnf install gnome-tweaks
```

运行后，在外观 → 样式处即可更换图标。

## 更换系统字体

- 手动安装 (如 Google Sans Flex 等)：
1. 下载 Google Sans Flex，解压到本地目录
2. 将 ttf 文件复制到系统目录：

```
mkdir -p ~/.local/share/fonts
cp *.ttf ~/.local/share/fonts/
```

刷新缓存：

```
fc-cache -fv
```

检查：

```
fc-list | grep "Google Sans"
```

- 从软件源安装 (如 JetBrains Mono、Noto Sans CJK 等)

获取并安装

```
sudo dnf install \
google-noto-sans-cjk-fonts \
google-noto-emoji-fonts \
jetbrains-mono-fonts
```

刷新缓存：

```
fc-cache -fv
```

检查：

```
fc-list | grep "Noto Sans CJK”
```

- 应用

Niri：在字体安装完成后，重启系统。

前往 Niri DMS 设置 → 个性化 → 排版与动画 选择合适的常规字体、等宽字体。

Gnome Tweaks (可选)：

字体 → 偏好的字体，依次设置界面文本、文档文本、等宽文本。

# 终端替换

## Ghostty 安装

```
dnf copr enable scottames/ghostty
dnf install ghostty
```

## Zsh 初始配置

安装：

```
sudo dnf install zsh
```

设置为默认 Shell：

```
chsh -s $(which zsh)
```

安装 Oh My Zsh：

```
sh -c "$(curl -fsSL https://install.ohmyz.sh/)"
```

## Starship 初始配置

安装：

```
sudo dnf install starship
```

配置 Shell：

```
nano ~/.zshrc
```

添加：

```
eval "$(starship init zsh)”
```

保存并退出，执行：

```
source ~/.zshrc
```

安装 Nerd Font：

```
sudo dnf install jetbrains-mono-fonts
```

# *电源键熄屏替代挂起

> 大部分设备不需要此项操作，但在某些休眠/挂起后无法正常工作的设备，比如我的 RedmiBook，这将非常有帮助。
> 

## 禁止挂起与休眠功能

执行：

```
sudo systemctl mask sleep.target suspend.target hibernate.target hybrid-sleep.target
```

若需恢复：

```
sudo systemctl unmask sleep.target suspend.target hibernate.target hybrid-sleep.target
```

## 进阶：自定义电源键行为 → 熄屏

先用上面命令禁止原先操作，执行：

```
sudo dnf install wev
wev
```

完成后捕获电源键输出，示例：

```
[        16:     wl_keyboard] key: serial: 2018; time: 212611; key: 124; state: 0 (released)
sym: XF86PowerOff (269025066), utf8: ''
```

编辑 Niri 配置文件

```
nano ~/.config/niri/config.kdl
```

搜索 `binds {`，在下方填入：

```
binds {
    XF86PowerOff allow-when-locked=true {
        spawn "niri" "msg" "action" "power-off-monitors";
    }
}
```