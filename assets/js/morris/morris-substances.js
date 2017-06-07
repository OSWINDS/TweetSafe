var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'date-graph',
        data: [
          {"month": "2016-05", "tweets": 722},
          {"month": "2016-06", "tweets": 1129},
          {"month": "2016-07", "tweets": 1065},
          {"month": "2016-08", "tweets": 1017},
          {"month": "2016-09", "tweets": 848},
          {"month": "2016-10", "tweets": 926},
          {"month": "2016-11", "tweets": 1303},
          {"month": "2016-12", "tweets": 1142},
          {"month": "2017-01", "tweets": 925},
          {"month": "2017-02", "tweets": 900},
          {"month": "2017-03", "tweets": 984},
          {"month": "2017-04", "tweets": 938},
          {"month": "2017-05", "tweets": 493}
        ],
        xkey: 'month',
        ykeys: ['tweets'],  //,'sentiment','sascore'
        labels: ['Tweets'], //,'Main Sentiment','S.A. Score'
        xLabelFormat: function (x) {
              var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
              var date = x.getDate();
              var month = x.getMonth();
              var year = x.getFullYear();
              return m_names[month] + " " + year; },
        xLabelAngle: 45,
        lineColors: ['#4ECDC4']
      });

      Morris.Line({
        element: 'sentiment-graph',
        data: [
          {"month": "2016-05", "anger": 0.0374, "disgust": 0.0029, "fear": 0.0231, "joy": 0.0075, "sadness": 0.0131, "surprise": 0.0058},
          {"month": "2016-06", "anger": 0.0321, "disgust": 0.0060, "fear": 0.0278, "joy": 0.0126, "sadness": 0.0161, "surprise": 0.0097},
          {"month": "2016-07", "anger": 0.0401, "disgust": 0.0053, "fear": 0.0234, "joy": 0.0099, "sadness": 0.0145, "surprise": 0.0133},
          {"month": "2016-08", "anger": 0.0321, "disgust": 0.0060, "fear": 0.0316, "joy": 0.0120, "sadness": 0.0204, "surprise": 0.0115},
          {"month": "2016-09", "anger": 0.0421, "disgust": 0.0035, "fear": 0.0365, "joy": 0.0122, "sadness": 0.0205, "surprise": 0.0137},
          {"month": "2016-10", "anger": 0.0395, "disgust": 0.0031, "fear": 0.0252, "joy": 0.0168, "sadness": 0.0197, "surprise": 0.0069},
          {"month": "2016-11", "anger": 0.0304, "disgust": 0.0017, "fear": 0.0156, "joy": 0.0135, "sadness": 0.0136, "surprise": 0.0078},
          {"month": "2016-12", "anger": 0.0328, "disgust": 0.0035, "fear": 0.0307, "joy": 0.0126, "sadness": 0.0149, "surprise": 0.0101},
          {"month": "2017-01", "anger": 0.0359, "disgust": 0.0058, "fear": 0.0285, "joy": 0.0134, "sadness": 0.0172, "surprise": 0.0125},
          {"month": "2017-02", "anger": 0.0365, "disgust": 0.0086, "fear": 0.0346, "joy": 0.0089, "sadness": 0.0219, "surprise": 0.0093},
          {"month": "2017-03", "anger": 0.0349, "disgust": 0.0065, "fear": 0.0355, "joy": 0.0131, "sadness": 0.0167, "surprise": 0.0126},
          {"month": "2017-04", "anger": 0.0448, "disgust": 0.0046, "fear": 0.0322, "joy": 0.0136, "sadness": 0.0149, "surprise": 0.0096},
          {"month": "2017-05", "anger": 0.0439, "disgust": 0.0071, "fear": 0.0302, "joy": 0.0191, "sadness": 0.0158, "surprise": 0.0111},
        ],
        xkey: 'month',
        ykeys: ['anger','disgust','fear','joy','sadness','surprise'],
        labels: ['Anger','Disgust','Fear','Joy','Sadness','Surprise'],
        xLabelFormat: function (x) {
              var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
              var date = x.getDate();
              var month = x.getMonth();
              var year = x.getFullYear();
              return m_names[month] + " " + year; },
        xLabelAngle: 45,
        lineColors: ['#ed5565','#ffd777','#ac92ec','#ff865c','#68dff0','#48cfad']
      });

      $('.code-example').each(function (index, el) {
        eval($(el).text());
      });
    });

}();
