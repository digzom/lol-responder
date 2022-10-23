const url = "https://api.datamuse.com/words?";
const queryParams = "rel_rhy=";

const getSuggestions = (msg) => {
  const wordQuery = msg; //grabs what is in the inputField and assigns it to the variable wordQuery
  const endpoint = url + queryParams + wordQuery; //endpoint will store the value of the entire URL and query string.

  const xhr = new XMLHttpRequest(); // create the XMLHttpRequest object
  xhr.responseType = "json"; //When data is sent back, it will be in JSON format.

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      //renderRawResponse(xhr.response);  // The renderRawResponse() helper function can be viewed at public/helperFunctions.js. (it will will display the raw response from the API! in the responseField on the webpage)
      renderResponse(xhr.response);
    }
  };
  xhr.open("GET", endpoint); //'GET' sets the method and url sets the destination.
  xhr.send();
};

const addSpan = () => {};

if (document.readyState) {
  const interval = setInterval(() => {
    const headerTitle = document
      .querySelector("._21nHd")
      ?.firstChild?.getAttribute("Title");

    let placeHolder = document.querySelector(
      "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div.lhggkp7q.qq0sjtgm.jxacihee.qzp46edm.b9fczbqn.bze30y65.jgi8eev7.t35qvd06.m62443ks.rkxvyd19.c5h0bzs2"
    );

    let span = document.querySelector(
      "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div > p > span"
    );

    if (headerTitle == "Ângelo") {
      const msgBar = document.querySelector(
        "#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div.fd365im1.to2l77zo.bbv8nyr4.mwp4sxku.gfz4du6o.ag5g9lrv > p"
      );

      const msgSpan = document.createElement("span");
      msgSpan.setAttribute("class", "selectable-text copyable-text");
      msgSpan.setAttribute("data-lexical-text", "true");
      msgBar.setAttribute("dir", "ltr");
      msgBar.textContent = "Foda-se";
      placeHolder.remove();
      msgBar.appendChild(msgSpan);
    }
  }, 1000);
}

//   console.log(span);
// }, 1000);
