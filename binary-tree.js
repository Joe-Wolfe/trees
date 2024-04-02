/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    // if the tree is empty, return 0
    if (!this.root) return 0;
    const queue = [[this.root]];
    while (queue.length) {
      const currentPath = queue.shift();
      const current = currentPath[currentPath.length - 1];
      if (!current.left && !current.right) return currentPath.length;
      if (current.left) queue.push([...currentPath, current.left]);
      if (current.right) queue.push([...currentPath, current.right]);
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    // if the tree is empty, return 0
    if (!this.root) return 0;
    const queue = [[this.root]];
    let maxDepth = 0;
    while (queue.length) {
      const currentPath = queue.shift();
      const current = currentPath[currentPath.length - 1];
      if (!current.left && !current.right) maxDepth = Math.max(maxDepth, currentPath.length);
      if (current.left) queue.push([...currentPath, current.left]);
      if (current.right) queue.push([...currentPath, current.right]);
    }
    return maxDepth;

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    // if the tree is empty, return 0
    if (!this.root) return 0;
    const queue = [[this.root]];
    let maxSum = 0;
    while (queue.length) {
      const currentPath = queue.shift();
      const current = currentPath[currentPath.length - 1];
      if (!current.left && !current.right) {
        let pathSum = currentPath.reduce((acc, node) => acc + node.val, 0);
        maxSum = Math.max(maxSum, pathSum);
      }
      if (current.left) queue.push([...currentPath, current.left]);
      if (current.right) queue.push([...currentPath, current.right]);
    }
    return maxSum;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    const queue = [this.root];
    let nextLarger = null;
    while (queue.length) {
      const current = queue.shift();
      if (current.val > lowerBound) {
        if (!nextLarger || current.val < nextLarger) nextLarger = current.val;
      }
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return nextLarger;

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
