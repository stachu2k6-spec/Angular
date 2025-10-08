import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Sign} from "node:crypto";

export type Signature = 'C' | '/' | '*' | '-' | '+' | '=' | '%' | '.' | '+/-' | 'sqrtx' | 'x^2' | '1/x' | 'MC' | 'MR' | 'M+' | 'M-' | 'Mv' | 'MS' | 'CE' | 'backspace';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculator');
    result: String = '0';

    clickCalculate(value: Signature) {
        console.log("buttonClick", value);
    }

    clickNumber(value: number) {
        console.log("buttonClick", value);
        if(this.result == '0'){
            this.result = value + '';
        } else {
            this.result = this.result + '' + value;
        }
    }


}
