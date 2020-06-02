import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent implements OnInit {
  public options: any;
  public options2: any;
  public options3:any
  public options4:any
  public options5:any
  public cleaning_count=0
  public customers_count=0
  public err_data_count=0
  public edited_data_count=0
  public ignored_data_length=0
  public data = [
    { religion: 'Christian', population: 4159000 },
    { religion: 'Buddhist', population: 97000 },
    { religion: 'Hindu', population: 456000 },
    { religion: 'Jewish', population: 168000 },
    { religion: 'Muslim', population: 1215000 },
    { religion: 'Sikh', population: 123000 },
    { religion: 'Other', population: 174000 },
    { religion: 'None', population: 2274000 },
  ];
  constructor(private service:ServiceService) {
    this.options2={}
   this.options={
    title: {
      text: 'Repartition des données erronées durant la derniere nettoyage',
      fontSize: 15,
    },
    subtitle: { text: 'Source: Office for National Statistics' },
    series: [
      {
        data: this.data,
        type: 'pie',
        labelKey: 'religion',
        angleKey: 'population',
        label: { minAngle: 0 },
        callout: { strokeWidth: 2 },
        fills: [
          '#febe76',
          '#ff7979',
          '#badc58',
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

  this.options5 = {
    data:{},
    title: {
      text: 'Punch Card of Github',
      fontSize: 18,
    },
    subtitle: { text: 'time distribution of commits' },
    series: [
      {
        type: 'scatter',
        xKey: 'id',
        xName: 'Etape',
        yKey: 'data_collection_id',
        yName: 'Nettoyage',
        sizeKey: 'data_length',
        sizeName: 'Lignes corrigées',
        title: 'Lignes corrigées',
        marker: {
          size: 30,
          minSize: 8,
        },
        fill: '#cc5b58',
        fillOpacity: 1,
      },
    ],
    axes: [
      {
        position: 'bottom',
        type: 'category',
        gridStyle: [
          {
            stroke: 'rgba(0,0,0,0.2)',
            lineDash: [0, 2, 0],
          },
        ],
        tick: { color: 'black' },
        line: { color: undefined },
      },
      {
        position: 'left',
        type: 'category',
        gridStyle: [],
        tick: { color: 'black' },
        line: { color: undefined },
      },
    ],
    legend: { enabled: false },
  };
  this.options2 =  {
    title: {
      text: 'Repartition durant la derniere nettoyage',
      fontSize: 15,
    },
    subtitle: { text: 'Source: Office for National Statistics' },
    series: [
      {
        data:this.data,
        type: 'pie',
        labelKey: 'id',
        angleKey: 'data_length',
        label: { minAngle: 0 },
        callout: { strokeWidth: 2 },
        fills: [
          '#febe76',
          '#ff7979',
          '#badc58',
          '#f9ca23',
          '#f0932b',
          '#eb4c4b',
          '#6ab04c',
          '#7ed6df',
          '#58969c',
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

  this.options3 = {
    data: {},
    title: {
      text: 'Regular Internet Users',
      fontSize: 18,
    },
    subtitle: { text: 'Source: Office for National Statistics' },
    series: [
      {
        type: 'column',
        xKey: 'year',
        yKeys: ['16-24', '25-34', '35-44', '45-54', '55-64', '65-74', '75+'],
        grouped: true,
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
      },
      {
        type: 'number',
        position: 'left',
        label: {
          formatter: function(params) {
            return params.value / 1000 + 'M';
          },
        },
      },
    ],
  };
  this.options4 = {
    data: {},
  title: {
    text: 'Internet Users by Geographical Location (2019)',
    fontSize: 18,
  },
  subtitle: { text: 'Source: Office for National Statistics' },
  series: [
    {
      type: 'bar',
      xKey: 'id',
      yKeys: ['duplicates_data_length', 'edited_duplicates_length', 'deleted_data_length'],
      yNames: [
        'Used in last 3 months',
        'Used over 3 months ago',
        'Never used',
      ],
      fills: ['#00c851', '#ffbb33', '#ff4444'],
      strokes: ['#006428', '#996500', '#a10000'],
      normalizedTo: 100,
    },
  ],
  axes: [
    {
      type: 'category',
      position: 'left',
      label: { rotation: -30 },
    },
    {
      type: 'number',
      position: 'bottom',
      label: {
        formatter: function(params) {
          return params.value + '%';
        },
      },
    },
  ],
  };
  this.service.getReporting().subscribe(res=>{
    this.cleaning_count=res.data_collection_count
    this.customers_count=res.customers_count
    this.err_data_count=res.err_data_count
    this.edited_data_count=res.edited_data_count
    this.ignored_data_length=res.ignored_data_count
  this.options5 = {
      data:res.last_cleaning_progress,
      title: {
        text: 'Lignes erronées par nettoyage',
        fontSize: 18,
      },
      subtitle: { text: '' },
      series: [
        {
          type: 'scatter',
          xKey: 'id',
          xName: 'Etape',
          yKey: 'data_collection_id',
          yName: 'Nettoyage',
          sizeKey: 'data_length',
          sizeName: 'Lignes erronées',
          title: 'Lignes erronées',
          marker: {
            size: 30,
            minSize: 8,
          },
          fill: '#cc5b58',
          fillOpacity: 1,
        },
      ],
      axes: [
        {
          position: 'bottom',
          type: 'category',
          gridStyle: [
            {
              stroke: 'rgba(0,0,0,0.2)',
              lineDash: [0, 2, 0],
            },
          ],
          tick: { color: 'black' },
          line: { color: undefined },
        },
        {
          position: 'left',
          type: 'category',
          gridStyle: [],
          tick: { color: 'black' },
          line: { color: undefined },
        },
      ],
      legend: { enabled: false },
    };
      this.options =  {
        title: {
          text: 'Lignes erronées au total',
          fontSize: 15,
        },
        subtitle: { text: '' },
        series: [
          {
            data:res.last_cleaning_edited_ignored_data,
            type: 'pie',
            labelKey: 'id',
            angleKey: 'data_length',
            label: { minAngle: 0 },
            callout: { strokeWidth: 2 },
            fills: [
              '#febe76',
              '#ff7979',
              '#badc58',
              '#f9ca23',
              '#f0932b',
              '#eb4c4b',
              '#6ab04c',
              '#7ed6df',
              '#58969c',
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
      this.options2 =  {
        title: {
          text: 'Lignes corrigées au total',
          fontSize: 15,
        },
        subtitle: { text: '' },
        series: [
          {
            data:res.last_cleaning_edited_ignored_data,
            type: 'pie',
            labelKey: 'id',
            angleKey: 'edited_data_length',
            label: { minAngle: 0 },
            callout: { strokeWidth: 2 },
            fills: [
              '#febe76',
              '#ff7979',
              '#badc58',
              '#f9ca23',
              '#f0932b',
              '#eb4c4b',
              '#6ab04c',
              '#7ed6df',
              '#58969c',
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

      this.options3 = {
        data: res.last_cleaning_edited_ignored_data,
        title: {
          text: 'Traitement par étapes',
          fontSize: 18,
        },
        subtitle: { text: '' },
        series: [
          {
            type: 'column',
            xKey: 'id',
            yKeys: ['data_length', 'edited_data_length','ignored_data_length'],
            grouped: true,
          },
        ],
        axes: [
          {
            type: 'category',
            position: 'bottom',
          },
          {
            type: 'number',
            position: 'left',
            label: {
              formatter: function(params) {
                return params.value;
              },
            },
          },
        ],
      };
      this.options4 = {
        data: res.last_cleaning_err_data,
      title: {
        text: 'Duplications par étape',
        fontSize: 18,
      },
      subtitle: { text: '' },
      series: [
        {
          type: 'bar',
          xKey: 'id',
          yKeys: ['duplicates_data_length', 'edited_duplicates_length', 'deleted_data_length'],
          yNames: [
            'Dublons',
            'Dublons traités',
            'Lignes retirées',
          ],
          fills: ['#00c851', '#ffbb33', '#ff4444'],
          strokes: ['#006428', '#996500', '#a10000'],
          normalizedTo: 100,
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'left',
          label: { rotation: -30 },
        },
        {
          type: 'number',
          position: 'bottom',
          label: {
            formatter: function(params) {
              return params.value + '%';
            },
          },
        },
      ],
      };

    })

    }

  ngOnInit(): void {
  }

}
