import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
reactiveExo: FormGroup;
reactiveExoSuite: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveExo = this.fb.group({

      'identifiant': ['',Validators.required],
      'titre': ['',Validators.required]
      }),
      {
        validator: this.checkTrueValidator('titre','identifiant')
      }
      this.reactiveExoSuite = this.fb.group({
        'release': ['',Validators.compose([
          Validators.required,
          Validators.min(1900),
          Validators.max(2019)
        ])],

      })

    }


 checkTrueValidator (identifiant, titre): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Get first control value
    const value1 = control.get(identifiant).value;
    // Get second control value
    const value2 = control.get(titre).value;

    if (value1 && value2 === false ) {
      return { isRequired: "L'un des deux champs 'Identifiant' ou 'Titre' doit être renseigné" };
    } else {
      return null;
    }
  };

}
}

