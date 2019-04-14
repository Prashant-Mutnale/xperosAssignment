import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import ExploreCards from "../../Shared/ExploreCards/";
export class ExploreModule extends Component {
  exploreCards = () => {
    return (
      <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
        <ExploreCards
          thumbnailImage={"https://i.ibb.co/xS5hfwd/thumbnail.jpg"}
          headText={"Lorem Ipsum"}
          subText={"British Swim School"}
          address={"66678 s Cicero Ave"}
          rating={4}
        />
        <ExploreCards
          thumbnailImage={"https://i.ibb.co/xS5hfwd/thumbnail.jpg"}
          headText={"Lorem Ipsum"}
          subText={"British Swim School"}
          address={"66678 s Cicero Ave"}
          rating={4}
        />
        <ExploreCards
          thumbnailImage={"https://i.ibb.co/xS5hfwd/thumbnail.jpg"}
          headText={"Lorem Ipsum"}
          subText={"British Swim School"}
          address={"66678 s Cicero Ave"}
          rating={4}
        />
        <ExploreCards
          thumbnailImage={"https://i.ibb.co/xS5hfwd/thumbnail.jpg"}
          headText={"Lorem Ipsum"}
          subText={"British Swim School"}
          address={"66678 s Cicero Ave"}
          rating={4}
        />
        <ExploreCards
          thumbnailImage={"https://i.ibb.co/xS5hfwd/thumbnail.jpg"}
          headText={"Lorem Ipsum"}
          subText={"British Swim School"}
          address={"66678 s Cicero Ave"}
          rating={4}
        />
        <ExploreCards
          thumbnailImage={"https://i.ibb.co/xS5hfwd/thumbnail.jpg"}
          headText={"Lorem Ipsum"}
          subText={"British Swim School"}
          address={"66678 s Cicero Ave"}
          rating={4}
        />
        <ExploreCards
          thumbnailImage={"https://i.ibb.co/xS5hfwd/thumbnail.jpg"}
          headText={"Lorem Ipsum"}
          subText={"British Swim School"}
          address={"66678 s Cicero Ave"}
          rating={4}
        />
      </View>
    );
  };
  render() {
    return (
      <ScrollView>
        <View style={{ flexDirection: "column" }}>{this.exploreCards()}</View>
      </ScrollView>
    );
  }
}

export default ExploreModule;
