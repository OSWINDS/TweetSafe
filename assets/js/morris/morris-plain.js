var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'hero-graph',
        data: [
            {
                "month": "2016-12",
                "tweets": 4874
            },
            {
                "month": "2017-01",
                "tweets": 8343
            },
            {
                "month": "2017-02",
                "tweets": 458
            },
            {
                "month": "2017-03",
                "tweets": 14664
            },
            {
                "month": "2017-04",
                "tweets": 12884
            },
            {
                "month": "2017-05",
                "tweets": 6209
            }
        ],
        xkey: 'month',
        ykeys: ['tweets'],
        labels: ['Tweets'],
        xLabelFormat: function (x) {
              var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun");
              var date = x.getDate();
              var month = x.getMonth();
              var year = x.getFullYear();
              return m_names[month] + " " + year; },
        xLabelAngle: 45,
        lineColors: ['#4ECDC4']
      });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

    Morris.Bar({
      element: 'sentiment-graph',
      data: [
          {
              "month": "2016-12",
              "anger": 0.0303,
              "disgust": 0.0002,
              "fear": 0.0279,
              "joy": 0.0245,
              "sadness": 0.0286,
              "surprise": 0.0603
          },
          {
              "month": "2017-01",
              "anger": 0.0311,
              "disgust": 0.0005,
              "fear": 0.0433,
              "joy": 0.0172,
              "sadness": 0.0239,
              "surprise": 0.0359
          },
          {
              "month": "2017-02",
              "anger": 0.0217,
              "disgust": 0.0034,
              "fear": 0.055,
              "joy": 0.0252,
              "sadness": 0.013,
              "surprise": 0.0369
          },
          {
              "month": "2017-03",
              "anger": 0.0361,
              "disgust": 0.0008,
              "fear": 0.0502,
              "joy": 0.0205,
              "sadness": 0.0224,
              "surprise": 0.0241
          },
          {
              "month": "2017-04",
              "anger": 0.042,
              "disgust": 0.0013,
              "fear": 0.0381,
              "joy": 0.028,
              "sadness": 0.022,
              "surprise": 0.0203
          },
          {
              "month": "2017-05",
              "anger": 0.0439,
              "disgust": 0.0008,
              "fear": 0.0407,
              "joy": 0.0218,
              "sadness": 0.02,
              "surprise": 0.0188
          }
      ],
      xkey: 'month',
      ykeys: ['anger','disgust','fear','joy','sadness','surprise'],
      labels: ['Anger','Disgust','Fear','Joy','Sadness','Surprise'],
      barColors: ['#ed5565','#ffd777','#ac92ec','#ff865c','#68dff0','#48cfad']
  });

    $('.code-example').each(function (index, el) {
      eval($(el).text());
    });

}();
