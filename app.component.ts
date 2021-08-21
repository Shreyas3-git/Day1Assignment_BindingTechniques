import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'Hello';
  imgUrl = "../assets/BridgeLabz.jpg";
  url = "https://www.bridgelabz.com";
  userName : string = "";
  nameError : string = "";

  OnInit() : void 
  {
    this.title = "Hello from BridgeLabz:";
    this.imgUrl = "../assets/BridgeLabz.jpg";
    this.url = "https://www.bridgelabz.com";
  }

  onClick($event: object)
  {
    console.log("save button is clicked:",$event);
    window.open(this.url,"_self");
  }

  onInput($event : object)
  {
    console.log("Change event occured..!", $event);
    const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$");
    if (nameRegex.test(this.userName))
    {
      this.nameError = "";
      return ;  
    }
    this.nameError = "Name is incorrect:";
  }
}
