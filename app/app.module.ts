import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AgGridModule } from 'ag-grid-angular';
import { CorrigerDuplicationNidDatesnaissanceComponent } from './corriger-duplication-nid-datesnaissance/corriger-duplication-nid-datesnaissance.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomPaginationComponent } from './pagination/components/custom-pagination/custom-pagination.component';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CorrectionDatesnaissancesComponent } from './correction-datesnaissances/correction-datesnaissances.component';
import { CorrectionNationalitesComponent } from './correction-nationalites/correction-nationalites.component';
import { CorrectionNidComponent } from './correction-nid/correction-nid.component';

import { UpdateVerifyComponent } from './update-verify/update-verify.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { WebSocketServiceService } from './web-socket-service.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CorrectionPasseportComponent } from './correction-passeport/correction-passeport.component';
import { ProgressComponentComponent } from './Progress-Component/progress-component/progress-component.component';
import { CorrectionCarteSejourComponent } from './correction-carte-sejour/correction-carte-sejour.component';
import { CorrectionMatriculeFiscaleComponent } from './correction-matricule-fiscale/correction-matricule-fiscale.component';
import { CorrigerDuplicationsNidComponent } from './PersonnesMorales/Duplications/corriger-duplications-nid/corriger-duplications-nid.component';
import { MoodEditor } from './mood-editor/mood-editor.component';
import { NidPPEditorComponent } from './mood-editor/nid-pp-editor/nid-pp-editor.component';
import { BirthDateEditorComponent } from './mood-editor/birth-date-editor/birth-date-editor.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { CorrigerDuplicationWholeNameComponent } from './corriger-duplication-whole-name/corriger-duplication-whole-name.component';
import { DeleteCellRendererComponent } from './cellRenderers/delete-cell-renderer/delete-cell-renderer.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import {RowGroupingModule} from '@ag-grid-enterprise/row-grouping';
import { ProgressCellRendererComponent } from './cellRenderers/progress-cell-renderer/progress-cell-renderer.component'
import {MatCardModule} from '@angular/material/card';
import { LoaderOverlayComponent } from './overlays/loader-overlay/loader-overlay.component';
import { CorrectionRegistreCommercialComponent } from './PersonnesMorales/correction-registre-commercial/correction-registre-commercial.component';
import { EtapesNettoyageComponent } from './etapes-nettoyage/etapes-nettoyage.component';
import { CommncerNettoyageCellRendererComponent } from './cellRenderers/commncer-nettoyage-cell-renderer/commncer-nettoyage-cell-renderer.component';
import { CorrectionEmailComponent } from './correction-email/correction-email.component';
import { CorrectionNomComponent } from './correction-nom/correction-nom.component';
import { CorrectionPrenomComponent } from './correction-prenom/correction-prenom.component';
import { FirstNameValidatorComponent } from './mood-editor/first-name-validator/first-name-validator.component';
import { FirstNameEditorComponent } from './mood-editor/first-name-editor/first-name-editor.component';
import { LastNameEditorComponent } from './mood-editor/last-name-editor/last-name-editor.component';
import { LastNameValidatorComponent } from './mood-editor/last-name-validator/last-name-validator.component';
import { CorrrectionTinComponent } from './corrrection-tin/corrrection-tin.component';
import { ValidateButtonComponent } from './cellRenderers/validate-button/validate-button.component';
import { CorrectionNumeroTelComponent } from './correction-numero-tel/correction-numero-tel.component';
import { CorrectionNumeroFaxComponent } from './correction-numero-fax/correction-numero-fax.component';
import { ValidateFaxComponent } from './cellRenderers/validate-fax/validate-fax.component';
import { ValidateTelComponent } from './cellRenderers/validate-tel/validate-tel.component';
import { ReportingComponent } from './reporting/reporting.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CorrigerDuplicationNidDatesnaissanceComponent,
    HomeComponent,
    CustomPaginationComponent,
    ProgressBarComponent,
    HeaderComponent,
    FooterComponent,
    CorrectionDatesnaissancesComponent,
    CorrectionNationalitesComponent,
    CorrectionNidComponent,
    UpdateVerifyComponent,
    ProgressBarComponent,
    CorrectionPasseportComponent,
    ProgressComponentComponent,
    CorrectionCarteSejourComponent,
    CorrectionMatriculeFiscaleComponent,
    CorrigerDuplicationsNidComponent,
    MoodEditor,
    NidPPEditorComponent,
    BirthDateEditorComponent,
    CorrigerDuplicationWholeNameComponent,
    DeleteCellRendererComponent,
    ProgressCellRendererComponent,
    LoaderOverlayComponent,
    CorrectionRegistreCommercialComponent,
    EtapesNettoyageComponent,
    CommncerNettoyageCellRendererComponent,
    CorrectionEmailComponent,
    CorrectionNomComponent,
    CorrectionPrenomComponent,
    FirstNameValidatorComponent,
    FirstNameEditorComponent,
    LastNameEditorComponent,
    LastNameValidatorComponent,
    CorrrectionTinComponent,
    ValidateButtonComponent,
    CorrectionNumeroTelComponent,
    CorrectionNumeroFaxComponent,
    ValidateFaxComponent,
    ValidateTelComponent,
    ReportingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([],{scrollPositionRestoration:'top'}),
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    RoundProgressModule,
    AgChartsAngularModule,
    MatBadgeModule,
    MatIconModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatMenuModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 68,
      outerStrokeWidth: 2,
      innerStrokeWidth: 2,
      outerStrokeColor: '#808080',
      innerStrokeColor: '#e7e8ea',
      animationDuration: 300,
      backgroundPadding: 7,
      titleFontSize: '19',
      subtitleFontSize: '20',

    })

  ],
  providers: [UpdateVerifyComponent,WebSocketServiceService,    MatDatepickerModule,
  ],
  bootstrap: [AppComponent],
  entryComponents:[LoaderOverlayComponent]
})
export class AppModule { }
