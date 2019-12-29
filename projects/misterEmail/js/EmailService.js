import emailStorageService from '../js/emailStorageService.js'
import Email from '../js/email.js'

export default {
    getEmailList,
    findEmailById,
    markEmailAsRead,
    deleteEmail,
    updateEmailStatus,
    addEmail,
    setSortBy,
    replyEmail
}

let gId = 1;

let gCurrEmail = {};

let gFilteredList;

let gEmailAmount;
let gReadEmailAmount = 0;
export let gReadEmailPercent = 0;
let gDeletedEmailAmount = 0;

let gSortBy = 'sentAt';

let gEmailList = [
    // {
    //     subject: 'Wassap?',
    //     body: 'Pick up!',
    //     isRead: false,
    //     sentAt: 1551133930594,
    //     id: gId++,
    //     formattedTime: () => {
    //         var date = new Date();
    //         var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    //         return str;
    //     }
    // },

    // {
    //     subject: 'Hello, How Are You?',
    //     body: 'Call Me now.',
    //     isRead: false,
    //     sentAt: 1551133930695,
    //     id: gId++,
    //     formattedTime: () => {
    //         var date = new Date();
    //         var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    //         return str;
    //     }
    // },
    // {
    //     subject: 'Simmmmmm!',
    //     body: 'Terufushhhhhhh',
    //     isRead: false,
    //     sentAt: 1551133930695,
    //     id: gId++,
    //     formattedTime: () => {
    //         var date = new Date();
    //         var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    //         return str;
    //     }


    // }
]

function getEmailList(filterBy = { txt: '', isRead: 'all', sortBy: 'sentAt' }) {

    let emailList = loadEmailListFromStorage();
    if (!emailList) emailList = [...gEmailList];
    emailList = filterEmailList([...emailList], filterBy);
    gSortBy = filterBy.sortBy
    emailList = sortEmailList(emailList);

    return Promise.resolve(emailList)
}

function filterEmailList(emailList, filterBy) {

    return emailList.filter(email => {
        let emailSubject = email.subject.toLowerCase();
        let emailBody = email.body.toLowerCase();
        let filterByTxt = (filterBy.txt) ? filterBy.txt.toLowerCase() : '';
        return (emailSubject.includes(filterByTxt)
            || emailBody.includes(filterByTxt))
            && (filterBy.isRead === 'all' || email.isRead == eval(filterBy.isRead))
    })
}

function loadEmailListFromStorage() {
    return emailStorageService.loadFromStorage('gEmailList')
}

function markEmailAsRead(emailId) {
    let emailToMark = findEmailById(emailId);
    if (!emailToMark.isRead) {
        gReadEmailAmount++;
        updateEmailStatus()
    }
    emailToMark.isRead = true;
    emailStorageService.saveToStorage('gEmailList', gEmailList);
    gCurrEmail = emailToMark;

}

function findEmailById(emailId) {
    let email = gEmailList.find(email => email.id === emailId)
    return email
}

function deleteEmail() {
    let updatedEmailList = gEmailList.filter(email => email.id !== gCurrEmail.id);
    gEmailList = updatedEmailList;
    emailStorageService.saveToStorage('gEmailList', gEmailList);
    gDeletedEmailAmount++;
    if (gCurrEmail.isRead) gReadEmailAmount--;
    gEmailAmount--;
    updateEmailStatus()

}

function updateEmailStatus() {
    gEmailAmount = gEmailList.length;
    gReadEmailPercent = Math.floor(gReadEmailAmount / (gEmailAmount / 100))
}

function addEmail(emailContent = { subject: 'hahaha', body: 'lalala', sentAt: Date.now() }) {
    console.log('here')
    let email = new Email(emailContent.subject, emailContent.body)
    gEmailList = [...gEmailList, email];
    emailStorageService.saveToStorage('gEmailList', gEmailList);
    console.log('Saved List: ', gEmailList)
}

// addEmail()

function setSortBy(sortBy) {
    gSortBy = sortBy;
}

function compareEmailsForSorting(email1, email2) {

    const emailA = (gSortBy === 'subject') ?
        email1[gSortBy].toUpperCase() :
        email1[gSortBy]
    const emailB = (gSortBy === 'subject') ?
        email2[gSortBy].toUpperCase() :
        email2[gSortBy]

    let comparison = 0;
    if (emailA > emailB) {
        comparison = 1;
    } else if (emailA < emailB) {
        comparison = -1;
    }
    return comparison;
}

function sortEmailList(emailList) {
    return emailList.sort(compareEmailsForSorting)
}

function replyEmail(reply) {
    console.log('REPLY: ', reply)
    let emailToReply = findEmailById(+reply.id);
    console.log(emailToReply);
    emailToReply.subject = reply.subject;
    emailToReply.body = reply.body;
    emailStorageService.saveToStorage('gEmailList', gEmailList)
}