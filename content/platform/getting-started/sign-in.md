---
title: Sign in and link accounts
description: Sign in to Curvenote with an SCM account and manage linked accounts.
---

# Sign in and link accounts

A Curvenote account is a thin wrapper around one or more **linked
accounts** on external identity providers. You don't create a
username and password — you sign in through a provider you already
use, and Curvenote becomes a face on top of those identities.

## Supported providers

The Curvenote Platform supports six identity providers out of the
box. Which ones are enabled in any given deployment is set by the
deployment's `authProviders` config, but the canonical set is:

| Provider | Use it when |
| --- | --- |
| **GitHub** | You publish from GitHub repos. The most common path. |
| **ORCID** | You're a researcher with an ORCID iD. Strongest for citation metadata. |
| **Google** | Your institution uses Google Workspace. |
| **Okta** | Your institution provides Okta SSO. |
| **Bluesky** | You want to authenticate with your Bluesky identity. |
| **Firebase** | Legacy Google sign-in path; available on some deployments. |

Each provider can be enabled for **sign-in** (existing users) and/or
**sign-up** (new account provisioning) independently. You'll see a
button per enabled provider on the sign-in screen.

:::{note} Source
Provider list: `packages/scms-core/src/modules/auth/types.ts` and
`LoginProviderButtons.tsx` in
[curvenote/curvenote](https://github.com/curvenote/curvenote).
:::

## First sign-in

1. Go to your Curvenote deployment (e.g.
   [curvenote.com](https://curvenote.com)) and click **Sign in**.
2. Pick a provider button. You'll be redirected to the provider's
   own consent screen.
3. Approve the requested scopes. For GitHub this includes read
   access to your public profile and (optionally) repository
   metadata; for ORCID it's read access to your ORCID record; etc.
4. You're redirected back to Curvenote with a session.

The first time a new identity signs in, Curvenote provisions a user
record for you. Subsequent sign-ins from the same provider land on
the same account.

## Linking additional accounts

A single Curvenote user can link multiple provider identities. This
is how you, for example, sign in with ORCID for citation metadata
*and* sign in with GitHub to connect repositories.

1. Sign in with your primary provider.
2. Open **Account settings → Linked accounts**.
3. Click **Link a provider** and pick another one.
4. Approve on the provider side.

After linking, you can sign in with *either* identity and land on the
same Curvenote account. Linked accounts are independently revocable —
unlinking a provider does not delete your Curvenote user.

:::{tip} ORCID is the citation backbone
If you publish works that get DOIs, link an ORCID account even if
it's not your primary sign-in. Curvenote uses your ORCID identifier
in the citation metadata for every work you author.
:::

## CLI authentication

The CLI uses a separate API token, not OAuth. Once you've signed in
on the web, generate a token from
**Personal Settings → API Tokens → Generate New Token**, then:

```bash
curvenote token set
```

Paste the token when prompted. To verify:

```bash
curvenote auth list
```

This prints the user the token belongs to. To switch between
multiple stored tokens use `curvenote token select`. To sign out use
`curvenote token delete`.

In CI, set the token via environment variable instead:

```bash
export CURVENOTE_TOKEN="your-token-here"
```

The environment variable takes precedence over any token previously
stored on disk.

## Next

- [Connect a repository](./connect-repo.md) — link a Git repo to
  Curvenote as a site and a work.
- [Publish your first site](./first-site.md) — end-to-end walkthrough.
