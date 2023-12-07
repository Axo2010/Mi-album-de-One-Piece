var images = ["Brook.png","Crocodile.png", "Katakuri.jpg" , "Law.jpg", "LUffy2.jpg", "Sanji2.jpg"];
           
var names = ["SL Brook","Sir Crocodile", "Charllotte Katakuri", "Trafalgar D. Water Law", "Monkey D. Luffy", "Vinsmoke Sanji"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}
