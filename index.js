
//nasa api key = yhAGByOoN03Qq1qHf4S1IBX070g1Of5dMIrzjLdf
//use like this: https://api.nasa.gov/planetary/apod?api_key=yhAGByOoN03Qq1qHf4S1IBX070g1Of5dMIrzjLdf

const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://type.fit/api/quotes",
  "method": "GET"
}


function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function getSpace() {
  $.get('https://api.nasa.gov/planetary/apod?api_key=yhAGByOoN03Qq1qHf4S1IBX070g1Of5dMIrzjLdf')
    .then(function(data2) {
      const img = document.getElementsByTagName('img')[0];
      console.log('data =', data2)
      img.setAttribute('src', data2.url)
      let random = data[getRandomIndex(data.length)]

    }); 
  }; 
  getSpace()


function getCats() {
  $.get('http://aws.random.cat/meow')
    .then(function(data2) {
      const img = document.getElementsByTagName('img')[0];
      console.log('data =', data2)
      img.setAttribute('src', data2.file)
    }); 
  }; 
  // getCats()



function renderQuote(quoteData) {
  $('#affirmation').text(quoteData.text)
  $('#author').text(quoteData.author)
}


// $(function () {
  const getFoxyQuote = function() {
    $('#click-quote').html('Get me another!')   
    $.get(settings).then(function (response) {
      let data = JSON.parse(response);
      let random = data[getRandomIndex(data.length)]
      renderQuote(random);
      
    });
  }

function changeSong() {
  document.querySelectorAll('[title=Next]')[0].click();
  // document.querySelectorAll('.c5.c6.bi.c7.c8.c9.bf.ca.cb')[1].click()
 
}


  $('#click-quote').click(function () {
    getFoxyQuote()
    getCats();
    changeSong();
  });


// });








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

