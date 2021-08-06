import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <Fragment>
    <div
          className={`section-title ${"text-center" ? "text-center" : ""} ${
            "mb-55" ? "mb-55" : ""
          } `}
        >
          <h2>Featured Blog</h2>
        </div>
      <div className="blog-details-top">
        <div className="blog-details-img">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/assets/img/blog/blog-5.jpg"}
          />
        </div>
        <div className="blog-details-content">
          <div className="blog-meta-2">
            <ul>
              <li>22 April, 2018</li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/blog-details-standard"}>
                  4 <i className="fa fa-comments-o" />
                </Link>
              </li>
            </ul>
          </div>
          <h3>14 Emerging Fashion Influencers Who Are Going to Own 2018</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprhendit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qei
            officia deser mollit anim id est laborum. Sed ut perspiciatis unde
            omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam.{" "}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default BlogPost;
