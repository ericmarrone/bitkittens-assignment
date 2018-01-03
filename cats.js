document.addEventListener("DOMContentLoaded", function() {
  var summon = document.querySelector('.summon-cats')
  var catBoxes = document.querySelectorAll('.cat-box')

  summon.addEventListener('click', function() {
    console.log('Hello');


    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON'
    }).done(function(responseData){
      var i = 0
      responseData.cats.forEach(function(cat){
        var imgTag = document.createElement('img');
        imgTag.src = cat.photo;
        imgTag.alt = "Photo of" + cat.name;
        catBoxes[i].innerHTML = "";
        catBoxes[i].append(imgTag);
        i++;
      });
    });
  });
});
