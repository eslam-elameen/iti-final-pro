import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


import {NgModule} from '@angular/core'
import { MatFormFieldModule,MatInputModule  } from '@angular/material';
@NgModule({
    imports: [
        MatStepperModule,
        MatCardModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule 


    ],
    exports:[    
        MatStepperModule,
        MatCardModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule 
    ]


})
export class MaterialAnglur { }