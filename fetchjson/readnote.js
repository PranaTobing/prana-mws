var URL = "catatanmws.json";
fetch(URL)
  .then(function (response) {
    if (response.status !== 200) {
      console.log('There is some problems:', response.status);
      throw response.statusText;
    }
    return response.json();
  })
  .then(res => {
    console.log(res.judul);
    console.log(res.lokasi);
  })
  .catch(err => console.log(err));