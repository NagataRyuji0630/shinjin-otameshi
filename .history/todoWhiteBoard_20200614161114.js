function evtAddBtn(e) {
    let tagName = document.getElementById("todo_title").value;
    let tagContent = document.getElementById("todo_detail");

    addTodoTag(tagName, tagContent);
}