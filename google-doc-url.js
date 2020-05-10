var googleDocURL = 'https://docs.google.com/spreadsheets/d/12klG2YjY2QFNbTLxaEkQPxwz_7O75iSthzMcLFcdNlE/edit#gid=0';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('gdoc')){
	googleDocURL = urlParams.get('gdoc');
}
