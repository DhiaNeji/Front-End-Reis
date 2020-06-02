import { Component, OnInit } from '@angular/core';
import { AllModules,GridApi, Module, GridOptions, IServerSideDatasource, IServerSideGetRowsParams } from '@ag-grid-enterprise/all-modules';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-correction-carte-sejour',
  templateUrl: './correction-carte-sejour.component.html',
  styleUrls: ['./correction-carte-sejour.component.scss']
})
export class CorrectionCarteSejourComponent implements OnInit {
  ngOnInit(){
  }
  public gridApi:GridApi;
  public gridColumnApi;
  public edited_data_length;
  public modules: Module[] = AllModules;
  public columnDefs;
  public overlayLoadingTemplate
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
  public Length
  rowStyle
  getRowStyle
  isRowSelectable
  isErroneousNations
  isSearching
  public autoGroupColumnDef;
  public components;
  public options2
  public isFinished
  constructor(private toastr:ToastrService,private service:ServiceService) {
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
    this.service.getProgcess("3").subscribe(res=>{
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
    this.columnDefs = [
      {

        field: 'id',
        maxWidth: 75,
        hide:true
      },
      {
        field: 'nid',
       editable:true,
        cellEditor: ValidationCellEditor,
      },
      {
        field: 'first_name',
        headerName:'Nom',
        minWidth: 200,
      },
      {
        field: 'last_name',
        headerName:'Prenom',
        minWidth: 200,
      },
      {
        field: 'birthdate',
        headerName:'Date de naissance',
        minWidth: 200,
      },
      {
        field: 'step_3',
        minWidth: 200,
        hide:true
      },
      {
        field:'Ne pas traiter',
        checkboxSelection:true,
        selectable:true
      }
    ];
    this.defaultColDef = {
      flex: 1,
      minWidth: 90,
      resizable: true,
    };
    this.overlayLoadingTemplate='<span class="ag-overlay-loading-center">Mise à jour en cours</span>';
    this.rowModelType = 'serverSide';
    this.paginationPageSize = 4;
    this.cacheBlockSize = 4;
    this.maxBlocksInCache=1;
    this.rowSelection='multiple';

  this.getRowNodeId = function(data) {
    return data.id;
  };
  this.getRowStyle= function(params) {
    if(params.data!=null)
   {
    if (params.data.step_3=='false') {
        return { 'pointer-events': 'none', opacity: '1',background: '#FFEEBC' }
    }
    else
    {
      var s:string=params.data.nid
      var Regex=RegExp('^[a-zA-Z0-9]{6,13}$')
       if(!Regex.test(s))
        return {background: '#F6C5C9'};
      else
      return {'pointer-events': 'none', opacity: '1',background: '#DFF0D8'};
    }
  }
}
}

  dataSource:IServerSideDatasource={
    getRows:(params:IServerSideGetRowsParams)=>{
      this.service.get_data("3",params.request.startRow,params.request.endRow).subscribe(response=>{
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
    this.gridApi.showLoadingOverlay()
    this.toastr.info("Mise à jour en cours")
    this.service.update_data("3",event.data,event.rowIndex).subscribe(res=>{
      this.edited_data_length=res
      this.toastr.success("Mise à jour effectuée avec succès")
      this.service.getProgcess("3").subscribe(res=>{
        this.gridApi.hideOverlay()
        if(res.data_length-(res.edited_data_length+res.ignored_data_length)==0)
        {
          this.toastr.success("Etape terminée,vous pouvez passer à l'étape suivante !","Etape terminée")
          this.isFinished=true
        }
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
    },error=>{
        this.toastr.error("Mise à jour echouée")
      })  }
onChangeSelection()
{
}
rowSelectedHandler($event)
{
  this.gridApi.getRowNode($event.data.id).setSelected(true)
  this.gridApi.getRowNode($event.data.id).setDataValue('step_3','false')
}
prepareData(){
  this.toastr.toastrConfig.positionClass='toast-bottom-right'
  this.isSearching=true
  this.toastr.info("Fetching data from the Server!<div class='spinner-grow text-light' role='status'>",'Fetcing',{
    enableHtml:true
  })
  this.service.clear().subscribe(res=>{
  this.service.prepare_data("6").then(data=>{
  this.toastr.clear()
  this.toastr.success("data ready","done")
  this.isSearching=false
  this.isErroneousNations=true
})})
}
clear()
{

}
}
function ValidationCellEditor(xxx) {}
ValidationCellEditor.prototype.init = function(params) {
  this.nationality=params.data.nationality
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
      var Regex=RegExp('^[a-zA-Z0-9]{6,13}$')
      return Regex.test(value)
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
