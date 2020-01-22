import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LocationInterface} from "../services/location.response";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input() locations: LocationInterface[];
  @Output() search = new EventEmitter();
  @Output() onSearchLocation = new EventEmitter();

  private selectedLocation: LocationInterface
  private hasTimer = false;

  trackByFn(item, id) {
    return item
  }

  onKeyEnter(event) {
    setTimeout(() => {
      if (this.hasTimer) {
        return
      }
      this.hasTimer = true;
      if (event.target.selectionEnd >= 2) {
        this.search.emit(event.target.value)
      }
    }, 2000, this.hasTimer = false);
  }

  searchLocation() {
    this.onSearchLocation.emit(this.selectedLocation.name)
  }

  selectLocation(location: LocationInterface) {
    this.selectedLocation = location;
  }


}
