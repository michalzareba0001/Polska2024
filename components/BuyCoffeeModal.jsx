import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Coffee from '../assets/images/cup-of-drink-ico.png'

const BuyCoffeeModal = ({ isVisible, onClose }) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.ModalContainer}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '90%' }}>
          <TouchableOpacity onPress={onClose} style={styles.closeBtn} accessibilityLabel='close button'>
            <Text style={styles.closeBtnText}>x</Text>
          </TouchableOpacity>
          <View style={styles.buyCoffeeView}>
            <Text style={styles.bigText}>Podoba Ci się ta gra?</Text>
            <Text style={styles.middleText}>Postaw nam kawę:</Text>
            <TouchableOpacity style={styles.buyCoffeeBtn}>
              <Image source={Coffee} style={styles.coffeeImg} />
              <Text style={styles.bigText}>3,50 zł</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.teamView}>
            <Text style={[styles.boldText, styles.middleText, {marginBottom: 5}]}>Zespół:</Text>
            <Text style={styles.boldText}>Michał Zaręba</Text>
            <Text>(Project manager, Head developer)</Text>
            <Text style={styles.boldText}>Diana Zaręba</Text>
            <Text>(Narrative designer)</Text>
            <Text style={styles.boldText}>Laura Kszczanowicz</Text>
            <Text>(Narrative designer)</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default BuyCoffeeModal

const styles = StyleSheet.create({
  ModalContainer: {
    flex: 1,
  },
  closeBtn: {
    position: 'absolute',
    top: 5,
    right: 15,
  },

  closeBtnText: {
    fontWeight: '600',
    fontSize: 30,
  },

  buyCoffeeView: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },

  bigText: {
    fontSize: 20,
    fontWeight: '700'
  },

  middleText: {
    fontSize: 16,
  },

  buyCoffeeBtn: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 20,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',

  },

  coffeeImg: {
    width: 80,
    height: 80,
  },

  teamView: {
    marginTop: 20,
  },

  boldText: {
    fontWeight: '700',
  }
})