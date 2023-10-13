const firebaseConfig = {
    apiKey: "AIzaSyAiBgQbmR0EURQ5Bv3nqCX3EnaP9MzJZ0A",
    authDomain: "ilkfirebase-d280e.firebaseapp.com",
    projectId: "ilkfirebase-d280e",
    storageBucket: "ilkfirebase-d280e.appspot.com",
    messagingSenderId: "177666695248",
    appId: "1:177666695248:web:a67632557bf4d740fe7155"
  };
  firebase.initializeApp(firebaseConfig)
  
  var db=firebase.database().ref()

  $('button').on('click',function(){
    var mesage=$('#mesaj').val()
    var ad=$('#ad').val()
    db.set({
        mesage,
        ad
    })
  })


db.on('value',function(snapshot){
   var x=snapshot.val()
   var p=document.createElement('p')
   p.innerText=`${x.ad} : ${x.mesage}`
   $('.message-box').append(p)
})
