import Container from "../components/Container";
import AboutMe from "./aboutMe";
import Landing from "./landing";
import MediaProjects from "./projects/MediaProjects";

const Home = (props: any) => {
  return (
    <div>
      <Container>
        <Landing />
        <MediaProjects />
        <AboutMe />
      </Container>
    </div>
  );
};

export default Home;
