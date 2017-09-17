

d3.csv("data/timeline-policies-tx.csv", function(data) {

    // Convert dates to dates that the timeline will understand
    for(var i=0;i<data.length;i++){
        //assign a randomish date to prevent collisions.  Should work for this dataset.
        // let datestring = "1" + (i % 10).toString();
        // data[i].YearString= "/01/"+datestring+data[i].Year;
        data[i].YearString= "01/01/"+data[i].Year;
    }
    // construct the timeline
    // document.getElementById('events').appendChild(makeOL(data, "YearString"));
    console.log(document.getElementById('events'));
    // construct the policies
    document.getElementById('events-content').appendChild(makeOLAgain(data, "Full description"));

    // convert into nums
    for(var i=0;i<data.length;i++){
        data[i].Year=parseInt(data[i].Year);
    }

    var minYear = d3.min(data, function(d) {
        return d.Year;
    });
    var maxYear = d3.max(data, function(d) {
        return d.Year;
    });

    // Based on: https://codepen.io/DougManuel/full/avRyMg
    // d3.select('#events-slider').call(
    //     d3.slider().scale(d3.time
    //         .scale()
    //         .domain([new Date(minYear,1,1), new Date(maxYear,1,1)]))
    //         .axis(d3.svg.axis())
    //         .snap(true)
    //         .value(new Date(minYear,1,1)
    //     )
    // );

    var testData = [
        {label: "person a", times: [
            {"starting_time": 1355752800000, "ending_time": 1355759900000},
            {"starting_time": 1355767900000, "ending_time": 1355774400000}]},
            {label: "person b", times: [
            {"starting_time": 1355759910000, "ending_time": 1355761900000}]},
            {label: "person c", times: [
            {"starting_time": 1355761910000, "ending_time": 1355763910000}]}
    ];

    //var chart = d3.timeline();

    // var svg = d3.select("#events-slider").append("svg").attr("width", 500)
    //   .datum(testData).call(chart);
});

// Add the contents of options[0] to #foo:
//document.getElementById('foo').appendChild(makeUL(options[0]));

var options = [
        set0 = ['Option 1','Option 2'],
        set1 = ['First Option','Second Option','Third Option']
    ];

// Reference: https://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
function makeOL(array, key) {
    // Create the list element:
    var list = document.createElement('ol');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Make link
        var a = document.createElement('a');
        a.setAttribute("data-date", array[i][key]);
        a.setAttribute("href", "#0");
        a.appendChild(document.createTextNode(array[i][key]));;
        item.appendChild(a);

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

function makeOLAgain(array, key) {
    // Create the list element:
    var list = document.createElement('ol');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        item.setAttribute("data-date", array[i]["YearString"]);

        // Make Content
        var h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(array[i]["Year"]));

        var em = document.createElement('em');
        em.appendChild(document.createTextNode(array[i]["Law Title"]));

        var p = document.createElement('p');
        p.appendChild(document.createTextNode(array[i][key]));

        item.appendChild(h2);
        item.appendChild(em);
        item.appendChild(p);

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

function makeP(item, element, array, key) {
    // Create the details item
    var e = document.createElement(element);
    return e;
}

function makeLink(item, element, array, key) {
    var a = document.createElement('a');
    a.setAttribute("data-date", array[i][key]);
    a.setAttribute("href", "#0");
}


