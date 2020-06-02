import { Component, OnInit } from '@angular/core';
import { Module,AllModules, IServerSideGetRowsParams, IServerSideDatasource, GridApi } from '@ag-grid-enterprise/all-modules';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateVerifyComponent } from '../update-verify/update-verify.component';
import { NidPPEditorComponent } from '../mood-editor/nid-pp-editor/nid-pp-editor.component';
import { BirthDateEditorComponent } from '../mood-editor/birth-date-editor/birth-date-editor.component';
import { ToastrService } from 'ngx-toastr';
import { DeleteCellRendererComponent } from '../cellRenderers/delete-cell-renderer/delete-cell-renderer.component';

@Component({
  selector: 'app-corriger-duplication-nid-datesnaissance',
  templateUrl: './corriger-duplication-nid-datesnaissance.component.html',
  styleUrls: ['./corriger-duplication-nid-datesnaissance.component.scss']
})
export class CorrigerDuplicationNidDatesnaissanceComponent implements OnInit {
    ngOnInit()
    {
    }
    isSearching
    edited_data_length
     public gridApi:GridApi;
     public options2
     public gridColumnApi;
     public rowSelection;
     public modules: Module[] = AllModules;
     public columnDefs;
     public defaultColDef;
     public autoGroupColumnDef;
     public rowModelType;
     public length;
  public paginationPageSize;
     public rowData: [];
     public groupDefaultExpanded;
     frameworkComponents
  public cacheBlockSize;
  public oldNId
  public maxBlocksInCache
     public isRowSelectable;
     public getRowNodeId
     public overlayLoadingTemplate
     isErroneousNations
     public getRowStyle
     public isOld:boolean=false
     public undoRedoCellEditingLimit: 1
     public isFinished:boolean=false
     constructor(private service:ServiceService,public dialog: MatDialog,private toastr:ToastrService) {
      this.options2= {
        title: {
          text: 'Historique de nettoyage',
          fontSize: 18,
        },
        subtitle: { text: 'Powered By : Vneuron' },
        series: [
          {
            data: [ ],
            type: 'pie',
            labelKey: 'religion',
            angleKey: 'population',
            label: { minAngle: 0 },
            callout: { strokeWidth: 2 },
            fills: [
              '#5EB5EF',
              '#FDD676',
              '#FFA1B5',
              '#f9ca23',
              '#f0932b',
              '#eb4c4b',
              '#6ab04c',
              '#7ed6df',
            ],
            strokes: [
              '#b28553',
              '#b35555',
              '#829a3e',
              '#ae8d19',
              '#a8671e',
              '#a43535',
              '#4a7b35',
              '#58969c',
            ],
          },
        ],
        legend:{enabled:true,position:'bottom',color:'red'}
      };
      this.service.getProgcess("14").subscribe(res=>{
        this.length=res.duplicates_data_length
        this.update_progress(res)
       })

      this.columnDefs = [
         {
           colId: 'nid',
           valueGetter: 'data',
           rowGroup: true,
           rowGroupIndex: 1,
           hide: true,
           cellRenderer: 'group'
         },
         {
           field:'id',
           hide:true
         },
         {
          field:'nid',
            editable:true,
          cellEditor: 'NidPPEditorComponent'
          },
          {
            field:'first_name',
            headerName:'Nom'
          },
          {
            field:'last_name',
            headerName:'Prenom'
          },
         {
           field: 'birthdate',
           headerName:'Date de naissance',
           editable:true,
           cellEditor:'BirthDateEditorComponent'
         }, {
          field: 'step_14',
          hide:true
        },

         {
           field:'to_delete',
           hide:true
         },
         {
           field:'Ne pas traiter',
           checkboxSelection:true
         },
         {
           field:'Action',
           cellRenderer: 'DeleteCellRendererComponent',

         }
       ];
       this.defaultColDef = {
         flex: 1,
         minWidth: 120,
         resizable: true,
         sortable: true,

       };
       this.autoGroupColumnDef = {

        flex:1,
        cellRendererParams: { checkbox: true }
       };
       this.undoRedoCellEditingLimit=1
       this.rowSelection = 'multiple';
       this.isRowSelectable=function(rowNode){
         return !rowNode.group
       }
       this.overlayLoadingTemplate='<span class="ag-overlay-loading-center">Mise à jour en cours</span>';

    this.frameworkComponents = {
      NidPPEditorComponent: NidPPEditorComponent,
      BirthDateEditorComponent:BirthDateEditorComponent,
      DeleteCellRendererComponent:DeleteCellRendererComponent
    };
       this.rowModelType = 'serverSide';
       this.getRowNodeId = function(data) {
        return data.id;
      };
      this.getRowStyle= function(params) {
        if(params.data!=null)
       {

       if(params.data.to_delete==true)
       return { 'pointer-events': 'none', opacity: '1',background: '#f4a460' }
        if (params.data.step_14=='false') {
          return { 'pointer-events': 'none', opacity: '1',background: '#FFEEBC' }
        }
        else
        {
             if(params.data.step_14=='true')
            return {'pointer-events': 'none', opacity: '1',background: '#DFF0D8'};
            else
            {
           if(params.data.id==null)
           return {background: '#ffffff',  'font-weight': 'bold'}
           else
   return {background: '#F6C5C9'}
          }
        }
      }

    }
    this.paginationPageSize = 2;
    this.maxBlocksInCache=10;
     }

