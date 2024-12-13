function ProjectCard(props) {
  return (
    <div className="project">
      <img src={props.img} alt={props.imgAlt} height={150} />
      <h5>{props.title}</h5>
      <button type="button">
        <a
          href={props.link}
          target="_blank"
        >
          See the Code!
        </a>
      </button>
    </div>
  );
}

export default ProjectCard;
