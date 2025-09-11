import React, { useState } from 'react';
import './Blogs.css';
import blog1 from '../../assets/images/blog1.png';
import BlogsData from './BlogsData'

const Blogs = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Software');

  const categories = [
    "Software",
    "Healthcare",
    "Finance",
    "E-commerce",
    "Education",
    "Case studies",
    "Data Architecture",
    "Data Engineering",
    "Data Visualisation",
    "AI",
    "Data Quality",
    "Data Migration",
  ];

  // Filter categories for sidebar search
  const filteredCategories = categories.filter(category =>
    category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="blogs-section">
      <h2>DataNovel Insights Blog</h2>
      <div className="d-flex">
        {/* Left image */}
        {/* <div>
          <img src={blog1} alt="Blog Thumbnail" />
        </div> */}
        <div>
          <img
            src={
              selectedCategory && BlogsData[selectedCategory.toLowerCase().replace(/[-\s]/g, '')]
                ? BlogsData[selectedCategory.toLowerCase().replace(/[-\s]/g, '')].banner
                : blog1 // default image when no category selected
            }
            alt="Blog Thumbnail"
          />
        </div>

        {/* Right side */}
        <div style={{ background: 'rgba(245, 247, 250, 1)' }} className="p-3 rounded shadow-sm">
          <input
            type="search"
            placeholder="Search Blogs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
          />
          <h4 className="px-3">Posts by Category</h4>
          <ul>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    fontWeight: selectedCategory === cat ? 'bold' : 'normal',
                    color: selectedCategory === cat ? '#007bff' : 'rgba(0, 0, 0, 1)',
                  }}
                >
                  {cat}
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </div>
      </div>

      {/* Blogs grid below */}
      {selectedCategory && BlogsData[selectedCategory.toLowerCase().replace(/[-\s]/g, '')] && (
        <div className="blogs-grid">
          {BlogsData[selectedCategory.toLowerCase().replace(/[-\s]/g, '')].posts.map((blog, index) => (
            <div key={index} className="blog-card">
              <h5>{blog.title}</h5>
              <img src={blog.image} alt={blog.subheading} />
              <h6>{blog.subheading}</h6>
              <p>{blog.description} <a href={blog.readMore}> Read More</a></p>
              <button>visits our Blogs</button>
            </div>
          ))}
        </div>
      )}

    </section>
  );
};

export default Blogs;
