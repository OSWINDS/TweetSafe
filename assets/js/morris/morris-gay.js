var Script;
Script = function () {

    //morris chart

    $(function () {

        Morris.Line({
            element: 'date-graph',
            data: [
                {"month": "2016-07-01", "tweets": 16},
                {"month": "2016-07-02", "tweets": 23},
                {"month": "2016-07-03", "tweets": 96},
                {"month": "2016-07-04", "tweets": 906},
                {"month": "2016-07-05", "tweets": 282},
                {"month": "2016-07-06", "tweets": 110},
                {"month": "2016-07-07", "tweets": 62},
                {"month": "2016-07-08", "tweets": 35},
                {"month": "2016-07-09", "tweets": 19},
                {"month": "2016-07-10", "tweets": 19},
                {"month": "2016-07-11", "tweets": 25},
                {"month": "2016-07-12", "tweets": 18},
                {"month": "2016-07-13", "tweets": 25},
                {"month": "2016-07-14", "tweets": 11557},
                {"month": "2016-07-15", "tweets": 4993},
                {"month": "2016-07-16", "tweets": 1201},
                {"month": "2016-07-17", "tweets": 395},
                {"month": "2016-07-18", "tweets": 166},
                {"month": "2016-07-19", "tweets": 123},
                {"month": "2016-07-20", "tweets": 65},
                {"month": "2016-07-21", "tweets": 61},
                {"month": "2016-07-22", "tweets": 58},
                {"month": "2016-07-23", "tweets": 64},
                {"month": "2016-07-24", "tweets": 27},
                {"month": "2016-07-25", "tweets": 55},
                {"month": "2016-07-26", "tweets": 75},
                {"month": "2016-07-27", "tweets": 482},
                {"month": "2016-07-28", "tweets": 145},
                {"month": "2016-07-29", "tweets": 49},
                {"month": "2016-07-30", "tweets": 95},
                {"month": "2016-07-31", "tweets": 164},
                {"month": "2016-08-01", "tweets": 78},
                {"month": "2016-08-02", "tweets": 49},
                {"month": "2016-08-03", "tweets": 51},
                {"month": "2016-08-04", "tweets": 22},
                {"month": "2016-08-05", "tweets": 34},
                {"month": "2016-08-06", "tweets": 34},
                {"month": "2016-08-07", "tweets": 22},
                {"month": "2016-08-08", "tweets": 36},
                {"month": "2016-08-09", "tweets": 59},
                {"month": "2016-08-10", "tweets": 151},
                {"month": "2016-08-11", "tweets": 306},
                {"month": "2016-08-12", "tweets": 52},
                {"month": "2016-08-13", "tweets": 32},
                {"month": "2016-08-14", "tweets": 13},
                {"month": "2016-08-15", "tweets": 17},
                {"month": "2016-08-16", "tweets": 33},
                {"month": "2016-08-17", "tweets": 48},
                {"month": "2016-08-18", "tweets": 106},
                {"month": "2016-08-19", "tweets": 14},
                {"month": "2016-08-20", "tweets": 16},
                {"month": "2016-08-21", "tweets": 8},
                {"month": "2016-08-22", "tweets": 6},
                {"month": "2016-08-23", "tweets": 220},
                {"month": "2016-08-24", "tweets": 95},
                {"month": "2016-08-25", "tweets": 40},
                {"month": "2016-08-26", "tweets": 19},
                {"month": "2016-08-27", "tweets": 13},
                {"month": "2016-08-28", "tweets": 18},
                {"month": "2016-08-29", "tweets": 9},
                {"month": "2016-08-30", "tweets": 13},
                {"month": "2016-08-31", "tweets": 13},
                {"month": "2016-09-01", "tweets": 18},
                {"month": "2016-09-02", "tweets": 14},
                {"month": "2016-09-03", "tweets": 7},
                {"month": "2016-09-04", "tweets": 18},
                {"month": "2016-09-05", "tweets": 16},
                {"month": "2016-09-06", "tweets": 9},
                {"month": "2016-09-07", "tweets": 11},
                {"month": "2016-09-08", "tweets": 18},
                {"month": "2016-09-09", "tweets": 14},
                {"month": "2016-09-10", "tweets": 15},
                {"month": "2016-09-11", "tweets": 10},
                {"month": "2016-09-12", "tweets": 8},
                {"month": "2016-09-13", "tweets": 7},
                {"month": "2016-09-14", "tweets": 12},
                {"month": "2016-09-15", "tweets": 11},
                {"month": "2016-09-16", "tweets": 12},
                {"month": "2016-09-17", "tweets": 6},
                {"month": "2016-09-18", "tweets": 5},
                {"month": "2016-09-19", "tweets": 15},
                {"month": "2016-09-20", "tweets": 7},
                {"month": "2016-09-21", "tweets": 8},
                {"month": "2016-09-22", "tweets": 10},
                {"month": "2016-09-23", "tweets": 6},
                {"month": "2016-09-24", "tweets": 5},
                {"month": "2016-09-25", "tweets": 4},
                {"month": "2016-09-26", "tweets": 9},
                {"month": "2016-09-27", "tweets": 10},
                {"month": "2016-09-28", "tweets": 8},
                {"month": "2016-09-29", "tweets": 6},
                {"month": "2016-09-30", "tweets": 5},
                {"month": "2016-10-01", "tweets": 3},
                {"month": "2016-10-02", "tweets": 10},
                {"month": "2016-10-03", "tweets": 5},
                {"month": "2016-10-04", "tweets": 5},
                {"month": "2016-10-05", "tweets": 5},
                {"month": "2016-10-06", "tweets": 2},
                {"month": "2016-10-07", "tweets": 9},
                {"month": "2016-10-08", "tweets": 7},
                {"month": "2016-10-09", "tweets": 5},
                {"month": "2016-10-10", "tweets": 2},
                {"month": "2016-10-11", "tweets": 6},
                {"month": "2016-10-12", "tweets": 4},
                {"month": "2016-10-13", "tweets": 6},
                {"month": "2016-10-14", "tweets": 6},
                {"month": "2016-10-15", "tweets": 8},
                {"month": "2016-10-16", "tweets": 4},
                {"month": "2016-10-17", "tweets": 1},
                {"month": "2016-10-18", "tweets": 6},
                {"month": "2016-10-19", "tweets": 6},
                {"month": "2016-10-20", "tweets": 10},
                {"month": "2016-10-21", "tweets": 3},
                {"month": "2016-10-22", "tweets": 12},
                {"month": "2016-10-23", "tweets": 5},
                {"month": "2016-10-24", "tweets": 11},
                {"month": "2016-10-25", "tweets": 3},
                {"month": "2016-10-26", "tweets": 8},
                {"month": "2016-10-27", "tweets": 5},
                {"month": "2016-10-28", "tweets": 5},
                {"month": "2016-10-29", "tweets": 8},
                {"month": "2016-10-30", "tweets": 3},
                {"month": "2016-10-31", "tweets": 1}
            ],
            xkey: 'month',
            ykeys: ['tweets'],  //,'sentiment','sascore'
            labels: ['Tweets'], //,'Main Sentiment','S.A. Score'
            xLabelFormat: function (x) {
                var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
                var date = x.getDate();
                var month = x.getMonth();
                var year = x.getFullYear();
                return m_names[month] + " " + year;
            },
            xLabelAngle: 45,
            lineColors: ['#4ECDC4']
        });
        Morris.Bar({
            element: 'sentiment-graph',
            data: [
                {"month": "2016-07", "anger": 0.0696, "disgust": 0.0005, "fear": 0.3212, "joy": 0.0117, "sadness": 0.0132, "surprise": 0.0108},
                {"month": "2016-08", "anger": 0.0452, "disgust": 0.0004, "fear": 0.3408, "joy": 0.0138, "sadness": 0.0102, "surprise": 0.0130},
                {"month": "2016-09", "anger": 0.0352, "disgust": 0.0009, "fear": 0.3342, "joy": 0.0164, "sadness": 0.0092, "surprise": 0.0122},
                {"month": "2016-10", "anger": 0.0304, "disgust": 0.0008, "fear": 0.3449, "joy": 0.0287, "sadness": 0.0108, "surprise": 0.0109}

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
