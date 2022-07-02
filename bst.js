class Node {
    constructor(val) {
      this.val = val;
      this.right = null;
      this.left = null;
      this.count = 0;
    };
  };
  
  class BST {
    constructor() {
      this.root = null;
    }
    create(val) {
      const newNode = new Node(val);
      if (!this.root) {
        this.root = newNode;
        return this;
      };
      let current = this.root;
  
      const createSide = side => {
        if (!current[side]) {
          current[side] = newNode;
          return this;
        };
        current = current[side];
      };
  
      while (true) {
        if (val === current.val) {
          current.count++;
          return this;
        };
        if (val < current.val) createSide('left');
        else createSide('right');
      };
    };

    search(val) {
        if (!this.root) return undefined;
        let current = this.root,
            found = false;
      
        while (current && !found) {
          if (val < current.val) current = current.left;
          else if (val > current.val) current = current.right;
          else found = true;
        };
      
        if (!found) return 'Nothing Found!';
        return current;
      };
  };
  
  let tree = new BST();
  tree.create(10);
  tree.create(4);
  tree.create(4);
  tree.create(12);
  tree.create(2);
  let r=tree.search(112)
  console.log(r);