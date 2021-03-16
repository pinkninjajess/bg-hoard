import { Component, Inject } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { HttpClient } from '@angular/common/http';
import { Game } from '@bg-hoard/util-interface';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private http: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  title = 'Board Game Hoard 2';
  formatRating = formatRating;
  games = this.http.get<Game[]>(`${this.baseUrl}/api/games`);
}
