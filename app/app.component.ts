import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userModel = new User("","","",0,"","","")
  topics = ['Angular','Reactjs', 'Vue']
  userFrom: any;
  listOfData: User[] =[]
  formData: any = [];
  
 constructor(){

 }
  storeUserdata(){
    const userdetails = this.userModel;
    this.formData.push(JSON.stringify(this.userModel));
    this.formData.forEach((object: any) => {
      let index = this.formData.indexOf(object);
      console.log("BEFORE INDEX ",index);
      object = JSON.parse(object)
      console.log("BEFORE INDEX ",index);
      object.id = index + 1;
      console.log("Index ",object.id);
      console.log("Before Object ",object);
      object = JSON.stringify(object);
      console.log("After Object ",object);
    });
    localStorage.removeItem('userdetails');
    localStorage.setItem("userdetails",this.formData);
    console.log("Get Ite, ",localStorage.getItem('userdetails'));
    const retrievedObject:any = localStorage.getItem('userdetails');
    this.formData.forEach((element: any) => {
      let value = JSON.parse(element);
      console.log("SIngle ",value);
      this.listOfData.push(value)  
    });;
    console.log(this.listOfData)
  }
}
