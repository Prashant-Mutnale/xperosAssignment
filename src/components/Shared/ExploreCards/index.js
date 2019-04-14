import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import StarRating from "react-native-star-rating";

export default function ExploreCards({
  thumbnailImage,
  headText,
  subText,
  address,
  rating
}) {
  console.log("thumbnailImage", thumbnailImage);
  return (
    <View style={styles.card}>
      <View styles={styles.cardInner}>
        <TouchableOpacity>
          <View>
            <Image
              resizeMode="cover"
              style={{
                height: 130,
                width: "100%"
              }}
              source={{ uri: thumbnailImage }}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.cardContentHead}>{headText}</Text>
            <Text>{subText}</Text>
            <Text>{address}</Text>
          </View>
          <View style={styles.starRaitings}>
            <StarRating
              disabled={true}
              fullStarColor={"green"}
              maxStars={5}
              starSize={14}
              emptyStar={"star"}
              emptyStarColor={"#e9e9e9"}
              rating={rating}
              starColor={"red"}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
