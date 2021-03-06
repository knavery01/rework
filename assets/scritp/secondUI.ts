// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
var nickName
var ran
var sumPs = 0
var sumCs1 = 0
var sumCs2 = 0
var sumPlayer =[]
var sumCom1 =[]
var sumCom2 =[]



@ccclass
export default class NewClass extends cc.Component {

	@property(cc.Node)
	layout: cc.Node;

	@property(cc.Node)
	btnSubmit: cc.Node;

	@property(cc.Node)
	btnRandom: cc.Node;

	@property(cc.Node)
	paper: cc.Node;

	@property(cc.Node)
	rock: cc.Node;

	@property(cc.Node)
	scissor: cc.Node;

	@property(cc.Node)
	p: cc.Node;

	@property(cc.Node)
	c1: cc.Node;

	@property(cc.Node)
	c2: cc.Node;

	@property(cc.Label)
	pName: cc.Label;

	@property(cc.Node)
	result1: cc.Node;

	@property(cc.Node)
	result2: cc.Node;

	@property(cc.Node)
	result: cc.Node;

	@property(cc.Label)
	playerScore: cc.Label;

	@property(cc.Label)
	com1Score: cc.Label;

	@property(cc.Label)
	com2Score: cc.Label;

	@property(cc.Node)
	winner: cc.Node;

	@property(cc.Label)
	winnerName: cc.Label;

	@property(cc.Node)
	allLayout: cc.Node;

	@property(cc.Prefab)
	iconPrefab1: cc.Prefab;

	@property(cc.Prefab)
	iconPrefab2: cc.Prefab;

	@property(cc.Prefab)
	iconPrefab3: cc.Prefab;

	@property(cc.Node)
	LayoutPlayer: cc.Node;

	@property(cc.Node)
	LayoutCom1: cc.Node;

	@property(cc.Node)
	LayoutCom2: cc.Node;

	@property(cc.Node)
	allSum: cc.Node;

	@property(cc.Label)
	playerName: cc.Label;


	num = 1
	path = ['img/BoardGame', 'img/Result']


	// LIFE-CYCLE CALLBACKS:


	onLoad() {
		nickName = localStorage.getItem("nickname");
		console.log(nickName);
		this.pName.string = nickName
		//console.log(this.pName.string);
		this.rock.getComponent(cc.Animation).play('chooseRock')
	}

	start() {

	}

	anime(n) {
		console.log('anime' + n);

		if (n == 1) {
			this.rock.getComponent(cc.Animation).play('chooseRock')
			this.paper.getComponent(cc.Animation).play('paper')
			this.scissor.getComponent(cc.Animation).play('scissor')
		} else if (n == 2) {
			this.rock.getComponent(cc.Animation).play('rock')
			this.paper.getComponent(cc.Animation).play('choosePaper')
			this.scissor.getComponent(cc.Animation).play('scissor')
		} else if (n == 3) {
			this.rock.getComponent(cc.Animation).play('rock')
			this.paper.getComponent(cc.Animation).play('paper')
			this.scissor.getComponent(cc.Animation).play('chooseScissor')
		}
	}

	animeOff() {
		this.rock.getComponent(cc.Animation).play('chooseRock')
		this.paper.getComponent(cc.Animation).play('paper')
		this.scissor.getComponent(cc.Animation).play('scissor')
	}

	random() {
		ran = Math.floor(Math.random() * 3) + 1
		return ran
	}

	randomBtn() {
		this.num = this.random()
		
		
		console.log('ran = ' + ran)
		this.onSelect()
	}

	getImageRes(node, url, name) {
		cc.loader.loadRes(url, cc.SpriteAtlas, (_err, atlas) => {
			console.log('getname' + name);

			node.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(name)
		})
	}

	picChange(imageNode, url, name) {
		this.getImageRes(imageNode, url, name)
	}

	picName(choose) {
		if (choose == 1) {
			return 'Result0'
		} else if (choose == 2) {
			return 'Result2'
		} else if (choose == 3) {
			return 'Result1'
		}
	}

	nextBtn() {
		this.result.active = false
		this.layout.active = true
		this.checkWin()
		this.rock.getComponent(cc.Animation).play("chooseRock")
	}

	checkWin() {
		if (sumPs >= 5 || sumCs1 >= 5 || sumCs2 >= 5) {
			this.allLayout.active = false
			this.winner.active = true
			this.allQuery()
				
		}

		if (sumPs >= 5) {
			this.winnerName.string = nickName
			
		} else if (sumCs1 >= 5) {
			this.winnerName.string = 'Com1'
			
		} else if (sumCs2 >= 5) {
			this.winnerName.string = 'Com2'
			
		}
	}


