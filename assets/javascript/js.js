"use strict";

$(document).ready(function(){

    let topics = ["bear", "skunk", "dog", "dragon", "cat"];
    let b = $("<button>");
    let domB = $('#buttons');

    for(let i = 0; i<topics.length; i++) {
    domB.append("<button>" + topics[i] + "</button>");
    }

});