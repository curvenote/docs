---
title: Publish Your Site
short_title: Publish
---

# Publish Your Site

## Overview
Deploy your Curvenote project to the web with a single command to make your content accessible to anyone

Publishing creates a live website from your local project, making your content available on the internet with a professional URL and optimized hosting.

## Before You Start

Make sure you have:
- A Curvenote project with content ready to publish
- Curvenote CLI installed and authenticated
- Content you want to share publicly
- A stable internet connection

## 1. Publish to Web

Deploy your site with a single command:

```bash
curvenote publish
```

**What you'll see:**
```
🚀 Publishing your site...
📝 Processing content...
🌐 Deploying to web...
✅ Published! Visit: https://your-site.curve.space
```

## 2. View Your Live Site

Open the provided URL in your browser:

**Visit:** https://your-site.curve.space

**What you'll see:**
- Your published site accessible to anyone
- Professional web address
- Fast, optimized hosting

## 3. Update Your Site

Make changes to your content, then republish:

```bash
curvenote publish
```

**What you'll see:**
```
🔄 Updating published site...
✅ Updated! Changes live now
```

## 4. Set Up Custom Domain (Optional)

Configure your own domain name:

1. **Add CNAME record** pointing to `ssh.curve.space`
2. **Email:** support@curvenote.com with your domain
3. **Wait for confirmation** (usually 24 hours)

## Next Steps

- [Explore Examples →](./4-examples.md)
- [Customize Your Site →](../site-design/layout-and-theme.md)
- [Set Up Custom Domains →](../site-design/custom-domains.md)

---

💡 **Tip:** Always preview your site locally with `curvenote start` before publishing to ensure everything looks correct.

⚡ **Important: Publishing Best Practices**

- **Preview locally** before publishing to catch any issues
- **Check your site** after publishing to ensure everything displays correctly
- **Share your URL** with collaborators and readers
- **Updates are instant** - no waiting for builds or deployments
