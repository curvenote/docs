---
title: Troubleshoot CLI Issues
short_title: Troubleshooting
---

# Troubleshoot CLI Issues

## Overview
Resolve common Curvenote CLI issues with step-by-step solutions for installation, authentication, deployment, and build problems

The Curvenote CLI is designed to be reliable, but you may encounter issues during installation, development, or deployment. This guide provides solutions for the most common problems.

## Before You Start

Make sure you have:
- Basic understanding of command line operations
- Access to terminal or command prompt
- Internet connection for downloads
- Administrative access (if needed)

## 1. Installation Issues

Resolve CLI installation problems:

**Permission errors:**
```shell
sudo npm install -g curvenote
```

**Node.js version issues:**
```shell
node --version
# Should be 14.0.0 or higher
```

**Clear npm cache:**
```shell
npm cache clean --force
npm install -g curvenote
```

**Reinstall completely:**
```shell
npm uninstall -g curvenote
npm install -g curvenote
```

## 2. Authentication Problems

Fix authentication and API token issues:

**Check authentication status:**
```shell
curvenote auth list
```

**Reset API token:**
```shell
curvenote token delete
curvenote token set
```

**Environment variable issues:**
```shell
echo $CURVENOTE_TOKEN
unset CURVENOTE_TOKEN
export CURVENOTE_TOKEN="your-token"
```

**Token permissions:**
- Verify token has correct permissions
- Generate new token if needed
- Check token hasn't expired

## 3. Build and Start Issues

Resolve local development problems:

**Clean build cache:**
```shell
curvenote start --clean
curvenote build --clean
```

**Force reinstall dependencies:**
```shell
curvenote start --force
curvenote build --force
```

**Port conflicts:**
```shell
# Check what's using port 3000
lsof -i :3000
# Kill process or use different port
```

**Memory issues:**
```shell
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
curvenote start
```

## 4. Deployment Issues

Fix deployment problems:

**Build errors before deployment:**
```shell
curvenote build --strict
```

**Network connectivity:**
```shell
# Check internet connection
ping curvenote.com
```

**Authentication for deployment:**
```shell
curvenote auth list
curvenote token set
```

**Domain configuration:**
- Verify domain in `curvenote.yml`
- Check DNS settings
- Contact support if needed

## 5. Configuration Issues

Resolve configuration problems:

**YAML syntax errors:**
```shell
# Validate YAML syntax
yamllint curvenote.yml
```

**Missing configuration:**
```shell
# Reinitialize project
curvenote init
```

**Template issues:**
```shell
# Check template availability
curvenote export pdf --help
```

**Plugin problems:**
- Verify plugin syntax
- Check plugin compatibility
- Remove problematic plugins

## 6. Content and Link Issues

Fix content-related problems:

**Broken links:**
```shell
curvenote build --check-links
```

**Missing files:**
```shell
# Check file paths
ls content/
find . -name "*.md"
```

**Image loading issues:**
- Verify image file paths
- Check image file formats
- Ensure images are in correct directories

**Citation problems:**
- Verify BibTeX file syntax
- Check citation keys
- Ensure bibliography file is included

## 7. Performance Issues

Improve CLI performance:

**Slow builds:**
```shell
# Clean cache and rebuild
curvenote build --clean
```

**Memory usage:**
```shell
# Monitor memory usage
top -p $(pgrep node)
```

**Large projects:**
- Split into smaller projects
- Use selective builds
- Optimize image sizes

## Next Steps

- [Learn CLI Commands →](./commands.md)
- [Get Support →](./support.md)
- [Check Documentation →](./reference.md)

---

💡 **Tip:** Use the `--debug` flag to get detailed error information: `curvenote --debug <command>`

⚡ **Important: Troubleshooting Best Practices**

- **Check logs first**: Use `--debug` flag for detailed error information
- **Clean builds**: Use `--clean` flag when troubleshooting build issues
- **Verify versions**: Ensure Node.js and CLI versions are compatible
- **Test incrementally**: Make small changes and test frequently
- **Document issues**: Keep notes of solutions for future reference
