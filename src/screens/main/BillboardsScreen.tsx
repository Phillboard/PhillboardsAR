import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Billboard {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
}

type RootStackParamList = {
  Home: undefined;
  AR: { billboardId?: string };
  Billboards: undefined;
  CreateBillboard: undefined;
  EditBillboard: { billboardId: string };
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const mockBillboards: Billboard[] = [
  {
    id: '1',
    title: 'City Center Billboard',
    description: 'A large billboard in the heart of the city',
    location: 'Downtown',
    imageUrl: 'https://example.com/billboard1.jpg',
  },
  {
    id: '2',
    title: 'Shopping Mall Display',
    description: 'Interactive billboard at the main entrance',
    location: 'Westfield Mall',
    imageUrl: 'https://example.com/billboard2.jpg',
  },
];

export const BillboardsScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const [billboards, setBillboards] = useState<Billboard[]>(mockBillboards);

  const renderBillboard = ({ item }: { item: Billboard }) => (
    <Card>
      <Text style={styles.billboardTitle}>{item.title}</Text>
      <Text style={styles.billboardDescription}>{item.description}</Text>
      <Text style={styles.billboardLocation}>Location: {item.location}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="View in AR"
          onPress={() => navigation.navigate('AR', { billboardId: item.id })}
          style={styles.button}
        />
        <Button
          title="Edit"
          onPress={() => navigation.navigate('EditBillboard', { billboardId: item.id })}
          style={[styles.button, styles.editButton]}
        />
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Billboards</Text>
        <Button
          title="Create New"
          onPress={() => navigation.navigate('CreateBillboard')}
          style={styles.createButton}
        />
      </View>
      <FlatList
        data={billboards}
        renderItem={renderBillboard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  createButton: {
    backgroundColor: '#FFFFFF',
  },
  list: {
    padding: 16,
  },
  billboardTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: '#000000',
  },
  billboardDescription: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 8,
  },
  billboardLocation: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
  },
  editButton: {
    backgroundColor: '#666666',
  },
}); 