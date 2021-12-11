function create_table(){
    let t_element = document.createElement("table");
    t_element.setAttribute("class", "table");
    t_element.setAttribute("id", "table");
    let t_body = document.createElement("tbody");
    t_element.appendChild(t_body);

    const element = document.getElementById("show");
    element.appendChild(t_element);
}

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
    s.setAttribute("id", "submit")
    s.setAttribute("value", "Submit");

    //append elements to form
    ip_form.appendChild(ip_input);
    ip_form.appendChild(s);
    //ip_form.appendChild(FN);
    const element = document.getElementById("show");
    element.appendChild(ip_form);
    

}