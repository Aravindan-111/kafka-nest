class OrderCreated {
    constructor(
        public readonly orderId: string,
        public readonly userId: string,
        public readonly price: number
    ){}
}