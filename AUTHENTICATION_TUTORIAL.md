# Authentication System Tutorial

This project implements cookie-based session authentication using a public API. Here's how it works:

## 📁 Project Structure

```
src/
├── context/
│   └── AuthContext.jsx       # Global auth state management
├── hooks/
│   └── useAuth.js            # Custom hook to access auth
├── routes/
│   ├── RouteGuards.jsx       # Protected/Public route components
│   └── ProtectedRoute.jsx    # Protected route wrapper
├── components/
│   ├── Login.jsx             # Simple login form
│   ├── Signup.jsx            # Simple signup form
│   └── Feed.jsx              # Authenticated feed component
└── main.jsx                  # Routes setup with AuthProvider
```

## 🔐 How Authentication Works

### 1. **AuthContext** - Global State Management

File: `src/context/AuthContext.jsx`

This context manages:

- `user` - Current logged-in user data
- `isAuthenticated` - Boolean flag for login status
- `login()` - Login function
- `signup()` - Registration function
- `logout()` - Logout function

**Key Point**: Uses `credentials: "include"` in fetch requests to automatically send/receive the session cookie.

```javascript
const { user, login, logout, isAuthenticated } = useAuth();
```

### 2. **useAuth Hook** - Access Auth Anywhere

File: `src/hooks/useAuth.js`

Use this hook in any component to access auth state:

```javascript
import { useAuth } from "../hooks/useAuth";

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) return <div>Not logged in</div>;

  return <div>Hello, {user.fullName}</div>;
}
```

### 3. **Protected Routes** - Guard Authenticated Pages

File: `src/routes/RouteGuards.jsx`

Routes are protected using the `ProtectedRoute` component:

```javascript
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Feed />
    </ProtectedRoute>
  }
/>
```

### 4. **Routes Overview**

| Route          | Component       | Status    | Purpose                  |
| -------------- | --------------- | --------- | ------------------------ |
| `/`            | FacebookLoginUI | Public    | Old login (localStorage) |
| `/login`       | Login           | Public    | New login (API)          |
| `/auth/signup` | Signup          | Public    | New signup (API)         |
| `/dashboard`   | Feed            | Protected | Authenticated feed       |

## 🎓 Teaching Points

### Authentication Flow

1. User fills signup/login form
2. Browser sends POST to `/api/auth/login` or `/api/auth/signup`
3. Server responds with session cookie (`sid`)
4. Client stores cookie automatically (via `credentials: "include"`)
5. Subsequent requests include the cookie
6. Protected endpoints validate the cookie and return data

### Simple Login Example

```javascript
// No complex state management needed
const handleLogin = async (email, password) => {
  const { login } = useAuth();

  try {
    const user = await login(email, password);
    navigate("/dashboard");
  } catch (error) {
    alert(error.message);
  }
};
```

### Fetching Protected Data

```javascript
import { useAuth } from "../hooks/useAuth";

function Dashboard() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://public-feed-api.replit.app/api/posts", {
      credentials: "include", // KEY: Send session cookie
    })
      .then((r) => r.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return <div>Posts: {posts.length}</div>;
}
```

## 📚 API Endpoints Used

### Public Endpoints (No Auth)

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login

### Protected Endpoints (Need Cookie)

- `GET /api/auth/me` - Get current user info
- `GET /api/posts` - Get full feed (15 posts)
- `GET /api/posts/:id` - Get single post
- `GET /api/profiles/:id` - Get user profile

### Public Feed Endpoints

- `GET /api/public/feed` - Limited feed (5 posts, no auth)
- `GET /api/public/trending` - Top 3 posts (no auth)
- `GET /api/public/stats` - Platform stats (no auth)

## 🚀 Quick Start

1. **Test with new simple auth**: Navigate to `/login`
2. **Sign up**: Click "Sign up" link
3. **After login**: Redirected to `/dashboard` showing authenticated feed
4. **Protected routes**: Try accessing `/dashboard` without login (redirects to `/login`)

## 💡 Key Lesson: Cookie-Based vs Token-Based Auth

This API uses **cookie-based** authentication:

```javascript
// ✅ Cookie-based (this project)
fetch(url, { credentials: "include" }); // Browser auto-sends cookies

// ❌ NOT used here - Token-based
fetch(url, {
  headers: { Authorization: `Bearer ${token}` },
});
```

---

**Base API URL**: `https://public-feed-api.replit.app`
