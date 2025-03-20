import { Project } from "../models/Project";

export const projects: Project[] = [
  new Project(
    1,
    "TinySaves",
    "projects.card.TinySaves.description",
    "https://tinysaves.vercel.app/",
    "/tinySaves.png",
    [
      { name: "ci ci-nextjs-light" },
      { name: "ci ci-typescript" },
      { name: "ci ci-sass" },
      { name: "ci ci-json" },
      { name: "ci ci-npm" },
      { name: "ci ci-nodejs" },
      { name: "ci ci-prisma" },
      { name: "ci ci-mongodb2" },
      { name: "ci ci-jest" },
    ]
  ),
  new Project(
    2,
    "Tic-Tac-Toe",
    "projects.card.TicTacToe.description",
    "https://niccar95.github.io/vue-tic-tac-toe-Niccar95/",
    "/tic-tac-toe.png",
    [
      { name: "ci ci-vuejs" },
      { name: "ci ci-typescript" },
      { name: "ci ci-sass" },
      { name: "ci ci-npm" },
      { name: "ci ci-vitejs" },
    ]
  ),
  new Project(
    3,
    "PokeSearch",
    "projects.card.PokeSearch.description",
    "https://niccar95.github.io/PokeSearch/",
    "/pokeSearch.png",
    [
      { name: "ci ci-javascript" },
      { name: "ci ci-sass" },
      { name: "ci ci-json" },
      { name: "ci ci-npm" },
      { name: "ci ci-vitejs" },
    ]
  ),
  new Project(
    4,
    "To-Do",
    "projects.card.To-Do.description",
    "https://niccar95.github.io/To-Do-List-2.0/",
    "/to-do.png",
    [
      { name: "ci ci-javascript" },
      { name: "ci ci-sass" },
      { name: "ci ci-npm" },
      { name: "ci ci-vitejs" },
    ]
  ),
  new Project(
    5,
    "TheZoo",
    "projects.card.TheZoo.description",
    "https://react-the-zoo-niccar95.vercel.app/",
    "/theZoo.png",
    [
      { name: "ci ci-react" },
      { name: "ci ci-typescript" },
      { name: "ci ci-sass" },
      { name: "ci ci-vitejs" },
      { name: "ci ci-json" },
      { name: "ci ci-npm" },
    ]
  ),
  new Project(
    6,
    "EmployeeSite",
    "projects.card.EmployeeSite.description",
    "https://niccar95.github.io/EmployeeSite/",
    "/employeeSite.png",
    [
      { name: "ci ci-vuejs" },
      { name: "ci ci-typescript" },
      { name: "ci ci-sass" },
      { name: "ci ci-vitejs" },
      { name: "ci ci-json" },
      { name: "ci ci-npm" },
    ]
  ),
];
