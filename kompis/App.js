import React, { Component } from 'react';
import {StyleSheet, Text, View,Image,ScrollView} from 'react-native'

export default class App extends Component {
  render() {
    return (   
      <View style={{flex: 1}}>
        <ScrollView style={{flex:1, backgroundColor:'#f5f7f7'}}>
        <View style={{marginHorizontal:17, flexDirection:'row',paddingTop:15}}>
          <View style={{ backgroundColor:'#92e2fd',position:'relative', flex:1}}>
          <Image source={require('./icon/logo kompis blue.png')} style={{position:'absolute',top:5, left:5}}/>
          </View>
          <View style={{marginHorizontal:17, marginTop:8}}>
          <View style={{flexDirection:'row', justifyContent:'space-between',backgroundColor:'#92e2fd', borderTopLeftRadius:4, borderTopRightRadius:4,padding:14}}>
            <Image source={require('./icon/shape.png')}/>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',backgroundColor:'#92e2fd', borderTopLeftRadius:4, borderTopRightRadius:4,padding:14}}>
            <Image source={require('./icon/notification_bell.png')}/>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between',backgroundColor:'#92e2fd', borderTopLeftRadius:4, borderTopRightRadius:4,padding:14}}>
            <Image source={require('./icon/qr_code_5.png')}/>
          </View>
          </View>
        </View>
        {/* BANK */}
        <View style={{marginHorizontal:17, marginTop:8}}>
        <View style={{flexDirection:'row', justifyContent:'space-between',backgroundColor:'#ffffff', borderTopLeftRadius:4, borderTopRightRadius:4,padding:14}}>
          <Image source={require('./icon/Banksampahberkah.png')}/>
          <Text style={{fontSize: 18, fontWeight:'bold', color:'#92e2fd'}}>Rp.290.000</Text>
        </View>
        <View style={{flexDirection:'row',paddingTop:20,paddingBottom:14,backgroundColor:'#ffffff'}}>
        <View style={{flex: 1,alignItems:'center'}}>
          <Image source={require('./icon/history.png')}/>
          <Text style={{fontSize:10, fontWeight:'normal',color:'#353b50',marginTop:15, borderBottomLeftRadius:4, borderBottomLeftRadius:4}}>History</Text>
        </View>
        <View style={{flex: 1,alignItems:'center'}}>
          <Image source={require('./icon/transfer.png')}/>
          <Text style={{fontSize:10, fontWeight:'normal',color:'#353b50',marginTop:15}}>Transfer</Text>
        </View>
        <View style={{flex: 1,alignItems:'center'}}>
          <Image source={require('./icon/tarik.png')}/>
          <Text style={{fontSize:10, fontWeight:'normal',color:'#353b50',marginTop:15}}>Tarik Tunai</Text>
        </View>
        </View> 
        </View>
        {/* Main feature */}
        <Text>Menu Bank Sampah Kompis</Text>
        <View style={{flexDirection:'row', flexWrap:'wrap', marginHorizontal: 16,marginTop: 18}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%',marginBottom:18}}>
          <View style={{width:'25%', alignItems:'center', alignItems:'center'}}>
            <View style={{width:72,height:84,borderWidth:1,borderColor:'#21353b50',borderRadius:5, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('./icon/group_14.png')}/>
            </View>
            <Text style={{fontSize:9, fontWeight:'normal',textAlign:'center',marginTop:6}}>Transaksi Nasabah</Text>
          </View>
          <View style={{width:'25%', alignItems:'center'}}>
            <View style={{width:72,height:84,borderWidth:1,borderColor:'#21353b50',borderRadius:5, justifyContent:'center', alignItems:'center'}}>
              <Image source={require('./icon/trash.png')}/>
            </View>
            <Text style={{fontSize:9, fontWeight:'normal',textAlign:'center',marginTop:6}}> Jual Sampah</Text>
          </View>
          <View style={{width:'25%', alignItems:'center'}}>         
            <View style={{width:72,height:84,borderWidth:1,borderColor:'#21353b50',borderRadius:5, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('./icon/throw_to_paper_bin.png')}/>
            </View>
            <Text style={{fontSize:9, fontWeight:'normal',textAlign:'center',marginTop:6}}>Kategori Sampah</Text>
          </View>
          <View style={{width:'25%', alignItems:'center'}}>         
            <View style={{width:72,height:84,borderWidth:1,borderColor:'#21353b50',borderRadius:5, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('./icon/group_12_copy.png')}/>
            </View>
            <Text style={{fontSize:9, fontWeight:'normal',textAlign:'center',marginTop:6}}>Laporan Sampah</Text>
          </View>
          </View>
          <View style={{justifyContent:'space-between', flexDirection:'row',width:'100%',marginBottom:18}}>
          <View style={{width:'25%', alignItems:'center'}}>          
            <View style={{width:72,height:84,borderWidth:1,borderColor:'#21353b50',borderRadius:5, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('./icon/team.png')}/>
            </View>
            <Text style={{fontSize:9, fontWeight:'normal',textAlign:'center',marginTop:6}}>Daftar Contact</Text>
          </View>
          <View style={{width:'25%', alignItems:'center'}}>           
            <View style={{width:72,height:84,borderWidth:1,borderColor:'#21353b50',borderRadius:5, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('./icon/group.png')}/>
            </View>
            <Text style={{fontSize:9, fontWeight:'normal',textAlign:'center',marginTop:6}}>Struktur</Text>
          </View>
            <View style={{width:'25%', alignItems:'center'}}>           
            <View style={{width:72,height:84,borderWidth:1,borderColor:'#21353b50',borderRadius:5, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('./icon/gift_box.png')}/>
            </View>
            <Text style={{fontSize:9, fontWeight:'normal',textAlign:'center',marginTop:6}}>Tukar Poin</Text>
          </View>
          <View style={{width:'25%', alignItems:'center'}}>    
            <View style={{width:72,height:84,borderWidth:1,borderColor:'#21353b50',borderRadius:5, justifyContent:'center', alignItems:'center'}}>
            <Image source={require('./icon/logo_kompis_blue_copy.png')}/>
            </View>
            <Text style={{fontSize:9, fontWeight:'normal',textAlign:'center',marginTop:6}}>Tabel Harga Kompis</Text>  
          </View>
          </View>
        </View>
        <View style={{height:17, backgroundColor:'#f5f7f7',marginTop: 20}}>  
        </View>
        {/* Info dan Promo */}
        <View style={{paddingTop: 16, paddingHorizontal:16}}>
          <View >
            <Text style={{fontSize:16,fontWeight:'bold'}}>Info dan Promo</Text>
            <Text style={{fontSize:10, fontWeight:'500',color:'grey',marginTop:15}}>Semua Info dan Promo yang ada di kompis</Text>
            <Text style={{fontSize: 12, fontWeight:'normal', color:'#4a90e2'}}>Lihat Semua</Text>
          </View>
          <View>
              <Image source={require('./icon/mask.jpg')} style={{height: 100, width:'100%', borderRadius:4}}/>
          </View>
          <View style={{paddingTop:16, paddingBottom:20}}>
          <Text style={{fontSize:16,fontWeight:'bold'}}>List Penjemputan</Text>
          </View>
        </View>
        
        </ScrollView>
        <View style={{height: 54, flexDirection:'row', backgroundColor:'white'}}>
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Image style={{width:26, height:26 }} source={require('./icon/home.png')} />
          <Text style={{fontSize:10, color:'#353b50',marginTop:4, color:'#92e2fd'}}>Home</Text>
        </View>
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Image style={{width:26, height:26 }} source={require('./icon/order.png')} />
          <Text style={{fontSize:10, color:'#353b50',marginTop:4, color:'#92e2fd'}}>Orders</Text>
        </View>
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Image style={{width:26, height:26 }} source={require('./icon/help.png')} />
          <Text style={{fontSize:10, color:'#353b50',marginTop:4, color:'#92e2fd'}}>Help</Text>
        </View>
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Image style={{width:26, height:26 }} source={require('./icon/inbox.png')} />
          <Text style={{fontSize:10, color:'#353b50',marginTop:4, color:'#92e2fd'}}>Inbox</Text>
        </View>
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Image style={{width:26, height:26 }} source={require('./icon/account.png')} />
          <Text style={{fontSize:10, color:'#353b50',marginTop:4, color:'#92e2fd'}}>Account</Text>
        </View>    
      </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
   
})
