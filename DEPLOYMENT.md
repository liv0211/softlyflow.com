# 部署指南 (Deployment Guide)

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 本地开发

```bash
npm run dev
```

然后在浏览器中打开 [http://localhost:3000](http://localhost:3000)

### 3. 构建生产版本

```bash
npm run build
```

### 4. 启动生产服务器

```bash
npm start
```

## 部署到 Vercel (推荐)

Vercel 是 Next.js 的创建者提供的平台，部署非常简单：

1. **注册 Vercel 账号**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录（推荐）

2. **连接你的项目**
   - 将代码推送到 GitHub
   - 在 Vercel 中点击 "New Project"
   - 选择你的 GitHub 仓库

3. **配置域名**
   - 在 Vercel 项目设置中添加你的域名 `softlyflow.com`
   - 按照提示配置 DNS 记录

4. **自动部署**
   - 每次推送到 GitHub 主分支，Vercel 会自动部署

## 部署到其他平台

### Netlify

1. 注册 [Netlify](https://netlify.com) 账号
2. 连接 GitHub 仓库
3. 构建命令：`npm run build`
4. 发布目录：`.next`
5. 添加环境变量（如需要）

### 自托管服务器

1. 在服务器上安装 Node.js (18+)
2. 克隆代码仓库
3. 运行 `npm install`
4. 运行 `npm run build`
5. 使用 PM2 或其他进程管理器运行 `npm start`
6. 配置 Nginx 反向代理

## 环境变量

目前网站不需要环境变量。如果将来需要添加 API 密钥等，创建 `.env.local` 文件：

```
NEXT_PUBLIC_API_KEY=your_key_here
```

## SEO 优化检查清单

- ✅ 已配置 sitemap.xml (`/sitemap.xml`)
- ✅ 已配置 robots.txt (`/robots.txt`)
- ✅ 已添加结构化数据 (JSON-LD)
- ✅ 已配置 Open Graph 和 Twitter Cards
- ✅ 已优化元数据

## 添加新文章

编辑 `lib/articles.ts` 文件，在 `articles` 数组中添加新文章对象：

```typescript
{
  slug: 'your-article-slug',
  title: 'Your Article Title',
  excerpt: 'Brief description...',
  content: `# Your article content in Markdown format...`,
  date: '2024-01-20',
  category: 'Category Name',
  tags: ['tag1', 'tag2'],
  readTime: 5,
  seoTitle: 'SEO Optimized Title',
  seoDescription: 'SEO description...',
}
```

## 未来改进建议

1. **内容管理系统 (CMS)**
   - 考虑使用 Headless CMS (如 Contentful, Sanity, Strapi)
   - 或使用 Markdown 文件 + Git 工作流

2. **AI 内容生成**
   - 集成 OpenAI API 或其他 AI 服务
   - 创建自动化内容生成脚本

3. **分析工具**
   - 添加 Google Analytics
   - 添加搜索控制台

4. **性能优化**
   - 添加图片优化
   - 实现增量静态再生 (ISR)

## 技术支持

如有问题，请查看：
- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

