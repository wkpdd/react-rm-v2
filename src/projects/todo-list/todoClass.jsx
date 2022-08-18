class TodoClass {
    constructor(id, title, status) {
        this.id = id
        this.title = title
        this.status = status
    }

    getId() {
        return this.id
    }

    getTitle(){
        return this.title
    }

    getStatus(){
        return this.status
    }
}
export default TodoClass