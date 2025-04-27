import { Component } from '@angular/core';

@Component({
   selector: 'app-cal',
   templateUrl: './cal.component.html',
   styleUrls: ['./cal.component.css']
})
export class CalComponent {

   //variable
   displayValue: string = '0';
   operation: any = '';
   currentValue: any = '';
   operationSet: boolean = false;

   // numeric numbers
   getNumber(number: string) {
      console.log('number', number);
      if (this.displayValue == "0") {
         this.displayValue = number; // inital '0' change value
      } else {
         this.displayValue += number; // add value one by one
      }

   }


   // // Operation add,subtrat,divied,multiplication
   // getOperation(simble: string) {
   //    console.log('simble', simble);
   //    switch (simble) {
   //       case '+':
   //          this.displayValue = this.displayValue += '+';
   //          break;
   //       case '-':
   //          this.displayValue = this.displayValue += '-';
   //          break;
   //       case '*':
   //          this.displayValue = this.displayValue += '*';
   //          break;
   //       case '/':
   //          this.displayValue = this.displayValue += '/';
   //          break;
   //    }


   // }


   getOperation(simble: string) {
      console.log('simble', simble);
      if (simble === '=') {
        try {
          this.displayValue = eval(this.displayValue);
        } catch (error) {
          this.displayValue = 'Error';
        }
      } else {
        this.displayValue += simble;
      }
    }
    

 

   //clear
   clear() {
      this.displayValue = "0";
   }


}
