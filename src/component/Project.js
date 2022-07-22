import image1 from "../img/Flashcard.png";
import image2 from "../img/United.png";

const Project = () => {
  return (
    <div id="Project">
      <h1>Projects</h1>
      <h3>JavaScript Flash Cards</h3>
      <a href="https://github.com/urvilp/project-1">GitHub Repo</a>
      <br />
      <a href="https://urvilp.github.io/project-1/">Deployed App</a>
      <br />
      <br />
      <img src={image1} alt="project1" />
      <br />
      <br />
      <h3>Employee Application</h3>
      <a href="https://github.com/urvilp/project-2">GitHub Repo</a>
      <br />
      <a href="https://company-page.herokuapp.com/">Deployed App</a>
      <br />
      <br />
      <img src={image2} alt="project2" />
      <br />
      <br />
    </div>
  );
};

export default Project;
