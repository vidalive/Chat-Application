//selected user is Sonny by default
let selectedUser = 'sonnyId';

let userMessageList = {
    sonnyId: [],
    fredoId: [],
    michaelId: []
};

//function for clicking the button for users
function selectUser(e) {
    
    //get the id of the button that user clicked
    selectedUser = e.currentTarget.id;

    //deselect all buttons
    document.querySelector('#sonnyId').classList.remove('select');
    document.querySelector('#fredoId').classList.remove('select');
    document.querySelector('#michaelId').classList.remove('select');


    //select user button
    document.querySelector('#' + selectedUser).classList.add('select');
    
    //prints selected users messages to the message box
    updateMessageHistory();
}


//clicking send button: it will take the input value(string) and add it to the list of messages
function sendMessage(e) {

    //prevent page reload on submit
    e.preventDefault();

    //get text of message from input element
    let messageText = document.querySelector('#inputText').value;

    //Testing
    // console.log(messageText);

    //get the current date and time
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    let dateTime = date + ' ' + time;


    //create message object with date and text properties
    let message = {
        date: dateTime,
        text: messageText
    };

    //put message into correct user list in UserMessageList object
    userMessageList[selectedUser].push(message);

    //prints selected users messages to the message box
    updateMessageHistory();

     //clear the input text
     document.querySelector('#inputText').value = '';

}


 //function for updating message history based on selected user
function updateMessageHistory() {

    //create an empty html string variable
    let html = '';

    //populate html string variable with formatted paragraphs
   let arrayLength =  userMessageList[selectedUser].length;
    for (let i = 0; i < arrayLength; i++) {
        dateStr = userMessageList[selectedUser][i].date;
        textStr = userMessageList[selectedUser][i].text;
        html +=  '<div><span>' + dateStr + '</span>' +  '<span>' + textStr + '</span></div>';
    }

    //assign html string to html element for message box .message-box
    document.querySelector('.message-box').innerHTML = html;

    //move scrollbar
    const box = document.querySelector('.message-box');
    const boxHeight = box.clientHeight;
    box.scrollTo(0, boxHeight);
    
}

