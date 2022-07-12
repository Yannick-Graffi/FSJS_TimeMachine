import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import About from '../pages/About';
import Search from '../pages/Search';
import WebsitePreview from '../pages/WebsitePreview';

const Tab = createBottomTabNavigator();

export default function Navigation () {
    return (  
        <Tab.Navigator>
            <Tab.Screen 
                name={'Rechercher'} 
                component={Search}
                options={{
                    tabBarIcon: () => {<AntDesign name="search1" size={24} color="black" />},
                }}/>
            <Tab.Screen 
                name={'Prévisualisation'} 
                component={WebsitePreview} 
                initialParams={{}}
                options={{
                    tabBarIcon: () => {<MaterialIcons name="preview" size={24} color="black" />}
                }}/>
            <Tab.Screen name={'À propos'} 
                component={About}
                options={{
                    tabBarIcon: () => {<AntDesign name="infocirlceo" size={24} color="black" />}
                }}
                />
        </Tab.Navigator>
    );
}
