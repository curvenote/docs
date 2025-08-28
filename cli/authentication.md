---
title: Authentication and API Tokens
short_title: Authentication
---

# Authentication and API Tokens

## Overview
Set up authentication to access private Curvenote content, sync projects, and deploy websites using API tokens

Most Curvenote CLI functionality works without authentication, but you'll need an API token to access private content, sync projects, or deploy websites. API tokens provide secure, programmatic access to your Curvenote account.

## Before You Start

Make sure you have:
- A Curvenote account at curvenote.com
- Access to your account settings
- The Curvenote CLI installed
- Terminal or command prompt access

## 1. Understand Authentication Requirements

**Public content**: No authentication required

**Private content**: API token required

**Project sync**: API token required

**Site deployment**: API token required

**Content modification**: API token required

## 2. Create an API Token

Generate a token from your Curvenote account:

**Navigate to**: https://curvenote.com/profile?settings=true&tab=profile-api

**Click**: "Generate New Token"

**Add description**: Use a recognizable name (e.g., "CLI Access")

**Copy token**: Save the token immediately (you won't see it again)

## 3. Set Up CLI Authentication

Configure the CLI with your token:

```shell
curvenote token set
```

**Enter your API token** when prompted

**Token is stored** in local configuration file

**No need to re-enter** for future sessions

## 4. Verify Authentication

Check that you're properly authenticated:

```shell
curvenote auth list
```

**Expected output:**
```
Username: your-username
Email: your-email@example.com
```

**If not authenticated:**
```
You are not authenticated
```

## 5. Manage Multiple Accounts

Switch between different Curvenote accounts:

```bash
curvenote token select
```

**Select account** from the list

**Switch profiles** for different projects

**Useful for**: Team accounts, bot accounts, testing

## 6. Server Authentication

Use environment variables for server deployment:

```shell
export CURVENOTE_TOKEN="your-api-token"
```

**GitHub Actions**: Add as repository secret

**CI/CD systems**: Set as environment variable

**Server deployment**: Use environment variable

## 7. Remove Authentication

Sign out of the CLI when needed:

```shell
curvenote token delete
```

**Removes local config** file

**Environment variables**: Use `unset CURVENOTE_TOKEN`

**Verify logout**: Run `curvenote auth list`

## Next Steps

- [Learn CLI Commands →](./commands.md)
- [Create Your First Project →](../Getting Started/create-project.md)
- [Deploy Your Site →](../quick-start/3-publish.md)

---

💡 **Tip:** Use descriptive names for your API tokens so you can easily identify and manage them later. Consider creating separate tokens for different environments (development, production, CI/CD).

⚡ **Important: Security Best Practices**

- **Keep tokens secure**: Never share API tokens publicly
- **Use environment variables**: For server deployments and CI/CD
- **Regular rotation**: Generate new tokens periodically
- **Limited scope**: Create tokens with minimal required permissions
- **Monitor usage**: Check token activity in your account settings
