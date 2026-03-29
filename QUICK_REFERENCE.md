# 🚀 快速参考卡

## 命令速查

### 开发
```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器 (http://localhost:5173)
npm run build        # 生产构建
npm run preview      # 预览生产构建
```

### Git
```bash
git init                                    # 初始化仓库
git add .                                   # 添加所有文件
git commit -m "message"                     # 提交
git remote add origin <url>                 # 添加远程
git push -u origin main                     # 推送到 GitHub
```

### 部署
```bash
# 1. 推送到 GitHub
git push

# 2. 在 Cloudflare Pages 中连接
# 构建命令: npm run build
# 输出目录: dist

# 3. 自动部署 ✅
```

---

## 文件位置速查

| 要修改 | 文件位置 |
|--------|---------|
| 首页内容 | `src/pages/Home.vue` |
| 关于页面 | `src/pages/About.vue` |
| 科学页面 | `src/pages/Science.vue` |
| 联系页面 | `src/pages/Contact.vue` |
| 导航栏 | `src/components/SiteHeader.vue` |
| 页脚 | `src/components/SiteFooter.vue` |
| 品牌色 | `src/App.vue` (CSS 变量) |
| 字体 | `index.html` (Google Fonts) |
| 路由 | `src/router/index.js` |
| 表单 | `src/pages/Contact.vue` |

---

## 常见任务

### 修改品牌色
编辑 `src/App.vue`：
```css
:root {
  --color-brand: #8B5E3C;  /* 修改这里 */
}
```

### 修改字体
编辑 `index.html`：
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet" />
```

### 添加新页面
1. 创建 `src/pages/NewPage.vue`
2. 在 `src/router/index.js` 中添加：
```javascript
{
  path: '/new-page',
  component: () => import('../pages/NewPage.vue'),
}
```
3. 在导航中添加链接

### 配置 EmailJS
编辑 `src/pages/Contact.vue`：
```javascript
emailjs.init('YOUR_PUBLIC_KEY')
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data)
```

### 更新联系信息
编辑 `src/pages/Contact.vue`：
```javascript
// 邮箱、电话、地址等
```

---

## 设计系统速查

### 颜色
```
主色: #1A1512 (深色)
品牌: #8B5E3C (棕色)
背景: #FAF8F3 (奶油白)
```

### 字体
```
标题: DM Serif Display
正文: DM Sans
```

### 间距
```
xs: 0.25rem    md: 1rem      2xl: 4rem
sm: 0.5rem     lg: 1.5rem    3xl: 6rem
               xl: 2.5rem    4xl: 8rem
```

### 按钮
```
.btn-primary    # 深色背景
.btn-secondary  # 边框
.btn-outline    # 品牌色边框
```

---

## 响应式断点

```
Desktop:  1200px+
Tablet:   768px - 1199px
Mobile:   < 768px
```

---

## 部署检查清单

- [ ] 本地测试完成
- [ ] 内容已自定义
- [ ] 表单已配置
- [ ] 构建成功
- [ ] 推送到 GitHub
- [ ] Cloudflare Pages 已连接
- [ ] 部署成功
- [ ] 自定义域名已添加（可选）

---

## 文档

| 文件 | 用途 |
|------|------|
| README.md | 完整文档 |
| QUICKSTART.md | 快速开始 |
| PROJECT_SUMMARY.md | 项目总结 |
| DEPLOYMENT_CHECKLIST.md | 部署清单 |
| PROJECT_STRUCTURE.md | 项目结构 |

---

## 链接

- 📖 [Vue 3 文档](https://vuejs.org)
- 📖 [Vite 文档](https://vitejs.dev)
- 🌐 [Cloudflare Pages](https://pages.cloudflare.com)
- 📧 [EmailJS](https://www.emailjs.com)
- 🎨 [Google Fonts](https://fonts.google.com)

---

## 故障排除

### 构建失败
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 表单不工作
- 检查 EmailJS 凭证
- 检查邮件模板变量
- 查看浏览器控制台错误

### 样式问题
- 清除浏览器缓存
- 检查 CSS 作用域
- 验证 CSS 变量

---

## 项目信息

- **框架**: Vue 3 + Vite
- **托管**: Cloudflare Pages
- **CDN**: 全球 300+ 节点
- **SSL**: 自动 HTTPS
- **表单**: EmailJS
- **构建输出**: ~50KB (gzipped)

---

## 🎉 准备好了吗？

```bash
cd website-project
npm install
npm run dev
```

访问 `http://localhost:5173` 开始！

---

*快速参考卡 v1.0*
*2026-03-29*
