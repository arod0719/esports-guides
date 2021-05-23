import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenseConverterComponent } from './sense-converter.component';

describe('SenseConverterComponent', () => {
  let component: SenseConverterComponent;
  let fixture: ComponentFixture<SenseConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenseConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenseConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
