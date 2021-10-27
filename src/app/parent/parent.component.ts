import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  inCart = 2;

  changeCart(emitValue: number) {
    this.inCart += emitValue;
  }

  removeFromCart() {
    if (this.inCart === 0) return;
    this.inCart--;
  }

  constructor() {
    console.log("Constructor");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges");
  }

  ngOnInit(): void {
    console.log("onInit");
  }

  ngDoCheck(): void {
    console.log("onDoCheck");
  }

  ngAfterContentInit(): void {
    console.log("After Content Init");
  }

  ngAfterContentChecked(): void {
    console.log("After Content Checked");
  }

  ngAfterViewInit(): void {
    console.log("After view Init");
  }

  ngAfterViewChecked(): void {
    console.log("After View Checked");
  }

  ngOnDestroy(): void {
    console.log("On Destroy")
  }
}
