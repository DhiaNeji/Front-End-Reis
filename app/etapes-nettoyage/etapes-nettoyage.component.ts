import { Component, OnInit } from '@angular/core';
import { CommncerNettoyageCellRendererComponent } from '../cellRenderers/commncer-nettoyage-cell-renderer/commncer-nettoyage-cell-renderer.component';
import { ServiceService } from '../service.service';
import { Step } from '../step';

@Component({
  selector: 'app-etapes-nettoyage',
  templateUrl: './etapes-nettoyage.component.html',
  styleUrls: ['./etapes-nettoyage.component.scss']
})
export class EtapesNettoyageComponent implements OnInit {
public button_1_text='Preparer les données'
public steps:Array<Step>=new Array()
  constructor(private service:ServiceService) {
    this.steps[0]=new Step()
    this.steps[1]=new Step()
    this.steps[2]=new Step()
    this.steps[3]=new Step()
    this.steps[4]=new Step()
    this.steps[5]=new Step()
    this.steps[6]=new Step()
    this.steps[7]=new Step()
    this.steps[8]=new Step()
    this.steps[9]=new Step()
    this.steps[10]=new Step()
    this.steps[11]=new Step()
    this.steps[12]=new Step()
    this.steps[13]=new Step()
    this.steps[14]=new Step()
    this.steps[15]=new Step()
    this.steps[16]=new Step()
   }

  ngOnInit(): void {
  }
  prepareErrCarteIdentite()
  {
    this.steps[0].setIsSearching(true)
    this.service.prepareErrCarteIdentite().subscribe(res=>{
      this.steps[0].setIsSearching(false)
      this.steps[0].setIsEnded(true)
    },err=>{
      this.steps[0].setIsSearching(false)
      this.steps[0].setIsEnded(false)
    })
  }
  openPage_1()
  {
    window.open('correction-nid', "_blank");
  }
  prepareErrPasseports()
  {
    this.steps[1].setIsSearching(true)
    this.service.prepareErrPasseport().subscribe(res=>{
      this.steps[1].setIsSearching(false)
      this.steps[1].setIsEnded(true)
    },err=>{
      this.steps[1].setIsSearching(false)
      this.steps[1].setIsEnded(false)
    })
  }
  openPage_2()
  {
    window.open('correction-passeport', "_blank");
  }
  prepareErrCarteSejour()
  {

    this.steps[2].setIsSearching(true)
    this.service.prepareErrCarteSejour().subscribe(res=>{
      this.steps[2].setIsSearching(false)
      this.steps[2].setIsEnded(true)
    },err=>{
      this.steps[2].setIsSearching(false)
      this.steps[2].setIsEnded(false)
    })
  }
  openPage_3()
  {
    window.open('correction-carte-sejour', "_blank");
  }
  prepareErrMatriculeFiscale()
  {

    this.steps[3].setIsSearching(true)
    this.service.prepareErrMatriculeFiscale().subscribe(res=>{
      this.steps[3].setIsSearching(false)
      this.steps[3].setIsEnded(true)
    },err=>{
      this.steps[3].setIsSearching(false)
      this.steps[3].setIsEnded(false)
    })
  }
  openPage_4()
  {
    window.open('correction-matricule-fiscale', "_blank");
  }

  prepareErrRegistreDeCommerce()
  {

    this.steps[4].setIsSearching(true)
    this.service.preparerErrRegistreDeCommerce().subscribe(res=>{
      this.steps[4].setIsSearching(false)
      this.steps[4].setIsEnded(true)
    },err=>{
      this.steps[4].setIsSearching(false)
      this.steps[4].setIsEnded(false)
    })
  }
  openPage_5()
  {
    window.open('correction-registre-de-cormmerce', "_blank");
  }

  prepareErrTin()
  {

    this.steps[5].setIsSearching(true)
    this.service.prepapreErrTin().subscribe(res=>{
      this.steps[5].setIsSearching(false)
      this.steps[5].setIsEnded(true)
    },err=>{
      this.steps[5].setIsSearching(false)
      this.steps[5].setIsEnded(false)
    })
  }
  openPage_6()
  {
    window.open('correction-tin', "_blank");
  }

