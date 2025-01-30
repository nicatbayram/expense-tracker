import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const { theme } = useTheme();

  const menuItems = [
    { icon: 'person-outline', label: 'Account Settings' },
    { icon: 'notifications-outline', label: 'Notifications' },
    { icon: 'shield-outline', label: 'Privacy & Security' },
    { icon: 'card-outline', label: 'Payment Methods' },
    { icon: 'help-circle-outline', label: 'Help & Support' },
    { icon: 'log-out-outline', label: 'Sign Out' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.header, { backgroundColor: theme.cardBackground }]}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <Text style={[styles.name, { color: theme.text }]}>John Doe</Text>
        <Text style={[styles.email, { color: theme.textSecondary }]}>john.doe@example.com</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity 
            key={index}
            style={[styles.menuItem, { backgroundColor: theme.cardBackground }]}
          >
            <Ionicons name={item.icon as any} size={24} color={theme.text} />
            <Text style={[styles.menuLabel, { color: theme.text }]}>{item.label}</Text>
            <Ionicons name="chevron-forward" size={24} color={theme.textSecondary} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#BB86FC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
  },
  menuContainer: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  menuLabel: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
  },
});