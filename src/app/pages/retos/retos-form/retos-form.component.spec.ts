import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetosFormComponent } from './retos-form.component';

describe('RetosFormComponent', () => {
  let component: RetosFormComponent;
  let fixture: ComponentFixture<RetosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetosFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
