import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input()
  stock = 6;
  @Output()
  updateCart = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addToCart(): void {
    if (this.stock === 0) return;

    this.stock--;
    this.updateCart.emit(1);
  }
}
