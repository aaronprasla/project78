famPics = ["boy-clipart-9.jpg", "woman.jpg", "R.png"];
names_of_people = ['Me', 'Mom', 'Dad'];
x = 0;
function update(){
    document.getElementById('name').innerHTML = names_of_people[x];
    document.getElementById('family_book_image').src = famPics[x];
    x = x + 1;
    if(x == 3){
        x = 0;
    }
}