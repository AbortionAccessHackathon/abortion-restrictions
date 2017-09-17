d3.csv("data/timeline-policies-tx.csv", function(data) {
    // construct the timeline
    document.getElementById('events').appendChild(makeOL(data, "Year"));
    // construct the policies
    console.log(document.getElementById('events-content'));
    document.getElementById('events-content').appendChild(makeOLAgain(data, "Full description"));
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
        item.setAttribute("data-date", array[i]["Year"]);

        // Make Content
        var h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode(array[i]["Law Title"]));

        var em = document.createElement('em');
        em.appendChild(document.createTextNode(array[i]["Year"]));
        
        var p = document.createElement('p');
        p.appendChild(document.createTextNode(array[i][key]));
        
        item.appendChild(h2);
        item.appendChild(em);
        item.appendChild(p);
        
        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    console.log(list);
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

        