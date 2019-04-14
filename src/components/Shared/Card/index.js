import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ThumbnailCardHolder({
  thumbnailImage,
  infoText,
  likes,
  comments,
  viewPost
}) {
  return (
    <View style={styles.categoryCard}>
      <View style={styles.categoryCardThumbnailHolder}>
        <Image
          style={styles.categoryCardThumbnailImage}
          source={{
            uri: thumbnailImage
          }}
        />
      </View>
      <View style={styles.categoryCardContent}>
        <View>
          <Text numberOfLines={1} ellipsizeMode={"tail"}>
            {infoText}
          </Text>
        </View>
        <View style={styles.categoryView}>
          <View style={styles.categoryLikeHolder}>
            <View style={styles.categoryLikeIcons}>
              <Text>
                <EvilIcons name="like" size={20} color="grey" />
                {likes}
              </Text>
            </View>
            <View style={styles.categoryLikeIcons}>
              <Text>
                <MaterialCommunityIcons
                  name="comment-text-outline"
                  size={20}
                  color="grey"
                />
                {comments}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.viewButton} onPress={viewPost}>
            <Text>VIEW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
