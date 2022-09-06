import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { MovieService } from 'src/app/services/movie.service';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let debugElement: DebugElement;

  // Arrange
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientModule ],
      providers: [ MovieService ],
      declarations: [ SearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('title is entered and results displayed', () => {
    // Act
      //Set Form Inputs
      const titleInput = debugElement.query(
        By.css('[data-testid="title-input"]')
      );
      titleInput.nativeElement.value = 'Gladiator';
      // Dispatch synthetic input event
      titleInput.nativeElement.dispatchEvent(new Event('input'));

    // Assert:
          //Expect that the title value to have changed.
      expect(component.searchMovieForm.value.title)
       .withContext('after search initiated')
       .toEqual('Gladiator');

    //Act   
      // Find the button element
      const searchButton = debugElement.query(
        By.css('[data-testid="search-button"]')
      );
      // Fire a click event on the search button
      searchButton.triggerEventHandler('click', null);
      // Re-render the Component
      fixture.detectChanges();

    // Assert:
      //Expect that the results are displayed.
      expect(component.displayResults)
       .withContext('after search initiated')
       .toEqual(true);
  });
});
