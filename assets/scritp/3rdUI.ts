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
        this.randomAvatar()
    }

    avatarName = ['captain_america_front', 'chuwit_front', 'kim_front', 'mark_front', 'monlo_front', 'pablo_front', 'prayut_front', 'tanee_front', 'trumo_front', 'wonder_woman_front', 'xi_jinpinf_front']

    path = 'Avatar/Avatar_Front'

    getImageRes(node, url, name) {
        cc.loader.loadRes(url, cc.SpriteAtlas, (_err, atlas) => {
            node.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name)
        })
    }

    picChange(imageNode, url, name) {
        this.getImageRes(imageNode, url, name)
    }

    random() {
        return Math.floor(Math.random() * 10) + 1
    }

    randomAvatar() {
        let x = this.random()
        console.log(this.avatarName[x]);
        let testPrefab = cc.instantiate(this.avatar)
        this.com1.addChild(testPrefab)
        this.picChange(testPrefab, this.path, this.avatarName[x])



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
