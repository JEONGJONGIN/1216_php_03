$(document).ready(function(){
  var API_KEY = "AIzaSyBuBYZzrHUkFr85hH0yAM5u88fvhnUtVsU"

  $("form").submit(function (e) { 
    e.preventDefault(); 

    let search = $("#search").val() 

    let video = ' '

    videoSearch(API_KEY,search,10)
    
  });

  function videoSearch(key, search, maxResults){

    $("#videos").empty();
 
    $.get("https://www.googleapis.com/youtube/v3/search?key=" + key
    + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){
      console.log(data)

      data.items.forEach(item => {
        video = `
        
        <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoID}" frameborder="0" allowfullscreen></ifame>

        `
        $("#videos").append(video);
      });

    })

  }

});