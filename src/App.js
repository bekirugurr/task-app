import { useState } from "react";
import "./App.css";
import Table from "./components/Table.jsx";
import Header from "./components/Header";


function App() {
  const [isTableVisible, setIsTableVisible] = useState(true);

  return (
    <main className="mx-5">
      <Header
        isTableVisible={isTableVisible}
        setIsTableVisible={setIsTableVisible}
      />
      {/*//! Aşağıda isTableVisible'ı  prop olarak göndermeden burada da {isTableVisible && <Table/>} şeklinde conditional rendering yapabilirdim. Ama o zaman her hide/show işleminde seçili satırlar, belirlediğimiz tabloda bir seferde kaç satır gözükeceği ve kaçıncı tablo sayfası gözükeceği seçimleri siliniyor. Bunu engelemek için isTableVisible'ı  prop olarak gönderdim */}
      <Table
        isTableVisible={isTableVisible}
      />
    </main>
  );
}

export default App;
