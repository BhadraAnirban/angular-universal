import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-pmkj-details',
  templateUrl: './pmkj-details.component.html',
  styleUrls: ['./pmkj-details.component.scss']
})
export class PmkjDetailsComponent implements OnInit {
  name= '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.params['name'];
  }

}
