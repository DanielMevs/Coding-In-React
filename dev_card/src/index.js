import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { skill: "Python", level: "advanced", color: "blue" },
  { skill: "HTML+CSS", level: "advanced", color: "orange" },
  { skill: "JavaScript", level: "advanced", color: "yellow" },
  { skill: "Git and Github", level: "intermediate", color: "purple" },
  { skill: "Angular", level: "beginner", color: "orangered" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="me.jpg" alt="Daniel Mevs" />;
}

function Intro() {
  return (
    <div>
      <h1>Daniel Mevs</h1>
      <p>
        Software Test Engineer and aspiring Full Stack Developer. When not
        coding or or ensuring the quality of software products, I like to play
        board games, to cook (and eat), or to just enjoy the Florida sun at the
        beach.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          color={skill.color}
          skillName={skill.skill}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Skill({ color, skillName, level }) {
  // let emoji;
  // if (level === "advanced") {
  //   emoji = "💪";
  // } else if (level === "intermediate") {
  //   emoji = "👍";
  // } else {
  //   emoji = "👶";
  // }
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skillName}</span>
      {/* <span>{emoji}</span> */}
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
