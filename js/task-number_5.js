"ust strict"

const checkForSpam = function (message) {
    let cleanMessage = message.toLowerCase();
    let spamList = ['spam', 'sale']

    for (let i = 0; i < spamList.length; i++) {
        if (cleanMessage.includes(spamList[i])) {
            return true
        }
        return false
        
    }
    
};


    





console.log(checkForSpam('Latest technology news')); 

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 