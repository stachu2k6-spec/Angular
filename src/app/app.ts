import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Sign} from "node:crypto";

export type Signature = 'C' | '/' | '*' | '-' | '+' | '=' | '%' | '.' | '+/-' |
                    'sqrtx' | 'x^2' | '1/x' | 'MC' | 'MR' | 'M+' | 'M-' | 'Mv' |
                'MS' | 'CE' | 'backspace';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculator');
    result: String = '0';
    countingResult: string = '';



    clickNumber(value: number) {
        console.log("buttonClick", value);
        if(this.result == '0') {
            this.result = value + '';
        }
        else {
            this.result = this.result + '' + value;
        }
    }

    clickCalculate(value: Signature) {
        switch(value) {
            case 'C':
              console.log('click clear');
                this.result = '0';
                break;
            case 'CE':
              console.log('click clear everything');
              this.result = '0';
              this.countingResult = '';
              break;
            case '/':
                console.log('click divide');
                this.countingResult = this.result + " /";
                this.result = '';
                break;
            case '*':
                console.log('click multiply');
                this.countingResult = this.result + " *";
                this.result = '';
                break;
            case '-':
                console.log('click subtract');
                this.countingResult = this.result + " -";
                this.result = '';
                break;
            case '+':
                console.log('click add');
                this.countingResult = this.result + " +";
                this.result = '';
                break;
            case  'x^2':
                console.log('click square');
                this.countingResult = this.result + " *" + this.result;
                this.result = '';
                break;
            case '.':
                console.log('click decimal');
                this.result = this.result + '.';
                break;
            case '%':
              console.log('click modulo');
              this.countingResult = this.result + " %";
              this.result = '';
              break;
            case '=':
                console.log('click equals');
                this.countingResult = this.countingResult + this.result;
                this.result = eval(this.countingResult) + '';
                this.countingResult = '';
                break;

            default:
                console.log('else');
        }


    }

}
