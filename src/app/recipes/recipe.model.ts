export class Recipe { // this class is created to show what each recipe will contain
  public name: string;
  public description: string;
  public imagePath: string;  

  constructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
