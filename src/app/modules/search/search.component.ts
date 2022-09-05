import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { IMoviePreference} from "src/app/shared/interfaces/IMoviePreference"


// The @Component decorator below defines the exported "SearchComponent" typescript class as a "Component" class
// and defines the template(view)/class relationship.
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  // The below two value are used to manage the form input behaviour and data.
  searchMovieForm: FormGroup;
  searchMovieFormSubmitted: boolean = false;

  // The below two value are used to manage the search result behaviour and data.
  displayResults: boolean = false;
  movies: any; 

  constructor(
    private formBuilder: FormBuilder,
    // The dependency injected below is used by this component to access movie data from an external API.
    private movieService: MovieService,
  ) {
    this.createSearchMovieForm();
  }

  ngOnInit(): void {
  }

  // The below function creates the search form and expresses which form fields are required.
  private createSearchMovieForm() {
    this.searchMovieForm = this.formBuilder.group({
      title: ['', Validators.required],
      type: [null],
      year: [null],
      plot_format: [null]
    });
  }

  // The below function determines whether or not the form data is valid and calls the "searchMovie" function
  // if the search input is valid.
  submitMovie() {
    this.searchMovieFormSubmitted = true;
    if (this.searchMovieForm.valid) {
      const data = this.searchMovieForm.value; 
      this.searchMovie(data);
      this.searchMovieFormSubmitted = false;
    }
  }

  // The catchError operator is used below to return an empty array if an error has occured;
  // the observable will not error out anymore.
  // If a result is returned the "movies" array value is set.
  searchMovie(){
    this.movies = null;
    this.displayResults = true;
    this.movieService.searchMovie(this.data).pipe(
      catchError(() => of([]))
      ).subscribe((movies) => {
        this.movies = movies;
    });
  };

}
