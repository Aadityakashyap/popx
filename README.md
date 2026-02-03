# PopX – React + Tailwind

A mobile App interface centered on the webpage PopX authentication flow built using React (Vite) and Tailwind CSS, with smooth animations and persistent authentication.

## Features

- Mobile-first UI (centered app layout)
- Signup & Login authentication
- Persistent user data using LocalStorage
- Fully responsive and Smooth page transitions

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- React Router
- LocalStorage

## Authentication Logic

### Signup

- Validates inputs
- Saves user data to `localStorage`
- Redirects to Profile page

### Login

- Reads stored credentials
- Verifies email & password
- Displays error alert on failure

### Profile Page

- Loads user data from `localStorage`
- Falls back to default values if data is missing or empty

## LocalStorage Schema

```json
{
  "name": "Marry Doe",
  "phone": "9876543210",
  "email": "marry@gmail.com",
  "password": "",
  "company": "PopX",
  "agency": "yes"
}
```

## Installation & Setup

### 1. Clone Repository

```bash
git clone popx.git
cd popx
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

## Deployment

### 1. Build for Production

```bash
npm run build
```

### 2. Deploy to Netlify

- Go to Netlify.
- Drag and drop the `dist` folder into Netlify dashboard.
- Netlify will deploy your app in a few minutes.

### 3. Verify Deployment

Visit your Netlify domain and test adding, viewing, completing, deleting, and filtering tasks.
