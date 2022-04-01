// Creating our first linked-list
// 10-->5-->18

// Let's look at the shape of a linked-list


// let myLinkedList = {
//     head: {
//         value: 10,
//         next: {
//             value: 5,
//             next: {
//                 value: 18,
//                 next: null
//             }
//         }
//     }
// }

// creating node class to keep things DRY

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head
        //Because initially we only have 1 node
        this.length = 1
    }

    // method to add to linkedList
    append(value) {
        // const newNode = {
        //     value: value,
        //     next: null,
        // };
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        // const newNode = {
        //     value: value,
        //     next: null
        // }
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        // return this.printList()
    }

    printList() {
        const array = []
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return console.log(array)
    }

    insert(index, value) {
        // checking inputs
        if (index >= this.length) {
            return this.append(value)
        }
        const newNode = new Node(value);
        const leader = this.findIndex(index-1);
        const referenceHolder = leader.next;
        leader.next = newNode;
        newNode.next = referenceHolder;
        this.length++
        return this.printList()
        
    }
    findIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

    
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(18);
myLinkedList.prepend(1)
myLinkedList.prepend(99)
// console.log(myLinkedList)

myLinkedList.insert(2, 14)
// myLinkedList.printList()
