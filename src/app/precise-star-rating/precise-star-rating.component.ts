import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-precise-star-rating',
  templateUrl: './precise-star-rating.component.html',
  styleUrls: ['./precise-star-rating.component.scss'],
})
export class PreciseStarRatingComponent implements OnInit, AfterViewInit {
  @Input() currentStarRating: number;
  @Input() reviewScore: any;
  @ViewChild('stars') stars;

  constructor() {}

  starNameAttrValue(currentStar: number) {
    if (currentStar <= this.reviewScore) {
      return 'star';
    } else if (currentStar - 0.75 <= this.reviewScore && this.reviewScore < currentStar - 0.25) {
      return 'star-half';
    } else {
      return 'star-outline';
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const scorePercent = this.reviewScore / 5 * 100;
    this.stars.nativeElement.style.background = `linear-gradient(to right, #ffdb6f ${scorePercent}%, rgba(0,0,0,0) ${scorePercent}%)`;
  }

}
