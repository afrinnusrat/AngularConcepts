import {Component, Injector} from '@angular/core';

@Component({
  selector: 'hello-world',
  template: `
    <div>Hello World {{name}}</div>
    <button (click)="removeComponent()" > Remove Component </button>
  `,
})
export class HelloWorldComponent {
  name = "";
  ref: any;

  constructor(private injector: Injector) {
    this.name = this.injector.get('name');
  }

  removeComponent(){
    this.ref.destroy();
  }
}
