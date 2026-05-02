# Craig Lin 个人网站维护说明

这是一个用 Jekyll + GitHub Pages 搭建的个人学术网站。仓库已经删掉模板自带的示例文章、示例论文、Docker、talkmap、notebook 生成器等文件，只保留当前网站需要的页面、主题骨架和未来常用的扩展位置。

## 现在的文件结构

```text
.
├── _config.yml              # 网站全局信息：姓名、简介、头像、邮箱、链接、网址
├── _data/
│   ├── navigation.yml       # 顶部导航栏
│   └── ui-text.yml          # 主题默认文字，一般不用改
├── _pages/                  # 你最常改的页面内容
│   ├── about.md             # 首页
│   ├── publications.md      # Publications 页面
│   ├── teaching.md          # Teaching 页面
│   ├── professional-service.md
│   ├── contact.md
│   └── 404.md
├── images/                  # 头像、网站图标等图片
├── files/                   # 未来放 PDF、CV、slides、附件
├── assets/                  # CSS、JS、字体文件
├── _layouts/                # 页面模板，普通内容更新不用动
├── _includes/               # 模板组件，普通内容更新不用动
├── _sass/                   # 主题样式源码，只有改视觉风格时再动
├── Gemfile                  # 本地预览依赖
└── README.md                # 本说明
```

## 本地预览网站

第一次预览先安装依赖：

```bash
bundle config set --local path vendor/bundle
bundle install
```

第一行的作用是把依赖安装到本项目的 `vendor/bundle/`，避免写入系统 Ruby 目录时遇到权限问题。

启动本地网站：

```bash
bundle exec jekyll serve -l -H localhost
```

打开浏览器访问：

```text
http://localhost:4000
```

改 `_config.yml` 后需要停止服务再重新启动；改 `_pages/` 里的 Markdown 页面通常会自动刷新。

## 修改网站基本信息

文件：`_config.yml`

常改位置：

```yml
title: "Craig Lin"
name: "Craig Lin"
description: "Personal academic website..."
url: "https://lin-craig.github.io"

author:
  avatar: "yan-craig-lin.png"
  name: "Craig Lin"
  bio: "B.Eng. in Telecommunications Engineering"
  employer: "Nanjing University"
  employer_url: "https://www.nju.edu.cn/"
  email: "yanlin@smail.nju.edu.cn"
  linkedin: "limyen"
```

怎么改：

- 改网站标题：改 `title` 和 `name`。
- 改左侧头像：把新图片放到 `images/`，然后把 `author.avatar` 改成新文件名。
- 改简介：改 `description` 和 `author.bio`。
- 改邮箱：改 `author.email`。
- 改学校或机构：改 `author.employer` 和 `author.employer_url`。
- 加 GitHub、Google Scholar、ORCID：填写 `author.github`、`author.googlescholar`、`author.orcid`。

## 修改顶部导航栏

文件：`_data/navigation.yml`

每一项长这样：

```yml
- title: "Publications"
  url: /publications/
```

怎么改：

- 改导航文字：改 `title`。
- 改顺序：移动整段 `title + url`。
- 隐藏某个导航：删除对应两行。
- 添加新页面入口：先在 `_pages/` 里新建页面，再在这里加一项。

## 修改首页

文件：`_pages/about.md`

顶部这段不要轻易删，它决定页面网址和标题：

```md
---
permalink: /
title: "Craig Lin"
author_profile: true
---
```

正文从 `---` 后面开始写。首页里的 `## Updates` 是更新列表，添加新动态时照这个格式加一行：

```md
- **May 2026**: Homepage refreshed.
```

## 修改 Publications 页面

文件：`_pages/publications.md`

可以直接在 `## Papers` 下写论文。推荐格式：

```md
- **Paper Title**  
  Author A, Craig Lin, Author C.  
  *Conference or Journal*, 2026.  
  [Paper](/files/paper-name.pdf) / [Code](https://github.com/xxx/xxx)
```

如果有 PDF：

1. 把 PDF 放进 `files/` 文件夹。
2. 在页面里用 `/files/文件名.pdf` 链接它。

## 修改 Teaching 页面

文件：`_pages/teaching.md`

推荐格式：

```md
## Teaching Assistant

- **Course Name**, Nanjing University, Spring 2026  
  Short description of your role.
```

## 修改 Professional Service 页面

文件：`_pages/professional-service.md`

推荐格式：

```md
## Reviewing

- Reviewer, Conference Name, 2026

## Service

- Volunteer, Event Name, 2025
```

## 修改 Contact 页面

文件：`_pages/contact.md`

当前格式：

```md
**Email:** [yanlin@smail.nju.edu.cn](mailto:yanlin@smail.nju.edu.cn)<br>
**LinkedIn:** [linkedin.com/in/limyen](https://www.linkedin.com/in/limyen/)
```

如果要加 GitHub：

```md
**GitHub:** [github.com/yourname](https://github.com/yourname)
```

## 添加一个新页面

比如要添加 `Awards` 页面：

1. 在 `_pages/` 新建 `awards.md`。
2. 写入：

```md
---
title: "Awards"
permalink: /awards/
author_profile: true
---

## Awards

- Award Name, 2026
```

3. 打开 `_data/navigation.yml`，添加：

```yml
- title: "Awards"
  url: /awards/
```

## 添加图片

1. 把图片放到 `images/`。
2. 在页面中这样引用：

```md
![图片说明](/images/your-image.png)
```

如果是换头像，除了放图片，还要去 `_config.yml` 改：

```yml
author:
  avatar: "your-image.png"
```

## 添加 PDF 或附件

1. 把文件放到 `files/`。
2. 在页面中这样链接：

```md
[Download CV](/files/cv.pdf)
```

## 修改颜色、排版和样式

普通内容更新不用改样式文件。

如果只是微调页面外观，优先改：

```text
assets/css/main.scss
```

如果要改主题颜色变量，再看：

```text
_sass/theme/
```

这些属于网站底层视觉，改之前建议先本地预览，确认没有影响移动端。

## 哪些文件一般不要动

这些是 Jekyll 主题骨架，除非你明确知道要改模板：

```text
_layouts/
_includes/
_sass/vendor/
assets/js/main.min.js
assets/js/theme.js
assets/webfonts/
```

平时维护网站，主要只需要改：

```text
_config.yml
_data/navigation.yml
_pages/
images/
files/
```
