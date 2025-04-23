var url = "https://api.ipify.org?format=json";
url = "https://ip-address-id8u8cy3r-ashwin-dev-p.vercel.app/";
const detailsUrl = "http://ip-api.com/json/";

async function insert(id, value) {
  const element = document.getElementById(id);
  element.innerHTML = value;
}

//Gets the public ip address of the user/client and displays at the top
async function display(responseText) {
  //Parsing the JSON
  var responseText = JSON.parse(responseText);

  const ipAddress = responseText.ip;
  const div = document.getElementById("ipAddress");
  div.innerHTML = ipAddress;

  var url2 = detailsUrl + ipAddress;
  await httpGetAsync(url2, displayDetails);
}

//Gets the details of the ip address specified in the url
function displayDetails(responseText) {
  var data = JSON.parse(responseText);

  if (data.status == "success") {
    const city = data.city;
    const country = data.country;
    const countryCode = data.countryCode;
    const isp = data.isp;
    const org = data.org;
    const region = data.region;

    const regionName = data.regionName;
    const timezone = data.timezone;
    const zip = data.zip;
    const as = data.as;
    const query = data.query;
    const lat = data.lat;
    const lon = data.lon;

    insert("city", city);
    insert("country", country);
    insert("countryCode", countryCode);
    insert("isp", isp);
    insert("org", org);
    insert("region", region);
    insert("regionName", regionName);
    insert("timezone", timezone);
    insert("zip", zip);
    insert("as", as);
    insert("query", query);
    insert("lat", lat);
    insert("lon", lon);
  } else {
    console.error("Something went wrong\n");
  }
}

//Used to get details regarding the ip address
async function fetchDetails(e) {
  e.preventDefault();
  const ipAddress = document.getElementById("target_ip").value;
  var url2 = detailsUrl + ipAddress;
  await httpGetAsync(url2, displayDetails);
  return true;
}

//event listener for from submition(event listener is used since inline JS is not supported in chrome extension as a result of security issue)
document.getElementById("search_form").addEventListener("submit", fetchDetails);

httpGetAsync(url, display);
