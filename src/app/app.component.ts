import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularForm';

  defaultCountry = 'Bangladesh';

  firstname!:string;
  lastname!:string;
  email!: string;
  gen!:string;
  country!: string;

  defaultGender = 'Male';

  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]
  
  @ViewChild('myForm') form!: NgForm;

  onSubmit(){
    console.log(this.form);

    this.firstname = this.form.value.personDetails.firstname;
    this.lastname = this.form.value.personDetails.lastname;
    this.email = this.form.value.personDetails.email;
    this.gen = this.form.value.gender;
    this.country = this.form.value.country;

    this.form.reset();
  }

  setDefaultValues(){
    // this.form.value.personDetails.firstname = 'John';
    // this.form.value.personDetails.lastname = 'smith';
    // this.form.value.personDetails.email = 'abc@example.com';
    // this.form.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'John',
    //     lastname: 'Smith',
    //     email: 'abc@example.com'
    //   }
    // })

    this.form.form.patchValue({
      personDetails: {
         firstname: 'John',
         lastname: 'Smith',
         email: 'abc@example.com',
      }
    })
  }
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de', 'fr', 'hi']);
    translate.setDefaultLang('en');
    // translate.use('hi');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang!.match(/en|de/) ? browserLang !: 'en');
  }
}
