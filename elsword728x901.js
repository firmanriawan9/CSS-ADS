<style>
 .alert2 {
    position: relative;
    width: 728px;
    height: 90px;
    color: white;
    overflow: hidden;
}
.alert2.warning2 {background-image: url("https://3.bp.blogspot.com/-CgOly6RCkak/WeiZzNZcq4I/AAAAAAAAAlQ/OWmhyK76f2oIC9DYpkTdK7NAFqGg3SKYgCLcBGAs/s1600/11150716280858933248.jpg");}
.closebtn2 {
    background: #cccccc;
    width: 15px;
    height: 15px;
    text-align: center;
    padding: 1px;
    color: #66b3ff;
    font-family: verdana;
    float: right;
    font-size: 18px;
    line-height: 10px;
    cursor: pointer;
    transition: 0.3s;
}
.closebtn2:hover {
    background: #737373;
    color: white;
}
.install {
    position: absolute;
    top: 77%;
    width: 102%;
    text-align: center;
}
</style>
 <div class="alert2 warning2">
     <span class="closebtn2">�</span>
          <br />
     <div class="install">
          <a href="https://goo.gl/YKvCAa"><img src="" alt="" title="Click Here" style="height: 80px; width: 80px;" />
          </a>
     </div>
</div>

<script>
var close = document.getElementsByClassName("closebtn2");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}
</script>