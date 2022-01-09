canvas = new fabric.Canvas("my_canvas")
playerx = 10
playery = 10
block_width = 30
block_height = 30
player_object = ""
block_object = ""
function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object = img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:playery, left:playerx
        });
        canvas.add(player_object)
    });
}
function block_update(new_image){
    fabric.Image.fromURL(new_image, function(img){
        block_object = img
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:playery, left:playerx
        });
        canvas.add(block_object)
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode
    console.log(keypressed)
    if (e.shiftKey == true && keypressed == '80'){
        block_width += 10
        block_height += 10
        document.getElementById("c_width").innerHTML = block_width
        document.getElementById("c_height").innerHTML = block_height
    }
    if (e.shiftKey == true && keypressed == '77'){
        block_width -= 10
        block_height -= 10
        document.getElementById("c_width").innerHTML = block_width
        document.getElementById("c_height").innerHTML = block_height
    }
    if (keypressed == '37'){
        moveleft()
    }
    if (keypressed == '38'){
        moveup()
    }
    if (keypressed == '39'){
        moveright()
    }
    if (keypressed == '40'){
        movedown()
    }
    if (keypressed == '67'){
        block_update("cloud.jpg")
    }
    if (keypressed == '68'){
        block_update("dark_green.png")
    }
    if (keypressed == '71'){
        block_update("ground.png")
    }
    if (keypressed == '76'){
        block_update("light_green.png")
    }
    if (keypressed == '82'){
        block_update("roof.jpg")
    }
    if (keypressed == '84'){
        block_update("trunk.jpg")
    }
    if (keypressed == '85'){
        block_update("unique.png")
    }
    if (keypressed == '87'){
        block_update("wall.jpg")
    }
    if (keypressed == '89'){
        block_update("yellow_wall.png")
    }

}
function moveup(){
    if (playery >= 0){
        playery -= block_height
        canvas.remove(player_object)
        player_update()
    }
}
function movedown(){
    if (playery <= 600){
        playery += block_height
        canvas.remove(player_object)
        player_update()
    }
}
function moveleft(){
    if (playerx >= 0){
        playerx -= block_width
        canvas.remove(player_object)
        player_update()
    }
}
function moveright(){
    if (playerx <= 1000){
        playerx += block_width
        canvas.remove(player_object)
        player_update()
    }
}