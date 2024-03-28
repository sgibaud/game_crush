import React from "react";
import { View, ImageBackground, Modal, TouchableOpacity } from "react-native";

// COMPONENTS
import LevelBar from "./components/LevelBar.js";
import BasicDisplay from "../screen/components/BasicDisplay.js";
import BasicDisplay2 from "../screen/components/BasicDisplay2.js";
import Box from "./components/gridAndJewel/box.js";
import ScorePlayer from "./components/player/scorePlayer.js";
import ModalPause from "./components/pause.js";

// import constants
import { images } from "../constants";

// CSS
import { styles } from "../css/style.js";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: 0,
      score: 80,
      width: "50%",
      tries: 5,
      time: 0,
      matrix: [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]],
      level: 0,
      style: null,
      status: true,
      modalVisible: false,
      modalScore: false,
      pause: true,
      background: [],
      backgroundRandom: [
        images.back_1,
        images.back_2,
        images.back_3,
        images.back_4,
        images.back_5,
        images.back_6,
        images.back_7,
      ],
    };
  }

  // decrementation de la barre de temps
  componentDidMount() {
    this.count();
  }

  count() {
	  return null;
    let counter = 186;
    const interval = setInterval(() => {
      if (!this.state.status) {
        this.setState({ width: counter });
      } else {
        counter = counter - this.state.score;
        this.setState({
          width: counter,
        });
        if (counter <= 0) {
          this.setState({
            width: 0,
          });
          this.setState({ modalScore: true });
          clearInterval(interval);
        }
      }
    }, 3000);
  }
	
	
  
	  


  // placement des background
  generateRandomBackground = () => {
    let i = Math.floor(Math.random() * this.state.backgroundRandom.length);
    return this.state.backgroundRandom[i];
  };
  
