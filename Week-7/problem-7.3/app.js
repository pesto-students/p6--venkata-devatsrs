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

    addLoop(index){
        let current = this.head;
        let i = 0;
        while(current.next !== null && i < index){
            current = current.next;

        }
        current.next = this.head;
    }

    
    // using slow fast pointer detect loop in linked list
    hasLoop(){
        let slow = this.head;
        let fast = this.head;
        while(slow && fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast){
                console.log("loop found");
                return true;
            }
        }
        console.log("loop not found");
        return false;
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

ll.addLoop(2);

ll.hasLoop();

