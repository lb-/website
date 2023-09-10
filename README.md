# [`lb.ee`](https://lb.ee) personal website

## Resources

- Based on the starter repository [eleventy-base-blog](https://github.com/11ty/eleventy-base-blog).
- Using the [v2.0 release of 11ty](https://www.11ty.dev/blog/eleventy-v2/)).

## Running locally

1. Clone the repo
2. Install dependencies `npm install`
3. Run Eleventy `npx @11ty/eleventy` OR `npm build`
4. Or build and host on a local development server `npx @11ty/eleventy --serve` OR `npm start`

## Deployment & hosting

Currently deployed using Cloudflare pages.

- `posts-by.lb.ee/post-123` will redirect to`https://lb.ee/posts/post-123/` (Cloudflare proxy, redirects old Medium location to new location).
- `www.lb.ee` redirects to `lb.ee`.

## Analytics

No client-side analytics in use, only server-side Cloudflare analytics.

### Implementation Notes

- ...
