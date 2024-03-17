import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapidAPIAssiComponent } from './rapid-apiassi.component';

describe('RapidAPIAssiComponent', () => {
  let component: RapidAPIAssiComponent;
  let fixture: ComponentFixture<RapidAPIAssiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapidAPIAssiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapidAPIAssiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
