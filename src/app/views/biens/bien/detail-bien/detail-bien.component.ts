import { Component, OnInit, Input, ChangeDetectionStrategy, ViewChild, ElementRef, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailBienComponent implements OnInit {

  @Input() public detailBienForm: FormGroup;

  @ViewChild('search') public searchElementRef: ElementRef;

  constructor(private readonly fb: FormBuilder,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
  }

  ngOnInit() {
    console.log('Detail Bien init');

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });

      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          console.log(place);
          this.getAdresse(place);
        });
      });
    });
  }

  getAdresse(place: google.maps.places.PlaceResult) {

    place.address_components.forEach(item => {
      if (item.types.includes('locality')) {
        this.detailBienForm.get('adresseBien').get('ville').setValue(item.long_name);
      } else if (item.types.includes('postal_code')) {
        this.detailBienForm.get('adresseBien').get('codePostal').setValue(item.long_name);
      }
    });
  }

}
