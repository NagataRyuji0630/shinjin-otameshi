function evtAddBtn(e) {
    // 付箋タイトルと付箋の内容
    let tagName = document.getElementById("todo_title").value;
    let tagContent = document.getElementById("todo_detail").value;

    let todoTags = document.getElementsByClassName("todo_tag");
    console.log(todoTags);

    // 付箋が一つもない場合
    if (!todoTags) {
        addFirstTodoTag(tagName, tagContent);
    } else {
        addTodoTag(tagName, tagContent, todoTags);
    }
}