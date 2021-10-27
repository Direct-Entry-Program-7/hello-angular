import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  stock = 6;
  @Output()
  updateCart = new EventEmitter<number>();
  @Input()
  inCart = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  addToCart(): void {
    if ((this.stock - this.inCart) === 0) return;

    this.stock--;
    this.updateCart.emit(1);
  }
}
