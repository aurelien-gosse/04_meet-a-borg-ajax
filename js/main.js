let source   = document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(source);

$.getJSON("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/robots")
.done(function(robots){
  let html = template(robots);
  $(".robots").append(html);

  let femmes = $(".Female").length;
  let hommes = $(".Male").length;

  $(".femme").prepend(femmes);
  $(".homme").prepend(hommes);
})
.fail(function(){
  alert("Pas le bon lien");
});


let bts = $(".choice .bt");

bts.on('click', function (event) {
  event.preventDefault();

  let robots = $(".robot");
  let genre = $(this).data("type");

  if(genre!=""){
    $(".robots [data-type=\""+genre+"\"]").show();
    $(".robot:not([data-type=\""+genre+"\"])").hide();
  }else{
    robots.show();
  }

});