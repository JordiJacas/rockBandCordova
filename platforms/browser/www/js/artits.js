function searchArtist() {
  $("li").remove();

  var name = $("#name").val();

    $.ajax({
      method: "GET",
      url: "https://musicbrainz.org/ws/2/artist?query="+name,
      dataType: "json",

    }).done(function (msg) {

      for(var item in msg.artists) {
        var node = $("<li>"+JSON.stringify(msg.artists[item].name).substr(1, msg.artists[item].name.length)+"</li>");
        $("#list").append(node);
      };

    }).fail(function () {
      alert("ERROR");
    });

    $("#name").val("");
}
