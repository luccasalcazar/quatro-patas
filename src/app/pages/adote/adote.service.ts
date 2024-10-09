import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AdoteService {

  objAnimais = [
    {
      nome: 'Luigy Gonzales',
      raca: 'Buldogue, macho',
      src: '../../../assets/images/LuigyGonzales.svg'
    },
    {
      nome: 'Shakira Lopez',
      raca: 'Amarelo, fêmea',
      src: '../../../assets/images/ShakiraLopez.svg'
    },
    {
      nome: 'Nico Di Angelo',
      raca: 'Frajola, macho',
      src: '../../../assets/images/NicoDiAngelo.svg'
    },
    {
      nome: 'Bartolomeu II',
      raca: 'Vira-lata, macho',
      src: '../../../assets/images/BartolomeuII.svg'
    },
    {
      nome: 'Marieta Soares',
      raca: 'Golden, fêmea',
      src: '../../../assets/images/MarietaSoares.svg'
    },
    {
      nome: 'Pity Caramelo',
      raca: 'Vira-lata, fêmea',
      src: '../../../assets/images/PityCaramelo.svg'
    },
    {
      nome: 'Perseu Baptist',
      raca: 'Rajado, macho',
      src: '../../../assets/images/PerseuBaptist.svg'
    },
    {
      nome: 'Theodora Blanc',
      raca: 'Albino, fêmea',
      src: '../../../assets/images/TheodoraBlanc.svg'
    },
    {
      nome: 'Rosinha Mali',
      raca: 'Escaminha, fêmea',
      src: '../../../assets/images/RosinhaMali.svg'
    }
  ]

  getAnimais() {
    return this.objAnimais;
  }

}