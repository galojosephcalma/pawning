import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 headers: HttpHeaders;
  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }
  addUser(data){
    return this.http.post('http://localhost/pawning/register_users.php', data);
  }
  addTransact(data){
    return this.http.post('http://localhost/pawning/transaction_add.php', data);
  }
  addPayment(data){
    return this.http.post('http://localhost/pawning/add_payment.php', data);
  }
  login(username){
    return this.http.get('http://localhost/pawning/login_users.php?username='+username);
  }
  getJewelry(){
    return this.http.get('http://localhost/pawning/jewelry_list.php');
  }
  getAppearance(){
    return this.http.get('http://localhost/pawning/appearance_list.php');
  }
  getTest(){
    return this.http.get('http://localhost/pawning/testing_procedure_list.php');
  }
  getKaratage(){
    return this.http.get('http://localhost/pawning/karatage_list.php');
  }
  getTransactions(){
    return this.http.get('http://localhost/pawning/transaction_list.php');
  }
  getAllTransactions(){
    return this.http.get('http://localhost/pawning/transactionAll_list.php');
  }
  getSingleTransactions(id){
    return this.http.get('http://localhost/pawning/singleTransaction.php?id='+id);
  }
  getPayments(id){
    return this.http.get('http://localhost/pawning/payments.php?id='+id);
  }
  updateTransaction(id, data){
    return this.http.put('http://localhost/pawning/updateTransaction.php?id='+id, data);
  }
}
