import { Component, OnInit } from '@angular/core';
import { Module,AllModules, IServerSideGetRowsParams, IServerSideDatasource, GridApi } from '@ag-grid-enterprise/all-modules';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateVerifyComponent } from '../update-verify/update-verify.component';
import { NidPPEditorComponent } from '../mood-editor/nid-pp-editor/nid-pp-editor.component';
import { BirthDateEditorComponent } from '../mood-editor/birth-date-editor/birth-date-editor.component';
import { DeleteCellRendererComponent } from '../cellRenderers/delete-cell-renderer/delete-cell-renderer.component';

@Component({
  selector: 'app-corriger-duplication-whole-name',
  templateUrl: './corriger-duplication-whole-name.component.html',
  styleUrls: ['./corriger-duplication-whole-name.component.scss']
})
export class CorrigerDuplicationWholeNameComponent implements OnInit {

  ngOnInit()
  {
  }
   public gridApi:GridApi;
   public gridColumnApi;
   public rowSelection;
   public modules: Module[] = AllModules;
   public columnDefs;
   public defaultColDef;
   public autoGroupColumnDef;
   public rowModelType;
   public length;
   onCellKeyDown(e) {
  if(e.event.code=='ControlLeft')
  {
    this.gridApi.getRowNode(e.data.id).setDataValue('to_delete',true)

  }
  }

public paginationPageSize;
   public rowData: [];
   public groupDefaultExpanded;
   frameworkComponents
public cacheBlockSize;
public oldNId
public maxBlocksInCache
   public isRowSelectable;
   public getRowNodeId
   public getRowStyle
   public overlayLoadingTemplate
   public options2
   public isOld:boolean=false
   public undoRedoCellEditingLimit: 1
   constructor(private service:ServiceService,public dialog: MatDialog) {
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
    this.service.getProgcess("16").subscribe(res=>{
      this.length=res.data_length
      this.update_progress(res)
     })

    this.columnDefs = [
       {
         colId: 'idcluster',
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
        field:'step_16',
        minWidth:100,
        hide:true
      },
       {
        field: 'nid',
        editable:true,
        minWidth: 100,
        cellEditor: 'NidPPEditorComponent'
      },
       {
        field:'birth_date',
        headerName:'Date de naissance',
        editable:true,
        cellEditor:'BirthDateEditorComponent'
       },
       {
         field:'first_name',
         headerName:'Nom',
         editable:true
       }
       ,{
         field:'last_name',
         headerName:'Prenom',
         editable:true
       },

      {
        field:'Ne pas traiter',
        headername:'Ne pas traiter',
        checkboxSelection:true
      },
      {
        field:'to_delete',
        hide:true
      },
      {
      field:'Action',
      cellRenderer: 'DeleteCellRendererComponent',
      width:12
      }
     ];
     this.defaultColDef = {
       flex: 1,
       minWidth: 120,
       resizable: true,
       sortable: true,

     };
     this.overlayLoadingTemplate='<span class="ag-overlay-loading-center">Mise à jour en cours</span>';
     this.autoGroupColumnDef = {

      flex:1,
      cellRendererParams: { checkbox: true }
     };
     this.undoRedoCellEditingLimit=1
     this.rowSelection = 'multiple';
     this.isRowSelectable=function(rowNode){
       return !rowNode.group
     }

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
        if (params.data.step_16=='false') {
         return { 'pointer-events': 'none', opacity: '1',background: '#FFEEBC' }
       }
       else
       {
            if(params.data.step_16=='true')
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
  this.cacheBlockSize = 3;
  this.maxBlocksInCache=3;
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
          this.service.get_keys('16',params.request.startRow,params.request.endRow).subscribe(response=>{
          let x:Array<any>=response
          params.successCallback(response,x.length)
      })
    }
    else
    this.service.getDuplicationsByWholeName(params.request.groupKeys[0]).subscribe(response=>{
      let x:Array<any>=response
      params.successCallback(response,x.length)
    })
    }
  }
  edit($event)
  {
    this.gridApi.showLoadingOverlay()
    if(this.oldNId==undefined)
    this.oldNId=$event.data.nid
    this.service.updateDuplicationsByWholeName($event.data.idcluster,this.oldNId,$event.data).subscribe(res=>{
      this.service.getProgcess("16").subscribe(res=>{
        this.gridApi.hideOverlay()
        this.update_progress(res)
      },err=>{
        console.log('nope')
      })
   })
  this.oldNId=undefined
  }
start($event)
{
  this.oldNId=$event.data.nid
}
rowSelectedHandler($event)
{
  this.gridApi.getRowNode($event.data.id).setDataValue('step_16','false')
}

update_progress(data)
{
  this.options2= {
    title: {
      text: 'commencé à',
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

