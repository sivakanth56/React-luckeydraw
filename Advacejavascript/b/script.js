


console.log("hi sivsksnth")




console.log("hi sagar")

<style>
    h1 {
      text-align: center;
    }
    .lottery-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    .box {
      width: 180px;
      height: 40px;
      background-color: rgb(243, 243, 88);
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 20px;
      margin: 5px;
    }
    .lottery-sheet-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  </style>
  <body>
    <h1>Lottery game</h1>
    <div class="lottery-container">
      <div class="lottery-sheet-container" id="lotterySheetContainer">
        <!-- <div class="box">1. 100 cash</div> -->
        <!-- <div class="box">2. Toy car</div>
        <div class="box">2. Toy car</div>
        <div class="box">2. Toy car</div> -->
      </div>
      <h2 id="result"></h2>
      <button id="pickNumberBtn">Pick a number</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>
