//principio da responsabilidade unica

// class Order {
//     public  calculateTotalSum(){ /*...*/}
//     public  getItems(){ /*...*/}
//     public  getItemsCount(){ /*...*/}
//     public  addItem(item: any){ /*...*/}
//     public  deleteItem(item: any){ /*...*/}

//     public printOrder(){ /** */}
//     public showOrder(){ /** */}

//     public load() { /** */}
//     public save() { /** */}
//     public update() { /** */}
//     public delete() { /** */}
// }

class Order {
    public  calculateTotalSum(){ /*...*/}
    public  getItems(){ /*...*/}
    public  getItemsCount(){ /*...*/}
    public  addItem(item: any){ /*...*/}
    public  deleteItem(item: any){ /*...*/}
}

class OrderRepository {
    public load() { /** */}
    public save() { /** */}
    public update() { /** */}
    public delete() { /** */}
}

class OrderViewer {
    public printOrder(){ /** */}
    public showOrder(){ /** */}
}
