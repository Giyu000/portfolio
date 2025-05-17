//クリックでintroを非表示、mainを表示
    document.getElementById("intro").addEventListener("click", () => {
      // document.getElementById("intro") ...introという要素(<div id="intro">クリックして開始！</div>)を取得する
      // addEventListener("click", () => { ...取得した要素にクリックリスナーを登録する
      const intro = document.getElementById("intro");
      const main = document.getElementById("main");
      
      intro.classList.add("fade-out");
      // 1秒でintroを非表示 ⇒ mainを表示
          setTimeout(() => {
      intro.style.display = "none";
      main.style.display = "block";
    }, 1000); // 1000ms = 1秒
      
});