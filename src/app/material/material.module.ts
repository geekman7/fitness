import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatListItem, MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const MaterialComponents = [
  MatButtonModule,
  MatListModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  FlexLayoutModule,
  MatDatepickerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatCardModule,
  MatSidenavModule,
  MatTabsModule,
  MatSelectModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSnackBarModule

]

@NgModule({

  imports: [MaterialComponents],
  exports: [MaterialComponents],
  
})
export class MaterialModule { }
