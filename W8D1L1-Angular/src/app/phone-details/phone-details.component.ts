import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {
  phone: Object;
  constructor(
    private myPhoneService: PhoneService,
    private myRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.myRoute.params.subscribe((params) => {
      this.getPhoneDetails(params['id']);
    });
  }
  getPhoneDetails(id) {
    this.myPhoneService.get(id).
      then((apiResult) => {
        // console.log(apiResult);
        this.phone = apiResult;
        console.log(this.phone);
    })
    .catch((err) => {
      console.log('Error ', err);
    })
  }
  deletePhone() {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    console.log('Phone Delete function still under development');
    this.myPhoneService.remove(this.phone['_id'])
      .then((apiResult) => {
        console.log(apiResult);
      })
      .catch((err) => {
        console.log('Delete Broke', err);
      });
  }
}
