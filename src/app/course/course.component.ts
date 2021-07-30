import { Component } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent  {
firstName : any;
   onKeyUp(firstName : any){
   this.firstName=firstName;
   console.log(this.firstName);
   }

}
