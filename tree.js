/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;
    const queue = [this.root];
    let sum = 0;
    while (queue.length) {
      const current = queue.shift();
      sum += current.val;
      queue.push(...current.children);
    }
    return sum;

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    const queue = [this.root];
    let count = 0;
    while (queue.length) {
      const current = queue.shift();
      if (current.val % 2 === 0) count++;
      queue.push(...current.children);
    }
    return count;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    const queue = [this.root];
    let count = 0;
    while (queue.length) {
      const current = queue.shift();
      if (current.val > lowerBound) count++;
      queue.push(...current.children);
    }
    return count;

  }
}

module.exports = { Tree, TreeNode };
