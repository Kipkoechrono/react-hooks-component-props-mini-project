import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

function App() {
  const blogName = "My Awesome Blog";
  const aboutText = "Welcome to my blog about awesome things!";
  const posts = [
    { id: 1, title: "First Post", date: "2023-08-14", preview: "This is my first post..." },
    { id: 2, title: "Second Post", date: "2023-08-15", preview: "This is my second post..." },
    // ... more posts
  ];

  return (
    <div className="App">
      <Header name={blogName} />
      <About about={aboutText} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;