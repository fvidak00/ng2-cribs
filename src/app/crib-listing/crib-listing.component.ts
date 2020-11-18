import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs!: Array<any>;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('data/cribs.json')
      .pipe(map(res=>res))
      .subscribe(data=>console.log(data));
  }

}
