import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() nome: string = '';
  @Input() raca: string = '';
  @Input() src: string = '';
  @Output() adocao = new EventEmitter();
  @Output() favoritar = new EventEmitter();

  constructor() {

  }

  fazerAdocao() {
    this.adocao.emit(true);
  }

  validarSeFoiFavoritado(event: boolean) {
    if (event) {
      this.favoritar.emit(true);
    } else {
      this.favoritar.emit(false);
    }
  }
}