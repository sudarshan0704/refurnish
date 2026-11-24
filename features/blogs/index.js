import PageTitleBar from "@/shared/components/common/PageTitleBar";
import BlogList from "./components/BlogList";

export default function BlogsPage() {
  return (
    <>
      <PageTitleBar title="Our Blogs" image="/images/banners/blogs.jpg" />
      <BlogList />
    </>
  );
}
