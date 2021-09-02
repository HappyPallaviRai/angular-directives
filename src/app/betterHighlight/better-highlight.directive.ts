import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = "red";
  @Input("appBetterHighlight") highlightColor = "blue";
  constructor(private elemRef: ElementRef, private renderes: Renderer2) {}
  ngOnInit() {
    this.backgroudcolor = this.defaultColor;
  }

  @HostBinding("style.backgroundColor") backgroudcolor: string;
  @HostListener("mouseenter") mouseover(eventdata: Event) {
    // this.renderes.setStyle(
    //   this.elemRef.nativeElement,
    //   "background-color",
    //   "yellow"
    // );
    this.backgroudcolor = this.highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventdata: Event) {
    // this.renderes.setStyle(
    //   this.elemRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroudcolor = this.defaultColor;
  }
}
