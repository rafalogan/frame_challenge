import { ICalc } from "../types";

export class Calc implements ICalc {
  input: number;
  dividers: number[];
  primeDivisors: number[];
  vewDivaiders: string;
  vewPrimeDivisors: string;

  constructor(props: ICalc) {
    this.input = props.input;
    this.dividers = props.dividers;
    this.primeDivisors = props.primeDivisors;
    this.vewDivaiders = this.convertArrryToStringList(props.dividers);
    this.vewPrimeDivisors = this.convertArrryToStringList(props.primeDivisors);
  }

  private convertArrryToStringList(items: number[]): string {
    return  items.join(', ');
  }


}
