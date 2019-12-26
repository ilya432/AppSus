import emailStorageService from '../js/emailStorageService.js'



export default {
    getEmailList,
    findEmailById,
    markEmailAsRead
};

let gId = 1;

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
];

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
}

function findEmailById(emailId) {
    console.log('email to find by id: ', emailId);

    let email = gEmailList.find(email => email.id === emailId)

    console.log('email FOUND BY ID: ', email);
    return email
}
console.log('EMAILS: ', gEmailList);