     onGridReady(params) {
       this.gridApi = params.api;
       this.gridColumnApi = params.columnApi;
       this.gridApi.setServerSideDatasource(this.dataSource)
     }

     dataSource:IServerSideDatasource={
      getRows:(params:IServerSideGetRowsParams)=>{
        if(params.request.groupKeys.length==0)
        {
            this.service.get_keys('14',params.request.startRow,params.request.endRow).subscribe(response=>{
            let x:Array<any>=response
            console.log(x.length)
            params.successCallback(response,x.length)
        })
      }
      else
      this.service.get_duplications('14',params.request.groupKeys[0]).subscribe(response=>{
        let x:Array<any>=response
        params.successCallback(response,x.length)
      })
      }
    }
    edit($event)
    {
      console.log('eaaaa')
      this.toastr.info("Mise à jour en cours","Mise à jour")
this.gridApi.showLoadingOverlay()
      if(this.oldNId==undefined)
    this.oldNId=$event.data.nid
    this.service.update_duplications("14",this.oldNId,$event.data).subscribe(res=>{
    this.edited_data_length++
    this.service.getProgcess("14").subscribe(res=>{
      this.toastr.success("Mise à jour effectuée avec succès","Mise à jour")
      this.gridApi.hideOverlay()
        this.update_progress(res)
    })
    },err=>{
      this.toastr.error("Mise à jour echouée")
    })
    this.oldNId=undefined
    }
start($event)
{
  this.oldNId=$event.data.nid
}
rowSelectedHandler($event)
{
  this.gridApi.getRowNode($event.data.id).setSelected(true)
  this.gridApi.getRowNode($event.data.id).setDataValue('step_14','false')
  this.oldNId=$event.data.nid
}
prepareData(){
  this.toastr.toastrConfig.positionClass='toast-bottom-right'
  this.isSearching=true
  this.toastr.info("Fetching data from the Server!<div class='spinner-grow text-light' role='status'>",'Fetcing',{
    enableHtml:true
  })
  this.service.clear().subscribe(res=>{
  this.service.prepare_data("8").then(data=>{
  this.toastr.clear()
  this.toastr.success("data ready","done")
  this.isSearching=false
  this.isErroneousNations=true
})})
}
clear()
{

}
update_progress(data)
{
  this.options2= {

    title: {
      text: 'Commencé à',
      fontSize: 15,
    },
    subtitle: { text: new Date(data.started_on).toLocaleString(),fontSize:18 },
    series: [
      {
        data: [
        { religion: 'Doublons', population: data.duplicates_data_length},
        { religion: 'Doublons restés', population: data.duplicates_data_length-data.edited_duplicates_length},
        { religion: 'Doublons traités', population: data.edited_duplicates_length},

      ],
        type: 'pie',
        labelKey: 'religion',
        angleKey: 'population',
        label: { minAngle: 0 },
        callout: { strokeWidth: 2 },
        fills: [
          '#5EB5EF',
          '#FDD676',
          '#FFA1B5',
          '#f9ca23',
          '#f0932b',
          '#eb4c4b',
          '#6ab04c',
          '#7ed6df',
        ],
        strokes: [
          '#b28553',
          '#b35555',
          '#829a3e',
          '#ae8d19',
          '#a8671e',
          '#a43535',
          '#4a7b35',
          '#58969c',
        ],
      },
    ],
    legend:{enabled:true,position:'bottom',color:'black'}
  };
}
   }
