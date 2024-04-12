---
title: Data and Security
description: ''
authors: []
date: '2022-03-11T23:24:36.037Z'
name: data-and-security
oxa: oxa:w6jXebeTS6WGaVFDIEz9/nmIgTLQ42YuyjOUqL4C4
tags: []
---

+++ {"oxa":"oxa:w6jXebeTS6WGaVFDIEz9/dWNb48Y3UqNymCN3dK04.2"}

The following is a summary of our data residency and security practices at Curvenote. You can read our [Terms and Conditions](http://curvenote.com/legal/) and [Privacy Statement](http://curvenote.com/legal/) which go into more detail.

+++ {"oxa":"oxa:w6jXebeTS6WGaVFDIEz9/wqs7QLPsuXaGjLrkP1RL.1"}

## Working Locally

Curvenote command-line tools can be used locally, and when used in this way, they do not send data to Curvenote’s servers. For example, starting a server with `curvenote start` requires no data to be sent or received and all content transformations are completed locally. On the other hand, `curvenote pull` will pull data from Curvenote to your local machine and `curvenote deploy` will send data to be hosted on [curvenote.com](https://curvenote.com), which the rest of this document refers to.

+++ {"oxa":"oxa:w6jXebeTS6WGaVFDIEz9/bHNjmGtJLQwmpYrJKkcX.1"}

## Data Residency

We use Google Cloud Platform (GCP) to store your content - including all text, images, and Jupyter Notebooks. You can read about Google’s security practices [here](https://cloud.google.com/security/). Data for curvenote.com is stored in the United States (`us-central`), if you have specific data-residency requirements for your organization, please get in touch: [support@curvenote.com](mailto:support@curvenote.com).

+++ {"oxa":"oxa:w6jXebeTS6WGaVFDIEz9/vNQUOzWzcMFkORWVam0R.1"}

## Content Security

We have physical, electronic and organizational processes in place to protect the data uploaded to Curvenote. We take security seriously and conduct routine audits of all of our systems. Your data is encrypted in-transit from your browser to our servers using HTTPS/SSL. Your data is encrypted at rest using [multiple layers of AES256-AES128](https://cloud.google.com/security/encryption-at-rest/default-encryption/resources/encryption-whitepaper.pdf). You can read more about this in the [Data Encryption](https://cloud.google.com/security/transparency/data-protection#encryption-at-rest) section of Google’s[ Security](https://cloud.google.com/security) statements.

+++ {"oxa":"oxa:w6jXebeTS6WGaVFDIEz9/JXEc7DrRnoEIW4WhduuW.1"}

## Private by Default

All of your data *defaults* to being private. You are the only one who can access your uploaded content, unless you choose to share it with others through our sharing and public features. For example, you can share a project with a collaborator, invite additional members to your team or set a project’s visibility to public.

Curvenote employees never access your data unless required by you for support reasons. If you require support you can share your project with [support@curvenote.com](mailto:support@curvenote.com).

+++ {"oxa":"oxa:w6jXebeTS6WGaVFDIEz9/RMzkYZWnYqe1xEpbfUZY.1"}

## Passwords and Personal Information

We do not intentionally store sensitive Personal Identifying Information on the Curvenote platform (e.g. SSN, physical addresses, etc.). We use a 3rd party provider for authentication to allow users to login to use our services (including password management and external authentication), you can read more security statements about the [Identity Platform](https://cloud.google.com/identity-platform) or more details in our [Privacy Statement](http://curvenote.com/legal/).

+++ {"oxa":"oxa:w6jXebeTS6WGaVFDIEz9/m5H8hmPsGNELvG1l5JTE.1"}

## Content Retention

We run automated backups nightly that backup all content, images and notebooks on Curvenote. We keep these backups for 30 days.

+++ {"oxa":"oxa:w6jXebeTS6WGaVFDIEz9/R7AXfIuWldENJZ2lLMQ0.2"}

## 3rd-party Services

Curvenote leverages the following 3rd-party services and APIs:

- [Segment](https://segment.com/), [Amplitude](https://amplitude.com/) and [Google Analytics](https://www.google.com/analytics/) for analytics
- [Google Cloud](https://cloud.google.com/) for hosting (data & compute)
- [Vercel](https://vercel.com/) for hosting of static sites
- [SendGrid](https://sendgrid.com/) for emails
- [MagicBell](https://magicbell.io/) for notifications
- [Stripe](https://stripe.com/) for payments

These services provide the highest standards and are regularly externally audited, Curvenote does not audit them by its own means.

+++ {"oxa":"oxa:w6jXebeTS6WGaVFDIEz9/OWgbdWq367cAQNSCaf7P.1"}

## Contact Us

**We take system vulnerabilities very seriously.** Please contact [security@curvenote.com](mailto:security@curvenote.com) if you need more information about our security practices or to report a security vulnerability.

