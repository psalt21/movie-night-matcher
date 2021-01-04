import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MovieReviewModalComponent } from '../movie-review-modal/movie-review-modal.component';
import { singleMovieData } from 'src/app/test-data-individual-movie';

@Component({
  selector: 'app-movie-info-modal',
  templateUrl: './movie-info-modal.component.html',
  styleUrls: ['./movie-info-modal.component.scss'],
})
export class MovieInfoModalComponent implements OnInit {

  constructor(public modalController: ModalController ) { }

  ngOnInit() {}

  openReviewModal() {
    this.presentReviewModal();
  }

  async presentReviewModal() {
    const modal = await this.modalController.create({
      component: MovieReviewModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        movieData: singleMovieData
      }
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }
}
