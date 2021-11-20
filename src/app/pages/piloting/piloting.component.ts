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
  isOn = false;
  addOption = false;
 // NavLink DTO (Data Transfer Object / Model)
 strategies!:Piloting[]
 pilotings!: Piloting[]
 qualites!:Piloting[]
 constructor(protected apiService: ApiService<Piloting>) { }

 ngOnInit(): void {
   
   this.apiService.fetch("strategies").subscribe(res => {
    this.strategies = res as Piloting[];
    console.log("  strategies ", this.strategies)
  })

  this.apiService.fetch("pilotings").subscribe(res => {
    this.pilotings = res as Piloting[];
    console.log(" Pilotings ", this.pilotings)
  })


  this.apiService.fetch("qualites").subscribe(res => {
    this.qualites = res as Piloting[];
    console.log("  qualites ", this.qualites)
  })
 }

}
