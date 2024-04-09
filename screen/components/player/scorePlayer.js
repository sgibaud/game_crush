import React from "react";
import { ImageBackground, Text, View, Pressable } from "react-native";

// Components
import Player from "./player.js";

// import constants
import { images } from "../../../constants";

// import database
import { collection, query, getDocs, limit, orderBy } from "firebase/firestore";
import { db } from "../../../database/firebaseDb.js";

// CSS
import { styles } from "../../../css/style";

export default class ScorePlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: [],
    };
  }

  async componentDidMount() {
    const player = await this.scorePlayer();
    this.setState({ player: player });
  }

  scorePlayer = async () => {
    try {
      const q = query(collection(db, "bejewel"), orderBy("level"), limit(6));
      const querySnapshot = await getDocs(q);

      if (querySnapshot) {
        const playersData = querySnapshot.docs.map((doc) => doc.data());
        if (playersData && playersData.length > 0) {
          playersData.sort((a, b) => b.level - a.level);
        }
        // console.log(playersData.level.sort());
        return playersData;
      } else {
        console.error("Aucun document trouvé dans la collection.");
        return null;
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      return null;
    }
  };

  render() {
    const { onPress } = this.props;
    const { player } = this.state;
    return (
      <View style={[styles.container, styles.backgroundModal]}>
        <View style={[styles.boxModal, styles.shadowProp]}>
          <View style={[styles.container, styles.margin]}>
            <Text style={styles.fontModal}>HIGHSCORE</Text>
          </View>
          <View style={[styles.directionRow, styles.triesScore]}>
            <Text style={styles.fontTable}>PLAYER</Text>
            <Text style={styles.fontTable}>LEVEL</Text>
          </View>
          {player.map((player) => (
            <View key={player.id} style={[styles.directionRow, styles.space]}>
              <Player playerScore={player.name} />
              <Player playerScore={player.level} />
            </View>
          ))}
          <Pressable onPress={onPress}>
            <ImageBackground
              source={images.newGame}
              style={styles.newGame}
            ></ImageBackground>
          </Pressable>
        </View>
      </View>
    );
  }
}
