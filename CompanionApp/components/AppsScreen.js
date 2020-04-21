import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import { SearchBar } from "react-native-elements";
import React, { Component } from "react";


class AppsScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      source: [],
      error: null,
      search: '',
    };
  }

  componentDidMount() {

    this.getData();
  }

  getData = async () => {
    const url = "https://raw.githubusercontent.com/conoro/BangleApps/master/apps.json";
    this.setState({ loading: true });

    try {
      const response = await fetch(url);
      const json = await response.json();
      this.setResult(json);
    } catch (e) {
      this.setState({
        error: 'Error Loading apps',
        loading: false
      });
    }
  };

  ItemSeparator = () => {
    return (
      <View style={{
        height: 2,
        width: "100%",
        backgroundColor: "gray",
      }}
      />
    );

  }

  setResult = (res) => {
    this.setState({
      data:
        [...this.state.data, ...res].sort((a, b) => a.name.localeCompare(b.name)),
      source:
        [...this.state.source, ...res].sort((a, b) => a.name.localeCompare(b.name)),
      error: res.error || null,
      loading: false
    });
  }


  updateSearch = search => {
    this.setState({ search }, () => {
      if ('' == search) {
        this.setState({
          data: [...this.state.source]
        });
        return;
      }

      this.state.data = this.state.source.filter(function (item) {
        return item.name.includes(search);
      }).map(function ({ name, description }) {
        return { name, description };
      });
    });
  };


  onPressAll = () => {
    this.setState({
      data: [...this.state.source]
    });
    return;
  }

  onPressClocks = () => {
    const newData = this.state.data.filter((item) => {
      return item.tags == 'clock';
    })
    this.setState({
      data: newData
    });
  }

  onPressGames = () => {
    const newData = this.state.data.filter((item) => {
      return item.tags == 'game';
    })
    this.setState({
      data: newData
    });
  }

  onPressTools = () => {
    const newData = this.state.data.filter((item) => {
      return item.tags == 'tool';
    })
    this.setState({
      data: newData
    });
  }

  onPressWidgets = () => {
    const newData = this.state.data.filter((item) => {
      return item.tags == 'widget';
    })
    this.setState({
      data: newData
    });
  }

  onPressBluetooth = () => {
    const newData = this.state.data.filter((item) => {
      return item.tags == 'bluetooth';
    })
    this.setState({
      data: newData
    });
  }



  renderItem = (data) =>
    <TouchableOpacity onPress={() => alert('Coming soon ..')} style={styles.list}>
      <Text style={styles.name}>{data.item.name}</Text>
      <Text style={styles.lightText}>{data.item.description}</Text>
    </TouchableOpacity>

  render() {
    return (
      this.state.error != null ?

        <View>
          <Text>{this.state.error}</Text>

        </View> :

        <View style={styles.container}>

          <View>
            <SearchBar
              placeholder="Search Here ..."
              lightTheme
              round editable={true}
              value={this.state.search}
              onChangeText={this.updateSearch}
            />

          </View>
          <View style={styles.buttonContainer}>

            <TouchableOpacity
              style={styles.button}
              onPress={this.onPressAll}  >
              <Text style={styles.button}>All</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this.onPressClocks}  >
              <Text style={styles.button}>Clocks</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this.onPressGames}  >
              <Text style={styles.button}>Games</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this.onPressTools}  >
              <Text style={styles.button}>Tools</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this.onPressWidgets}  >
              <Text style={styles.button}>Widgets</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={this.onPressBluetooth}  >
              <Text style={styles.button}>Bluetooth</Text>
            </TouchableOpacity>

          </View>

          <FlatList
            // ListHeaderComponent={this.renderHeader}
            data={this.state.data}
            ItemSeparatorComponent={this.ItemSeparator}
            keyExtractor={(item, id) => String(id)}
            renderItem={item => this.renderItem(item)}
          />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 50
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff",
    padding: 15
  },
  name: {
    fontSize: 20,
    fontWeight: "bold"
  },
  error: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonContainer: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#0066CC',
    borderRadius: 8,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center',
    margin: 3,
  }
});

export default AppsScreen;
