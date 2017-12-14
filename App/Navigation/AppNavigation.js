import { StackNavigator } from 'react-navigation'
import SearchScreen from '../Containers/SearchScreen'
import TextableScreen from '../Containers/TextableScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SearchScreen: { screen: SearchScreen },
  TextableScreen: { screen: TextableScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
initialRouteName : 'TextableScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
