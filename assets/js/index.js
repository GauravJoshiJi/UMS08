//Adding user
$("#add_user").submit(function (e) {
  alert("Data successfully inserted");
});

//Updating user
$("#update_user").submit(function (e) {
  e.preventDefault();

  var unindexedArray = $(this).serializeArray();

  var data = {};

  $.map(unindexedArray, function (n) {
    data[n["name"]] = n["value"];
  });

  var request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function () {
    alert(`Data successfully updated`);
  });
});

//Deleted user

if (window.location.pathname === "/") {
  $onDelete = $("table tbody tr td a.delete");
  $onDelete.click(function () {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you want to delete that data ?")) {
      $.ajax(request).done(function () {
        alert("Data Deleted Sucessfully");
        location.reload();
      });
    }
  });
}
