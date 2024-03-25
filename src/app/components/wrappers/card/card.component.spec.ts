import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Component } from '@angular/core';

@Component({
  template: `<app-card>Contenido de prueba</app-card>`,
  standalone: true,
  imports: [CardComponent]
})
class TestHostComponent{}

describe('CardComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent] // TestHostComponent ahora es un componente independiente que importa CardComponent
    }).compileComponents();

    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  it('should project content inside the card component', () => {
    const testHostElement = testHostFixture.nativeElement;
    expect(testHostElement.querySelector('app-card').textContent).toContain('Contenido de prueba');
  });

});
