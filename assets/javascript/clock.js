var trainNames = ['Acela Express','Blue Water','Cali Zephyr','Carolinian','Starlight','Empire Builder','Hiawatha','Keystone','Lake Shore Ltd','Maple Leaf','River Runner','Pac Surfliner','Palmetto','Silver Meteor','Wolverine'];
var places =['Portland','Boston','Chicago','Phoenix','San Diego','Tampa','Dallas','St. Louis','Spokane','Toledo','Buloxi','Nashville','Miami','Atlanta','Denver'];

arrivals();
departures();
run();

function updateClock() {
    var now = moment();
    day = now.format("ddd, hA");
    second = now.seconds();
    minute = now.minutes();
    hour = now.hours();

    $('#hour').text(hour);                                                            //css("transform", "rotate(" + hour + "deg)");
    $('#minute').text(minute);                                                        //css("transform", "rotate(" + minute + "deg)");
    $('#second').text(second);                                                        //css("transform", "rotate(" + second + "deg)");
}


function addSec() {
    now2 = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#date').text(now2);
}

function transLate() {
    var pxl = moment().add(1, 's').format('s') * 10;
    $('.secline').css('width', pxl + 'px');
}

var min = moment().format('mm') * 10;
$('.minline').css('width', min + 'px');

setInterval(transLate, 1000);

function run() {
    setInterval(addSec, 1000);
}
//---------Function to create random times after now for departures and arrivals------


function arrivals() {
    for (i = 1; i < 16; i++) {
        var number = 1 + Math.floor(Math.random() * 100);
        var randMin = Math.floor(Math.random() * 60);
        var randHr = Math.floor(Math.random() * 5);
        var future = moment().add(randHr,'h').add(randMin,'m').format('H:mm');
        var rowDiv = $('<div>');
        rowDiv.addClass('row');
        rowDiv.attr('id', i);
        var trnDiv = $('<div>');
        trnDiv.addClass('col-1');
        trnDiv.attr('id', 'arrivtrain' + i);
        var nmeDiv = $('<div>');
        nmeDiv.addClass('col-4');
        nmeDiv.attr('id', 'arrivname' + i);
        nmeDiv.text(trainNames[i - 1]);
        var orgDiv = $('<div>');
        orgDiv.addClass('col-4');
        orgDiv.attr('id', 'arrivorigin' + i);
        orgDiv.text(places[i - 1]);
        var atmDiv = $('<div>');
        atmDiv.addClass('col-3');
        atmDiv.attr('id', 'arrivtime' + i);
        atmDiv.text(future);
        rowDiv.append(trnDiv);
        rowDiv.append(nmeDiv);
        rowDiv.append(orgDiv);
        rowDiv.append(atmDiv);
        $('#arriv').append(rowDiv);
        $('#arrivtrain' + i).text(number);
    }
}

function departures() {
    for (i = 1; i < 16; i++) {
        var number = 1 + Math.floor(Math.random() * 100);
        var randMin = Math.floor(Math.random() * 60);
        var randHr = Math.floor(Math.random() * 5);
        var future = moment().add(randHr,'h').add(randMin,'m').format('H:mm');
        var rowDiv = $('<div>');
        rowDiv.addClass('row');
        rowDiv.attr('id', i);
        var trnDiv = $('<div>');
        trnDiv.addClass('col-1');
        trnDiv.attr('id', 'depttrain' + i);
        var nmeDiv = $('<div>');
        nmeDiv.addClass('col-4');
        nmeDiv.attr('id', 'deptname' + i);
        nmeDiv.text(trainNames[i-1]);
        var destDiv = $('<div>');
        destDiv.addClass('col-4');
        destDiv.attr('id', 'destination' + i);
        destDiv.text(places[i - 1]);
        var dtmDiv = $('<div>');
        dtmDiv.addClass('col-3');
        dtmDiv.attr('id', 'departtime' + i);
        dtmDiv.text(future);
        rowDiv.append(trnDiv);
        rowDiv.append(nmeDiv);
        rowDiv.append(destDiv);
        rowDiv.append(dtmDiv);
        $('#depart').append(rowDiv);
        $('#depttrain' + i).text(number);
    }
}
