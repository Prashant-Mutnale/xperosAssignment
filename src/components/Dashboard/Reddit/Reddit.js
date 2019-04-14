import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Platform
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "././styles";
import ThumbnailCardHolder from "../../Shared/Card";
import { reddit_posts } from "../../../redux/actions/redditActions";
import { connect } from "react-redux";
import { Actions } from "react-native-router-flux";

export class RedditModule extends Component {
  state = {
    category: "sports",
    limitValue: 2,
    categorys: [
      {
        label: "Sports",
        value: "sports"
      },
      {
        label: "Food",
        value: "food"
      },
      {
        label: "News",
        value: "news"
      },
      {
        label: "Music",
        value: "music"
      },
      {
        label: "Funny",
        value: "funny"
      },
      {
        label: "Gaming",
        value: "gaming"
      },
      {
        label: "Art",
        value: "art"
      }
    ],
    limit: [
      {
        label: "1",
        value: "1"
      },
      {
        label: "2",
        value: "2"
      },
      {
        label: "3",
        value: "3"
      },
      {
        label: "4",
        value: "4"
      },
      {
        label: "5",
        value: "5"
      },
      {
        label: "6",
        value: "6"
      },
      {
        label: "7",
        value: "7"
      },
      {
        label: "8",
        value: "8"
      },
      {
        label: "9",
        value: "9"
      },
      {
        label: "10",
        value: "10"
      }
    ]
  };
  componentDidMount() {
    this.props.reddit_posts(this.state.category, this.state.limitValue);
  }
  selectCategoryPicker(value, index) {
    this.setState(
      {
        category: value
      },
      () => {
        this.props.reddit_posts(this.state.category, this.state.limitValue);
      }
    );
  }
  selectLimitPicker(value, index) {
    this.setState(
      {
        limitValue: value
      },
      () => {
        this.props.reddit_posts(this.state.category, this.state.limitValue);
      }
    );
  }
  redirectToPost(url) {
    Actions.articleDetails({ articleUrl: url });
  }
  selectHolder = () => {
    return (
      <View style={styles.selectBoxHolder}>
        <View style={styles.selectPickerCategory}>
          <Text style={styles.pickerText}>Category</Text>
          <RNPickerSelect
            placeholder={{
              label: "Select Category",
              value: "sports"
            }}
            items={this.state.categorys}
            onValueChange={(value, index) =>
              this.selectCategoryPicker(value, index)
            }
            style={pickerSelectStyles}
            value={this.state.favColor}
          />
          {Platform.OS === "ios" ? (
            <View style={styles.arrowHolder}>
              <Ionicons name="ios-arrow-down" size={20} color="grey" />
            </View>
          ) : null}
        </View>
        <View style={styles.selectPickerLimit}>
          <Text style={styles.pickerText}>Limit</Text>
          <RNPickerSelect
            placeholder={{
              label: "Limit",
              value: this.state.limitValue
            }}
            items={this.state.limit}
            onValueChange={(value, index) =>
              this.selectLimitPicker(value, index)
            }
            style={pickerSelectStyles}
            value={this.state.favColor}
          />
          {Platform.OS === "ios" ? (
            <View style={styles.arrowHolder}>
              <Ionicons name="ios-arrow-down" size={20} color="grey" />
            </View>
          ) : null}
        </View>
      </View>
    );
  };
  thumbnailCard(items) {
    return (
      <ThumbnailCardHolder
        thumbnailImage={
          items.item.data.thumbnail !== "nsfw"
            ? items.item.data.thumbnail
            : "https://i.ibb.co/f09QLgW/Default-Image-Thumbnail.png"
        }
        infoText={items.item.data.title}
        likes={"8017"}
        comments={items.item.data.num_comments}
        viewPost={() => this.redirectToPost(items.item.data.url)}
      />
    );
  }
  render() {
    return (
      <View>
        {this.selectHolder()}
        {this.props.redditData !== undefined ? (
          <FlatList
            data={this.props.redditData.children}
            removeClippedSubviews={true}
            maxToRenderPerBatch={10}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={this._keyExtractor}
            renderItem={this.thumbnailCard.bind(this)}
          />
        ) : null}
      </View>
    );
  }
}

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 14,
    paddingTop: 8,
    paddingHorizontal: 8,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    // borderColor: '#fff',
    // borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0)",
    color: "#000"
  },
  inputAndroid: {
    // color: 'white',
    borderBottomWidth: 0,
    borderBottomColor: "#fff"
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    borderTopWidth: 0
  },
  absolute: {
    position: "absolute",
    backgroundColor: "red",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  placeholderColor: "transparent"
};

function mapStateToProps(state) {
  console.log(state.redditPosts.items.data);
  return {
    redditData: state.redditPosts.items.data
  };
}

export default connect(
  mapStateToProps,
  { reddit_posts }
)(RedditModule);
