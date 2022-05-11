$(document).ready(nowReady);

function nowReady() {
  let titleHeader = $("h1");
  // let titleHeader = <h1>
  console.log("titleHeader", titleHeader);
  // console.log('titleHeader, <h1>)
  $("li, div").addClass("list");
  $("h1").addClass("head-style");
  $("#liElement").css("color", "green");
  let justThatOneList = $("#liElement");
  justThatOneList.text("Dom Manipulation");
  $(".first-and-last").css("color", "pink");

  // add element
  $("ul").append("<li>Forms</li>");

  // events
  $("#theButton").on("click", whenIClickTheButton);
  // when calling function, don't need parenthesis
  $("li").last().remove();
}

function whenIClickTheButton() {
  // getter
  let titleText = $("h1").text();
  console.log(titleText, "Title Text");
  console.log("someone click me");
  let upperTitleText = titleText.upperCase();
  $("h1").text("upperTitleText");
}
