import { Text, View } from "react-native";
import React from "react";
import { Container } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header/Header";

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <Container>
          <Header />
        </Container>
      </View>
    </SafeAreaView>
  );
}
