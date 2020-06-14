// 初回付箋追加関数
function addFirstTodoTag(tagName, tagContent) {
    // TODOリスト表示エリアを取得
    let todoListContainer = document.getElementById("todo_list_container");

    todoListContainer.innerHTML = todoTag(tagName, tagContent);
}

// 付箋追加関数
function addTodoTag(tagName, tagContent, todoTags) {
    let lastNum = todoTags.length;
    console.log(todoTags)
    console.log(todoTags[lastNum - 1])
    console.log(lastNum)
    todoTags[lastNum - 1].insertAdjacentHTML('afterbegin', todoTag(tagName, tagContent));
}
