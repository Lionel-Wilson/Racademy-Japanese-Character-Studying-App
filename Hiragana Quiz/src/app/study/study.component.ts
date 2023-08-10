import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/Services/data.service';



@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent {
constructor(private router:Router){

}

public startStudy(){
  this.router.navigate(['/Question']);
}
}