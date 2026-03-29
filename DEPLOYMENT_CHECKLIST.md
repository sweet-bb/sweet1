# ✅ 部署检查清单

## 🎯 在部署前完成以下步骤

### 第一步：本地验证 ✓

- [ ] 运行 `npm install` 安装依赖
- [ ] 运行 `npm run dev` 启动开发服务器
- [ ] 在浏览器中访问 `http://localhost:5173`
- [ ] 测试所有 4 个页面（首页、关于、科学、联系）
- [ ] 测试导航菜单（桌面和移动）
- [ ] 测试响应式设计（调整浏览器窗口大小）
- [ ] 测试表单（填写并提交）
- [ ] 检查浏览器控制台是否有错误

### 第二步：内容自定义 ✓

#### 品牌信息
- [ ] 更新公司名称（如需要）
- [ ] 更新联系邮箱（`src/pages/Contact.vue`）
- [ ] 更新电话号码（`src/pages/Contact.vue`）
- [ ] 更新地址（`src/pages/Contact.vue`）
- [ ] 更新社交媒体链接（`src/components/SiteFooter.vue`）

#### 页面内容
- [ ] 编辑首页文本和图片
- [ ] 编辑关于页面（团队、故事、时间线）
- [ ] 编辑科学页面（研究、发现）
- [ ] 编辑联系页面（FAQ）

#### 设计定制
- [ ] 修改品牌色（`src/App.vue` 中的 CSS 变量）
- [ ] 修改字体（`index.html` 中的 Google Fonts）
- [ ] 更新 favicon（`public/favicon.svg`）

### 第三步：表单配置 ✓

#### EmailJS 设置
- [ ] 访问 [emailjs.com](https://www.emailjs.com)
- [ ] 创建免费账户
- [ ] 添加邮件服务（Gmail、Outlook 等）
- [ ] 创建邮件模板
- [ ] 复制 Service ID
- [ ] 复制 Template ID
- [ ] 复制 Public Key
- [ ] 更新 `src/pages/Contact.vue` 中的凭证

### 第四步：生产构建 ✓

```bash
# 清理旧构建
rm -rf dist node_modules

# 重新安装依赖
npm install

# 构建生产版本
npm run build

# 验证输出
ls -la dist/
```

- [ ] 构建成功完成
- [ ] `dist/` 文件夹已创建
- [ ] 包含 `index.html` 和其他资源

### 第五步：Git 配置 ✓

```bash
# 初始化 Git 仓库
git init

# 添加所有文件
git add .

# 创建初始提交
git commit -m "Initial commit: Persephone website"

# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/persephone-website.git

# 推送到 GitHub
git push -u origin main
```

- [ ] GitHub 账户已创建
- [ ] 新仓库已创建
- [ ] 代码已推送到 GitHub
- [ ] 仓库可见性设置正确

### 第六步：Cloudflare Pages 部署 ✓

#### 连接 GitHub
1. [ ] 访问 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. [ ] 选择 **Pages**
3. [ ] 点击 **Create a project**
4. [ ] 选择 **Connect to Git**
5. [ ] 授权 GitHub 访问
6. [ ] 选择你的仓库

#### 配置构建
- [ ] Framework preset: **None**
- [ ] Build command: `npm run build`
- [ ] Build output directory: `dist`
- [ ] Environment variables: 如需要则添加

#### 部署
- [ ] 点击 **Save and Deploy**
- [ ] 等待构建完成（通常 2-3 分钟）
- [ ] 检查部署日志是否有错误
- [ ] 访问生成的 URL（如 `https://xxx.pages.dev`）

### 第七步：验证部署 ✓

- [ ] 访问 Cloudflare Pages URL
- [ ] 测试所有页面加载
- [ ] 测试导航链接
- [ ] 测试响应式设计
- [ ] 检查浏览器控制台是否有错误
- [ ] 测试表单提交
- [ ] 检查 HTTPS 是否启用（绿色锁图标）

### 第八步：自定义域名（可选）✓

#### 添加域名
1. [ ] 在 Cloudflare Pages 项目中
2. [ ] 选择 **Custom domains**
3. [ ] 点击 **Add custom domain**
4. [ ] 输入你的域名（如 `persephone.bio`）
5. [ ] 按照说明更新 DNS 记录

#### 验证
- [ ] DNS 记录已更新
- [ ] 域名指向 Cloudflare Pages
- [ ] SSL 证书已自动签发
- [ ] 访问自定义域名工作正常

### 第九步：性能优化 ✓

- [ ] 运行 Lighthouse 审计
- [ ] 检查性能分数（目标 > 90）
- [ ] 检查可访问性分数（目标 > 90）
- [ ] 检查最佳实践分数（目标 > 90）
- [ ] 检查 SEO 分数（目标 > 90）

### 第十步：最终检查 ✓

#### 功能测试
- [ ] 所有页面加载正确
- [ ] 所有链接工作正常
- [ ] 表单提交成功
- [ ] 移动菜单工作正常
- [ ] 动画平滑流畅

#### 内容检查
- [ ] 没有拼写错误
- [ ] 所有图片加载正确
- [ ] 所有文本格式正确
- [ ] 所有链接指向正确的页面

#### 安全检查
- [ ] HTTPS 已启用
- [ ] 没有混合内容警告
- [ ] 没有安全警告
- [ ] 隐私政策已更新

#### SEO 检查
- [ ] 元标签正确
- [ ] Open Graph 标签正确
- [ ] Twitter 卡片正确
- [ ] 站点地图已生成

---

## 🚀 部署后

### 监控
- [ ] 设置 Cloudflare Analytics
- [ ] 监控页面性能
- [ ] 监控错误日志
- [ ] 监控用户反馈

### 维护
- [ ] 定期更新内容
- [ ] 监控表单提交
- [ ] 检查链接是否有效
- [ ] 更新依赖（定期运行 `npm update`）

### 改进
- [ ] 收集用户反馈
- [ ] 分析用户行为
- [ ] 优化转化率
- [ ] 添加新功能

---

## 📞 故障排除

### 构建失败
```bash
# 清理缓存
rm -rf node_modules package-lock.json

# 重新安装
npm install

# 重新构建
npm run build
```

### 部署失败
- [ ] 检查 Cloudflare Pages 构建日志
- [ ] 验证 `package.json` 中的脚本
- [ ] 验证 `vite.config.js` 配置
- [ ] 检查 GitHub 仓库权限

### 表单不工作
- [ ] 验证 EmailJS 凭证
- [ ] 检查邮件模板变量
- [ ] 检查浏览器控制台错误
- [ ] 测试 EmailJS 连接

### 样式问题
- [ ] 清除浏览器缓存
- [ ] 检查 CSS 作用域
- [ ] 验证 CSS 变量
- [ ] 检查响应式断点

---

## ✨ 完成！

当你完成所有步骤后，你的网站将：

✅ 在全球 300+ 个 Cloudflare 节点上运行
✅ 拥有自动 HTTPS 和 SSL 证书
✅ 具有企业级 DDoS 保护
✅ 提供闪电般的页面加载速度
✅ 完全响应式和移动友好
✅ SEO 优化
✅ 可扩展和易于维护

**祝贺！** 🎉

---

*检查清单版本: 1.0*
*最后更新: 2026-03-29*
