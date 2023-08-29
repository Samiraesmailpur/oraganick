import "./Projects.scss";
import Container from "@components/Container/Container";
import ProjectItem from "./ProjectsItem";
import Lemon from "@assets/images/lemon.jpg";
import Carrot from "@assets/images/carrot.jpg";
import Tommato from "@assets/images/tommato.jpg";
import Raspberry from "@assets/images/raspberry.jpg";
import Orange from "@assets/images/orange.jpg";
import Leaf from "@assets/images/leaf.jpg";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      image: Lemon,
      title: "Green & Tasty Lemon",
      category: "Fruits",
    },
    {
      id: 2,
      image: Carrot,
      title: "Organic Carrot",
      category: "Farmer",
    },
    {
      id: 3,
      image: Leaf,
      title: "Organic Betel Leaf",
      category: "Leaf",
    },

    {
      id: 4,
      image: Tommato,
      title: "Natural Tommato",
      category: "Fruits",
    },
    {
      id: 5,
      image: Raspberry,
      title: "Black Raspberry",
      category: "Farmer",
    },
    {
      id: 6,
      image: Orange,
      title: "Honey Orange",
      category: "Farmer",
    },
  ];

  return (
    <section className="projects">
      <div className="projects__bg">Projects</div>
      <Container>
        <ul className="projects__list">
          {projectsData.map((project) => (
            <ProjectItem key={project.id} projectData={project} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Projects;
