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

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this.head;
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

ll.reverse(5);

ll.print();
