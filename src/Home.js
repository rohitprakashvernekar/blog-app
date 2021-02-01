import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: "loreem ipsum...",
      author: "Rohit",
      id: 1,
    },
    {
      title: "Welcome",
      body: "loreem ipsum...",
      author: "Vernekar",
      id: 2,
    },
    {
      title: "Web Dev",
      body: "loreem ipsum...",
      author: "RPV",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs"/>
      <BlogList blogs={blogs.filter((blog)=> blog.author==='Rohit' )} title="Rohit's Blogs"/>
    </div>
  );
};

export default Home;
