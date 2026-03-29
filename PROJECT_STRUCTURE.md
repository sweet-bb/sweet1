```
website-project/
│
├── 📄 package.json                    # 依赖和脚本配置
├── 📄 vite.config.js                  # Vite + vite-ssg 配置
├── 📄 index.html                      # HTML 模板 + Google Fonts
├── 📄 .gitignore                      # Git 忽略规则
│
├── 📁 src/
│   ├── 📄 main.js                     # Vue + vite-ssg 入口
│   ├── 📄 App.vue                     # 根组件 + 全局设计系统
│   │   └── 🎨 完整的 CSS 变量系统
│   │       ├── 配色方案（30+ 颜色）
│   │       ├── 字体系统（2 种字体）
│   │       ├── 间距系统（8 级）
│   │       ├── 按钮样式（3 种）
│   │       ├── 动画库（5+ 效果）
│   │       └── 响应式断点（3 个）
│   │
│   ├── 📁 pages/
│   │   ├── 📄 Home.vue                # 首页（22.6 KB）
│   │   │   ├── 英雄区（标题、副标题、CTA）
│   │   │   ├── 信任徽章（4 个）
│   │   │   ├── 产品卡片（2 个）
│   │   │   ├── 科学部分（统计、插图）
│   │   │   ├── 创始人故事（图片、引言）
│   │   │   ├── 专家证言（3 个）
│   │   │   └── 最终 CTA
│   │   │
│   │   ├── 📄 About.vue               # 关于页（16.8 KB）
│   │   │   ├── 英雄区
│   │   │   ├── 使命陈述
│   │   │   ├── 时间线（6 个里程碑）
│   │   │   ├── 团队成员（4 个）
│   │   │   ├── 价值观卡片（4 个）
│   │   │   └── 最终 CTA
│   │   │
│   │   ├── 📄 Science.vue             # 科学页（18.7 KB）
│   │   │   ├── 英雄区
│   │   │   ├── 关键发现（4 个统计）
│   │   │   ├── 问题说明（4 个原因）
│   │   │   ├── 微生物群落对比
│   │   │   ├── 解决方案卡片（3 个）
│   │   │   ├── 安全和测试（6 个）
│   │   │   ├── 专家引言（3 个）
│   │   │   └── 最终 CTA
│   │   │
│   │   └── 📄 Contact.vue             # 联系页（15.1 KB）
│   │       ├── 英雄区
│   │       ├── 联系信息卡片（4 个）
│   │       ├── 联系表单（6 个字段）
│   │       ├── 表单验证
│   │       ├── 成功/错误消息
│   │       ├── FAQ 部分（6 个）
│   │       └── 最终 CTA
│   │
│   ├── 📁 components/
│   │   ├── 📄 SiteHeader.vue          # 导航栏（6.6 KB）
│   │   │   ├── 公告条（可折叠）
│   │   │   ├── 导航栏（桌面）
│   │   │   ├── 移动菜单（汉堡菜单）
│   │   │   ├── 活跃链接指示器
│   │   │   └── 平滑滚动
│   │   │
│   │   └── 📄 SiteFooter.vue          # 页脚（6.0 KB）
│   │       ├── 社交关注部分
│   │       ├── 品牌信息
│   │       ├── 4 列链接
│   │       └── 底部栏（版权、徽章）
│   │
│   └── 📁 router/
│       └── 📄 index.js                # 路由配置（4 个页面）
│           ├── / → Home.vue
│           ├── /about → About.vue
│           ├── /science → Science.vue
│           └── /contact → Contact.vue
│
├── 📁 public/
│   ├── 📄 favicon.svg                 # 品牌图标（SVG）
│   └── 📄 _redirects                  # Cloudflare Pages SPA 路由
│
└── 📁 文档/
    ├── 📄 README.md                   # 完整项目文档
    ├── 📄 QUICKSTART.md               # 快速启动指南
    ├── 📄 PROJECT_SUMMARY.md          # 项目总结
    ├── 📄 DEPLOYMENT_CHECKLIST.md     # 部署检查清单
    └── 📄 PROJECT_STRUCTURE.md        # 本文件
```

## 📊 项目统计

