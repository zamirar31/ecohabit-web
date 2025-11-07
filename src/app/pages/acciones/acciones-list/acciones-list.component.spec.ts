import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { AccionesListComponent } from './acciones-list.component';
import { ActionsService } from '../../../ services/actions.service';
import { Action } from '../../../models/action.model';

class ActionsServiceMock {
  list() { return of<Action[]>([]); }
  remove = async () => { };
}

describe('AccionesListComponent', () => {
  let component: AccionesListComponent;
  let fixture: ComponentFixture<AccionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccionesListComponent],
      providers: [
        provideRouter([]),
        { provide: ActionsService, useClass: ActionsServiceMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AccionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
