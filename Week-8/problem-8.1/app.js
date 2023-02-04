// Maximum Depth of Binary Tree

// TreeNode constructor function
function TreeNode(data, left = null, right = null) {

    this.data = data;
    this.left = left;
    this.right = right;
}

const node20 = new TreeNode(20, new TreeNode(15), new TreeNode(7));
const root = new TreeNode(3, new TreeNode(9), node20);

const maxDepth = (_root) => {

    if (_root === null) return 0;

    return Math.max(maxDepth(_root.left), maxDepth(_root.right)) + 1;
}

console.log(maxDepth(root));