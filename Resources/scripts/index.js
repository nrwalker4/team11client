function getFlowers() {
    const allSongsApiUrl = "https://localhost:7188/api/plants";
  
    fetch(allSongsApiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let html = "<ul>";
        json.forEach((song) => {
          if (!song.deleted) { //only display songs that haven't been deleted
            html +=
              "<li>" +
              song.title +
              " by " +
              song.artist +
              `${song.favorited ? " <b><i>---Favorited---</i></b>" : ""}` +
              `<button type="button" onclick='handleFavorite(${song.songID})'>Toggle Favorite</button>` +
              `<button type="button" onclick='handleDelete(${song.songID})'>Delete</button>` +
              `<button type="button" onclick='displaySongEditForm(${song.songID})'>Edit</button>` +
              "</li>";
          }
        });
        html += "</ul>";
        console.log(html);
        document.getElementById("songs").innerHTML = html;
      })
      .catch(function (error) {
        console.log(error);
      });
  }