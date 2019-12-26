import emailStorageService from '../js/emailStorageService.js'

export default {
    getEmailList,
    findEmailById,
    markEmailAsRead,
    deleteEmail
}

let gId = 1;

let gCurrEmail = {};

let gEmailList = [
    {
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594,
        id: gId++
    },

    {
        subject: 'Hello, How Are You?',
        body: 'Call Me now.',
        isRead: false,
        sentAt: 1551133930695,
        id: gId++
    },
    {
        subject: 'Simmmmmm!',
        body: 'Terufushhhhhhh',
        isRead: false,
        sentAt: 1551133930695,
        id: gId++

    }
]

function getEmailList() {
    let emailList = emailStorageService.loadFromStorage('gEmailList')
    console.log('EMAIL LIST FROM STORAGE', emailList)

    if (!emailList) return Promise.resolve([...gEmailList])
    else return Promise.resolve([...emailList])
}

function markEmailAsRead(emailId) {
    let emailToMark = findEmailById(emailId);
    emailToMark.isRead = true;
    console.log('gEmailList after marking email as read:', gEmailList)
    emailStorageService.saveToStorage('gEmailList', gEmailList);
    gCurrEmail = emailToMark;
    updateEmailStatus()
}

function findEmailById(emailId) {
    console.log('email to find by id: ', emailId);

    let email = gEmailList.find(email => email.id === emailId)

    console.log('email FOUND BY ID: ', email);
    return email
}
console.log('EMAILS: ', gEmailList)

function deleteEmail() {
    console.log('Email To Delete: ', gCurrEmail);
    let updatedEmailList = gEmailList.filter(email => email.id !== gCurrEmail.id);
    gEmailList = updatedEmailList;
    emailStorageService.saveToStorage('gEmailList', gEmailList);
    console.log('Updated Email List After Deleting: ', gEmailList);
    console.log('Updated List from storage: ', emailStorageService.loadFromStorage('gEmailList'))
}

function updateEmailStatus() {
    let emailsAmount = gEmailList.length;
    console.log('Emails Amount: ', emailsAmount)
}