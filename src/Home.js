import { useState } from "react";

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
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
