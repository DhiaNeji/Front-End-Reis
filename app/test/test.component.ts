import { Component, OnInit } from '@angular/core';
import { AllModules, Module, IDatasource, IGetRowsParams, Grid, GridApi, IServerSideDatasource, IServerSideGetRowsParams } from '@ag-grid-enterprise/all-modules';
import {LicenseManager} from "@ag-grid-enterprise/core";
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
import { ProgressCellRendererComponent } from '../cellRenderers/progress-cell-renderer/progress-cell-renderer.component';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoaderOverlayComponent } from '../overlays/loader-overlay/loader-overlay.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  ngOnInit(){
  }

  private ingf
  public gridApi;
  public gridColumnApi;
  public frameworkComponents;

  public modules: Module[] = AllModules;
  public columnDefs;
  public defaultColDef;
  public rowData;
  public popupParent;

  constructor(private overlay: Overlay) {
    this.columnDefs = [
      {
        field: 'country',
        width: 150,
        chartDataType: 'category',
      },
      {
        field: 'gold',
        chartDataType: 'series',
      },
      {
        field: 'silver',
        chartDataType: 'series',
      },
      {
        field: 'bronze',
        chartDataType: 'series',
      },
      {field:'Progress'
    ,cellRenderer:'ProgressCellRendererComponent'
    }
    ];
    this.defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    };
    this.frameworkComponents = {
     ProgressCellRendererComponent:ProgressCellRendererComponent
    };
    this.rowData = createRowData();
    this.popupParent = document.body;
  }
  showOverlay() {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    overlayRef.attach(new ComponentPortal(LoaderOverlayComponent));
  }
  close()
  {
  }
  onFirstDataRendered(params) {
    var createRangeChartParams = {
      cellRange: {
        rowStartIndex: 0,
        rowEndIndex: 4,
        columns: ['country', 'gold'],
      },
      chartType: 'pie',
    };
    params.api.createRangeChart(createRangeChartParams);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getChartToolbarItems() {
    return ['chartDownload', 'chartData', 'chartSettings'];
  }

  processChartOptions(params) {
    var options = params.options;
    if (params.type === 'pie') {
      options.title = {
        enabled: true,
        text: 'Precious Metals Production',
        fontFamily: 'Verdana, sans-serif',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'rgb(100, 100, 100)',
      };
      options.subtitle = {
        enabled: true,
        text: 'by country',
        fontFamily: 'Verdana, sans-serif',
        fontStyle: 'italic',
        fontWeight: 'bold',
        fontSize: 14,
        color: 'rgb(100, 100, 100)',
      };
      options.padding = {
        top: 25,
        right: 20,
        bottom: 55,
        left: 20,
      };
      options.
      options.legend.enabled = false;
      options.seriesDefaults.label.enabled = true;
      options.seriesDefaults.callout.length = 20;
    }
    return options;
  }
}

function createRowData() {
  var countries = [
    'Step 1',
    'Step 2',
    'Step 3',
  ];
  return countries.map(function(country, index) {
    return {
      country: country,
      gold: Math.floor(((index + 1 / 7) * 333) % 100),
      silver: Math.floor(((index + 1 / 3) * 555) % 100),
      bronze: Math.floor(((index + 1 / 7.3) * 777) % 100),
    };
  });
}
