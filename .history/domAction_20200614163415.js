// 初回付箋追加関数
function addFirstTodoTag(tagName, tagContent) {
    // TODOリスト表示エリアを取得
    let todoListContainer = document.getElementById("todo_list_container");

    todoListContainer.innerHTML = todoTag(tagName, tagContent);
}

// 付箋追加関数
function addTodoList(tagName, tagContent, todoTags) {
    let lastNum = todoTags.length;

    todoTags.outerHtml = todoTag(tagName, tagContent);
}