  prepareErrDateNaissance()
  {

    this.steps[6].setIsSearching(true)
    this.service.preparerErrDateDeNaissance().subscribe(res=>{
      this.steps[6].setIsSearching(false)
      this.steps[6].setIsEnded(true)
    },err=>{
      this.steps[6].setIsSearching(false)
      this.steps[6].setIsEnded(false)
    })
  }
  openPage_7()
  {
    window.open('correction-dates-naissances', "_blank");
  }

  prepareErrNationalites()
  {

    this.steps[7].setIsSearching(true)
    this.service.preparerErrNationalites().subscribe(res=>{
      this.steps[7].setIsSearching(false)
      this.steps[7].setIsEnded(true)
    },err=>{
      this.steps[7].setIsSearching(false)
      this.steps[7].setIsEnded(false)
    })
  }
  openPage_8()
  {
    window.open('correction-nationalites', "_blank");
  }

  prepareErrEmail()
  {

    this.steps[8].setIsSearching(true)
    this.service.prepareErrEmail().subscribe(res=>{
      this.steps[8].setIsSearching(false)
      this.steps[8].setIsEnded(true)
    },err=>{
      this.steps[8].setIsSearching(false)
      this.steps[8].setIsEnded(false)
    })
  }
  openPage_9()
  {
    window.open('correction-emails', "_blank");
  }
  prepareErrNoms()
  {

    this.steps[9].setIsSearching(true)
    this.service.prepareErrNom().subscribe(res=>{
      this.steps[9].setIsSearching(false)
      this.steps[9].setIsEnded(true)
    },err=>{
      this.steps[9].setIsSearching(false)
      this.steps[9].setIsEnded(false)
    })
  }
  openPage_10()
  {
    window.open('correction-noms', "_blank");
  }
  prepareErrPrenoms()
  {

    this.steps[10].setIsSearching(true)
    this.service.prepareErrPrenom().subscribe(res=>{
      this.steps[10].setIsSearching(false)
      this.steps[10].setIsEnded(true)
    },err=>{
      this.steps[10].setIsSearching(false)
      this.steps[10].setIsEnded(false)
    })
  }
  openPage_11()
  {
    window.open('correction-prenom', "_blank");
  }
  prepareErrTel()
  {

    this.steps[11].setIsSearching(true)
    this.service.prepareErrTel().subscribe(res=>{
      this.steps[11].setIsSearching(false)
      this.steps[11].setIsEnded(true)
    },err=>{
      this.steps[11].setIsSearching(false)
      this.steps[11].setIsEnded(false)
    })
  }
  openPage_12()
  {
    window.open('correction-fax', "_blank");
  }

  prepareErrFax()
  {

    this.steps[12].setIsSearching(true)
    this.service.prepareErrTel().subscribe(res=>{
      this.steps[12].setIsSearching(false)
      this.steps[12].setIsEnded(true)
    },err=>{
      this.steps[12].setIsSearching(false)
      this.steps[12].setIsEnded(false)
    })
  }
  openPage_13()
  {
    window.open('correction-fax', "_blank");
  }
  prepareDuplicationNidDateNaissance()
  {

    this.steps[13].setIsSearching(true)
    this.service.preparerDuplicationsNidDateNaissance().subscribe(res=>{
      this.steps[13].setIsSearching(false)
      this.steps[13].setIsEnded(true)
    },err=>{
      this.steps[13].setIsSearching(false)
      this.steps[13].setIsEnded(false)
    })
  }
  openPage_14()
  {
    window.open('correction-duplication-nid-datesnaissance', "_blank");
  }
  prepareDuplicationNidPP()
  {

    this.steps[14].setIsSearching(true)
    this.service.preparerDuplicationsNidPP().subscribe(res=>{
      this.steps[14].setIsSearching(false)
      this.steps[14].setIsEnded(true)
    },err=>{
      this.steps[14].setIsSearching(false)
      this.steps[14].setIsEnded(false)
    })
  }
  openPage_15()
  {
    window.open('correction-duplications-nid-PM', "_blank");
  }
  prepareWholeNameDuplication()
  {

    this.steps[15].setIsSearching(true)
    this.service.prepareDuplicationWholeName().subscribe(res=>{
      this.steps[15].setIsSearching(false)
      this.steps[15].setIsEnded(true)
    },err=>{
      this.steps[15].setIsSearching(false)
      this.steps[15].setIsEnded(false)
    })
  }
  openPage_16()
  {
    window.open('correction-duplications-whole-name', "_blank");
  }
}
