import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() currentStarRating: number;
  @Input() reviewScore: number;

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

}
