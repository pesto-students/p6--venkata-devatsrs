// Binary Tree Level Order Traversal


// TreeNode constructor function
function TreeNode(data = null, left = null, right = null) {

    this.data = data;
    this.left = left;
    this.right = right;
}

const root1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
const root2 = new TreeNode(1);
const root3 = new TreeNode();

var levelOrder = function(root) {
    
    if (root === null) return [];
    
    let result = [];
    let queue = [root];
    
    while (queue.length > 0) {
        
        let currentLevel = [];
        let length = queue.length;
        
        for (let i = 0; i < length; i++) {
            
            let node = queue.shift();
            currentLevel.push(node.data);
            
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
};

console.log(levelOrder(root1));
console.log(levelOrder(root2));
console.log(levelOrder(root3));