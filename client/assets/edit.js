$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  $.ajax({
    type: "GET",
    url: `/api/find/${id}`,
  }).then((todo) => {
    console.log(todo[0]);
    console.log(todo[0].completed);
    console.log(typeof todo[0].completed);

    todo[0].completed
      ? $("#completedCheck").prop("checked", true)
      : $("#completedCheck").prop("checked", false);
    $("#editTextInput").prop("placeholder", todo[0].text);
  });
  $("#btnConfirm").on("click", (e) => {
    e.preventDefault();
    const editedText = $("#editTextInput").val()
      ? $("#editTextInput").val()
      : $("#editTextInput").attr("placeholder");

    console.log(editedText);

    const completeStatus = $("#completedCheck").prop("checked")
      ? "true"
      : "false";
    console.log(completeStatus);

    $.ajax({
      type: "PATCH",
      url: "/api",
      data: { todoText: editedText, todoId: id, todoCompleted: completeStatus },
    })
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  });
});
