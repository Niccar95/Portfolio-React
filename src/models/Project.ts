import { StackList } from "./IStack";
export class Project {
  id: number;
  title: string;
  displayTitle: string;
  description: string;
  url: string;
  image: string;
  stacks: StackList[];

  constructor(
    id: number,
    title: string,
    displayTitle: string,
    description: string,
    url: string,
    image: string,
    stacks: StackList[] = []
  ) {
    this.id = id;
    this.title = title;
    this.displayTitle = displayTitle;
    this.description = description;
    this.url = url;
    this.image = image;
    this.stacks = stacks;
  }
}
