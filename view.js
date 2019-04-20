var View = function(model, controller) {
    console.log('view created');
    this.model = model;
    this.model.addObserver(this);

    this.controller = controller;
    var that = this;

    this.booksCounter = document.getElementById('contador');

    this.addButton = document.getElementById('button-add');
    this.addButton.addEventListener('click', function() {
        console.log('button-add clicked');
        that.controller.addButtonClick();
    });

    this.deleteButton = document.getElementById('button-delete');
    this.deleteButton.addEventListener('click', function() {
        console.log('button-delete clicked');
        that.controller.deleteButtonClick();
    });
}

View.prototype.updateBooksCounter = function(num) {
    this.booksCounter.textContent = "" + num;
    console.log('UI updated');
}