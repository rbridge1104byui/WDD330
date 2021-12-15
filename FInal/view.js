// function create_table() {
//     let t_element = document.createElement("table");
//     t_element.setAttribute("class", "table");
//     t_element.setAttribute("id", "table");
//     let t_body = document.createElement("tbody");
//     t_element.appendChild(t_body);

//     const element = document.getElementById("show");
//     element.appendChild(t_element);
// }

function create_form(dv) {
    const ip_form = document.createElement("form");


    //add IP address input
    let ip_input = document.createElement("input");
    ip_input.setAttribute("type", "text");
    ip_input.setAttribute("id", "input_value");
    ip_input.setAttribute("name", "input_ip");
    ip_input.setAttribute("placeholder", dv);

    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");

    // create a submit button
    var s = document.createElement("input");
    s.setAttribute("type", "button");
    s.setAttribute("id", "submitBtn")
    s.setAttribute("value", "Submit");

    //append elements to form
    ip_form.appendChild(ip_input);
    ip_form.appendChild(s);
    //ip_form.appendChild(FN);
    const element = document.getElementById("show");
    element.appendChild(ip_form);


}

function display_api_return(data, type) {
    // const owner = data['data']['attributes'];
    // const country = ;'
    let myTable = document.getElementById('myTable');
    const table = document.createElement('table');
    table.setAttribute('id', 'table');
    myTable.appendChild(table);
    const keys = Object.keys(data['data']['attributes']);
    console.log(data['data']['attributes']);

    let i = 0;
    let tab = document.getElementById('table');
    while (i < keys.length) {
        let myVar = data['data']['attributes'][keys[i]]
        if (typeof myVar === 'string' || myVar instanceof String) {

            let row = `<tr>
                                <td>${keys[i]}</td>
                                <td>${myVar}</td>
                                </tr>`;
            tab.innerHTML += row;

        }
        i++;
    }
    row = `<tr>
                                <td>Last Analysis Stats</td>
                                <td>-------</td>
                                </tr>`;
    tab.innerHTML += row;
    const key2 = Object.keys(data['data']['attributes']['last_analysis_stats']);
    i = 0;
    while (i < key2.length) {
        let myVar = data['data']['attributes']['last_analysis_stats'][key2[i]]

        console.log(key2[i]);
        console.log(myVar);
        let row = `<tr>
                                <td>${key2[i]}</td>
                                <td>${myVar}</td>
                                </tr>`;
        tab.innerHTML += row;


        i++;
    }let link = ''
    if (type.charAt(0) === 'i') {
        link = 'https://www.virustotal.com/gui/ip-address/';
    }else if (type.charAt(0)==='d'){
       link=" https://www.virustotal.com/gui/domain/";
    }
    
    link = link.concat(data['data']['id']);
     row = `<tr>
                                <td>Link to full report</td>
                                <td><a href=${link}>${link}</td>
                                </tr>`;
    tab.innerHTML += row;
    


}

