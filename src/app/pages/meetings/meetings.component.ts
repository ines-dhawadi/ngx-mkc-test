import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Meetings } from 'src/app/dto/meeting';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {
 
  constructor( ) { }

  ngOnInit(): void {
    
  }
 
}
