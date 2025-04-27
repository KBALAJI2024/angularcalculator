import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-list-page-indent-request',
  templateUrl: './list-page-indent-request.component.html',
  styleUrls: ['./list-page-indent-request.component.css']
})
export class ListPageIndentRequestComponent {
 
  indentNumber: string = "";
  fromDate : any = "";
  toDate : any = "";
  status : string = "";

   arrayValue : any[] = [] ;
  
  onSubmit(myform : NgForm){
       console.log("my form is ", myform.value);
       
  }


  input(){
    console.log('indentNumber',this.indentNumber);
    
  }

  clearButton(myform : NgForm){

      this.arrayValue.push(myform.value);
      console.log("array value", this.arrayValue);
      
      this.indentNumber = "";
      this.status = "" ;
      this.fromDate = moment().subtract( 1 , 'week' ).format('YYYY-MM-DD');
      this.toDate = moment().format('YYYY-MM-DD');
    
      console.log("fromdate", this.fromDate);

      
      
  }


  booleanCondition = false
  clickMe(){
 
   
  }

}


