$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get("id"));

  $.ajax({
    type: "GET",
    url: "/api/find${id}",
  }).then((todo) => {
    console.log(todo);
    "#deleteTodoText".todo[0].text;
  });

  $("#cancelBtn").on("click", () => {
    window.location.href = `/`;
  });
  $("#deleteBtn").on("click", () => {
    $.ajax({
      type: "GET",
      url: `/api/find${id}`,
    }).then((delRes) => {
      console.log(delRes);
    });
  });
});
