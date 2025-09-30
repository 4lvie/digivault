# 🗃 DIGIVAULT

Digivault is a web application for managing and visualizing memories. It uses React, Tailwind CSS, DaisyUI, and Supabase as the backend.

## 🚀 Public Deployment

Try Digivault live at:
**https://digivault-ten.vercel.app/**

# 🌟 Features

✅ User authentication and login management

🖼 Display memories as cards and grid icons

📌 Detailed modal view with memory information

➕ Add, edit, and delete memories easily

📱 Fully responsive and modern UI using Tailwind CSS + DaisyUI

🎨 Smooth animations with Framer Motion

📂 File and image upload powered by Dropzone

## Project Structure

```
src/
  App.jsx, App.css, index.css, main.jsx
  components/
    MemoryCard.jsx         # Individual memory card
    MemoryList.jsx         # Memory grid
    ux/
      Drawer.jsx           # Sidebar menu
      Dropzone.jsx         # Image upload
      Layout.jsx           # Main layout
      MemoryDetailModal.jsx# Memory detail modal
      MemoryForm.jsx       # Add/edit memory form
      NavBar.jsx           # Navigation bar
  constants/
    Constants.jsx          # Global constants
  context/
    TaskContext.jsx        # Memory management context
  pages/
    AuthLayout.jsx         # Auth layout
    ExploreVault.jsx       # Explore page
    Home.jsx               # Home page
    Login.jsx              # Login page
    NotFound.jsx           # 404 error page
    Vault.jsx              # Vault page
  supabase/
    client.jsx             # Supabase configuration
```

## ⚙️ Local Installation

Follow these steps to run Digivault locally:

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/digivault.git
cd digivault
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory with your Supabase credentials:

```env
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your_supabase_anon_key"
```

4. **Set up Supabase backend:**

- Check _Backend Setup (Supabase) section_

5. **Start the development server:**

```bash
npm run dev
```

6. **Open the app:**
   Visit `http://localhost:5173` in your browser.

## 🗄 Backend Setup (Supabase)

Digivault uses **[Supabase](https://supabase.com/)** as its backend (database + auth + storage).

If you want to run this project locally or deploy it yourself, you’ll need your own Supabase project.

### 1. Create a Supabase project

1. Go to [Supabase](https://supabase.com) and sign in.
2. Create a new project.
3. Copy your `Project URL` and `anon public key` from the Supabase dashboard:
   - `Settings` → `API` → `Project URL`
   - `Settings` → `API` → `anon public`

### 2. Fill the environment variables in the `.env.local.` file.

Duplicate the `.env.example` and create your `.env` file:

### 3. Create table in Supabase

Check the `supabase` folder and:

1. Create table as in [`schema.sql`](src/supabase/schema.sql) file.
2. Create policies as in [`policies.sql`](src/supabase/policies.sql) file.

```bash
cp .env.example .env
```
