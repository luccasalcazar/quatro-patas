import { Component, OnInit } from "@angular/core";
import { AdoteService } from "./adote.service";

@Component({
  selector: 'app-adote',
  templateUrl: './adote.component.html',
  styleUrls: ['./adote.component.scss']
})
export class AdoteComponent implements OnInit{

  animais: any;
  modalAdocao: boolean = false;
  modalFavorito: boolean = false;

  constructor(
    private adoteService: AdoteService
  ) {
    
  }

  ngOnInit(): void {
    this.animais = this.adoteService.getAnimais(); 
  }

  abrirModalAdocao() {
    this.modalAdocao = true;
  }

  abrirModalFavorito() {
    this.modalFavorito = true;
  }

  fecharModal() {
    this.modalAdocao = false;
    this.modalFavorito = false;
  }

}