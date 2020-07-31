import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { TopContentComponent } from './top-content/top-content.component';
import { ContentSeparatorComponent } from './content-separator/content-separator.component';
import { MovieCardComponent } from './movie-card/movie-card.component';



@NgModule({
  declarations: [
    HeaderContainerComponent,
    TopContentComponent,
    ContentSeparatorComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderContainerComponent,
    TopContentComponent,
    ContentSeparatorComponent,
    MovieCardComponent
  ]
})
export class AppSharedModule { }
