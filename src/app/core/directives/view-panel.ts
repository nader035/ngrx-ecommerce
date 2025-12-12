import { Directive } from '@angular/core';

@Directive({
  selector: '[appViewPanel]',
  host: {
    class: 'p-6 border bg-white border-gray-200 rounded-xl',
  },
})
export class ViewPanel {
  constructor() {}
}
