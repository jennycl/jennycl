
/*document.addEventListener('DOMContentLoaded', function(){

  google.load('search', '1');

  google.setOnLoadCallback(OnLoad);

  var search;

  var keyword = 'cat';

  function OnLoad()
  {
   search = new google.search.ImageSearch();

   search.setSearchCompleteCallback(this, searchComplete, null);

   search.execute(keyword);
  }

  function searchComplete()
  {
    console.log(";sdlkfja;dsfkl");
   if (search.results && search.results.length > 0)
   {
       var rnd = Math.floor(Math.random() * search.results.length);

       document.body.style.backgroundImage = "url('" + search.results[rnd]['url'] + "')";
       console.log("url('" + search.results[rnd]['url'] + "')");
   }
  }

})
*/
