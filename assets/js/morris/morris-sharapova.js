var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'date-graph',
        data: [
          {"month": "2016-06-01", "tweets": 287},
          {"month": "2016-06-02", "tweets": 377},
          {"month": "2016-06-03", "tweets": 252},
          {"month": "2016-06-04", "tweets": 476},
          {"month": "2016-06-05", "tweets": 339},
          {"month": "2016-06-06", "tweets": 31},
          {"month": "2016-06-07", "tweets": 325},
          {"month": "2016-06-08", "tweets": 14505},
          {"month": "2016-06-09", "tweets": 7960},
          {"month": "2016-06-10", "tweets": 2131},
          {"month": "2016-06-11", "tweets": 845},
          {"month": "2016-06-12", "tweets": 355},
          {"month": "2016-06-13", "tweets": 308},
          {"month": "2016-06-14", "tweets": 30},
          {"month": "2016-06-15", "tweets": 1021},
          {"month": "2016-06-16", "tweets": 338},
          {"month": "2016-06-17", "tweets": 229},
          {"month": "2016-06-18", "tweets": 198},
          {"month": "2016-06-19", "tweets": 174},
          {"month": "2016-06-20", "tweets": 340},
          {"month": "2016-06-21", "tweets": 320},
          {"month": "2016-06-22", "tweets": 205},
          {"month": "2016-06-23", "tweets": 198},
          {"month": "2016-06-24", "tweets": 115},
          {"month": "2016-06-25", "tweets": 183},
          {"month": "2016-06-26", "tweets": 339},
          {"month": "2016-06-27", "tweets": 629},
          {"month": "2016-06-28", "tweets": 601},
          {"month": "2016-06-29", "tweets": 508},
          {"month": "2016-06-30", "tweets": 76},
          {"month": "2016-07-01", "tweets": 490},
          {"month": "2016-07-02", "tweets": 426},
          {"month": "2016-07-03", "tweets": 199},
          {"month": "2016-07-04", "tweets": 214},
          {"month": "2016-07-05", "tweets": 269},
          {"month": "2016-07-06", "tweets": 224},
          {"month": "2016-07-07", "tweets": 239},
          {"month": "2016-07-08", "tweets": 251},
          {"month": "2016-07-09", "tweets": 999},
          {"month": "2016-07-10", "tweets": 341},
          {"month": "2016-07-11", "tweets": 1575},
          {"month": "2016-07-12", "tweets": 634},
          {"month": "2016-07-13", "tweets": 277},
          {"month": "2016-07-14", "tweets": 196},
          {"month": "2016-07-15", "tweets": 195},
          {"month": "2016-07-16", "tweets": 148},
          {"month": "2016-07-17", "tweets": 135},
          {"month": "2016-07-18", "tweets": 126},
            {"month": "2016-07-19", "tweets": 122},
            {"month": "2016-07-20", "tweets": 96},
            {"month": "2016-07-21", "tweets": 147},
            {"month": "2016-07-22", "tweets": 112},
            {"month": "2016-07-23", "tweets": 132},
            {"month": "2016-07-24", "tweets": 177},
            {"month": "2016-07-25", "tweets": 175},
            {"month": "2016-07-26", "tweets": 212},
            {"month": "2016-07-27", "tweets": 219},
            {"month": "2016-07-28", "tweets": 178},
            {"month": "2016-07-29", "tweets": 164},
            {"month": "2016-07-30", "tweets": 146},
            {"month": "2016-07-31", "tweets": 19},
            {"month": "2016-08-01", "tweets": 151},
            {"month": "2016-08-02", "tweets": 233},
            {"month": "2016-08-03", "tweets": 203},
            {"month": "2016-08-04", "tweets": 240},
            {"month": "2016-08-05", "tweets": 188},
            {"month": "2016-08-06", "tweets": 233},
            {"month": "2016-08-07", "tweets": 251},
            {"month": "2016-08-08", "tweets": 291},
            {"month": "2016-08-09", "tweets": 308},
            {"month": "2016-08-10", "tweets": 275},
            {"month": "2016-08-11", "tweets": 160},
            {"month": "2016-08-12", "tweets": 231},
            {"month": "2016-08-13", "tweets": 187},
            {"month": "2016-08-14", "tweets": 179},
            {"month": "2016-08-15", "tweets": 366},
            {"month": "2016-08-16", "tweets": 263},
            {"month": "2016-08-17", "tweets": 214},
            {"month": "2016-08-18", "tweets": 184},
            {"month": "2016-08-19", "tweets": 352},
            {"month": "2016-08-20", "tweets": 107},
            {"month": "2016-08-21", "tweets": 164},
            {"month": "2016-08-22", "tweets": 107},
            {"month": "2016-08-23", "tweets": 146},
            {"month": "2016-08-24", "tweets": 130},
            {"month": "2016-08-25", "tweets": 127},
            {"month": "2016-08-26", "tweets": 97},
            {"month": "2016-08-27", "tweets": 112},
            {"month": "2016-08-28", "tweets": 113},
            {"month": "2016-08-29", "tweets": 270},
            {"month": "2016-08-30", "tweets": 39},
            {"month": "2016-08-31", "tweets": 253},
            {"month": "2016-09-01", "tweets": 343},
            {"month": "2016-09-02", "tweets": 264},
            {"month": "2016-09-03", "tweets": 176},
            {"month": "2016-09-04", "tweets": 153},
            {"month": "2016-09-05", "tweets": 159},
            {"month": "2016-09-06", "tweets": 211},
            {"month": "2016-09-07", "tweets": 188},
            {"month": "2016-09-08", "tweets": 210},
            {"month": "2016-09-09", "tweets": 322},
            {"month": "2016-09-10", "tweets": 212},
            {"month": "2016-09-11", "tweets": 202},
            {"month": "2016-09-12", "tweets": 203},
            {"month": "2016-09-13", "tweets": 728},
            {"month": "2016-09-14", "tweets": 490},
            {"month": "2016-09-15", "tweets": 177},
            {"month": "2016-09-16", "tweets": 137},
            {"month": "2016-09-17", "tweets": 120},
            {"month": "2016-09-18", "tweets": 70},
            {"month": "2016-09-19", "tweets": 114},
            {"month": "2016-09-20", "tweets": 138},
            {"month": "2016-09-21", "tweets": 129},
            {"month": "2016-09-22", "tweets": 96},
            {"month": "2016-09-23", "tweets": 109},
            {"month": "2016-09-24", "tweets": 125},
            {"month": "2016-09-25", "tweets": 116},
            {"month": "2016-09-26", "tweets": 95},
            {"month": "2016-09-27", "tweets": 94},
            {"month": "2016-09-28", "tweets": 90},
            {"month": "2016-09-29", "tweets": 95},
            {"month": "2016-09-30", "tweets": 12}




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
          {"month": "2016-06", "anger": 0.0927, "disgust": 0.0004., "fear": 0.0287, "joy": 0.0169, "sadness": 0.0172, "surprise": 0.0149},
          {"month": "2016-07", "anger": 0.0300, "disgust": 0.0005, "fear": 0.0334, "joy": 0.0225, "sadness": 0.0153, "surprise": 0.0193},
            {"month": "2016-08", "anger": 0.0272, "disgust": 0.0007, "fear": 0.0347, "joy": 0.0282, "sadness": 0.0192, "surprise": 0.0142},
            {"month": "2016-09", "anger": 0.0211, "disgust": 0.0007, "fear": 0.0384, "joy": 0.0332, "sadness": 0.0178, "surprise": 0.0293}

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
