import PhotoList from "@/componets/PhotoList";
const Home = async () => {
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();

  return (
    <div>
      Home page
      <PhotoList photos={photos} />
    </div>
  );
};

export default Home;
