var Script = function () {

    //morris chart

    $(function () {

      Morris.Line({
        element: 'date-graph',
        data: [
            {
                "month": "2007-10",
                "tweets": 161
            },
            {
                "month": "2007-11",
                "tweets": 37
            },
            {
                "month": "2007-12",
                "tweets": 60
            },
            {
                "month": "2008-01",
                "tweets": 186
            },
            {
                "month": "2008-02",
                "tweets": 2
            },
            {
                "month": "2008-03",
                "tweets": 40
            },
            {
                "month": "2008-04",
                "tweets": 32
            },
            {
                "month": "2008-05",
                "tweets": 16
            },
            {
                "month": "2008-06",
                "tweets": 1
            },
            {
                "month": "2008-07",
                "tweets": 38
            },
            {
                "month": "2008-08",
                "tweets": 23
            },
            {
                "month": "2008-09",
                "tweets": 70
            },
            {
                "month": "2008-10",
                "tweets": 96
            },
            {
                "month": "2008-11",
                "tweets": 13
            },
            {
                "month": "2008-12",
                "tweets": 7
            },
            {
                "month": "2009-01",
                "tweets": 7
            },
            {
                "month": "2009-02",
                "tweets": 25
            },
            {
                "month": "2009-03",
                "tweets": 15
            },
            {
                "month": "2009-04",
                "tweets": 35
            },
            {
                "month": "2009-05",
                "tweets": 85
            },
            {
                "month": "2009-06",
                "tweets": 33
            },
            {
                "month": "2009-07",
                "tweets": 73
            },
            {
                "month": "2009-08",
                "tweets": 96
            },
            {
                "month": "2009-09",
                "tweets": 51
            },
            {
                "month": "2009-10",
                "tweets": 68
            },
            {
                "month": "2009-11",
                "tweets": 46
            },
            {
                "month": "2009-12",
                "tweets": 951
            },
            {
                "month": "2010-01",
                "tweets": 100
            },
            {
                "month": "2010-02",
                "tweets": 88
            },
            {
                "month": "2010-03",
                "tweets": 1925
            },
            {
                "month": "2010-04",
                "tweets": 146
            },
            {
                "month": "2010-05",
                "tweets": 1097
            },
            {
                "month": "2010-06",
                "tweets": 216
            },
            {
                "month": "2010-07",
                "tweets": 455
            },
            {
                "month": "2010-08",
                "tweets": 432
            },
            {
                "month": "2010-09",
                "tweets": 219
            },
            {
                "month": "2010-10",
                "tweets": 624
            }
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
            {
                "month": "2007-10",
                "anger": 0.0198,
                "disgust": 0.0,
                "fear": 0.0383,
                "joy": 0.0145,
                "sadness": 0.0502,
                "surprise": 0.0193
            },
            {
                "month": "2007-11",
                "anger": 0.0,
                "disgust": 0.0,
                "fear": 0.0063,
                "joy": 0.0021,
                "sadness": 0.0175,
                "surprise": 0.0
            },
            {
                "month": "2007-12",
                "anger": 0.0159,
                "disgust": 0.0,
                "fear": 0.0066,
                "joy": 0.0202,
                "sadness": 0.0,
                "surprise": 0.0
            },
            {
                "month": "2008-01",
                "anger": 0.0128,
                "disgust": 0.001,
                "fear": 0.0337,
                "joy": 0.0053,
                "sadness": 0.0103,
                "surprise": 0.0042
            },
            {
                "month": "2008-02",
                "anger": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "joy": 0.0,
                "sadness": 0.0,
                "surprise": 0.0
            },
            {
                "month": "2008-03",
                "anger": 0.026,
                "disgust": 0.0,
                "fear": 0.0012,
                "joy": 0.0026,
                "sadness": 0.0102,
                "surprise": 0.0207
            },
            {
                "month": "2008-04",
                "anger": 0.001,
                "disgust": 0.0,
                "fear": 0.0066,
                "joy": 0.0047,
                "sadness": 0.0421,
                "surprise": 0.0187
            },
            {
                "month": "2008-05",
                "anger": 0.0022,
                "disgust": 0.0,
                "fear": 0.0022,
                "joy": 0.006,
                "sadness": 0.1154,
                "surprise": 0.0022
            },
            {
                "month": "2008-06",
                "anger": 0.0,
                "disgust": 0.0,
                "fear": 0.0,
                "joy": 0.0,
                "sadness": 0.0,
                "surprise": 0.0
            },
            {
                "month": "2008-07",
                "anger": 0.0397,
                "disgust": 0.0,
                "fear": 0.0356,
                "joy": 0.0145,
                "sadness": 0.0095,
                "surprise": 0.024
            },
            {
                "month": "2008-08",
                "anger": 0.0194,
                "disgust": 0.0013,
                "fear": 0.0235,
                "joy": 0.0205,
                "sadness": 0.0359,
                "surprise": 0.0187
            },
            {
                "month": "2008-09",
                "anger": 0.0016,
                "disgust": 0.0,
                "fear": 0.0142,
                "joy": 0.0112,
                "sadness": 0.0001,
                "surprise": 0.0
            },
            {
                "month": "2008-10",
                "anger": 0.0086,
                "disgust": 0.0019,
                "fear": 0.0455,
                "joy": 0.0302,
                "sadness": 0.0178,
                "surprise": 0.0146
            },
            {
                "month": "2008-11",
                "anger": 0.009,
                "disgust": 0.0,
                "fear": 0.0159,
                "joy": 0.0,
                "sadness": 0.0015,
                "surprise": 0.002
            },
            {
                "month": "2008-12",
                "anger": 0.0077,
                "disgust": 0.0,
                "fear": 0.036,
                "joy": 0.0592,
                "sadness": 0.0,
                "surprise": 0.0
            },
            {
                "month": "2009-01",
                "anger": 0.0662,
                "disgust": 0.0,
                "fear": 0.0141,
                "joy": 0.1476,
                "sadness": 0.0516,
                "surprise": 0.0
            },
            {
                "month": "2009-02",
                "anger": 0.0528,
                "disgust": 0.0,
                "fear": 0.061,
                "joy": 0.0149,
                "sadness": 0.0438,
                "surprise": 0.009
            },
            {
                "month": "2009-03",
                "anger": 0.0036,
                "disgust": 0.0,
                "fear": 0.0012,
                "joy": 0.0369,
                "sadness": 0.0101,
                "surprise": 0.0028
            },
            {
                "month": "2009-04",
                "anger": 0.048,
                "disgust": 0.0,
                "fear": 0.0188,
                "joy": 0.0146,
                "sadness": 0.0186,
                "surprise": 0.0113
            },
            {
                "month": "2009-05",
                "anger": 0.0282,
                "disgust": 0.0,
                "fear": 0.0228,
                "joy": 0.0187,
                "sadness": 0.0251,
                "surprise": 0.0205
            },
            {
                "month": "2009-06",
                "anger": 0.0044,
                "disgust": 0.0,
                "fear": 0.015,
                "joy": 0.0118,
                "sadness": 0.0031,
                "surprise": 0.0227
            },
            {
                "month": "2009-07",
                "anger": 0.043,
                "disgust": 0.0008,
                "fear": 0.0417,
                "joy": 0.0067,
                "sadness": 0.0218,
                "surprise": 0.0101
            },
            {
                "month": "2009-08",
                "anger": 0.0386,
                "disgust": 0.0004,
                "fear": 0.0564,
                "joy": 0.0193,
                "sadness": 0.0144,
                "surprise": 0.0154
            },
            {
                "month": "2009-09",
                "anger": 0.0127,
                "disgust": 0.0003,
                "fear": 0.0338,
                "joy": 0.0284,
                "sadness": 0.0116,
                "surprise": 0.0218
            },
            {
                "month": "2009-10",
                "anger": 0.0147,
                "disgust": 0.0004,
                "fear": 0.0201,
                "joy": 0.0463,
                "sadness": 0.0159,
                "surprise": 0.0151
            },
            {
                "month": "2009-11",
                "anger": 0.0555,
                "disgust": 0.0,
                "fear": 0.0713,
                "joy": 0.0413,
                "sadness": 0.0063,
                "surprise": 0.0104
            },
            {
                "month": "2009-12",
                "anger": 0.0715,
                "disgust": 0.0005,
                "fear": 0.0281,
                "joy": 0.0638,
                "sadness": 0.016,
                "surprise": 0.0249
            },
            {
                "month": "2010-01",
                "anger": 0.0215,
                "disgust": 0.0035,
                "fear": 0.0468,
                "joy": 0.0336,
                "sadness": 0.008,
                "surprise": 0.0162
            },
            {
                "month": "2010-02",
                "anger": 0.0203,
                "disgust": 0.0009,
                "fear": 0.0508,
                "joy": 0.0505,
                "sadness": 0.0265,
                "surprise": 0.0256
            },
            {
                "month": "2010-03",
                "anger": 0.0628,
                "disgust": 0.0001,
                "fear": 0.0637,
                "joy": 0.0687,
                "sadness": 0.0075,
                "surprise": 0.0098
            },
            {
                "month": "2010-04",
                "anger": 0.0709,
                "disgust": 0.0001,
                "fear": 0.056,
                "joy": 0.0432,
                "sadness": 0.0102,
                "surprise": 0.0109
            },
            {
                "month": "2010-05",
                "anger": 0.0416,
                "disgust": 0.0003,
                "fear": 0.0392,
                "joy": 0.0751,
                "sadness": 0.0123,
                "surprise": 0.016
            },
            {
                "month": "2010-06",
                "anger": 0.042,
                "disgust": 0.0006,
                "fear": 0.0539,
                "joy": 0.0869,
                "sadness": 0.021,
                "surprise": 0.0312
            },
            {
                "month": "2010-07",
                "anger": 0.0317,
                "disgust": 0.0029,
                "fear": 0.0365,
                "joy": 0.1885,
                "sadness": 0.0118,
                "surprise": 0.0155
            },
            {
                "month": "2010-08",
                "anger": 0.0314,
                "disgust": 0.0006,
                "fear": 0.0445,
                "joy": 0.092,
                "sadness": 0.0155,
                "surprise": 0.0214
            },
            {
                "month": "2010-09",
                "anger": 0.0354,
                "disgust": 0.0052,
                "fear": 0.0446,
                "joy": 0.0793,
                "sadness": 0.0174,
                "surprise": 0.0082
            },
            {
                "month": "2010-10",
                "anger": 0.017,
                "disgust": 0.0006,
                "fear": 0.0452,
                "joy": 0.0306,
                "sadness": 0.0248,
                "surprise": 0.0216
            }
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
