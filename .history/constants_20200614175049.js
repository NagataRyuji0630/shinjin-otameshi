const todoTag = (tagName, tagContent) => `
    <div class="todo_tag display_flex_all direction_colum">
        <div class="white_circle"></div>
        <div class="tag_title">${tagName}</div>
        <div class="tag_content">${tagContent}</div>
    </div>
`;

#todo_list_container {
    width: 100 %;
    height: 60 %;
    margin: 30px;
    display: flex;
}

.todo_tag {
    width: 100px;
    height: 100px;
    background: #B2ED2C 0 % 0 % no - repeat padding - box;
    border: 1px solid #B2ED2C;
    margin: 15px;
}

.tag_title {
    height: 20 %;
    text - align: left;
    font: Bold 20px / 24px Arial;
    letter - spacing: 0px;
    color: #5887F9;
    align - items: center;
    justify - content: center;
}

.tag_content {
    height: 80 %;
    text - align: left;
    font: Bold 20px / 24px Arial;
    letter - spacing: 0px;
    color: #5887F9;
    justify - content: center;
    align - items: center;