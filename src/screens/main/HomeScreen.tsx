import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Phillboards AR</Text>
        <Text style={styles.subtitle}>Virtual Billboards in Augmented Reality</Text>
      </View>

      <Card>
        <Text style={styles.cardTitle}>Welcome to Phillboards AR</Text>
        <Text style={styles.cardText}>
          Experience advertising in a whole new way with augmented reality billboards.
          Place virtual billboards in your real-world environment and interact with them.
        </Text>
        <Button
          title="Start AR Experience"
          onPress={() => navigation.navigate('AR' as never)}
          style={styles.button}
        />
      </Card>

      <Card>
        <Text style={styles.cardTitle}>Your Billboards</Text>
        <Text style={styles.cardText}>
          View and manage your virtual billboards. Create new ones or edit existing ones.
        </Text>
        <Button
          title="View Billboards"
          onPress={() => navigation.navigate('Billboards' as never)}
          style={styles.button}
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000000',
  },
  cardText: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 16,
    lineHeight: 24,
  },
  button: {
    marginTop: 8,
  },
}); 