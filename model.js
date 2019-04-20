var Model = function() {
    console.log('model created');
    //books counter
    this.books = 0;
    //observers counter
    this.observers = [];
}

/**
 * MVC methods
 */
Model.prototype.addObserver = function(o) {
    this.observers.push(o);
    console.log('observer added');
}

Model.prototype.deleteObserver = function(o) {
    var index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
    console.log('observer deleted');
}

Model.prototype.notify = function() {
    this.observers.forEach(observer => {
        observer.updateBooksCounter(this.books);
        console.log('observer notified');
    });
}

/**
 * Model methods
 */
Model.prototype.addBook = function() {
    this.books++;
    console.log('book added');
}

Model.prototype.deleteBook = function() {
    this.books > 0 ? this.books-- : this.books = 0;
    console.log('book deleted');
}