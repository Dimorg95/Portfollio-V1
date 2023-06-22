import { Component, OnInit } from '@angular/core';
import { ProjetPerso } from 'src/app/models/projet-perso.model';
import { ProjetPersoService } from 'src/app/services/projet-perso.service';
import { customOptions } from 'src/app/option_owlCarousel/custom-option';
@Component({
  selector: 'app-projets-list',
  templateUrl: './projets-list.component.html',
  styleUrls: ['./projets-list.component.scss'],
})
export class ProjetsListComponent implements OnInit {
  projetPersoList!: ProjetPerso[];

  customOptions = customOptions;

  constructor(private projetPersoService: ProjetPersoService) {}

  ngOnInit(): void {
    this.projetPersoList = this.projetPersoService.projetPerso;
  }
}
