<a href="https://alfo0924.github.io/javaOcpQuiz2/"> Java OCP 1Z0-819 QuizSite2 </a>
## 網站核心特色與優點

1.  **專注 OCP 考題：** 提供 34 道針對 Java OCP 1Z0-819 認證的常見選擇題型，幫助使用者熟悉考試方向[1][4][15]。
2.  **互動式測驗：** 使用者可以點選選項作答，透過實際操作來檢驗學習成果。
3.  **即時回饋與計分：** 完成測驗並提交後，立即在頁面上方顯示分數、答對題數與百分比，讓使用者快速了解自己的表現。
4.  **錯誤分析與學習指引：**
    *   **詳細結果：** 列出每一題的作答狀態（正確/錯誤）、標準答案及詳盡的解釋，幫助使用者理解錯誤原因。
    *   **弱點分析：** 根據題目預設的分類，分析使用者在哪些 Java 知識領域（如：數據類型、面向對象、Lambda 等）表現較弱，提供具體的加強方向。
5.  **友善的使用者介面 (UI/UX)：**
    *   **扁平化設計：** 視覺風格簡潔、現代。
    *   **清晰導航：** 提供「上一題」、「下一題」按鈕方便切換，並有進度提示。
    *   **狀態提示：** 選項被選中、提交後的正確/錯誤狀態都有明顯的視覺區分。
    *   **響應式設計：** 介面能適應不同螢幕大小。
6.  **重測功能：** 提供「重新測驗」按鈕，方便使用者再次練習。

## 程式碼運作邏輯原理

1.  **HTML (結構層 `index.html`)：**
    *   定義網頁的基本骨架，包含標題、分數顯示區塊 (`score-section`)、測驗區塊 (`quiz-section`)、結果區塊 (`results-section`) 以及各類按鈕。
    *   預留容器 (`quiz-container`, `results-container`, `analysis`)，讓 JavaScript 動態填入內容。
2.  **CSS (樣式層 `styles.css`)：**
    *   負責網站的視覺外觀，實現扁平化設計風格。
    *   定義顏色、字體、排版、按鈕樣式。
    *   使用 CSS class（如 `.selected`, `.correct`, `.incorrect`, `.hidden`）來控制元素的顯示狀態和樣式，JavaScript 會透過增刪這些 class 來改變介面。
    *   包含媒體查詢 (`@media`) 以實現響應式佈局。
3.  **JavaScript (行為層 `script.js`)：**
    *   **數據儲存：** 使用 `quizData` 陣列儲存所有問題、選項、正確答案、解釋和題目分類。
    *   **狀態管理：** 使用變數 (`currentQuestionIndex`, `userAnswers`, `quizSubmitted`) 追蹤目前顯示到第幾題、使用者的答案以及測驗是否已提交。
    *   **動態渲染：**
        *   `renderQuestion` 函數：根據 `currentQuestionIndex` 從 `quizData` 取得題目資料，動態生成 HTML 插入到 `quiz-container` 中，並根據 `userAnswers` 和 `quizSubmitted` 狀態設定選項樣式。
        *   `renderResults` 和 `analyzeResults` 函數：測驗提交後，遍歷 `quizData` 和 `userAnswers`，生成分數、詳細結果和分析報告的 HTML，插入到對應的 HTML 容器中。
    *   **事件處理：**
        *   為選項 (`.option`) 和按鈕 (`#prev-btn`, `#next-btn`, `#submit-btn`, `#retry-btn`) 綁定點擊事件監聽器。
        *   點擊選項時，更新 `userAnswers` 並重新渲染題目。
        *   點擊導航按鈕時，更新 `currentQuestionIndex` 並重新渲染。
        *   點擊提交按鈕時，計算分數、分析結果、渲染結果頁面，並切換顯示區塊。
        *   點擊重測按鈕時，重置狀態變數並重新開始測驗。
    *   **邏輯控制：**
        *   `updateNavButtons` 函數：根據當前題目索引和作答情況，啟用/禁用導航按鈕，顯示/隱藏提交按鈕。
        *   `calculateScore` 函數：比較 `userAnswers` 和 `quizData` 中的答案，計算得分。

