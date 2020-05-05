


const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://type.fit/api/quotes",
  "method": "GET"
}


function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}




// $(function () {
  const getFoxyQuote = function() {
    $('#click-quote').html('Get me another!')   //need button text to change, button still on screen
    $.get(settings).then(function (response) {
      let data = JSON.parse(response);
      let random = data[getRandomIndex(data.length)]
      console.log(random);
      console.log(random.text);
      console.log(random.author)
      let newFoxy = `<div class="carousel-item active">
      <img src="foxytest.jpg" class="d-block w-100" alt="foxy image">
      <div class="carousel-caption d-none d-md-block">
      <button onclick="getFoxyQuote" type="button" class="btn btn-primary btn-lg" id="click-quote">Get me another!</button>
      <p id="affirmation">${random.text}</p>
      <p id="author">${random.author}</p>
      </div>
      </div>`
      $('.carousel-inner').html("")
      $('.carousel-inner').append(newFoxy) 
    });
  }
  $('#click-quote').click(getFoxyQuote);
// });






  // if(data == null) {
  //   data = [];
  //   data.push(response);
  //   data = JSON.stringify(response) //this is starter for saving a list of favorite quotes
  //   console.log(data)
  //   localStorage.setItem(data)

//       });

//chuck norris quote generator
// $(document).ready(function() {
//   let chuckNorris = "https://api.icndb.com/jokes/random";
//   $("button").on("click", function(){
//      $("button").html("Another amazing quote!");
//      $.getJSON(chuckNorris, function(json) {
//        $("#affirmation").html("<em>\""+json.value.joke+"\"</em>").addClass("animated bounceIn");
//      });
//       });
  
//     });











//THIS API DOES NOT WORK
// const settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://www.affirmations.dev",  //throws error: Access to XMLHttpRequest at 'https://www.affirmations.dev/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
//   "method": "GET"
// }




// $(function () {
//   $('#click-quote').click(function () {
//     console.log("You clicked!");
//     $.ajax(settings).done(function (response) {
//         const data = JSON.parse(response);
//         console.log(data);
//         $("#affirmation").text(data[0]);
//         console.log("again")
//       });

//   });
// });

