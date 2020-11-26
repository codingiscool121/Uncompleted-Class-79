import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Keyboard, TextInput, Modal, ScrollView, Alert } from 'react-native';
import firebase from 'firebase';
import db from '../config'
import { render } from 'react-dom';
import MyHeader from '../Components/Header';

export default class BookDonateScreen extends React.Component{
    constructor(props){
        super(props);
        this.state={
            requestedBookList: [],
        }
        this.requestref = null;
    }
    getrequestedbook=()=>{
        this.requestref = db.collection('Request_Books').onSnapshot(SnapShot=>{
            var books = SnapShot.docs.map(doc=>{
            doc.data()
            })
            this.setState({
                requestedBookList: books
            })
        })
    }
    componentDidMount(){
        this.getrequestedbook()
    }
    componentWillUnmount(){
        this.requestref
    }
    keyExtractor=(item,index)=>{
    index.toString()
    }
}