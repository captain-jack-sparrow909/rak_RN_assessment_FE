import ConfirmationIconComponent from "@/components/ConfirmationIconComponent";
import RAKLogoComponent from "@/components/RAKLogoComponent";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SubmissionSuccess = () => {
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <RAKLogoComponent />
        </View>
      <Text style={styles.successText}>Successfully Submitted!</Text>
      <ConfirmationIconComponent />
      <Text style={styles.message}>
        Our representative will get in touch with you shortly
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  icon: {
    width: 220,
    height: 220,
  },
  logo: {
    marginTop: -120
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 30,
  },
  successText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50", 
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
    marginTop: 10,
  },
});

export default SubmissionSuccess;
