import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// interface DataItem {
//   id: string;
//   name: string;
//   header: boolean;
//   disabled: boolean;
// }
@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
})
export class SimpleFormComponent implements OnInit {
  form: any;
  public items = [] as any;
  public dataBase = [] as any;
  public itemHeight = 48;
  public itemsMaxHeight = 240;
  title = 'List Of Members';
  constructor(private formBuilder: FormBuilder) {
    this.items = ['Customer', 'Vendor'];
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      // email: [null, [Validators.required, Validators.email]],
      role: [null, Validators.required],
      fullName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
    });
  }
  onSubmit(event: any) {
    console.log(event.value);
    this.dataBase.push(event.value);
    console.log(this.dataBase);
  }
}
