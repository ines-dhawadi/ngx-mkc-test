import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Piloting } from 'src/app/dto/piloting';
import { Strategies } from 'src/app/dto/strategies';

@Component({
  selector: 'app-piloting',
  templateUrl: './piloting.component.html',
  styleUrls: ['./piloting.component.scss']
})
export class PilotingComponent implements OnInit {

 constructor(protected apiService: ApiService<Piloting>) { }

 ngOnInit(): void {
   
  
 }

}
