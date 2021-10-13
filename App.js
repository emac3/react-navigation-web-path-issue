import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Button, Text, View } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Update param"
        onPress={() =>
          navigation.setParams({
            p: "bar",
          })
        }
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  const linking = {
    prefixes: [],
    screens: {
      Home: { path: "home" },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ p: "foo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
