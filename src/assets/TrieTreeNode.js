export class TrieTreeNode {
    constructor(value) {
      this.value = value;
      this.isEndOfWord = false;
      this.children = {};
    }
  
    isTerminal() {
      //regresa true si un nodo es terminal, es decir si el nodo
      //representa el último caracter de un string que almacenamos en el árbol
      return this.isEndOfWord;
    }
  
    numChildren() {
      //regresa el número de hijos del nodo actual.
      return this.children.length;
    }
    hasChild(character) {
      //*regresa true si alguno de los hijos del nodo contiene un caracter dado.
      let temp = Object.keys(this.children);
  
      for (let key of temp) {
        if (key === character) {
          return true;
        }
      }
      return false;
    }
    getChild(character) {
      //*regresa el nodo hijo que contiene/almacena un caracter dado.
      if (this.hasChild(character)) {
        return this.children[character];
      }
      return false;
    }
    addChild(character, child_node) {
      /*Agregar child nuevo al nodo actual. 
      comprobar si el nodo actual tiene un child con el caracter que queremos agregar.*/
      if (!this.hasChild(character)) {
        this.children = child_node.value;
      } else {
        throw new Error(`Child exists for: ${character}`);
      }
    }
  }