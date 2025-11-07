import { Category } from "./ICategory";
import { IStack } from "./IStack";
export class Project {
  id: number;
  title: string;
  displayTitle: string;
  description: string;
  url: string;
  image: string;
  stacks: IStack[];
  category: Category;
  beforeImage?: string;

  constructor(
    id: number,
    title: string,
    displayTitle: string,
    description: string,
    url: string,
    image: string,
    stacks: IStack[] = [],
    category: Category,
    beforeImage?: string
  ) {
    this.id = id;
    this.title = title;
    this.displayTitle = displayTitle;
    this.description = description;
    this.url = url;
    this.image = image;
    this.stacks = stacks;
    this.category = category;
    this.beforeImage = beforeImage;
  }
}
