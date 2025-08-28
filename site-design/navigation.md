---
title: Set Up Site Navigation
short_title: Navigation
description: Configure navigation menus, action buttons, and site structure for your Curvenote website
---

# Set Up Site Navigation

## Quick Start
Configure your site's navigation menu, action buttons, and page structure to help visitors find content and take desired actions

Your site's navigation determines how visitors move through your content and what actions they can take. A well-organized navigation structure improves user experience and helps achieve your site's goals.

## Before You Start

Make sure you have:
- Access to your site's configuration files
- A clear understanding of your site's content structure
- Key pages and sections identified
- Important actions or downloads you want to highlight
- Your site already created and accessible

## 1. Plan Your Navigation Structure

Before configuring, plan your site's information architecture:

### Main Navigation Items
- **Home/Overview**: Introduction to your site
- **Content Sections**: Articles, research, publications
- **About Pages**: Team, organization, mission
- **Contact/Support**: How to reach you
- **Resources**: Downloads, tools, additional content

### Action Items
- **Primary actions**: Submit, register, contact
- **Downloads**: PDFs, datasets, resources
- **External links**: Social media, partner sites

## 2. Configure Main Navigation

Set up the primary navigation menu in your site configuration:

### Basic Navigation Structure
Add navigation items to your `curvenote.yml` or `myst.yml` file:

```yaml
version: 1
site:
  nav:
    - title: Home
      url: /
    - title: Research
      url: /research
    - title: Publications
      url: /publications
    - title: Team
      url: /team
    - title: Contact
      url: /contact
```

### Navigation Best Practices
- **Keep it simple**: 5-7 main items maximum
- **Use clear labels**: Visitors should understand each link
- **Logical order**: Most important items first
- **Consistent naming**: Match your page titles

## 3. Create Nested Dropdown Menus

Organize related content with dropdown navigation:

### Dropdown Structure
```yaml
site:
  nav:
    - title: Research
      children:
        - title: Current Projects
          url: /research/projects
        - title: Publications
          url: /research/publications
        - title: Data
          url: /research/data
    - title: About
      children:
        - title: Our Mission
          url: /about/mission
        - title: Team Members
          url: /about/team
        - title: Contact Us
          url: /about/contact
```

### Dropdown Guidelines
- **Group related items**: Logical content organization
- **Limit depth**: One level of nesting maximum
- **Clear parent labels**: Indicate what's in the dropdown
- **Consistent structure**: Similar items grouped together

## 4. Add Action Buttons

Highlight important actions in your navigation:

### Action Button Configuration
```yaml
site:
  actions:
    - title: Submit Paper
      url: /submit
    - title: Download PDF
      url: public/thesis.pdf
      static: true
    - title: Contact Us
      url: mailto:contact@example.com
```

### Action Button Types
- **Internal pages**: Submit forms, contact pages
- **External links**: Social media, partner sites
- **Email links**: Direct contact via email
- **File downloads**: PDFs, datasets, resources

### Action Button Best Practices
- **Clear call-to-action**: "Submit", "Download", "Contact"
- **Strategic placement**: Most important actions first
- **Consistent styling**: Match your site's design
- **Mobile-friendly**: Ensure buttons work on all devices

## 5. Include Static Files

Add downloadable content to your navigation:

### Static File Setup
1. **Place files** in the `public` folder of your site
2. **Add to navigation** with `static: true` flag
3. **Files deploy** automatically with your site

### Example Configuration
```yaml
site:
  actions:
    - title: Download Thesis
      url: public/my_thesis.pdf
      static: true
    - title: View Dataset
      url: public/research_data.csv
      static: true
```

### Static File Guidelines
- **Use descriptive titles**: "Download Research Paper" not "PDF"
- **Organize files**: Group related downloads together
- **Check file sizes**: Large files may affect loading
- **Update regularly**: Keep downloads current

## 6. Test Your Navigation

Validate your navigation structure:

1. **Test all links** work correctly
2. **Check dropdown menus** function properly
3. **Verify mobile navigation** on different devices
4. **Test static file downloads** open correctly
5. **Review navigation flow** from a visitor's perspective
6. **Gather feedback** from team members or users

## Navigation Examples

### Research Journal
```yaml
site:
  nav:
    - title: Home
      url: /
    - title: Articles
      url: /articles
    - title: Submit
      url: /submit
    - title: About
      url: /about
  actions:
    - title: Submit Paper
      url: /submit
    - title: View Guidelines
      url: public/author_guidelines.pdf
      static: true
```

### Lab Website
```yaml
site:
  nav:
    - title: Home
      url: /
    - title: Research
      children:
        - title: Current Projects
          url: /research/projects
        - title: Publications
          url: /research/publications
    - title: Team
      url: /team
    - title: Contact
      url: /contact
  actions:
    - title: Join Our Lab
      url: /join
    - title: Download Code
      url: public/lab_tools.zip
      static: true
```

### Conference Site
```yaml
site:
  nav:
    - title: Home
      url: /
    - title: Program
      url: /program
    - title: Registration
      url: /register
    - title: Venue
      url: /venue
  actions:
    - title: Register Now
      url: /register
    - title: Download Schedule
      url: public/conference_schedule.pdf
      static: true
```

## Next Steps

- [Plan Your Site Design →](../site-design/planning.md)
- [Choose Layout & Theme →](../site-design/layout-and-theme.md)
- [Set Up Custom Domains →](./custom-domains.md)

---

💡 **Tip:** Start with a simple navigation structure and expand as your content grows. You can always reorganize and add new sections later.

⚡ **Important:
Navigation Best Practices**

- Keep navigation simple and intuitive
- Use clear, descriptive labels for all links
- Test navigation on mobile devices
- Ensure all links work and lead to relevant content
- Consider user goals when organizing menu items
