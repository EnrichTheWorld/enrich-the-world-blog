# Enrich the World Blog

A modern multilingual blog built with Next.js, Contentful CMS, and Vanilla Extract, featuring Korean and English language support.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Vanilla Extract CSS-in-TypeScript
- **Multilingual Support**: Korean and English with easy language switching
- **Dark/Light Theme**: Seamless theme toggle with CSS variables
- **Contentful CMS**: Headless CMS integration for content management
- **Responsive Design**: Mobile-first design optimized for all devices
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, structured data
- **Type-Safe Styling**: Vanilla Extract for type-safe CSS-in-TypeScript
- **Performance Focused**: Image optimization, static generation, modern bundle

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla Extract CSS-in-TypeScript
- **CMS**: Contentful
- **Deployment**: Vercel
- **Package Manager**: npm

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/enrich-the-world-blog.git
cd enrich-the-world-blog
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Configure your Contentful credentials in `.env.local`:
```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🎨 Design System

The project uses a comprehensive design system with:

- **Colors**: Primary, secondary, neutral palettes with dark/light theme support
- **Typography**: Responsive font scales and line heights
- **Spacing**: 4px-based spacing system
- **Breakpoints**: Mobile-first responsive design
- **Components**: Reusable styled components with Vanilla Extract

## 🌐 Internationalization

- **Default Language**: Korean (ko)
- **Secondary Language**: English (en)
- **URL Structure**:
  - Korean: `/` (root)
  - English: `/en/*`
- **Language Toggle**: Header navigation component

## 📱 Pages

- **Home**: Featured posts, latest articles, category overview
- **Blog**: All posts with category filtering
- **Individual Post**: Full article with related posts
- **About**: Team information and mission
- **Category Pages**: Posts filtered by category
- **Tag Pages**: Posts filtered by tags

## 🔧 Development

### Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript check
```

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout (Korean)
│   ├── page.tsx        # Home page (Korean)
│   ├── blog/           # Blog pages (Korean)
│   ├── about/          # About page (Korean)
│   └── en/             # English pages
├── components/         # React components
│   ├── Layout/         # Main layout component
│   ├── Header/         # Header navigation
│   ├── Footer/         # Footer component
│   ├── ThemeToggle/    # Dark/light theme toggle
│   └── ...
├── styles/             # Vanilla Extract styles
│   ├── theme.css.ts    # Design tokens and themes
│   ├── global.css.ts   # Global styles
│   └── utils.css.ts    # Utility classes
├── lib/                # Utilities and configurations
│   ├── contentful.ts   # Contentful API client
│   └── metadata.ts     # SEO metadata helpers
├── types/              # TypeScript type definitions
├── i18n/               # Internationalization
└── ...
```

## 🎯 Contentful Setup

See the [Contentful Schema Setup Guide](#contentful-schema-setup-guide) below for detailed content model configuration.

## 🚀 Deployment

The application is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 📈 Performance

- **Core Web Vitals**: Optimized for excellent performance scores
- **Image Optimization**: Next.js Image component with Contentful
- **Static Generation**: Pre-rendered pages for better performance
- **Bundle Optimization**: Tree shaking and code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contentful Schema Setup Guide

Follow this guide to set up your Contentful space with the required content models.

### 1. Author Content Model

**Content Model ID**: `author`

| Field Name | Field ID | Type | Required | Validation |
|------------|----------|------|----------|------------|
| Name | `name` | Short text | Yes | - |
| Bio | `bio` | Long text | No | - |
| Avatar | `avatar` | Media | No | - |
| Social Links | `social` | JSON object | No | - |

**Social Links JSON Structure**:
```json
{
  "twitter": "https://twitter.com/username",
  "github": "https://github.com/username",
  "linkedin": "https://linkedin.com/in/username",
  "website": "https://website.com"
}
```

### 2. Category Content Model

**Content Model ID**: `category`

| Field Name | Field ID | Type | Required | Validation |
|------------|----------|------|----------|------------|
| Name | `name` | Short text | Yes | - |
| Slug | `slug` | Short text | Yes | Unique |
| Description | `description` | Long text | No | - |
| Color | `color` | Short text | No | - |

### 3. Blog Post Content Model

**Content Model ID**: `blogPost`

| Field Name | Field ID | Type | Required | Validation |
|------------|----------|------|----------|------------|
| Title | `title` | Short text | Yes | - |
| Slug | `slug` | Short text | Yes | Unique |
| Excerpt | `excerpt` | Long text | No | Max 300 chars |
| Content | `content` | Rich text | Yes | - |
| Featured Image | `featuredImage` | Media | No | - |
| Author | `author` | Reference (Author) | No | - |
| Category | `category` | Reference (Category) | No | - |
| Tags | `tags` | Short text (List) | No | - |
| Featured | `featured` | Boolean | No | Default: false |
| Published | `published` | Boolean | No | Default: true |
| Reading Time | `readingTime` | Integer | No | - |
| Published At | `publishedAt` | Date & time | No | - |

### 4. Localization Setup

For each content model, enable localization for these locales:
- **Korean (ko-KR)** - Default locale
- **English (en-US)** - Additional locale

### 5. Content Creation Guidelines

#### Authors
- Upload square avatar images (recommended: 200x200px)
- Write engaging bios in both languages
- Include relevant social links

#### Categories
- Use descriptive, SEO-friendly names
- Create unique slugs for URLs
- Choose contrasting colors for visual distinction
- Translate category names and descriptions

#### Blog Posts
- Write compelling titles and excerpts
- Use high-quality featured images (recommended: 1200x630px)
- Structure content with proper headings
- Add relevant tags for better discoverability
- Set reading time based on content length (words ÷ 200)
- Translate all content for both languages

### 6. Content Delivery API

After setting up your content models:

1. Go to **Settings > API keys**
2. Create a new API key or use the existing one
3. Copy the **Space ID** and **Content Delivery API access token**
4. Add these to your `.env.local` file:

```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

### 7. Sample Content Structure

#### Sample Author Entry:
```json
{
  "name": {
    "ko-KR": "김개발",
    "en-US": "Kim Developer"
  },
  "bio": {
    "ko-KR": "풀스택 개발자이자 기술 블로거입니다.",
    "en-US": "Full-stack developer and tech blogger."
  },
  "social": {
    "twitter": "https://twitter.com/kimdev",
    "github": "https://github.com/kimdev"
  }
}
```

#### Sample Category Entry:
```json
{
  "name": {
    "ko-KR": "기술",
    "en-US": "Technology"
  },
  "slug": "technology",
  "description": {
    "ko-KR": "최신 기술 트렌드와 개발 인사이트",
    "en-US": "Latest technology trends and development insights"
  },
  "color": "#3B82F6"
}
```

#### Sample Blog Post Entry:
```json
{
  "title": {
    "ko-KR": "AI가 바꾸는 미래",
    "en-US": "The Future Changed by AI"
  },
  "slug": "ai-changing-future",
  "excerpt": {
    "ko-KR": "인공지능이 우리 삶에 미치는 영향과 앞으로의 전망을 살펴봅니다.",
    "en-US": "Exploring the impact of AI on our lives and future prospects."
  },
  "featured": true,
  "published": true,
  "readingTime": 5,
  "tags": ["AI", "Technology", "Future"]
}
```

This setup will provide a solid foundation for your multilingual blog with proper content structure and SEO optimization.