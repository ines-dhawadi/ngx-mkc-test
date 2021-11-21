import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Meetings } from 'src/app/dto/meeting';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
  addOption = false;
  isOn = false;
  meetings!: Meetings[]
  reuinion:any;
  titleReunion: any;
  DateReunion: any;
  Type: any;
  date: any;
  constructor(protected apiService: ApiService<Meetings> ) { }

  ngOnInit(): void { 
    this.apiService.fetch("meetings").subscribe((res)=>
    this.meetings= res as  Meetings[])
    
  }
  Search(){
  if(this.reuinion == ""){
    this.ngOnInit();
  }else{
    this.meetings= this.meetings.filter(res =>{
      return res.reuinion.toLocaleLowerCase().match(this.reuinion.toLocaleLowerCase())
    })
  }
}
  

// SearchTitleReunion(){
//   if(this.titleReunion == ""){
//     this.ngOnInit();
//   }else{
//     this.meetings= this.meetings.filter(res =>{
//       return res.titleReunion.toLocaleLowerCase().match(this.titleReunion.toLocaleLowerCase())
//     })
//   }
// }
}
