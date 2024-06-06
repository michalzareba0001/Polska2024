import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import Modal from 'react-native-modal';
import Coffee from '../assets/images/share-icon.png';

const BuyCoffeeModal = ({ isVisible, onClose }) => {

  const shareApp = () => {
    const appLink = '[LINK_DO_TWOJEJ_APLIKACJI]';
    const message = `Cześć! Polecam Ci tę grę: ${appLink}`;
    Linking.openURL(`whatsapp://send?text=${encodeURIComponent(message)}`);
  };
  
  return (
    <Modal 
      isVisible={isVisible} 
      onBackdropPress={onClose} 
      style={styles.modalContainer}
      accessibilityLabel="Modal Udostępnij"
    >
      <View style={styles.modalContent}>
        <View style={styles.modalInnerContent}>
          <TouchableOpacity 
            onPress={onClose} 
            style={styles.closeBtn} 
            accessibilityLabel="Przycisk zamknij"
            accessibilityRole="button"
          >
            <Text style={styles.closeBtnText}>x</Text>
          </TouchableOpacity>
          <View style={styles.buyCoffeeView}>
            <Text 
              style={styles.bigText}
              accessibilityLabel="Podoba Ci się ta gra?"
              accessibilityRole="header"
            >
              Podoba Ci się ta gra?
            </Text>
            <Text 
              style={styles.middleText}
              accessibilityLabel="Podziel się nią ze znajomymi"
            >
              Podziel się nią ze znajomymi:
            </Text>
            <TouchableOpacity 
              style={styles.buyCoffeeBtn} 
              onPress={shareApp} 
              accessibilityRole="button" 
              accessibilityLabel="Podziel się grą ze znajomymi"
            >
              <Image 
                source={Coffee} 
                style={styles.coffeeImg} 
                accessibilityLabel="Ikona udostępniania"
              />
              <Text style={styles.bigText}>Udostępnij</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.teamView}>
            <Text 
              style={[styles.boldText, styles.middleText, styles.marginBottom5]}
              accessibilityLabel="Zespół"
              accessibilityRole="header"
            >
              Zespół:
            </Text>
            <Text style={styles.boldText} accessibilityLabel="Michał Zaręba (Project manager, Head developer)">Michał Zaręba</Text>
            <Text accessibilityLabel="Project manager, Head developer">(Project manager, Head developer)</Text>
            <Text style={styles.boldText} accessibilityLabel="Diana Zaręba (Narrative designer)">Diana Zaręba</Text>
            <Text accessibilityLabel="Narrative designer">(Narrative designer)</Text>
            <Text style={styles.boldText} accessibilityLabel="Laura Kszczanowicz (Narrative designer)">Laura Kszczanowicz</Text>
            <Text accessibilityLabel="Narrative designer">(Narrative designer)</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

BuyCoffeeModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BuyCoffeeModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalInnerContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
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
    fontWeight: '700',
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
    justifyContent: 'center',
    minHeight: 120,
    minWidth: 120,
    gap: 10,
  },
  coffeeImg: {
    width: 50,
    height: 50,
  },
  teamView: {
    marginTop: 20,
  },
  boldText: {
    fontWeight: '700',
  },
  marginBottom5: {
    marginBottom: 5,
  },
});
