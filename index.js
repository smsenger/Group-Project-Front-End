
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

  if (author == 'null') {
    return "Unknown"
  }
  else {
    return author;
  };
  

  function renderQuote(quoteData) {
    let newFoxy = `<div class="carousel-item active">
      <img src="foxytest.jpg" class="d-block w-100" alt="foxy image">
      <div class="carousel-caption d-none d-md-block">
      <button onclick="getFoxyQuote()" type="button" class="btn btn-primary btn-lg" id="click-quote">Get me another!</button>
      <p id="affirmation">${quoteData.text}</p>
      <p id="author">${quoteData.author}</p>
      </div>
      </div>`
    $('.carousel-inner').html("")
    $('.carousel-inner').append(newFoxy)

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
  if (quoteData.author == null) {
    $("#author").text("Unknown");
  }
  else {
    $('#author').text(quoteData.author)
    
  };
  console.log(quoteData)
}

  }


  // $(function () {
  const getFoxyQuote = function () {
    $('#click-quote').html('Get me another!')   //need button text to change, button still on screen
    $.get(settings).then(function (response) {
      let data = JSON.parse(response);
      let random = data[getRandomIndex(data.length)]
      renderQuote(random);

    });
  }

function startSong() {
  document.querySelectorAll('button')[0].click();
  document.querySelectorAll('button')[1].click();
  }
  


  $('#click-quote').click(function () {
    getFoxyQuote()
    getCats();
    startSong();
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

