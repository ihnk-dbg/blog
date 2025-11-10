# Ian's Digital Journal

> **Where logic meets meaning** — A modern, feature-rich blog built with React, exploring code, philosophy, and creation.

A beautiful, dark-first blog website with a focus on thoughtful content, clean design, and excellent user experience. Built with React, React Router, and Vite, and deployed on GitHub Pages.

## ✨ Features

### 🎨 Design & Theme
- **Dark-First Theme** - Beautiful dark mode with smooth light/dark toggle
- **Modern UI** - Clean, minimalist interface with smooth animations
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Custom Typography** - Inter for headings, Merriweather for body text
- **Gradient Effects** - Beautiful gradient animations and hover effects
- **Smooth Animations** - Fade-in, slide-up, and hover animations throughout
- **Glassmorphism** - Modern glass-like effects on navigation

### 🔍 Search & Discovery
- **Fuzzy Search** - Powerful search using Fuse.js (searches title, content, tags, author)
- **Category Filtering** - Filter posts by category with URL persistence
- **Tag Cloud** - Interactive tag visualization with size-based popularity
- **Tag Filtering** - Click tags to filter posts
- **Real-time Filtering** - Instant search results as you type
- **Archive Page** - Timeline view of all posts organized by date

### 📄 Pages
1. **Home** - Hero section with daily quotes and featured posts
2. **Blog** - Full blog listing with search, filters, and tag cloud
3. **Blog Post** - Individual post pages with all features
4. **Projects** - Portfolio-style project showcase with filters
5. **Library** - Book and resource recommendations (books, videos, articles, tools)
6. **Archive** - Timeline view of all posts by year and month
7. **About** - Personal brand page with bio and topics
8. **Contact** - Contact form and social links
9. **Author** - Author profile pages with posts

### ⚡ Interactive Features
- **Reading Progress Bar** - Visual progress indicator at top of page
- **Back to Top Button** - Smooth scroll to top
- **Philosophy Mode** - Distraction-free reading view (🧘 button)
- **Quote Highlight Sharing** - Select text to share quotes on Twitter
- **Reaction Buttons** - React to posts with emojis (❤️👏🤯)
- **Social Sharing** - Share posts on Twitter, Facebook, LinkedIn
- **Keyboard Shortcuts** - `/` to focus search, `Esc` to blur
- **Scroll to Top** - Automatic scroll to top on route change
- **Toast Notifications** - Beautiful notifications for user feedback

### 💬 Comments
- **Giscus Integration** - GitHub-powered comments system
- **Theme-Aware** - Comments match your site's theme (dark/light)
- **Mobile Optimized** - Fully responsive comment section
- **Easy Setup** - Simple configuration in component file

### 📱 Social & SEO
- **Social Sharing** - Share buttons on posts
- **Open Graph Tags** - Rich previews when sharing on social media
- **Twitter Cards** - Optimized Twitter sharing
- **SEO Optimized** - Meta tags, descriptions, and semantic HTML
- **Reading Time** - Automatic reading time calculation
- **Related Posts** - Show related posts on each blog post

### 🎯 Personalization
- **Author Profiles** - Dedicated pages for each author
- **Avatar System** - Abstract avatar based on initials
- **Newsletter Signup** - Newsletter subscription form (ready for backend)
- **Custom Logo** - Beautiful "IDJ" logo with animations
- **Footer** - Personalized motto and links

