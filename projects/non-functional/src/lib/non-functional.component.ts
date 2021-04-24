import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nf-non-functional',
  template: `
    <p>
      non-functional works!
    </p>
  `,
  styles: [
  ]
})
export class NonFunctionalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
