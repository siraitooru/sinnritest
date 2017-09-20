var a_sum;
var s_sum;
var m_sum;
var n_sum;
var total;
var cnt;
chn = new Array("Aa","Ab","Ac","Ad","Ae","Af","Ag","Ah","Ai","Aj","Ak","Al","Sa","Sb","Sc","Sd","Se","Sf","Sg","Sh","Si","Sj","Sk","Sl","Ma","Mb","Mc","Md","Me","Mf","Mg","Mh","Mi","Mj","Mk","Ml","Na","Nb","Nc","Nd","Ne","Nf","Ng","Nh","Ni","Nj","Nk","Nl");
chc = 13; // チェックできる数
// チェックボックスにチェックできる数を制限する
function ttlvalue(cn){
  cnt = 0;
  for(ii=0; ii<chn.length; ii++) {
    if(document.nform.elements[chn[ii]].checked) cnt++;
  }
  if(cnt > chc) {
    alert("チェックできる項目は" + chc + "個までです");
    document.nform.elements[cn].checked = false;
  }
}
//(1)指定したグループ名の値を合計する関数
function sum_chk_value(gname){
var r= document.getElementsByName(gname);
var i;
var sum=0;
for (i=0; i<r.length; i++) {
if (r[i].checked == true) {
sum+=parseInt(r[i].value,10);
}//endif
}//next
return (sum); 
}//function
   
   

//------------------------------------------
//(2)クリックにて実行する関数
function my_click(){
    var a_sum = parseInt(sum_chk_value("Aa")) + parseInt(sum_chk_value("Ab")) + parseInt(sum_chk_value("Ac")) + parseInt(sum_chk_value("Ad")) + parseInt(sum_chk_value("Ae")) + parseInt(sum_chk_value("Af")) + parseInt(sum_chk_value("Ag")) + parseInt(sum_chk_value("Ah")) + parseInt(sum_chk_value("Ai")) + parseInt(sum_chk_value("Aj")) + parseInt(sum_chk_value("Ak")) + parseInt(sum_chk_value("Al"));
    var s_sum = parseInt(sum_chk_value("Sa")) + parseInt(sum_chk_value("Sb")) + parseInt(sum_chk_value("Sc")) + parseInt(sum_chk_value("Sd")) + parseInt(sum_chk_value("Se")) + parseInt(sum_chk_value("Sf")) + parseInt(sum_chk_value("Sg")) + parseInt(sum_chk_value("Sh")) + parseInt(sum_chk_value("Si")) + parseInt(sum_chk_value("Sj")) + parseInt(sum_chk_value("Sk")) + parseInt(sum_chk_value("Sl"));
    var m_sum = parseInt(sum_chk_value("Ma")) + parseInt(sum_chk_value("Mb")) + parseInt(sum_chk_value("Mc")) + parseInt(sum_chk_value("Md")) + parseInt(sum_chk_value("Me")) + parseInt(sum_chk_value("Mf")) + parseInt(sum_chk_value("Mg")) + parseInt(sum_chk_value("Mh")) + parseInt(sum_chk_value("Mi")) + parseInt(sum_chk_value("Mj")) + parseInt(sum_chk_value("Mk")) + parseInt(sum_chk_value("Ml"));
    var n_sum = parseInt(sum_chk_value("Na")) + parseInt(sum_chk_value("Nb")) + parseInt(sum_chk_value("Nc")) + parseInt(sum_chk_value("Nd")) + parseInt(sum_chk_value("Ne")) + parseInt(sum_chk_value("Nf")) + parseInt(sum_chk_value("Ng")) + parseInt(sum_chk_value("Nh")) + parseInt(sum_chk_value("Ni")) + parseInt(sum_chk_value("Nj")) + parseInt(sum_chk_value("Nk")) + parseInt(sum_chk_value("Nl"));
    total = parseInt(a_sum) + parseInt(s_sum) + parseInt(m_sum) + parseInt(n_sum);
    if(total === 13){
        if(a_sum >= 7){ //sが７個以上の時
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/activetype.html";
        }
        if(s_sum>=7){//sが７個以上の時
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/servicetype.html";
        }
        if(m_sum>=7){ //sが７個以上の時
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/managetype.html";
        }
        if(n_sum>=7){ //sが７個以上の時
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/innovatetype.html";
        }
                        
        if(a_sum>s_sum && a_sum>m_sum && a_sum>n_sum && a_sum<7){//sがa,m,nより大きい時
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/activetype.html";
        }
                        
        if(s_sum>a_sum && s_sum>m_sum && s_sum>n_sum && s_sum<7){
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/servicetype.html";
        }
        if(m_sum>a_sum && m_sum>s_sum && m_sum>n_sum && m_sum<7){//mが大きい時
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/managetype.html";
        }
                        
        if(n_sum>a_sum && n_sum>s_sum && n_sum>m_sum && n_sum<7){//nが大きい時
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/innovatetype.html";
        }
                        
        if(a_sum===s_sum && a_sum>=5 && s_sum>=5){//sとaが５以上で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/as_dousuu.html";
        }
                        
        if(a_sum===m_sum && a_sum>=5 && m_sum>=5){//sとmが５以上で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/am_dousuu2.html";
        }
                        
        if(a_sum===n_sum && a_sum>=5 && n_sum>=5){//sとnが５以上で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/an_dousuu2.html";
        }
                        
        if(s_sum===m_sum && s_sum>=5 && m_sum>=5){//aとmが５以上で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/sm_dousuu2.html";
        }
                        
        if(s_sum===n_sum && s_sum>=5 && n_sum>=5){//aとnが５以上で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/sn_dousuu2.html";
        }
                        
        if(m_sum===n_sum && m_sum>=5 && n_sum>=5){//mとnが５以上で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/mn_dousuu2.html";
        }
        if(a_sum===4 && s_sum===4 && m_sum===4){//sとaとmが4で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/asm_dousuu2.html";
        }
        if(a_sum===4 && s_sum===4 && m_sum<4 && n_sum<4){//sとaとmが4で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/as_dousuu.html";
        }
        if(a_sum===4 && m_sum===4 && s_sum<4 && n_sum<4){//sとaとmが4で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/am_dousuu2.html";
        }
        if(a_sum===4 && n_sum===4 && s_sum<4 && m_sum<4){//sとaとmが4で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/an_dousuu2.html";
        }
         if(s_sum===4 && m_sum===4 && a_sum<4 && n_sum<4){//sとaとmが4で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/sm_dousuu2.html";
        }
         if(s_sum===4 && n_sum===4 && a_sum<4 && m_sum<4){//sとaとmが4で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/sn_dousuu2.html";
        }
         if(m_sum===4 && n_sum===4 && a_sum<4 && s_sum<4){//sとaとmが4で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/mn_dousuu2.html";
        }
        if(a_sum===4 && s_sum===4 && n_sum===4){//s,a,nが4で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/asn_dousuu2.html";
        }
        if(a_sum===4 && m_sum===4 && n_sum===4){//s,m,nが4で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/amn_dousuu2.html";
        }
        if(s_sum===4 && m_sum===4 && n_sum===4){//a,m,nが4で同数の時
            alert("次のテストに移ります。");
            location.href = "https://sirai-cloned2-sirai.c9users.io/workspace/bootstrap-3.3.7-dist/smn_dousuu2.html";
        }
    }
}//function