### ⚡ Performance
- **Fast Loading** - Optimized with Vite for instant HMR
- **Lazy Loading** - Images load lazily for better performance
- **Code Splitting** - Automatic code splitting with React Router
- **Accessible** - ARIA labels and keyboard navigation support

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ian-dbg/blog.git
   cd blog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)
   - The app will automatically reload on file changes

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
blog/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── 404.html                # 404 page for GitHub Pages SPA routing
├── src/
│   ├── components/             # Reusable React components
│   │   ├── Avatar.jsx          # Author avatar component
│   │   ├── BackToTop.jsx       # Back to top button
│   │   ├── CategoryFilter.jsx  # Category filtering component
│   │   ├── Footer.jsx          # Site footer
│   │   ├── GiscusComments.jsx  # Comments component
│   │   ├── HeroSection.jsx     # Home page hero
│   │   ├── KeyboardShortcuts.jsx
│   │   ├── Logo.jsx            # Site logo
│   │   ├── Navigation.jsx      # Main navigation
│   │   ├── Newsletter.jsx      # Newsletter signup
│   │   ├── PhilosophyMode.jsx  # Reading mode
│   │   ├── QuoteHighlight.jsx  # Text selection sharing
│   │   ├── ReactionButtons.jsx # Post reactions
│   │   ├── ReadingProgress.jsx # Progress bar
│   │   ├── ScrollToTop.jsx     # Scroll to top on route change
│   │   ├── SearchBar.jsx       # Search component
│   │   ├── SEO.jsx             # SEO meta tags
│   │   ├── SocialShare.jsx     # Social sharing
│   │   ├── TagCloud.jsx        # Tag visualization
│   │   ├── ThemeToggle.jsx     # Theme switcher
│   │   └── Toast.jsx           # Notifications
│   ├── contexts/               # React contexts
│   │   └── ThemeContext.jsx    # Theme management
│   ├── pages/                  # Page components
│   │   ├── Home.jsx            # Home page
│   │   ├── Blog.jsx            # Blog listing
│   │   ├── BlogPost.jsx        # Individual post
│   │   ├── Projects.jsx        # Projects page
│   │   ├── Library.jsx         # Library page
│   │   ├── Archive.jsx         # Archive timeline
│   │   ├── About.jsx           # About page
│   │   ├── Contact.jsx         # Contact page
│   │   └── Author.jsx          # Author profile
│   ├── data/                   # Blog data
│   │   ├── posts.js            # Blog posts and authors
│   │   └── siteData.js         # Site config, projects, library
│   ├── styles/                 # CSS styles
│   │   ├── index.css           # Global styles and variables
│   │   ├── animations.css      # Animation keyframes
│   │   ├── App.css             # App layout
│   │   └── [Page].css          # Page-specific styles
│   ├── utils/                  # Utility functions
│   │   ├── dateSort.js         # Date parsing and sorting
│   │   ├── keyboardShortcuts.js
│   │   ├── readingTime.js      # Reading time calculator
│   │   └── search.js           # Search functionality
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── package.json                # Project dependencies
├── LICENSE                     # MIT License
└── README.md                   # This file
```

## 📝 Adding Content

### Adding New Blog Posts

Edit `src/data/posts.js` and add a new object to the `blogPosts` array:

```javascript
{
  id: 12,
  title: 'Your Post Title',
  slug: 'your-post-slug',
  date: 'December 20, 2024',  // Format: "Month Day, Year"
  author: 'Ian',  // Must match an author in the authors object
  category: 'React',  // Category for filtering
  excerpt: 'A brief description of your post',
  image: 'https://example.com/image.jpg',
  tags: ['Tag1', 'Tag2'],
  content: [
    'First paragraph of your post',
    'Second paragraph of your post',
    // Add more paragraphs as needed
  ],
}
```

**Note:** Posts are automatically sorted by date (newest first).

### Adding New Authors

Edit `src/data/posts.js` and add to the `authors` object:

```javascript
authors: {
  'Author Name': {
    name: 'Author Name',
    bio: 'Author bio goes here',
    social: {
      twitter: 'https://twitter.com/username',
      github: 'https://github.com/username',
      linkedin: 'https://linkedin.com/in/username',
    },
  },
}
```

### Adding Projects

Edit `src/data/siteData.js` and add to the `projects` array:

```javascript
{
  id: 6,
  title: 'Project Name',
  description: 'Project description',
  image: 'https://example.com/image.jpg',
  tags: ['React', 'Node.js'],
  link: 'https://project-url.com',
  github: 'https://github.com/user/project',
  featured: true,
  status: 'Active',
  year: 2024,
  technologies: ['React', 'TypeScript'],
  highlights: ['Feature 1', 'Feature 2'],
}
```

### Adding Library Items

Edit `src/data/siteData.js` and add to the `library` array:

```javascript
{
  id: 16,
  title: 'Book Title',
  author: 'Author Name',
  type: 'book',  // 'book', 'video', 'article', 'tool'
  description: 'Description',
  rating: 5,
  review: 'Review text',
  cover: 'https://example.com/cover.jpg',
  category: 'Programming',
  link: 'https://example.com',  // For articles and tools
  videoUrl: 'https://youtube.com/watch?v=...',  // For videos
  duration: '30:00',  // For videos
}
```

## 🎨 Customization

### Site Configuration

Edit `src/data/siteData.js`:

```javascript
export const siteConfig = {
  name: "Ian's Digital Journal",
  tagline: "Where logic meets meaning",
  description: "A living space for code, philosophy, and creation.",
  author: "Ian",
  motto: "Thinking through code.",
  footerQuote: "Code is poetry, philosophy is syntax.",
}
```

### Colors & Theme

Edit CSS variables in `src/styles/index.css`:

```css
:root {
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --accent-primary: #58a6ff;
  --accent-warm: #ffa657;
  --text-primary: #f0f6fc;
  /* ... more variables */
}
```

### Fonts

The blog uses:
- **Inter** - For headings (from Google Fonts)
- **Merriweather** - For body text (from Google Fonts)

To change fonts, update the `@import` in `src/styles/index.css` and the `font-family` in the styles.

## 💬 Setting Up Comments

The blog uses Giscus for comments (GitHub-powered). To enable:

1. Visit [giscus.app](https://giscus.app/)
2. Sign in with GitHub and configure your repository
3. Enable Discussions in your GitHub repository settings
4. Open `src/components/GiscusComments.jsx`
5. Update the `GISCUS_CONFIG` object with your configuration:

```javascript
const GISCUS_CONFIG = {
  repo: 'ian-dbg/blog',  // Your repository
  repoId: 'YOUR_REPO_ID',  // From giscus.app
  category: 'Announcements',
  categoryId: 'YOUR_CATEGORY_ID',  // From giscus.app
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  lang: 'en',
  loading: 'lazy',
}
```

**Note:** Comments are optional. The blog works perfectly without them!

## 🔧 Technologies Used

- **React 18** - UI library
- **React Router DOM v6** - Client-side routing
- **Vite 5** - Build tool and dev server
- **Fuse.js** - Fuzzy search
- **React Markdown** - Markdown support
- **React Syntax Highlighter** - Code syntax highlighting
- **CSS3** - Styling with CSS variables
- **Google Fonts** - Typography

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### GitHub Pages (Current Setup)

The project is configured for GitHub Pages deployment using GitHub Actions:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Under Source, select **GitHub Actions**
   - Save

3. **Deploy:**
   - The workflow runs automatically on push to `main`
   - Check the Actions tab for deployment status
   - Your site will be live at `https://ian-dbg.github.io/blog`

