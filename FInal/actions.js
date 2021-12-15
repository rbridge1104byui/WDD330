function get_answer(type) {
  value = document.getElementById("input_value");

  let form = document.getElementById("show");
  form.style.display = "none";
  let ip_query = value.value;

  let med_query = type.concat(ip_query);
  let short_query = "https://www.virustotal.com/api/v3/";
  let full_query = short_query.concat(med_query);




  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'x-apikey': 'dae5573f2ffff52e650cc535bb0c48513dd3ff7db5e75e57f09337f5e4fc2d58'
    }
  };

  fetch(full_query, options)
    .then(response => response.json())
    .then(response => {
      display_api_return(response, type);
    })
    .catch(err => console.error(err));

}