| 指标 | 数值 |
|------|------|
| **总文件数** | 17 |
| **代码行数** | 3000+ |
| **页面数** | 4 |
| **组件数** | 2 |
| **设计系统变量** | 30+ |
| **CSS 类** | 100+ |
| **响应式断点** | 3 |
| **动画效果** | 5+ |
| **构建输出大小** | ~50KB (gzipped) |

## 🎨 设计系统

### 配色方案
```
主色：
  --color-dark: #1A1512
  --color-brand: #8B5E3C
  --color-brand-dark: #6B4226
  --color-brand-light: #C4A882

中性色：
  --color-cream: #FAF8F3
  --color-warm-white: #F5F0E8
  --color-sand: #E8E0D0
  --color-stone: #C4B8A4
  --color-taupe: #9B8E7E
  --color-mocha: #6B5D4F

强调色：
  --color-soft-rose: #E8D5C8
  --color-sage: #7A8B6F
  --color-accent: #AA6830
```

### 字体
```
Display: DM Serif Display
Body: DM Sans
```

### 间距系统
```
xs:   0.25rem
sm:   0.5rem
md:   1rem
lg:   1.5rem
xl:   2.5rem
2xl:  4rem
3xl:  6rem
4xl:  8rem
```

### 按钮样式
```
.btn-primary    # 深色背景，奶油文字
.btn-secondary  # 透明背景，深色边框
.btn-outline    # 透明背景，品牌色边框
```

### 动画效果
```
@keyframes fadeInUp      # 淡入 + 向上滑动
@keyframes fadeIn        # 纯淡入
@keyframes slideInLeft   # 从左滑入
@keyframes scaleIn       # 缩放进入
@keyframes marquee       # 滚动效果
```

## 🚀 技术栈

```
Frontend:
  - Vue 3 (Composition API)
  - Vite (极速构建)
  - vite-ssg (静态生成)

Styling:
  - CSS-in-JS (scoped styles)
  - CSS 变量系统
  - 响应式设计

Forms:
  - EmailJS (免费邮件服务)
  - 表单验证
  - 成功/错误消息

Hosting:
  - Cloudflare Pages (免费)
  - 全球 CDN (300+ 节点)
  - 自动 HTTPS
  - DDoS 保护

Fonts:
  - Google Fonts (DM Serif Display + DM Sans)
```

## 📱 响应式断点

```
Desktop:  1200px+
Tablet:   768px - 1199px
Mobile:   < 768px
```

## 🎯 功能清单

### 首页
- [x] 英雄区
- [x] 信任徽章
- [x] 产品卡片
- [x] 科学部分
- [x] 创始人故事
- [x] 专家证言
- [x] 最终 CTA

### 关于页
- [x] 英雄区
- [x] 使命陈述
- [x] 时间线
- [x] 团队成员
- [x] 价值观卡片
- [x] 最终 CTA

### 科学页
- [x] 英雄区
- [x] 关键发现
- [x] 问题说明
- [x] 微生物群落对比
- [x] 解决方案卡片
- [x] 安全和测试
- [x] 专家引言
- [x] 最终 CTA

### 联系页
- [x] 英雄区
- [x] 联系信息
- [x] 联系表单
- [x] 表单验证
- [x] FAQ 部分
- [x] 最终 CTA

### 导航
- [x] 公告条
- [x] 导航栏
- [x] 移动菜单
- [x] 活跃链接指示器
- [x] 平滑滚动

### 页脚
- [x] 社交关注
- [x] 品牌信息
- [x] 链接列
- [x] 底部栏

## 🔄 部署流程

```
Local Development
    ↓
npm install && npm run dev
    ↓
Customize Content
    ↓
npm run build
    ↓
Push to GitHub
    ↓
Connect Cloudflare Pages
    ↓
Auto Deploy
    ↓
Live on Global CDN ✅
```

## 📚 文档

| 文件 | 用途 |
|------|------|
| README.md | 完整项目文档 |
| QUICKSTART.md | 快速启动指南 |
| PROJECT_SUMMARY.md | 项目总结 |
| DEPLOYMENT_CHECKLIST.md | 部署检查清单 |
| PROJECT_STRUCTURE.md | 项目结构（本文件） |

## 🎉 准备好了吗？

```bash
cd C:\Users\admin\.qclaw\workspace\website-project
npm install
npm run dev
```

访问 `http://localhost:5173` 查看你的网站！

---

*项目结构版本: 1.0*
*生成时间: 2026-03-29*
