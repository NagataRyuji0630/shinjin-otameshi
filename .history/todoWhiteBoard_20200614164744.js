function evtAddBtn(e) {
    // 付箋タイトルと付箋の内容
    let tagName = document.getElementById("todo_title").value;
    let tagContent = document.getElementById("todo_detail").value;

    addTodoTag(tagName, tagContent);
}