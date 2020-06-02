import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Page } from './Pagination/page';
import { Pageable } from './Pagination/pageable';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  cachedData
  isDataReady
  notifications
  notifications_nbr
  public static last_cleaning_progress
  public data= [
  {
    area: 'North East',
    usedInLast3Months: 1871,
    usedOver3MonthsAgo: 54,
    neverUsed: 186,
  },
  {
    area: 'North West',
    usedInLast3Months: 5213,
    usedOver3MonthsAgo: 101,
    neverUsed: 474,
  },
  {
    area: 'Yorkshire and the Humber',
    usedInLast3Months: 3908,
    usedOver3MonthsAgo: 66,
    neverUsed: 375,
  },
  {
    area: 'East Midlands',
    usedInLast3Months: 3442,
    usedOver3MonthsAgo: 64,
    neverUsed: 317,
  },
  {
    area: 'West Midlands',
    usedInLast3Months: 4127,
    usedOver3MonthsAgo: 102,
    neverUsed: 421,
  },
  {
    area: 'East of England',
    usedInLast3Months: 4553,
    usedOver3MonthsAgo: 64,
    neverUsed: 330,
  },
  {
    area: 'London',
    usedInLast3Months: 6578,
    usedOver3MonthsAgo: 79,
    neverUsed: 403,
  },
  {
    area: 'South East',
    usedInLast3Months: 6757,
    usedOver3MonthsAgo: 88,
    neverUsed: 418,
  },
  {
    area: 'South West',
    usedInLast3Months: 4166,
    usedOver3MonthsAgo: 74,
    neverUsed: 267,
  },
  {
    area: 'Wales',
    usedInLast3Months: 2265,
    usedOver3MonthsAgo: 26,
    neverUsed: 236,
  },
  {
    area: 'Scotland',
    usedInLast3Months: 3979,
    usedOver3MonthsAgo: 73,
    neverUsed: 386,
  },
  {
    area: 'Northern Ireland',
    usedInLast3Months: 1271,
    usedOver3MonthsAgo: 15,
    neverUsed: 178,
  },
];
  constructor(private httpClient:HttpClient) { }
  /***************************************Fetching *************************************************/
  public fetchData(url:string,pageable:Pageable)
  {
    return this.httpClient.get<Page<any>>(url+pageable.pageNumber).toPromise().then(data=>{this.cachedData=data})
  }
  public getErroneousBirthDates(pageable:Pageable)
  {
    return this.httpClient.get<Page<any>>("http://localhost:8080/listerErrBirthDate/"+pageable.pageNumber).toPromise().then(data=>{this.cachedData=data})
  }
  public getErroneousNationalities(Pageable:Pageable)
  {
    return this.httpClient.get<Page<any>>("http://localhost:8080/find_err_nationalities/"+Pageable.pageNumber).toPromise().then(data=>{this.cachedData=data})
  }

  public getErroneousNidByNationality(Pageable:Pageable,Nationality)
  {
    return this.httpClient.get<Page<any>>("http://localhost:8080//cin_err/"+Pageable.pageNumber+"/"+Nationality).toPromise().then(data=>{this.cachedData=data})
  }
  public getMyCachedData()
  {
    return this.cachedData
  }
  /***************************************Paginating *************************************************/
  public changePage(pageable:Pageable):Observable<Page<any>>
  {
    return this.httpClient.get<Page<any>>("http://localhost:8080/listerErrBirthDate/"+pageable.pageNumber)

  }
  public getNextPage(page: Page<any>): Pageable {
    console.log(page.last)
    if(!page.last) {
      page.pageable.pageNumber = page.pageable.pageNumber+1;
    }
    return page.pageable;
  }
  public getPreviousPage(page: Page<any>): Pageable {
    console.log(page.first)
    if(!page.first) {
      page.pageable.pageNumber = page.pageable.pageNumber-1;
    }
    return page.pageable;
  }
  public getPageInNewSize(page: Page<any>, pageSize: number): Pageable {
    page.pageable.pageSize = pageSize;
    page.pageable.pageNumber = Pageable.FIRST_PAGE_NUMBER;
    return page.pageable;
  }
  /***************************************Update & Delete *************************************************/
  public update(Customer)
  {
    this.httpClient.put('http://localhost:8080/update',Customer).subscribe(res=>{

    },err=>{
      console.log('error')
    })
  }
  public update_2(Customer):Observable<any>
  {
   return this.httpClient.put('http://localhost:8080/update',Customer)
  }
  public updateNotEditedInCinCorrection(Nationality):Observable<any>
  {
    return this.httpClient.put('http://localhost:8080/updateNotEditedIn/'+Nationality,null)
  }
  public updateNotEditedInCorrectionNationalities():Observable<any>
  {
    return this.httpClient.put('http://localhost:8080/updateNotEditedInNationalities',null)
  }
  public updateNotEditedInBDcorrection():Observable<any>
  {
    return this.httpClient.put('http://localhost:8080/notEditedInBDcorr',null)
  }
  public getCahchedData(startRow,endRow):Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/getCachedData?startRow='+startRow+'&endRow='+endRow)
  }
  public getDataLength():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/getCachedDataLength')
  }
  public prepareErrBD()
  {
    return this.httpClient.get('http://localhost:8080/prepareErrBD').toPromise().then(res=>{this.isDataReady=res})
  }
  public prepareErrNations()
  {
    return this.httpClient.get('http://localhost:8080/prepareErrNation').toPromise().then(res=>{this.isDataReady=res})
  }
  public clear():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/clear')
  }
  public updateCachedData(Customer,index)
  {
    return this.httpClient.put('http://localhost:8080/updateCashedData?index='+index,Customer)
  }
  public prepare_data(step)
  {
    return this.httpClient.get('http://localhost:8080/prepare_data?step='+step).toPromise().then(res=>{this.isDataReady=res,console.log(res)})
  }

  public get_data_length(step)
  {
    return this.httpClient.get('http://localhost:8080/get_data_length?step='+step)
  }
  public get_edited_data_length(step):Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/get_edited_data_length?step='+step)
  }
  public get_keys(step,startRow,endRow):Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/get_keys?step='+step+'&startRow='+startRow+'&endRow='+endRow)
  }
  public get_duplications(step,nid):Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/get_duplications?step='+step+'&nid='+nid)
  }
  public update_duplications(step,oldNid,customer):Observable<any>
  {
    return this.httpClient.put('http://localhost:8080/update_duplicationsNidBD?step='+step+'&oldNid='+oldNid,customer)
  }
  public get_customer(nid,birthDate):Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/listerParNidAndBirthDate/'+birthDate+'/'+nid)
  }
  public delete(id):Observable<any>
  {
return this.httpClient.delete('http://localhost:8080/delete/'+id)
  }
  public update_data(step,customer,index):Observable<Object>
  {
    return this.httpClient.put('http://localhost:8080/update_data?step='+step+'&index='+index,customer)
  }
  public get_notifications():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/get_notifications')
  }
  public get_progress():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/get_progress')
  }
  public getByNid(nid):Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/getByNid?nid='+nid)
  }
  public getDuplicationsByWholeName(idCluster):Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/getDuplicationsByWholeName?idCluster='+idCluster)
  }
  public updateDuplicationsByWholeName(idCluster,oldNid,ClusterToEdit)
  {
    return this.httpClient.put('http://localhost:8080/updateDuplicationsByWholeName?idCluster='+idCluster+'&oldNid='+oldNid,ClusterToEdit)
  }
  public getProgcess(step):Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/getProgess?step='+step)
  }
  public prepareErrCarteIdentite():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerErrCarteIdentite')
  }
  public prepareErrPasseport():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerErrPasseport')
  }
  public prepareErrMatriculeFiscale():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerErrMatriculeFiscale')
  }
  public prepareErrCarteSejour():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerErrCarteSejour')
  }
  public preparerErrRegistreDeCommerce():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerErrRegistreDeCommerce')
  }
  public prepapreErrTin():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerErrTin')
  }
  public get_data(step,startRow,endRow):Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/get_data?step='+step+'&startRow='+startRow+'&endRow='+endRow)
  }
  public preparerErrDateDeNaissance():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerErrDateDeNaissance')
  }
  public preparerErrNationalites():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerErrNationalites')
  }
  public preparerDuplicationsNidDateNaissance():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerDuplicationsNidDateNaissance')
  }
  public preparerDuplicationsNidPP():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerDuplicationsNidPP')
  }
  public prepareDuplicationWholeName():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/prepareDuplicationWholeName')
  }
  public prepareErrEmail():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerErrEmail')
  }
  public prepareErrNom():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/prepapreErrNoms')
  }
  public validateNom(firstName):Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/validatefn?firstName='+firstName)
  }
  public prepareErrPrenom():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/prepapreErrPrenoms')
  }
  public validatePrenom(lastname):Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/validateln?lastName='+lastname)
  }
  public prepareErrTel():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerErrTel')
  }
  public prepareErrFax():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/preparerErrFax')
  }
  public getReporting():Observable<any>
  {
    return this.httpClient.get('http://localhost:8080/getReporting')
  }
  public getLastCleaningProgress()
  {
    this.httpClient.get('http://localhost:8080/getReporting').toPromise().then(res=>{
      ServiceService.last_cleaning_progress=res
    })
  }

}
