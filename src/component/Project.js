import image1 from "../img/United.png";
import image2 from "../img/Flashcard.png";

const Project = () => {
  return (
    <div id="Project">
      <h1>Projects</h1>

      <h3>Javascript Flashcard</h3>
      <a href="https://github.com/urvilp/project-1">Github repo</a>
      <a href="https://urvilp.github.io/project-1/">Deployed App</a>
      <img src={image2} alt="project" />
      <br />
      <br />
      <h3>Employee Application</h3>
      <a href="https://github.com/urvilp/project-2">Github repo</a>
      <a href="https://company-page.herokuapp.com/">Deployed app</a>
      <img src={image1} alt="project" />
    </div>
  );
};

export default Project;
