import {Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({
    name: 'htmlDecode'
})
export class HtmlDecodePipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {
    }

    // decode response string from server
    transform(value: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }

}
