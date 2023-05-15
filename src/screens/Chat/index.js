import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi there!' },
    { id: 2, text: 'How are you?' },
  ]);

  const sendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = { id: messages.length + 1, text: message };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.chatBubble,
              message.id % 2 === 0 ? styles.chatBubbleLeft : styles.chatBubbleRight,
            ]}
          >
            <Text style={styles.chatText}>{message.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'flex-end',
  },
  chatContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  chatBubble: {
    backgroundColor: '#fff',
    maxWidth: '70%',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  chatBubbleLeft: {
    alignSelf: 'flex-start',
    marginLeft: 16,
  },
  chatBubbleRight: {
    alignSelf: 'flex-end',
    marginRight: 16,
    backgroundColor: '#FFB98F',
  },
  chatText: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
  },
  sendButton: {
    backgroundColor: '#F3640D',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  sendButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Chat;
