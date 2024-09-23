import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Button } from 'react-native';

interface Room {
  id: string;
  name: string;
  status: string;
}

const roomsData: Room[] = [
  { id: '1', name: 'Phòng Đơn', status: 'Trống' },
  { id: '2', name: 'Phòng Đôi', status: 'Đã Đặt' },
  { id: '3', name: 'Phòng VIP', status: 'Trống' },
  { id: '4', name: 'Phòng Gia Đình', status: 'Đã Đặt' },
];

export default function HotelManagementApp() {
  const renderItem = ({ item }: { item: Room }) => (
    <View style={styles.roomItem}>
      <Text style={styles.roomName}>{item.name}</Text>
      <Text style={styles.roomStatus}>{item.status}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Quản Lý Khách Sạn</Text>
      <FlatList
        data={roomsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Thêm Phòng" onPress={() => alert('Thêm phòng mới')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  roomItem: {
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  roomName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  roomStatus: {
    fontSize: 16,
    color: 'gray',
  },
});
