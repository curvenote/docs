---
title: Create Your First Project
short_title: First Project
---

# Create Your First Project

## Quick Start
Create a new Curvenote project and start a local preview server to see your content live as you edit

A Curvenote project contains your content files, site configuration, and assets. The local preview server provides instant feedback as you make changes to your content.

## Before You Start

Make sure you have:
- Curvenote CLI installed and working
- A terminal or command prompt open
- A text editor ready for content creation
- An idea for your project name

## 1. Create a New Project

Initialize a new Curvenote project with sample content:

```bash
curvenote init my-blog
```

**What you'll see:**
```
✨ Creating new Curvenote project: my-blog
📁 Created project structure
📝 Added sample content
✅ Project ready!
```

## 2. Navigate to Your Project

Change into your new project directory:

```bash
cd my-blog
```

## 3. Start Local Preview

Launch the development server to preview your site:

```bash
curvenote start
```

**What you'll see:**
```
🚀 Starting local server...
📖 Site available at: http://localhost:3000
🔄 Live reload enabled
```

## 4. View Your Site

Open your browser and navigate to the local URL:

**Open:** http://localhost:3000

**What you'll see:**
- Your new site with sample content
- Live preview that updates as you edit
- Professional layout and styling

## 5. Edit Your Content

Open the main content file in your text editor:

**File:** `content/index.md`

**Try this example:**
```markdown
---
title: My First Article
---

# Welcome to My Site!

This is my first Curvenote article. 🎉

## What I'm Working On

- Research project A
- Conference paper B
- Lab documentation
```

**Save the file** → See changes instantly in your browser!

## Next Steps

- [Publish Your Site →](./3-publish.md)
- [Add Figures and Media →](../authoring/add-figures-media.md)
- [Customize Your Site →](../site-design/layout-and-theme.md)

---

💡 **Tip:** The local preview server automatically reloads when you save changes, so you can see your updates immediately without manual refresh.

⚡ **Important: Project Structure**

- **Add images**: Drop files in `images/` folder
- **More pages**: Create new `.md` files in `content/`
- **Customize**: Edit `curvenote.yml` for site settings
- **Assets**: Use `public/` folder for static files
