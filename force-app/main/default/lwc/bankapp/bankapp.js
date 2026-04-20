import { LightningElement } from 'lwc';
import generateData from './generateData';

export default class BasicDatatable extends LightningElement {
    data = [];
    columns = [
        { label: 'Transaction number', fieldName: 'Name' },
        { label: 'Bank Account Name', fieldName: 'Bank_Account_Name__c'},
        { label: 'Transaction Type', fieldName: 'Transaction_Type__c' },
        { label: 'Transaction Date', fieldName: 'Transaction_Date__c' },
        { label: 'Amount', fieldName: 'Amount__c' },
    ];

    name = 'Ramakrishna Reddy';
    source = 'Salesforces admin & developer';
    handlerchange(event){
        this.name = event.target.value ;
    }
    handlerpass(event){
        this.source = event.target.value;
    }
}