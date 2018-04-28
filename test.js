const data = require('./data');

function format(data = []) {
    const categoryMap = {};
    const roots = [];

    data.map(item => {
        const wrappedItem = Object.assign({}, item, {_parent: null, _children: []});
        isRoot.call(wrappedItem) && roots.push(wrappedItem);
        categoryMap[wrappedItem.category_id] = wrappedItem;
    })

    data.map(item => {
        item.parent_id &&
            categoryMap[item.parent_id]._children.push(item) &&
            (item._parent = categoryMap[item.parent_id]);
    });

    return {categoryMap, roots};
}

function isRoot() {
    return this.category_id == this.root_id;
}

const res = format(data);

console.log(res.categoryMap)
