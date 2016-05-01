// hay que meter: import Highcharts from 'highcharts'; cada vez que usas Highcharts
import Highcharts from 'highcharts';
import Highcharts3d from 'highcharts-3d'; //NO FUNCIONA DESGRACIADAMENTE AÚN

Template.grafica.helpers({
    graficaPorCantidadDeTareas: function () {
      // Gather data:
      var timeUnitsPriorityHigh = TimeUnits.find({priority: 'high'}).count();
      var timeUnitsPriorityMedium = TimeUnits.find({priority: 'medium'}).count();
      var timeUnitsPriorityLow = TimeUnits.find({priority: 'low'}).count();

      var timeUnitsData = [{
          y: timeUnitsPriorityHigh,
          color: '#e68f8d',
          name: "High"
       }, {
          y: timeUnitsPriorityMedium,
          color: '#f5ca8c',
          name: "Medium"
        }, {
          y: timeUnitsPriorityLow,
          color: '#95d6e9',
          name: "Low"
       }];

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart-por-cantidad', {
          title: {
              text: 'TimeUnits Count'
          },
          subtitle: {
              text: 'Number of Tasks by priority'
          },
          series: [{
            type: 'pie',
            name: 'TimeUnits Count',
            data: timeUnitsData
          }]
        });
      });
    },
    graficaPorMinutosDeTareas: function () {
      // Gather data:
      var timeUnitsPriorityHigh = 0;
      var cursor = TimeUnits.find({priority: 'high'}).fetch();
      for(var i=0; i<cursor.length ; i++){
        timeUnitsPriorityHigh += parseInt(cursor[i].minutes);
      }
      var timeUnitsPriorityMedium = 0;
      var cursor = TimeUnits.find({priority: 'medium'}).fetch();
      for(var i=0; i<cursor.length ; i++){
        timeUnitsPriorityMedium += parseInt(cursor[i].minutes);
      }

      var timeUnitsPriorityLow = 0;
      var cursor = TimeUnits.find({priority: 'low'}).fetch();
      for(var i=0; i<cursor.length ; i++){
        timeUnitsPriorityLow += parseInt(cursor[i].minutes);
      }


      var timeUnitsData = [{
          y: timeUnitsPriorityHigh,
          color: '#e68f8d',
          name: "High"
       }, {
          y: timeUnitsPriorityMedium,
          color: '#f5ca8c',
          name: "Medium"
        }, {
          y: timeUnitsPriorityLow,
          color: '#95d6e9',
          name: "Low"
       }];

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts.chart('chart-por-minutos', {
          title: {
              text: 'TimeUnits Minutes'
          },
          subtitle: {
              text: 'Minutes devoted to each Task by priority'
          },
          series: [{
            type: 'pie',
            name: 'TimeUnits Minutes',
            data: timeUnitsData
          }]
        });
      });
    },
    graficaPorMinutosDeTareas3D: function () {
      // Gather data:
      var timeUnitsPriorityHigh = 0;
      var cursor = TimeUnits.find({priority: 'high'}).fetch();
      for(var i=0; i<cursor.length ; i++){
        timeUnitsPriorityHigh += parseInt(cursor[i].minutes);
      }
      var timeUnitsPriorityMedium = 0;
      var cursor = TimeUnits.find({priority: 'medium'}).fetch();
      for(var i=0; i<cursor.length ; i++){
        timeUnitsPriorityMedium += parseInt(cursor[i].minutes);
      }

      var timeUnitsPriorityLow = 0;
      var cursor = TimeUnits.find({priority: 'low'}).fetch();
      for(var i=0; i<cursor.length ; i++){
        timeUnitsPriorityLow += parseInt(cursor[i].minutes);
      }


      var timeUnitsData = [{
          y: timeUnitsPriorityHigh,
          name: "High"
       }, {
          y: timeUnitsPriorityMedium,
          name: "Medium"
        }, {
          y: timeUnitsPriorityLow,
          name: "Low"
       }];

      // Use Meteor.defer() to craete chart after DOM is ready:
      Meteor.defer(function() {
        // Create standard Highcharts chart with options:
        Highcharts3d.chart('chart-por-minutos-3D', {
          chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
          },
          title: {
              text: 'TimeUnits Minutes'
          },
          subtitle: {
              text: 'Minutes devoted to each Task by priority'
          },
          plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
          },
          series: [{
            type: 'pie',
            name: 'TimeUnits Minutes',
            data: timeUnitsData
          }]
        });
      });
    }
});
