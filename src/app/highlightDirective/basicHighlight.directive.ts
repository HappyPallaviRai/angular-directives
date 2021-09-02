import { OnInit, ElementRef, Directive } from "@angular/core";
@Directive({
  selector: "[basic-highlight]"
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "red";
  }
}
