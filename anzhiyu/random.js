var posts=["2026/06/19/中年爸爸的撸铁日常（一）/","2026/06/18/冲刺奥数历险记（一)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };