export class OrderCreatedEvent {
    constructor(
        public readonly orderId: string,
        public readonly userId: string,
        public readonly price: string

    ){
        this.toString()
    }

    toString() {
        return JSON.stringify({
            orderId: this.orderId,
            userId: this.userId,
            price: this.price
        })
    }
}