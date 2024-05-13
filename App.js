import * as React from 'react';
import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native';

export default function App() {
  const initialHTMLContent = `
<html>
  <head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Tarot Card Selector</title>
    <link rel="stylesheet" type="text/css" href="https://www.halildemir.net/tarot/tensorithm-tarot-main/output.css">
    <link rel="icon" href="https://www.halildemir.net/tarot/tensorithm-tarot-main/images/favicon2.png" type="image/x-icon">
  </head>

  <body>

    <div class="container">
      <div class="left-column">
<p>
ASK YOUR QUESTION. BE SPECIFIC.
</p>
    <div class="container2">
      <div class="text-center my-20">
        <button id="draw-card-1-button" class="px-4 py-2 bg-blue-500 text-white rounded">1</button>
        <button id="draw-card-3-button" class="px-4 py-2 bg-blue-500 text-white rounded">3</button>
        <button id="draw-card-kelt-button" class="px-4 py-2 bg-blue-500 text-white rounded">Kelt</button>
      </div>
    </div>

    </div>
<br><br><br>
    <div id="card-container" class="flex flex-wrap justify-center"></div>
    <br><br><br>

	
      </div>

      <script src="https://www.halildemir.net/tarot/tensorithm-tarot-main/tensorscript.js"></script>
         

  </body>
</html>

`;

  return (
    <View
      style={{
        flex: 1,
      }}>
      <WebView
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          html: initialHTMLContent,
          baseUrl: 'https://www.halildemir.net/tarot/tensorithm-tarot-main/',
        }}
      />
    </View>
  );
}
