const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const dateInput  = document.querySelector('#input-date');


const cancelBtn =  document.getElementById('btn-cancel');
const confirmBtn =  document.getElementById('btn-confirm');

const expensesList = document.getElementById('expenses-list');
const totalexpensesoutput = document.getElementById('total-expenses');
let totalExpenses=0;
     const clear=() =>{
    reasonInput.value='';
    amountInput.value='';
    dateInput.value='';
                     }
          confirmBtn.addEventListener('click', () => {
            const enteredReason = reasonInput.value;
            const enteredAmount = amountInput.value;
            const entereddate = dateInput.value;
      

        if(enteredReason.trim().length <= 0 ||
            enteredAmount <=0 ||
            enteredAmount.trim().length <= 0||
            entereddate <=0
        ){
            presentAlert();
            return;
        }
        const newItem = document.createElement('ion-item');
        const newItem1 = document.createElement('ion-item');

        newItem1.textContent =  'Expensedate:'+entereddate ;
        expensesList.appendChild(newItem1);

        newItem.textContent = enteredReason+':'+enteredAmount+' dinars';
        expensesList.appendChild(newItem);
        



        totalExpenses +=+enteredAmount;

        totalexpensesoutput.textContent= totalExpenses + 'dinars';



        clear();
});
function presentAlert() {
    const alert= document.createElement('ion-alert');
    alert.header='Alert!';
    alert.message='Please enter valid reason and amount!';
    alert.buttons=[
        {
        text:'yes',
        handler:() =>{
            console.log('Yes')
        }
        },
        {
            text:'No',
            handler:() =>{
                console.log('No')
            }
        }];

document.body.appendChild(alert);
alert.present();
}
cancelBtn.addEventListener('click',clear);