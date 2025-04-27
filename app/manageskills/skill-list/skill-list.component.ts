import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent {
  skillForm: FormGroup;
  selectedRowIndex: any;
  submitCondition: boolean = false;
  isSubmit : boolean = false;
  constructor(private fb: FormBuilder) {
    this.skillForm = this.fb.group({
      skill: ['', Validators.required],
      skillArray: this.fb.array([])
    })
  }


  get skillArray(): FormArray {
    return this.skillForm.get('skillArray') as FormArray;
  }





  //add new skill
  addNewSkill() {
    this.isSubmit = true ;
    if (this.skillForm.valid) {
      const skillValue = this.skillForm.get('skill')?.value?.trim();
      this.skillArray.push(new FormControl(skillValue));
      console.log('add', this.skillArray.value);
      console.log('add', this.skillArray);
      this.skillForm.get('skill')?.reset();
    } else {
      console.log('Invalid Form ');
    }

  }

  //submit
  submit() {
   
    console.log("submit", this.skillForm);
    const changedValue = this.skillForm.get('skill')?.value;
    this.skillArray.at(this.selectedRowIndex)?.setValue(changedValue);
    this.submitCondition = false;
    this.skillForm.get('skill')?.reset();
  }

  //selectRow
  selectRow(Number: number) {
    this.selectedRowIndex = Number
    console.log('number', Number);

  }

  //Remove
  Remove() {
    this.skillArray.removeAt(this.selectedRowIndex);
    console.log('array', this.skillArray.value);
  }

  //editValue
  editValue() {
    this.submitCondition = true;
    const skillValue = this.skillArray.at(this.selectedRowIndex)?.value;
    console.log('skillValue', skillValue);
    this.skillForm.patchValue({
      skill: skillValue
    })
  }

}
