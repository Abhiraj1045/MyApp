export class User implements IUser{

  constructor(name:string,  id:number){
    this.id= id;
    this.name =name;
  }
  id: number;
  name: string;
}


export interface IUser{
  id:number;
  name:string;
}

export interface IRecipe{
  name: string; chef: string; incredients: string[];
}
