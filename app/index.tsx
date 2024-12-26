import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import * as AC from "@bacons/apple-colors";
import { SymbolView } from "expo-symbols";
const App = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}
    >
      <Text style={styles.description}>
        Follow the steps below to set up the accompanying iOS Safari Extension
        for React Scan.
      </Text>
      <View style={styles.steps}>
        <Text style={{ color: AC.label }}>
          1. Open the Settings app and go to Apps → Safari → Extensions → React
          Scan.
        </Text>
        <Text style={{ color: AC.label }}>
          2. Toggle on{" "}
          <Text style={{ fontWeight: "bold" }}>Allow Extensions</Text> and{" "}
          <Text style={{ fontWeight: "bold" }}>Allow in Private Browsing</Text>.
        </Text>
        <Text style={{ color: AC.label }}>
          3. Under <Text style={{ fontWeight: "bold" }}>Permissions</Text>, set
          All Websites to <Text style={{ fontWeight: "bold" }}>Allow</Text>.
        </Text>
        <Text style={{ color: AC.label }}>
          4. Open Safari and visit{" "}
          <Link href="https://evanbacon.dev">any webpage</Link> (some websites
          do not allow scripting).
        </Text>
        <Text style={{ color: AC.label }}>
          5. Tap the puzzle piece icon{" "}
          <SymbolView
            name="puzzlepiece.extension.fill"
            style={{ alignSelf: "center" }}
          />{" "}
          in the address bar.
        </Text>
        <Text style={{ color: AC.label }}>
          6. Select <Text style={{ fontWeight: "bold" }}>React Scan.</Text>
        </Text>
        <Text style={{ color: AC.label }}>
          7. If prompted, tap{" "}
          <Text style={{ fontWeight: "bold" }}>Always Allow.</Text>
        </Text>
        <Text style={{ color: AC.label }}>
          8. Confirm by tapping{" "}
          <Text style={{ fontWeight: "bold" }}>
            Always Allow on Every Website.
          </Text>
        </Text>
        <Text style={{ color: AC.label }}>
          9. Security notice: This project is entirely{" "}
          <Link href="https://github.com/EvanBacon/react-scan-safari-extension">
            open source
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Arial, sans-serif",
    padding: 20,
    maxWidth: 800,
    backgroundColor: AC.systemBackground,

    textAlign: "center",
  },
  title: {
    fontSize: 40,
    color: "#333",
  },
  description: {
    fontSize: 20,
    color: "#666",
  },
  steps: {
    color: AC.label,
    textAlign: "left",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  note: {
    fontSize: 16,
    color: "#999",
    marginTop: 20,
  },
});

export default App;
