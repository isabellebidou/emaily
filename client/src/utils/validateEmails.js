const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//https://emailregex.com/
export default (emails) => {
    emails = emails.lastIndexOf(",") === emails.length-1 ? emails.substr(0,emails.length-1) : emails;
    const invalidEmails = emails.split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

    if (invalidEmails.length) {
        return `these emails are invalid : ${invalidEmails}`;
    }
    return;
}