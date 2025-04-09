<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Unicorn WebGL Demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    html, body {
      margin: 0;
      height: 100%;
      background: #000;
    }
    [data-us-project] {
      width: 100vw;
      height: 100vh;
    }
  </style>
</head>
<body>
  <div data-us-project="8w4sNWrxykHfaylDVaBd"></div>

  <script type="text/javascript">
    !function(){
      if (!window.UnicornStudio) {
          window.UnicornStudio = {isInitialized: false};
          var i = document.createElement("script");
          i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.7/dist/unicornStudio.umd.js";
          i.onload = function(){
              if (!window.UnicornStudio.isInitialized) {
                  let attempts = 0;
                  let maxAttempts = 10;

                  const checkContainer = setInterval(() => {
                      const container = document.querySelector('[data-us-project="8w4sNWrxykHfaylDVaBd"]');
                      if (container) {
                          UnicornStudio.init();
                          window.UnicornStudio.isInitialized = true;
                          clearInterval(checkContainer);
                      } else if (attempts >= maxAttempts) {
                          clearInterval(checkContainer);
                      }
                      attempts++;
                  }, 500);
              }
          };
          (document.head || document.body).appendChild(i);
      }
    }();
  </script>
</body>
</html>
