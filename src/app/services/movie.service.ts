import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IMoviePreference } from '../shared/interfaces/IMoviePreference';

@Injectable({providedIn: 'root'})
export class MovieService {

  constructor(
    private http: HttpClient,
  ) {}

  searchMovie(data: IMoviePreference): Observable<any> {
    const title = data.title;
    const type = 'movie';
    const year = data.year;
    const plot_format = 'short';
    //TODO: place url credentials somewhere else in shared ...? dont place const for all, use data.
    const apiURL = `http://www.omdbapi.com/?apikey=f590ae4d&t=${title}&y=${year}&type=${type}&plot=${plot_format}`;
    return this.http
      .get(apiURL)
      .pipe(//TODO abstrat below for more general case
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
