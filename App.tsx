import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from './context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './screens/HomeScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import BudgetScreen from './screens/BudgetScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar style="light" />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                switch (route.name) {
                  case 'Home':
                    iconName = focused ? 'home' : 'home-outline';
                    break;
                  case 'Statistics':
                    iconName = focused ? 'stats-chart' : 'stats-chart-outline';
                    break;
                  case 'Add':
                    iconName = focused ? 'add-circle' : 'add-circle-outline';
                    break;
                  case 'Budget':
                    iconName = focused ? 'wallet' : 'wallet-outline';
                    break;
                  case 'Profile':
                    iconName = focused ? 'person' : 'person-outline';
                    break;
                  default:
                    iconName = 'help-circle-outline';
                }

                return <Ionicons name={iconName as any} size={size} color={color} />;
              },
              tabBarStyle: styles.tabBar,
              tabBarActiveTintColor: '#BB86FC',
              tabBarInactiveTintColor: '#888',
              headerStyle: styles.header,
              headerTintColor: '#fff',
              headerTitleStyle: styles.headerTitle,
            })}
          >
            <Tab.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                title: 'Overview'
              }}
            />
            <Tab.Screen 
              name="Statistics" 
              component={StatisticsScreen}
              options={{
                title: 'Analytics'
              }}
            />
            <Tab.Screen 
              name="Add" 
              component={AddExpenseScreen}
              options={{
                title: 'Add Expense'
              }}
            />
            <Tab.Screen 
              name="Budget" 
              component={BudgetScreen}
              options={{
                title: 'Budgets'
              }}
            />
            <Tab.Screen 
              name="Profile" 
              component={ProfileScreen}
              options={{
                title: 'Profile'
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1E1E1E',
    borderTopWidth: 0,
    elevation: 0,
    height: 60,
    paddingBottom: 8,
  },
  header: {
    backgroundColor: '#121212',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
