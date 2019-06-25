import $ from 'jquery';
import { triangleType } from './triangle-tracker.js';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import 'bootstrap';


$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var side1 = parseFloat($("#side1").val());
    var side2 = parseFloat($("#side2").val());
    var side3 = parseFloat($("#side3").val());

    var type = triangleType(side1, side2, side3);

    $("#output").empty();
    $("#output").append("<p>" + type + "</p>");
    event.preventDefault();
  });
});
