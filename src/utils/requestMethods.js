const https = require("https");
require("dotenv").config();

const globalOptions = {
  hostname: "api.themoviedb.org",
  headers: {
    Authorization: `${process.env.API_KEY}`,
  },
  maxRedirects: 20,
};

async function getPopularPersons(page = 1) {
  const options = {
    ...globalOptions,
    method: "GET",
    path: `/3/person/popular?page=${page}&${process.env.API_KEY}`,
  };

  let promise = new Promise((resolve, reject) => {
    const req = https.request(options, function (res) {
      let chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function (chunk) {
        resolve(JSON.parse(Buffer.concat(chunks).toString()));
      });

      res.on("error", function (error) {
        reject(error);
      });
    });

    req.end();
  });
  return await promise;
}

module.exports = {
  getPopularPersons: getPopularPersons,
};