// Fonctions de gestion grille/jeu

	newgame(t) {  //Lance une nouvelle partie.
		this.state.tries = t;
		this.state.score = 0;
		this.state.level = 0;
		this.state.time = 0;
		this.state.game = 1;
	}

	newmatrix(x,y){ //Crée une nouvelle matrice aléatoire
		let res= Array(x);
		let col= Array(y);
		let val= 0;
		for(let i=0;i<x;i++){
			for(let j=0;j<y;j++){
				val = this.randint(1,7);
				while(!((((i<2)&&(j<2))||((i<2)&&((col[j-1]!=val)||(col[j-2]!=val))))
				||((j<2)&&((res[i-1][j]!=val)||(res[i-2][j]!=val)))||(((res[i-1][j]!=val)||(res[i-2][j]!=val))&&((col[j-1]!=val)||(col[j-2]!=val))))){
					val = this.randint(1,7);
					}
				col[j] = val;
				}
			res[i] = col;
			col = [];
			}
		this.matrix = res;
		}
	
	swap(a, b, usetry = 1) { //Echange deux gemmes, usetry permet de savoir si c'est une action du joueur
		console.log("swap:");
		console.log(a);
		console.log(b);
		
		if(!(this.inbounds(a))||!(this.inbounds(b))){return null}
		
		let temp = this.matrix[a[0]][a[1]];
		this.matrix[a[0]][a[1]] = this.matrix[b[0]][b[1]];
		this.matrix[b[0]][b[1]] = temp;
		
		if(usetry == 1){
			if ((this.check(a) == false)&&(this.check(b) == false)){ // On test pour savoir si on casse des gemmes.
				this.tries--;
				this.swap(a,b,0);
				if (this.state.tries <= 0) { this.endgame("No more tries left."); }
				}
			}
	}
	
	check(position){ //Vérifie la présence de gemmes a casser. Prend position et calcule si a casser puis initialise cassage. Renvoie bool true si a casser false sinon.
		console.log("Position:");
		console.log(position);
		let didcrush = false;
		let direction = [[-1,0],[0,-1],[1,0],[0,1]];
		let limite = [0,0,0,0];
		for(i=0;i<4;i++){
			curseur = [position[0]+direction[i][0],position[1]+direction[i][1]];
			while((this.inbounds(curseur))){
				if(this.matrix[curseur[0]][curseur[1]] == this.matrix[position[0]][position[1]]){
					limite[i]= limite[i]+1;
					curseur = [curseur[0]+direction[i][0],curseur[1]+direction[i][1]];
					}
				else{break;}
				}
			}
		if(limite[0]+limite[2]>=2){
			this.crush([position[0]-limite[0],position[1]],[position[0]+limite[2],position[1]]);
			didcrush = true;
			}
		if(limite[1]+limite[3]>=2){
			this.crush([position[0],position[1]-limite[1]],[position[0],[position[1]+limite[3]]]);
			didcrush = true;
			}
		return didcrush;
		}
		
	crush(start,end){ //Casse une serie de gemmes données. Prend deux paires de coordonnées en entrée.
		console.log("Debut/fin de crush");
		console.log(start);
		console.log(end);
		if(start[0]==end[0]){ //Combinaison sur une ligne.
			for(let i=start[1];i<=end[1];i++){
				let l = this.matrix[i].length;
				for(let j=start[0];j<l-1;j++){
					this.matrix[j][i]= this.matrix[j+1][i];
					}
				this.state.matrix[i][l-1]= -1;
				console.log(this.matrix[i][l-1]);
				this.fill(i);
				}
			}
		if(start[1]==end[1]){ //Combinaison sur une colonne.
			for(let j=0;j<=end[0]-start[0];j++){
				if (j+end[1]<this.matrix[0].length){
					this.matrix[j+start[0]][start[1]]= this.matrix[j+end[0]][start[1]];
					this.matrix[j+end[0]][start[1]]=-1;
					console.log(this.matrix[j+end[0]][start[1]]);
					}
				else{
					this.state.matrix[j+start[0]][start[1]]=-1;
					console.log(this.matrix[j+start[0]][start[1]]);
					}
					console.log(this.matrix[start[1]]);
			this.fill(start[1]);
			}
		}
		}
	
	fill(column){ //Remplis une colonne donnée de la matrice.
		console.log("fill:");
		console.log(column);
		console.log("------");	
		console.log(this.matrix);
		for(let i=0;i<this.state.matrix[0].length;i++){
				if(this.matrix[i][column] == -1){this.matrix[i][column]=this.randint(1,7);}
			}
		console.log("------");
		console.log(this.matrix);
		}
		
	randint(min=0,range=10){ // Renvoie un nombre entre min et min+range.
		return Math.floor(Math.random() * range+1)+min; //+1 car 1 exclu de math.random()
		}
		
	matrixtoarray(){  //Convertis la matrice en liste monodimentionnelle.
		let array= [];
		for(let i=0;i<this.state.matrix.length;i++){
			for(let j=0;j<this.state.matrix[0].length;j++){
				array.push(this.state.matrix[i][j]);
				}
			}
		return array;
		}
		
	inbounds(position){ // Teste si une position est dans les limites de la matrice
		return ((position[0]>=0)&&(position[0]<this.matrix.length))&&((position[1]>=0)&&(position[0]<this.matrix[0].length));
		}
		
	hint(){ //Renvoie les deux position d'un échange fonctionnel (non aléatoire, prend le premier).
		let direction = [[1,0],[0,1]];
		let val= -1;
		for(let i=0;i<this.state.matrix.length;i++){
			for(let j=0;j<this.state.matrix[0].length;j++){
				let l=1;
				for(let k=0;k<2;k++){
					
					if(this.state.matrix[i-2*direction[k][0]][j-2*direction[k][1]] = this.state.matrix[i-direction[k][0]][j-direction[k][1]]){
						val = this.state.matrix[i-2*direction[k][0]][j-2*direction[k][1]];
						}
					if(this.state.matrix[i+2*direction[k][0]][j+2*direction[k][1]] = this.state.matrix[i+direction[k][0]][j+direction[k][1]]){
						val = this.state.matrix[i+2*direction[k][0]][j+2*direction[k][1]];
						}
					if(this.state.matrix[i+direction[k][0]][j+direction[k][1]] = this.state.matrix[i-direction[k][0]][j-direction[k][1]]){
						val = this.state.matrix[i+direction[k][0]][j+direction[k][1]];
						}
					
					if(val = this.state.matrix[i-direction[l][0]][j-direction[l][1]]){
						return [[i,j],[i-direction[l][0],j-direction[l][1]]]
						}
					if(val = this.state.matrix[i+direction[l][0]][j+direction[l][1]]){
						return [[i,j],[i+direction[l][0],j+direction[l][1]]]
						}
					val = -1;
					l--;
					}
				}
			}
		}	
		
	tick() { //Ecoulement du temps et perte de score selon ce dernier.
		if (this.state.game != 0) {
			this.state.time++;
			if (this.state.time % 3 == 0) {
				this.state.score = this.state.score - level;
				if (this.state.score <= 0) { this.endgame("Ran out of time."); }
			}
			setTimeout(this.tick(), 1000)
		}
	}

	endgame(EndMsg) { //Fin de partie.
	this.state.game = 0;
	//this.displayendgame(this.time,this.score,this.tries,this.level,EndMsg)
	 }

  // function modal
  showModal = () => {
    this.setState({ modalVisible: true });
    this.setState({ status: !this.state.status });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
    this.setState({ status: !this.state.status });
  };

  render() {
    let { score, tries } = this.props;
    this.newmatrix(8,8);
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={this.generateRandomBackground()} style={styles.ImageBackground}>
        <View style={styles.game}>
          <View style={styles.flex}>
            <View style={styles.flex}>
              <View>
                <View>
                  {/* Modal pour mettre en pause */}
                  <Modal
                    animation="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    hardwareAccelerated={true}
                    statusBarTranslucent={true}
                    onRequestClose={this.hideModal}
                  >
                    <ModalPause onPress={this.hideModal} />
                  </Modal>

                  {/* Modal pour l'affichage des scores finaux */}
                  <Modal
                    visible={this.state.modalScore}
                    animation="slide"
                    transparent={true}
                    statusBarTranslucent={true}
                  >
                    <ScorePlayer onPress={() => navigate("Login")} />
                  </Modal>

                  <View style={styles.triesScore2}>
                    <TouchableOpacity onPress={this.showModal}>
                      <BasicDisplay2 iconBlue={images.iconPause} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <BasicDisplay2 iconBlue={images.iconHelp} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              {/* Icone du nombre d'essai et affichage du level */}
              <View style={styles.triesScore}>
                <BasicDisplay innertext={this.state.tries} outertext="ESSAI" />
                <BasicDisplay innertext={this.state.score} outertext="LEVEL" />
              </View>
            </View>
            {/* <ScoreCard
							tries={this.state.tries}
							score={this.state.score}
							// showModal={this.showModal}
							// hideModal={this.hideModal}
							/> */}

            {/* Compteur */}
            <LevelBar score={this.state.width} />
          </View>

          {/* affichage de la grille et des joyaux */}
          <View style={styles.flex_2}>
            {/* <GameGrid matrix={this.state.matrix} swap={(a, b) => this.swap(a, b)} style={styles} /> */}
            {this.state.status ? <Box matrice = {this.matrix} swap = {(a,b) => this.swap(a,b)}/> : null}
          </View>
        </View>
      </ImageBackground>
    );
  }
}
