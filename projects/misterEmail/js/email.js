export default class Email {
    static nextId = 4;
    constructor(subject, body) {
        this.subject = subject
        this.body = body
        this.isRead = false
        this.sentAt = Date.now()
        this.id = Email.nextId++
        this.formattedTime = () => {
            var date = new Date();
            var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            return str;
        },
            this.sentAtFormatted = this.formattedTime()

    }
}