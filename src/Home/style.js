import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

module.exports = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.black,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    borderColor: colors.theme,
    fontSize: 18,
    fontWeight: '800',
    color: colors.white,
    margin: 15,
  },
  title: {
    fontSize: 18,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 21
  },
  bottomBar: {
    postion: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    padding: 14,
    backgroundColor: colors.theme,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnAdd: {
    marginRight: 10
  },
  txtTotalItems: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.black,
  },
  txtTab: {
    marginRight: 5, 
    fontSize: 18, 
    fontWeight: '500',
    color: colors.black,
  },
  tabContainer: {
    flexDirection: 'row', 
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  img: {
    height: '100%',
    width: '100%'
  },
  deleteImg: {
    height: 16,
    width: 16,
  },
  doneImg: {
    position: 'absolute',
    right: 30,
    top: -10,
    height: 20,
    width: 16
  },
  addTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addImg: {
    height: 18,
    width: 18,
  },
  checkItemContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerContainer: {
    paddingHorizontal: 22,
    marginTop: 10,
    paddingVertical: 14,
    backgroundColor: colors.theme
  },
  activeDot: {
    position: 'absolute',
    bottom: -15,
    left: '40%',
    height: 4,
    width: 4,
    borderRadius: 2,
    backgroundColor: colors.black,
  },
});
