import { Component, OnInit } from '@angular/core';
import { PetModel } from '../models/pet.model';
import { PetsService } from '../pets.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
  petModel : PetModel;

  constructor(private petService: PetsService, private router: Router) { 
    this.petModel = new PetModel('','','','',0);
  }

  create() {
    this.petService.createPet(this.petModel)
    .subscribe(() => {
      this.router.navigate(['/home']);
    })
    
  }
  ngOnInit() {
  }

}
