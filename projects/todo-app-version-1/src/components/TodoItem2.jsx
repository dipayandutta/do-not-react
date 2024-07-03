function ToDoItem2(){

    let todoName = 'Go To Office';
    let todoDate = '03/07/2024';
    return (
      <div class="container">
        <div class="row data-row">
          <div class="col-6">{todoName}</div>
          <div class="col-4">{todoDate}</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
}

export default ToDoItem2;