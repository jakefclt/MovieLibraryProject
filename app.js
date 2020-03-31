"use strict";

function addMovie(movie){
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "https://localhost:44325/api/movie",
        contentType: 'application/json',
        data: {"Title": movie[0].value, "Director": movie[1].value, "Genre": movie[2].value}
    });
}

$(document).ready(function(){
    // queried database for list of movie object
    $.ajax({
        type: "GET", 
        url: "https://localhost:44325/api/movie",
        contentType: "application/json; charset = utf-8",    
        dataType: "json",

        // manipulated DOM to append rows to movie table
        success: function(data){
            $("#movie-list").html(
            '');
           $.each(data, function (i, item){
               var movie = "<tr>" +
               "<td>" + item.title + "</td>" +
               "<td>" + item.director + "</td>" +
               "<td>" + item.genre + "</td>" +
               "</tr>";

               $('#movie-list').append(movie);
           })
        }
    });
});

function editMovieDetails(movie){

}