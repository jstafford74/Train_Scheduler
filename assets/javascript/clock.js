var trainNames = ['Acela','Blue Water','Cali Zephyr','Carolinian','Starlight','Empire','Hiawatha','Keystone','Lake Shore Ltd','Maple Leaf','River Runner','Pac Surfliner','Palmetto','Silver Meteor','Wolverine'];
var places =['Portland','Boston','Chicago','Phoenix','San Diego','Tampa','Dallas','St. Louis','Spokane','Toledo','Buloxi','Nashville','Miami','Atlanta','Denver'];

var hr = moment().format('H') * 25;  //#25 is used because 24hrs is 2/5ths of 60 minutes and the line lengths are normalized so that 24 hrs = 60 minutes = 60 seconds
var min = moment().format('mm') * 10;

$('.hrline').css('width',hr + 'px');
$('.minline').css('width', min + 'px');

arrivals();
departures();
run();

function addSec() {
    now2 = moment().format('MMMM Do YYYY, H:mm:ss a');
    $('.date').text(now2);
}

//---This function changes the css pxl width for each second
setInterval(transLate, 1000);
function transLate() {
    var pxl = moment().add(1, 's').format('s') * 10;
    $('.secline').css('width', pxl + 'px');
    $('.date').css('color','rgb(150,' + pxl * .425 + ',100');
}

//This function changes the css pxl width for each minute change
setInterval(transMin,60000);
function transMin(){
    var pxl = moment().add(1, 'm').format('m') * 10;
    $('.minline').css('width', pxl + 'px');
}

function run() {
    setInterval(addSec, 1000);
}

//---------Arrival & Departure Functions to:
//                                          Create random times after now for departures and arrivals------
//                                          Create DOM elements for each train attribute 
function arrivals() {
    for (i = 1; i < 16; i++) {
        var number = 1 + Math.floor(Math.random() * 100);
        var randMin = Math.floor(Math.random() * 60);
        var randHr = Math.floor(Math.random() * 5);
        var future = moment().add(randHr,'h').add(randMin,'m');
        var mTa = moment(future).diff(moment(),'minutes');
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
        orgDiv.addClass('col-3');
        orgDiv.attr('id', 'arrivorigin' + i);
        orgDiv.text(places[i - 1]);
        var atmDiv = $('<div>');
        atmDiv.addClass('col-3');
        atmDiv.attr('id', 'arrivtime' + i);
        atmDiv.text(moment(future).format('H:mm'));
        var mtaDiv =$('<div>');
        mtaDiv.addClass('col-1')
        mtaDiv.attr('id', 'mta' + i);
        mtaDiv.text(mTa);
        rowDiv.append(trnDiv);
        rowDiv.append(nmeDiv);
        rowDiv.append(orgDiv);
        rowDiv.append(atmDiv);
        rowDiv.append(mtaDiv);
        $('#arriv').append(rowDiv);
        $('#arrivtrain' + i).text(number);
    }
}

function departures() {
    for (i = 1; i < 16; i++) {
        var number = 1 + Math.floor(Math.random() * 100);
        var randMin = Math.floor(Math.random() * 60);
        var randHr = Math.floor(Math.random() * 5);
        var future = moment().add(randHr,'h').add(randMin,'m');
        var mTd = moment(future).diff(moment(),'minutes');
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
        destDiv.addClass('col-3');
        destDiv.attr('id', 'destination' + i);
        destDiv.text(places[i - 1]);
        var dtmDiv = $('<div>');
        dtmDiv.addClass('col-3');
        dtmDiv.attr('id', 'departtime' + i);
        dtmDiv.text(moment(future).format('H:mm'));
        var mtdDiv =$('<div>');
        mtdDiv.addClass('col-1')
        mtdDiv.attr('id', 'mtd' + i);
        mtdDiv.text(mTd);
        rowDiv.append(trnDiv);
        rowDiv.append(nmeDiv);
        rowDiv.append(destDiv);
        rowDiv.append(dtmDiv);
        rowDiv.append(mtdDiv);
        $('#depart').append(rowDiv);
        $('#depttrain' + i).text(number);
    }
}
