var Controller = function(model) {
    console.log('Controller created');
    this.model = model;
}

Controller.prototype.addButtonClick = function() {
    this.model.addBook();
    this.model.notify();
    console.log('controller addButtonClick method');
}

Controller.prototype.deleteButtonClick = function() {
    this.model.deleteBook();
    this.model.notify();
    console.log('controller deleteButtonClick method');
}