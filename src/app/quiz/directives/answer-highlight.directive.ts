import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[triviaAnswerHighlight]'
})
export class AnswerHighlightDirective {
    @Input('triviaAnswerHighlight') set triviaAnswerHighlight(value: boolean) { // this value changes at runtime
        if (value) {
            this.addHighlight();
        } else {
            this.removeHighlight();
        }
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    private addHighlight(): void {
        this.renderer.addClass(this.elementRef.nativeElement, 'btn-success');
        this.renderer.removeClass(this.elementRef.nativeElement, 'btn-outline-success');
    }

    private removeHighlight(): void {
        this.renderer.removeClass(this.elementRef.nativeElement, 'btn-success');
        this.renderer.addClass(this.elementRef.nativeElement, 'btn-outline-success');
    }
}
