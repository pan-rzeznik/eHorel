export class Products {
   constructor(public items) {}

   get totalItemsCount() {
       return this.items.length;
   }

   get totalItemsInStorage() {
    let count = 0;

    this.items.forEach(element => {
        count += element.storage;
    });

    return count;
}

}
