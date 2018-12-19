let source   = document.getElementById("entry-template").innerHTML;
let template = Handlebars.compile(source);

$.getJSON("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.sandbox.auth0-extend.com/robots")
.done(function(data){
  let html = template(data);
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

bts.click(function (event) {
  event.preventDefault();

  let robots = $(".robot");
  robots.hide();

  let genre = $(this).data("type");
  $(".robots [data-type=\""+genre+"\"]").show();

  if(genre==""){
    robots.show();
  }

});
