import { Project } from "../models/Project";

export const projects: Project[] = [
  new Project(
    1,
    "TinySaves",
    "A savings goal application designed for users who are new to saving, encouraging small, regular contributions.",
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
    "This is a Tic-tac-toe game I made as a school project. It was also my first Vue project.",
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
    "A nerdy little game that tests your knowledge of classic Pokemon. My first ever project created entirely on vanilla Javascript.",
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
    "To-do list",
    "Just a simple To-do list I made with vanilla Javascript.",
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
    "The Zoo",
    "My last individual school project in React. A fictional zoo website with different animals that need to be fed.",
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
    "Employee site",
    "A code test made in Vue for an internship application. It is a fictional employee site for the company I applied for.",
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
