# Swipe Eats Legal

Shared legal document data for Swipe Eats apps and websites.

This package intentionally stores legal copy as structured data instead of raw
Markdown or plain text. The app and website should render these documents with
their own UI components while importing the same source copy and versions.

## Local Development

The app and website can point at this sibling repo while testing:

```json
"@swipe-eats/legal": "file:../legal"
```

After changing legal copy, build this package before testing local consumers:

```sh
pnpm build
```

## GitHub Install

After this repo is pushed, replace the local file dependency in each consumer
with the GitHub package URL:

```json
"@swipe-eats/legal": "github:OWNER/legal#main"
```

For released legal text, prefer a tag:

```json
"@swipe-eats/legal": "github:OWNER/legal#v2026-05-28"
```
