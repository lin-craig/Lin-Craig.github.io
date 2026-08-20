# Craig Lin 的个人网站

这是一个使用 Jekyll 和 GitHub Pages 发布的个人学术网站。项目刻意保持精简：日常更新只需要编辑 Markdown 或 YAML，不需要理解模板代码。

## 最常用的文件

```text
_pages/about.md                 首页文字和 Updates
_pages/publications.md          论文和项目
_pages/teaching.md              教学经历
_pages/professional-service.md  学术服务
_pages/contact.md               联系方式
_config.yml                     姓名、头像、简介、邮箱和 LinkedIn
_data/navigation.yml            顶部导航栏及顺序
assets/css/main.scss            字体、颜色和页面样式
images/                         头像和网站图标
```

其他文件通常不需要修改：`_layouts/` 是页面框架，`_includes/sidebar.html` 是左侧个人资料栏。

## 修改内容

打开 `_pages/` 中对应的 `.md` 文件，直接修改第二段 `---` 之后的文字即可。常用 Markdown 格式：

```md
## Section Title

- **June 2026**: An update.
- [Link text](https://example.com/)
```

每个页面开头的 `---` 区域控制标题和网址。一般只修改 `title`，不要删除 `permalink`。

## 修改个人资料

在 `_config.yml` 的 `author` 区域修改姓名、头像、简介、邮箱和 LinkedIn。将 `linkedin` 留空会隐藏链接；填入 LinkedIn 用户名会在侧栏和 Contact 页面同时恢复。更换头像时，把新图片放进 `images/`，再修改 `avatar` 的文件名。

## 修改导航栏

在 `_data/navigation.yml` 中调整项目顺序，或删除不想显示的项目。每个项目包含显示文字 `title` 和网址 `url`。

## 修改字体和颜色

打开 `assets/css/main.scss`。文件最上方 `:root` 中的变量控制整个网站：

- `--background`：页面背景
- `--surface`：正文卡片背景
- `--text`：正文颜色
- `--muted`：辅助文字颜色
- `--accent`：强调色
- `--serif`：标题字体
- `--sans`：正文字体

只改这些变量即可统一调整全站风格。

## 本地预览

最简单的方法是在网站文件夹中运行：

```bash
./preview.sh
```

脚本会自动准备本地环境并启动网站。然后访问 `http://localhost:4000`。

如果你更习惯手动运行，可以使用：

```bash
bundle install
bundle exec jekyll serve
```

不要手动修改 `_site/`，它是预览时自动生成的文件夹。
