navigator.getBattery().then(function(battery) {
    function updateAllBatteryInfo(){
      updateChargeInfo();
      updateLevelInfo();      
    }
    updateAllBatteryInfo();
    battery.addEventListener('chargingchange', function(){
      updateChargeInfo();
    });
    function updateChargeInfo(){
      console.log("Battery charging? "
                  + (battery.charging ? "Yes" : "No"));
    if (!battery.charging) {
        document.getElementById("icon").style.display="none"
    }
    else 
    {
        document.getElementById("icon").style.display=""
    }
                }
  
    battery.addEventListener('levelchange', function(){
      updateLevelInfo();
    });
    function updateLevelInfo(){
        var level=battery.level*234;
    document.getElementById("percent").innerHTML=battery.level * 100 + "%";
    document.getElementById("bar").style.width=level+"px";
}
  
  
  });