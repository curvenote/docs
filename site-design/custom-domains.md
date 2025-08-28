---
title: Set Up Custom Domains
short_title: Custom Domains
description: Configure your own domain name for your Curvenote site
---

# Set Up Custom Domains

## Overview
Configure your own domain name to host your Curvenote site instead of using the default curve.space subdomain

You can use Curvenote to host any custom domain that you own, for example a personal blog, lab website, or journal. Custom domains are available with the Curvenote Pro plan or require a subscription to a Lab Group site or Journal hosted with Curvenote.

## Before You Start

Make sure you have:
- A Curvenote Pro plan or Lab Group/Journal subscription
- A domain name you own and control
- Access to your domain's DNS configuration
- Your Curvenote site already set up and working

## 1. Configure DNS Records

Set up the DNS configuration for your custom domain:

### Add CNAME Record
Navigate to your domain's DNS configuration and add the following `CNAME` record:

| Host name | Type | TTL | Data |
|-----------|------|-----|------|
| subdomain.example.com | CNAME | 1 hour | ssh.curve.space |

**Example**: If your domain is `mylab.com` and you want to use `research.mylab.com`, add a CNAME record pointing `research.mylab.com` to `ssh.curve.space`.

```{note}
If you visit https://ssh.curve.space you will see a custom landing page that points back to this documentation - this is not what will be shown on your site!
```

## 2. Contact Curvenote Support

Once your DNS is configured, contact Curvenote support to complete the setup:

1. **Email** [support@curvenote.com](mailto:support@curvenote.com)
2. **Include the following information**:
   - Domain name (e.g., `research.mylab.com`)
   - Curvenote username or team name that owns this domain
   - Your journal name, if applicable

Support will configure the domain on Curvenote's side and notify you when it's ready.

## 3. Update Your Site Configuration

Add your custom domain to your site configuration:

### Edit Your Site Config
Add the domain to your `curvenote.yml` or `myst.yml` file under the `domains:` list:

```yaml
site:
  domains:
    - your.curve.space
    - research.mylab.com
```

You can keep the original curve.space domain alongside your custom domain.

### Deploy Your Site
Run the deployment command to apply the changes:

```bash
curvenote deploy
```

You'll see the domains you're deploying to in the output. Verify that your site is now accessible at your custom domain.

## 4. Verify Your Setup

After deployment, check that:

1. **Your custom domain** loads your Curvenote site
2. **The original curve.space domain** still works (if you kept it)
3. **All content and functionality** works as expected
4. **SSL certificate** is properly configured (automatic)

## Naked Domains

For "naked domains" (e.g., `mylab.com` without a subdomain):

### Option 1: Contact Support
Contact Curvenote support to configure naked domain support.

### Option 2: Redirect Setup
1. **Set up a redirect** from your naked domain to a `www` subdomain
2. **Configure the `www` subdomain** using the CNAME method above
3. **Point `www.mylab.com`** to `ssh.curve.space`

## Troubleshooting

### Common Issues
- **DNS propagation delay**: Changes can take up to 24 hours to propagate
- **Incorrect CNAME record**: Double-check the hostname and target
- **Support not contacted**: Custom domains require Curvenote configuration
- **Deployment fails**: Ensure the domain is configured by Curvenote first

### Check DNS Propagation
Use online tools like [whatsmydns.net](https://whatsmydns.net) to check if your DNS changes have propagated globally.

## Next Steps

- [Plan Your Site Design →](./planning.md)
- [Set Up Site Navigation →](./navigation.md)
- [Choose Layout & Theme →](./layout-and-theme.md)

---

💡 **Tip:** Custom domains are automatically configured with SSL certificates, so your site will be accessible via HTTPS without additional setup.

⚡ **Important:
Domain Configuration**

- DNS changes can take up to 24 hours to propagate
- Always contact Curvenote support before attempting to use a custom domain
- Keep your original curve.space domain as a backup during setup
- Test your site thoroughly after domain configuration
