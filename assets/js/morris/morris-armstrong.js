var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'date-graph',
        data: [
          {"month": "2013-01-24", "tweets": 1825},
          {"month": "2013-01-25", "tweets": 3102},
          {"month": "2013-01-26", "tweets": 3053},
          {"month": "2013-01-27", "tweets": 2453},
          {"month": "2013-01-28", "tweets": 3206},
          {"month": "2013-01-29", "tweets": 2424},
          {"month": "2013-01-30", "tweets": 2461},
          {"month": "2013-01-31", "tweets": 1869},
          {"month": "2013-02-01", "tweets": 1244},
          {"month": "2013-02-02", "tweets": 758},
          {"month": "2013-02-03", "tweets": 729},
          {"month": "2013-02-04", "tweets": 1242},
          {"month": "2013-02-05", "tweets": 1298},
          {"month": "2013-02-06", "tweets": 2173},
          {"month": "2013-02-07", "tweets": 2817},
          {"month": "2013-02-08", "tweets": 1473},
          {"month": "2013-02-09", "tweets": 651},
          {"month": "2013-02-10", "tweets": 596},
          {"month": "2013-02-11", "tweets": 584},
          {"month": "2013-02-12", "tweets": 956},
          {"month": "2013-02-13", "tweets": 632},
          {"month": "2013-02-14", "tweets": 1064},
          {"month": "2013-02-15", "tweets": 1088},
          {"month": "2013-02-16", "tweets": 677},
          {"month": "2013-02-17", "tweets": 582},
          {"month": "2013-02-18", "tweets": 576},
          {"month": "2013-02-19", "tweets": 599},
          {"month": "2013-02-20", "tweets": 1536},
          {"month": "2013-02-21", "tweets": 1400},
          {"month": "2013-02-22", "tweets": 2407},
          {"month": "2013-02-23", "tweets": 1543},
          {"month": "2013-02-24", "tweets": 434},
          {"month": "2013-02-25", "tweets": 465},
          {"month": "2013-02-26", "tweets": 427},
          {"month": "2013-02-27", "tweets": 304},
          {"month": "2013-02-28", "tweets": 28},
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
        xLabelAngle: 30,
        lineColors: ['#4ECDC4']
      });

        Morris.Bar({
            element: 'sentiment-graph',
            data: [
                {"month": "2013-01", "anger": 0.0508, "disgust": 0.0024, "fear": 0.0349, "joy": 0.0428, "sadness": 0.0184, "surprise": 0.0254},
                {"month": "2013-02", "anger": 0.0316, "disgust": 0.0022, "fear": 0.0456, "joy": 0.0251, "sadness": 0.0209, "surprise": 0.0239}
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
