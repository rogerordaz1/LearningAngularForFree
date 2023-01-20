import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operandoA? :number;
  operandoB? :number ;
  resultado? :number;
  sumado : boolean = false;


  // onGetOperadorA(event : Event) {
  //   this.operandoA = Number((<HTMLInputElement>event.target).value);
  // }
  // onGetOperadorB(event : Event) {
  //   this.operandoB = Number((<HTMLInputElement>event.target).value);
  // }
  onSumarDosNumeros(): number{

  this.resultado = this.operandoA! + this.operandoB!;
    this.sumado = true;
    return this.resultado;

  }

  verificar(): boolean{
    if (this.operandoA == undefined || this.operandoB == undefined) {
      return true;
    }else{
      return false;
    }
  }



}
