import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fcf2f2',
  },
  ViewCont: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backIcon: {
    width: 35,
    height: 35,
  },
  logoContainer: {
    width: 310,
    height: 320,
  },
  FieldView: {
    flex: 1,
    backgroundColor: '#a30303',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  label: {
    color: '#d4c9c9',
    marginLeft: 7,
    fontSize: 16,
    paddingRight: 15,
  },
  BtnPress: {
    paddingVertical: 5,
    backgroundColor: '#fca28d',
    borderRadius: 15,
    alignItems: 'center',
  },
  BtnText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#000',
  },
  signupPrompt: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  signupText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 16,
  },
  signupLink: {fontWeight: '900', color: '#d4c9c9'},
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalBtn: {
    backgroundColor: '#fca28d',
    padding: 7,
    borderRadius: 5,
    marginTop: 12,
  },
  modalBtnText: {
    fontSize: 16,
    fontWeight: '700',
  },
});
