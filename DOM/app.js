document.addEventListener('DOMContentLoaded', function() {

    let listCont = document.getElementById('container');
    //Item One
    let item1 = document.getElementById('1');

    let alertBtn = document.createElement('button');
    alertBtn.textContent = "Click Me";
    item1.appendChild(alertBtn);

    alertBtn.addEventListener('click', function() {
        alert('Waasssuuhhhh!');
    });

    //Item Three
    let item3 = document.getElementById('3');
    item3.addEventListener('mouseenter', function(e) {
        e.target.style.backgroundColor = 'grey';
    });

    item3.addEventListener('mouseleave', function(e) {
        e.target.style.backgroundColor = '';
    });

    let item4 = document.getElementById('4');

    let paragraph = document.createElement('p');
    paragraph.textContent = "This text changes color when clicked.";
    item4.appendChild(paragraph);

    paragraph.addEventListener('click', function() {

        function iSayISayGiveMeRandomColor() {

            let generateColor = '#' +Math.floor(Math.random() *16777215).toString(16);
            return generateColor;

        };
        paragraph.style.color = iSayISayGiveMeRandomColor();
    });

    let item5 = document.getElementById('5');
    let div5 = document.createElement('div');
    let button5 = document.createElement('button');
    button5.textContent = 'Suh Doo';
    button5.style.marginBottom = '10px';
    div5.appendChild(button5);
    item5.appendChild(div5);
    
    button5.addEventListener('click', function() {
        
        let lineBr = document.createElement('br');
        let span5 = document.createElement('span');
        span5.textContent = ' Cody Turner';
        div5.appendChild(lineBr);
        div5.appendChild(span5);

    });

    let friends = ['Adam', 'Christopher', 'Jake', 'Garrett', 'Josh', 'Jeff', 'Marvelles', 'Dustin', 'Ginger', 'Jacob'];

    let friendsBtn = document.getElementById('friends-btn');
    friendsBtn.textContent = 'My Friends';
    friendsBtn.style.marginBottom = '10px';
    
    
    friendsBtn.addEventListener('click', function() {
        
        let friendsList = document.getElementById('friends-list');

        friends.forEach(function(item) {

            let friendItem = document.createElement('li');
            let text = document.createTextNode(item);
            friendItem.appendChild(text);
            friendsList.appendChild(friendItem);
            
        })
        
       
    });




});