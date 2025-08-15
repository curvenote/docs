---
title: Authentication
short_title: Authentication
---

**Goal:**  
Sign in to the Curvenote CLI using an API token so you can work with private projects, sync content, and publish.
:::

## When You Need to Authenticate
- Accessing **private projects** from Curvenote
- Modifying or syncing content online
- Publishing content to a site
- Running CI/CD or automation scripts

Most translation/export of **public content** does not require authentication.

## 1. Generate an API Token
1. Sign in to [Curvenote](https://curvenote.com/).  
2. Go to **Personal Settings** → **API Access** or [click here](https://curvenote.com/profile?settings=true&tab=profile-api).  
3. Click **Generate New Token**.  
4. Copy the token — you won’t be able to see it again.

## 2. Store the Token Locally
Run:
```bash
curvenote token set
```
Paste the API token when prompted.

## 3. Store the Token as an Environment Variable

Useful for CI/CD or servers:

```bash
export CURVENOTE_TOKEN="API_TOKEN"
```
The environment variable takes priority over stored tokens.

## 4. Switch Accounts

If you have multiple accounts:

```bash
curvenote token select
```

## 5. Check Authentication Status
```bash
curvenote auth list
```
Shows your current account or indicates if not authenticated.

## 6. Sign Out
```bash
curvenote token delete
```

Removes the stored token. If using an environment variable, unset it:
```bash
unset CURVENOTE_TOKEN
```

💡 **Tips:**
- You only need to authenticate if working with private projects or publishing to a site.  
- Store the API token in an environment variable (`CURVENOTE_TOKEN`) for CI/CD.  
- Use `curvenote token select` to switch between accounts.  

## Related Guides
- [Install & Authenticate CLI (Tutorial)](install-cli.md)  
- [Push, Submit, and Publish Content](push-submit-publish.md)  
- [Set Up a Site for Publishing](setup-site.md)  
- [Continuous Integration with Curvenote CLI](ci-cli.md)