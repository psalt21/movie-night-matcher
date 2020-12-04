import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { TopContentComponent } from './top-content/top-content.component';
import { ContentSeparatorComponent } from './content-separator/content-separator.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { PreciseStarRatingComponent } from './precise-star-rating/precise-star-rating.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderContainerComponent,
    TopContentComponent,
    ContentSeparatorComponent,
    MovieCardComponent,
    PreciseStarRatingComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderContainerComponent,
    TopContentComponent,
    ContentSeparatorComponent,
    MovieCardComponent,
    PreciseStarRatingComponent
  ]
})
export class AppSharedModule { }
