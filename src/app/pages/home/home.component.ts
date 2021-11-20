import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import { Piloting } from 'src/app/dto/piloting';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isOn = false;
  addOption = false;
 // NavLink DTO (Data Transfer Object / Model)
 strategies!:Piloting[]
 pilotings!: Piloting[]
 qualites!:Piloting[]
 
 constructor(protected router: Router, protected apiService: ApiService<Piloting>) { }

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

 navigTo(path:string){
this.router.navigateByUrl(path)
 }

}
