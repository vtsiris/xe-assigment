import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";
import {LocationInterface} from "./services/location.response";
import {Subscription} from "rxjs";
import {debounceTime, tap} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  userLang: string;
  locations: LocationInterface[];

  private searchSubscription: Subscription;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.userLang = this.getBrowserLanguage(navigator.language.substr(0, 2));
  }


  search(location: string) {
    this.searchSubscription = this.api.searchLocation(location, this.userLang, this.getInnerWidth())
      .subscribe(data => {
        this.locations = data
      })
  }

  searchLocation(location: string) {
    window.location.href = ('https://www.google.com/search?q=' + location)
  }

  private getBrowserLanguage(browserLanguage: string): string {
    if (browserLanguage === 'en' || browserLanguage === 'el') {
      return browserLanguage
    }
    return 'en'
  }

  private getInnerWidth = (): number => (window.innerWidth <= 479 ? 10 : 20);

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe()
    }
  }


}
