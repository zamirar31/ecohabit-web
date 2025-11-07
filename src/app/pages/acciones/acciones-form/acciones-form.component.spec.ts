import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, ActivatedRoute, convertToParamMap } from '@angular/router';
import { AccionesFormComponent } from './acciones-form.component';
import { ActionsService } from '../../../ services/actions.service';

// Mock simple del servicio para no requerir Firestore en tests
class ActionsServiceMock {
  create = async () => { };
  update = async () => { };
  getById = () => ({ subscribe: () => { } } as any);
}

describe('AccionesFormComponent', () => {
  let component: AccionesFormComponent;
  let fixture: ComponentFixture<AccionesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccionesFormComponent],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({}) } } },
        { provide: ActionsService, useClass: ActionsServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AccionesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

