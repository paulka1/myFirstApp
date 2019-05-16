import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})

export class SearchMovieComponent implements OnInit {
reactiveExo: FormGroup;
min=1900;
max=2019; 
tableType=['film', 'série', 'épisode'];
tableFiche=['complète', 'courte'];
validationBool= false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveExo = this.fb.group({
      identi: this.fb.group({
        identifiant: ['',Validators.required],
        titre: ['',Validators.required]
      },
      {
        validator: this.checkTrueValidator('titre','identifiant')
      }),

        release: ['',this.rangeDateValidator(this.min, this.max)],
        type: [''],
        fiche: ['']
      });
      this.initType();
      this.initFiche();
    }

initType() {
  this.reactiveExo.patchValue({
    type: this.tableType[1]
  });
  console.log(this.tableType[1])
}

initFiche() {
  this.reactiveExo.patchValue({
    fiche: this.tableFiche[1]
  })
};

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

  rangeDateValidator (min, max): ValidatorFn {
     return (control: AbstractControl): ValidationErrors | null => {
    console.log(max)
    console.log(control.value)
    if (control.value == ''){
      return 
    }
    else if(control.value > max || control.value < min ) {
      return { min: "La date doit être comprise entre " + min + " et " + max }
    } else {
      return null;
    }
    
  } 
}

onSubmit() {
  this.validationBool= true;

  console.log(JSON.stringify(this.reactiveExo.value))
}
}


