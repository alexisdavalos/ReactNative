import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home.js'
import ReviewDetails from '../screens/reviewDetails.js';

const screens ={
    //top of screen stack shown by default
    Home: {
        screen: Home
    },
    ReviewDetails : {
        screen: ReviewDetails
    }
}
const HomeStack = createStackNavigator(screens);

//creates an app container for the stack navigator 
export default createAppContainer(HomeStack);