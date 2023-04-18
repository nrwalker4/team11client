function handleOnLoad() {
  getFlowers();
}

function getFlowers() {
    const allFlowersApiUrl = "https://localhost:5138/team11api/api/plants/flowers";
    res.json()
    fetch(allFlowersApiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let html = "<ul>";
        json.forEach((flower) => {
          if (!flower.deleted) { //only display songs that haven't been deleted
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
          }//help
        });
        html += "</ul>";
        console.log(html);
        document.getElementById("flower").innerHTML = html;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

