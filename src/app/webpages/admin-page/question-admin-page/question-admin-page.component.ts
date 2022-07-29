import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/spring/service/admin.service';

@Component({
  selector: 'app-question-admin-page',
  templateUrl: './question-admin-page.component.html',
  styleUrls: ['./question-admin-page.component.scss']
})
export class QuestionAdminPageComponent implements OnInit {


  formFields = [
    {
      name: 'Currently Employed',
      formControl: 'currentlyEmployed',
      type: 'text'
    },
    {
      name: 'Employer Name',
      formControl: 'employerName',
      type: 'text'
    },
    {
      name: 'Occupation',
      formControl: 'occupation',
      type: 'text'
    },
    {
      name: 'Contact Name for Verification',
      formControl: 'contactName',
      type: 'text'
    },
    {
      name: 'Phone Number',
      formControl: 'phoneNumber',
      type: 'text'
    },
    {
      name: 'Monthly Gross Income',
      formControl: 'monthlyGross',
      type: 'text'
    },
    {
      name: 'Employment Start',
      formControl: 'startDate',
      type: 'text'
    },
    {
      name: 'Employment End',
      formControl: 'endDate',
      type: 'text'
    }
  ];

  public tablesForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,

    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getQuestion();

    this.tablesForm = this.fb.group({
      employees: this.fb.array([this.addEmployerDetails()])
    });
  }


  getQuestion() {
    const token = sessionStorage.getItem('token');
    this.adminService.getQuestions(token)
      .subscribe(data => {
        console.log(data)

      })
  }

  addEmployerDetails() {
    const employeeDetailsFormGroup = this.fb.group({});
    this.formFields.forEach(field => {
      employeeDetailsFormGroup.addControl(field.formControl, this.fb.control([], Validators.required));
    });
    return employeeDetailsFormGroup;
  }

  addEmployerToFormArray() {
    this.employeeRows.push(this.addEmployerDetails());
  }

  get employeeRows() {
    return (<FormArray>this.tablesForm.get('employees'));
  }


}
