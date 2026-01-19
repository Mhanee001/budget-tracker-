# GameGambit Finance Tracker

A personal finance management app built with React and Firebase for tracking income and expenses in real-time.

## Features

- 📊 **Dashboard Overview** - View total balance, monthly income/expenses, and transaction count
- 💰 **Transaction Management** - Add income and expense transactions with categories
- 📈 **Visual Charts** - Track your financial trends over time
- 🔄 **Real-time Sync** - Data syncs instantly across devices via Firebase Firestore
- 🎨 **Modern UI** - Clean, responsive design with dark mode support

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Backend**: Firebase (Firestore, Auth, Storage)
- **Charts**: Recharts

## Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Firebase project with Firestore enabled

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Firebase Setup

The app is pre-configured with Firebase. To use your own Firebase project:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Firestore Database
3. Update the config in `src/lib/firebase.ts` with your credentials

### Firestore Security Rules

For production, set up proper security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /transactions/{document} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## Project Structure

```
src/
├── components/
│   ├── dashboard/      # Stats cards and charts
│   ├── landing/        # Landing page components
│   ├── layout/         # Header and navigation
│   ├── transactions/   # Transaction form and list
│   └── ui/             # Reusable UI components
├── hooks/
│   └── useTransactions.ts  # Firestore data hook
├── lib/
│   ├── firebase.ts     # Firebase configuration
│   └── formatters.ts   # Utility functions
└── pages/
    └── Index.tsx       # Main application page
```

## Deployment

Deploy easily via [Lovable](https://lovable.dev/projects/0579f34b-58c6-438d-9c9e-449c1421b8a4):

1. Click **Share** → **Publish**
2. Optionally connect a custom domain in **Project** → **Settings** → **Domains**

## License

MIT
