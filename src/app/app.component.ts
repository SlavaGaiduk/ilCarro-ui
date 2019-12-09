import { Component } from '@angular/core';
import { Options } from 'ng5-slider';
import {faSearch, faSlidersH, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles/il-slider.scss']
})
export class AppComponent {
  title = 'ilCarro';
  faSearch = faSearch;
  faSlidersH =faSlidersH;
  faMapMarkerAlt = faMapMarkerAlt;

// @Component({
//   selector: 'app-styled-slider',
//   templateUrl: './styled-slider.component.html',
//   styleUrls: ['./styled-slider.component.scss']
// })
// export class StyledSliderComponent {
  minValue: number = 10;
  maxValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100,
    step: 10,
    showTicks: true
  };
}
// }
