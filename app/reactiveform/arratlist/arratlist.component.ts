import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-arratlist',
  templateUrl: './arratlist.component.html',
  styleUrls: ['./arratlist.component.css']
})
export class ArratlistComponent {

  myform: FormGroup;
  detail: FormGroup;


  constructor(private fb: FormBuilder) {
    this.myform = this.fb.group({
      userName: ['', Validators.required],
      userAge: ['', Validators.required],
      userReferanceNo: ['', Validators.required],
      ButtleBrand: ['', Validators.required]
    });


    //detail
    this.detail = this.fb.group({
      arrayValue: new FormArray([])
    })



  }

  //detail get method()
  get arrayValue(): FormArray {
    return this.detail.get('arrayValue') as FormArray;
  }

  //submit
  onSubmit() {
    if (this.myform.valid) {
      console.log('valid', this.myform.value);
      this.arrayValue.push(this.fb.control(this.myform.value)); // add array
      console.log('array value', this.arrayValue.value);
      this.myform.reset(); // after submit reset all input
    } else {
      console.log('invalid', this.myform.value);
    }
  }

  //action
  action(Index : number){
     console.log('index',Index);
     this.arrayValue.removeAt(Index);
     console.log('remove array',this.arrayValue.value);
  }



}
