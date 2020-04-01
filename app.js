"use strict";

$('#my-form').submit( addMovie );

function addMovie(e){
    $.ajax({
        type: "POST",
        async: false,
        dataType: "json",
        url: "https://localhost:44325/api/movie",
        contentType: 'application/json',
        data: JSON.stringify({Title: this["title"].value, Director: this["director"].value, Genre: this["genre"].value})
    });
    // e.preventDefault();
}

// $('#movie-list').submit(editMovieDetails);

function editForm(rowId){
    var rowEdit = 
    "<form id='edit'>" +
    "<td>" + "<input type='text' value='" + $("#" + rowId + " td:nth-child(1)").html().toString() + "' form='edit'></td>" +
    "<td>" + "<input type='text' value='" + $("#" + rowId + " td:nth-child(2)").html().toString() + "' form='edit'></td>" +
    "<td>" + "<input type='text' value='" + $("#" + rowId + " td:nth-child(3)").html().toString() + "' form='edit'></td>" +
    "<td>" + "<input type='submit' form='edit'></td>" +
    "</form>";
    $("#" + rowId).html(rowEdit);
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
            // $("#movie-list").html('');
           $.each(data, function (i, item){
               var movie = "<tr id='movie"+ i + "'>" +
               "<td>" + item.title + "</td>" +
               "<td>" + item.director + "</td>" +
               "<td>" + item.genre + "</td>" +
               "<td><button onclick='editForm(\"movie" + i + "\")'>Edit</button></td>"
               "</tr>";

               $('#movie-list').append(movie);
           })
        }
    });
});

