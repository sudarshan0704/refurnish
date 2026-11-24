import { getAllPosts } from "../../data";
import BlogCard from "../BlogCard";
import "./index.css";

export default function BlogList() {
  const posts = getAllPosts();

  return (
    <section className="blog-list" aria-labelledby="blog-list-heading">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Our Blogs</p>
          <h2 id="blog-list-heading">Ideas for furniture you want to keep</h2>
          <p>
            Practical guides on restoring, repairing, polishing and refinishing furniture.
          </p>
        </div>
        <div className="row g-4 g-xl-5">
          {posts.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.slug}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
