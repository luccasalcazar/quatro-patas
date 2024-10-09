import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss']
})
export class LikeButtonComponent {

  @Input() ativado: boolean = false;
  @Output() favoritar = new EventEmitter();


  constructor() {

  }
  
  toggle() {
    this.ativado ? this.ativado = false : this.ativado = true;
    if (this.ativado) {
      this.favoritar.emit(true);
    }
  }
}