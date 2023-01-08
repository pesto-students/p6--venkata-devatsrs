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

    remove(element) {

        if (this.head === null) {
            return false;
        } else {
            let current = this.head;
            let index = 0;

            if (index === 0 && current.data === element) {
                this.head = this.head.next;
                this.size--;
                return true;
            }

            while (current.next !== null) {

                if (current.next.data === element) {
                    current.next = current.next.next
                    this.size--;
                    return true;
                }
                current = current.next;
            }
        }
    }

    search(element) {

        let current = this.head;
        let i = 0
        while (current) {
            if (current.data === element) {
                console.log('search ', element, ' at ', i);
                break;
            }
            i++;
            current = current.next;
        }

        return null;

    }
    update() {

    }

    getAt(index) {
        let current = this.head;
        let i = 0
        while (current) {
            if (i === index) {
                console.log('getAt ', current.data);
                break;
            }
            i++;
            current = current.next;
        }

        return null;
    }
    insertAt(index, data) {

        const node = new Node(data);

        let current = this.head;
        let i = 0;

        while (current.next !== null) {
            if (index === 0) {
                node.next = current;
                this.head = node;
                this.size++;
                break;
            } else if (i === index) {
                node.next = current.next;
                current.next = node;
                this.size++;
                break;
            }
            current = current.next;
            i++;
        }
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

    isEmpty() {
        return this.head === null;
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

    length() {
        console.log("Length is ", this.size);
    }

}

const ll = new LinkedList();
ll.append(1);
ll.append(2);
ll.append(3);
ll.append(4);
ll.append(5);
ll.append(6);
// ll.insertAt(0, 11);

//ll.remove(5);
ll.print();
ll.reverse(5);
ll.print();

//
// ll.search(6);
// ll.length();

