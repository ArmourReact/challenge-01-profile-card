import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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

const Avatar = () => {
  return (
    <img
      className="avatar"
      alt="avatar"
      src="https://en.gravatar.com/userimage/236515471/ef61623aeb6b1f058546391c85d4f314.jpeg"
    />
  );
};

const Intro = () => {
  return (
    <div>
      <h1>Jake Armour</h1>
      <p>Area for Bio</p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill name="HTML" emoji="🥢" color="red" />
      <Skill name="React" emoji="🥢" color="purple" />
      <Skill name="JavaScript" emoji="🥢" color="green" />
      <Skill name="Lovin" emoji="🥢" color="blue" />
    </div>
  );
};

const Skill = (props) => {
  const { name, emoji, color } = props;
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>{name}</p>
      <span>{emoji}</span>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
