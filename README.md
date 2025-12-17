


# Currency Exchange Dashboard

A Currency Exchange Dashboard built with Next.js and React that allows users to convert currencies and track real-time exchange rate using Frankfuter API.

Also available on a [Vercel Deploy](https://currency-exchange-dashboard-opmpxpavd-gaspargcs-projects.vercel.app/).


Important things to consider:
- The project took around 4 hours (I took extra time to finish the docs).
- I did not implement a bonus feature due to time constraints.
- I assumed the API cant cause crashes due to excesive data handling.
- I used AI in the following cases:
  - GitHub Copilot was used to improve coding efficiency, mainly for autocompletion, minor error fixes, and generating the website background.
  - ChatGPT was used to generate an initial template for the main React components. However, these components were heavily modified, and only the styling was retained. It was also used throughout the project to resolve questions related to React and Next.js. However, at no point was the generated code evaluated or modified.

What could be improved with more time:
- Improved UI responsiveness and animations to make the application more user-friendly.
- More robust error handling, including dedicated error screens and clearer feedback to the user.
- Retry mechanisms to handle timeouts or temporary loss of network connectivity.


## Prerequisites

- Node.js 18 or higher
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gaspargc/currency-exchange-dashboard.git
   cd currency-exchange-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Environment Variables

Create a `.env.local` file at the root of the project and set your API URL:

```
API_BASE_URL=https://yourdomain.com/api
NEXT_PUBLIC_API_URL=https://yourdomain.com/api
```

Replace the URLs with your backend or currency API endpoint.

## Running in Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Production Build

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---
If you have questions, check the code or open an issue.
