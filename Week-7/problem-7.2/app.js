class Node {

    constructor(data, next = null) {

        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {

        const node = new Node(data);

        if (this.head === null) {
            this.head = node;
        } else {

            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }


        this.size++;

    }

    // k = 2
    // 1 -> 2 -> 
    // 3 -> 4 -> 5 -> 6 -> 
    // 2 -> 3 -> 4 -> 5 -> 6 -> 1 -> 
    // write a fun to rotate a linkedlist by k nodes
    rorate(k) {
        let current = this.head;
        let i = 0;
        while (current != null && i !== k-1) {
            current = current.next;
            i++;
        }
        let newHead = current;
        while (current.next != null) {
            current = current.next;
        }
        current.next = this.head;
        this.head = newHead.next;
        newHead.next = null;
    }
 
    print() {

        // console.log(this.head);
        let current = this.head;
        while (current) {
            // console.log(current.data);
            process.stdout.write(current.data + ' -> ')
            current = current.next;
        }
        process.stdout.write("\n")
    }
 

}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);

ll.print();

ll.rorate(1);

ll.print();
