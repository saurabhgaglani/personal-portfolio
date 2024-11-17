import rpg from './../assets/portfolioImages/rpg.png'
import jeapordy from './../assets/portfolioImages/jeapordy.png'

const ProjectsData = [
  {
    id: "grpc",
    img: jeapordy,
    name: "GRPC 2 player Jeapordy",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    source: "https://github.com/saurabhgaglani/GrpcSpellBee",
    description:
      "A 2 Player Jeapordy game that uses GRPC for microservice communications.",
  },
  {
    id: "rpg",
    img: rpg,
    name: "Unity 2D RPG",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    source: "https://github.com/saurabhgaglani/2D-RPG",
    description:
      "Prototype of a pokemon like 2D RPG I built using the unity game engine. Enemy aims and shoots cannons at player which the player can dodge and kill the enemy with a sword.",
  },



];

const InprogressProjectsData = [
];

export default { ProjectsData, InprogressProjectsData }