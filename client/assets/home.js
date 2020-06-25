$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "/home",
  }).then((res) => {
    console.log("from home.js ", res);
  });
});
