const superagent = require("superagent");

module.exports = getCarImage;
function getCarImage(make, model, year, color) {
  /* work before the function is called */
  var image = {};
  var link;
  try {
    superagent
      .get("http://api.carsxe.com/images?")
      .query({
        key: process.env.REACT_APP_CARIMAGERY_KEY,
        make: make,
        model: model,
        year: year,
        color: color,
        angle: "front",
      })
      .end((err, res) => {
        if (err) {
          return console.log(err);
        }

        image = res.body;
        console.log("API Call Success!");

        link = image.images[0].link;
        console.log(link);
        return link;
      });
  } catch (e) {
    /* work in case there is an error */
    throw e;
  }
}
