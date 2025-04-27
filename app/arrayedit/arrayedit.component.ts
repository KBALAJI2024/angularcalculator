import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArrayserviceService } from '../arrayservice.service';
@Component({
  selector: 'app-arrayedit',
  templateUrl: './arrayedit.component.html',
  styleUrls: ['./arrayedit.component.css']
})
export class ArrayeditComponent {
  constructor(private alert: ArrayserviceService) { }

  //variable
  id: any = "";
  Username: string = "";
  editClick: boolean = false;
  submitClick: boolean = false;

  //array
  submitArray: any[] = [];
  finalArrayValue: any[] = [];
  onSubmit(myform: NgForm) {
    this.submitClick = true;
    if (myform.valid) {
      console.log("Valid");
      console.log("my form is ", myform.value);
      this.submitArray.push(myform.value);
      console.log("submit array", this.submitArray);
      myform.reset();

    } else {
      // this.alert.showError("Form is Invalid");
    }
  }


  cancel() {
    this.id = "";
    this.Username = "";
  }


  edit(id: any, myform: NgForm) {
    this.editClick = true;
    const index = this.submitArray.findIndex(item => item.id == id);
    const data = this.submitArray[index]
    this.id = data.id;
    this.Username = data.Username;
  }

  update(id: any, myform: NgForm) {
    console.log("update id", id);
    const index = this.submitArray.findIndex(item => item.id == id);
    if (index !== -1) {
      this.submitArray[index].id = this.id;
      this.submitArray[index].Username = this.Username;
      console.log("update array value", this.submitArray);
      myform.reset();
    }
  }

  onlyNumber(event: any) {
    console.log("event", event);
    const number = String.fromCharCode(event.keyCode);
    
    
    
    if (/^[0-9]*$/.test(number)) {
      return true;
    }
    else {
      event.preventDefault();
      return false;
    }

  }

}
