//==============
//  CALENDAR
//==============  

// Multi Event Sources Setup
// Notes:
// ** These won't work unless the sheet no. is present in the class.smh.php file
// ** The setup is fine but needs fine tuning since it's repetitive but this will work for dev work only
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
          url: 'api/get-data-one.php',
        })
        .done(function(data) {
          // Create an array to store data from api
          var array_one = [];
          var parsed_data = $.parseJSON(data);
          var tablerow = parsed_data.rows;
          // Set limit here (1 - 3 months)
          for (var i = 0; i < 90; i++) 
          {
            var tablecells = tablerow[i].cells;
            var dates = tablecells[0].value;
            var data_one = tablecells[1].value;
            var time = tablecells[2].value;
            var data_three = tablecells[3].value;
            var data_four = tablecells[4].value;
            var today = moment().format('ll');
            //=================== 
            //  Custom Code 
            //===================
            if(dates !="Invalid date") {
              if(time == '8:30 & 10')
              {
                var first_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                var second_date = moment(new Date(dates)).hour(22).minute(00).format('LLL');
                array_one.push(
                {
                  start:first_date, 
                  title: "My Schedule",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
                array_one.push(
                {
                  start:second_date, 
                  title: "My Schedule",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
              }
              else if(time == '8:30')
              {
                var first_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                array_one.push(
                {
                  start:first_date, 
                  title: "My Schedule",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
              }
              else if(time == '10')
              {
                var first_date = moment(new Date(dates)).hour(22).minute(00).format('LLL');
                array_one.push(
                {
                  start:first_date, 
                  title: "My Schedule",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
              }
              else
              {
                var first_date = 'none';
              }
            }      
          }
          // Use array for calendar
          callback(array_one);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      },
      // Custom colors
      color: "darkgreen",
      textColor: "yellow"
    },
    {
      events: function(start,end,timezone,callback) {
        $.ajax({
          url: 'api/get-data-two.php',
        })
        .done(function(data) {
          // Create an array to store data from api
          var array_two = [];
          var parsed_data = $.parseJSON(data);
          var tablerow = parsed_data.rows;
          // Set limit here (1 - 3 months)
          for (var i = 0; i < 90; i++) 
          {
            var tablecells = tablerow[i].cells;
            var dates = tablecells[0].value;
            var data_one = tablecells[1].value;
            var time = tablecells[2].value;
            var data_three = tablecells[3].value;
            var data_four = tablecells[4].value;
            var today = moment().format('ll');
            //=================== 
            //  Custom Code 
            //===================
            if(dates !="Invalid date") {
              if(time == '8:30 & 10')
              {
                var first_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                var second_date = moment(new Date(dates)).hour(22).minute(00).format('LLL');
                array_two.push(
                {
                  start:first_date, 
                  title: "My Schedule 2",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
                array_two.push(
                {
                  start:second_date, 
                  title: "My Schedule 2",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
              }
              else if(time == '8:30')
              {
                var first_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                array_two.push(
                {
                  start:first_date, 
                  title: "My Schedule 2",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
              }
              else if(time == '10')
              {
                var first_date = moment(new Date(dates)).hour(22).minute(00).format('LLL');
                array_two.push(
                {
                  start:first_date, 
                  title: "My Schedule",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
              }
              else
              {
                var first_date = 'none';
              }
            }      
          }
          // Use array for calendar
          callback(array_two);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      },
      // Custom colors
      color: "darkgreen",
      textColor: "yellow"
    },
        {
      events: function(start,end,timezone,callback) {
        $.ajax({
          url: 'api/get-data-three.php',
        })
        .done(function(data) {
          // Create an array to store data from api
          var array_three = [];
          var parsed_data = $.parseJSON(data);
          var tablerow = parsed_data.rows;
          // Set limit here (1 - 3 months)
          for (var i = 0; i < 90; i++) 
          {
            var tablecells = tablerow[i].cells;
            var dates = tablecells[0].value;
            var data_one = tablecells[1].value;
            var time = tablecells[2].value;
            var data_three = tablecells[3].value;
            var data_four = tablecells[4].value;
            var today = moment().format('ll');
            //=================== 
            //  Custom Code 
            //===================
            if(dates !="Invalid date") {
              if(time == '8:30 & 10')
              {
                var first_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                var second_date = moment(new Date(dates)).hour(22).minute(00).format('LLL');
                array_three.push(
                {
                  start:first_date, 
                  title: "My Schedule 3",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
                array_three.push(
                {
                  start:second_date, 
                  title: "My Schedule 3",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
              }
              else if(time == '8:30')
              {
                var first_date = moment(new Date(dates)).hour(20).minute(30).format('LLL');
                array_three.push(
                {
                  start:first_date, 
                  title: "My Schedule 3",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
              }
              else if(time == '10')
              {
                var first_date = moment(new Date(dates)).hour(22).minute(00).format('LLL');
                array_three.push(
                {
                  start:first_date, 
                  title: "My Schedule 3",
                  name: data_one,
                  times: time,
                  details_one: data_three,
                  details_two: data_four
                });
              }
              else
              {
                var first_date = 'none';
              }
            }      
          }
          // Use array for calendar
          callback(array_three);
        })
        .fail(function() {
          console.log("error");
        })
        .always(function() {
          console.log("complete");
        });
      },
      // Custom colors
      color: "darkgreen",
      textColor: "yellow"
    }
  ],
  eventClick:  function(data, event, view) {
    var array_title = data.title;
    var start_date = data.start;
    if(array_title == 'My Schedule')
    {
      $('#modalTitle').html(data.title);
      $('#event-time').html(data.times);
      $('#event-act-one').html(data.details_one);
      $('#event-act-two').html(data.details_two);
      $('#mushrooms').removeClass('hidden');
      $('#samismyfriend').removeClass('hidden');
      $('#croissants').addClass('hidden');
      $('#v-cast').addClass('hidden');
      $('#dolladollabills').addClass('hidden');
      $('#calendarModal').modal();
    }
    else if(array_title == 'My Schedule 2')
    {
      $('#modalTitle').html(data.title);
      $('#event-time').html(data.times);
      $('#event-act-one').html(data.details_one);
      $('#event-act-two').html(data.details_two);
      $('#mushrooms').removeClass('hidden');
      $('#samismyfriend').removeClass('hidden');
      $('#croissants').addClass('hidden');
      $('#v-cast').addClass('hidden');
      $('#dolladollabills').addClass('hidden');
      $('#calendarModal').modal();
    }
    else
    {
      $('#modalTitle').html(data.title);
      $('#event-time').html(data.times);
      $('#event-act-one').html(data.details_one);
      $('#event-act-two').html(data.details_two);
      $('#mushrooms').removeClass('hidden');
      $('#samismyfriend').removeClass('hidden');
      $('#croissants').addClass('hidden');
      $('#v-cast').addClass('hidden');
      $('#dolladollabills').addClass('hidden');
      $('#calendarModal').modal();
    }
  }
});

// Needs Fixing
// function saishopondoho(date)
// {
//   var maximillianarnold = date;
//   var vegasdate = moment(maximillianarnold).format("L");
//   console.log(vegasdate);
//   $.ajax({
//     url: 'api/get-vegas-dancers.php'
//   })
//   .done(function(data) {
//     var rumi = $.parseJSON(data);
//     var rumicols = rumi.columns;
//     var rumirows = rumi.rows;
//     for (var i = 1; i < rumicols.length; i++) {
//       var dates = rumicols[i].title;
//       var apidate = moment(new Date(dates)).format("L");
//       if(vegasdate == apidate)
//       {
//         $('#dolladollabills').click(function(event) {
//           console.log(vegasdate);
//         });
//       }
//       else
//       {
//         console.log("Sam is my friend");
//       }
//     }
//     console.log("success");
//   })
//   .fail(function() {
//     console.log("error");
//   })
//   .always(function() {
//     console.log("complete");
//   });
// }


