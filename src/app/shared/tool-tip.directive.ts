import {
  Directive,
  ElementRef,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]',
  standalone: true,
})
export class ToolTipDirective implements AfterViewInit, OnChanges {
  @Input('appToolTip') tooltipContent: string | undefined;

  public tippyInstance: any;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.tippyInstance = tippy(this.elRef.nativeElement, {
      content: this.tooltipContent,
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tooltipContent']) {
      this.updateToolTipContent();
    }
  }

  updateToolTipContent() {
    if (this.tippyInstance) {
      this.tippyInstance.setContent(this.tooltipContent);
    }
  }
}
