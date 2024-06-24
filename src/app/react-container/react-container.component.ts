import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import MyReactComponent from '../react-app/MyReactComponent';

@Component({
  selector: 'app-react-wrapper',
  template: '<div id="react-root"></div>',
  standalone: true,
  imports: [],
})
export class ReactContainerComponent implements OnInit, OnDestroy {
  private root: ReactDOM.Root | null = null;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const rootElement = this.elementRef.nativeElement.querySelector('#react-root');
    if (rootElement) {
      this.root = ReactDOM.createRoot(rootElement);
      this.root.render(React.createElement(MyReactComponent));
    }
  }

  ngOnDestroy() {
    if (this.root) {
      this.root.unmount();
    }
  }
}
