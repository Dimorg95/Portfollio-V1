import { Component, OnInit, Input } from '@angular/core';
import { ProjetPerso } from 'src/app/models/projet-perso.model';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss'],
})
export class ProjetComponent implements OnInit {
  @Input() projet!: ProjetPerso;
  constructor() {}

  ngOnInit(): void {}
}
