export class Recipe {
  private readonly _name: string;
  private readonly _description: string;
  private readonly _imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this._name = name;
    this._description = description;
    this._imagePath = imagePath;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get imagePath(): string {
    return this._imagePath;
  }
}
