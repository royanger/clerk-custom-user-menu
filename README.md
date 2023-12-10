<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/light-logo.png">
      <img alt="Clerk Logo for light background" src="./public/dark-logo.png" height="64">
    </picture>
  </a>
  <br />
</p>
<div align="center">
  <h1>
    Custom User Button with Clerk
  </h1>  
  <a href="https://www.npmjs.com/package/@clerk/clerk-js">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@clerk/clerk-js" />
  </a>
  <a href="https://discord.com/invite/b5rXHjAg7A">
    <img alt="Discord" src="https://img.shields.io/discord/856971667393609759?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <a href="https://twitter.com/clerkdev">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40clerkdev&style=social&url=https%3A%2F%2Ftwitter.com%2Fclerkdev" />
  </a> 
  <br />
  <br />
  <img alt="Clerk Hero Image" src="./public/hero.png">
</div>

## Introduction

Clerk is a developer-first authentication and user management solution. It provides pre-built React components and hooks for sign-in, sign-up, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be dropped into any React or Next.js application.

This sample repo has branches that match each of the posts. Please see [Running the sample application](#running-the-sample-application) for more information. 

## This rep is not actively maintained!

This repo and the example application may get updated for bug fixes, but its likely to remain unmaintained. The following versions of key packages were used when developing the blog posts and the repo:

| Version | Package |
| ------- | ------- |
| 4.27.2 | @clerk/nextjs |
| 2.0.6 | @radix-ui/react-dropdown-menu |
| 0.7.0 |class-variance-authority |
| 2.0.18 |@heroicons/react |


## Deploy

Easily deploy the example application to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclerkinc%2Fclerk-nextjs-app-quickstart&env=NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY&envDescription=Clerk%20API%20keys&envLink=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Fnextjs&redirect-url=https%3A%2F%2Fclerk.com%2Fdocs%2Fquickstart%2Fnextjs)

## Running the sample application

This application has branches that match the parts of the blog post. You will want to checkout the branch that matches the post you are currently reading. If you are new to working with remote branches, the following will give you access to all branches:

```bash
git clone git@github.com:royanger/clerk-custom-user-menu.git
cd clerk-custom-user-menu
git fetch --all
```
You can now use the following to checkout the branch related to the post you are folling:

```bash
// Part 1
git checkout custom-user-button-part-1
```

To run the example locally, you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-nextjs-app-quickstart).

2. Go to the [Clerk dashboard](https://dashboard.clerk.com?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-nextjs-app-quickstart) and create an application.

3. Set the required Clerk environment variables as shown in [the example `env` file](./.env.local.example).

4. `pnpm install` the required dependencies.

5. `pnpm dev` to launch the development server.


## Learn more

To learn more about Clerk and Next.js, check out the following resources:

- [Quickstart: Get started with Next.js and Clerk](https://clerk.com/docs/quickstarts/nextjs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-nextjs-app-quickstart)

- [Clerk Documentation](https://clerk.com/docs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=10-24-2023&utm_term=clerk-nextjs-app-quickstart)
- [Next.js Documentation](https://nextjs.org/docs)

## Found an issue?

If you have found an issue with the examples, please create an [issue](https://github.com/royanger/clerk-custom-user-menu/issues).

If it's a quick fix, such as a misspelled word or a broken link, feel free to skip creating an issue.  
Go ahead and create a [pull request](https://github.com/royanger/clerk-custom-user-menu/pulls) with the solution. :rocket:

## Want to leave feedback?

Feel free to create an [issue](https://github.com/royanger/clerk-custom-user-menu/issues) with the **feedback** label. I will take a look at it and get back to you as soon as I can!

## Connect with us

You can discuss ideas, ask questions, and meet others from the community in our [Discord](https://discord.com/invite/b5rXHjAg7A).

If you prefer, you can also find support through our [Twitter](https://twitter.com/ClerkDev), or you can [email](mailto:support@clerk.dev) us!
