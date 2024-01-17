import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const LowLifeModal = ({ isVisible, onClose, content }) => {
    return (
      <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.ModalContainer}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text>{content}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text>Zamknij</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };

export default LowLifeModal

const styles = StyleSheet.create({
    ModalContainer: {
    },
})