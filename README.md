# RizqSistas Project

Next.js boilerplate with TypeScript, Tailwind CSS, and ESLint.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ESLint**

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Routes

- `/` - Landing page
- `/community` - Community page

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page (/)
│   ├── community/
│   │   └── page.tsx        # Community page (/community)
│   └── globals.css         # Global styles with Tailwind
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── package.json
```


