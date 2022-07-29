
  movepainel=function(){
    console.log("0"+document.getElementById('painel').style.getPropertyValue('left'))
    let can = document.getElementById('painel').style.getPropertyValue('left');
    if(can.startsWith('8') || can == ''){

        document.getElementById('painel').style='left:50px';
        console.log("1-"+document.getElementById('painel').style.getPropertyValue('left'));
    }else{
        document.getElementById('painel').style='left:80px;';
        console.log("2-"+document.getElementById('painel').style.getPropertyValue('left'))

    }

  };

