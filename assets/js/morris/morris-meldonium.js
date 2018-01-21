var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'date-graph',
        data: [
          {"month": "2016-06-01", "tweets": 45},
          {"month": "2016-06-02", "tweets": 28},
          {"month": "2016-06-03", "tweets": 35},
          {"month": "2016-06-04", "tweets": 41},
          {"month": "2016-06-05", "tweets": 31},
          {"month": "2016-06-06", "tweets": 38},
          {"month": "2016-06-07", "tweets": 45},
          {"month": "2016-06-08", "tweets": 2173},
          {"month": "2016-06-09", "tweets": 993},
          {"month": "2016-06-10", "tweets": 250},
          {"month": "2016-06-11", "tweets": 212},
          {"month": "2016-06-12", "tweets": 64},
          {"month": "2016-06-13", "tweets": 41},
          {"month": "2016-06-14", "tweets": 63},
          {"month": "2016-06-15", "tweets": 90},
          {"month": "2016-06-16", "tweets": 55},
          {"month": "2016-06-17", "tweets": 63},
          {"month": "2016-06-18", "tweets": 43},
          {"month": "2016-06-19", "tweets": 44},
          {"month": "2016-06-20", "tweets": 119},
          {"month": "2016-06-21", "tweets": 63},
          {"month": "2016-06-22", "tweets": 43},
          {"month": "2016-06-23", "tweets": 38},
          {"month": "2016-06-24", "tweets": 60},
          {"month": "2016-06-25", "tweets": 37},
          {"month": "2016-06-26", "tweets": 35},
          {"month": "2016-06-27", "tweets": 41},
          {"month": "2016-06-28", "tweets": 33},
          {"month": "2016-06-29", "tweets": 36},
          {"month": "2016-06-30", "tweets": 43},
          {"month": "2016-07-01", "tweets": 105},
          {"month": "2016-07-02", "tweets": 98},
          {"month": "2016-07-03", "tweets": 42},
          {"month": "2016-07-04", "tweets": 33},
          {"month": "2016-07-05", "tweets": 38},
          {"month": "2016-07-06", "tweets": 98},
          {"month": "2016-07-07", "tweets": 68},
          {"month": "2016-07-08", "tweets": 30},
          {"month": "2016-07-09", "tweets": 36},
          {"month": "2016-07-10", "tweets": 22},
          {"month": "2016-07-11", "tweets": 39},
          {"month": "2016-07-12", "tweets": 71},
          {"month": "2016-07-13", "tweets": 54},
          {"month": "2016-07-14", "tweets": 74},
          {"month": "2016-07-15", "tweets": 33},
          {"month": "2016-07-16", "tweets": 25},
          {"month": "2016-07-17", "tweets": 42},
          {"month": "2016-07-18", "tweets": 56},
          {"month": "2016-07-19", "tweets": 46},
          {"month": "2016-07-20", "tweets": 26},
          {"month": "2016-07-21", "tweets": 32},
          {"month": "2016-07-22", "tweets": 43},
          {"month": "2016-07-23", "tweets": 30},
          {"month": "2016-07-24", "tweets": 51},
          {"month": "2016-07-25", "tweets": 30},
          {"month": "2016-07-26", "tweets": 30},
          {"month": "2016-07-27", "tweets": 45},
          {"month": "2016-07-28", "tweets": 36},
          {"month": "2016-07-29", "tweets": 25},
          {"month": "2016-07-30", "tweets": 48},
          {"month": "2016-07-31", "tweets": 19},
          {"month": "2016-08-01", "tweets": 5}
        ],
        xkey: 'month',
        ykeys: ['tweets'],  //,'sentiment','sascore'
        labels: ['Tweets'], //,'Main Sentiment','S.A. Score'
        xLabelFormat: function (x) {
              var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
              var date = x.getDate();
              var month = x.getMonth();
              var year = x.getFullYear();
              return date + " " + m_names[month] + " " + year; },
        xLabelAngle: 45,
        lineColors: ['#4ECDC4']
      });

      Morris.Bar({
        element: 'sentiment-graph',
        data: [
          {"month": "2016-06", "anger": 0.0505, "disgust": 0.0017, "fear": 0.0254, "joy": 0.0136, "sadness": 0.0133, "surprise": 0.0173},
          {"month": "2016-07", "anger": 0.0429, "disgust": 0.0028, "fear": 0.0436, "joy": 0.0130, "sadness": 0.0082, "surprise": 0.0189},
          {"month": "2016-08", "anger": 0.1672, "disgust": 0.0000, "fear": 0.0000, "joy": 0.0116, "sadness": 0.0116, "surprise": 0.1958},
        ],
        xkey: 'month',
        ykeys: ['anger','disgust','fear','joy','sadness','surprise'],
        labels: ['Anger','Disgust','Fear','Joy','Sadness','Surprise'],
        barColors: ['#ed5565','#ffd777','#ac92ec','#ff865c','#68dff0','#48cfad']
      });




      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();
