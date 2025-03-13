const getMemeImage= function(collection,meme){
    return collection.meme_collection[meme.image].image;
}

const setMemeImage = function(collection, meme, image){
    if(meme.image in collection.meme_collection){
        
        let oldkey= collection.meme_collection[meme.image].getImage();
        collection.meme_collection[meme.image].setImage(image);  // Update image using setImage
        console.log("after update",collection.meme_collection[oldkey]);  // Log updated image
        
        let updatedMeme= collection.meme_collection[oldkey];
        addMeme(collection,updatedMeme);
        removeMeme(collection,oldkey);
        console.log("meme image succefully changed"); 
        return;
    }
    else{
        console.log("unvalid meme");
        return;
    }
}


//  methods for meme collection

const addMeme= function(collection,meme){
    if(meme.image in collection.meme_collection){
        console.log("Meme already exist");
        return;
    }
    else{
        collection.meme_collection[meme.image]=meme ; 
        console.log("Meme succefully added");
    }
    
}

const removeMeme= function(collection,image){
    if(!(image in collection.meme_collection)){
        console.log("Meme doesn't exist");
        return;
    }
    else{
        delete collection.meme_collection[image]; 
        console.log("meme succefully deleted");
    }

}


function getRandomElementsFromDict(dictionary, numberOfElements) {
    // Convert the dictionary into an array of keys
    const keys = Object.keys(dictionary);

    // Shuffle the keys array using Fisher-Yates shuffle
    for (let i = keys.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [keys[i], keys[j]] = [keys[j], keys[i]];  // Swap elements
    }

    // Select the first 'numberOfElements' keys after shuffling
    const selectedKeys = keys.slice(0, numberOfElements);

    // Return the selected elements from the dictionary
    const selectedElements = selectedKeys.map(key => dictionary[key]);

    return selectedElements;
}




function Container(name){

    this.name=name;
    this.meme_collection={};
    this.user_collection=[];

    this.getName= function(){
        return(this.name);
    }

    
    this.getMemes= function(){
        return this.meme_collection;

    }

    this.startGame= function(username){
        let rounds=0;
        let user;
    
        if(username===""){
            rounds=1;
            user=null;
        }else{
            rounds=3;
            user= username;
        }
    
        let randomMeme= getRandomElementsFromDict(this.meme_collection,rounds);
        console.log("GAME STARTED",randomMeme);

    }


    // methods for user


    this.addUser= function(user){
        

    }

    this.removeUser = function(user){

    }
    

    this.getUser = function(user){

    }
    
    this.setUsername= function(user, username){

    }

    this.setUserKey = function(user, key){

    }

    this.getUsers= function(){
        
    }


}



function Meme(image, caption_list, score_list ){
    this.image= image;
    this.caption_list=caption_list;
    this.score_list=score_list;

    this.setCaptionScoreList= function(){
        const csList=[];
        if(this.caption_list.length!==7 || this.score_list.length!==7){
            console.log("invalid input: insert correct amount of captions and score");
            return;
        }
        else{
            for (let index = 0; index < this.caption_list.length; index++) {
                const element = {caption: this.caption_list[index], score:this.score_list[index]};
                csList.push(element);
            }
            return csList;
    
        }

    }


    // set and get image

    this.getImage= function(){
        return this.image;
    }

    this.setImage = function(image){
        this.image= image;
        
    }

    // set captionScore list

    this.captionScoreList= this.setCaptionScoreList();


    // get caption_score list
    this.getCaptionScoreList= function(){
        return this.captionScoreList;
    }


    // get and set caption list

    this.setCaptionList= function(caption_list){
        this.caption_list=caption_list;
        this.captionScoreList=this.setCaptionScoreList();
    }

    this.getCaptionList= function(){
        return this.caption_list;

    }

    // get and set score list

    this.setScoreList= function(score_list){
        this.score_list=score_list;
        this.captionScoreList=this.setCaptionScoreList();

    }

    this.getScoreList= function(){
        return this.score_list;

    }


}

function User(username, password){

    this.username= username;
    this.password= password;
    this.meme_collection={};
    this.history=[];

    // geter and setter

    this.getUsername= function(){
        return this.username;
    }

    this.setUsername= function(username){
        this.username=username;
        return;
    }

    this.getPassword= function(){
        return this.password;
    }

    this.setPassword= function(password){
        this.password=password;
        return;
    }

    this.getUserMemes = function(){
        return this.meme_collection;
    }

    this.createMeme= function(image,caption_list,score_list){
        const user_meme= new Meme(image, caption_list,score_list);
        addMeme(this,user_meme);
    }



}





// test phase:


// game start check
const game= new Container("first Game");
console.log(game.getName());

const meme1= new Meme("img1",["cap1","cap2","cap3","cap4","cap5","cap6","cap7"],["s1","s2","s3","s4","s5","s6","s7"]);
const meme2= new Meme("meme2",["meme2","c2","hey","hey","hey","hey","hey"],["s1","s2","hey","hey","hey","hey","hey",]);
//console.log(meme1.getCaptionScoreList());

// testing set and get function of adding meme captions and score list:

/* meme1.setCaptionList(["c1","c2","c3","4",5,6,7]);
console.log(meme1.getCaptionList());
console.log(meme1.getCaptionScoreList());
meme1.setScoreList(["c1","c2","c3","4",5,6,7]);
console.log(meme1.getScoreList());
console.log(meme1.getCaptionScoreList()); */

// add, remove, update images of a  meme in meme collection of admin

addMeme(game,meme1);
addMeme(game,meme2);
addMeme(game,new Meme("meme3",["meme3","c2","hey","hey","hey","hey","hey"],["s1","s2","hey","hey","hey","hey","hey",]));
addMeme(game,new Meme("meme4",["mem4","c2","hey","hey","hey","hey","hey"],["s1","s2","hey","hey","hey","hey","hey",]));
addMeme(game,new Meme("meme5",["meme5","c2","hey","hey","hey","hey","hey"],["s1","s2","hey","hey","hey","hey","hey",]));
addMeme(game,new Meme("meme6",["meme6","c2","hey","hey","hey","hey","hey"],["s1","s2","hey","hey","hey","hey","hey",]));

//console.log(game.getMemes());
//removeMeme(game,meme1.image);
//console.log(game.getMemes());
//setMemeImage(game,meme1,"test_img");
//console.log("game meme collection:\n",game.getMemes()); 
 


//// add, remove, update images of a  meme in meme collection of user

const user1= new User("khushboo", "123456");
user1.createMeme("userimage",["cap1","cap2","cap3","cap4","cap5","cap6","cap7"],["s1","s2","s3","s4","s5","s6","s7"]);
addMeme(user1,meme1);
addMeme(user1,meme2);
//console.log("user meme collection:\n",user1.getUserMemes());

// start a game acording on terms of that a user is present or not

game.startGame("khushboo");