	playAgain() {
		sumPs = 0
		sumCs1 = 0
		sumCs2 = 0
		cc.game.restart()
	}

	showScore(sc1, sc2, sc3) {
		this.playerScore.string = nickName + ' : ' + sc1
		this.com1Score.string = 'Com1 : ' + sc2
		this.com2Score.string = 'Com2 : ' + sc3
	}

	addSum(x,y,z){
		sumPlayer.push(x)
		sumCom1.push(y)
		sumCom2.push(z)
	}

	allQuery(){
		this.querySum(sumPlayer,this.iconPrefab1,this.LayoutPlayer)
		this.querySum(sumCom1,this.iconPrefab2,this.LayoutCom1)
		this.querySum(sumCom2,this.iconPrefab3,this.LayoutCom2)
	}

	showStat(){
		this.allSum.active = true
		this.playerName.string = nickName
	}

	closeStat(){
		this.allSum.active = false
		this.winner.active = true
	}

	

	querySum(array,icon,layout){
		
		for(let index = array.length-5; index<array.length; index++){
			let testPrefab = cc.instantiate(icon)
			layout.addChild(testPrefab)

			if(array[index]==1){
				this.picChange(testPrefab,this.path[1],'IconResult0')
				
			}else if(array[index]==2){
				this.picChange(testPrefab,this.path[1],'IconResult2')
			}else{
				this.picChange(testPrefab,this.path[1],'IconResult1')
			}
			
		}
			
		
	}



	onSelect() {


		this.result.active = true
		this.layout.active = false
		let n = this.num //disable button

		console.log('n = ' + n)
		let c1 = this.comChoose()
		let c2 = this.comChoose()
		let picP = this.picName(n)
		let pic1 = this.picName(c1)
		let pic2 = this.picName(c2)

		this.addSum(n,c1,c2)
		
		
		console.log(sumPlayer)
		console.log(sumCom1)
		console.log(sumCom2)
		

		this.picChange(this.p, this.path[1], picP)
		this.picChange(this.c1, this.path[1], pic1)
		this.picChange(this.c2, this.path[1], pic2)
		console.log('c1 = ' + c1)
		console.log('c2 = ' + c2)

		let x1 = this.check(n, c1)
		let x2 = this.check(n, c2)
		let y1 = this.check(c1, n)
		let y2 = this.check(c1, c2)
		let z1 = this.check(c2, n)
		let z2 = this.check(c2, c1)

		let ps = x1 + x2
		let cs1 = y1 + y2
		let cs2 = z1 + z2

		sumPs = sumPs + ps
		sumCs1 = sumCs1 + cs1
		sumCs2 = sumCs2 + cs2

		this.showScore(sumPs, sumCs1, sumCs2)

		let showResult1 = this.showResult(x1)
		let showResult2 = this.showResult(x2)

		this.picChange(this.result1, this.path[1], showResult1)
		this.picChange(this.result2, this.path[1], showResult2)
		this.animeOff()
		this.num = 1



		console.log('p score = ' + x1 + x2);
		console.log('c1 score = ' + y1 + y2);
		console.log('c2 score = ' + z1 + z2);
		
	}

	onChoose(e, choose) {
		this.anime(choose)
		console.log('choose = ' + choose)
		this.num = choose
		console.log('num = ' + this.num)

	}

	comChoose() {
		this.random()
		// c = ran
		return ran
		//console.log('c ='+c);

	}


	w = 'win'
	l = 'lose'
	d = 'draw'

	showResult(result) {
		if (result == 0) {
			return 'Tie'
		} else if (result == 1) {
			return 'Win'
		} else if (result == -1) {
			return 'Lose'
		}
	}

	check(x, y) {
		if (x == 1) {
			if (y == 1) {
				console.log(this.d);
				return 0
			} else if (y == 2) {
				console.log(this.l);
				return -1
			} else if (y == 3) {
				console.log(this.w);
				return 1
			}
		} else if (x == 2) {
			if (y == 1) {
				console.log(this.w);
				return 1
			} else if (y == 2) {
				console.log(this.d);
				return 0
			} else if (y == 3) {
				console.log(this.l);
				return -1
			}
		} else if (x == 3) {
			if (y == 1) {
				console.log(this.l);
				return -1
			} else if (y == 2) {
				console.log(this.w);
				return 1
			} else if (y == 3) {
				console.log(this.d);
				return 0
			}
		}
	


	}
	// update (dt) {}
}
