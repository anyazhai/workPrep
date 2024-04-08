// export class Ingredient{
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number){
//         this.name = name;
//         this.amount = amount;
//     }
// } 

//alternatively, the following shortcut can be used

export class Ingredient{
    constructor(public name: string, public amount: number){}
}