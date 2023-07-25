import { Component, OnInit } from '@angular/core';
import { ImgArray } from 'src/app/models/img-array.model';
import { customOptionTech } from 'src/app/option_owlCarousel/custom-option';
import { TechnoServiceService } from 'src/app/services/techno-service.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent {
  constructor(private techImage: TechnoServiceService) {}

  customOptions = customOptionTech;

  imgArray!: ImgArray[];

  ngOnInit() {
    this.imgArray = this.techImage.imgArray;
  }
}
