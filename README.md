#  Leonardo Challenge App

This is a [Next.js](https://nextjs.org) application bootstrapped using [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
It showcases character data fetched via GraphQL, user interaction through modals, and a clean layout built with Chakra UI. The project includes unit testing and has been deployed to Vercel.

---

##  Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/docs/app)
- **Styling**: [Chakra UI](https://chakra-ui.com/)
- **State Management**: React Context API
- **GraphQL**: Apollo Client
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel

---

##  Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/cheemajagdeep42/Leonardo.git
   cd Leonardo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:  
   [http://localhost:3000]

---

## Running Unit Tests

Unit tests are written using **Jest** and **React Testing Library**.

To run tests:

```bash
npm run test
```

---

## Live Demo

This app is deployed on **Vercel**:  
🔗 [https://leonardo-theta.vercel.app/](https://leonardo-theta.vercel.app/)

---

##  Folder Structure

```
src/
├── app/                   # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
│   └── information/       # Paginated character listing page
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── MainLayout/
│   ├── UserModal/
│   └── CharacterList/
├── context/               # React context for user state
│   └── UserContext.tsx
├── lib/                   # Apollo client setup
│   └── apollo.ts
├── __tests__/             # Unit test files
└── providers.tsx          # App-level providers (Apollo, Chakra, etc.)
```

---

##  Features

- 📜 Fetches character data from Rick & Morty GraphQL API.
- 📄 Pagination support.
- 👤 Prompts users for name and job title on first visit.
- 📱 Responsive layout using Chakra UI.
- 🧪 Fully tested with mocks using Jest and Testing Library.

---

