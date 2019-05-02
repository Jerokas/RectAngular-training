export class Rectangle {
    id: number;
    name: string;
    length: number;
    width: number;
    unit: Unit;
    area: number;
}

export enum Unit {
    meter,
    feet
}

export const unitToArray = () => {

    return Object.keys(Unit).filter(unit => {
   
    return Number.isNaN(parseInt(unit, 10));
   
    })
   
}