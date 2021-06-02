$(document).ready(function() {

    //Item One
    let list1 = $('#1');
    let firstBtn = $('<button class="first-btn">Click Me</button>');
    firstBtn.appendTo('#1');
    
    
    //Item two
    firstBtn.on('click', function() {

        alert("I'm a Mean Message");

    });

    $('form').on('submit', function(e) {

        e.preventDefault();
        // alert("Hi I'm Tom!");
        let inputVal = $('input[type="text"]').val();
        let alertVal = inputVal;
        alert(alertVal);

    });

    //Item Three

    let item3 = $('#3');
    item3.on('mouseenter', function() {

        item3.css('background', 'grey');

    });

    item3.on('mouseleave', function() {

        item3.css('background', '');

    });

    //Item Four
    let item4 = $('#4');

    let paragraph = $('<p class="para">This text changes color when clicked.</p>');
    // paragraph.innerText = "I'm a Mean Message";

    item4.append(paragraph);

    paragraph.click(function() {

        function youGiveMeNewColorNow() {

            let newCol = '#' +Math.floor(Math.random() *16777215).toString(16);
            return newCol;
        };

        paragraph.css('color', youGiveMeNewColorNow);

    });


    //Item Five
    let item5 = $('#5');

    let btnDiv = $("<div></div>");
    let btnName = $("<button class='my-name'>My Name</button>");
    btnName.css('margin-bottom', '10px');
    btnDiv.append(btnName);
    item5.append(btnDiv);

    btnName.click(function() {

        let span1 = $('<br><span>Cody Turner</span>');
        btnDiv.append(span1);

    });

    //Item Six
    let friends = ['Adam', 'Christopher', 'Jake', 'Garrett', 'Josh', 'Jeff', 'Marvelles', 'Dustin', 'Ginger', 'Jacob'];
    
    let item6 = $('#6');
    let friendsBtn = $('#friends-btn');
    
    friendsBtn.click(function() {

        let friendsList = $('#friends-list');
        
        friends.forEach(function(element) {
        
            let listItem = $("<li></li>");
            listItem.append(element).val();
            friendsList.append(listItem);

        });
    

    });


});