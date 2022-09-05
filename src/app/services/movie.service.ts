import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IMoviePreference } from '../shared/interfaces/IMoviePreference';

@Injectable({providedIn: 'root'})
export class MovieService {

  // The below value is the API key required to make requests to the OMDb API @ https://omdbapi.com/
  public apiKey: string = "f590ae4d";

  constructor(
    private http: HttpClient,
  ) {}

  searchMovie(data: IMoviePreference): Observable<any> {
    const title = data.title;
    // type value options are "movie" or "series". "movie" has been used here for the movie search app.
    const type = 'movie';
    // The year values can be any year. No year is passed from the search form as searching by year is not common practice.
    const year = data.year;
    // plot_format value options are "full" or "short". "full" has been implemented here to access the full plot description.
    const plot_format = 'full';
    const apiURL = `http://www.omdbapi.com/?apikey=${this.apiKey}&t=${title}&y=${year}&type=${type}&plot=${plot_format}`;
    // The below data mapping could be further abstracted for a more general case
    // (i.e more movies returned by API) if the returned data structure was known.
    // If the returned response value is "False" the number of movies is set to 0 (i.e no movies).
    return this.http
      .get(apiURL)
      .pipe( 
        map((body: any) => 
            {if (body.Response === "True"){
                const movies = []
                movies.push(body);
                return movies 
            } else{
                return [];
            }},
        ),
        catchError((error) => throwError(() => new Error(error)))
    );
  }

}
