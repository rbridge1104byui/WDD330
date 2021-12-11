// let ip_query = "8.8.8.8"
// let short_query = "https://www.virustotal.com/api/v3/ip_addresses/"
// let full_query = short_query.concat(ip_query)
// const options = {
//     method: 'GET',
//     headers: {
//       Accept: 'application/json',
//       'x-apikey': 'dae5573f2ffff52e650cc535bb0c48513dd3ff7db5e75e57f09337f5e4fc2d58'
//     }
//   };

//   fetch(full_query, options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// function get_form(dv){
//     const ip_form = document.createElement("form");
//     //set action
//     //set method

//     //add IP address input
//     let ip_input = document.createElement("input");
//     ip_input.setAttribute("type", "text");
//     ip_input.setAttribute("name", "input_ip");
//     ip_input.setAttribute("placeholder", dv);

//     var FN = document.createElement("input");
//     FN.setAttribute("type", "text");
//     FN.setAttribute("name", "FullName");
//     FN.setAttribute("placeholder", "Full Name");

//     // create a submit button
//     var s = document.createElement("input");
//     s.setAttribute("type", "button");
//     s.setAttribute("value", "Submit");

//     //append elements to form
//     ip_form.appendChild(ip_input);
//     ip_form.appendChild(s);
//     //ip_form.appendChild(FN);
//     const element = document.getElementById("show");
//     element.appendChild(ip_form);

// }


function showIP() {
    

    let dv = "IP Address";
    //get_answer();
    create_form(dv);
    create_table();
    let btn_action = document.getElementById("submit");
    let query = btn_action.addEventListener('click', get_answer);
    
    
    

    
    

    
   
}


function showURL(){
    let dv = "URL";
    create_form(dv);
}

function showEmail() {
    let dv = "Email Address";
    create_form(dv);

}