function openNav() {
    document.getElementById("mySidemenu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidemenu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  
  var chart = AmCharts.makeChart( "chartdiv1", {
    "type": "pie",
    "theme": "none",
    "dataProvider": [ {
      "country": "USA",
      "litres": 3312.017
    }, {
      "country": "Brazil",
      "litres": 3247.610
    }, {
      "country": "Índia",
      "litres": 2970.492
    }, {
      "country": "Russía",
      "litres": 826.935
    }, {
      "country": "Peru",
      "litres": 480.177
    }, {
      "country": "Colômbia",
      "litres": 489.151
    } ],
    "valueField": "litres",
    "titleField": "country",
     "balloon":{
     "fixedPosition":true
    },
    "export": {
      "enabled": true
    }
  } );
  
  var chart = AmCharts.makeChart( "chartdiv2", {
    "type": "pie",
    "theme": "light",
    "dataProvider": [ {
      "country": "USA",
      "litres": 189272
    }, {
      "country": "Brazil",
      "litres": 124614
    }, {
      "country": "Índia",
      "litres": 67.376
    }, {
      "country": "Russía",
      "litres": 17.528
    }, {
      "country": "Peru",
      "litres": 29.259
    }, {
      "country": "Colômbia",
      "litres": 20.618
    } ],
    "valueField": "litres",
    "titleField": "country",
     "balloon":{
     "fixedPosition":true
    },
    "export": {
      "enabled": true
    }
  } );
  
  var chart = AmCharts.makeChart("chartdiv3", {
    "type": "serial",
    "theme": "none",
    "marginRight": 70,
    "dataProvider": [{
      "country": "USA",
      "visits": 6239947,
      "color": "#FF0F00"
    }, {
      "country": "Brazil",
      "visits": 4041638,
      "color": "#FF6600"
    }, {
      "country": "Índia",
      "visits": 3853406,
      "color": "#FF9E01"
    }, {
      "country": "Russía",
      "visits": 1009995,
      "color": "#FCD202"
    }, {
      "country": "Peru",
      "visits": 663437,
      "color": "#F8FF01"
    }, {
      "country": "Colômbia",
      "visits": 641574,
      "color": "#B0DE09"
    }],
    "valueAxes": [{
      "axisAlpha": 0,
      "position": "left",
      "title": ""
    }],
    "startDuration": 1,
    "graphs": [{
      "balloonText": "<b>[[category]]: [[value]]</b>",
      "fillColorsField": "color",
      "fillAlphas": 0.9,
      "lineAlpha": 0.2,
      "type": "column",
      "valueField": "visits"
    }],
    "chartCursor": {
      "categoryBalloonEnabled": false,
      "cursorAlpha": 0,
      "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
      "gridPosition": "start",
      "labelRotation": 45
    },
    "export": {
      "enabled": true
    }
  
  });