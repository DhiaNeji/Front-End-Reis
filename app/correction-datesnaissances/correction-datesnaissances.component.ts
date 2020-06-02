import { Component, OnInit } from '@angular/core';
import { Page } from '../Pagination/page';
import { Module,AllModules, GridApi, Events, EventService, IServerSideDatasource, IServerSideGetRowsParams, RowNode, GridOptions } from '@ag-grid-enterprise/all-modules';
import { ServiceService } from '../service.service';
import * as $ from "jquery";
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { element } from 'protractor';
import { DeleteCellRendererComponent } from '../cellRenderers/delete-cell-renderer/delete-cell-renderer.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { LoaderOverlayComponent } from '../overlays/loader-overlay/loader-overlay.component';

@Component({
  selector: 'app-correction-datesnaissances',
  templateUrl: './correction-datesnaissances.component.html',
  styleUrls: ['./correction-datesnaissances.component.scss']
})
export class CorrectionDatesnaissancesComponent implements OnInit {
  ngOnInit(){
  }
  public options2
      public data2
  public gridApi:GridApi;
  public progress
  public edited_data_length
  public gridColumnApi;
  editedDataNumber:number=0
  public modules: Module[] = AllModules;
  public columnDefs;
  public rowClassRules
  public GridOptions:GridOptions ;
  public defaultColDef;
  public rowSelection
  public rowModelType;
  public paginationPageSize;
  public getRowNodeId
  public cacheBlockSize;
  public maxBlocksInCache
  public rowData: [];
  public overlayLoadingTemplate
  public Length
  public isFinished:boolean=false
  frameworkComponents
  rowStyle
  getRowStyle
  isRowSelectable
  isErroneousNations
  isSearching
  constructor(private toastr:ToastrService,private http: HttpClient,private service:ServiceService,private overlay:Overlay) {
    this.options2= {
      title: {
        text: 'Historique de nettoyage',
        fontSize: 18,
      },
      subtitle: { text: 'Powered By : Vneuron' },
      series: [
        {
          data: [ { religion: 'Lignes traitées', population: 4159000 },
          { religion: 'Lignes ignorées', population: 97000 },
          { religion: 'Lignes non encore traitées', population: 456000 },],
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
    this.service.getProgcess("7").subscribe(res=>{
      console.log(res.data_length)
      this.Length=res.data_length
      this.options2= {
        title: {
          text: 'Commencé à',
          fontSize: 15,
        },
        subtitle: { text: new Date(res.started_on).toLocaleString(),fontSize:18 },
        series: [
          {
            data: [ { religion: 'Lignes traitées', population: res.edited_data_length},
            { religion: 'Lignes ignorées', population: res.ignored_data_length},
            { religion: 'Lignes restées', population: res.data_length-(res.edited_data_length+res.ignored_data_length)},],
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
     })
     this.overlayLoadingTemplate =
     '<span class="ag-overlay-loading-center">Mise à jour en cours</span>';
    this.isSearching=false
    this.columnDefs = [
      {
        field: 'id',
        hide:true,
        maxWidth: 75,
           },
           {
             field:'nid'
           },
      {
        field: 'first_name',
        headerName:'Nom',
        minWidth: 190,
      },
      { field: 'last_name'
    ,headerName:'Prenom',
    },
      {field: 'step_7',
      hide:true
    },
      {
        field: 'birthdate',
        headerName:'Date de naissance',
        minWidth: 200,

        cellEditor: ValidationCellEditor,

        cellStyle: function(params) {
          var s:string=params.value
          var Regex=RegExp('([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))')
           if(!Regex.test(s))
          return {'color': 'red'};
          else
          return {'color': 'green'};
      },
      editable:function(params){
        return params.data.step_7!='false'
      },
    },
    {
      field:'Ne pas traiter',
      checkboxSelection:function(params)
        {
          var s:string=params.data.birthdate
          var Regex=RegExp('([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))')
           return !Regex.test(s)
        },
        selectable:true
    }

    ];
    this.defaultColDef = {
      flex: 1,
      resizable: false,
    };
    this.rowModelType = 'serverSide';
    this.paginationPageSize = 4;
    this.cacheBlockSize = 4;
    this.maxBlocksInCache=1;
    this.rowSelection='multiple';
    this.getRowStyle= function(params) {
      if(params.data!=null)
     {
      if (params.data.step_7=='false') {
        return { 'pointer-events': 'none', opacity: '1',background: '#FFEEBC' }
      }
      else
      {
        var s:string=params.data.birthdate
          var Regex=RegExp('([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))')
           if(!Regex.test(s))
          return {background: '#F6C5C9'};
          else
          return {'pointer-events': 'none', opacity: '1',background: '#DFF0D8'};
      }
    }

  }
  this.getRowNodeId = function(data) {
    return data.id;
  };
  this.isRowSelectable=function(rowNode){
    if(rowNode.data!=null)
    {
    let s:string=rowNode.data.birthdate
    let Regex=RegExp('([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))')
     return !Regex.test(s)
  }}
}
  dataSource:IServerSideDatasource={
    getRows:(params:IServerSideGetRowsParams)=>{

      this.service.get_data("7",params.request.startRow,params.request.endRow).subscribe(response=>{
        console.log(this.Length)
        params.successCallback(response,this.Length)
      })
    }
  }
  onGridReady(params)
  {
    this.gridApi = params.api;
    this.gridApi.setServerSideDatasource(this.dataSource)
}

  edit(event)
  {
    console.log('sdqd')
    this.gridApi.showLoadingOverlay();
    this.toastr.info("Mise à jour en cours")
    this.service.update_data("7",event.data,event.rowIndex).subscribe(res=>{
    this.edited_data_length=res
    this.toastr.success("Mise à jour effectuée avec succès")
    this.service.getProgcess("7").subscribe(res=>{
      this.gridApi.hideOverlay()
      this.options2= {
        title: {
          text: 'Commencé à',
          fontSize: 15,
        },
        subtitle: { text:new Date(res.started_on).toLocaleString(),fontSize:18 },
        series: [
          {
            data: [ { religion: 'Lignes traitées', population: res.edited_data_length},
            { religion: 'Lignes ignorées', population: res.ignored_data_length},
            { religion: 'Lignes restées', population: res.data_length-(res.edited_data_length+res.ignored_data_length)},],
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
     })
  },error=>{
   this.toastr.error("Mise à jour echouée")
  })
  }
  rowSelectedHandler($event)
  {this.gridApi.getRowNode($event.data.id).setSelected(true)
  this.gridApi.getRowNode($event.data.id).setDataValue('step_7','false')

  }
  prepareData(){
    this.toastr.toastrConfig.positionClass='toast-bottom-right'
    this.isSearching=true
    this.toastr.info("Fetching data from the Server!<div class='spinner-grow text-light' role='status'>",'Fetcing',{
      enableHtml:true
    })
    this.service.clear().subscribe(res=>{
    this.service.prepare_data("2").then(data=>{
    this.toastr.clear()
    this.toastr.success("data ready","done")
    this.isSearching=false
    this.isErroneousNations=true
  })})
}
  clear()
  {

  }
  hiii()
  {
    this.gridApi.hideOverlay()
  }
  dos()
  {
    this.options2= {
      title: {
        text: 'Historique de nettoyage',
        fontSize: 18,
      },
      subtitle: { text: 'Powered By : Vneuron' },
      series: [
        {
          data: [ { religion: 'Lignes traitées', population: 4159000 },
          { religion: 'Lignes ignorées', population: 97000 },
          { religion: 'Lignes non traitées', population: 456000 },],
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
      legend: { enabled: false },
    };
  }
}
function ValidationCellEditor() {}

ValidationCellEditor.prototype.init = function(params) {
  this.eGui = document.createElement('div');
  this.eGui.innerHTML = `
    <input value=${params.value} />
  `;
  this.eInput = this.eGui.querySelector('input');
  this.eInput.addEventListener('input', this.inputChanged.bind(this));

}

ValidationCellEditor.prototype.inputChanged = function(event) {
  const val = event.target.value;
  if(!this.isValid(val)) {
    this.eInput.classList.add('invalid-cell');
  } else {
    this.eInput.classList.remove('invalid-cell');
  }
}

ValidationCellEditor.prototype.isValid = function(value) {
  var Regex=RegExp('([12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01]))')
  return Regex.test(value) === true;
}

ValidationCellEditor.prototype.getValue = function() {
  return this.eInput.value;
}

ValidationCellEditor.prototype.isCancelAfterEnd = function() {
  return !this.isValid(this.eInput.value);
}

ValidationCellEditor.prototype.getGui = function() {
  return this.eGui;
}

ValidationCellEditor.prototype.destroy = function() {
  this.eInput.removeEventListener('input', this.inputChanged);
}
