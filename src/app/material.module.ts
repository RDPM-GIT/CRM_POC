import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import {
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatSelectModule, MatTableModule,
    MatToolbarModule, MatMenuModule, MatProgressSpinnerModule
} from '@angular/material';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    exports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
})
export class AngularMaterialModule { }
