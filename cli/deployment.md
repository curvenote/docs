---
title: Deploy Curvenote Sites
short_title: Deployment
---

# Deploy Curvenote Sites

## Overview
Deploy your Curvenote projects to the web using the CLI for automatic hosting, custom domains, and continuous deployment

Deploy your Curvenote sites to get them online quickly with automatic hosting, custom domain support, and integration with GitHub Actions for continuous deployment.

## Before You Start

Make sure you have:
- Curvenote CLI installed and authenticated
- A project ready for deployment
- Content tested locally with `curvenote start`
- API token configured for deployment

## 1. Prepare for Deployment

Get your project ready for deployment:

**Test locally:**
```shell
curvenote start
# Verify everything looks correct
```

**Check for issues:**
```shell
curvenote build --strict
```

**Verify configuration:**
```shell
curvenote build --check-links
```

**Stop local server:**
```shell
# Press Ctrl+C to stop
```

## 2. Deploy to curve.space

Deploy to Curvenote's free hosting:

**Basic deployment:**
```shell
curvenote deploy
```

**Deploy without prompts:**
```shell
curvenote deploy --yes
```

**Deploy with strict checking:**
```shell
curvenote deploy --strict
```

**What happens:**
- Builds your project
- Uploads files to curve.space
- Provides live URL

## 3. Configure Custom Domains

Set up your own domain name:

**Add domain to configuration:**
```yaml
site:
  domains:
    - your-site.curve.space
    - your-custom-domain.com
```

**Set up DNS records:**
- **CNAME record**: Point to `ssh.curve.space`
- **A record**: Point to Curvenote's IP (if provided)

**Contact support:**
Email support@curvenote.com with your domain

**Wait for activation** (usually 24 hours)

## 4. Set Up GitHub Actions

Automate deployment with GitHub:

**Create workflow file:**
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: curvenote/action-deploy@v1
        env:
          CURVENOTE_TOKEN: ${{ secrets.CURVENOTE_TOKEN }}
```

**Add repository secret:**
- Go to repository Settings → Secrets
- Add `CURVENOTE_TOKEN` with your API token

**Push to trigger deployment**

## 5. Manage Multiple Deployments

Deploy to different environments:

**Development deployment:**
```shell
curvenote deploy --branch dev
```

**Production deployment:**
```shell
curvenote deploy --branch main
```

**Preview deployment:**
```shell
curvenote deploy --preview
```

## 6. Monitor Deployment Status

Check your deployment status:

**View deployment logs:**
```shell
curvenote deploy --verbose
```

**Check site status:**
Visit your deployed URL

**Monitor GitHub Actions:**
Check Actions tab in your repository

**Verify content:**
Ensure all files deployed correctly

## 7. Troubleshoot Deployment

Resolve common deployment issues:

**Build errors:**
```shell
curvenote build --strict
```

**Authentication issues:**
```shell
curvenote auth list
curvenote token set
```

**Network issues:**
```shell
curvenote deploy --retry
```

**Cache issues:**
```shell
curvenote deploy --clean
```

## Next Steps

- [Learn CLI Commands →](./commands.md)
- [Configure Your Project →](./configuration.md)
- [Set Up GitHub Actions →](./integration.md)

---

💡 **Tip:** Always test your site locally with `curvenote start` before deploying to catch any issues early.

⚡ **Important: Deployment Best Practices**

- **Test locally first**: Use `curvenote start` before every deployment
- **Use version control**: Commit your changes before deploying
- **Check links**: Use `--check-links` flag to verify external links
- **Monitor deployments**: Check your site after deployment
- **Use CI/CD**: Set up GitHub Actions for automated deployment
