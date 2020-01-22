import {
  Component,
  EventEmitter,
  Input, OnDestroy, OnInit,
  Output,
} from '@angular/core';
import {LocationInterface} from "../services/location.response";
import {FormControl} from "@angular/forms";
import {debounceTime, tap} from "rxjs/operators";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Input() locations: LocationInterface[];
  @Output() search = new EventEmitter();
  @Output() onSearchLocation = new EventEmitter();

  location = new FormControl();

  private selectedLocation: LocationInterface;
  private locationSubscription: Subscription;

  ngOnInit(): void {
    this.location.valueChanges.pipe(
      debounceTime(700),
      tap(data => {
        if (data.length >= 2) {
          this.search.emit(data);
        }
      })
    ).subscribe()
  }

  searchLocation() {
    this.onSearchLocation.emit(this.selectedLocation.name)
  }

  selectLocation(location: LocationInterface) {
    this.selectedLocation = location;
  }

  ngOnDestroy(): void {
    if (this.locationSubscription) {
      this.locationSubscription.unsubscribe()
    }
  }

}
