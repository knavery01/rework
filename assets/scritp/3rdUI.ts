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



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        for (let i = 0; i <= 4; i++) {
            this.randomAvatar(i)
            console.log(i);

        }

    }
    seq = [0, 1, 2, 3, 4, 5]

    avatarName1 = ['captain_america_front', 'chuwit_front', 'kim_front', 'mark_front', 'monlo_front', 'pablo_front', 'prayut_front', 'tanee_front', 'trump_front', 'wonder_woman_front', 'xi_jinping_front']
    avatarName2 = ['captain_america_side', 'chuwit_side', 'kim_side', 'mark_side', 'monlo_side', 'pablo_side', 'prayut_side', 'tanee_side', 'trump_side', 'wonder_woman_side', 'xi_jinping_side']

    path = ['Avatar/Avatar_Front','Avatar/Avatar_Side']

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

    checkSeq() {
        let y = this.random(5)
        if (this.seq[y]) {

        }

    }

    randomAvatar(i) {
        let x = this.random(10)
        console.log(this.avatarName1[x]);
        let testPrefab = cc.instantiate(this.avatar)

        if (i == 1) {
            this.com1.addChild(testPrefab)
            this.picChange(testPrefab, this.path[1], this.avatarName2[x])
        }else if (i == 2) {
            this.com2.addChild(testPrefab)
            this.picChange(testPrefab, this.path[0], this.avatarName1[x])
        }else if (i == 3) {
            this.com3.addChild(testPrefab)
            this.picChange(testPrefab, this.path[0], this.avatarName1[x])
        }else if (i == 4) {
            this.com4.addChild(testPrefab)
            this.picChange(testPrefab, this.path[0], this.avatarName1[x])
        }else {
            this.com5.addChild(testPrefab)
            this.picChange(testPrefab, this.path[1], this.avatarName2[x])
            testPrefab.is3DNode = true
            testPrefab.eulerAngles = cc.v3(x, 180, 0)
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

    // update (dt) {}
}
