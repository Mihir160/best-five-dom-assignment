const player = [];
// products-cart

function displayPlayer()
{
    const cartContainer = document.getElementById("player-add");
    cartContainer.textContent = '';

   if(player.length <= 5){
    for(let i = 0; i < player.length; i++)
    {
        const tr = document.createElement("tr"); 
        tr.innerHTML = `
        <th>${i+1}</th>
        <td class='text-center'>${player[i].pName}</td>
        
        `;
        cartContainer.appendChild(tr);
    }
    
     document.getElementById('calculate-player-price').addEventListener('click',function(){
        let playerPrice = document.getElementById('player-price');
        let playerPriceString = playerPrice.value;   //player price value 
        let playerPriceValue = parseFloat(playerPriceString);
        let totalPlayerPrice = playerPriceValue * player.length; // total player cost multiplication
        let perExpenses = document.getElementById('expenses');
        perExpenses.innerText = totalPlayerPrice;
        console.log(totalPlayerPrice);
     })
    
    document.getElementById('total').addEventListener('click',function(){
        let manger = document.getElementById('managercost');
        let mamgerPriceString = manger.value;  // manager price value 
        let managerPrice = parseFloat(mamgerPriceString);

        let coach = document.getElementById('coachcost');
        let coachPriceString = coach.value; //coach price value
        let coachPrice = parseFloat(coachPriceString);
        let perExpenses = document.getElementById('expenses');
        let perExpensesString = perExpenses.innerText;
        let playerExpense = parseFloat(perExpensesString);

        let total = playerExpense + managerPrice + coachPrice; // total cost
        let totalset = document.getElementById('totalset');
        totalset.innerText = total;
    })

   }
   else{
    alert('five player are allow');
   }  
}



function addToPlayer(element) {
    // disable button
    if(player.length < 5){
        let button = document.getElementById(element.id);
        button.setAttribute('disabled','');
        button.style.backgroundColor = 'gray'
    }

   else{
   
   }
   
//    player name selecte
    const pName = element.parentNode.parentNode.children[0].innerText;
    const pN = {
        pName: pName,
       
    }

    player.push(pN);
    
    displayPlayer();

}