import { InsertDirective } from './insert.directive';
import { Renderer, ElementRef } from '@angular/core';

describe('InsertDirective', () => {
  xit('should create an instance', () => {
    const directive = new InsertDirective(Renderer, ElementRef);
    expect(directive).toBeTruthy();
  });
});
