const ProjectItem = ({ projectData: { image, title, category } }) => {
  return (
    <>
      <li className="projects__item">
        <img className="projects__image" src={image} alt={title} />
        <p className="projects__title">{title}</p>
        <p className="projects__category">{category}</p>
      </li>
    </>
  );
};

export default ProjectItem;
