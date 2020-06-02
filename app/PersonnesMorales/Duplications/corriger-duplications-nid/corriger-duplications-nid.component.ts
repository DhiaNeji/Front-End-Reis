import { Component, OnInit } from '@angular/core';
import { Module,AllModules, IServerSideGetRowsParams, IServerSideDatasource, GridApi } from '@ag-grid-enterprise/all-modules';
import { MatDialog } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service.service';
import { UpdateVerifyComponent } from 'src/app/update-verify/update-verify.component';
import { HttpClient } from '@angular/common/http';
import { MoodEditor } from 'src/app/mood-editor/mood-editor.component';
import { ToastrService } from 'ngx-toastr';
import { DeleteCellRendererComponent } from 'src/app/cellRenderers/delete-cell-renderer/delete-cell-renderer.component';

@Component({
  selector: 'app-corriger-duplications-nid',
  templateUrl: './corriger-duplications-nid.component.html',
  styleUrls: ['./corriger-duplications-nid.component.scss']
})
export class CorrigerDuplicationsNidComponent implements OnInit {
  ngOnInit()
  {
  }
  public oldNID
   public gridApi:GridApi;
   public gridColumnApi;
   public rowSelection;
   public modules: Module[] = AllModules;
   public columnDefs;
   public defaultColDef;
   public autoGroupColumnDef;
   public rowModelType;
   public length;
   public overlayLoadingTemplate
   isSearching
   isErroneousNations
public paginationPageSize;
   public rowData: [];
   public groupDefaultExpanded;
   frameworkComponents
public cacheBlockSize;
public maxBlocksInCache
   public isRowSelectable;
   public getRowNodeId
   edited_data_length
   public getRowStyle
   public isOld:boolean=false
   public undoRedoCellEditingLimit: 1
   public options2
   public isFinished
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
    this.service.getProgcess('15').subscribe(res=>{
      this.length=res.data_length
      this.update_progress(res)
    })
    this.columnDefs = [
       {
         colId: 'nid',
         valueGetter: 'data',
         rowGroup: true,
         rowGroupIndex: 1,
         hide: true,
       },
       {
         field:'id',
        hide:true
       },
       {
         field:'first_name',
         headerName:'Nom'
       },
        {
        field: 'step_15',
        minWidth: 100,
        hide:true
      },
       {
         field:'nid',
         editable:true,
         cellEditor: 'moodEditor'
       },
       {
         field:'Ne pas traiter',
         checkboxSelection:true
       },
       {
         field:'Action',
         cellRenderer: 'DeleteCellRendererComponent',
       },
       {
        field:'to_delete',
        hide:true
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
     this.overlayLoadingTemplate='<span class="ag-overlay-loading-center">Mise à jour en cours</span>';

     this.undoRedoCellEditingLimit=1
     this.rowSelection = 'multiple';
     this.isRowSelectable=function(rowNode){
       return !rowNode.group
     }
     this.rowModelType = 'serverSide';
     this.getRowNodeId = function(data) {
      return data.id;
    };

    this.frameworkComponents = {
      moodEditor: MoodEditor,
      DeleteCellRendererComponent:DeleteCellRendererComponent
    };
    this.getRowStyle= function(params) {
      if(params.data!=null)
     {

      if(params.data.to_delete==true)
      return { 'pointer-events': 'none', opacity: '1',background: '#f4a460' }
      if (params.data.step_15=='false') {
        return { 'pointer-events': 'none', opacity: '1',background: '#FFEEBC' }
      }
      else
      {
           if(params.data.step_15=='true')
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
  this.paginationPageSize = 1;
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
          this.service.get_keys('15',params.request.startRow,params.request.endRow).subscribe(response=>{
          let x:Array<any>=response
          params.successCallback(response,x.length)
      })
    }
    else
    this.service.get_duplications('15',params.request.groupKeys[0]).subscribe(response=>{
      let x:Array<any>=response
      params.successCallback(response,x.length)
    })
    }
  }
  edit($event)
  {
    this.toastr.info("Mise à jour en cours","Mise à jour")
    this.gridApi.showLoadingOverlay()
    if(this.oldNID==undefined)
    this.oldNID=$event.data.nid
    this.service.update_duplications("15",this.oldNID,$event.data).subscribe(res=>{
      this.edited_data_length++
      this.service.getProgcess('15').subscribe(res=>{
        this.gridApi.hideOverlay()
        this.toastr.success("Mise à jour effectuée avec succès","Mise à jour")
        this.update_progress(res)
      })
    },err=>{
      this.toastr.error("Mise à jour echouée")
    })
    this.oldNID=undefined
  }
  start($event)
  {
    this.oldNID=$event.value
  }
rowSelectedHandler($event)
{
this.oldNID=$event.data.nid
this.gridApi.getRowNode($event.data.id).setSelected(true)
this.gridApi.getRowNode($event.data.id).setDataValue('step_15','false')
}
prepareData(){
  this.toastr.toastrConfig.positionClass='toast-bottom-right'
  this.isSearching=true
  this.toastr.info("Fetching data from the Server!<div class='spinner-grow text-light' role='status'>",'Fetcing',{
    enableHtml:true
  })
  this.service.clear().subscribe(res=>{
  this.service.prepare_data("9").then(data=>{
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
      text: 'Commencé à ',
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

