import { Component, OnInit } from '@angular/core';
import { environment } from "../../../environments/environment";
import { CalcService } from "../../services/calc.service";
import { Calc } from "../../entites/calc.entity";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  number?: number

  endPoint = environment.calcApiUrl;

  result?: Calc;
  aviso = false;

  constructor(private calcService: CalcService) { }

  ngOnInit(): void {
  }

  calcNumber() {


    return  this.number ? this.calcService.getCalc( this.number)
      .subscribe({
        next: result => {
          this.aviso = false;
          return  this.result = new Calc(result)
        },
        error: (err) => console.log(err)
      }) : this.aviso = true;
  }
}
