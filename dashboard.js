class Account {
    constructor(firstName,lastName,accountNumber,accountBalance,email,phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
        this.email = email;
        this.phone = phone;
    }

    deposit(amount){
        this.accountBalance += amount;
    }
    withdraw(amount){
        this.accountBalance += amount;
    }
}

function createAccount(){
    
    let firstName = document.querySelector('#firstName');
    let lastName = document.querySelector('#lastName');
    let acctNo = document.querySelector('#acctNo');
    let acctBal = document.querySelector('#acctBal');
    let email = document.querySelector('#email');
    let phone = document.querySelector('#phone');
    let tbody = document.querySelector('#table-body');

    // create a new account instance
    let ourAcct = new Account(firstName.value, lastName.value, acctNo.value, acctNo.value, email.value, phone.value);

    //create new row

    let newRow = document.createElement('tr');

    let emptyTd =document.createElement('td');
    let firstNameTd = document.createElement('td');
    let lastNameTd = document.createElement('td');
    let acctNoTd = document.createElement('td');
    let acctBalTd = document.createElement('td');
    let emailTd = document.createElement('td');
    let phoneTd = document.createElement('td');

    emptyTd.innerHTML="";    
    firstNameTd.innerHTML = ourAcct.firstName;
    lastNameTd.innerHTML = ourAcct.lastName;
    acctNoTd.innerHTML = ourAcct.accountNumber;
    acctBalTd.innerHTML = ourAcct.accountBalance;
    emailTd.innerHTML = ourAcct.email;
    phoneTd.innerHTML = ourAcct.phone;
    
    //Append the table date to the table row, tr
    newRow.appendChild(emptyTd);
    newRow.appendChild(firstNameTd);
    newRow.appendChild(lastNameTd);
    newRow.appendChild(acctNoTd);
    newRow.appendChild(acctBalTd);
    newRow.appendChild(emailTd);
    newRow.appendChild(phoneTd);

    //append table row tbody  
    tbody.appendChild(newRow);

}
