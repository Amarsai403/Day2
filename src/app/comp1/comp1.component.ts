import { Component} from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component{

   email: string;
   password: string;
   result: string;
   user:string;
   pass:string;
   results:string;
   form:string;
   reset:string;
   somename:string;
   somes:boolean = false ;
   submit()
   {
      if(this.email == "amarsai@gmail.com" && this.password == "Test123")
      {
         this.result = "Successfully Login";
      }
      else{
      	this.result = "Failed to Login";
      }
   }
  onSubmitPersonForm(fm) {
		console.log('Form Validated:'+fm.form.valid);
	console.log('Form is being submitted');

	 }

   resets1(){
 	this.email = "";
 	this.password = "";

 }
}

