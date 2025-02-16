export class Project {
  id: number;
  title: string;
  description: string;
  url: string;
  image: string;

  constructor(
    id: number,
    title: string,
    description: string,
    url: string,
    image: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
    this.image = image;
  }
}
