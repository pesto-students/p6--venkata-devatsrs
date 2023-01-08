// Validate Binary Search Tree

// TreeNode constructor function
function TreeNode(data, left = null, right = null) {

    this.data = data;
    this.left = left;
    this.right = right;
}

const root1 = new TreeNode(2, new TreeNode(1), new TreeNode(3));


const node4 = new TreeNode(4, new TreeNode(3), new TreeNode(6));
const root2 = new TreeNode(5, new TreeNode(1), node4);

const root3 = new TreeNode(0, new TreeNode(-1));

const validateBST = (_root) => {

    if (_root === null) return false;

    if (_root.left === null && _root.right === null) return true;

    if (_root.left !== null && _root.right !== null) {

        if (_root.left.data < _root.data && _root.right.data > _root.data) {

            return validateBST(_root.left) && validateBST(_root.right);
        } 
                
         

    }



    return false;
}

console.log(validateBST(root1));
console.log(validateBST(root2));
console.log(validateBST(root3));