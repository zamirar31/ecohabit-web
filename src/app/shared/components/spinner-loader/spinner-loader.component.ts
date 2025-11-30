import { Component } from '@angular/core';
import { spinnerAnimation } from '../../animations/animations';

@Component({
  selector: 'app-spinner-loader',
  standalone: true,
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.scss'],
  animations: [spinnerAnimation]
})
export class SpinnerLoaderComponent { }
