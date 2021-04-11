import React from "react";
import "./Blogs.css";
import BlogPost from "../BlogPost/BlogPost";
import wilsonImg from "../../../images/wilson.png";

const blogData = [
  {
    title: "Check at least a doctor in a year for your teeth",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: wilsonImg,
    date: "23 April 2021",
  },
  {
    title: "Two time brush in a day can keep you healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Sinthia",
    authorImg: wilsonImg,
    date: "23 April 2021",
  },
  {
    title: "The tooth cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Wilson",
    authorImg: wilsonImg,
    date: "23 April 2021",
  },
];

const Blogs = () => {
  return (
    <section className="blogs my-5">
      <div className="container">
        <div className="section-header text-center">
          <h5 className="text-brand text-uppercase">our blog</h5>
          <h2>From Our Blog News</h2>
        </div>
        <div className="card-deck mt-5">
          {blogData.map((blog) => (<BlogPost blog={blog} key={blog.title} />))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
