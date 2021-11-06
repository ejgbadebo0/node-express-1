const axios = require('axios');
const fs = require('fs');

function getDomain(url) {
    if (url.indexOf('://') > -1) {
        domain = url.split('/')[2];
    } else {
        domain = url.split('/')[0];
    }
    return domain;
};

function writeHTMLToFile(url) {
    let r = axios.get(url);
    r.then(res => {
        fs.writeFile(`${getDomain(url)}.txt`, res.data, (err) => {
            if (err)
              console.log(err);
            else {
              console.log(`Wrote to ${getDomain(url)}`);
            }
          });
      })
      .catch( err => console.log(`Couldn't download ${url}`));

};


function getURLS(filename) {
    let urlList = [];
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.log("Invalid Filename");
            process.exit(0);
        }
        let urls = data.split('\n');
        for (let u of urls) {
            urlList.push(u);
            console.log(u);
        }

    });
    return urlList;
};

let urls = getURLS(process.argv[2]);
for (let url of urls) {
    writeHTMLToFile(url);
}