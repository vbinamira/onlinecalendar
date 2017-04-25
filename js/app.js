//==============
//  CALENDAR
//==============  
//
//** There are three different sources because of the three shows
$('#calendar').fullCalendar({
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  },
  eventSources: [
    {
      events: function(start,end,timezone,callback) {
        $.ajax({
          url: 'api/get-shows.php',
        })
        .done(function(data) {
          var zombies = [];
          var ms = $.parseJSON(data);
          var mikerowes = ms.rows;
          // Set limit here (1 - 3 months)
          for (var i = 0; i < 90; i++) 
          {
            var chells = mikerowes[i].cells;
            var dates = chells[0].value;
            var zombienum = chells[27].value;
            var zombietime = chells[28].value;
            var zombie_act_one = chells[29].value;
            var zombie_act_two = chells[30].value;
            var today = moment().format('ll');
            if(dates !="Invalid date") {
              if(zombietime == '8:30 & 10')
              {
                var first_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                var second_date = moment(new Date(dates)).hour(22).minute(00).format('LLL');
                zombies.push(
                {
                  start:first_date, 
                  title: "Zombie Burlesque",
                  zombie_shows: zombienum,
                  zombie_showtimes: zombietime,
                  zombieact_one: zombie_act_one,
                  zombieact_two: zombie_act_two
                });
                zombies.push(
                {
                  start:second_date, 
                  title: "Zombie Burlesque",
                  zombie_shows: zombienum,
                  zombie_showtimes: zombietime,
                  zombieact_one: zombie_act_one,
                  zombieact_two: zombie_act_two
                });
              }
              else if(zombietime == '8:30')
              {
                var first_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                zombies.push(
                {
                  start:first_date, 
                  title: "Zombie Burlesque",
                  zombie_shows: zombienum,
                  zombie_showtimes: zombietime,
                  zombieact_one: zombie_act_one,
                  zombieact_two: zombie_act_two
                });
              }
              else if(zombietime == '10')
              {
                var first_date = moment(new Date(dates)).hour(22).minute(00).format('LLL');
                zombies.push(
                {
                  start:first_date, 
                  title: "Zombie Burlesque",
                  zombie_shows: zombienum,
                  zombie_showtimes: zombietime,
                  zombieact_one: zombie_act_one,
                  zombieact_two: zombie_act_two
                });
              }
              else
              {
                var first_date = 'none';
              }
            }      
          }
          callback(zombies);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      },
      color: "darkgreen",
      textColor: "yellow"
    },
    {
      events: function(start,end,timezone,callback) {
        $.ajax({
          url: 'api/get-shows.php',
        })
        .done(function(data) {
          var vegastheshow = [];
          var ms = $.parseJSON(data);
          var mikerowes = ms.rows;
          // Set limit here (1 - 3 months)
          for (var i = 0; i < 90; i++) 
          {
            var chells = mikerowes[i].cells;
            var dates = chells[0].value;
            var vegasnum = chells[21].value;
            var vegastime = chells[22].value;
            var vegas_act_one = chells[23].value;
            var vegas_act_two = chells[24].value;
            var vegas_act_three = chells[25].value;
            if(dates !="Invalid date" ) {
              if(vegastime == '7 & 9')
              {
                var first_date = moment(new Date(dates)).hour(19).minute(00).format('LLL');
                var second_date = moment(new Date(dates)).hour(21).minute(00).format('LLL');
                vegastheshow.push(
                {
                  start:first_date, 
                  title: "Vegas the Show",
                  vegas_shows: vegasnum,
                  vegas_showtimes: vegastime,
                  vegasact_one: vegas_act_one,
                  vegasact_two: vegas_act_two,
                  vegasact_three: vegas_act_three
                });
                vegastheshow.push(
                {
                  start:second_date, 
                  title: "Vegas the Show",
                  vegas_shows: vegasnum,
                  vegas_showtimes: vegastime,
                  vegasact_one: vegas_act_one,
                  vegasact_two: vegas_act_two,
                  vegasact_three: vegas_act_three
                });
              }
              else if(vegastime == '7')
              {
                var first_date = moment(new Date(dates)).hour(19).minute(00).format('LLL');
                vegastheshow.push(
                {
                  start:first_date, 
                  title: "Vegas the Show",
                  vegas_shows: vegasnum,
                  vegas_showtimes: vegastime,
                  vegasact_one: vegas_act_one,
                  vegasact_two: vegas_act_two,
                  vegasact_three: vegas_act_three
                });
              }
              else if(vegastime == '9')
              {
                var first_date = moment(new Date(dates)).hour(21).minute(00).format('LLL');
                vegastheshow.push(
                {
                  start:first_date, 
                  title: "Vegas the Show",
                  vegas_shows: vegasnum,
                  vegas_showtimes: vegastime,
                  vegasact_one: vegas_act_one,
                  vegasact_two: vegas_act_two,
                  vegasact_three: vegas_act_three
                });
              }
              else
              {
                var first_date = 'none';
              }
              // Push all variables in an array
            }      
          }
          callback(vegastheshow);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      },
      color: "purple",
      textColor: "white"
    },
    {
      events: function(start,end,timezone,callback) {
        $.ajax({
          url: 'api/get-shows.php',
        })
        .done(function(data) {
          var vtheshow = [];
          var ms = $.parseJSON(data);
          var mikerowes = ms.rows;
          // Set limit here (1 - 3 months)
          for (var i = 0; i < 90; i++) 
          {
            var chells = mikerowes[i].cells;
            var dates = chells[0].value;
            var v_showsno = chells[2].value;
            var vshowtime = chells[3].value;
            var v_cast_one = chells[4].value;
            var v_cast_two = chells[5].value;
            var v_cast_three = chells[6].value;
            var v_cast_four = chells[7].value;
            var v_cast_five = chells[8].value;
            var v_cast_six = chells[9].value;
            var v_cast_seven = chells[10].value;
            var v_cast_eight = chells[11].value;
            var v_cast_nine = chells[12].value;
            var v_cast_ten = chells[13].value;
            var v_cast_eleven = chells[14].value;
            var v_cast_twelve = chells[15].value;
            var v_cast_thirteen = chells[16].value;
            var v_cast_fourteen = chells[17].value;
            var v_cast_fifteen = chells[18].value;
            if(dates !="Invalid date" ) {
              if(vshowtime == '7 & 8:30')
              {
                var first_date = moment(new Date(dates)).hour(19).minute(00).format('LLL');
                var second_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                vtheshow.push(
                {
                  start:first_date, 
                  title: "V - The Ultimate Variety Show",
                  v_shows: v_showsno,
                  v_showtimes: vshowtime,
                  vcast_one: v_cast_one,
                  vcast_two: v_cast_two,
                  vcast_three: v_cast_three,
                  vcast_four: v_cast_four,
                  vcast_five: v_cast_five,
                  vcast_six: v_cast_six,
                  vcast_seven: v_cast_seven,
                  vcast_eight: v_cast_eight,
                  vcast_nine: v_cast_nine,
                  vcast_ten: v_cast_ten,
                  vcast_eleven: v_cast_eleven,
                  vcast_twelve: v_cast_twelve,
                  vcast_thirteen: v_cast_thirteen,
                  vcast_fourteen: v_cast_fourteen,
                  vcast_fifteen: v_cast_fifteen
                });
                vtheshow.push(
                {
                  start:second_date, 
                  title: "V - The Ultimate Variety Show",
                  v_shows: v_showsno,
                  v_showtimes: vshowtime, 
                  vcast_one: v_cast_one,
                  vcast_two: v_cast_two,
                  vcast_three: v_cast_three,
                  vcast_four: v_cast_four,
                  vcast_five: v_cast_five,
                  vcast_six: v_cast_six,
                  vcast_seven: v_cast_seven,
                  vcast_eight: v_cast_eight,
                  vcast_nine: v_cast_nine,
                  vcast_ten: v_cast_ten,
                  vcast_eleven: v_cast_eleven,
                  vcast_twelve: v_cast_twelve,
                  vcast_thirteen: v_cast_thirteen,
                  vcast_fourteen: v_cast_fourteen,
                  vcast_fifteen: v_cast_fifteen
                });
              }
              else if(vshowtime == '8:30')
              {
                var first_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                vtheshow.push(
                {
                  start:first_date, 
                  title: "V - The Ultimate Variety Show",
                  v_shows: v_showsno,
                  v_showtimes: vshowtime,
                  vcast_one: v_cast_one,
                  vcast_two: v_cast_two,
                  vcast_three: v_cast_three,
                  vcast_four: v_cast_four,
                  vcast_five: v_cast_five,
                  vcast_six: v_cast_six,
                  vcast_seven: v_cast_seven,
                  vcast_eight: v_cast_eight,
                  vcast_nine: v_cast_nine,
                  vcast_ten: v_cast_ten,
                  vcast_eleven: v_cast_eleven,
                  vcast_twelve: v_cast_twelve,
                  vcast_thirteen: v_cast_thirteen,
                  vcast_fourteen: v_cast_fourteen,
                  vcast_fifteen: v_cast_fifteen
                });
              }
              else if(vshowtime == '4, 7 & 8:30')
              {
                var first_date = moment(new Date(dates)).hour(16).minute(00).format('LLL');
                var second_date = moment(new Date(dates)).hour(19).minute(00).format('LLL');
                var third_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                vtheshow.push(
                {
                  start:first_date, 
                  title: "V - The Ultimate Variety Show",
                  v_shows: v_showsno,
                  v_showtimes: vshowtime,
                  vcast_one: v_cast_one,
                  vcast_two: v_cast_two,
                  vcast_three: v_cast_three,
                  vcast_four: v_cast_four,
                  vcast_five: v_cast_five,
                  vcast_six: v_cast_six,
                  vcast_seven: v_cast_seven,
                  vcast_eight: v_cast_eight,
                  vcast_nine: v_cast_nine,
                  vcast_ten: v_cast_ten,
                  vcast_eleven: v_cast_eleven,
                  vcast_twelve: v_cast_twelve,
                  vcast_thirteen: v_cast_thirteen,
                  vcast_fourteen: v_cast_fourteen,
                  vcast_fifteen: v_cast_fifteen
                });
                vtheshow.push(
                {
                  start:second_date, 
                  title: "V - The Ultimate Variety Show",
                  v_shows: v_showsno,
                  v_showtimes: vshowtime,
                  vcast_one: v_cast_one,
                  vcast_two: v_cast_two,
                  vcast_three: v_cast_three,
                  vcast_four: v_cast_four,
                  vcast_five: v_cast_five,
                  vcast_six: v_cast_six,
                  vcast_seven: v_cast_seven,
                  vcast_eight: v_cast_eight,
                  vcast_nine: v_cast_nine,
                  vcast_ten: v_cast_ten,
                  vcast_eleven: v_cast_eleven,
                  vcast_twelve: v_cast_twelve,
                  vcast_thirteen: v_cast_thirteen,
                  vcast_fourteen: v_cast_fourteen,
                  vcast_fifteen: v_cast_fifteen
                });
                vtheshow.push(
                {
                  start:third_date, 
                  title: "V - The Ultimate Variety Show",
                  v_shows: v_showsno,
                  v_showtimes: vshowtime,
                  vcast_one: v_cast_one,
                  vcast_two: v_cast_two,
                  vcast_three: v_cast_three,
                  vcast_four: v_cast_four,
                  vcast_five: v_cast_five,
                  vcast_six: v_cast_six,
                  vcast_seven: v_cast_seven,
                  vcast_eight: v_cast_eight,
                  vcast_nine: v_cast_nine,
                  vcast_ten: v_cast_ten,
                  vcast_eleven: v_cast_eleven,
                  vcast_twelve: v_cast_twelve,
                  vcast_thirteen: v_cast_thirteen,
                  vcast_fourteen: v_cast_fourteen,
                  vcast_fifteen: v_cast_fifteen
                });
              }
              else if(vshowtime == '5:30, 7 & 8:30')
              {
                var first_date = moment(new Date(dates)).hour(17).minute(30).format('LLL');
                var second_date = moment(new Date(dates)).hour(19).minute(00).format('LLL');
                var third_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                vtheshow.push(
                {
                  start:first_date, 
                  title: "V - The Ultimate Variety Show",
                  v_shows: v_showsno,
                  v_showtimes: vshowtime,
                  vcast_one: v_cast_one,
                  vcast_two: v_cast_two,
                  vcast_three: v_cast_three,
                  vcast_four: v_cast_four,
                  vcast_five: v_cast_five,
                  vcast_six: v_cast_six,
                  vcast_seven: v_cast_seven,
                  vcast_eight: v_cast_eight,
                  vcast_nine: v_cast_nine,
                  vcast_ten: v_cast_ten,
                  vcast_eleven: v_cast_eleven,
                  vcast_twelve: v_cast_twelve,
                  vcast_thirteen: v_cast_thirteen,
                  vcast_fourteen: v_cast_fourteen,
                  vcast_fifteen: v_cast_fifteen
                });
                vtheshow.push(
                {
                  start:second_date, 
                  title: "V - The Ultimate Variety Show",
                  v_shows: v_showsno,
                  v_showtimes: vshowtime,
                  vcast_one: v_cast_one,
                  vcast_two: v_cast_two,
                  vcast_three: v_cast_three,
                  vcast_four: v_cast_four,
                  vcast_five: v_cast_five,
                  vcast_six: v_cast_six,
                  vcast_seven: v_cast_seven,
                  vcast_eight: v_cast_eight,
                  vcast_nine: v_cast_nine,
                  vcast_ten: v_cast_ten,
                  vcast_eleven: v_cast_eleven,
                  vcast_twelve: v_cast_twelve,
                  vcast_thirteen: v_cast_thirteen,
                  vcast_fourteen: v_cast_fourteen,
                  vcast_fifteen: v_cast_fifteen
                });
                vtheshow.push(
                {
                  start:third_date, 
                  title: "V - The Ultimate Variety Show",
                  v_shows: v_showsno,
                  v_showtimes: vshowtime,
                  vcast_one: v_cast_one,
                  vcast_two: v_cast_two,
                  vcast_three: v_cast_three,
                  vcast_four: v_cast_four,
                  vcast_five: v_cast_five,
                  vcast_six: v_cast_six,
                  vcast_seven: v_cast_seven,
                  vcast_eight: v_cast_eight,
                  vcast_nine: v_cast_nine,
                  vcast_ten: v_cast_ten,
                  vcast_eleven: v_cast_eleven,
                  vcast_twelve: v_cast_twelve,
                  vcast_thirteen: v_cast_thirteen,
                  vcast_fourteen: v_cast_fourteen,
                  vcast_fifteen: v_cast_fifteen
                });
              }
              else
              {
                var first_date = 'none';
              }
            }      
          }
          console.log(vtheshow);
          callback(vtheshow);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      },
      color: "darkred",
      textColor: "white"
    }
  ],
  eventClick:  function(data, event, view) {
    var newboys = data.title;
    var vegas_show_date = data.start;
    if(newboys == 'Zombie Burlesque')
    {
      $('#modalTitle').html(data.title);
      $('#event-time').html(data.zombie_showtimes);
      $('#event-act-one').html(data.zombieact_one);
      $('#event-act-two').html(data.zombieact_two);
      $('#mushrooms').removeClass('hidden');
      $('#samismyfriend').removeClass('hidden');
      $('#croissants').addClass('hidden');
      $('#v-cast').addClass('hidden');
      $('#dolladollabills').addClass('hidden');
      $('#calendarModal').modal();
    }
    else if(newboys == 'Vegas the Show')
    {
      $('#modalTitle').html(data.title);
      $('#event-time').html(data.vegas_showtimes);
      $('#event-act-one').html(data.vegasact_one);
      $('#event-act-two').html(data.vegasact_two);
      $('#mushrooms').removeClass('hidden');
      $('#samismyfriend').removeClass('hidden');
      $('#croissants').removeClass('hidden');
      $('#dolladollabills').removeClass('hidden');
      $('#v-cast').addClass('hidden');
      $('#event-act-three').html(data.vegasact_three);
      $('#calendarModal').modal();
      saishopondoho(vegas_show_date);
    }
    else
    {
      $('#modalTitle').html(data.title);
      $('#event-time').html(data.v_showtimes);
      $('#mushrooms').addClass('hidden');
      $('#samismyfriend').addClass('hidden');
      $('#croissants').addClass('hidden');
      $('#dolladollabills').addClass('hidden');
      $('#v-cast').removeClass('hidden');
      $('#cast-one').html(data.vcast_one);
      $('#cast-two').html(data.vcast_two);
      $('#cast-three').html(data.vcast_three);
      $('#cast-four').html(data.vcast_four);
      $('#cast-five').html(data.vcast_five);
      $('#cast-six').html(data.vcast_six);
      $('#cast-seven').html(data.vcast_seven);
      $('#cast-eight').html(data.vcast_eight);
      $('#cast-nine').html(data.vcast_nine);
      $('#cast-ten').html(data.vcast_ten);
      $('#cast-eleven').html(data.vcast_eleven);
      $('#cast-twelve').html(data.vcast_twelve);
      $('#cast-thirteen').html(data.vcast_thirteen);
      $('#cast-fourteen').html(data.vcast_fourteen);
      $('#calendarModal').modal();
    }
  }
});

function saishopondoho(date)
{
  var maximillianarnold = date;
  var vegasdate = moment(maximillianarnold).format("L");
  console.log(vegasdate);
  $.ajax({
    url: 'api/get-vegas-dancers.php'
  })
  .done(function(data) {
    var rumi = $.parseJSON(data);
    var rumicols = rumi.columns;
    var rumirows = rumi.rows;
    for (var i = 1; i < rumicols.length; i++) {
      var dates = rumicols[i].title;
      var apidate = moment(new Date(dates)).format("L");
      if(vegasdate == apidate)
      {
        $('#dolladollabills').click(function(event) {
          console.log(vegasdate);
        });
      }
      else
      {
        console.log("Sam is my friend");
      }
    }
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });
}


