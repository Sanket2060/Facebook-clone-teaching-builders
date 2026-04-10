# 🚀 Quick Start Guide

## Start Your App

```bash
npm run dev
```

Your app runs on `http://localhost:5173` (or similar)

## Test Authentication - 3 Simple Steps

### Step 1: Create an Account

1. Go to: `http://localhost:5173/auth/signup`
2. Fill the form:
   - **Full Name**: Your Name
   - **Email**: yourname@test.com
   - **Username**: yourname
   - **Password**: anypassword
3. Click **Sign Up**

### Step 2: See Dashboard

✅ You're automatically logged in!
✅ See "Welcome, Your Name" at the top
✅ See real posts from the API below

### Step 3: Test Logout & Login

1. Click **Logout** button (red, top-right)
2. You're redirected to **Sign Up** page
3. Go to: `http://localhost:5173/login`
4. Enter your email and password
5. Click **Login**
6. ✅ Back on dashboard!

## Test Protected Routes

### Without Logging In

1. Open a new private/incognito window
2. Go to: `http://localhost:5173/dashboard`
3. ✅ Redirected to `/login` automatically

### With Logging In

1. After login, any direct link to `/dashboard` works
2. ✅ Shows your authenticated feed

## Old Demo Login (Still Works)

The original demo login is still available:

- `http://localhost:5173/` - Old login
- Demo user: `student` / `123456`
- Uses localStorage (old way)

## See the Code

### Main Files for Students

1. **Authentication Context**
   - File: `src/context/AuthContext.jsx`
   - Shows: How to manage global auth state

2. **Login Component**
   - File: `src/components/Login.jsx`
   - Shows: How to create a login form

3. **Using Auth in Components**
   - File: `src/components/Feed.jsx`
   - Shows: How to fetch protected data

4. **Examples**
   - File: `src/components/AUTHENTICATION_EXAMPLES.jsx`
   - Shows: 4 common patterns students need

## Key Code Pattern

Every authenticated request needs this:

```javascript
const response = await fetch(url, {
  credentials: "include", // ⭐ IMPORTANT!
});
```

Without `credentials: "include"`, you get: `401 Unauthorized`

## Important URLs

| Purpose   | URL                               |
| --------- | --------------------------------- |
| Sign Up   | http://localhost:5173/auth/signup |
| Login     | http://localhost:5173/login       |
| Dashboard | http://localhost:5173/dashboard   |
| Old Demo  | http://localhost:5173/            |

## What You Can Show Students

1. **Sign up creates an account** - Real API call
2. **Cookie is stored** - Browser DevTools (F12 → Application → Cookies)
3. **Protected data fetched** - Network tab shows requests with cookie
4. **Logout clears session** - User state becomes null
5. **Redirect on no auth** - Try accessing /dashboard without login

---

Happy teaching! 🎓
