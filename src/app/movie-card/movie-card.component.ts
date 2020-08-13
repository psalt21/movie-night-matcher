import { Component, OnInit, Input } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { MovieInfoModalComponent } from '../modals/movie-info-modal/movie-info-modal.component';
import { singleMovieData } from '../test-data-individual-movie';
import { MovieReviewModalComponent } from '../modals/movie-review-modal/movie-review-modal.component';


@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() posterUrl: string;
  @Input() movieTitle: string;
  @Input() releaseYear: string;
  @Input() reviewScore: number;
  @Input() reviewCount: number;

  added = false;
  toastMessage = '';

  constructor(public toastController: ToastController, public modalController: ModalController) { }
  ngOnInit() {}

  addToWatchList(movieTitle: string) {
    if (this.added) {
      this.added = false;
    } else if (!this.added) {
      this.added = true;
    }
    this.presentToast(movieTitle);
  }

  async presentToast(movieTitle: string) {
    if (this.added) {
      this.toastMessage = ' has been added to your Watchlist!';
    } else {
      this.toastMessage = ' has been removed from your Watchlist.';
    }

    const toast = await this.toastController.create({
      message: movieTitle + this.toastMessage,
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  }

  openMovieInfo() {
    this.presentMovieInfoModal();
  }

  async presentMovieInfoModal() {
    const modal = await this.modalController.create({
      component: MovieInfoModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        movieData: singleMovieData,
        reviewCount: this.reviewCount
      }
    });
    return await modal.present();
  }

  openReviewModal() {
    this.presentReviewModal();
  }

  async presentReviewModal() {
    const modal = await this.modalController.create({
      component: MovieReviewModalComponent,
      cssClass: 'my-custom-class',
      componentProps: {}
    });
    return await modal.present();
  }
}
