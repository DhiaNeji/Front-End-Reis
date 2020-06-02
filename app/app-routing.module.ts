import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { CorrigerDuplicationNidDatesnaissanceComponent } from './corriger-duplication-nid-datesnaissance/corriger-duplication-nid-datesnaissance.component';
import { HomeComponent } from './home/home.component';
import { CorrectionDatesnaissancesComponent } from './correction-datesnaissances/correction-datesnaissances.component';
import { CorrectionNationalitesComponent } from './correction-nationalites/correction-nationalites.component';
import { CorrectionNidComponent } from './correction-nid/correction-nid.component';
import { CorrigerDuplicationsNidComponent } from './PersonnesMorales/Duplications/corriger-duplications-nid/corriger-duplications-nid.component';
import { CorrectionPasseportComponent } from './correction-passeport/correction-passeport.component';
import { CorrectionCarteSejourComponent } from './correction-carte-sejour/correction-carte-sejour.component';
import { CorrectionMatriculeFiscaleComponent } from './correction-matricule-fiscale/correction-matricule-fiscale.component';
import { CorrigerDuplicationWholeNameComponent } from './corriger-duplication-whole-name/corriger-duplication-whole-name.component';
import { CorrectionRegistreCommercialComponent } from './PersonnesMorales/correction-registre-commercial/correction-registre-commercial.component';
import { EtapesNettoyageComponent } from './etapes-nettoyage/etapes-nettoyage.component';
import { CorrectionEmailComponent } from './correction-email/correction-email.component';
import { CorrectionNomComponent } from './correction-nom/correction-nom.component';
import { CorrectionPrenomComponent } from './correction-prenom/correction-prenom.component';
import { CorrrectionTinComponent } from './corrrection-tin/corrrection-tin.component';
import { CorrectionNumeroTelComponent } from './correction-numero-tel/correction-numero-tel.component';
import { CorrectionNumeroFaxComponent } from './correction-numero-fax/correction-numero-fax.component';
import { ReportingComponent } from './reporting/reporting.component';


const routes: Routes = [
  {path:'test',component:TestComponent},
  {path:'correction-duplication-nid-datesnaissance',component:CorrigerDuplicationNidDatesnaissanceComponent},
  {path:'home',component:HomeComponent},
  {path:'correction-dates-naissances',component:CorrectionDatesnaissancesComponent},
  {path:'correction-nationalites',component:CorrectionNationalitesComponent},
  {path:'correction-nid',component:CorrectionNidComponent},
  {path:'correction-passeport',component:CorrectionPasseportComponent},
  {path:'correction-carte-sejour',component:CorrectionCarteSejourComponent},
  {path:'correction-matricule-fiscale',component:CorrectionMatriculeFiscaleComponent},
  {path:'test',component:TestComponent},
  {path:'correction-duplications-nid-PM',component:CorrigerDuplicationsNidComponent},
  {path:'correction-duplications-whole-name',component:CorrigerDuplicationWholeNameComponent},
  {path:'correction-registre-de-cormmerce',component:CorrectionRegistreCommercialComponent},
  {path:'etapes-nettoyage',component:EtapesNettoyageComponent},
  {path:'correction-emails',component:CorrectionEmailComponent},
  {path:'correction-noms',component:CorrectionNomComponent},
  {path:'correction-prenom',component:CorrectionPrenomComponent},
  {path:'correction-tin',component:CorrrectionTinComponent},
  {path:'correction-tel',component:CorrectionNumeroTelComponent},
  {path:'correction-fax',component:CorrectionNumeroFaxComponent},
  {path:'reporting',component:ReportingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
