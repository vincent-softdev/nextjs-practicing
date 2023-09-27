This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description

Technologies used: NextJS, Typescript, TailwindCSS, SCSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Code structure


ref: [A Redux Toolkit Project Structure Guide](https://medium.com/@fdikmen/a-redux-toolkit-project-structure-guide-58093baa88a5)

```bash
src/
  |- app/
     |- App.js                # Main React component
     |- store.js              # Redux Toolkit store configuration
  |- features/
     |- feature1/
        |- feature1Slice.js  # Redux Toolkit Slice configuration for feature1
        |- Feature1.js       # Feature1 component
        |- feature1API.js     # API calls related to feature1
     |- feature2/
        |- feature2Slice.js  # Redux Toolkit Slice configuration for feature2
        |- Feature2.js       # Feature2 component
        |- feature2API.js     # API calls related to feature2
  |- components/
     |- Header.js             # Header component
     |- Footer.js             # Footer component
     |- CommonComponent.js    # Commonly used components
     |- Button.js             # Example button component
     |- Card.js               # Example card component
     |- Modal.js              # Example modal component
  |- pages/
     |- Homepage.js           # Homepage component
     |- AboutPage.js          # About page component
     |- ContactPage.js        # Contact page component
  |- hooks/
     |- useLocalStorage.js    # Custom hook for storing data in localStorage
     |- useFetch.js           # Custom hook for fetching data from an API
  |- utils/
     |- utilityFunctions.js   # Helper functions
  |- API/
     |- index.js              # API exports
  |- config/
     |- config.js             # Application configuration file
  |- router/
     |- index.js              # React Router configuration
  |- .env                     # Environment variables
  |- index.js                 # Application entry file
```