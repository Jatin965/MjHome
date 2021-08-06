import PropTypes from "prop-types";
import React from "react";
import BlogFeaturedSingle from "./BlogFeaturedSingle";

const blogFeaturedData = [
  {
    id: 1,
    image: "/assets/img/blog/blog-1.jpg",
    category: ["lifestyle", "men"],
    title: "A guide to latest trends",
    url: "/blog-details-standard",
    author: "Admin",
    authorUrl: "/blog-standard",
  },
  {
    id: 2,
    image: "/assets/img/blog/blog-2.jpg",
    category: ["lifestyle"],
    title: "Five ways to lead a happy life",
    url: "/blog-details-standard",
    author: "Admin",
    authorUrl: "/blog-standard",
  },
  {
    id: 3,
    image: "/assets/img/blog/blog-3.jpg",
    category: ["lifestyle"],
    title: "Tips on having a happy life",
    url: "/blog-details-standard",
    author: "Admin",
    authorUrl: "/blog-standard",
  },
];

const BlogFeatured = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div
          className={`section-title ${"text-center" ? "text-center" : ""} ${
            "mb-55" ? "mb-55" : ""
          } `}
        >
          <h2>OUR BLOG</h2>
        </div>

        <div className="row">
          {blogFeaturedData.map((singlePost) => {
            return (
              <BlogFeaturedSingle singlePost={singlePost} key={singlePost.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

BlogFeatured.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default BlogFeatured;
