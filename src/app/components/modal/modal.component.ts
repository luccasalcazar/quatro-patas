import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() modalAdocao: boolean = false;
  @Input() modalFavorito: boolean = true;
  @Output() fecharModal = new EventEmitter();


  constructor() {

  }

  fechar() {
    this.modalAdocao = false;
    this.modalFavorito = false;
    this.fecharModal.emit(false);
  }
}