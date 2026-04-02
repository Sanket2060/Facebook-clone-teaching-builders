import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Post from "./components/post";
import TotalLikes from "./components/totalLikes";
import FacebookLoginUI from "./components/FacebookLogin";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("likes");
  });
  const [totalLikes, setTotalLikes] = useState(0);
  const posts = [
    {
      name: "Manish K.C.",
      time: "1 hour ago",
      caption: "Hello from Manish",
      profile:
        "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      time: "13 mins ago",
      name: "Pratik Pangeni",
      caption: "Hello from Pratik. Look at the View...",
      profile:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <>
      <TotalLikes totalLikes={totalLikes} />
      {/* <Post name="Sanket" imageUrl="" />
    <Post name="Pratik" imageUrl="" />
    <Post name="Manish" imageUrl="" />
    <Post name="watson" imageUrl="" /> */}
      {posts.map((post) => {
        return (
          <Post
            name={post.name}
            imageUrl={post.image}
            setTotalLikes={setTotalLikes}
          />
        );
      })}
      <Post />
    </>
  );
}

export default App;
