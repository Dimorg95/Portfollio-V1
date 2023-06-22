import { Injectable } from '@angular/core';
import { ProjetPerso } from '../models/projet-perso.model';

@Injectable({
  providedIn: 'root',
})
export class ProjetPersoService {
  projetPerso: ProjetPerso[] = [
    {
      title: 'Reservia',
      description: `Réalisation d'un site web en HTML/CSS`,
      formaOrPerso: true,
      imageUrl: 'https://www.zupimages.net/up/23/23/5j5i.png',
      urlProjet: 'https://dimorg95.github.io/PerisIngles_2_06082021/',
      id: '1',
    },
    {
      title: 'OhMyFood',
      description: `Réalisation d'un site web en HTML/CSS avec des animations`,
      formaOrPerso: true,
      imageUrl: 'https://www.zupimages.net/up/23/23/vrhk.png',
      urlProjet: 'https://dimorg95.github.io/PerisIngles_3_27112021/',
      id: '2',
    },
    {
      title: 'Chouette Agence',
      description: `Remise au norme SEO, accéssibilité et les performance d'un site web`,
      formaOrPerso: true,
      imageUrl: 'https://www.zupimages.net/up/23/23/zyi5.png',
      urlProjet: 'https://dimorg95.github.io/P4_Modification_code/',
      id: '3',
    },
    {
      title: 'Kanap',
      description: `Réalisation de la partie JavaScript d'un site E-commerce`,
      formaOrPerso: true,
      imageUrl: 'https://www.zupimages.net/up/23/23/7j1b.png',
      urlProjet: 'https://github.com/Dimorg95/Projet-5-Kanap',
      id: '4',
    },
    {
      title: 'Piiquante',
      description: `Réalisation d'un backend (API) avec NodeJS, ExpressJS et MongoDB`,
      formaOrPerso: true,
      imageUrl: 'https://www.zupimages.net/up/23/23/0ga2.png',
      urlProjet: 'https://github.com/Dimorg95/Piiquante/tree/main/backend',
      id: '5',
    },
    {
      title: 'Groupomania',
      description: `Réalisation d'un Réseaux social du back au front avec NodeJS et Angular`,
      formaOrPerso: true,
      imageUrl: 'https://www.zupimages.net/up/23/23/tm43.png',
      urlProjet: 'https://github.com/Dimorg95/Groupomania',
      id: '6',
    },
    {
      title: 'Recherche Papers',
      description: `Application de recherche d'entreprise avec l'API Pappers et Angular`,
      formaOrPerso: false,
      imageUrl: 'https://www.zupimages.net/up/23/23/0p5j.png',
      urlProjet: 'https://github.com/Dimorg95/Excercice-test-V2',
      id: '7',
    },
    {
      title: 'Front Technique',
      description: `Plusieurs projets réunis en un seule avec différent visuel et technique`,
      formaOrPerso: false,
      imageUrl: 'https://www.zupimages.net/up/23/23/a81d.png',
      urlProjet: 'https://dimorg95.github.io/Front-end-technique/',
      id: '8',
    },
  ];

  constructor() {}
}
