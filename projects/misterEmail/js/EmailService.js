export default  {
   getEmailList
  };


let gEmailList = [
    {
        subject: 'Wassap?',
        body: 'Pick up!',
        isRead: false,
        sentAt: 1551133930594
    },

    {
        subject: 'Hello, How Are You?',
        body: 'Call Me now.',
        isRead: true,
        sentAt: 1551133930695
    },
    {
        subject: 'Simmmmmm!',
        body: 'Terufushhhhhhh',
        isRead: true,
        sentAt: 1551133930695
    }
];

function getEmailList() {
    return Promise.resolve([...gEmailList]);
}

console.log('EMAILS: ', gEmailList);

