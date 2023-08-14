import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import {Color} from "@shared/types/color.type";

@Directive({
  selector: '[triviaResultHighlight]'
})
export class ResultHighlightDirective implements OnInit {

  @Input() triviaResultHighlight: number = 0;

  private color: Color = 'danger';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setColor();
    this.renderer.addClass(this.elementRef.nativeElement, `bg-${this.color}`);
  }

  // select color based on score taken as input
  private setColor(): void {
    if (this.triviaResultHighlight <= 1) {
      this.color = 'danger';
    } else if (this.triviaResultHighlight >= 4) {
      this.color = 'success';
    } else {
      this.color = 'warning';
    }
  }
}
