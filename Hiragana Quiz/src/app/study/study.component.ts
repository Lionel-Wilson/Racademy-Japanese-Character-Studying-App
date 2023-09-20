import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/Services/data.service';



@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.css']
})
export class StudyComponent {
constructor(private router:Router,private DataService:DataService){

}

public startStudy(selection:string){
  if(selection=="Double Consonants"){
    console.log("Double consontantings")
    this.DataService.getCharactersforGrid(selection);
    this.router.navigate(['/Quiz']);
  }
  else{
    this.DataService.getCharactersforGrid(selection);
    this.router.navigate(['/Question']);

  }
}
}
