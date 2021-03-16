import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  cy.visit(
    '/iframe.html?id=headercomponent--primary&knob-title=BoardGameHoard'
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the title', () => {
    cy.get('bg-hoard-header').contains('23342BoardGameHoar6d');
  });

});