**Note:** The base path is configured as `/blog/` in `vite.config.js`. If your repository name is different, update the base path accordingly.

### Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy
4. Your site will be live at `your-project.vercel.app`

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Other Platforms

Build the project (`npm run build`) and deploy the `dist` folder to any static hosting service.

## 🎯 Keyboard Shortcuts

- `/` - Focus search bar
- `Cmd/Ctrl + k` - Focus search bar
- `Esc` - Blur search

## 🔍 Features in Detail

### Search & Filter
- Real-time search as you type
- Searches title, excerpt, tags, and author
- Category filtering with URL persistence
- Tag filtering via tag cloud
- Combined search and filter

### Reading Experience
- Reading time displayed on each post
- Scroll progress bar
- Philosophy Mode for distraction-free reading
- Quote highlight sharing
- Reaction buttons
- Automatic scroll to top on navigation

### Social Integration
- Share buttons on posts
- Social links in author profiles
- Open Graph tags for rich previews
- Twitter card support

### Mobile Optimization
- Fully responsive design
- Touch-friendly interface
- Optimized comment section for mobile
- Mobile-optimized navigation
- Responsive images and layouts

## 🐛 Troubleshooting

### Build Issues

If you encounter build issues:

1. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Clear Vite cache:**
   ```bash
   rm -rf node_modules/.vite
   ```

3. **Check Node.js version:**
   ```bash
   node --version
   ```
   Should be v16 or higher.

### GitHub Pages Issues

If your site doesn't load on GitHub Pages:

1. **Check GitHub Pages settings:**
   - Source should be set to **GitHub Actions**
   - Not "Deploy from a branch"

2. **Verify base path:**
   - Check `vite.config.js` - base path should match your repository name
   - For `ian-dbg/blog`, base path should be `/blog/`

3. **Check workflow:**
   - Go to Actions tab
   - Verify workflow completed successfully
   - Check for any errors in the workflow logs

4. **Clear browser cache:**
   - Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
   - Or use incognito/private mode

### Comments Not Showing

If comments don't appear:

1. **Check Giscus configuration:**
   - Verify `repoId` and `categoryId` are set in `GiscusComments.jsx`
   - Make sure Discussions are enabled in your GitHub repository

2. **Check repository settings:**
   - Go to repository Settings → General → Features
   - Enable Discussions

3. **Verify Giscus setup:**
   - Visit [giscus.app](https://giscus.app/) and verify your configuration

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for sample images
- [Google Fonts](https://fonts.google.com) for Inter and Merriweather
- [Giscus](https://giscus.app) for comments system
- React community for excellent documentation

## 📞 Support

For questions or issues:

1. Check the browser console for errors
2. Verify all dependencies are installed
3. Check the GitHub Actions workflow logs
4. Review the deployment configuration

## 🔗 Links

- **GitHub:** [github.com/ian-dbg/blog](https://github.com/ian-dbg/blog)
- **Twitter:** [@c1tenn](https://twitter.com/c1tenn)
- **GitHub Profile:** [github.com/ian-dbg](https://github.com/ian-dbg)

---

**"Code is poetry, philosophy is syntax."** - Ian's Digital Journal

Built with ❤️ using React and Vite
