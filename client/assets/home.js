$(document).ready(function () {
  // $.ajax({
  //   type: "GET",
  //   url: "/api",
  // }).then((allTodos) =>{
  //   console.log("allTodos");
  //   renderTodos(allTodos);
  // });
  getTodos().then((allTodos) => {
    renderTodos(allTodos);
  });

  $("#submitBtn").on("click", () => {
    const inputText = $("#todoInput").val();
    $("#todoInput").val("");
    console.log(inputText);
    $.ajax({
      type: "POST",
      url: "/api",
      data: { text: todoInput },
    }).then(() => {
      getTodos()
        .then((allTodos) => renderTodos(allTodos))
        .catch((err) => console.log(err));
    });
  });
});

const getTodos = () => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "GET",
      url: "/api",
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => reject(err));
  });
};

const renderTodos = (arr) => {
  $(".card-container").html("");
  arr.forEach((todo) => {
    console.log(todo);

    let msg = todo.completed ? "✔ Finished todo" : "❌ Need to do!";

    $(".card-container").prepend(
      `<div class="card mb-2" style="width: 18rem;">
            <div class="card-body">
              <!-- <h5 class="card-title">Card title</h5> -->
              <h6 class="card-subtitle mb-2 text-muted">
                ✔ This need to be done
                ${msg}
              </h6>
              <p class="card-text">
                Some quick example text data-id=${todo.text}
              </p>
              <div class="text-center">
                <button id="btnUpdate" data-id=${todo.id} style="width: 100px;" class="btn btn-outline-success">
                  Edit
                </button>
                <button id="btnDelete" data-id=${todo.id} style="width: 100px;" class="btn btn-outline-danger">
                  Delete
                </button>
              </div>
              <!-- <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a> -->
            </div>
          </div>`
    );
  });
};

$(document).on("click", "#btnUpdate", function () {
  console.log($(this).attr("data-id"));
  window.location.href = `/edit?id=${todoID}`;
});
$(document).on("click", "#btnDelete", function () {
  console.log($(this).attr("data-id"));
  window.location.href = `/delete?id=${todoID}`;
});
