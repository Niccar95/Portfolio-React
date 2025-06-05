import { Category } from "./ICategory";
import { StackList } from "./IStack";
export class Project {
  id: number;
  title: string;
  displayTitle: string;
  description: string;
  url: string;
  image: string;
  stacks: StackList[];
  category: Category;

  constructor(
    id: number,
    title: string,
    displayTitle: string,
    description: string,
    url: string,
    image: string,
    stacks: StackList[] = [],
    category: Category
  ) {
    this.id = id;
    this.title = title;
    this.displayTitle = displayTitle;
    this.description = description;
    this.url = url;
    this.image = image;
    this.stacks = stacks;
    this.category = category;
  }
}
