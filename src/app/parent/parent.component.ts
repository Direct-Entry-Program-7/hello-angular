import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  inCart = 2;

  constructor() { }

  ngOnInit(): void {
  }

  changeCart(emitValue: number) {
    this.inCart += emitValue;
  }

  removeFromCart() {
    if (this.inCart === 0) return;
    this.inCart--;
  }
}
