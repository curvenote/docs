---
title: Custom Domains
short_title: Custom Domains
---

::{tip}
**Objective:**  
Connect your Curvenote site to a custom domain so visitors can find it at your own branded URL.
:::

## Before You Start
Make sure you have:
- Admin access to your Curvenote site.
- Access to your domain registrar (e.g., GoDaddy, Namecheap, Google Domains).
- The domain name you want to use.

## Steps to Set Up a Custom Domain

### 1. Open Domain Settings
- In the Web Admin interface, go to **Settings → Domain**.

### 2. Add Your Custom Domain
- Enter your desired domain (e.g., `my-lab.org` or `research.myuniversity.edu`).
- Save the changes to generate DNS configuration details.

### 3. Update Your DNS Records
- Log in to your domain registrar.
- Create the required **CNAME** or **A record** provided by Curvenote.
- Point the records to Curvenote’s hosting address.

### 4. Verify the Domain
- Return to your Curvenote site settings and click **Verify**.
- DNS changes can take up to 48 hours to propagate.

### 5. Enable HTTPS
- Curvenote automatically provisions an SSL certificate once the domain is verified.
- Ensure your site loads with `https://` for security.

## Tips
- Use subdomains for specific projects (e.g., `conference2025.myorg.org`).
- If switching domains, keep the old one active temporarily to avoid broken links.
- Work with your IT team if your domain is managed institutionally.

## Related Guides
- [Choose a Layout & Theme](layout-and-theme.md)
- [Navigation & Page Structure](navigation.md)
