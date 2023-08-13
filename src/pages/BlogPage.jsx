import Post from "@components/Post/Post";
import Subscribe from "../components/Subscribe/Subscribe";
import Container from "@components/Container/Container";
import tomatoes from "@assets/images/tomatoes.png";
import salad from "@assets/images/salad.png";
import man from "@assets/images/man.png";
import woman from "@assets/images/woman.png";
import vitamins from "@assets/images/vitamins.png";
import trash from "@assets/images/trash.png";

const BlogPage = () => {
  const postsData = [
    {
      id: 1,
      image: tomatoes,
      alt: "tomatoes",
      title: "The Benefits of Vitamin D & How to Get It",
    },
    {
      id: 2,
      image: salad,
      alt: "salad",
      title: "Our Favourite Summertime Tomatoes",
    },
    {
      id: 3,
      image: vitamins,
      alt: "vitamins",
      title: "Benefits of Vitamin C & How to Get It",
    },
    {
      id: 4,
      image: man,
      alt: "man",
      title: "Research More Organic Foods",
    },
    {
      id: 5,
      image: woman,
      alt: "woman",
      title: "Everyday Fresh Fruites",
    },
    {
      id: 6,
      image: trash,
      alt: "trash",
      title: "Don’t Use Plastic Product! it’s Kill Nature",
    },
  ];

  return (
    <>
      <Container>
        <div className="blog">
          {postsData.map((post) => (
            <Post key={post.id} postsData={post} />
          ))}
        </div>
        <Subscribe />
      </Container>
    </>
  );
};

export default BlogPage;
