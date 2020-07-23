// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    nickName: cc.Node;

    @property(cc.Label)
    text: cc.Label;

    @property(cc.Node)
    alert: cc.Node;

    @property(cc.Node)
    block: cc.Node;

    @property(cc.Node)
    pic1: cc.Node;

    @property(cc.Node)
    pic2: cc.Node;

    @property(cc.Node)
    pic3: cc.Node;

    @property(cc.Node)
    animMove: cc.Node;
    

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
      this.pic1.getComponent(cc.Animation).play("title1")
      this.pic2.getComponent(cc.Animation).play("title2")
      this.pic3.getComponent(cc.Animation).play("title3")
      this.animMove.getComponent(cc.Animation).play("paperMove")
     }

    start () {


    }

    disableAlert(){
      this.alert.active = false
      this.block.active = false
    }

    showAlert(text){
      this.alert.active = true
      this.text.string = text
      this.block.active = true
    }

    changeMove1(){
      this.animMove.getComponent(cc.Animation).play("rockMove")
    }



    changeMove2(){
      this.animMove.getComponent(cc.Animation).play("scissorMove")
    }
  

    clickSubmitNickName(){
        var nickName = this.nickName.getChildByName("TEXT_LABEL").getComponent(cc.Label).string
        
        var regex = /[A-Za-z0-9]{1,16}/;
        if (nickName == "" ||nickName == null) {
          let text = "name must be filled out"
          this.showAlert(text)
           //alert("Name must be filled out");
           return false;
         }
         if(nickName.length>16){
          let text = "Name character mustn't be over 16 characters"
          this.showAlert(text)
           //alert("Name character mustn't be over 16 characters");
           return false;
         }
         if(!nickName.match(regex)){
          let text = "Don't use special character allow A-Z,a-z,0-9"
          this.showAlert(text)
           //alert("Don't use special character allow A-Z,a-z,0-9");
          return false;
         }
        localStorage.setItem("nickname", nickName);
        console.log(nickName)
        cc.director.loadScene("second");
   }
    // update (dt) {}
}
