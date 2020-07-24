// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    avatar: cc.Prefab

    @property(cc.Node)
    com1: cc.Node

    @property(cc.Node)
    com2: cc.Node

    @property(cc.Node)
    com3: cc.Node

    @property(cc.Node)
    com4: cc.Node

    @property(cc.Node)
    com5: cc.Node

    @property(cc.Node)
    layout: cc.Node

    @property(cc.Label)
    seqCom1: cc.Label

    @property(cc.Label)
    seqCom2: cc.Label

    @property(cc.Label)
    seqCom3: cc.Label

    @property(cc.Label)
    seqCom4: cc.Label

    @property(cc.Label)
    seqCom5: cc.Label


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.checkSeq(5)
        this.getAvatar()
        this.checkCom()


    }
    seq = [0, 1, 2, 3, 4, 5]
    newSeq = []

    avatarName1 = ['captain_america_front', 'chuwit_front', 'kim_front', 'mark_front', 'monlo_front', 'pablo_front', 'prayut_front', 'tanee_front', 'trump_front', 'wonder_woman_front', 'xi_jinping_front']
    avatarName2 = ['captain_america_side', 'chuwit_side', 'kim_side', 'mark_side', 'monlo_side', 'pablo_side', 'prayut_side', 'tanee_side', 'trump_side', 'wonder_woman_side', 'xi_jinping_side']

    path = ['Avatar/Avatar_Front', 'Avatar/Avatar_Side']

    getAvatar() {
        for (let i = 0; i <= 5; i++) {
            this.randomAvatar(i)
            console.log(i);

        }
    }

    getImageRes(node, url, name) {
        cc.loader.loadRes(url, cc.SpriteAtlas, (_err, atlas) => {
            node.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name)
        })
    }

    picChange(imageNode, url, name) {
        this.getImageRes(imageNode, url, name)
    }

    random(n) {
        return Math.floor(Math.random() * n) + 1
    }

    checkSeq(n) {
        let y = this.random(n)
        console.log('seq player : ' + y);

        this.seq[y] = y
        for (let z = y + 1; z <= 5; z++) {
            this.newSeq.push(z)
        }
        for (let z = 0; z <= y - 1; z++) {
            this.newSeq.push(z)
        }


        console.log(this.newSeq);

    }

    randomAvatar(i) {
        let x = this.random(10)
        console.log(this.avatarName1[x]);
        let testPrefab = cc.instantiate(this.avatar)
        
        console.log('fdsfsdfsdfsdffsd', this.layout.getChildByName(`com${i}`));
        
        if (i == 1) {
            this.com1.addChild(testPrefab)
            //this.com1.active = false
            this.picChange(testPrefab, this.path[1], this.avatarName2[x])
            this.seqCom1.string = 'Seq ' + this.newSeq[0]
        } else if (i == 2) {
            this.com2.addChild(testPrefab)
            //this.com2.active = false
            this.picChange(testPrefab, this.path[0], this.avatarName1[x])
            this.seqCom2.string = 'Seq ' + this.newSeq[1]
        } else if (i == 3) {
            this.com3.addChild(testPrefab)
           //this.com3.active = false
            this.picChange(testPrefab, this.path[0], this.avatarName1[x])
            this.seqCom3.string = 'Seq ' + this.newSeq[2]
        } else if (i == 4) {
            this.com4.addChild(testPrefab)
            //this.com4.active = false
            this.picChange(testPrefab, this.path[0], this.avatarName1[x])
            this.seqCom4.string = 'Seq ' + this.newSeq[3]
        } else if (i == 5) {
            this.com5.addChild(testPrefab)
            //this.com5.active = false
            this.picChange(testPrefab, this.path[1], this.avatarName2[x])
            testPrefab.is3DNode = true
            testPrefab.eulerAngles = cc.v3(x, 180, 0)
            this.seqCom5.string = 'Seq ' + this.newSeq[4]
        } else {

        }

        // for (let i = 0; i < 6; i++) {
        //     let x = this.random()
        //     console.log(i);

        //     console.log(x);

        //     this.picChange(this.avatar, this.path, this.avatarName[x])
        //     let testPrefab = cc.instantiate(this.avatar)
        //     console.log(`com${i}`);

        // 	this[`com${i}`].addChild(testPrefab)
        // }
    }

    checkCom() {
        let com1 = this.random(this.newSeq.length)
        console.log('com1 ' + com1);

        let index1 = this.newSeq[com1];

        //this.newSeq.splice(index1, 1);
        //delete this.newSeq[index1]
        console.log(this.newSeq);



        let com2 = this.random(this.newSeq.length)
        console.log('com2 ' + com2);
        let index2 = this.newSeq[com2];

        //this.newSeq.splice(index2, 1);
        //delete this.newSeq[index2]
        console.log(this.newSeq);



    }

    // update (dt) {}
}
