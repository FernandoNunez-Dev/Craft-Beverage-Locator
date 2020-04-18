  // async await Function card_data is called when the search button is clicked. 
async function card_data() {
  // Making the api call to open brewery db and setting variables.
    const start = ('https://api.openbrewerydb.org/breweries/search?query=')
    const postal = document.getElementById('zip').value
    const city = document.getElementById('city_state').value
    const results = document.getElementById('num_res').value
  // Per page limit with queries    
    const url =(start + city + '&'+ postal +'&per_page='+ results)
  //async await promise
    const response = await fetch(url);
    const data = await response.json();
  // For loop to render data into div cards from api call.   
     var string = "";
      for (i in data) {
      string +='<div class="card"> <div class="col-xs-5"><span class="name">'+data[i].name+'</span></div><div class="col-xs-2"></div><div class="col-xs-5">'+data[i].street+'</div><div class="col-xs-5">'+data[i].city+'</div> <div class ="">'+data[i].state+'</div><div class ="">'+data[i].website_url+'</div> </div><br></br>';
    };
      document.getElementById('output').innerHTML = string
       
  }
  
  

  // Function reset is called when the try a new search button is clicked. Resetting search fields.   
      function reset() {
          var show = document.getElementById('output')
          show.style.output ='none'
          location.reload(true);
      };
  // Function to clear data cards from UI and local storage.
      $("#clear").click(function() {
        localStorage.clear();
        location.reload()
      })