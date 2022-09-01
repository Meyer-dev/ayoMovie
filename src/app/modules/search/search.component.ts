import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { IMoviePreference} from "src/app/shared/interfaces/IMoviePreference"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchMovieForm: FormGroup;
  searchMovieFormSubmitted: boolean = false;
  displayResults: boolean = false;
  movies: any;

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
  ) {
    this.createSearchMovieForm();
  }

  ngOnInit(): void {
  }

  private createSearchMovieForm() {
    this.searchMovieForm = this.formBuilder.group({
      title: ['', Validators.required],
      type: [null],
      year: [null],
      plot_format: [null]
    });
  }

  submitMovie() {
    this.searchMovieFormSubmitted = true;
    if (this.searchMovieForm.valid) {
      const data: IMoviePreference = this.searchMovieForm.value; 
      this.searchMovie(data);
      this.searchMovieFormSubmitted = false;
    } else {
        // this.toastr.error(
        //   'Make sure that all mandatory fields are filled',
        //   'Validation error!'
        // );
        console.log("add valid search values")
        //TODO:add toaters!
    }
  }

  // The catchError operator is used below to return an empty array if an error has occured;
  // The observable will not error out anymore.
  searchMovie(data: IMoviePreference){
    this.movies = null;
    this.displayResults = true;
    this.movieService.searchMovie(data).pipe(
      catchError(() => of([]))
      ).subscribe((movies) => {
        this.movies = movies;
    });
  };

}
