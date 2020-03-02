import {MatStepperModule} from '@angular/material/stepper';
import {MatCardModule} from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {CdkStepperModule} from '@angular/cdk/stepper';


import {NgModule} from '@angular/core'
import { MatFormFieldModule,MatInputModule  } from '@angular/material';
@NgModule({
    imports: [
        MatStepperModule,
        MatCardModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        CdkStepperModule


    ],
    exports:[    
        MatStepperModule,
        MatCardModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        CdkStepperModule
    ]


})
export class MaterialAnglur { }