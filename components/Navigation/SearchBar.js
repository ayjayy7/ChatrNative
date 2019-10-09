import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import * as actionCreators from "../../redux/actions/index";
import { connect } from "react-redux";

class SearchBar extends React.Component {
  render() {
    return (
      <View className="form-group col-12">
        <View className="input-group">
          <input
            className="form-control"
            type="text"
            onchangeText={event =>
              this.props.filterChannels(event.target.value)
            }
          />
          <View className="input-group-append">

            <Text className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </Text>

          </View>
        </View>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    filterChannels: query => dispatch(actionCreators.filterChannels(query))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
