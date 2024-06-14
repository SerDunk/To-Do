import Scatter from "../images/circle-scatter-haikei.svg";

function HomePage() {
  return (
    <div
      style={{ backgroundImage: `url(${Scatter})` }}
      className="bg-cover min-h-screen flex justify-center items-center"
    >
      <div>
        <h1 className="text-5xl text-second">The platform for Todoing</h1>
      </div>
    </div>
  );
}

export default HomePage;
